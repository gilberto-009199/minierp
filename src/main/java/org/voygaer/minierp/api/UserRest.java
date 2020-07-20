package org.voygaer.minierp.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.voygaer.minierp.api.model.Cadastrar;
import org.voygaer.minierp.api.model.Erro;
import org.voygaer.minierp.api.model.Login;
import org.voygaer.minierp.api.model.Message;
import org.voygaer.minierp.domain.Usuario;
import org.voygaer.minierp.domain.repository.UsuarioRepository;
import org.voygaer.minierp.jjwt.service.TokenAuthenticationService;
import org.voygaer.minierp.util.PasswordHash;

import static java.lang.System.out;

@RestController
@RequestMapping(path = "/api/v1/user")
public class UserRest {
	@Autowired
	private UsuarioRepository repository;
	
	@PostMapping
	@RequestMapping(path = "/login")
	public Message<?> login(@RequestBody Login login) {
		
		out.println("Login alcançado");
		out.println(login.getEmail());
		String email = "admin@mail.com";
		String senha = "12345";
		
		Usuario isUsuario = repository.findByEmail(login.getEmail());

		// Verifica se o usuario existe
		if(isUsuario == null)
			return new Message<Erro>(false,new Erro(12,"Usuario não encontrado!"));
		
		if(!PasswordHash.genHash(login.getSenha()).equals(isUsuario.getSenha()))
			return new Message<Erro>(false,new Erro(13,"Senha incorreta Usuario !"));
		
		String token = TokenAuthenticationService.addAuthentication( email );
		
				
		return new Message<String>(true, token);
	}
	
	@PostMapping
	@RequestMapping(path = "/cadastrar")
	public Message<?> cadastrar(@RequestBody Cadastrar cadastro) {
		
		
		Usuario usuario = new Usuario();
				
		usuario.setEmail(cadastro.getEmail())
			   .setSenha(cadastro.getSenha())
			   .setNome(cadastro.getNome());
		
		// Usuario existe?
		Usuario isCadastrado = repository.findByEmail(usuario.getEmail());
		if(isCadastrado != null) return new Message<Erro>(false,new Erro(11,"Usuario já cadastrado"));
		
		// Criando usuario
		// hash a senha
		String Hash = PasswordHash.genHash(usuario.getSenha()); 
		usuario.setSenha(  Hash  );
		
		repository.save(usuario);
		
		// Enviando JWT token de autenticação
		String token = TokenAuthenticationService.addAuthentication(usuario.getEmail());
		return new Message<String>(true, token);
	}
	
	
}
