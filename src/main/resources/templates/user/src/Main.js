import React, { Component} from "react";

//import "@icon/elegant-icons/elegant-icons.css";
//import "./css/home.css";
import ImageCompany from "./img/icon.png";
import ImageUser from "./img/user.png";
class Main extends Component{
  render(){
    return(
      <>
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
          <div  id="painel-menu-usuario" className="cold3 esquerda center">
              <div data-model="user" className="esquerda">
                  <div className="img">
                      <img src={ImageUser} />
                  </div>
                  <div className="desc">
                      <label> Damaris</label>
                      <br/>
                      <a>Sair</a>
                  </div>
              </div>
              <nav role="menu" className="row">
                  <div role="itemmenu" data-id="1" className="disable">
                      <div>
                          <i className="far fa-user"></i>
                          <a>Usuários</a>
                      </div>
                  </div>
                  <div role="itemmenu" data-id="2" className="disable">
                      <div>
                          <i className="fas fa-briefcase"></i>
                          <a >Funcionários</a>
                      </div>
                  </div>
                  <div role="itemmenu" data-id="3" className="disable">
                      <div>
                          <i className="fas fa-cash-register"></i>
                          <a >C. Receber</a>
                      </div>
                  </div>
                  <div role="itemmenu" data-id="4" className="disable">
                      <div>
                          <i className="fas fa-money-check"></i>
                          <a >C. Pagar</a>
                      </div>
                  </div>
                  <div role="itemmenu" data-id="5" className="disable">
                      <div>
                          <i className="fas fa-tasks"></i>
                          <a title="Conciliação Bancaria" >C. Bancaria</a>
                      </div>
                  </div>
                  <div role="itemmenu" data-id="6" className="disable">
                      <div>
                          <i className="fas fa-shopping-cart"></i>
                          <a title="Conciliação Bancaria" >Pedidos</a>
                      </div>
                  </div>
              </nav>
          </div>
          <div className="cold8 esquerda" id="painel">
              <div className="row" id="MenuBox">
                  <div className="itemmenu center disable" data-id="1" >
                      <div className="img">
                          <i className="far fa-user"></i>
                      </div>
                      <div className="center separator"></div>
                      <div className="desc">
                          Usuários
                      </div>
                  </div>
                  <div className="itemmenu center disable" data-id="2">
                      <div className="img">
                          <i className="fas fa-briefcase"></i>
                      </div>
                      <div className="center separator"></div>
                      <div className="desc">
                          Funcionários
                      </div>
                  </div>
                  <div className="itemmenu center disable" data-id="3">
                      <div className="img">
                          <i className="fas fa-cash-register"></i>
                      </div>
                      <div className="center separator"></div>
                      <div className="desc">
                          Contas á Receber
                      </div>
                  </div>
                  <div className="itemmenu center disable" data-id="4">
                      <div className="img">
                          <i className="fas fa-money-check"></i>
                      </div>
                      <div className="center separator"></div>
                      <div className="desc">
                          Contas á Pagar
                      </div>
                  </div>
                  <div className="itemmenu center disable" data-id="5">
                      <div className="img">
                          <i className="fas fa-tasks"></i>
                      </div>
                      <div className="center separator"></div>
                      <div className="desc">
                          Conciliação Bancaria
                      </div>
                  </div>
                  <div className="itemmenu center disable" data-id="6" >
                      <div className="img">
                          <i className="fas fa-shopping-cart"></i>
                      </div>
                      <div className="center separator"></div>
                      <div className="desc">
                          Pedidos
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
