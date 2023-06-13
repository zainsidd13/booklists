import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function ListPage() {
    const { argument } = useParams();
    const [books, setBooks] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchLists = () => {
          try {
            const list_url = "http://localhost:8800/lists/" + argument
            axios.get(list_url)
            .then(response => {setList(response.data)})
            console.log(list[0].list_title);
    
          } catch(err) {
            console.log(err)
          }
        }
        fetchLists()
      }, [])

    useEffect(() => {
        const fetchBooks = () => {
          try {
            const book_url = "http://localhost:8800/books/" + argument 
            axios.get(book_url)
            .then(response => {setBooks(response.data)})
            console.log(books);
    
          } catch(err) {
            console.log(err)
          }
        }
        fetchBooks()
      }, [])

    return (
        <Container fluid>
            <h1 className='title'>{list[0]?.list_title}</h1>
            {books?.map((book) => (
              <h1>{book.book_title}</h1>
            ))}
        </Container>
    )
}

export default ListPage;