const elem = require('./ElementsCadastro').Elements

class ActionsCadastro {

     preencherDados(nome, cpf, email, numero) {
        cy.get(elem.inputNomeCompleto).type(nome)
        cy.get(elem.inputCpf).type(cpf)
        cy.get(elem.inputEmail).type(email)
        cy.get(elem.inputNumTel).type(numero)
    };

     preencherEndereco(cep, numeroCasa, complemento) {
        cy.get(elem.inputCep).type(cep)
        cy.get(elem.buttonBuscarCep).click()
        cy.get(elem.inputNumCasa).type(numeroCasa)
        cy.get(elem.inputComplemento).type(complemento)
    }

     selecionarMetodoDeEntrega(params) {
        cy.get(elem.buttonMoto).click()
    }

    uploadDocumento(arquivo) {
        cy.fixture(arquivo, null).as('fixtures')
        cy.get('input[type="file"]').selectFile('@fixtures', {force: true})

    }
}

export default new ActionsCadastro()




