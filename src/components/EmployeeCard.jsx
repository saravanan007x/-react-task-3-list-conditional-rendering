const STATUS_CLASS = {
  Active: 'status-active',
  'On Leave': 'status-on-leave',
}

const AVATAR_COLORS = [
  'avatar-blue',
  'avatar-indigo',
  'avatar-green',
  'avatar-amber',
  'avatar-rose',
  'avatar-violet',
]

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function EmployeeCard({ employee }) {
  const avatarClass = AVATAR_COLORS[employee.id % AVATAR_COLORS.length]

  return (
    <article className="employee-card">
      <header className="employee-card-header">
        <div className="employee-card-identity">
          <div className={`employee-avatar ${avatarClass}`}>
            {getInitials(employee.name)}
          </div>
          <div className="employee-card-title">
            <h3 className="employee-name">{employee.name}</h3>
            <p className="employee-role">{employee.role}</p>
          </div>
        </div>
        <span
          className={`status-badge ${STATUS_CLASS[employee.status] || 'status-default'}`}
        >
          <i className="bi bi-circle-fill" aria-hidden="true"></i>
          {employee.status}
        </span>
      </header>

      <ul className="employee-details">
        <li>
          <i className="bi bi-envelope" aria-hidden="true"></i>
          <span title={employee.email}>{employee.email}</span>
        </li>
        <li>
          <i className="bi bi-geo-alt" aria-hidden="true"></i>
          <span>{employee.city}</span>
        </li>
        <li>
          <i className="bi bi-cake2" aria-hidden="true"></i>
          <span>{employee.age} years old</span>
        </li>
        <li>
          <i className="bi bi-clock-history" aria-hidden="true"></i>
          <span>
            {employee.experience}{' '}
            {employee.experience === 1 ? 'year' : 'years'} of experience
          </span>
        </li>
      </ul>

      <footer className="employee-card-footer">
        <span className="badge-soft badge-soft-primary">
          <i className="bi bi-diagram-3" aria-hidden="true"></i>
          {employee.department}
        </span>
        <span className="employee-id">EMP-{String(employee.id).padStart(3, '0')}</span>
      </footer>
    </article>
  )
}

export default EmployeeCard
