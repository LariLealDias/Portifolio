import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  qtdTotalDeProjetos: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.qtdTotalDeProjetos = document.getElementsByClassName('project').length;
  }

}
