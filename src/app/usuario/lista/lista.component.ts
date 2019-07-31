import { Component, OnInit, Output } from '@angular/core';
import { DadosUsuariosService } from '../../dados-usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista = this.usuariosService.getUsuarios();
  //lista = JSON.parse(localStorage.getItem("Usuários cadastrados"));
  @Output() dados;
  
  constructor(private usuariosService: DadosUsuariosService, private router: Router) { }

  ngOnInit() {    
    this.dados = '321';
    console.log(this.dados);
  }

  editar(pessoa) {
    console.log(pessoa);
    this.router.navigate(['editar', pessoa.id]);
  }

  excluir(pessoa) {
    for(let i = 0; i < this.lista.length; i++) {
      if (this.lista[i] === pessoa) {
        this.lista.splice(i, 1);
        window.localStorage.setItem("Usuários cadastrados", JSON.stringify(this.lista));
      }
    }
  }

}
