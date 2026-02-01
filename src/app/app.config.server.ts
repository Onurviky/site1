import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),

    // ✅ IMPORTANTE:
    // Esto desactiva el prerender/rutas especiales del SSR que te están rompiendo
    // con "getPrerenderParams is missing" para productos/:categoria
    // provideServerRoutesConfig(serverRoutes),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);