import { Form, Container, Row, Button, Stack } from 'react-bootstrap';
import { useState } from 'react';
import BookSearch from '../components/BookSearch';
import CheckBox from '../components/CheckBox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ListCreatePage() {
    // contains jsons of all the books that are added to the list
    const [listItems, setListItems] = useState([]);
    const [listTitle, setListTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleTitleChange = (inputValue) => {
        setListTitle(inputValue);
    }

    const handleDescriptionChange = (inputValue) => {
        setDescription(inputValue);
    }

    // handles list items moving up, down, and deleting
    const handleMoveUp = (index) => {
        if (index > 0) {
          const tempList = [...listItems];
          const tempItem = tempList[index];
          tempList[index] = tempList[index - 1];
          tempList[index - 1] = tempItem;
          console.log(listItems);
          setListItems(tempList);
          console.log(listItems);
        }
    };
    
    const handleMoveDown = (index) => {
        if (index < listItems.length-1) {
            const tempList = [...listItems];
            const tempItem = tempList[index];
            tempList[index] = tempList[index + 1];
            tempList[index + 1] = tempItem;
            setListItems(tempList);
            console.log(listItems);

        }
    }

    const handleDelete = (index) => {
        const tempList = [...listItems];
        tempList.splice(index,1);
 
        setListItems(tempList);
        
    }

    // "book" is a json of all the specific book infomration. this function is passed as an argument in booksearch
    const handleSelect = (book) => {    
        setListItems([...listItems, book]);
    }


    const handleSubmit = async () => {
        const card = {
            list_title: listTitle,
            genre_id: "genre from react",
            desc: description,
            cover: listItems[0].imageLinks?.thumbnail
        }
        try {
            const listResponse = await axios.post("http://localhost:8800/lists", card);
            const listId = listResponse.data.listId
            console.log(listId)
            for (const item of listItems) {
                await axios.post("http://localhost:8800/books", {
                    list_id: listId,
                    book_title: item.title,
                    book_author: item.authors
                })
            }
            // navigate("/fantasy")
    
          } catch(err) {
            console.log(err)
          }
        
    };



    return (
        <Container fluid>
            <h1 className='title'>Create a List!</h1>
            <Form style={{ width: '500px' }} className='list-form mx-auto'>

                {/* Title */}
                <Form.Group className='mb-3 mt-5' controlId='listTitle'>
                    <Form.Label className='title-label'>Give your list a name:</Form.Label>
                    <Form.Control required type="text" placeholder='Title' value={listTitle} onChange={(event) => handleTitleChange(event.target.value)}/>
                </Form.Group>

                {/* Description */}

                <Form.Group className='mt-5' controlId='listDescription'>
                    <Form.Label className='description-label'>Give a description (max 250 words)</Form.Label>
                    <Form.Control as='textarea' maxLength={250} placeholder='Max 250 Words' value={description} onChange={(event) => handleDescriptionChange(event.target.value)}/>
                </Form.Group>

                {/* Genres */}
                <Form.Group controlId='listGenres' className='mt-5'>
                    <Form.Label className='genre-label'>Select genres for your list:</Form.Label>
                    <Row lg={4} md={3} sm={3}>
                        <CheckBox genre="Fantasy" />
                        <CheckBox genre="Mystery" />
                        <CheckBox genre="Romance" />
                        <CheckBox genre="Sci-Fi" />
                        <CheckBox genre="Thriller" />
                        <CheckBox genre="Historical" />
                        <CheckBox genre="Dystopian" />
                        
                    </Row>
                </Form.Group>

                {/* Add Books */}
                {/* Searches books and lets you select them to add */}
                <BookSearch parentHandle={handleSelect}/>

                {/* Actual list itself */}
                <Container fluid className='mt-3'>
     
                        <Stack gap={5} direction='vertical'>
                            {listItems.map((listelement, index) => (
                                <Stack gap={3} direction='horizontal' key={index} className='list-item'>
                                   
                                    <Stack gap={2} direction='horizontal' style={{display: 'flex'}}>
                                        <p style={{alignSelf: 'flex-start'}}>{index+1}.</p>
                                        <img src={listelement.imageLinks?.smallThumbnail} alt={listelement} />
                                        <div style={{alignSelf: 'flex-start'}}>
                                            <p style={{ fontWeight: 'bold', marginBottom: '1px' }} className=''>{listelement.title}</p>
                                            <p className='text-muted'>by {listelement.authors}</p>
                                        </div>
                                    </Stack>

                                    <Stack gap={5} direction='vertical' className='test' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px'}}>
                                        <div style={{display: 'flex', flexDirection: 'column',gap: '5px'}}>
                                            <Button onClick={() => handleMoveUp(index)} className='btn-sm move-up-btn' size='sm'>↑</Button>
                                            <Button onClick={() => handleMoveDown(index)} className='btn-sm move-down-btn' size='sm'>↓</Button>
                                        </div>
                                        <div style={{marginTop: 'auto'}}>
                                            <Button className='dlt-btn' onClick={() => handleDelete(index)} size='sm' style={{backgroundColor: '#E52E2E'}}>
                                                <img style={{ maxWidth: "100%", maxHeight: "20px" }} src='delete-button.svg' />
                                        </Button>
                                        </div>
                                    </Stack>
                                
                                
                                </Stack>
                            ))}
                        </Stack>
 
                </Container>
                
                <Stack direction='horizontal'>
                    <Button type='button' className='ms-auto mt-5' size='' onClick={handleSubmit}>Publish</Button>
                </Stack>
    
                
            </Form>

        </Container>
    )
}



export default ListCreatePage;



