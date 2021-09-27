import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  src="https://www.chetu.com/img/chetu-logo-white.png";
  src1 = "https://i.pinimg.com/originals/01/48/66/0148662247327a7d268ce7d02b8662cf.png";

  constructor() { }

  ngOnInit(): void {
  }

}
