import { useForm } from 'react-hook-form'
import { Form, Button, Stack, Modal } from 'react-bootstrap'

const Favorites = (props) => {
  const { handleFormData, values, nextStep, prevStep } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()

  const onSubmit = () => {
    const newFormData = getValues()
    handleFormData({ ...values, ...newFormData })
    nextStep()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body>
        <Form.Group className='mb-3'>
          <Form.Label>What's your favorite book?</Form.Label>
          <Form.Control
            type='text'
            name='favoriteBook'
            {...register('favoriteBook', { required: true })}
          />
          {errors.favoriteBook && (
            <div className='mb-3' style={{ color: 'red' }}>
              This field is required
            </div>
          )}
        </Form.Group>
        <div className='mb-3'>
          <Form.Label>What's your favorite color?</Form.Label>
          <Form.Check
            {...register('color', { required: true })}
            type={'checkbox'}
            name={'color'}
            id={'color-red'}
            label={'Red'}
            value={'red'}
          />
          <Form.Check
            {...register('color', { required: true })}
            type={'checkbox'}
            name={'color'}
            id={'color-blue'}
            label={'Blue'}
            value={'blue'}
          />
          <Form.Check
            {...register('color', { required: true })}
            type={'checkbox'}
            name={'color'}
            id={'color-yellow'}
            label={'Yellow'}
            value={'yellow'}
          />
          {errors.color && (
            <div className='mb-3' style={{ color: 'red' }}>
              This field is required
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Stack direction='horizontal' gap={3}>
          <Button variant={'primary'} onClick={() => prevStep()}>
            Previous
          </Button>
          <Button variant={'primary'} type={'submit'}>
            Submit
          </Button>
        </Stack>
      </Modal.Footer>
    </Form>
  )
}

export default Favorites
