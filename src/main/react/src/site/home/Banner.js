import React, { Component} from "react";

import ImageFinancasGif from './img/nuvem-financas.gif';
import ImageCityGreen   from './img/city-green.jpg';

class Banner extends Component{

	render(){
		return(
				<>
					<div role="banner" style={{"backgroundImage":"url(" + ImageCityGreen + ")"}}>
						<div className="banner-esquerdo">
							<div className="banner-esquerdo-conteudo">
								<h3> Teste Gratuitamente!</h3>
								<p>Faça um teste e tenha um insite do sistema.</p>
		
								<img alt="Finanças na nuvem" src={ImageFinancasGif}/>
		
								<button className="btn btn--green"> Testar </button>
		
							</div>
							<div className="banner-esquerdo-vam">
							</div>
						</div>
						<div className="banner-direito">
							<div className="banner-direito-conteudo">
								<h3>Parceiros & Integrações</h3>
								<p> Oferecemos integração para você montar o seu proprio Trem bala.  </p>
							</div>
						</div>
					</div>
				</>
		)
	}

}

export default Banner;