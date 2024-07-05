export class WeatherForecast {
  public temperature: string;
  public wind: string;
  public description?: string;
  public forecast?: WeatherForecast[];
  public day?: number;

  constructor(data: any) {
    this.temperature = data.temperature;
    this.wind = data.wind;
    this.description = data.description;
    this.day = data.day;
    if (data.forecast) {
      this.forecast = data.forecast.map((dataForecast: any) => new WeatherForecast(dataForecast));
    }
  }
}
