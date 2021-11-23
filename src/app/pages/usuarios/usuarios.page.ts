import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})

export class UsuariosPage implements OnInit {

    public idUsuario: any;
    public nombreUsuario: any;
    public correo: any;
    public password: any;
    public estado: any=0;

    constructor(public api: UsuariosService) { }
    
  ngOnInit() {

  }

}
