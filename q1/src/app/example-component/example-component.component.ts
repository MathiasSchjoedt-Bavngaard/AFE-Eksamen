import { Component } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent {
  count = 0;
  showNumberList = false;
  numberArray = [] as number[];

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  toggleNumberList() {
    if (this.count < 0) {
      this.numberArray = Array.from({ length: this.count * -1 }, (_, i) => this.count + i);
    } else {
      this.numberArray = Array.from({ length: this.count }, (_, i) => i);
    }
    this.showNumberList = true;
  }
}
