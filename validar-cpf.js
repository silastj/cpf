export default class ValidarCpf {

    constructor(element) {
        this.element = element;
    }
    // LIMPAR O CPF ( EXEMPLO PONTOS E TRAÇOS )
    limpar(cpf){
        return cpf.replace(/\D/g, '');
    }
    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3.$4-$5');
    }
    formatar(cpf) {
        const cpfLimpo = this.limpar(cpf);
        return this.construir();
    }

}

console.log('teste');