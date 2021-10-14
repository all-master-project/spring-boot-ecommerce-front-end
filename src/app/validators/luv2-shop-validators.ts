import { FormControl, ValidationErrors } from '@angular/forms';

export class Luv2ShopValidators {
  //Whitespace validation
  static notOnlyWhitespace(controle: FormControl): ValidationErrors {
    // check if string only contains whitespace
    if (controle.value != null && controle.value.trim().length === 0) {
      //invalid, return error object
      return { notOnlyWhitspace: true };
    } else {
      return {};
    }
  }
}
