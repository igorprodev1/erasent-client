import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showSide = true;

  constructor(private mainServices: MainService) {
    this.mainServices.getDataSample().subscribe(data =>{
      console.log(data);
    })
  }
  
  ngOnInit() {
  }

}
