import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: `./counter-page.component.html`,
  styleUrls: ['./counter-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPageComponent {
  initialValue = 10;
  counterSignal = signal(10);

  constructor() {}

  counter = this.initialValue;

  incrementBy(value: number) {
    this.counter ++;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update(current => current + value);
  }

  decBy(value: number) {
    this.counter --;
    this.counterSignal.update(current => current - value);
  }
  resCount() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
