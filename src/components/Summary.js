import React from 'react'
import { Modal, Button, Container, Stack } from 'react-bootstrap'

const Summary = (props) => {
  const { values, prevStep, close } = props

  const { name, email, age, gender, favoriteBook, color } = values

  const items = color.map((item) => {
    return <li>{item}</li>
  })

  return (
    <React.Fragment>
      <Modal.Body>
        <Container fluid>
          <h5>Summary</h5>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Age: {age}</div>
          <div>Gender: {gender}</div>
          <div>Favorite Book: {favoriteBook}</div>
          <div>
            Favorite Colors: <ul>{items}</ul>{' '}
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Stack direction='horizontal' gap={3}>
          <Button variant={'primary'} onClick={() => prevStep()}>
            Previous
          </Button>
          <Button variant={'primary'} onClick={close}>
            Submit
          </Button>
        </Stack>
      </Modal.Footer>
    </React.Fragment>
  )
}

export default Summary
