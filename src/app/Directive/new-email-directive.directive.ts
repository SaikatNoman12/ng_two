import { ValidatorFn, AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

export function newEmailValidation(): ValidatorFn {

  const regEx = /@/ig;

  return (control: AbstractControl): ValidationErrors | null => {
    const controlText = regEx.test(control.value);

    if (controlText) {
      return null;
    }
    else {
      return {
        newEmailValidation: {
          valid: true
        },
      };
    }
  };

}

@Directive({
  selector: '[appNewEmailDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NewEmailDirectiveDirective,
    multi: true
  }]
})

export class NewEmailDirectiveDirective implements Validator {

  constructor() { }

  public validate(control: AbstractControl): ValidationErrors | null {
    return newEmailValidation()(control);
  }

}
