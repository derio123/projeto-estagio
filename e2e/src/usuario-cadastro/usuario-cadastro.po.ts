import { browser, by, element } from 'protractor';


export class CadastroPage {
    
    navegarParaCadastro() {
        return browser.get('/#/cadastrar');
    }
    
    obterTextoPaginaCadastro() {
        return element(by.tagName('h1')).getText();
    }

    campoNome = element(by.id('nome'));
    campoEmail = element(by.id('email'));
    campoTelefone = element(by.id('telefone'));

    // campoNome = element(by.id('nome'));
    // campoEmail = element(by.id('email'));
    // campoTelefone = element(by.id('telefone'));

    botaoSalvar = element(by.buttonText('Cadastrar novo usuário'));
    
    // verifica se categoria foi cadastrada
    /*mensagemSucesso() {
        var alertaSucesso = element(by.id('alerta-sucesso'));
        return alertaSucesso;
    }*/
}