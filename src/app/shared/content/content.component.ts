import { Component, OnInit } from '@angular/core';
import { COPY } from '../copy/copy';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  copy = COPY;

  constructor() { }

  ngOnInit(): void {
  }

}
