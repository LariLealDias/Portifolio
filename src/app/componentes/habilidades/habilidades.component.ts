import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  text1 = "C#";
  text2 = "NodeJs";
  text3 = "MySql";
  text4 = "Angular";
  text5 = "TS";
  text6 = "React";
  text7 = "JS";
  text8 = "HTML";
  text9 = "CSS";
  text10 = "VS";
  text11 = "VSC";
  text12 = "Postman";
  text13 = "Git e GitHub";
  text14 = "ASP.NET";

  hoveredText = '';

  constructor() { }

  ngOnInit(): void {
    this.hoveredText = '';
  }

}
