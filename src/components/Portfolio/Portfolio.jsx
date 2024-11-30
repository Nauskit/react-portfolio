
import styles from './Portfolio.module.css'
import { Tilt } from 'react-tilt'
function Portfolio() {
    return (
        <div className={styles.portfolio_con}>
            <h3 className={styles.portfolio_title}>My Portfolio</h3>
            <div className={styles.portfolio_list}>
                <div className={styles.portfolio_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <img src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </Tilt>
                    <p>Portfolio</p>
                </div>
                <div className={styles.portfolio_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <img src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </Tilt>
                    <p>Portfolio</p>
                </div>
                <div className={styles.portfolio_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <img src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </Tilt>
                    <p>Portfolio</p>
                </div>
                <div className={styles.portfolio_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <img src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </Tilt>
                    <p>Portfolio</p>
                </div>
                <div className={styles.portfolio_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <img src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </Tilt>
                    <p>Portfolio</p>
                </div>
                <div className={styles.portfolio_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <img src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </Tilt>
                    <p>Portfolio</p>
                </div>

            </div>
        </ div>
    )
}

export default Portfolio