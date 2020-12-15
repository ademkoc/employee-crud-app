import { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import EditForm from './EditForm'

const Employee = ({ employee }) => {
  const [show, setShow] = useState(false)
  const { deleteEmployee } = useContext(EmployeeContext)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    handleClose()
  }, [employee])
  
  return (
    <>
      <tr key={employee.id}>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>{employee.phone}</td>
        <td>
          <button
            onClick={handleShow}
            className="btn text-warning btn-act" data-toggle="modal">
            <i className="material-icons" data-toggle="tooltip" title="Edit">
              &#xE254;
            </i>
          </button>
          <button
            onClick={() => deleteEmployee(employee.id)}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons" data-toggle="tooltip" title="Delete">
              &#xE872;
            </i>
          </button>
        </td>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title>Update Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditForm data={employee}/>
          </Modal.Body>
        </Modal>
      </tr>
    </>
  )
}
export default Employee
