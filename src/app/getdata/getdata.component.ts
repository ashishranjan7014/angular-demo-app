import { Component, OnInit } from '@angular/core';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  allData = [];

  constructor(
    private allService: AllserviceService
  ) { }

  ngOnInit() {
    this.allService.getData()
      .subscribe((data) => {
        this.allData = data;
      })
  }

}
