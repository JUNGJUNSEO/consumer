import Link from 'next/link';
import { useRouter } from 'next/router'
import { Fragment } from 'react';
import classes from './Header.module.css'
import Logo from './Logo'
import SearchButton from './SearchButton';

function Header() {

    const router = useRouter();
    console.log(router.query)
    const loginHandler = () => {
        router.push('/login')
    }

    return (
    
        <header className={classes.block}>
            <div className={classes.inner}>
                <Logo/>
                <div className={classes.items}>
                    <button>toggle button</button>
                    <Link href="/?modal=search" as="/search">
                        <SearchButton/>
                    </Link>
                    <Link href="/?modal=login" as="/login">
                    
                    </Link>
                    <button className={classes.button} onClick = {loginHandler}>
                        로그인
                    </button>
                </div>
            </div>
        </header>
    )
}


export default Header