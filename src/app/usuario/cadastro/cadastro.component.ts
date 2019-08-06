import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  get name() { return this.formularioCadastro.get('nome'); }
  
  constructor(private usuariosService: DadosUsuariosService, private router: Router) { 
   }

  ngOnInit() {
  }

  // chama o serviço pra cadastrar, informa o usuário e navega de volta para o componente 'listar'
  cadastrar() {
    this.usuariosService.cadastraUsuario(this.formularioCadastro.value);
    window.alert("Usuário cadastrado com sucesso!");
    this.router.navigate(['listar']);
  }

}
