import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenedorDeUsuariosPageRoutingModule } from './mantenedor-de-usuarios-routing.module';

import { MantenedorDeUsuariosPage } from './mantenedor-de-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenedorDeUsuariosPageRoutingModule
  ],
  declarations: [MantenedorDeUsuariosPage]
})
export class MantenedorDeUsuariosPageModule {}
