import { Form, Container, Col, Row, Button, Stack } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';

function BookSearch({ parentHandle, parentHandle2 }) {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyDzws9hjH0OYKrs6Lhs_OSCIKNEEYeb93Y");
    const [inputValue, setInputValue] = useState('');

    const handleSelect = (bookTitle) => {
        // bookTitle.preventDefault();
        parentHandle(bookTitle);
        // parentHandle2(bookImage);
        setInputValue('');


    }


    const handleChange = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);


        const book = event.target.value;

        setBook(book);



        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=10")
        .then(response => {setResult(response.data.items)})
        .catch(error => {
            console.error(error);
            });

    }
    
    return (
                
        <Form.Group className='mt-5' controlId='listelement'>
            <Form.Label className='search-book-label'>Search and Add Book</Form.Label>
            <Stack direction='vertical'>
                <Stack gap={3} direction='horizontal'>
                    <Form.Control value={inputValue} onChange={handleChange} autoComplete='off' type="text" placeholder='Type name of book' />
                    {/* <Button type='button' onClick={handleChange}>Submit</Button> */}
                </Stack>

                {book && result && inputValue && (
                    <div className='search-box-suggestions'>
                        {result.map(book => (
                            <Box type='button' onClick={() => handleSelect(book?.volumeInfo)} sx={{ border: '1px solid grey', width: '100%' }} key={book.id}>
                                <Stack gap={2} direction='horizontal' style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <img style={{ width: '20%', height: 'auto' }}  src={book.volumeInfo.imageLinks?.smallThumbnail} alt={book.volumeInfo?.title} />
                                    <div>
                                        <p style={{ fontWeight: 'bold', marginBottom: '1px' }} className=''>{book.volumeInfo?.title}</p>
                                        <p className='text-muted'>by {book.volumeInfo?.authors}</p>
                                    </div>
                                </Stack>
                            </Box>
                        ))}
                    </div>
                )
                }
        
            </Stack>
            
        </Form.Group>


    )
}


export default BookSearch;

// book.volumeInfo.imageLinks?.smallThumbnail