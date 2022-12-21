import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator, identityRevealedValidator, UniqueAlterEgoValidator } from '../customvalidators/forbidden-name.directive';


@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.css']
})
export class HeroformComponent {


  constructor(
    private alterEgoValidator: UniqueAlterEgoValidator
    ) {  }
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  heroForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i)
    ]),
    alterEgo: new FormControl('', {
      asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
      updateOn: 'blur'
    }),
    power: new FormControl('', Validators.required)
  },{ validators: identityRevealedValidator }); // <-- add custom validator at the FormGroup level);
  get name() { return this.heroForm.get('name')!; }

  get power() { return this.heroForm.get('power')!; }

  get alterEgo() { return this.heroForm.get('alterEgo')!; }
}
