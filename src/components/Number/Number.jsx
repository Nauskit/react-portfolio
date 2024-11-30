import styles from './Number.module.css'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

function Number() {
    return (
        <div className={styles.number_con}>
            <div className={styles.number_items}>
                <h3>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={5} duration={5} /> : null} +
                            </div>)}
                    </VisibilitySensor>
                </h3>
                <p>Project</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={0} duration={5} /> : null} +
                            </div>)}
                    </VisibilitySensor></h3>
                <p>Company Help</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={0} duration={5} /> : null} +
                            </div>)}
                    </VisibilitySensor></h3>
                <p>Job Experience</p>
            </div>
            <div className={styles.number_items}>
                <h3>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                            <div>
                                {isVisible ? <CountUp start={0} end={0} duration={5} /> : null} +
                            </div>)}
                    </VisibilitySensor>
                </h3>
                <p>Clients</p>
            </div>
        </div>
    )
}

export default Number