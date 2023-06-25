import { Container, Button } from 'react-bootstrap';

function HomePage() {
    return (
        <Container fluid className='home-page'>
            <div className="title home-title">
                <h1>Welcome to BookLists!</h1>
                <p>Explore lists to find new books in specfic categories!</p>
                <Button href="/makelist">Create my own list</Button>
            </div>
        </Container>
    )
}

export default HomePage;