import Link from 'next/link';
import classes from './Header.module.css'
import Logo from './Logo'
import {FaSearch} from "react-icons/fa"

function Header() {


    return (
    
        <header className={classes.block}>
            <div className={classes.inner}>
                <Logo/>
                <div className={classes.items}>
                    <button>toggle button</button>
                    <Link href="/?modal=search" as="/search">
                        <FaSearch/>
                    </Link>
                    <Link href="/?modal=login" as="/login">
                        로그인
                    </Link>
                
                </div>
            </div>
        </header>
    )
}


export default Header