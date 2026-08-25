import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Mail, Lock, Phone, Eye, EyeOff, CheckCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function AuthModal({ mode: initialMode, onClose }) {
  const { signup, login } = useAuth()
  const [mode, setMode] = useState(initialMode) /* 'login' | 'signup' */
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const change = (e) => {
    setError('')
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const switchMode = (m) => {
    setMode(m)
    setError('')
    setDone(false)
    setForm({ name: '', email: '', phone: '', password: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    /* Basic validation */
    if (!form.email || !form.password) return setError('Email and password are required.')
    if (mode === 'signup' && !form.name) return setError('Please enter your name.')
    if (form.password.length < 6) return setError('Password must be at least 6 characters.')

    setLoading(true)

    if (mode === 'signup') {
      const res = signup(form)
      setLoading(false)
      if (!res.success) return setError(res.error)
      setDone(true)
      setTimeout(() => onClose(), 2000)
    } else {
      const res = login(form.email, form.password)
      setLoading(false)
      if (!res.success) return setError(res.error)
      onClose()
    }
  }

  return (
    <AnimatePresence>
      <>
        {/* Backdrop */}
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Centering wrapper */}
        <div className="modal-center-wrap" onClick={onClose}>
          <motion.div
            className="auth-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button className="modal-close" onClick={onClose}><X size={18} /></button>

            {/* Success state */}
            {done ? (
              <div className="auth-success">
                <CheckCircle size={48} color="#CC0000" />
                <h3>Welcome to Munchies!</h3>
                <p>Your account has been created successfully.</p>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="auth-tabs">
                  <button
                    className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
                    onClick={() => switchMode('login')}
                  >
                    Login
                  </button>
                  <button
                    className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
                    onClick={() => switchMode('signup')}
                  >
                    Sign Up
                  </button>
                </div>

                <h2 className="auth-title">
                  {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="auth-subtitle">
                  {mode === 'login'
                    ? 'Sign in to your Munchies account'
                    : 'Join the Munchies family today'}
                </p>

                <form className="auth-form" onSubmit={handleSubmit}>
                  {/* Name — signup only */}
                  {mode === 'signup' && (
                    <div className="auth-field">
                      <User size={16} className="auth-field-icon" />
                      <input
                        type="text" name="name" placeholder="Full Name"
                        value={form.name} onChange={change} autoComplete="name"
                      />
                    </div>
                  )}

                  {/* Email */}
                  <div className="auth-field">
                    <Mail size={16} className="auth-field-icon" />
                    <input
                      type="email" name="email" placeholder="Email Address"
                      value={form.email} onChange={change} autoComplete="email"
                    />
                  </div>

                  {/* Phone — signup only */}
                  {mode === 'signup' && (
                    <div className="auth-field">
                      <Phone size={16} className="auth-field-icon" />
                      <input
                        type="tel" name="phone" placeholder="Phone Number (optional)"
                        value={form.phone} onChange={change}
                      />
                    </div>
                  )}

                  {/* Password */}
                  <div className="auth-field">
                    <Lock size={16} className="auth-field-icon" />
                    <input
                      type={showPass ? 'text' : 'password'}
                      name="password" placeholder="Password"
                      value={form.password} onChange={change}
                      autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                    />
                    <button
                      type="button" className="auth-eye"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>

                  {error && <p className="auth-error">{error}</p>}

                  <button
                    type="submit"
                    className="btn-primary auth-submit"
                    disabled={loading}
                  >
                    {loading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Create Account'}
                  </button>
                </form>

                <p className="auth-switch">
                  {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                  <button onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}>
                    {mode === 'login' ? 'Sign Up' : 'Login'}
                  </button>
                </p>
              </>
            )}
          </motion.div>
        </div>
      </>
    </AnimatePresence>
  )
}
