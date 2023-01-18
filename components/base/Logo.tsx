import Link from 'next/link'
import classes from './Logo.module.css'

function Logo() {

    return (
        <div className={classes.logo}>
            <Link href='/'>consumer</Link>
        </div>

    )
}

export default Logo