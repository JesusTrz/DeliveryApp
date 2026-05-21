import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiMotorbikeFill } from 'react-icons/ri'
import {
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeSlash,
} from 'react-icons/hi2'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)

  return (
    <div className="login-page">

      {/* ── Hero ── */}
      <div className="login-hero">
        <div className="login-brand">
          <div className="login-brand-icon">
            <RiMotorbikeFill size={40} color="#fff" />
          </div>
          <span className="login-brand-name">QuickDrop</span>
          <span className="login-brand-tag">Tu comida favorita, en minutos</span>
        </div>

        {/* ola inferior */}
        <svg className="login-wave" viewBox="0 0 430 56" preserveAspectRatio="none">
          <path d="M0,56 L0,28 Q108,0 215,28 Q322,56 430,28 L430,56 Z" fill="var(--surface)" />
        </svg>
      </div>

      {/* ── Card ── */}
      <div className="login-card">
        <h2 className="login-title">Iniciar sesión</h2>
        <p className="login-sub">Bienvenido de nuevo 👋</p>

        <div className="login-fields">

          <div className="field">
            <label className="field-label">Correo electrónico</label>
            <div className="input-wrap">
              <HiOutlineEnvelope size={18} className="input-icon" />
              <input type="email" placeholder="tu@correo.com" />
            </div>
          </div>

          <div className="field">
            <label className="field-label">Contraseña</label>
            <div className="input-wrap">
              <HiOutlineLockClosed size={18} className="input-icon" />
              <input type={showPass ? 'text' : 'password'} placeholder="••••••••" />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPass(v => !v)}
              >
                {showPass
                  ? <HiOutlineEyeSlash size={18} />
                  : <HiOutlineEye size={18} />}
              </button>
            </div>
          </div>

          <span className="forgot-link">¿Olvidaste tu contraseña?</span>
        </div>

        <button className="btn-login" onClick={() => navigate('/home')}>
          Iniciar sesión
        </button>

        <div className="login-divider"><span>o continúa con</span></div>

        <button className="btn-google">
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Continuar con Google
        </button>

        <p className="register-row">
          ¿No tienes cuenta? <span onClick={() => {}}>Regístrate</span>
        </p>
      </div>

    </div>
  )
}

export default Login
