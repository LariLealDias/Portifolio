import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //navegação com scroll conforme as seções
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  //manter o header fixo e capaz de navegar entre as seções
  isHeaderFixed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderFixed = window.pageYOffset > 0;
  }
}
