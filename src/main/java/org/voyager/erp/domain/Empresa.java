package org.voyager.erp.domain;

import javax.persistence.Entity;

@Entity(name = "tbl_empresa")
public class Empresa extends GenericDomain{
	
	private String nome;
	
	private String fantasia;
	
	private String logo;
	
	private String CNPJ;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getFantasia() {
		return fantasia;
	}
	public void setFantasia(String fantasia) {
		this.fantasia = fantasia;
	}
	public String getLogo() {
		return logo;
	}
	public void setLogo(String logo) {
		this.logo = logo;
	}
	public String getCNPJ() {
		return CNPJ;
	}
	public void setCNPJ(String cNPJ) {
		CNPJ = cNPJ;
	}
	
}
