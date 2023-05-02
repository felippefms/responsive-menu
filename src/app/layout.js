import './globals.css'

export const metadata = {
  title: 'Responsive Menu',
  description: 'Responsive Menu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='h-screen w-screen bg-gray-200'>{children}</body>
    </html>
  )
}
