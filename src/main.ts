import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLicense } from '@syncfusion/ej2-base';
 
// Registering Syncfusion license key
registerLicense('Ix0oFS8QJAw9HSQvXkVhQlBad1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3tTfkdnWHZecXBSRWVVU091Wg==');
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
