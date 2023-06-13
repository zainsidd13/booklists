import { Col, Form } from "react-bootstrap";

function CheckBox({genre}) {
    return (
        <Col lg={3}>
            <Form.Check type="checkbox" label={genre}/>
        </Col>
    )
}

export default CheckBox;