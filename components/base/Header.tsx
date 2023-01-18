import { useRouter } from 'next/router'
// import RoundButton from '../UI/Button/RoundButton'
import classes from './Header.module.css'
import Logo from './Logo'

function Header() {

    const router = useRouter();

    const loginHandler = () => {
        router.push('/login')
    }

    return (
        <header className={classes.block}>
            <div className={classes.inner}>
                <Logo/>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <button className={classes.button} onClick = {loginHandler}>
                        로그인
                    </button>
                </div>
            </div>
        </header>
    )
}


export default Header