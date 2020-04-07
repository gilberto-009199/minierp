import React, { Component} from "react";
import Alert from "./Alert.js";

import ImageMagnify from "./img/magnify.gif";

class User extends Component{
    

    constructor(){
        super();
        this.state = {
            lista:[],
            modal:{
                show:false
            }
        };
    }

    addUser(){
        this.setState({
            modal:{
                show:true
            }
        })
    }

    render(){
        return(
            <>
                <div className="conteudo">
                  <p className="legend">Usuarios</p>
                  <div className="contem-tabela">
                      <div className="action-table">
                          <button onClick={()=>this.addUser()}><i className="far fa-user"></i> Criar </button>
                      </div>
                      <table className="padrao" id="tbl_usuarios">
                          <thead>
                              <tr>
                                  <th>ID</th>
                                  <th>E-mail</th>
                                  <th>CPF</th>
                                  <th>online</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                            {   

                               this.state.lista.map(function(item){
                                  return(
                                        <tr data-id={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.cpf}</td>
                                        <td>{item.horas}</td>
                                        <td className="center">
                                            <a ><label><i className="far fa-eye"></i>Exibir</label></a>
                                            <a ><label><i className="far fa-trash-alt"></i>Deletar</label></a>
                                            <a ><label><i className="fas fa-edit"></i>Editar</label></a>
                                        </td>
                                    </tr>
                                  )  
                                })
                            }
                            <tr className='mascara'>
                                  <td colSpan='5' className='lupa'>
                                      <img  alt='Nada encontrado' src={ImageMagnify}/>
                                      <p> Nenhum Registro encontado! </p>
                                  </td>
                             </tr>
                            
                          </tbody>
                      </table>
                  </div>
                </div>
                <Alert show={this.state.modal.show}>
                    oi
                </Alert>
            </>
        )
    }

}



export default User;