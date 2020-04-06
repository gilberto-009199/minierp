import React, { Component} from "react";
import {  HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home.js";
import User from "./User.js";



//import "@icon/elegant-icons/elegant-icons.css";
//import "./css/home.css";
import ImageCompany from "./img/icon.png";
import ImageUser from "./img/user.png";

class Main extends Component{
  render(){
    return(
          <div>
              <Router>
                  <header className="row">
                      <div id="logo" className="cold5 esquerda">
                          <div className="logo">
                              <img src={ImageCompany}/>
                          </div>
                          <div className="desc center">
                              <label> Nome da empresa </label>
                          </div>
                      </div>
                      <form role="search" className="cold4 center esquerda">
                          <span className="content-icon-input direita">
                              <input type="text" placeholder="Pesquisar..." className="direita" id="search"/>
                              <span aria-hidden="true" className="icon_search"></span>
                          </span>
                      </form>
                  </header>
                  
                  <div role="main" className="row">
                     
                      <div id="painel-menu-usuario" className="cold3 esquerda center">
                          <div data-model="user" className="esquerda">
                              <div className="img">
                                  <img src={ImageUser} />
                              </div>
                              <div className="desc">
                                  <label> Damaris</label>
                                  <br/>
                                  <label>Sair</label>
                              </div>
                          </div>

                          <nav role="menu" className="row">
                              <Link to="/user">
                              <div role="itemmenu" data-id="1" className="disable">
                                  <div>
                                      <i className="far fa-user"></i>
                                      <label>Usuários</label>
                                  </div>
                              </div>
                              </Link>
                              <Link to="/funcionary">
                              <div role="itemmenu" data-id="2" className="disable">
                                  <div>
                                      <i className="fas fa-briefcase"></i>
                                      <label>Funcionários</label>
                                  </div>
                              </div>
                              </Link>
                              <Link to="/CReceber">
                              <div role="itemmenu" data-id="3" className="disable">
                                  <div>
                                      <i className="fas fa-cash-register"></i>
                                      <label>C. Receber</label>
                                  </div>
                              </div>
                              </Link>
                              <Link to="/CPagar">
                              <div role="itemmenu" data-id="4" className="disable">
                                  <div>
                                      <i className="fas fa-money-check"></i>
                                      <label>C. Pagar</label>
                                  </div>
                              </div>
                              </Link>
                              <Link to="/CBancaria">
                              <div role="itemmenu" data-id="5" className="disable">
                                  <div>
                                      <i className="fas fa-tasks"></i>
                                      <label title="Conciliação Bancaria">C. Bancaria</label>
                                  </div>
                              </div>
                              </Link>
                              <Link to="/pedidos">
                              <div role="itemmenu" data-id="6" className="disable">
                                  <div>
                                      <i className="fas fa-shopping-cart"></i>
                                      <label title="Conciliação Bancaria">Pedidos</label>
                                  </div>
                              </div>
                              </Link>
                          </nav>
                      </div>

                      <div className="cold8 esquerda" id="painel">

                          <Switch>

                              
                              <Route path="/user">
                                  <User />
                              </Route>
                              <Route path="/">
                                  <Home />
                              </Route>
                          </Switch>

                      </div>

                  </div>
              </Router>
          </div>
    );
  }
}

export default Main;
