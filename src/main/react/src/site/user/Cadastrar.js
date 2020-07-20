// Implemente o botao de logar!
import React, { Component} from "react";
import Notify from '@dacoto/notify.js';

import Service from './Service.js';

import ImageCor from './img/card-primary.png';
//import ImageCor from './img/card-warning.png';
import './login.css';

class Cadastrar extends Component{

    constructor(){
        super();
        console.log(Service)
        //console.log(Service.login(""))
        

        this.state = {
            form:{
                'nome':'',
                'email':'',
                'senha':'',
                'senha2':''
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
    // Verifica se o formulario e valido!
    isValida(){
        let valido = true;

        if(this.state.form.senha !== this.state.form.senha2){
           
            this.notificar("Formulario Incorreto","Senhas diferentes!","danger")
            valido = false;

        }
        return valido;

    }
    cadastrar(event){
        
        event.preventDefault();
        
        console.log("Submetendo o form",this.state.form)
        
        if(!this.isValida())return false;

        let dados = this.state.form;

        Service.cadastrar(dados).then(res=>{
            if(!res.status)return this.notificar("Erro",res.message.texto,"danger");
            
            this.notificar("Sucesso"," Usuario Cadastrado!","success")

            let token = res.message;
            this.onClose(token, dados);

        })

        return false;

     }

    changeInput(event){
        
        let form = {...this.state.form};
        form[event.target.name] = event.target.value;
        this.setState({form})
        
    }
    
    onClose(token, dados){

        let nome  = dados.nome;
        let email = dados.email;

        this.props.onClose(token,{nome,email});

    }

    render(){
        
        // Verifica se o usuario esta autenticado
        return (
            <>
                <form className={`cadastrar-form ${ this.props.show ? 'active':''}`} method="POST" onSubmit={(e)=>this.cadastrar(e)}>
                  <div className="login-form-header">
                    <img alt="Imagem de fundo de cor laranja e vermelha " src={ImageCor}/>
                    <h1 className="login-form-titulo">Criar</h1>
                  </div>
                  <div className="login-form-body">
                    <div className="input">
                        <label htmlFor="nome">Nome</label>
                        <input name="nome" value={this.state.form.nome} onChange={(e)=>this.changeInput(e)} type="text"  placeholder="Nome"/>
                    </div>
                    <div className="input">
                        <label htmlFor="nome">Usuario</label>
                        <input name="email" value={this.state.form.email} onChange={(e)=>this.changeInput(e)} required type="email"  placeholder="Email"/>
                    </div>
                    <div className="input">
                        <label htmlFor="senha">Senha</label>
                        <input name="senha" value={this.state.form.senha} onChange={(e)=>this.changeInput(e)} required type="password" placeholder="Senha"/>
                    </div>
                    <div className="input">
                        <label htmlFor="senha">Senha</label>
                        <input name="senha2" value={this.state.form.senha2} onChange={(e)=>this.changeInput(e)} required type="password" placeholder="Senha"/>
                    </div>
                  </div>
                  <div className="login-form-footer">
                    <button className="btn" type="submit">Cadastrar</button>
                  </div>
                </form>
            </>
        )
    }

}



export default Cadastrar;