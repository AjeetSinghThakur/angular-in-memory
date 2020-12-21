import { Component, OnInit } from '@angular/core';
import { AbstractLocalizationService } from '@app/shared/services';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(public translate: AbstractLocalizationService) { }

  ngOnInit() {
  }

}
