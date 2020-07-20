import React, { Component} from "react";

import Banner from './Banner';

import './estrutura.css';

class Home extends Component{

    render(){
        return(
            <>
            	<Banner />
            	<div role="main">
	    	        <section>
	    	            <h2>Clientes e Socios</h2>
	    	            <article>
	    	                <h3> CLientes mobile </h3>
	    	                <p> Mobile tal tal para vendas </p>
	    	            </article>
	    	            <article>
	    	                <h3> Consultas Online </h3>
	    	                <p> Ajude os seus socios a saberem como anta o negocio </p>
	    	            </article>
	    	        </section>
	    	        <section>
	    	            <h2>Gerenciamento</h2>
	    	            
	    	            <article>
	    	                <h3> Micro emprentador </h3>
	    	                <p> Tudo mais rapido de consultar .... </p>
	    	            </article>
	    	            <article>
	    	                <h3> Pequenas e medias empresas</h3>
	    	                <p> Tudo sobre controlle </p>
	    	            </article>
	    	        </section>
	    	    </div>
            </>
        )
    }

}



export default Home;