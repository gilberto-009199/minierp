try{
/* Operações da tela de usuasario  */
var usuarios = {

    tabela:{},
    lista:{},

    init:function(){

      usuarios.tabela = $('#tbl_usuarios tbody');
      usuarios.dao.selectAll()
      .then(lista=>{

        if(lista.length < 1){
          console.log("Sem dados!!");
          usuarios.tabela.append("<tr class='mascara'>\
                                      <td colspan='5'>\
                                          <img style=' width: auto; height: auto;'  alt='Nada encontrado' src='img/magnify.gif'>\
                                          <p> Nenhum Registro encontado! </p>\
                                      </td>\
                                  </tr>");
        }

        for(let usuario of lista){

             usuarios.lista[usuario.id] = usuario;

        }

        usuarios.addViewAll(lista);
      })
    },
    // Adiciona todos os usuarios passados como paremetros a tabela
    addViewAll:function(lista){

        if(typeof lista == "object")lista = Object.values(lista);

        usuarios.tabela.html('');
        if(lista.length < 1){
          console.log("Sem dados!!");
          usuarios.tabela.append("<tr class='mascara'>\
                                      <td colspan='5' class='lupa'>\
                                          <img  alt='Nada encontrado' src='img/magnify.gif'>\
                                          <p> Nenhum Registro encontado! </p>\
                                      </td>\
                                  </tr>");
        }

        for(let usuario of lista){
            usuarios.addView(usuario);
        }

    },
    // Adiciona o usuario passados como paremetros a tabela
    addView:function(usuario){

        let horas = (!usuario.online) ? '--':'3h';

        let view = $(`
            <tr data-id="${usuario.id}">
                <td>${usuario.id}</td>
                <td>${usuario.email}</td>
                <td>${usuario.cpf}</td>
                <td>${horas}</td>
                <td class="center">
                    <a href="javascript:usuarios.ver(${usuario.id})"><label><i class="far fa-eye"></i>Exibir</label></a>
                    <a href="javascript:usuarios.deletar(${usuario.id})"><label><i class="far fa-trash-alt"></i>Deletar</label></a>
                    <a href="javascript:usuarios.editar(${usuario.id})"><label><i class="fas fa-edit"></i>Editar</label></a></td>
                </td>
            </tr>
        `);


        usuarios.tabela.append(view);
    },
    updateView:function(id){

        let usuario =  {};
        if(typeof id == "object")usuario = id
        else usuario = usuarios.lista[id];

        let horas = (!usuario.online) ? '--':'3h';

        usuarios.tabela.find(`tr[data-id="${usuario.id}"]`)
        .html(`
                <td>${usuario.id}</td>
                <td>${usuario.email}</td>
                <td>${usuario.cpf}</td>
                <td>${horas}</td>
                <td class="center">
                    <a href="javascript:usuarios.ver(${usuario.id})"><label><i class="far fa-eye"></i>Exibir</label></a>
                    <a href="javascript:usuarios.deletar(${usuario.id})"><label><i class="far fa-trash-alt"></i>Deletar</label></a>
                    <a href="javascript:usuarios.editar(${usuario.id})"><label><i class="fas fa-edit"></i>Editar</label></a></td>
                </td>`);
    },
    removeView:function(id){
        usuarios.tabela.find(`tr[data-id="${id}"]`)
        .hide(200,function(){
            $(this).remove();
            if(Object.keys(usuarios.lista).length < 1){

              usuarios.tabela.find('tr.mascara').remove();

              usuarios.tabela.append("<tr class='mascara'>\
                                          <td colspan='5' class='lupa'>\
                                              <img  alt='Nada encontrado' src='img/magnify.gif'>\
                                              <p> Nenhum Registro encontado! </p>\
                                          </td>\
                                      </tr>");
            }
        });
    },
    editar:function(id){
        let usuario = {};
        // Verificado se o usuario já esta sendo psssado como parametro
        if(typeof id == "object")usuario = id
        else usuario = usuarios.lista[id];

        permicoes.dao.selectByUser(usuario)
        .then(listaPermicoes=>{
            let combobox = '';

            for(let permicao of listaPermicoes){

                combobox+= `<option value='${permicao.id}' ${permicao.selecionado} >${permicao.nome.toString()}</option>`;
            }


            let alerta = new Alert(`<form>
                                        <div class="row">
                                           <div class="cold6">
                                                <label class="row"> Nome: </label>
                                                <div class="content-icon-input cold10">
                                                    <input name="nome" class="input-icone"  placeholder="João" value="${usuario.nome}" required>
                                                    <span aria-hidden="true" class="icon_profile"></span>
                                                </div>
                                           </div>
                                           <div class="cold3">
                                                <label class="row"> CPF: </label>
                                                <input  name="cpf" placeholder="000.000.000-00"  value="${usuario.cpf}" required>
                                           </div>
                                        </div>
                                        <div class="row">
                                           <div class="cold6">
                                                <label class="row"> E-mail: </label>
                                                <div class="content-icon-input cold10">
                                                    <input name="email" class="input-icone" placeholder="exemplo@mail.com" value="${usuario.email}" required>
                                                    <span aria-hidden="true" class="icon_mail_alt"></span>
                                                </div>
                                           </div>
                                           <div class="cold3">
                                                <label class="row"> Telefone: </label>
                                                <div class="content-icon-input">
                                                    <input name="telefone" class="input-icone" placeholder="(11)4303-6889" value="${usuario.telefone}"  required>
                                                    <span aria-hidden="true" class="icon_phone"></span>
                                                </div>
                                           </div>
                                        </div>
                                        <div class="row">
                                           <div class="cold8" style="width:81%;">
                                                <label class="row"> Senha: </label>
                                                <div class="content-icon-input cold10">
                                                    <input name="password" type="password" class="input-icone" value="@834rf434frwe8fuds" required>
                                                    <span aria-hidden="true" class="icon_key_alt"></span>
                                                </div>
                                           </div>
                                        </div>
                                        <div class="row">
                                           <div class="cold8" style="width:81%;" data-model="slcPermicoes">
                                                <label class="row"> Permições: </label>
                                                <select name="permicoes" style="width:290px;" multiple="multiple">
                                                    ${combobox}
                                                </select>
                                           </div>
                                        </div>
                                        <button type="submit"></button>
                                    </form>`);
          alerta.show = function(){
              alerta.janela.find('select[name="permicoes"]').multiselect();
          }

          alerta.buttons.push({
              texto:'Salvar',
              click:function(){

                  let formulario = alerta.janela.find('form');
                  let btnSubmit  = formulario.find('button[type="submit"]');

                  formulario.off('submit');

                  formulario.on('submit',(elm)=>{

                      elm.preventDefault();
                     let data = formulario.serializeArray();
                     /* Verificando se o email já esta cadastrado */
                     return db.selectById(`tbl_usuario_desktop WHERE email like ?`,[data[2].value]).then(user=>{
                        formulario.find('[name="email"]').removeClass('required');
                        if(user && user.id_usuario_desktop != usuario.id){
                            /// Erro Usuario já cadastrado!!
                            console.log(" Email já existe ");
                            $( `<div title="Email já existe! ">
                                 <p>
                                   <span class="ui-icon  ui-icon-mail-closed" style="float:left; margin:0 7px 50px 0;"></span>
                                 </p>
                                 <p>
                                   Usuario: <strong>${user.nome}</strong>@<br>
                                   E-mail : <strong>${user.email}</strong>
                                 </p>
                               </div>` ).dialog({
                                     modal: true,
                                     buttons: {
                                       Ok: function() {
                                         $( this ).dialog( "close" );
                                         formulario.find('[name="email"]').addClass('required');
                                       }
                                     }
                                   });
                        } else {
                            return db.selectById(`tbl_usuario_desktop WHERE cpf like ? `,[data[1].value]).then(userCPF=>{
                                formulario.find('[name="cpf"]').removeClass('required');
                                if(userCPF && userCPF.id_usuario_desktop != usuario.id){
                                  console.log(" CPF já existe ",userCPF);
                                  console.log(" CPF já existe ",usuario.id);
                                  $( `<div title="CPF já existe! ">
                                       <p>
                                         <span class="ui-icon  ui-icon-mail-closed" style="float:left; margin:0 7px 50px 0;"></span>
                                       </p>
                                       <p>
                                         Usuario: <strong>${userCPF.nome}</strong>@<br>
                                         E-mail : <strong>${userCPF.email}</strong>
                                       </p>
                                     </div>` ).dialog({
                                           modal: true,
                                           buttons: {
                                             Ok: function() {
                                               $( this ).dialog( "close" );
                                               formulario.find('[name="cpf"]').addClass('required');
                                             }
                                           }
                                         });
                                }else{
                                  usuarios.dao.update(usuario.id,data).then(function(){

                                        alerta.close();
                                        usuarios.updateView(usuario.id);

                                   })
                                }
                            })
                        }
                     })

                  });

                 btnSubmit.click();

              }
          })

          alerta.view('Editar Usuario ' + usuario.nome)
          .then(html=>{}).catch(erro=>{});
        })
    },
    criar:function(){

        let combobox = '';

        permicoes.dao.selectAll()
        .then(listaPermicoes=>{

          for(let permicao of listaPermicoes){

              combobox+= `<option value='${permicao.id}'>${permicao.nome.toString()}</option>`;
          }


          let alerta = new Alert(`<form>\
                                      <div class="row">
                                         <div class="cold6">
                                              <label class="row"> Nome: </label>
                                              <div class="content-icon-input cold10">
                                                  <input name="nome" class="input-icone"  placeholder="João" required>
                                                  <span aria-hidden="true" class="icon_profile"></span>
                                              </div>
                                         </div>
                                         <div class="cold3">
                                              <label class="row"> CPF: </label>
                                              <input  name="cpf" placeholder="000.000.000-00"  required>
                                         </div>
                                      </div>
                                      <div class="row">
                                         <div class="cold6">
                                              <label class="row"> E-mail: </label>
                                              <div class="content-icon-input cold10">
                                                  <input name="email" class="input-icone" placeholder="exemplo@mail.com" required>
                                                  <span aria-hidden="true" class="icon_mail_alt"></span>
                                              </div>
                                         </div>
                                         <div class="cold3">
                                              <label class="row"> Telefone: </label>
                                              <div class="content-icon-input">
                                                  <input name="telefone" class="input-icone" placeholder="(11)4303-6889"  required>
                                                  <span aria-hidden="true" class="icon_phone"></span>
                                              </div>
                                         </div>
                                      </div>
                                      <div class="row">
                                         <div class="cold8" style="width:81%;">
                                              <label class="row"> Senha: </label>
                                              <div class="content-icon-input cold10">
                                                  <input name="password" type="password" class="input-icone" required>
                                                  <span aria-hidden="true" class="icon_key_alt"></span>
                                              </div>
                                         </div>
                                      </div>
                                      <div class="row">
                                         <div class="cold8" style="width:81%;" data-model="slcPermicoes">
                                              <label class="row"> Permições: </label>
                                              <select name="permicoes" style="width:290px;" multiple="multiple" required>
                                                  ${combobox}
                                              </select>
                                         </div>
                                      </div>
                                      <button type="submit"></button>
                                  </form>`);

          alerta.buttons.push({
              texto:'Salvar',
              click:function(){

                  let formulario = alerta.janela.find('form');
                  formulario.off('submit');

                  formulario.on('submit',(ev)=>{

                      ev.preventDefault();

                      let data = formulario.serializeArray();
                      /* Verificando se o email já esta cadastrado */
                      return db.selectById(`tbl_usuario_desktop WHERE email like ?`,[data[2].value]).then(user=>{
                         formulario.find('[name="email"]').removeClass('required');
                         if( user ){
                             /// Erro Usuario já cadastrado!!
                             console.log(" Email já existe ");
                             $( `<div title="Email já existe! ">
                                  <p>
                                    <span class="ui-icon  ui-icon-mail-closed" style="float:left; margin:0 7px 50px 0;"></span>
                                  </p>
                                  <p>
                                    Usuario: <strong>${user.nome}</strong>@<br>
                                    E-mail : <strong>${user.email}</strong>
                                  </p>
                                </div>` ).dialog({
                                      modal: true,
                                      buttons: {
                                        Ok: function() {
                                          $( this ).dialog( "close" );
                                          formulario.find('[name="email"]').addClass('required');
                                        }
                                      }
                                    });
                         } else {

                             formulario.find('[name="cpf"]').removeClass('required');
                             return db.selectById(`tbl_usuario_desktop WHERE cpf like ? `,[data[1].value]).then(user=>{

                                 if(user){

                                   console.log(" CPF já existe ");
                                   $( `<div title="CPF já existe! ">
                                        <p>
                                          <span class="ui-icon  ui-icon-mail-closed" style="float:left; margin:0 7px 50px 0;"></span>
                                        </p>
                                        <p>
                                          Usuario: <strong>${user.nome}</strong>@<br>
                                          E-mail : <strong>${user.email}</strong>
                                        </p>
                                      </div>` ).dialog({
                                            modal: true,
                                            buttons: {
                                              Ok: function() {
                                                $( this ).dialog( "close" );
                                                formulario.find('[name="cpf"]').addClass('required');
                                              }
                                            }
                                          });

                                 }else{
                                   usuarios.dao.insert(data).then(usuario=>{

                                         alerta.close();
                                         usuarios.addView(usuario);
                                         usuarios.tabela.find('tr.mascara').remove();

                                    })
                                 }
                             })
                         }
                      })

                      /*usuarios.dao.insert(formulario.serializeArray())
                      .then(function(usuario){

                          alerta.close();
                          usuarios.addView(usuario);

                      });*/

                  });

                  let btnSubmit  = formulario.find('button[type="submit"]');
                  btnSubmit.click();


              }
          })

          alerta.show = function(){
              alerta.janela.find('select[name="permicoes"]').multiselect();
          }

          alerta.view('Adicionar Usuario ').then(html=>{}).catch(erro=>{});

        })


    },
    ver:function(id){

        let usuario = usuarios.lista[id];

        let alerta = new Alert(`<form>\
                                    <div class="row">
                                       <div class="cold6">
                                            <label class="row"> Nome: </label>
                                            <div class="content-icon-input cold10">
                                                <input class="input-icone" value="${usuario.nome}" disabled>
                                                <span aria-hidden="true" class="icon_profile"></span>
                                            </div>
                                       </div>
                                       <div class="cold3">
                                            <label class="row"> CPF: </label>
                                            <input value="${usuario.cpf}" disabled>
                                       </div>
                                    </div>
                                    <div class="row">
                                       <div class="cold6">
                                            <label class="row"> E-mail: </label>
                                            <div class="content-icon-input cold10">
                                                <input class="input-icone" value="${usuario.email}" disabled>
                                                <span aria-hidden="true" class="icon_mail"></span>
                                            </div>
                                       </div>
                                       <div class="cold3">
                                            <label class="row"> Telefone: </label>
                                            <div class="content-icon-input">
                                                <input class="input-icone" value="${usuario.telefone}" disabled>
                                                <span aria-hidden="true" class="icon_phone"></span>
                                            </div>
                                       </div>
                                    </div>
                                </form>`);

        alerta.buttons.push({
            texto:'Editar',
            click:function(){
                alerta.close();

                usuarios.editar(usuario);
            }
        })

        alerta.view('Usuario: ' + usuario.nome).then(html=>{

        }).catch(erro=>{

        })
    },
    deletar:function(id){

        let usuario = usuarios.lista[id];

        let alerta = new Alert(`<h1>Desejá realmente deletar <strong>${usuario.nome}</strong>?</h1>`,null,null);
        alerta.view().then(html=>{

        }).catch(erro=>{

        })
        .then(function(){


            usuarios.dao.delete(id).then(function(){

                usuarios.removeView(id);

            })

        }).catch(function(janela){
            console.log("Cancelar")
        })
    },
    dao:{//Funções que fazem as operações no banco
      selectAll:function(){
        return new Promise(function(resolve,reject){
          return db.selectAll("tbl_usuario_desktop where excluido = 0 ")
          .then(lista=>{
              let listaUsuarios = [];
              for(let usuario of lista){
                listaUsuarios.push({
                    id:usuario.id_usuario_desktop,
                    nome:usuario.nome,
                    email:usuario.email,
                    cpf:usuario.cpf,
                    telefone:usuario.telefone,
                    online:usuario.logado,
                    permicoes:[]
                  })
              }
              return resolve(listaUsuarios);
            })
          })
        },
        selectById:function(id){
          return new Promise(function(resolve,reject){
            return db.selectById('SELECT * FROM tbl_usuario_desktop WHERE id_usuario_desktop = ? ',[id])
            .then(usuario=>{
                return permicoes.dao.selectByUser(id).then(listaPermicoes=>{
                  return resolve(
                    {
                      id:usuario.id_usuario_desktop,
                      nome:usuario.nome,
                      email:usuario.email,
                      cpf:usuario.cpf,
                      telefone:usuario.telefone,
                      online:usuario.logado,
                      permicoes:listaPermicoes
                    }
                  )
                })
            })
          })
        },
        insert:function(dados){
            return new Promise(function(resolve,reject){


                /* Pegando dados do formulario */
                let nome = dados[0].value;
                let cpf  = dados[1].value;
                let email  = dados[2].value;
                let telefone  = dados[3].value;
                let senha  = dados[4].value;

                senha = md5(senha);

                let listPermicoes =[];

                for(let permicao of dados.splice(5,dados.length)){
                    listPermicoes.push(permicao.value);
                }

                /* Inserindo dados */
                return db.insert("INSERT INTO tbl_usuario_desktop (nome, email, senha, telefone, cpf) VALUES (?, ?, ?, ?, ?)",[nome,email,senha,telefone,cpf])
                .then(id=>{
                    // Granando as permições
                    return permicoes.dao.insert(id,listPermicoes).then(()=>{

                          usuarios.lista[id] = {};
                          usuarios.lista[id].id = id;
                          usuarios.lista[id].nome = nome;
                          usuarios.lista[id].email= email;
                          usuarios.lista[id].telefone = telefone;
                          usuarios.lista[id].cpf = cpf;
                          usuarios.lista[id].senha = '';

                          resolve(usuarios.lista[id]);

                    })
                })
                .catch(error=>{
                  console.log("Erro na inserção : ",error);
                })

            })
        },
        update:function(id,dados){

            return new Promise(function(resolve,reject){
              /* Pegando dados do formulario */
              let nome = dados[0].value;
              let cpf  = dados[1].value;
              let email  = dados[2].value;
              let telefone  = dados[3].value;
              let senha  = dados[4].value;

              let listPermicoes = [];

              for(let permicao of dados.splice(5,dados.length)){
                  listPermicoes.push(permicao.value);
              }

              /* Inserindo dados */
              if(senha == "@834rf434frwe8fuds")senha =" ";
              else senha = `senha =  '${md5(senha)}' , `;

              return db.update(`tbl_usuario_desktop SET nome = ?, email = ?, ${senha} telefone = ?, cpf = ?  WHERE id_usuario_desktop = ?`,[nome,email,telefone,cpf,id])
              .then(linhasAfetadas=>{
                  // Granando as permições
                  return permicoes.dao.insert(id,listPermicoes).then(()=>{

                    usuarios.lista[id].nome = nome;
                    usuarios.lista[id].email= email;
                    usuarios.lista[id].telefone = telefone;
                    usuarios.lista[id].cpf = cpf;
                    /* Atualiza do ussuario atual */
                    if(window.user && window.user.id == id){
                        db.select("SELECT p.*,if(udp.id_permicoes is null ,'','selected') as selecionado FROM tbl_permissoes p left join tbl_usuario_desktop_permissoes udp on p.id_permissoes = udp.id_permicoes AND udp.id_usuario_desktop = ? ",[id])
                        .then(function(list){
                          window.acessos = {};

                          let menu = $('[role="menu"]');
                          let caixaMenu = $('#MenuBox');
                          for(let permi of list){
                              let itemmenu = menu.find(`[data-id="${permi.id_permissoes}"]`);
                              let itemcaixa = caixaMenu.find(`[data-id="${permi.id_permissoes}"]`);
                              if(permi.selecionado != 'selected'){
                                itemmenu.addClass('disable');
                                itemcaixa.addClass('disable');
                              }else{
                                itemmenu.removeClass('disable');
                                itemcaixa.removeClass('disable');
                              }
                              itemmenu.attr('title',permi.descricao)
                              itemcaixa.attr('title',permi.descricao)
                              window.acessos[permi.id_permissoes] = {
                                id:permi.id_permissoes,
                                nome:permi.nome,
                                titulo:permi.titulo,
                                descricao:permi.descricao,
                                icone:permi.icone,
                                href:permi.href,
                                selecionado:permi.selecionado
                              };
                          }
                      })
                    }
                    resolve(usuarios.lista[id]);

                  })
              })
              .catch(error=>{
                console.log("Erro na inserção : ",error);
              })

            })
        },
        delete:function(id){
            return new Promise(function(resolve,reject){

                delete usuarios.lista[id];

                return db.update('tbl_usuario_desktop SET excluido = 1 where id_usuario_desktop = ?',[id]).then(linhas=>{

                  delete usuarios.lista[id];

                  return resolve();

                })

            })
        }
    }
}

// Iniciando

usuarios.init();
/* Que vontade de usar um redis!! */
var permicoes = {
    lista:[],
    dao:{
      selectAll:function(){
        return new Promise(function(resolve,reject){

          if(permicoes.lista.length >= 1) return resolve(permicoes.lista);

          return db.selectAll('tbl_permissoes').then(lista=>{
            permicoes.lista = [];
            for(let permicao of lista){
                permicoes.lista.push({
                  id:permicao.id_permissoes,
                  nome:permicao.nome,
                  titulo:permicao.titulo,
                  descricao:permicao.descricao,
                  icone:permicao.icone,
                  href:permicao.href,
                  selecionado:''
                })
            }
            return resolve(permicoes.lista);

          })
        })
      },
      selectByUser:function(usuario){

        if(typeof usuario == "object")usuario = usuario.id;

        return new Promise(function(resolve,reject){
          return db.select("SELECT p.*,if(udp.id_permicoes is null ,'','selected') as selecionado FROM tbl_permissoes p left join tbl_usuario_desktop_permissoes udp on p.id_permissoes = udp.id_permicoes AND udp.id_usuario_desktop = ? ",[usuario])
          .then(lista=>{
            let listaPermicoes = [];
            for(let permicao of lista){
                listaPermicoes.push({
                  id:permicao.id_permissoes,
                  nome:permicao.nome,
                  titulo:permicao.titulo,
                  descricao:permicao.descricao,
                  icone:permicao.icone,
                  href:permicao.href,
                  selecionado:permicao.selecionado
                })
            }
            return resolve(listaPermicoes);

          })

        })
      },
      insert:function(idUsuario,listaPermicoes){

        return new Promise(function(resolve,reject){
          // Apago todos osregistro antes de inserir as novas permições
          return db.delete('tbl_usuario_desktop_permissoes WHERE id_usuario_desktop = ? ',[idUsuario]).then(()=>{

            let promiseList = [];

            for(let idPermicao of listaPermicoes){
                promiseList.push(db.insert('INSERT INTO tbl_usuario_desktop_permissoes (id_usuario_desktop, id_permicoes) VALUES (?, ?)',[idUsuario,idPermicao]));
            }
            return Promise.all(promiseList).then(ids=>resolve());

          })
        })
      }
    }
}


}catch(erro){
    console.log("Erro ao carregar usuario ",erro.toString());
}
