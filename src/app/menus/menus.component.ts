import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
