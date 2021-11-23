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
  buscarUsuario(){
    this.api.getPost(this.correo).subscribe(resultado => {
    var resultadoString = JSON.stringify(resultado);
    var usuarioJSON = JSON.parse(resultadoString);
    console.log(usuarioJSON)
    });
  }
  cambiarPassword(){
    this.api.getPost(this.correo).subscribe(resultado => {
      var resultadoString = JSON.stringify(resultado.correo);
      var usuarioJSON = JSON.parse(resultadoString);
      this.api.updatePost(this.idUsuario,usuarioJSON).subscribe(resultado => {
        this.correo = usuarioJSON.correo;
        this.password = this.password;
      })
      });
    
  }
  elminarUsuario(){
    this.api.deletePost(this.correo).subscribe((success)=>{
      alert("Usuario Eliminado")
      console.log(success);
  },error=>{
    alert("Usuario no encontrado")
    console.log(error)
  });
  }



  ngOnInit() {
  }

}
