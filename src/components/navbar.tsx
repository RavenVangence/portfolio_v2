import profileImg from '../assets/profile_transparent.png'; 
import { FaReact, FaHtml5, FaGit, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiMongodb, SiExpress, SiTypescript, SiJavascript, SiDotnet  } from 'react-icons/si';
import { TbBrandCSharp, TbBrandTypescript  } from "react-icons/tb";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { IoLogoCss3} from 'react-icons/io';
import { FiFramer } from 'react-icons/fi';


function NavbarAndDashboard() {


    let intro = 'Welcome to my portfolio! My name is Ndivhuwo Lodrick Munonela, I am a full-stack developer, passionate about creating dynamic web applications that deliver seamless user experiences. Browse my work and let\'s bring your project to life!'

    return (
    <section className="nav-dashboard-container">
        <div className='container'>
            <nav className='nav-container'>
                <ul>
                    <li><h1>Dashboard</h1></li>
                </ul>
            </nav>
            <div className='dashboard-container'>
                <div className='dashboard-left-container'>
                    <p id='dashboard-par'>
                        {intro}
                        </p>
                    <div className='dashboard-icon-container'>
                        <div>
                            <FaHtml5 id='html-icon' className='dashboard-icon' title='HTML'/>
                        </div>
                        <div><FaReact id='react-icon' className='dashboard-icon' title='REACT.JS'/></div>
                        <div><TbBrandCSharp id='csharp-icon' className='dashboard-icon' title='C-SHARP'/></div>
                        <div><FaGit id='git-icon' className='dashboard-icon' title='GIT'/></div>
                        <div><TbBrandTypescript id='typescript-icon' className='dashboard-icon' title='TYPESCRIPT'/></div>
                        <div><SiExpress id='express-icon' className='dashboard-icon' title='EXPRESS.JS'/></div>
                        <div><SiMongodb id='mongodb-icon' className='dashboard-icon' title='MONGO DB'/></div>
                        <div><SiDotnet  id='dotnet-icon' className='dashboard-icon' title='DOTNET'/></div>
                        <div><SiMicrosoftsqlserver id='sql-icon' className='dashboard-icon' title='MICROSOFT SQL SERVER'/></div>
                        <div><IoLogoCss3 id='css-icon' className='dashboard-icon' title='CSS'/></div>
                        <div><FaNodeJs id='nodejs-icon' className='dashboard-icon' title='NODE.JS'/></div>
                        <div><SiRedux id='redux-icon' className='dashboard-icon' title='REDUX TOOLKIT'/></div>
                        <div><SiJavascript id='javascript-icon' className='dashboard-icon' title='JAVASCRIPT'/></div>
                        <div><FiFramer id='framer-icon' className='dashboard-icon' title='FRAMER MOTION'/></div>
                    </div>
                    <div className='dashboard-btn-container'>
                        <button id='hire-me-btn' className='dashboard-btn'>Hire Me</button>
                        <button id='resume-btn' className='dashboard-btn'>Resume</button>
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