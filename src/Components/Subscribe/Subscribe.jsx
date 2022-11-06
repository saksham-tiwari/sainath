import React from 'react'
import {Form } from 'react-bootstrap'

const Subscribe = () => {
  const submit = (e)=>{
    e.preventDefault();
  }
  return (
    <div className='subscribe'>
        <h1>SUBSCRIBE</h1>
        <p>Yes! Email me exclusive updates of latest Sainath International films. By signing up below, I agree to the Sainath International's Privacy Policy and Terms of Use. </p>
        <Form onSubmit={submit}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className='fw-bold'>Email</Form.Label>
                <Form.Control type="email" />
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