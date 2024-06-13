import { motion } from "framer-motion";

import Project from './project';
import authImg from '../assets/auth-app.3d14c7605b542dd3f2b3.png'
import hikenStoreImg from '../assets/hiken-store.8b9349c637458df52743.png'
import salesReportImg from '../assets/sales_report.png';

function Projects() {
    return <section className='projects-container'>
        <div className='container'>
            <nav className='projects-nav-container'>
                <ul>
                    <li><h1>Projects</h1></li>
                </ul>
            </nav>

            <div className='projects-div-container'>

                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="project-upper-div-container">
                        <Project projectName='Auth-App' imgUrl={authImg} githubUrl='https://github.com/RavenVangence/user-authentication-authorization' liveUrl='https://raven-auth-api.netlify.app/'/>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="project-upper-div-container">
                        <Project projectName='Hiken-Store' imgUrl={hikenStoreImg} githubUrl='https://github.com/RavenVangence/hiken-store' liveUrl='https://hikenstore.netlify.app/'/>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="project-upper-div-container">
                        <Project 
                            projectName='Sales Report' 
                            imgUrl={salesReportImg} 
                            githubUrl='https://github.com/RavenVangence/fuzzy-invention' 
                            liveUrl='https://acmecorp-monthly-sales-report.netlify.app/'/>
                    </div>
                </motion.div>


            </div>
        </div>
    </section>
}

export default Projects;