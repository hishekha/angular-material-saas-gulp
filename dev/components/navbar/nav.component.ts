import {Component} from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
  selector: 'navbar',
  templateUrl: '/app/components/navbar/nav.component.html',
  directives: [
      MD_SIDENAV_DIRECTIVES,
      MD_BUTTON_DIRECTIVES,
      MD_LIST_DIRECTIVES,
      MdToolbar,
      MdIcon
    ],
  providers: [MdIconRegistry]
})
export class NavigationBarComponent {
  brand:string = "BillingApi"
}
