import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {

  constructor(public api: UsuariosService) { }

  nuevoUsuario(){
    var nuevoUsuario = {
      idUsuario: "idUsuario",
      nombreUsuario: "nombreUsuario",
      correo: "correo",
      password: "password"
    }
    this.api.createPost(nuevoUsuario).subscribe((success)=>{
      console.log(success); 
    },error=>(console.log(error))
    
    );
  }

  ngOnInit() {
  }

}
