import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import AuthLayout from '../components/AuthLayout'

export default function LoginPage() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {
    login('Brandon', 'brandon@mail.com')
    navigate('/', { replace: true })
  }

  return (
    <AuthLayout>
      <div className="grid w-full grid-cols-1 gap-6 sm:max-w-[25rem]">
        <h1 className="text-center text-[1.75rem] font-semibold">Pineapple</h1>
        <label className="block">
          <span className="text-neutral-700">Email</span>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-transparent bg-neutral-100 focus:border-neutral-500 focus:bg-white focus:ring-0"
            value="brandon@mail.com"
            readOnly
          />
        </label>
        <label className="block">
          <span className="text-neutral-700">Password</span>
          <input
            type="password"
            className="mt-1 block w-full rounded-md border-transparent bg-neutral-100 focus:border-neutral-500 focus:bg-white focus:ring-0"
            value="P5ueuMJ7y4QXbq86"
            readOnly
          />
        </label>
        <button onClick={onLogin} className="btn btn-primary">
          Login
        </button>
      </div>
    </AuthLayout>
  )
}
