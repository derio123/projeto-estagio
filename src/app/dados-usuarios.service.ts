import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosUsuariosService {

  usuariosCadastrados = [];


  getUsuarios() {
    let usuarios = JSON.parse(localStorage.getItem("Usuários cadastrados"));
    return usuarios;
  }

  cadastraUsuario(formularioCadastro) {
    this.usuariosCadastrados = this.getUsuarios();
    this.usuariosCadastrados.push(formularioCadastro.value);
    //excluir isso depois:
    console.log(this.usuariosCadastrados);
    window.localStorage.setItem("Usuários cadastrados", JSON.stringify(this.usuariosCadastrados));
  }

  constructor() { }
}
