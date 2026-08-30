import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

/* ── Admin credentials (hardcoded, never stored in localStorage) ── */
const ADMIN_EMAIL    = 'admin@munchiespk.com'
const ADMIN_PASSWORD = 'Munchies@Admin2024'

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  /* Restore session from localStorage on page load */
  useEffect(() => {
    try {
      const saved = localStorage.getItem('munchies_current_user')
      if (saved) setCurrentUser(JSON.parse(saved))
    } catch { /* ignore */ }
  }, [])

  /* SIGNUP — stores user locally + sends email notification */
  const signup = ({ name, email, phone, password }) => {
    const users = JSON.parse(localStorage.getItem('munchies_users') || '[]')

    /* Block admin email from signing up */
    if (email.toLowerCase() === ADMIN_EMAIL) {
      return { success: false, error: 'This email cannot be used for registration.' }
    }

    /* Check duplicate email */
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: 'An account with this email already exists.' }
    }

    const registeredAt = new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })
    const newUser = { id: Date.now(), name, email, phone: phone || '', password, registeredAt }
    users.push(newUser)
    localStorage.setItem('munchies_users', JSON.stringify(users))

    /* Auto-login */
    const publicUser = { id: newUser.id, name, email, phone: phone || '', isAdmin: false }
    setCurrentUser(publicUser)
    localStorage.setItem('munchies_current_user', JSON.stringify(publicUser))

    /* Silently send signup info to Munchies email — no browser navigation */
    fetch('https://formsubmit.co/ajax/Munchiespk24@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: 'New Munchies Website Registration',
        Name: name,
        Email: email,
        Phone: phone || 'Not provided',
        'Registered At': registeredAt,
        _template: 'table',
        _captcha: 'false',
      }),
    }).catch(() => { /* silent fail — user experience not affected */ })

    return { success: true }
  }

  /* LOGIN — checks admin first, then stored users */
  const login = (email, password) => {
    /* Admin login */
    if (
      email.toLowerCase() === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      const adminUser = { id: 'admin', name: 'Admin', email: ADMIN_EMAIL, isAdmin: true }
      setCurrentUser(adminUser)
      localStorage.setItem('munchies_current_user', JSON.stringify(adminUser))
      return { success: true, isAdmin: true }
    }

    /* Regular user login */
    const users = JSON.parse(localStorage.getItem('munchies_users') || '[]')
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (!user) return { success: false, error: 'Incorrect email or password.' }

    const publicUser = { id: user.id, name: user.name, email: user.email, phone: user.phone, isAdmin: false }
    setCurrentUser(publicUser)
    localStorage.setItem('munchies_current_user', JSON.stringify(publicUser))
    return { success: true, isAdmin: false }
  }

  /* LOGOUT */
  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('munchies_current_user')
  }

  /* GET ALL USERS — admin only */
  const getAllUsers = () => {
    return JSON.parse(localStorage.getItem('munchies_users') || '[]')
  }

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout, getAllUsers }}>
      {children}
    </AuthContext.Provider>
  )
}
