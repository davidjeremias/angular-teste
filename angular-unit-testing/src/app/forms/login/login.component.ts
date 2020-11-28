import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  soma(num1, num2): number{
    return num1 + num2;
  }

  subtracao(num1, num2): number{
    return num1 - num2;
  }

}
