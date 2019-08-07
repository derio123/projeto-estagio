import { EditarPage } from "./usuario-editar.po";
import { browser } from "protractor";

// ARQUIVO DE TESTE

//import { CadastroPage } from '../../../src/app/usuario/cadastro/cadastro.po';

describe('editar', () => {
    let pagina: EditarPage;

    beforeEach(() => {
        pagina = new EditarPage();
    });


    it('deve procurar usuário usando barra de busca', () => {
        pagina.campoBusca.sendKeys('josefina');
        browser.sleep(2000);
    });

    it('deve navegar para editar', () => {
        pagina.botaoEditar.click();
        browser.sleep(1500);
        expect(pagina.obterTextoPaginaEditar()).toEqual('Editar usuário');
    });

    it('deve pegar dados do formulário', () => {
        expect(pagina.campoNome.getAttribute('value')).toEqual('josefina');
        expect(pagina.campoEmail.getAttribute('value')).toEqual('jose@fina.com');
        expect(pagina.campoTelefone.getAttribute('value')).toEqual('33016161');
        browser.sleep(1500);
    });

    it('deve limpar os campos "nome" e "email" do formulário de edição e preenchê-lo com os novos dados', () => {
        pagina.campoNome.clear();
        pagina.campoEmail.clear();
        browser.sleep(1000);
        pagina.campoNome.sendKeys('josefina Oliveira');
        pagina.campoEmail.sendKeys('josefina@eira.com');
        browser.sleep(1000);

        expect(pagina.campoNome.getAttribute('value')).toEqual('josefina Oliveira');
        expect(pagina.campoEmail.getAttribute('value')).toEqual('josefina@eira.com');
        expect(pagina.campoTelefone.getAttribute('value')).toEqual('33016161');
    });

    it('deve finalizar edição', () => {
        pagina.botaoFinalizar.click();
        browser.sleep(1500);
    });

    

})