import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','./small-card.resposive.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:String= '';
  @Input()
  cardTitle:String='';
  @Input()
  Id='';

  constructor() { }

  ngOnInit(): void {
  }

}
