import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: `./counter-page.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPageComponent {
  initialValue = 0;
  counterSignal = signal(0);

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
    this.counter = this.initialValue;
    this.counterSignal.set(this.initialValue);
  }
}
