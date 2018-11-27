import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})

export class DragdropComponent {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Buy flowers for wife',
    'Go home',
    'Eat dinner',
    'Watch Godzilla',
    'Fall asleep'
  ];

  activeList = ['Walk dog'];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Drink coffee',
    'Check e-mail',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      //drop within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      //drop to a different list
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
