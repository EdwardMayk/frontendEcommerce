import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Link } from 'react-router-dom'
import Login from './login'
import Dashboard from './dashboard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Dashboard />
  )
}
