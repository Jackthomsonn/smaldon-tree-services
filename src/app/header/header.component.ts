import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})

export class HeaderComponent implements OnInit {
  public isMobile: boolean;
  public menuIsOpen: boolean;

  constructor() { }

  public toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  ngOnInit(): void {
    const ua = navigator.userAgent;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      this.isMobile = true;
    } else if (/Chrome/i.test(ua)) {
      this.isMobile = false;
    } else {
      this.isMobile = false;
    }
  }
}
