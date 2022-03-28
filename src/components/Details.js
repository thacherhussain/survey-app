import { useForm } from 'react-hook-form'
import { Form, Button, Stack, Modal } from 'react-bootstrap'

const Details = (props) => {
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
        <Form.Label>How old are you?</Form.Label>
        <Form.Select className='mb-3' {...register('age', { required: true })}>
          <option></option>
          <option value={'0-18'}>0-18 years</option>
          <option value={'19-25'}>19-25 years</option>
          <option value={'26-35'}>26-35 years</option>
          <option value={'36-45'}>36-45 years</option>
          <option value={'46-55'}>46-55 years</option>
          <option value={'56-65'}>56-65 years</option>
          <option value={'65+'}>65+ years</option>
        </Form.Select>
        {errors.age && (
          <div className='mb-3' style={{ color: 'red' }}>
            This field is required
          </div>
        )}
        <Form.Label>How do you identify?</Form.Label>
        <div className='mb-3'>
          <Form.Check
            {...register('gender', { required: true })}
            type={'radio'}
            name={'gender'}
            id={'gender-male'}
            label={'Male'}
            value={'Male'}
          />
          <Form.Check
            {...register('gender', { required: true })}
            type={'radio'}
            name={'gender'}
            id={'gender-female'}
            label={'Female'}
            value={'Female'}
          />
          <Form.Check
            {...register('gender', { required: true })}
            type={'radio'}
            name={'gender'}
            id={'gender-outside'}
            label={'Neither of those fit me'}
            value={'Neither'}
          />
          {errors.gender && (
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
            Next
          </Button>
        </Stack>
      </Modal.Footer>
    </Form>
  )
}

export default Details
