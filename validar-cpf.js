export default class ValidarCpf {

    constructor(element) {
        this.element = element;
    }
    // LIMPAR O CPF ( EXEMPLO PONTOS E TRAÇOS )
    limpar(cpf){
        return cpf.replace(/\D/g, '');
    }
    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3.$4');
    }
    formatar(cpf) {
        const cpfLimpo = this.limpar(cpf);
        return this.construir(cpfLimpo);
    }
    validar(cpf){
        const matchCpf = cpf.match(/(?:\d{3}[a.\s]?){3}\d{2}/g);
        return (matchCpf && matchCpf[0] === cpf);
    }
    validarNaMudanca(cpfElement){
        if(this.validar(cpfElement.value)) {
            cpfElement.value = this.formatar(cpfElement.value);
            cpfElement.classList.add('valido');
            cpfElement.classList.remove('erro');
        } else {
            cpfElement.classList.add('erro');
            cpfElement.classList.remove('valido');
        }
        // console.log(this.formatar(cpfElement.value))
    }
    adicionarEvento() {
        this.element.addEventListener('change', () => {
            this.validarNaMudanca(this.element);
        })
    }
    iniciar(){
        this.adicionarEvento();
        return this;
    }
}

