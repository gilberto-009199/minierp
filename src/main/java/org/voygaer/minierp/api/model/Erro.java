package org.voygaer.minierp.api.model;

public class Erro {
	
	private int code;
	private String texto;
	
	public Erro(int code, String mensagem) {
		this.code = code;
		this.texto = mensagem;
	}
	
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String mensagem) {
		this.texto = mensagem;
	}
	
}
