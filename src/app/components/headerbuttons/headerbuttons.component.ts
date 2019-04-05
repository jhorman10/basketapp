import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headerbuttons',
  templateUrl: './headerbuttons.component.html',
  styleUrls: ['./headerbuttons.component.scss'],
})
export class HeaderbuttonsComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
