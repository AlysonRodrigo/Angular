import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == "") {
      alert('É preciso estar logado!')
      this.router.navigate(["/login"])

    }
  }

}
