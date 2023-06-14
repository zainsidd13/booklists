import { Container, Row, Stack } from 'react-bootstrap';
import Post from '../components/Post';
import { useState, useEffect } from 'react';
import axios from 'axios';

function GenrePage({header}) {
  const [lists, setLists] = useState([])

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const list_url = "http://localhost:8800/lists/" + header;
        const response = await axios.get(list_url);
        setLists(response.data);
        console.log(list_url);

      } catch(err) {
        console.log(err)
      }
    }
    fetchLists()
  }, [])

  return (
    <Container fluid>
      <h1 className='title'>{header}</h1>
      <Row className='mt-5 post-row'>
        <Stack direction="horizontal" className="flex-wrap">
          {lists.map((list) => (
            <Post key={list.id} title={list.list_title} description={list.desc} cover={list.cover} id={list.id}/>
          ))}
        </Stack>
      </Row>
    </Container>
  );
}

export default GenrePage;







