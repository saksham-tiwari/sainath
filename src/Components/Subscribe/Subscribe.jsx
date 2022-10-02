import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Subscribe = () => {
  const submit = (e)=>{
    e.preventDefault();
  }
  return (
    <div className='subscribe'>
        <h1>SUBSCRIBE</h1>
        <p>Yes! Email me exclusive updates of latest YRF films. By signing up below, I agree to the YRF Privacy Policy and Terms of Use. </p>
        <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text style={{color:"#E7E7E7"}}>
                Don't worry, we don't spam. You can opt out any time.
                </Form.Text>
            </Form.Group>

            <button type="submit" className='submit'>
                Submit
            </button>

        </Form>
    </div>
  )
}

export default Subscribe