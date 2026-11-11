import { useState } from 'react'

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: 'bi-grid-1x2' },
  { id: 'employees', label: 'Employees', icon: 'bi-people' },
  { id: 'departments', label: 'Departments', icon: 'bi-diagram-3' },
  { id: 'reports', label: 'Reports', icon: 'bi-file-earmark-bar-graph' },
  { id: 'settings', label: 'Settings', icon: 'bi-gear' },
]

function Sidebar({ isOpen, onClose }) {
  const [activeItem, setActiveItem] = useState('overview')

  const handleNavClick = (itemId) => {
    setActiveItem(itemId)
    onClose()
  }

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header">
        <span className="brand-mark">
          <i className="bi bi-people-fill"></i>
        </span>
        <div className="brand-text">
          <span className="brand-name">NexaHR</span>
          <span className="brand-tagline">Admin Console</span>
        </div>
        <button
          type="button"
          className="sidebar-close d-lg-none"
          onClick={onClose}
          aria-label="Close menu"
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      <nav className="sidebar-nav" aria-label="Dashboard navigation">
        <span className="sidebar-nav-label">Menu</span>
        <ul className="list-unstyled">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`sidebar-link ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                aria-current={activeItem === item.id ? 'page' : undefined}
              >
                <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">AD</div>
          <div className="sidebar-user-meta">
            <span className="sidebar-user-name">Admin User</span>
            <span className="sidebar-user-email">admin@example.com</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
