// ESTA CLASSE TESTA TANTO A BUSCA POR UM ELEMENTO QUANTO SUA ALTERAÇÃO(EDIÇÃO)

import { browser, by, element } from 'protractor';


export class EditarPage {
    
    obterTextoPaginaEditar() {
        return element(by.tagName('h1')).getText();
    }

    campoBusca = element(by.id('busca'));

    campoNome = element(by.id('nome'));
    campoEmail = element(by.id('email'));
    campoTelefone = element(by.id('telefone'));

    botaoEditar = element(by.buttonText('Editar'));
    botaoFinalizar = element(by.buttonText('Finalizar'));

}