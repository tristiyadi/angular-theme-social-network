import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
