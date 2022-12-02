import { ValidatorFn, AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

export function emailValidatorMail(): ValidatorFn {

  const regEx = /@/i;

  return (control: AbstractControl): ValidationErrors | null => {

    const isValidation = regEx.test(control.value);

    if (isValidation) {
      return null;
    }
    else {
      return {
        emailValidatorMail: {
          valid: true
        },
      };
    }

  }
}


@Directive({
  selector: '[appEmailValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidationDirective,
    multi: true
  }]
})
export class EmailValidationDirective implements Validator {

  constructor() { }

  public validate(control: AbstractControl): ValidationErrors | null {
    return emailValidatorMail()(control);
  }

}
