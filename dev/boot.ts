///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/>
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './components/app/app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS
]);
