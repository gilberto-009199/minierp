import React, { Component} from "react";
import Select from 'react-select';
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
                <Alert show={this.state.modal.show} onClose={()=>{ this.setState({  modal:{ show:false } }) }}>
                    <form>
                      <div class="row">
                         <div class="cold6">
                              <label class="row"> Nome: </label>
                              <div class="content-icon-input cold10">
                                  <input name="nome" class="input-icone"  placeholder="João" required/>
                                  <span aria-hidden="true" class="icon_profile"></span>
                              </div>
                         </div>
                         <div class="cold3">
                              <label class="row"> CPF: </label>
                              <input  name="cpf" placeholder="000.000.000-00"  required/>
                         </div>
                      </div>
                      <div class="row">
                         <div class="cold6">
                              <label class="row"> E-mail: </label>
                              <div class="content-icon-input cold10">
                                  <input name="email" class="input-icone" placeholder="exemplo@mail.com" required/>
                                  <span aria-hidden="true" class="icon_mail_alt"></span>
                              </div>
                         </div>
                         <div class="cold3">
                              <label class="row"> Telefone: </label>
                              <div class="content-icon-input">
                                  <input name="telefone" class="input-icone" placeholder="(11)4303-6889"  required/>
                                  <span aria-hidden="true" class="icon_phone"></span>
                              </div>
                         </div>
                      </div>
                      <div class="row">
                         <div class="cold8" style={{"width":"81%"}}>
                              <label class="row"> Senha: </label>
                              <div class="content-icon-input cold10">
                                  <input name="password" type="password" class="input-icone" required/>
                                  <span aria-hidden="true" class="icon_key_alt"></span>
                              </div>
                         </div>
                      </div>
                      <div class="row">
                         <div class="cold8" style={{"width":"81%"}} data-model="slcPermicoes">
                              <label class="row"> Permições: </label>
                              <Select name="permicoes" isMulti={true} style={{"width":"290px"}}
                               options={[
                                        {value:"1", label:"1"},
                                        {value:"2", label:"2"},
                                        {value:"3", label:"3"}
                                        ]} multiple="multiple" required className="basic-multi-select"
    classNamePrefix="select">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                              </Select>
                         </div>
                      </div>
                      <div className="actions">
                        <button type="submit"> Salvar </button>
                      </div>
                  </form>
                </Alert>
            </>
        )
    }

}



export default User;