import logo from '../../../docs/octofitapp-small.png'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'

const navigation = [
  { label: 'Overview', path: '/' },
  { label: 'Activities', path: '/activities' },
  { label: 'Teams', path: '/teams' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Workouts', path: '/workouts' },
]

function Overview() {
  return (
    <section className="overview">
      <div className="page-heading">
        <div>
          <p className="eyebrow">MONDAY, OCTOBER 12</p>
          <h1>Your movement, in focus.</h1>
        </div>
        <button className="btn btn-success" type="button">Log activity</button>
      </div>
      <div className="row g-3 summary-row">
        <div className="col-12 col-md-4">
          <article className="metric-panel">
            <p className="metric-label">ACTIVITY THIS WEEK</p>
            <p className="metric-value">0 <span>min</span></p>
            <p className="metric-note">Your first session is waiting.</p>
          </article>
        </div>
        <div className="col-12 col-md-4">
          <article className="metric-panel metric-panel-accent">
            <p className="metric-label">TEAM STREAK</p>
            <p className="metric-value">0 <span>days</span></p>
            <p className="metric-note">Every move counts.</p>
          </article>
        </div>
        <div className="col-12 col-md-4">
          <article className="metric-panel">
            <p className="metric-label">LEADERBOARD</p>
            <p className="metric-value">-- <span>place</span></p>
            <p className="metric-note">Join a team to get started.</p>
          </article>
        </div>
      </div>
      <section className="activity-panel" aria-labelledby="activity-heading">
        <div className="activity-panel-heading">
          <div>
            <p className="eyebrow">YOUR TRACKER</p>
            <h2 id="activity-heading">Recent activity</h2>
          </div>
          <span className="activity-period">THIS WEEK</span>
        </div>
        <div className="empty-state">
          <span className="empty-mark" aria-hidden="true">+</span>
          <p>No activities logged yet</p>
        </div>
      </section>
    </section>
  )
}

function SectionPlaceholder({ title }) {
  return (
    <section className="section-placeholder">
      <p className="eyebrow">OCTOFIT TRACKER</p>
      <h1>{title}</h1>
      <p>This space is ready for your {title.toLowerCase()}.</p>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="/" aria-label="OctoFit home">
          <img src={logo} alt="" />
          <span>octofit<span className="brand-light"> / tracker</span></span>
        </a>
        <p className="nav-label">WORKSPACE</p>
        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <span className="nav-indicator" aria-hidden="true" />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <span className="avatar">O</span>
          <span>OctoFit member</span>
        </div>
      </aside>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/activities" element={<SectionPlaceholder title="Activities" />} />
          <Route path="/teams" element={<SectionPlaceholder title="Teams" />} />
          <Route path="/leaderboard" element={<SectionPlaceholder title="Leaderboard" />} />
          <Route path="/workouts" element={<SectionPlaceholder title="Workouts" />} />
          <Route path="*" element={<SectionPlaceholder title="Page not found" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
