import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Pessoa } from '../pessoa';
import { DadosUsuariosService } from 'src/app/dados-usuarios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  formularioCadastro = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl('')
  });

  lista = this.usuariosService.getUsuarios();

  constructor(private usuariosService: DadosUsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
       this.lista.forEach(element => {
         if(element['id'] === id){
          this.formularioCadastro.get('id').setValue(element.id);
          this.formularioCadastro.get('nome').setValue(element.nome);
          this.formularioCadastro.get('email').setValue(element.email);
          this.formularioCadastro.get('telefone').setValue(element.telefone);
         }
       });
    });
  }

  

  editar(form) {
    this.usuariosService.alterarUsuario(form);
    this.router.navigate(['listar']);
  }

  

}
