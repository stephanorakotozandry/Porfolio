import {BrowserRouter, Route, Switch } from "react-router-dom"
import"./App.css"
import Accueiles from "./Page/Accuiels"
import Contactes from "./Page/Contacts"
import Projets from "./Page/Projets"
import ProjetId from "./Page/ProjeteId"




export default function App() {

  return(
    <div className="App">
      <BrowserRouter>
      <Switch>
         <Route path="/" exact component={()=><Accueiles/>}/>
         <Route path="/education" component={()=><Projets/>}/>
         <Route path="/projet/:id" component={()=><ProjetId/>}/>
         <Route path="/projet" component={()=><Contactes/>}/>
      </Switch>
      </BrowserRouter>
    </div>
  )
}