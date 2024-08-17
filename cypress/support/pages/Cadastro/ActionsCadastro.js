const elem = require('./ElementsCadastro').Elements;
const utils = require('../../../Utils')

class ActionsCadastro {

    preencherDados(nome, cpf, email, numero) {
        cy.get(elem.inputNomeCompleto).type(nome)
        cy.get(elem.inputCpf).type(cpf)
        cy.get(elem.inputEmail).type(email)
        cy.get(elem.inputNumTel).type(numero)
    }

    preencherEndereco(cep, numeroCasa, complemento) {
        cy.get(elem.inputCep).type(cep)
        cy.get(elem.buttonBuscarCep).click()
        cy.get(elem.inputNumCasa).type(numeroCasa)
        cy.get(elem.inputComplemento).type(complemento)
    }

    selecionarMetodoDeEntrega(params) {
        cy.get(elem.buttonMoto).click()
    }
    
    confirmarCadastro() {
        cy.get(elem.buttonConfirmarCadastro).click()
    }

    fecharAlert() {
        cy.get(elem.buttonFecharAlert).click()
    }

    validarMensagensDePreenchimento() {
        cy.get(elem.spanAlertMsgNome).should('have.text', 'É necessário informar o nome')
        cy.get(elem.spanAlertCpf).should('have.text', 'É necessário informar o CPF')
        cy.get(elem.spanAlertEmail).should('have.text', 'É necessário informar o email')
        cy.get(elem.spanAlertCep).should('have.text', 'É necessário informar o CEP')
        cy.get(elem.spanAlertNumCasa).should('have.text', 'É necessário informar o número do endereço')
        cy.get(elem.spanAlertVeiculo).should('have.text', 'Selecione o método de entrega')
        cy.get(elem.spanAlertCnh).should('have.text', 'Adicione uma foto da sua CNH')
    }

}

export default new ActionsCadastro()




