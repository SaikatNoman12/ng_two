import { ValidatorFn, AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

export function practiceValidateEmail(): ValidatorFn {
  const reqEx = /@([a-z|A-Z])/ig;

  return (control: AbstractControl): ValidationErrors | null => {

    const validIt = reqEx.test(control.value);

    if (validIt) {
      return null;
    }
    else {
      return {
        practiceValidate: {
          valid: true
        },
      };
    }
  };

}


@Directive({
  selector: '[appPracticeReactiveFormEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PracticeReactiveFormEmailDirective,
    multi: true
  }]
})
export class PracticeReactiveFormEmailDirective implements Validator {

  constructor() { }

  public validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return practiceValidateEmail()(control);
  }

}
