//funções reutilizáveis

export function clicarBotao() {
    cy.get().click()
}

export function UploadArquivo(arquivo) {
        cy.fixture(arquivo, null).as('fixtures')
        cy.get('input[type="file"]').selectFile('@fixtures', {force: true})
}