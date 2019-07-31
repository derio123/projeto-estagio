import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ // lazy Load
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule' },
  { path: '', loadChildren: './usuario/usuario.module#UsuarioModule' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
