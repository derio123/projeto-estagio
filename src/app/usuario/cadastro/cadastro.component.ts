import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DadosUsuariosService } from '../../dados-usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuariosCadastrados = [];
  @Output() dados;

  // cria os dados do formulario para o service
  formularioCadastro = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl('')
  });
  
  constructor(private usuariosService: DadosUsuariosService, private router: Router) { }

  ngOnInit() {
    console.log(this.dados);
    
  }

  // insere os dados do formulario na array usuariosCadastrados e joga no localStorage
  cadastrar() {
    this.usuariosService.cadastraUsuario(this.formularioCadastro);
    this.router.navigate(['cadastro', pessoa.id]);
  }

}
