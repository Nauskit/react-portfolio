
import styles from './Skills.module.css'
import { FaJava, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineKubernetes } from "react-icons/ai";
import { FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


function Skills() {
    return (
        <div className={styles.skills_con}>
            <h3 className={styles.skills_title}>
                My skill set
            </h3>
            <ul className={styles.skills_list}>
                <li>
                    <FaJava />
                </li>
                <li>
                    <FaHtml5 />
                </li>
                <li>
                    <FaCss3Alt />
                </li>
                <li>
                    <IoLogoJavascript />
                </li>
                <li>
                    <FaReact />
                </li>
                <li>
                    <AiOutlineKubernetes />
                </li>
                <li>
                    <FaNodeJs />
                </li>
                <li>
                    <FaDocker />
                </li>
                <li>
                    <FaGitAlt />
                </li>
                <li>
                    <SiMysql />
                </li>
            </ul>
        </div>
    )
}

export default Skills