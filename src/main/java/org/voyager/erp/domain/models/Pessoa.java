package org.voyager.erp.domain.models;

import java.util.Map;
import javax.persistence.ElementCollection;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;
import org.voyager.erp.domain.Empresa;
import org.voyager.erp.domain.GenericDomain;

@MappedSuperclass
public abstract class Pessoa extends GenericDomain{
	
	private String nome;
	private String mail;
	private String codigo;
    private String CPFCNPJ;
    
    @ManyToOne
    private Empresa empresa;
    
    @ElementCollection
	private Map<String,String> fone;

	@ElementCollection
	private Map<String,String> celular;
    
    
	public String getCPFCNPJ() {
		return CPFCNPJ;
	}
	public void setCPFCNPJ(String cPFCNPJ) {
		CPFCNPJ = cPFCNPJ;
	}
	public Empresa getEmpresa() {
		return empresa;
	}
	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}
	
	public String getName() {
		return nome;
	}
	public void setName(String name) {
		this.nome = name;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public Map<String, String> getFone() {
		return fone;
	}
	public void setFone(Map<String, String> fone) {
		this.fone = fone;
	}
	public Map<String, String> getCelular() {
		return celular;
	}
	public void setCelular(Map<String, String> celular) {
		this.celular = celular;
	}
}