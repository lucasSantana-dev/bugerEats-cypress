describe('Cadastrar no sistema', () => {

    before(() => {
        cy.visit('https://buger-eats-qa.vercel.app/') 
    })

    it('Realizar cadastro', () => {
        cy.get("a").click()
        preencherDados('Lucas Santana', '00000000055', 'exemplo@dominio.com', '(31) 9 95665532')
        preencherEndereco(91450507, 110, 'casa')
        selecionarMetodoDeEntrega()
        uploadDocumento()
        cy.get("button[type='submit']").click()
        cy.get("button[class='swal2-confirm swal2-styled']").click()
    });
    
    function preencherDados(nome, cpf, email, numero) {
        cy.get('input[placeholder="Nome completo"]').type(nome)
        cy.get("input[placeholder='CPF somente números']").type(cpf)
        cy.get("input[placeholder='E-mail']").type(email)
        cy.get("input[placeholder='Whatsapp']").type(numero)
    }

    function preencherEndereco(cep, numeroCasa, complemento) {
        cy.get("input[placeholder='CEP']").type(cep)
        cy.get("input[value='Buscar CEP']").click()
        cy.get("input[placeholder='Número']").type(numeroCasa)
        cy.get("input[placeholder='Complemento']").type(complemento)
    }

    function selecionarMetodoDeEntrega(params) {
        cy.get("img[alt='Moto']").click()
    }

    function uploadDocumento(params) {
        cy.fixture('cnh-exemplo.jpg', null).as('fixtures')
        cy.get('input[type="file"]').selectFile('@fixtures', {force: true})
    }
});