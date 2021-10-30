import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }


  sendFake(){
    alert('Mensagem enviada com sucesso!')
    this.router.navigate(['/home'])
  }


}
// testes de push
