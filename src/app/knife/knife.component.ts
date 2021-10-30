import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-knife',
  templateUrl: './knife.component.html',
  styleUrls: ['./knife.component.css']
})
export class KnifeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
