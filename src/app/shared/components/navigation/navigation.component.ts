import { Component } from '@angular/core';
import { AbstractLocalizationService } from '@app/shared/services';
import { OpenIdConnectService } from '@app/shared/services/open-id-connect.service';

@Component({
  selector: 'qa-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(public translate: AbstractLocalizationService,
              public openIdConnectService: OpenIdConnectService) {
  }
  onChange(lang: string){
   this.translate.useLanguage(lang);
 }
}
