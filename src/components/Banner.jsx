import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className=" bg-neutral-100 p-4 text-center text-[0.875rem] text-neutral-700">
      <p>
        Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade
        in iPhone 11 or higher.{' '}
        <Link to="/iphone" className="text-blue-600 hover:underline">
          Shop iPhone
        </Link>
      </p>
    </div>
  )
}
