import { Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.css'
import Header from '../header/Header';

function Layout () {
    const location = useLocation()
    console.log(location.pathname);
    return (
        <div className={styles.page}>
            <Header />
            
            <main className={styles.main}>
               <Outlet/>
            </main>
            <footer  className={styles.footer}>
               
            </footer>
        </div>
    );
}

export default Layout;