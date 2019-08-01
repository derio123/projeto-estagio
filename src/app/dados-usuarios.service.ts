import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosUsuariosService {

  usuariosCadastrados = [];


  getUsuarios() {
    let usuarios = JSON.parse(localStorage.getItem("usuario"));
    if(!!usuarios){
      return usuarios;
    }
    return [];
    
  }

  cadastraUsuario(formularioCadastro) {
    this.usuariosCadastrados = this.getUsuarios();
    let id = 1;
    if(this.usuariosCadastrados.length > 0){
      this.usuariosCadastrados.forEach(
        (dados) => {
          id = dados.id + 1;
        }
        );
    }
    formularioCadastro.id = id;
    this.usuariosCadastrados.push(formularioCadastro);
    //excluir isso depois:
    window.localStorage.setItem("usuario", JSON.stringify(this.usuariosCadastrados));
  }

  alterarUsuario(form) {
    let usuarios = this.getUsuarios();
    console.log(usuarios);
    usuarios.forEach(
      (dados) => {
        if(dados.id-1 == form.value.id-1) {
          console.log("lalala");
          console.log(usuarios[dados.id-1].nome, form.value.nome);
          usuarios[dados.id-1].nome = form.value.nome;
          usuarios[dados.id-1].email = form.value.email;
          usuarios[dados.id-1].telefone = form.value.telefone;
        }
      }
      );
    //this.usuariosCadastrados.push(formularioCadastro);
    //excluir isso depois:
    window.localStorage.setItem("usuario", JSON.stringify(usuarios));
  }

  constructor() { }
}
