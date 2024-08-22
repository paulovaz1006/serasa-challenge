type TProducer = {  
  cpf: number;
  cnpj: number;
  producer_name: string;
  farm_name: string;
  city: string;
  state: string;
  area_total_hectares: number;
  area_agricultura_hectares: number;
  area_vegetacao_hectares: number
  culture: string;
}

type UserDTOUpdate = {}

export {
  UserDTOUpdate,
  TProducer
}