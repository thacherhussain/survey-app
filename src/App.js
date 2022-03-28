import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'

import './App.css'
import Identity from './components/Identity'
import Details from './components/Details'
import Favorites from './components/Favorites'
import Summary from './components/Summary'

const App = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 2000)
  }, [])

  const handleClose = () => setShow(false)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleInputData = (data) => {
    setFormData({ ...formData, ...data })
    console.log(data)
  }

  let content

  switch (step) {
    case 1:
      content = (
        <Identity
          nextStep={nextStep}
          handleFormData={handleInputData}
          values={formData}
        />
      )
      break
    case 2:
      content = (
        <Details
          handleFormData={handleInputData}
          values={formData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
      break
    case 3:
      content = (
        <Favorites
          handleFormData={handleInputData}
          values={formData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
      break
    default:
      content = (
        <Summary values={formData} prevStep={prevStep} close={handleClose} />
      )
      break
  }

  return (
    <div className='App'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Survey</Modal.Title>
        </Modal.Header>
        {content}
      </Modal>
    </div>
  )
}

export default App
