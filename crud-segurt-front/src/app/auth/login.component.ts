import { LoginUsuario } from './../models/login-usuario';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { TokenService } from './../service/token.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
 
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        
        this.tokenService.setToken(data.token);
        
       
        this.router.navigate(['/']);
      },
      err => {
        
        
        this.errMsj = err.error.message;

        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });

        console.log(this.errMsj);
      }
    );
  }
}
