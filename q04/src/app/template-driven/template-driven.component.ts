import { Component } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent {
  model = new User('', '', '', '');
  submitted = false;
  sumbittedModel = new User('', '', '', '');

  onSubmit() {
    console.log('onSubmit');
    this.sumbittedModel = new User(
      this.model.firstName,
      this.model.lastName,
      this.model.email,
      this.model.phone
    );
    this.submitted = true;
  }
}
