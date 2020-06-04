import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('hideShow', [
      // ...
      state('hide', style({
        transform: 'translateX(-150px)',
        opacity: 0,
      })),
      state('show', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('hide => show', [
        animate('.2s')
      ]),
      transition('show => hide',[
        animate('.2s')
      ])
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  innerWidth;
  hide: boolean = true;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  toggleMenu(): void{
    this.hide = !this.hide;
  }
  
}
