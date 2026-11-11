import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'
import StatsCard from './StatsCard.jsx'
import EmployeeList from './EmployeeList.jsx'

function Home({ employees, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [now] = useState(() => new Date())

  const totalEmployees = employees.length
  const activeEmployees = employees.filter(
    (employee) => employee.status === 'Active'
  ).length
  const onLeaveEmployees = employees.filter(
    (employee) => employee.status === 'On Leave'
  ).length
  const departmentCount = new Set(
    employees.map((employee) => employee.department)
  ).size
  const newEmployees = employees.filter(
    (employee) => employee.experience <= 1
  ).length

  const currentHour = now.getHours()
  const greeting =
    currentHour < 12
      ? 'Good morning'
      : currentHour < 17
        ? 'Good afternoon'
        : 'Good evening'
  const today = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const stats = [
    {
      id: 'total-employees',
      label: 'Total Employees',
      value: totalEmployees,
      icon: 'bi-people',
      variant: 'blue',
    },
    {
      id: 'active-employees',
      label: 'Active Employees',
      value: activeEmployees,
      icon: 'bi-person-check',
      variant: 'green',
    },
    {
      id: 'departments',
      label: 'Departments',
      value: departmentCount,
      icon: 'bi-diagram-3',
      variant: 'indigo',
    },
    {
      id: 'new-employees',
      label: 'New Employees',
      value: newEmployees,
      icon: 'bi-person-plus',
      variant: 'orange',
    },
  ]

  return (
    <div className="dashboard">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen ? (
        <div
          className="sidebar-backdrop d-lg-none"
          onClick={() => setSidebarOpen(false)}
        ></div>
      ) : null}

      <div className="dashboard-main">
        <Navbar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onToggleSidebar={() => setSidebarOpen(true)}
          onLogout={onLogout}
        />

        <main className="dashboard-content">
          <section className="welcome-section" aria-label="Dashboard welcome">
            <div>
              <h1 className="welcome-heading">{greeting}, Admin</h1>
              <p className="welcome-date">
                <i className="bi bi-calendar3" aria-hidden="true"></i>
                {today}
              </p>
            </div>
            <div className="welcome-badges d-none d-sm-flex">
              <span className="badge-soft badge-soft-success">
                <i className="bi bi-circle-fill" aria-hidden="true"></i>
                {activeEmployees} Active
              </span>
              <span className="badge-soft badge-soft-warning">
                <i className="bi bi-circle-fill" aria-hidden="true"></i>
                {onLeaveEmployees} On Leave
              </span>
            </div>
          </section>

          <section className="stats-section" aria-label="Company statistics">
            <div className="row g-3 g-xl-4">
              {stats.map((stat) => (
                <div className="col-6 col-lg-6 col-xl-3" key={stat.id}>
                  <StatsCard
                    icon={stat.icon}
                    label={stat.label}
                    value={stat.value}
                    variant={stat.variant}
                  />
                </div>
              ))}
            </div>
          </section>

          <EmployeeList
            employees={employees}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </main>
      </div>
    </div>
  )
}

export default Home
