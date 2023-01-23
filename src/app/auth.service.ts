import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  acessToken = " ";

  constructor() { }

  estaAutenticado (): boolean {
    return !!sessionStorage.getItem("acess-token"); 

  }

  login(email: string, senha: string): boolean {
    if ( email === "admin@admin.com.br" && senha ==="123456") {
      sessionStorage.setItem("acess-token", this.acessToken); 
      return true;
    }

    return false;

  }

  logout() {
    sessionStorage.clear();
  }
}
