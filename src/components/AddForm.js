import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'

export default function AddForm() {
  const { addEmployee } = useContext(EmployeeContext)
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  const { name, phone, email, address } = newEmployee

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addEmployee(name, email, address, phone)
  }

  return (
    <Form>
      <Form.Group>
        <Form.Control
          name="name"
          value={name}
          onChange={onInputChange}
          type="text"
          placeholder="Name *"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="email"
          value={email}
          onChange={onInputChange}
          type="email"
          placeholder="Email *"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="address"
          value={address}
          onChange={onInputChange}
          as="textarea"
          placeholder="Address *"
          rows={3}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="phone"
          value={phone}
          onChange={onInputChange}
          type="phone"
          placeholder="Phone *"
        ></Form.Control>
      </Form.Group>
      <Button onClick={handleSubmit} variant="success" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  )
}
