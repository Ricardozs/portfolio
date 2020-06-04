import { Component, OnInit, HostListener } from '@angular/core';
import { transition, trigger, state, animate, style } from '@angular/animations'

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [
    trigger('hideShow', [
      // ...
      state('hide', style({
        transform: 'translateX(-525px)',
        opacity: 0,
      })),
      state('show', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('hide => show', [
        animate('1s')
      ]),
    ]),
    trigger('disappearAppaer', [
      state('appear', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('disappear', style({
        opacity: 0,
        transform: 'translateY(-10px)'
      })),
      transition('disappear => appear', [
        animate('1s')
      ])
    ])
  ],
})
export class PresentationComponent implements OnInit {
  window;
  innerWidth;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.window = window.innerWidth > 1300 ? window.pageYOffset : window.pageYOffset + 450;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
}
