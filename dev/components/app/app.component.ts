import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {NavigationBarComponent} from '../navbar/nav.component';

@Component({
    selector: 'angular-app',
    templateUrl: '/app/components/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavigationBarComponent],
    providers: [],
    precompile: [],
    styles:[]
})
export class AppComponent {
  title: string = "Tour of Heroes";

  sayHello() {
    return "Hello";
  }
}
