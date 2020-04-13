import { Component, OnInit } from '@angular/core';
import{WeatherService} from './services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  wweather;
  constructor(private weatherService:WeatherService){

  }
ngOnInit(){
 


}


weather(cityName: string, countrycode:string){
  this.weatherService.getWeather(cityName, countrycode)
  .subscribe(
     res=>{
       console.log(res);
      this.wweather=res},
     err=>console.log(err)

  )
}

submitLocation(cityName: HTMLInputElement,countrycode:HTMLInputElement){
  if (cityName.value && countrycode.value){
    this.weather(cityName.value,countrycode.value);
    cityName.value="";
    countrycode.value="";
  
   return false;
  }else{
    alert('Inserte datos');
  }
  cityName.focus;
}

  
}

