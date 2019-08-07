// ESTE ARQUIVO TESTA TANTO A BUSCA POR USUÁRIO QUANTO SUA EXCLUSÃO

import { ExcluirUsuario } from "./usuario-excluir.po";
import { browser } from "protractor";

describe('cadastrar', () => {
    let pagina: ExcluirUsuario;

    beforeEach(() => {
        pagina = new ExcluirUsuario();
    });

    // it('deve procurar usuário usando barra de busca', () => {
    //     pagina.campoBusca.sendKeys('alexandre');
    //     browser.sleep(2000);
    // });

    // exclui primeiro registro encontrado
    it('deve excluir um registro', () => {
        pagina.botaoExcluir.click();
        browser.sleep(1500);
    });

    // it('deve limpar campo de busca', () => {
    //     pagina.campoBusca.clear();
    //     browser.sleep(1500);
    // })
    
})