import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenedorDeUsuariosPage } from './mantenedor-de-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: MantenedorDeUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenedorDeUsuariosPageRoutingModule {}
