import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Tilt } from 'react-tilt'
function Hero() {
    return (
        <div className={styles.hero_wrapper}>
            <div className={styles.container}>
                <div className={styles.hero_con}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}>Hi, it's me</p>
                        <h3 className={styles.text_2}>Nutthakit</h3>
                        <p className={styles.text_3}>
                            <span style={{ marginRight: '10px' }}> I'm a </span>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Web Developer',
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </p>
                        <p className={styles.text_4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. fuga non rerum optio, <br /> blanditiis, quasi ad? Modi explicabo.
                        </p>
                        <ul className={styles.hero_social}>
                            <li><a href="https://github.com/Nauskit"><FaGithub /></a></li>
                            <li><a href="https://www.linkedin.com/in/nutthakit-sirichon-b85467228/"><FaLinkedin /></a></li>
                        </ul>
                    </div>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <div className={styles.hero_img}></div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}

export default Hero