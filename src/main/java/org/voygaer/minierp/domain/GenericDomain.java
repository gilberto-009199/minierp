package org.voygaer.minierp.domain;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class GenericDomain {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	/*
	 * Determina quando o individuo foi criado ( create )
	 */
	private Date criadoEm;
	/*
	 * Determina quando o individuo foi atualizado ( update )
	 */
	private Date atualizadoEm;
	
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public Date getCriadoEm() {
		return criadoEm;
	}
	public void setCriadoEm(Date criadoEm) {
		this.criadoEm = criadoEm;
	}
	public Date getAtualizadoEm() {
		return atualizadoEm;
	}
	public void setAtualizadoEm(Date atualizadoEm) {
		this.atualizadoEm = atualizadoEm;
	}
	
	
	
}
