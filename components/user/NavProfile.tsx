import Link from "next/link"
import Router, { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import styles from "./NavProfile.module.css"

function NavProfile() {
    const [selectedOption, setSelectedOption] = useState('myposts');
    const router = useRouter();
 
    useEffect(() => {
        const option = router.asPath.split('/').pop(); 
        setSelectedOption(option)
    }, [selectedOption])

    return (
        <Fragment>
            <div className={styles.block}>
                <div className={styles.container}>
                    <ul className={styles.navBar}>
                        <li>
                            <Link href = {`${router.query.userId}`}>
                                <span className={styles.label}>내 포스트</span>
                                <span className={styles.count}>0</span>
                            </Link>
                        </li>
                        <li>
                            <Link href = {`${router.query.userId}/like`}>
                                <span className={styles.label}>좋아요 표시한 포스트</span>
                                <span className={styles.count}>0</span>
                            </Link>
                        </li>
                        <li>
                            <Link href = {`${router.query.userId}/read`}>
                                <span className={styles.label}>최근에 읽은 포스트</span>
                                <span className={styles.count}>0</span>
                            </Link>
                        </li>
                
                    </ul>


                </div>

            </div>

            {/* {selectedOption === 'myposts' && 
                <div>seo</div>
            }
            {selectedOption === 'like' && 
                <div>seo</div>
            }
            {selectedOption === 'read' && 
                <div>seo</div>
            } */}
        </Fragment>

    )
}

export default NavProfile