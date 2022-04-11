import Link from 'next/link';
import NavStyles from '../styles/nav.module.css';


const nav = () => {
  return (
    <nav className={NavStyles.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            
            <li>
                <Link href='/about'>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default nav