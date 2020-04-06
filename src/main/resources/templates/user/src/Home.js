import React, { Component} from "react";
import {  Link } from "react-router-dom";

export default class Home extends Component{

    render(){
        return(
            <div className="row" id="MenuBox">
              <Link to="/user"className="itemmenu center disable">
                  <div className="img">
                      <i className="far fa-user"></i>
                  </div>
                  <div className="center separator"></div>
                  <div className="desc">
                      Usuários
                  </div>
              </Link>
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
              <div className="itemmenu center disable" data-id="6">
                  <div className="img">
                      <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="center separator"></div>
                  <div className="desc">
                      Pedidos
                  </div>
              </div>
          </div>
        )
    }



}