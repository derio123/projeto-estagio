import { CadastroPage } from "./usuario-cadastro.po";
import { browser } from "protractor";

// ARQUIVO DE TESTE

//import { CadastroPage } from '../../../src/app/usuario/cadastro/cadastro.po';

describe('cadastrar', () => {
    let pagina: CadastroPage;

    beforeEach(() => {
        pagina = new CadastroPage();
    });

    //teste de navegação para a página /cadastrar
    it('deve navegar para cadastrar', () => {
        pagina.navegarParaCadastro();
        browser.sleep(1500);
        expect(pagina.obterTextoPaginaCadastro()).toEqual('Cadastro de novo usuário');
    });

    // preenchimento automático do formulário com os dados informados
    it('deve preencher formulário', () => {
        pagina.campoNome.sendKeys('josefina');
        pagina.campoEmail.sendKeys('jose@fina.com');
        pagina.campoTelefone.sendKeys('33016161');

        expect(pagina.campoNome.getAttribute('value')).toEqual('josefina');
        expect(pagina.campoEmail.getAttribute('value')).toEqual('jose@fina.com');
        expect(pagina.campoTelefone.getAttribute('value')).toEqual('33016161');
    });

    // salva os dados informados
    it('deve salvar os dados', () => {
        pagina.botaoSalvar.click();
        browser.sleep(3000);
    });

    // verifica se o elemento alerta de sucesso existe na tela
    it('categoria cadastrada com sucesso', () => {
        expect(pagina.mensagemSucesso().isPresent()).toBe(false);
        browser.sleep(3000);
    });
})