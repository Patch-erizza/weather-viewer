// Сделать инпут (поле ввода) для задания города,
// немного ждем, отправляем запрос в апи, показываем пользователю
// debaunsing (дождаться ввода последней буквы, потом отправлять запрос на сервер)

// 1. Создаем поле для ввода в html
// 2. По клику на кнопку ОК отображаем лоадер, вызываем функцию getCity
// ===> получаем город, введенный юзером, идем в апи weather-api
// Запрашиваем данные о погоде в нашем городе (getWeather?)
// ===> показываем пользователю данные о погоде в его городе (loadWeather), следуя конструктору класса WeatherForecast

import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {WeathersService} from "./weathers.service";
import {WeatherForecast} from "./weather.forecast";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ProgressSpinnerOverviewExample} from "./spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, NgForOf, MatProgressSpinner, ProgressSpinnerOverviewExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  cityName = "";
  // @ts-ignore
  weathers: WeatherForecast;

  constructor(private serv: WeathersService) {
  }
  loadWeather() {
    this.serv.getWeather(this.cityName).subscribe(data => {
      this.weathers = data;
    })
  }

  protected readonly WeatherForecast = WeatherForecast;
}
