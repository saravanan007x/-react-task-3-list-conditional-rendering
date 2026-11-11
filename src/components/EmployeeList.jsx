import { useState } from 'react'
import EmployeeCard from './EmployeeCard.jsx'

function EmployeeList({ employees, searchQuery, onSearchChange }) {
  const [department, setDepartment] = useState('All')

  const uniqueDepartments = [
    ...new Set(employees.map((employee) => employee.department)),
  ].sort((a, b) => a.localeCompare(b))
  const departments = ['All', ...uniqueDepartments]

  const filteredEmployees = employees.filter((employee) => {
    const query = searchQuery.trim().toLowerCase()
    const matchesSearch =
      query === '' ||
      employee.name.toLowerCase().includes(query) ||
      employee.email.toLowerCase().includes(query) ||
      employee.role.toLowerCase().includes(query)
    const matchesDepartment =
      department === 'All' || employee.department === department
    return matchesSearch && matchesDepartment
  })

  const clearFilters = () => {
    onSearchChange('')
    setDepartment('All')
  }

  return (
    <section className="employee-section" id="employees" aria-label="Employee list">
      <div className="employee-section-header">
        <div className="employee-section-title">
          <h2>Employees</h2>
          <span className="badge-soft badge-soft-primary">
            {employees.length} total
          </span>
        </div>
        <div className="employee-controls">
          <div className="employee-search">
            <i className="bi bi-search" aria-hidden="true"></i>
            <input
              type="search"
              className="form-control"
              placeholder="Search by name, email or role..."
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              aria-label="Search employees"
            />
          </div>
          <select
            className="form-select employee-department-select"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            aria-label="Filter by department"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept === 'All' ? 'All Departments' : dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="employee-result-count">
        Showing <strong>{filteredEmployees.length}</strong> of {employees.length}{' '}
        employees
      </p>

      {filteredEmployees.length > 0 ? (
        <div className="row g-3 g-xl-4">
          {filteredEmployees.map((employee) => (
            <div className="col-12 col-sm-6 col-xl-4" key={employee.id}>
              <EmployeeCard employee={employee} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">
            <i className="bi bi-people" aria-hidden="true"></i>
          </div>
          <h3>No employees found</h3>
          <p>No employees match your current search or department filter.</p>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={clearFilters}
          >
            <i className="bi bi-arrow-counterclockwise" aria-hidden="true"></i>
            Clear filters
          </button>
        </div>
      )}
    </section>
  )
}

export default EmployeeList
