// O EXCLUIR É IMPLEMENTADO DENTRO DA LISTA, POR ISSO NÃO HÁ NECESSIDADE DE NAVEGAR E SEU TEXTO DEVERÁ SER IGUAL A O DA LISTA
// ESTE ARQUIVO TESTA TANTO A BUSCA POR USUÁRIO QUANTO SUA EXCLUSÃO


import { browser, by, element } from 'protractor';


export class ExcluirUsuario {

    campoBusca = element(by.id('busca'));
    botaoExcluir = element(by.buttonText('Excluir'));
}