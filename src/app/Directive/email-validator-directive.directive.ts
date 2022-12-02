import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Directive } from '@angular/core';


export function emailValidator(): ValidatorFn {

  const EMAIL_REGEXP = /@/i;

  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = EMAIL_REGEXP.test(control.value);

    if (isValid) {
      return null;
    } else {
      return {
        emailValidator: {
          valid: false,
        },
      };
    }
  };
}

@Directive({
  selector: '[appEmailValidatorDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirectiveDirective,
    multi: true,
  }],
})

export class EmailValidatorDirectiveDirective implements Validator {

  constructor() { }

  public validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator()(control);
  }

}
