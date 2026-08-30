import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Users, ShieldCheck, LogOut, RefreshCw } from 'lucide-react'
import * as XLSX from 'xlsx'
import { useAuth } from '../context/AuthContext'
import PageTransition from '../components/PageTransition'

export default function AdminPanel() {
  const { currentUser, getAllUsers, logout } = useAuth()
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [downloaded, setDownloaded] = useState(false)

  /* Guard: only admin can access */
  useEffect(() => {
    if (!currentUser || !currentUser.isAdmin) {
      navigate('/', { replace: true })
    }
  }, [currentUser, navigate])

  /* Load users */
  useEffect(() => {
    if (currentUser?.isAdmin) {
      setUsers(getAllUsers())
    }
  }, [currentUser, getAllUsers])

  const refresh = () => setUsers(getAllUsers())

  /* Download as Excel */
  const downloadExcel = () => {
    if (users.length === 0) return

    const rows = users.map((u, i) => ({
      '#': i + 1,
      'Full Name': u.name,
      'Email': u.email,
      'Phone': u.phone || 'Not provided',
      'Registered At': u.registeredAt || 'N/A',
    }))

    const ws = XLSX.utils.json_to_sheet(rows)

    /* Column widths */
    ws['!cols'] = [
      { wch: 5 },
      { wch: 28 },
      { wch: 32 },
      { wch: 18 },
      { wch: 26 },
    ]

    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Munchies Users')

    const fileName = `munchies_users_${new Date().toISOString().split('T')[0]}.xlsx`
    XLSX.writeFile(wb, fileName)

    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 3000)
  }

  if (!currentUser?.isAdmin) return null

  return (
    <PageTransition>
      <div className="admin-page">
        {/* Header */}
        <div className="admin-header">
          <div className="admin-header-inner">
            <div className="admin-header-left">
              <ShieldCheck size={28} color="var(--primary)" />
              <div>
                <h1 className="admin-title">Admin Panel</h1>
                <p className="admin-subtitle">Munchies Website — User Management</p>
              </div>
            </div>
            <div className="admin-header-right">
              <button className="admin-refresh-btn" onClick={refresh} title="Refresh">
                <RefreshCw size={16} /> Refresh
              </button>
              <button
                className="admin-download-btn"
                onClick={downloadExcel}
                disabled={users.length === 0}
              >
                <Download size={16} />
                {downloaded ? '✓ Downloaded!' : `Download Excel (${users.length})`}
              </button>
              <button className="admin-logout-btn" onClick={() => { logout(); navigate('/') }}>
                <LogOut size={15} /> Logout
              </button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="admin-stats-row">
          <motion.div
            className="admin-stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Users size={22} color="var(--primary)" />
            <div>
              <div className="admin-stat-num">{users.length}</div>
              <div className="admin-stat-label">Total Registered Users</div>
            </div>
          </motion.div>
          <motion.div
            className="admin-stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Download size={22} color="var(--primary)" />
            <div>
              <div className="admin-stat-num">.xlsx</div>
              <div className="admin-stat-label">Export Format (Excel)</div>
            </div>
          </motion.div>
        </div>

        {/* Table */}
        <motion.div
          className="admin-table-wrap"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {users.length === 0 ? (
            <div className="admin-empty">
              <Users size={48} color="#ccc" />
              <p>No users have signed up yet.</p>
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Registered At</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <td className="admin-td-num">{i + 1}</td>
                    <td><strong>{user.name}</strong></td>
                    <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                    <td>{user.phone || <span className="admin-na">—</span>}</td>
                    <td className="admin-td-date">{user.registeredAt || <span className="admin-na">N/A</span>}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>

        {users.length > 0 && (
          <div className="admin-footer-note">
            <p>💡 Click <strong>Download Excel</strong> to save all user data as a <code>.xlsx</code> file you can open in Microsoft Excel or Google Sheets.</p>
          </div>
        )}
      </div>
    </PageTransition>
  )
}
