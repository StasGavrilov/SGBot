'use client'
import { useState } from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import { header, pipe } from './classes'
import UserAvatar from './Avatar'
import LoginModal from '@/admin/Login'

export default function Header() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="relative">
      <header className={header}>
        <Logo />
        <div className={pipe} />
        <NavBar />

        <div className="ml-auto relative">
          <div className="cursor-pointer" onClick={() => setShowLogin(prev => !prev)}>
            <UserAvatar />
          </div>
        </div>
      </header>
    </div>
  )
}
