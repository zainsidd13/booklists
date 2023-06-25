import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Stack } from 'react-bootstrap';

function Sidebar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
          <Stack className='navigation-items' direction='horizontal' gap={4}>
            <Navbar.Brand href="/" style={{ fontSize: "40px" }}>BookLists</Navbar.Brand>
            

            {/* Navigation items */}
              <Nav.Item style={{height: "3vh"}}>
                <Button href="/fantasy" variant="outline-secondary">Fantasy</Button>
              </Nav.Item>
              <Nav.Item style={{height: "3vh"}}>
                <Button href="/mystery" variant="outline-secondary">Mystery</Button>
              </Nav.Item>
              <Nav.Item style={{height: "3vh"}}>
                <Button href="/romance" variant="outline-secondary">Romance</Button>
              </Nav.Item>
              <Nav.Item style={{height: "3vh"}}>
                <Button href="/young-adult" variant="outline-secondary">Young Adult</Button>
              </Nav.Item>
              <Nav.Item style={{height: "3vh"}}>
                <Button href="/nonfiction" variant="outline-secondary">Non-fiction</Button>
              </Nav.Item>

          {/* Offcanvas menu */}
          </Stack>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Navigate
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/makelist">Make a List</Nav.Link>

                  {/* Dropdown menu */}
                  <NavDropdown
                    title="Genres"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/fantasy">Fantasy</NavDropdown.Item>
                    <NavDropdown.Item href="/mystery">
                      Mystery
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/romance">
                      Romance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/youngadult">
                      Young-Adult
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/nonfiction">
                      None-Fiction
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Sidebar;