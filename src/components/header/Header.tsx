import styles from './header.module.css'
import { Link, useLocation } from 'react-router-dom'
import { links } from './links'


export default function Header() {
    const location = useLocation()
  return (
    
    <header className={styles.header}>
      
        <p className={styles.logo}>Weather App</p>
        {links.map((el,index) => (
            <Link key={index} className={location.pathname === el.pathname ? styles.active : ''} to={el.pathname}>{el.title}</Link>
        ))}
      
        
    </header>
  )
}