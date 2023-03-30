import { Link } from 'react-router-dom'
import './botton.css'



const Button = ({children ,path}) => {
  return (
    <Link className='btn-link' to={`${path}`}>
    <button >
        {children}
    </button>
    </Link>
  )
}

export default Button
