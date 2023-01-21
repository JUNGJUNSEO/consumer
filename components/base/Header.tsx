import { useRouter } from 'next/router'
import classes from './Header.module.css'
import Logo from './Logo'
import SearchButton from './SearchButton';

function Header() {

    const router = useRouter();

    const loginHandler = () => {
        router.push('/login')
    }

    return (
        <header className={classes.block}>
            <div className={classes.inner}>
                <Logo/>
                <div className={classes.items}>
                    <button>toggle button</button>
                    <SearchButton/>
                    <button className={classes.button} onClick = {loginHandler}>
                        로그인
                    </button>
                </div>
            </div>
        </header>
    )
}


export default Header