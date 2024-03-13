
import { useHistory } from 'react-router-dom'
import'./naveBare.css'

const NaveBare = () => {
   const history = useHistory()

  return (

    <div className='navebare'>
       <span onClick={()=>history.push("/")}>Accueil</span>
       <span  onClick={()=>history.push("/education")}>Education</span>
       <span  onClick={()=>history.push("/projet")}>Projet</span>
    </div>
  )
}

export default NaveBare