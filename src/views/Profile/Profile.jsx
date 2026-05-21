import {
  HiOutlineShoppingBag,
  HiOutlineMapPin,
  HiOutlineCreditCard,
  HiOutlineBell,
  HiOutlineChevronRight,
  HiOutlineStar,
  HiOutlineQuestionMarkCircle,
  HiArrowRightOnRectangle,
  HiOutlinePencilSquare,
} from 'react-icons/hi2'
import { RiMedalLine } from 'react-icons/ri'
import BottomNav from '../../componentes/BottomNav/BottomNav'
import './Profile.css'

const accountItems = [
  { icon: HiOutlineShoppingBag, label: 'Mis pedidos',      desc: '24 pedidos realizados' },
  { icon: HiOutlineMapPin,      label: 'Mis direcciones',   desc: '2 direcciones guardadas' },
  { icon: HiOutlineCreditCard,  label: 'Métodos de pago',  desc: 'Tarjeta •••• 4242' },
  { icon: HiOutlineBell,        label: 'Notificaciones',    desc: 'Activadas' },
]

const supportItems = [
  { icon: HiOutlineQuestionMarkCircle, label: 'Ayuda y preguntas', desc: 'Centro de ayuda' },
  { icon: HiOutlineStar,               label: 'Calificar la app',  desc: '¿Te gusta QuickDrop?' },
]

function MenuItem({ icon: Icon, label, desc }) {
  return (
    <div className="profile-menu-item">
      <div className="menu-icon-wrap">
        <Icon size={19} />
      </div>
      <div className="menu-text">
        <span className="menu-label">{label}</span>
        <span className="menu-desc">{desc}</span>
      </div>
      <HiOutlineChevronRight size={17} className="menu-arrow" />
    </div>
  )
}

function Profile() {
  return (
    <div className="profile-page">

      {/* ── Hero ── */}
      <div className="profile-hero">
        <button className="edit-btn">
          <HiOutlinePencilSquare size={18} />
        </button>

        <div className="profile-avatar-ring">
          <div className="profile-avatar">J</div>
        </div>

        <h2 className="profile-name">Usuario QuickDrop</h2>
        <p className="profile-email">usuario@correo.com</p>

        {/* Ola inferior */}
        <svg className="profile-wave" viewBox="0 0 430 48" preserveAspectRatio="none">
          <path d="M0,48 L0,24 Q108,0 215,24 Q322,48 430,24 L430,48 Z" fill="var(--bg)" />
        </svg>
      </div>

      {/* ── Stats ── */}
      <div className="profile-stats-row">
        <div className="stat-card">
          <span className="stat-value">24</span>
          <span className="stat-label">Pedidos</span>
        </div>
        <div className="stat-card">
          <HiOutlineStar size={14} className="stat-star" />
          <span className="stat-value">4.9</span>
          <span className="stat-label">Calificación</span>
        </div>
        <div className="stat-card">
          <RiMedalLine size={14} className="stat-medal" />
          <span className="stat-value">Gold</span>
          <span className="stat-label">Nivel</span>
        </div>
      </div>

      {/* ── Secciones ── */}
      <div className="profile-section">
        <p className="profile-section-title">Mi cuenta</p>
        <div className="profile-menu">
          {accountItems.map(item => (
            <MenuItem key={item.label} {...item} />
          ))}
        </div>
      </div>

      <div className="profile-section">
        <p className="profile-section-title">Soporte</p>
        <div className="profile-menu">
          {supportItems.map(item => (
            <MenuItem key={item.label} {...item} />
          ))}
        </div>
      </div>

      <button className="btn-logout">
        <HiArrowRightOnRectangle size={18} />
        Cerrar sesión
      </button>

      <BottomNav />
    </div>
  )
}

export default Profile
