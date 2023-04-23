import React from 'react'
import Project from './project';
import authImg from '../assets/auth-app.3d14c7605b542dd3f2b3.png'
import hikenStoreImg from '../assets/hiken-store.8b9349c637458df52743.png'
import portfolioV1Img from '../assets/personal-website-landing-page.206374ce04fcd815e329.png';
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
                <Project projectName='Auth-App' imgUrl={authImg} githubUrl='https://github.com/RavenVangence/user-authentication-authorization' liveUrl='https://raven-auth-api.netlify.app/'/>

                <Project projectName='Hiken-Store' imgUrl={hikenStoreImg} githubUrl='https://github.com/RavenVangence/hiken-store' liveUrl='https://hikenstore.netlify.app/'/>

                <Project projectName='Sales Report' imgUrl={salesReportImg} githubUrl='https://github.com/RavenVangence/fuzzy-invention' liveUrl='https://acmecorp-monthly-sales-report.netlify.app/'/>

                <Project projectName='Portfolio-v1' imgUrl={portfolioV1Img} githubUrl='' liveUrl='https://ndivhuworavendev.netlify.app/'/>
            </div>
        </div>
    </section>
}

export default Projects;