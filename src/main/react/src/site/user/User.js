import React, { Component} from "react";
//import { Route } from "react-router-dom";

import Login from './Login.js';

class User extends Component{
    
    setUser(token, dados){
        this.props.setUser(token,dados);
    }

    render(){
        // Verifica se o usuario esta autenticado
        return (
            <>
                { !this.props.user.islogging ?

                   <Login setUser={(token,dados)=>this.setUser(token,dados)}/>

                :

                   <label>Painel de  User</label>

                }
            </>
        )
    }

}



export default User;