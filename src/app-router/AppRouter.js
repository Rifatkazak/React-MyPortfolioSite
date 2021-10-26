import React from "react";
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import {Navbar} from "../components/Navbar"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Contacts from "../pages/Contacts"
import Comments  from "../pages/Comments";
import Footer from "../components/Footer"



function AppRouter(){
    return (
        <Router>
            <Navbar />
            <Switch>
                  <Route path="/" exact component={Home} />
                 <Route path="/Projects" exact component={Projects} />
                 <Route path="/Contacts" exact component={Contacts} />
                 <Route path="/Comments" exact component={Comments} />
            </Switch>
            <Footer />
        </Router>
    )
}
export default AppRouter