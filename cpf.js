const cpfList = document.querySelectorAll('.cpf li');
console.log(cpfList);

//TRANSFORMANDO EM ARRAY
const arrayCpf = [...cpfList];

console.log(arrayCpf);


//TRANFORMANDO EM ARRAY e TRAZENDO O VALOR
function ele(elements) {
    const arrayele = Array.from(elements);
    return arrayele.map(element => {
        return element.innerText;
    })
}
console.log(ele(cpfList));

const limparCPF = (cpf) => {
    return cpf.replace(/\D/g, '');
}
console.log(limparCPF('121.121.222 33'));

const construirCpf = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3-$4');
}
console.log(construirCpf('111222333344'));

const formatarCpf = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCpf);
}

const rrCPF = ele(cpfList);
console.log(formatarCpf(rrCPF));

const subsCPFS = (cpfsElements) => {
    const cpfs = ele(cpfsElements);
    const cpfformatados = formatarCpf(cpfs);

    cpfsElements.forEach((element, index) => {
        element.innerText = cpfformatados[index];
    })

    console.log(cpfformatados);

}
subsCPFS(cpfList);

// VALIDAR CPFS E CNPJ

import ValidarCpf from './validar-cpf.js';

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf);

console.log(validarCpf.construir('123456789000110'));