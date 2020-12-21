import { Component } from '@angular/core';
import { AbstractLocalizationService } from '@app/shared/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(public translate: AbstractLocalizationService) {
  }
  onChange(lang:string){
   this.translate.useLanguage(lang);
 }
}
