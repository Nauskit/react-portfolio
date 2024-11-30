import styles from './Testimonials.module.css'

function Testimonials() {
    return (
        <div className={styles.testi_con}>
            <h3 className={styles.testi_title}>Testimonials</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src='https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    <h4>John Doe</h4>
                    <p className={styles.testi_bio}>Web Deverloper</p>
                </div>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src='https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    <h4>John Doe</h4>
                    <p className={styles.testi_bio}>Web Deverloper</p>
                </div>
                <div className={styles.testi_items}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                    <img src='https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    <h4>John Doe</h4>
                    <p className={styles.testi_bio}>Web Deverloper</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials