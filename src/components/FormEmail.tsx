import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Formm = () => {
  return (
    <>
      <Container>
        <Form
          action="https://formsubmit.co/e477550535f79d690b9e7ec2493d5840"
          method="post"
        >
          {/* Honeypot Catchs spammer name="_honey" */}
          <Form.Control
            type="hidden"
            name="_honey"
            style={{ display: "none" }}
            value="false"
          />
          {/* Disable Capcha  => robot auth */}
          <Form.Control type="hidden" name="_captcha" value="false" />

          {/* redirecting to success page */}
          <Form.Control
            type="hidden"
            name="_next"
            value="https://example-xi-bay.vercel.app/success"
          />

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="Last&nbsp;Name"
              placeholder="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="email@gmail.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>phone number</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              placeholder="phone number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              name="comments&nbsp;questions"
              rows={3}
            />
          </Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Formm;
