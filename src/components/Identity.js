import { useForm } from 'react-hook-form'
import { Form, Button, Modal } from 'react-bootstrap'

const Identity = (props) => {
  const { nextStep, handleFormData } = props
  const { register, handleSubmit, getValues } = useForm()

  const onSubmit = () => {
    handleFormData(getValues())
    nextStep()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            name='name'
            placeholder='Name (optional)'
            {...register('name')}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            type='email'
            name={'email'}
            // defaultValue={'e@m.c'}
            placeholder={'Email (optional)'}
            {...register('email')}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer style={{ textAlign: 'end' }}>
        <Button variant={'primary'} type={'submit'}>
          Next
        </Button>
      </Modal.Footer>
    </Form>
  )
}

export default Identity
