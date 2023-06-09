import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Stack } from 'react-bootstrap';

function ListPage() {
    const { argument } = useParams();
    const [books, setBooks] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchLists = async () => {
          try {
            const list_url = "http://localhost:8800/lists/" + argument;
            const response = await axios.get(list_url);
            setList(response.data);
            console.log(response.data[0]?.list_title);
    
          } catch(err) {
            console.log(err)
          }
        }
        fetchLists()
      }, [])
      
    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const book_url = "http://localhost:8800/books/" + argument;
            const response = await axios.get(book_url);
            setBooks(response.data);
            console.log(response.data);
    
          } catch(err) {
            console.log(err)
          }
        }
        fetchBooks()
      }, [])



    return (
        <Container fluid>
            <h1 className='title'>{list[0]?.list_title}</h1>
            <p className='d-flex justify-content-center'>{list[0]?.desc}</p>

          <div className=''>
            {books?.map((book, index) => (
              <Stack key={index} gap={3} direction='horizontal' className='mt-5 d-flex justify-content-center'>
                                   
                <Stack gap={2} direction='horizontal' style={{display: 'flex'}}>
                    <p style={{alignSelf: 'flex-start'}}>{index+1}.</p>
                    <img src={book.book_cover} alt={book.book_title} />
                    <div style={{alignSelf: 'flex-start'}}>
                        <p style={{ fontWeight: 'bold', marginBottom: '1px' }} className=''>{book.book_title}</p>
                        <p className='text-muted'>by {book.book_author}</p>
                    </div>
                </Stack>
          
               </Stack>
            ))}
          </div>
        </Container>
    )
}

export default ListPage;
