import { Component, OnInit } from '@angular/core';
import { COPY } from '../copy/copy';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copy = COPY;

  constructor() { }

  ngOnInit(): void {
  }

}
