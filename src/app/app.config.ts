import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { ProductsService } from './products.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    ProductsService,
    { provide: DEFAULT_CURRENCY_CODE, useFactory: (locale: string) => locale === 'es' ? 'ESP':'USD', deps:[LOCALE_ID] }
  ],
};
