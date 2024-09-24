import { ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


// aca se importan las cosas como en los modules
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(
      {
        skipInitialTransition: true,// solo la inicial
        onViewTransitionCreated( transitionInfo ) {
          console.log( transitionInfo );
        }
      }
    )),
    provideClientHydration(),
    provideHttpClient( withInterceptorsFromDi() ), provideAnimationsAsync()
  ],
};
