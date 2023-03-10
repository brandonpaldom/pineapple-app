export default function AuthLayout({ children }) {
  return (
    <div className="grid h-[calc(100vh-4rem)] place-items-center px-6">
      {children}
    </div>
  )
}
