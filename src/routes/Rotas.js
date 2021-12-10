import { BrowserRouter, Switch, Route } from "react-router-dom";

import List from "../page/List/List";
import Calendario from "../page/Calendario/Calendario";


function Rotas (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={List}/>
                <Route path='/calendario' component={Calendario}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas