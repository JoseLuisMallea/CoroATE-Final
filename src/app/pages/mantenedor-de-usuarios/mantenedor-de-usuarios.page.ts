import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenedor-de-usuarios',
  templateUrl: './mantenedor-de-usuarios.page.html',
  styleUrls: ['./mantenedor-de-usuarios.page.scss'],
})
export class MantenedorDeUsuariosPage {

  public idUsuario: any;
  public nombreUsuario: any;
  public correo: any;
  public password: any;
  public estado: any=0;
  public body: any;

  constructor(private router: Router, public api: UsuariosService) { }
  cambiarPassword(){
    var newPassword = {
      correo: this.correo,
      password: this.password
    }
    this.correo = this.correo;
    this.api.updatePost(this.correo,newPassword).subscribe((success)=>{
      alert("Contraseña editada")
      this.router.navigate(['/index']);
      console.log(success); 
    },error=>{
      alert("Usuario no encontrado")
      this.router.navigate(['/home']);
      console.log(error)
    });
  }

  elminarUsuario(){
    this.api.deletePost(this.correo).subscribe((success)=>{
      alert("Usuario Eliminado")
      this.router.navigate(['/home']);
      console.log(success);
  },error=>{
    alert("Usuario no encontrado")
    console.log(error)
  });
  }



  ngOnInit() {
  }

}
