import React from 'react'
import useAuth from '../hooks/useAuth'
import Protected from './Protected'

export default function Loader() {
  const isLogin = useAuth()
  return (
      isLogin ? <Protected /> : <div>Not logged in</div>
  )
}