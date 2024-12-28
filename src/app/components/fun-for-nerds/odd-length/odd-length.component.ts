import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-length',
  imports: [],
  templateUrl: './odd-length.component.html',
  styleUrl: './odd-length.component.css'
})
export class OddLengthComponent {
  @Input() words: string[] = [];
  @Input() partialWord: string = '';
}
