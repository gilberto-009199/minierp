// Implemente o botao de logar!
import React, { Component} from "react";

import Notify from '@dacoto/notify.js';
import Cadastrar from './Cadastrar.js';
import Service from './Service.js';

//import ImageCor from './img/card-primary.png';
import ImageCor from './img/card-warning.png';
import ImageBackground from './img/bg1.jpg';
import './login.css';

class Login extends Component{

    constructor(){
        super();
        console.log(Service)
        //console.log(Service.login(""))
        

        this.state = {
            cadastrar:false,
            form:{
                'email':'',
                'senha':''
             }
        }
    }
    // Menssagens
    notificar(titulo, msg, status = "primary"){
        new Notify({
          title: titulo,
          message: msg
        }, status);
    }

    logar(event){
        
        event.preventDefault();
        let dados = this.state.form;
        console.log("@Login.logar")
        Service.login(dados).then(res=>{
            
            if(!res.status)return this.notificar("Erro",res.message.texto,"danger");

            this.notificar("Sucesso"," Usuario Autenticado!","success")

            let token = res.message;
            this.setUser(token, dados);
        })
     
    }

    changeInput(event){
        
        let form = {...this.state.form};
        form[event.target.name] = event.target.value;
        this.setState({form})
        
    }
    
    setUser(token, dados){
        console.log("@Login.setUser");
        console.log("TOKEN:",token);
        console.log("DADOS:",dados);
        this.props.setUser(token, dados);
    }

    render(){
        // Verifica se o usuario esta autenticado
        return (
            <>
              <div className="login-container" style={{"backgroundImage":"url(" + ImageBackground + ")"}}>
                <div className="login-form">
                  <Cadastrar show={this.state.cadastrar} onClose={(token,dados)=>this.setUser(token,dados)}/> 
                  <form method="POST" onSubmit={(e)=>this.logar(e)}> 
                      <div className="login-form-header">
                        <img alt="Imagem de fundo de cor laranja e vermelha " src={ImageCor}/>
                        <h1 className="login-form-titulo">Login</h1>
                      </div>
                      <div className="login-form-body">
                        <div className="input">
                            <label htmlFor="nome">Usuario</label>
                            <input name="email" value={this.state.form.email} onChange={(e)=>this.changeInput(e)} type="text"  placeholder="Email"/>
                        </div>
                        <div className="input">
                            <label htmlFor="senha">Senha</label>
                            <input name="senha" value={this.state.form.senha}  onChange={(e)=>this.changeInput(e)} type="password" placeholder="Senha"/>
                        </div>
                      </div>
                      <div className="login-form-footer">
                        <button className="btn" type="submit">Logar</button>
                        <div className="links">
                            <a onClick={()=>this.setState({cadastrar:!this.state.cadastrar})} className="link left"> Cadastrar</a>
                            <a className="link right"> Redefinir senha</a>
                        </div>
                      </div>
                  </form>
                </div>
              </div>
            </>
        )
    }

}



export default Login;