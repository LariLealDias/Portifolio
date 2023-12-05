import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  text1 = "C#";
  text2 = "ASP.NET";
  text3 = "Python";
  text4 = "FastApi";
  text5 = "NodeJS";
  text6 = "MySql";
  text7 = "Angular";
  text8 = "TS";
  text9 = "React";
  text10 = "JS";
  text11 = "HTML";
  text12 = "CSS";
  text13 = "Visual Studio";
  text14 = "VSCode";
  text15 = "Docker";
  text16 = "Postman"
  text17 = "Git e Github"

  hoveredText = '';

  constructor() { }

  ngOnInit(): void {
    this.hoveredText = '';
  }

}
