import './accueil.css'
import GithubIcons from "@mui/icons-material/GitHub"
import LinkedInIcons from "@mui/icons-material/LinkedIn"
import MailIcons from "@mui/icons-material/Mail"
import FacebookIcons from "@mui/icons-material/Facebook"
import Experiance from './Experiance'
const Accueile = () => {

  return (
    <>
    <div className='accueil'>
        <div className="titre">
           <div className="nom">
           <h1>Je m'appelle Rovaniaina Stephano</h1>
           </div> 
            <div className="patien">
            <span>Développeur Javascript</span>
            </div>
            <div>
               <a href="https://github.com/stephanorakotozandry/StephanoPorfolio" target='_blank' rel='noopener noreferrer' style={{color:"white"}}> <GithubIcons  style={{fontSize:"60px"}}/></a>
               <a href="https://www.linkedin.com/in/rovaniana-rakotozandry-5336612a1/" target='_blank' rel='noopener noreferrer' style={{color:"white"}}><LinkedInIcons style={{fontSize:"60px"}}/></a>
               <a href="https://mail.google.com/" target='_blank' rel='noopener noreferrer' style={{color:"white"}}><MailIcons style={{fontSize:"60px"}}/></a>
               <a href="https://www.facebook.com/Niaina_Stephano" target='_blank' rel='noopener noreferrer' style={{color:"white"}}> <FacebookIcons style={{fontSize:"60px"}}/></a>
            </div>
        </div>
    </div>
    <div className="exper">
    <Experiance/>  
    </div>
    </>
  )
}

export default Accueile