import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() dataFromParent;
  @Output() dataFromChild = new EventEmitter();

  sendData() {
    this.dataFromChild.emit('Hello from child..!');
  }
}

