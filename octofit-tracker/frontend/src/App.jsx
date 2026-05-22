import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import { getApiBaseUrl, getCodespaceName } from './lib/api.js'
import './App.css'

const navItems = [
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
]

function App() {
  const codespaceName = getCodespaceName()
  const apiBaseUrl = getApiBaseUrl()

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">React 19 Presentation Tier</span>
          <h1>OctoFit Tracker</h1>
          <p>
            Monitor users, teams, activities, rankings and recommended workouts
            from a single multi-tier dashboard.
          </p>
        </div>
        <div className="hero-meta">
          <img src={logo} className="hero-logo" alt="OctoFit Tracker logo" />
          <div className="meta-card">
            <span className="meta-label">API base</span>
            <code>{apiBaseUrl}</code>
          </div>
          <div className={`meta-card ${codespaceName ? 'is-success' : 'is-warning'}`}>
            <span className="meta-label">Environment</span>
            <p>
              {codespaceName
                ? `Codespaces: ${codespaceName}`
                : 'Local fallback active. Set VITE_CODESPACE_NAME in .env.local for Codespaces URLs.'}
            </p>
          </div>
        </div>
      </header>

      <nav className="nav-strip" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `nav-pill${isActive ? ' is-active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <main className="page-frame">
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
