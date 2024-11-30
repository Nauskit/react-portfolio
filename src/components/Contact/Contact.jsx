import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'
function Contact() {
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in Tough</h3>
                    <p className={styles.contact_desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, minima, tempora ex harum iste obcaecati unde fugit assumenda provident voluptates corporis eos? Iusto culpa, temporibus id molestias facilis perferendis odit.</p>
                    <p className={styles.contact_address}>123/123 Main Steet <br />
                        Bangkok, Thailand
                    </p>
                    <p><FaPhone /> (+66) 812345678</p>
                    <p><FaEnvelope /> support@email.com</p>
                </div>
                <div className={styles.contact_form}>
                    <form action=''>
                        <div className={styles.input_group}>
                            <div>
                                <label htmlFor='first name'>First Name</label>
                                <input type='text' placeholder='eg. John' />
                            </div>
                            <div>
                                <label htmlFor='last name'>Last Name</label>
                                <input type='text' placeholder='eg. Doe' />
                            </div>
                        </div>
                        <label htmlFor='email address'>Email Address</label>
                        <input type='email' placeholder='eg. johndoe@gmail.com' />
                        <label htmlFor='message'>Your message</label>
                        <textarea name='' id='' cols="30" rows="10" placeholder='Type here'></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact