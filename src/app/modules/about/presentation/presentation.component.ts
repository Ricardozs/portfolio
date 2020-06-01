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
        transform: 'translateX(-0)',
        opacity: 1,
      })),
      transition('hide => show', [
        animate('1s')
      ]),
    ]),
  ],
})
export class PresentationComponent implements OnInit {
  window;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.window = window.pageYOffset;
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
