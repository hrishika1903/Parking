// FILE: src/app/layout.js
import './globals.css';  // <-- Add this line to import Tailwind CSS globally

export const metadata = {
  title: 'Parking Management System - Security Panel',
  description: 'Security panel for parking management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}