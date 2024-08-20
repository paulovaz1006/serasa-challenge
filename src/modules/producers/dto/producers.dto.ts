export class ProducersDTO {
  id: string;
  name: string;
  cpf: string;
  cnpj: string;

  constructor(name, cpf = null, cnpj = null) {
      this.name = name;
      this.cpf = cpf;
      this.cnpj = cnpj;
  }

  public async isValid() {
    let error = false;
    let message = ''

    if (this.name.trim().length === 0) {
      error = true;
      message = `Name is not empty`
    }

    if (this.cnpj) {
      if((typeof this.cnpj !== 'number')) {
        error = true;
        message = `Cnpj not be string`
      }

      if(this.cnpj.toString().length !== 14) {
        error = true;
        message = `Cnpj invalid`
      }
    }

    if (this.cpf) {
      if((typeof this.cpf !== 'number')) {
        error = true;
        message = `CPF not be string`
      }

      if(this.cpf.toString().length !== 11) {
        console.log(this.cpf, this.cpf.toString().length)
        error = true;
        message = `CPf invalid`
      }
    }

    return {
      error,
      message
    }    
  }
}