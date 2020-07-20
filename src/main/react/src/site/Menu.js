import React, { Component} from "react";

import { Link } from "react-router-dom";

class Menu extends Component{

    render(){
        return(
            <>
			    <header>
			    	<nav >
			    	    <button>
			    	        <div className="bar"></div>
			    	        <div className="bar"></div>
			    	        <div className="bar"></div>
			    	    </button>
		                <ul> 
		                    <li>Beneficios</li>
		                    <li>Entrar/Cadastro</li>
		                    <li>Sobre</li>
		                    <li>Contado</li>
		                </ul>
			    	</nav>
			    	<div className="logo"> Voyager ERP</div>
			    	
		                {this.props.user.islogging ? 
		                	 <div className="user-login-painel">
		                		<img alt="Imagem do usuario" src={this.props.user.profile.image} />
		                	 </div>
		                 :
		                	 <form className="login">
		                	 	<Link to="/user" className="btn" type="button">Login</Link>
		                	 </form>
		                }
			    </header>
            </>
        )
    }
}

export default Menu;