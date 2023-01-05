import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'meghala';
  sucess:boolean=true;
  LandSucc:boolean=true;
  showError!: string;
  constructor(private list:ServiceService) {}
flightData:any=[];
 ngOnInit()
  {
    
     this.list.fetchFlights().subscribe(data=>{
        // console.log("responce recived ",data),
      this.flightData = data;
      if(this.flightData.length == 0) {
        this.showError = "No Record Found";
      }
      console.log("Data :",this.flightData)      
      // error=>console.log("exception recoved ")
      })
  }
sendYear(year:any): void {
  console.log(year);
  this.list.fetchAll(year,this.sucess,this.LandSucc).subscribe(data=>{
    // console.log("responce recived ",data),
  this.flightData = data;
  console.log("sucees :",this.flightData)      
  // error=>console.log("exception recoved ")
  })
}

sendSuccess(succ:any) {
  this.sucess = succ;
  //console.log(succ);
  this.list.fetchLanchSucess(succ).subscribe(data=>{
    // console.log("responce recived ",data),
  this.flightData = data;
  console.log("sucees :",this.flightData)      
  // error=>console.log("exception recoved ")
  })
}

LandSuccLuanchSucc(val:any){
  this.LandSucc = val;
  this.list.fetchLanchSucessAndLandSuccess(val).subscribe(data=>{
    // console.log("responce recived ",data),
  this.flightData = data;
  console.log("Land :",this.flightData)      
  // error=>console.log("exception recoved ")
  })

}
}
