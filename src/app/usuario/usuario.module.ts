import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ // lazy Load
  { path: 'cadastar', component: CadastroComponent },
  { path: 'listar', component: ListaComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: '', component: ListaComponent }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ListaComponent, CadastroComponent, EditarComponent],
  exports: [ListaComponent, CadastroComponent, EditarComponent]
})
export class UsuarioModule { }
