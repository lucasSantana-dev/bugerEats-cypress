import ActionsCadastro from '../support/pages/Cadastro/ActionsCadastro.js';

describe('Cadastrar no sistema', () => {

    before(() => {
        cy.visit('https://buger-eats-qa.vercel.app/') 
    })

    /*it('Realizar cadastro', () => {
        cy.get("a").click()
        preencherDados('Lucas Santana', '00000000055', 'exemplo@dominio.com', '(31) 9 95665532')
        preencherEndereco(91450507, 110, 'casa')
        selecionarMetodoDeEntrega()
        uploadDocumento()
        cy.get("button[type='submit']").click()
        cy.get("button[class='swal2-confirm swal2-styled']").click()
    });*/

    it('Realizar cadastro', () => {
        cy.get("a").click()
        ActionsCadastro.preencherDados('Lucas Santana', '00000000055', 'exemplo@dominio.com', '(31) 9 95665532')
        ActionsCadastro.preencherEndereco(91450507, 110, 'casa')
        ActionsCadastro.selecionarMetodoDeEntrega()
        ActionsCadastro.uploadDocumento('cnh-exemplo.jpg')
        cy.get("button[type='submit']").click()
        cy.get("button[class='swal2-confirm swal2-styled']").click()
    });
});