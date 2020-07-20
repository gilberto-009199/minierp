package org.voygaer.minierp.domain.model;

import javax.persistence.MappedSuperclass;
import org.voygaer.minierp.domain.GenericDomain;

@MappedSuperclass
public class Pessoa extends GenericDomain{
	
	private String nome;
	private String CPFCNPJ;
	private String codigo;
	
	public String getNome() {
		return this.nome;
	}
	public Pessoa setNome(String nome) {
		this.nome = nome;
		return this;
	}
	public String getCPFCNPJ() {
		return CPFCNPJ;
	}
	public Pessoa setCPFCNPJ(String cPFCNPJ) {
		CPFCNPJ = cPFCNPJ;
		return this;
	}
	public String getCodigo() {
		return codigo;
	}
	public Pessoa setCodigo(String codigo) {
		this.codigo = codigo;
		return this;
	}
	
	
	
}
