import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { urls } from '../services/url.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpService, private router: Router) {}
  register(user: string, mail: string, pass: string) {
    try {
      var body = {
        username: user,
        email: mail,
        password: pass
      };
      this.http.post(urls.register, body).subscribe();
      this.router.navigateByUrl('/login');
    } catch (error) {
      console.log(error);
    }
  }
}
