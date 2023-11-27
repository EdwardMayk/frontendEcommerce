import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Link } from 'react-router-dom'

import Prueba from './prueba'
import Dashboard from './dashboard'
import Store from './store'
import Login from './auth'

export default function Home() {
  return (
    <Login />
  )
}
