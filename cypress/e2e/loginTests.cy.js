import ActionsCadastro from '../support/pages/Cadastro/ActionsCadastro.js';
const utils = require ('../Utils.js')

describe('Cadastrar no sistema', () => {

    before(() => {
        cy.visit('https://buger-eats-qa.vercel.app/') 
        cy.get("a").click()
    })
    
    it('Realizar cadastro com sucesso', () => {
        ActionsCadastro.preencherDados('Lucas Santana', '00000000055', 'exemplo@dominio.com', '(31) 9 95665532')
        ActionsCadastro.preencherEndereco(91450507, 110, 'casa')
        ActionsCadastro.selecionarMetodoDeEntrega()
        utils.UploadArquivo('cnh-exemplo.jpg')
        ActionsCadastro.confirmarCadastro()
        ActionsCadastro.fecharAlert()
    });

    it.only('Validar mensagens de alerta', () => {
        ActionsCadastro.confirmarCadastro()   
        ActionsCadastro.validarMensagensDePreenchimento()
    });
});