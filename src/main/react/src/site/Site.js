import  React ,{ Component } from 'react';

import {  HashRouter as Router, Switch, Route } from "react-router-dom";

import Menu from './Menu';

import Home from "./home/Home.js";
import User from "./user/User.js";

import './estrutura.css';

class Site extends Component {
	
	
	constructor(){
		super();
		this.state = {
				user:{
					profile:{
						image:'https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/64/Administrator-icon.png',
						name:'GIlberto ramos de OLiveira'
					},
					JWT:{},
					islogging: false
				}
		}
	}
    setUser(token, dados){
    	this.setState({
    		user:{
    			profile:{
						image:'https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/64/Administrator-icon.png',
						email:dados.email
					},
					JWT:{token},
					islogging: true
    		}
    	})
    }
	render(){
		return(
			<>
			  <Router>
			  		
			  	<Menu user={this.state.user} />
	            	
                <div className="cold8 esquerda" id="painel">
	
	                  <Switch>
	                      <Route path="/user">
	                          <User user={this.state.user} setUser={(token, dados)=>this.setUser(token, dados)}/>
	                      </Route>
	                      <Route path="/">
	                          <Home />
	                      </Route>
	                  </Switch>
	
	              </div>
	
	          </Router>
			</>
		);
	}
  
}

export default Site;
