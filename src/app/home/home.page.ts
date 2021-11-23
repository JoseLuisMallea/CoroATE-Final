import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AnimationController } from '@ionic/angular';
import { UsuariosService } from 'src/app/usuarios.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public idUsuario: any;
  public nombreUsuario: any;
  public email: any;
  public password: any;

  constructor(private router: Router, private animationCtrl: AnimationController,public api: UsuariosService) {}

  validarLogin(){
    this.api.getUsuarios(this.email,this.password).subscribe((success)=>{
        this.router.navigate(['/index']);
        console.log(success);
    },error=>{
      console.log(error)
    });
    
  }
  ngAfterViewInit(){

    const animation = this.animationCtrl.create()

    .addElement(document.querySelector('.square'))
    .duration(5000)
    .iterations(Infinity)
    .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
    ]);



    animation.play()
  }
  ngOnInit() {
  }
}
export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {

      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

export class FormFieldPrefixSuffixExample {
  hide = true;
}