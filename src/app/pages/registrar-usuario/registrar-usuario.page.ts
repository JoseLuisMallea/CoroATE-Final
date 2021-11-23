import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {
  public idUsuario:any;
  public nombreUsuario:any;
  public correo:any;
  public password:any;
  constructor(public api: UsuariosService, private router: Router) { }

  nuevoUsuario(){
    var nuevoUsuario = {
      idUsuario: this.idUsuario,
      nombreUsuario: this.nombreUsuario,
      correo: this.correo,
      password: this.password
    }
    this.api.createPost(nuevoUsuario).subscribe((success)=>{
      alert("Usuario Agregado")
      this.router.navigate(['/index']);
      console.log(success); 
    },error=>{
      alert("Usuario no encontrado")
      this.router.navigate(['/home']);
      console.log(error)
    }
    
    );
  }

  ngOnInit() {
  }

}
