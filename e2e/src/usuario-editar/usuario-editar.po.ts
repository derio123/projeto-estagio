// ARQUIVO DE TESTE

import { browser, by, element } from 'protractor';


export class EditarPage {
    
    navegarParaAlterar() {
        return browser.get('/#/editar/id');
    }
    
    obterTextoPaginaCadastro() {
        return element(by.tagName('h1')).getText();
    }

    // completar com os outros métodos para a página Editar
}