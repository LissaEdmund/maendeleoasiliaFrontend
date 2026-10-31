import type { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedRouteProps {
  isAuthenticated: boolean
  redirectTo?: string
  children?: ReactNode
}

export function ProtectedRoute({ isAuthenticated, redirectTo = '/', children }: ProtectedRouteProps) {
  if (!isAuthenticated) return <Navigate to={redirectTo} replace />
  return children ?? <Outlet />
}
