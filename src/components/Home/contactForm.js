import React from 'react'
import { Form, Button } from 'react-bootstrap'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "23a0f9d8-92ce-499b-a2c5-6ed4ca91a753");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("message sent successfully")
        }
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: '40vh', }}>
            <Form onSubmit={onSubmit} style={{ width: '80%', maxWidth: '600px', padding: '20px', background: 'rgb(22, 16, 48)', borderRadius: '10px', display: "flex", flexDirection: "column", gap: "20px" }}>
                <Form.Group>
                    <Form.Label className='text-white'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" name='email' />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='text-white'>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" name='message' />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ width: '200px', alignSelf: 'center' }}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default Contact
