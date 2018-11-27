import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as data1K from "./MOCK_DATA.json"
import * as data10K from "./MOCK_DATA10K.json"

@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrls: ['./virtualscroll.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualscrollComponent {
  employees1k:any = data1K.default;
  employees10k:any = data10K.default;
}
