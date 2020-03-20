package org.voyager.erp.domain;

import java.util.List;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.voyager.erp.domain.models.Pessoa;

@Entity(name = "tbl_funcionario")
public class Funcionario extends Pessoa{
	
    @ManyToOne
    private Empresa empresa;
	
	private double Salario;
	
	private String RG;
	
	@OneToOne
	private Cargo cargo;
	@OneToMany
	private List<Pagamento> pagamentos;
	
	
}
