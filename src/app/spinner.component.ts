import {Component} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'progress-spinner-overview-example',
  template: `<span class="loader"></span>`,
  styles: `.loader {
    width: 48px;
    height: 48px;
    border: 5px solid lightskyblue;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }`,
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class ProgressSpinnerOverviewExample {
  isLoading = true;
}
