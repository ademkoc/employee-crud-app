import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'

export default function EditForm({ data }) {
  const { updateEmployee } = useContext(EmployeeContext)
  const [name, setName] = useState(data.name)
  const [email, setEmail] = useState(data.email)
  const [phone, setPhone] = useState(data.phone)
  const [address, setAddress] = useState(data.address)

  const handleUpdate = (e) => {
    e.preventDefault()
    updateEmployee(data.id, { name, email, phone, address })
  }

  return (
    <Form>
      <Form.Group>
        <Form.Control
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name *"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email *"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="address"
          as="textarea"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address *"
          rows={3}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="phone"
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone *"
        ></Form.Control>
      </Form.Group>
      <Button onClick={handleUpdate} variant="success" type="submit" block>
        Update Employee
      </Button>
    </Form>
  )
}
