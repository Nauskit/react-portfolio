import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import styles from './Navbar.module.css'

function Navbar() {

    const [isToggled, setToggled] = useState(false);

    function handleToggle() {
        setToggled(!isToggled)
    }

    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.nav_con}>
                    <div className={styles.logo}>
                        <a href="#">JD PORT</a>
                    </div>
                    <ul>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Protfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className={styles.button}>
                        <a href="#">Hire Me</a>
                    </div>
                </div>

                {/* Moblie Menu */}
                <FaBars className={styles.bars} onClick={handleToggle} />
                {isToggled ? (
                    <>
                        <ul className={styles.mobile_menu}>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Protfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className={styles.mobile_button}>
                            <a href="#">Hire Me</a>
                        </div>
                    </>
                ) : null}
            </div>
        </nav>
    )
}

export default Navbar