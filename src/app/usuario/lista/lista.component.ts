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
  @Output() dados;
  
  constructor(private usuariosService: DadosUsuariosService, private router: Router) { }

  ngOnInit() {    
  }

  cadastrar() {
    this.router.navigate(['cadastrar']);
  }

  editar(id) {
    this.router.navigate(['editar/' + id]);
  }

  excluir(pessoa) {
    for(let i = 0; i < this.lista.length; i++) {
      if (this.lista[i] === pessoa) {
        this.lista.splice(i, 1);
        window.localStorage.setItem("usuario", JSON.stringify(this.lista));
      }
    }
  }

}
