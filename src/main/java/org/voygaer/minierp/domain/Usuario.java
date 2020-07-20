package org.voygaer.minierp.domain;

import java.util.Date;

import javax.persistence.Entity;

import org.voygaer.minierp.domain.model.Pessoa;

@Entity(name = "tbl_usuario")
public class Usuario extends Pessoa{
	
	private String	email;
	private String	senha;
	private Date	ultimoLogin;
	
	public String getEmail() {
		return this.email;
	}
	public Usuario setEmail(String email) {
		this.email = email;
		return this;
	}
	
	public String getSenha() {
		return senha;
	}
	public Usuario setSenha(String senha) {
		this.senha = senha;
		return this;
	}
	public Date getUltimoLogin() {
		return ultimoLogin;
	}
	public Usuario setUltimoLogin(Date ultimoLogin) {
		this.ultimoLogin = ultimoLogin;
		return this;
	}
	
}
