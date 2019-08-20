import { Component } from '@angular/core';
import { ClrFormLayouts } from '@ng-holistic/clr-forms';
import { TextMask } from '@ng-holistic/clr-controls';
import { map } from 'rxjs/operators';
import { FormGroup, Validators } from '@angular/forms';

const definition: ClrFormLayouts.ClrFormLayout = {
  kind: 'fields',
  fields: [
    {
      id: 'text',
      kind: 'TextField',
      props: {
        label: 'Text',
        placeholder: 'Type something'
      },
      validators: [Validators.required]
    },
    {
      id: 'num',
      kind: 'MaskField',
      props: {
        label: 'Number',
        placeholder: '0000000',
        mask: TextMask.int(7),
        unmask: TextMask.unmaskNumber
      }
    }
  ]
};

@Component({
  selector: 'my-app',
  template: `<hlc-clr-form [definition]="definition"></hlc-clr-form>`
})
export class AppComponent {
  readonly definition = definition;
}
