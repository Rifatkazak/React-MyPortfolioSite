import React from "react";
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import {Navbar} from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import DetailsCard from "../pages/DetailsCard"
import Blog from "../pages/Blog"
import Projects from "../pages/Projects"
import Skills from "../pages/Skills"
import Contacts from "../pages/Contacts"
import Resume from "../pages/Resume"

function AppRouter(){
    return (
        <Router>
            <Navbar />
            <Switch>
                  <Route path="/Home" exact component={Home} />
                  <Route path="/Resume" exact component={Resume} />
                {/* <Route path="/Projects" exact component={Projects} />
                 <Route path="/Skills" exact component={Skills} />
                 <Route path="/Blog" exact  component={Blog} />
                 <Route path="/Contacts" exact component={Contacts} />
                 <Route path="/DetailsCard" exact component={DetailsCard} /> */}
            </Switch>
            <Footer/>
        </Router>
    )
}
export default AppRouter