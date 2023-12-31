import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css','./big-card.resposive.component.css'],
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string= '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription = '';
  @Input()
  Id='';

  constructor() {}

  ngOnInit(): void {}
}
//
