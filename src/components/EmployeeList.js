import { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'
import AddForm from './AddForm'
import Employee from './Employee'

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext)
  const [show, setShow] = useState(false)
  useEffect(() => {
    handleClose()
  }, [employees])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              className="btn btn-success"
              data-toggle="modal"
              onClick={handleShow}
            >
              <i className="material-icons">&#xE147;</i>{' '}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees
            .sort((a, b) => (a.name < b.name ? -1 : 1))
            .map((employee) => (
              <Employee employee={employee} />
            ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EmployeeList
