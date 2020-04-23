package org.voyager.erp.domain;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity(name = "tbl_pagamento")
public class Pagamento extends GenericDomain{
    
	@ManyToOne
    private Empresa empresa;
    
	private double valor;

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}
	
	
	
}
