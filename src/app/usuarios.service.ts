import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
      })
  }
   
  public apiUrl = 'http://127.0.0.1:8000/api/detalle_usuario/'
  public apiURL2 = 'http://127.0.0.1:8000/api/lista_usuario'
  public apiLog = 'http://127.0.0.1:8000/api/loginUsuario/'

  constructor(private http: HttpClient) { }

  getPost(correo):Observable<any>{
    return this.http.get(`${this.apiUrl}${correo}`);
  }
  createPost(post):Observable<any>{ 
    return this.http.post(this.apiURL2,post,this.httpOptions);
  }
  updatePost(correo,password):Observable<any>{
    return this.http.put(`${this.apiUrl}${correo}`,password,this.httpOptions);
  } 
  deletePost(correo):Observable<any>{
    return this.http.delete(`${this.apiUrl}${correo}`,this.httpOptions);
  }
  getUsuarios(correo,password):Observable<any>{
    return this.http.get(`${this.apiLog}${correo}/${password}`);
  }
}
