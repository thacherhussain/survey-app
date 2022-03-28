import React from 'react'
import { Modal, Button, Container } from 'react-bootstrap'

const Summary = (props) => {
  const { values, close } = props

  const { name, email, age, gender, favoriteBook, color } = values
  console.log(`colors: ${color}`)

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
        <Button variant={'primary'} type={'submit'} onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </React.Fragment>
  )
}

export default Summary
