export class FarmDTO {
  farm_name: string;
  city: string;
  state: string;
  area_total_hectares: number;
  area_agricultura_hectares: number;
  area_vegetacao_hectares: number;

  constructor(farm_name, city, state, area_total_hectares, area_agricultura_hectares, area_vegetacao_hectares) {
    this.farm_name = farm_name;
    this.city = city;
    this.state = state;
    this.area_total_hectares = area_total_hectares;
    this.area_agricultura_hectares = area_agricultura_hectares;
    this.area_vegetacao_hectares = area_vegetacao_hectares
  }

  public async isValid() {
    let error = false;
    let message = ''
    const sumArea = this.area_agricultura_hectares + this.area_vegetacao_hectares;

    if (sumArea > this.area_total_hectares) {
      error = true;
      message = 'area agricultures + area vegetation not be more area total'
    }

    return {
      error,
      message
    }    
  }
}