import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HlcClrFormModule, InputContainerConfig, INPUT_CONTAINER_CONFIG } from '@ng-holistic/clr-forms'

// CLARITY ICONS DEPENDENCY: THIS REQUIRED ONLY IN STACKBLITZ SEE #700
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
//

export function getInputContainerConfigRu(localeId: string): InputContainerConfig {
    /**
     * When application build with i18n-locale=ru all input optional hints will be translated
     */
    return {
        showRequiredHint: 'optional',
        optionalLabel: localeId === 'ru' ? 'Опционально' : undefined
    };
}


@NgModule({
  imports: [ BrowserModule, HttpClientModule,  HlcClrFormModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
      {
        provide: INPUT_CONTAINER_CONFIG,
        useValue: { showRequiredHint: 'required', requiredLabel: 'required' } as InputContainerConfig
      }/*,
      // Example how to i18n form hint labels
      {
        provide: INPUT_CONTAINER_CONFIG,
        useFactory: getInputContainerConfigRu,
        deps: [LOCALE_ID]
      }*/      
  ]
})
export class AppModule { }
