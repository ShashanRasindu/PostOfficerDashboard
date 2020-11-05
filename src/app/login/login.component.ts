import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = '';
  ps = '';
  dd = false;
  modal: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  checkuser(){
    console.log(this.name);
    if (this.name === 'palitha' && this.ps === 'shan2020'){
      this.dd = true;

      this.router.navigateByUrl('dashboard');
    }else {
      alert('check your Name & Pass Word');
      this.dd = true;
    }
  }

}
