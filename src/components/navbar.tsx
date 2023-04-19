import profileImg from '../assets/profile_transparent.png'; 
import { FaReact, FaHtml5, FaGit, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiMongodb, SiExpress } from 'react-icons/si';
import { IoLogoCss3, IoLogoJavascript} from 'react-icons/io';
import { FiFramer } from 'react-icons/fi';
import { TbBrandTypescript} from 'react-icons/tb';


function NavbarAndDashboard() {

    return (
    <section className="nav-dashboard-container">
        <div className='container'>
            <nav className='nav-container'>
                <ul>
                    <li><h1>Dashboard</h1></li>
                    <li><h1>Projects</h1></li>
                    <li><h1>Contact</h1></li>
                </ul>
            </nav>
            <div className='dashboard-container'>
                <div className='dashboard-par'>
                    <p>
                        Welcome to my portfolio! My name is Ndivhuwo Lodrick Munonela, I am a full-stack MERN developer, passionate about creating dynamic web applications that deliver seamless user experiences. Browse my work and let's bring your project to life!
                    </p>
                    <div className='dashboard-icon-container'>
                        <FaReact id='react-icon' className='dashboard-icon'/>
                        <FaHtml5 id='html-icon' className='dashboard-icon'/>
                        <FaGit id='git-icon' className='dashboard-icon'/>
                        <TbBrandTypescript id='typescript-icon' className='dashboard-icon'/>
                        <SiExpress id='express-icon' className='dashboard-icon'/>
                        <SiMongodb id='mongodb-icon' className='dashboard-icon'/>
                        <IoLogoCss3 id='css-icon' className='dashboard-icon'/>
                        <FaNodeJs id='nodejs-icon' className='dashboard-icon'/>
                        <SiRedux id='redux-icon' className='dashboard-icon'/>
                        <IoLogoJavascript id='javascript-icon' className='dashboard-icon'/>
                        <FiFramer id='framer-icon' className='dashboard-icon'/>
                    </div>
                </div>
                <figure className='profile-img'>
                    <img src={profileImg} alt="profile"/>
                </figure>
            </div>
            
            <div className="black-sideband"></div>
        </div>
    </section>
)
}

export default NavbarAndDashboard;