import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {WeatherForecast} from "./weather.forecast";
import {map} from "rxjs";

@Injectable(
  {providedIn: "root"}
)
export class WeathersService {

  private url = "https://goweather.herokuapp.com/weather/";
  private http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
  }
  getWeather(cityName: string) {
    return this.http.get<WeatherForecast>(this.url+cityName).pipe(
        map(data=> new WeatherForecast(data))
    );
  }
}
