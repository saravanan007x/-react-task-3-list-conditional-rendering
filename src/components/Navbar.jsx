function Navbar({ searchQuery, onSearchChange, onToggleSidebar, onLogout }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <button
            type="button"
            className="topbar-menu-btn d-lg-none"
            onClick={onToggleSidebar}
            aria-label="Open menu"
          >
            <i className="bi bi-list"></i>
          </button>
          <div className="topbar-brand d-lg-none">
            <span className="brand-mark">
              <i className="bi bi-people-fill"></i>
            </span>
            <span className="topbar-brand-name">NexaHR</span>
          </div>
        </div>

        <div className="topbar-search d-none d-md-flex">
          <i className="bi bi-search" aria-hidden="true"></i>
          <input
            type="search"
            className="form-control"
            placeholder="Search employees by name, email or role..."
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            aria-label="Search employees"
          />
        </div>

        <div className="topbar-actions">
          <button
            type="button"
            className="topbar-icon-btn"
            aria-label="Notifications"
          >
            <i className="bi bi-bell" aria-hidden="true"></i>
            <span className="notification-dot"></span>
          </button>
          <div className="topbar-divider" aria-hidden="true"></div>
          <div className="admin-profile">
            <div className="admin-avatar">AD</div>
            <div className="admin-meta d-none d-xl-block">
              <span className="admin-name">Admin User</span>
              <span className="admin-role">Administrator</span>
            </div>
          </div>
          <button type="button" className="btn-logout" onClick={onLogout}>
            <i className="bi bi-box-arrow-right" aria-hidden="true"></i>
            <span className="d-none d-sm-inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
