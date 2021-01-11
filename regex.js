function Regex() {
  this.patterns = {
    cpf: /([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/,
    cnpj: /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    telefone10: /(\d{2})(\d{4})(\d{4})/,
    telefone11: /(\d{2})(\d{5})(\d{4})/,
    apenasLetras: /\W/g,
    apenasNumeros: /\D/g
  };
}

Regex.prototype = {
  cpf: function(string) {
    return string.replace(this.patterns.cpf,"$1.$2.$3-$4");
  },
  cnpj: function(string) {
    return string.replace(this.patterns.cnpj,"$1.$2.$3/$4-$5");
  },
  telefone: function(string) {

    if(string.length == 10){
      return string.replace(this.patterns.telefone10,"($1) $2-$3");
    }else{
      return string.replace(this.patterns.telefone11,"($1) $2-$3");
    }
    
  },
  apenasNumeros: function(string) {
    return string.replace(this.patterns.apenasNumeros,'');
  },
  apenasLetras: function(string) {
    return string.replace(this.patterns.apenasLetras,'');
  }
}

module.exports = Regex;