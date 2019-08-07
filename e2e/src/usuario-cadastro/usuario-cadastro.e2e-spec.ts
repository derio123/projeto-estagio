import { CadastroPage } from "./usuario-cadastro.po";
import { browser } from "protractor";


//import { CadastroPage } from '../../../src/app/usuario/cadastro/cadastro.po';

describe('cadastrar', () => {
    let pagina: CadastroPage;

    beforeEach(() => {
        pagina = new CadastroPage();
    });

    // CADASTRANDO JOSEFINA

    //teste de navegação para a página /cadastrar
    it('deve navegar para cadastrar', () => {
        browser.sleep(1500);
        pagina.navegarParaCadastro();
        expect(pagina.obterTextoPaginaCadastro()).toEqual('Cadastro de novo usuário');
    });

    // preenchimento automático do formulário com os dados informados
    it('deve preencher formulário para josefina', () => {
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
        browser.sleep(1500);
    });


    //CADASTRANDO ALEXANDRE


    //teste de navegação para a página /cadastrar
    it('deve navegar para cadastrar', () => {
        browser.sleep(1500);
        pagina.navegarParaCadastro();
        expect(pagina.obterTextoPaginaCadastro()).toEqual('Cadastro de novo usuário');
    });

    it('deve preencher formulário para alexandre', () => {
        pagina.campoNome.sendKeys('alexandre');
        pagina.campoEmail.sendKeys('ale@xandre.com');
        pagina.campoTelefone.sendKeys('995348567');

        expect(pagina.campoNome.getAttribute('value')).toEqual('alexandre');
        expect(pagina.campoEmail.getAttribute('value')).toEqual('ale@xandre.com');
        expect(pagina.campoTelefone.getAttribute('value')).toEqual('995348567');
    })

    // salva os dados informados
    it('deve salvar os dados', () => {
        pagina.botaoSalvar.click();
        browser.sleep(1500);
    });
})