import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

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

    /* Check duplicate email */
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: 'An account with this email already exists.' }
    }

    const newUser = { id: Date.now(), name, email, phone: phone || '', password }
    users.push(newUser)
    localStorage.setItem('munchies_users', JSON.stringify(users))

    /* Auto-login */
    const publicUser = { id: newUser.id, name, email, phone: phone || '' }
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
        'Registered At': new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
        _template: 'table',
        _captcha: 'false',
      }),
    }).catch(() => { /* silent fail — user experience not affected */ })

    return { success: true }
  }

  /* LOGIN — validates against stored users */
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('munchies_users') || '[]')
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (!user) return { success: false, error: 'Incorrect email or password.' }

    const publicUser = { id: user.id, name: user.name, email: user.email, phone: user.phone }
    setCurrentUser(publicUser)
    localStorage.setItem('munchies_current_user', JSON.stringify(publicUser))
    return { success: true }
  }

  /* LOGOUT */
  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('munchies_current_user')
  }

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
