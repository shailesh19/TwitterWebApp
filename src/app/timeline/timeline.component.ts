import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [ServiceService]
})
export class TimelineComponent implements OnInit {
  public myTimeline: any;
  constructor(private api: ServiceService) {
    this.myTimeline = '';
    this.api.getTimeline().subscribe( data => {this.myTimeline = data; console.log(this.myTimeline); });
   }

  ngOnInit() {
  }

}
