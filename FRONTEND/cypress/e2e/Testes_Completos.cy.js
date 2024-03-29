
// Cadastro de Produto
describe('Cadastro de Produto', () => {
  it('Deve preencher o formulário e enviar', () => {
    cy.visit('http://localhost:4173/produto/cadastro')
    cy.get('#nome').type('Nome do Produto')
    cy.get('#status').select('Ativo')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/listagem-produto')

    cy.get('.notification')
      .should('be.visible')
      .then(() => {
        cy.get('.notification').should('be.visible')
      })
  })

  it('Deve testar se o formulário possui as validações', () => {
    cy.visit('http://localhost:4173/produto/cadastro')
    cy.get('button[type="submit"]').click()

    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('#nome').type('Nome do Produto')
    cy.get('button[type="submit"]').click()
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('#status').select('Inativo')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/listagem-produto')
  })
})

// Cadastro de Cliente
describe('Cadastro de Cliente', () => {
  it('Deve preencher o formulário e enviar', () => {
    cy.visit('http://localhost:4173/cadastro-cliente')
    cy.get('#nome').type('Nome do Cliente')
    cy.get('#cpf').type('123.456.789-09')
    cy.get('#telefone').type('(92) 99257-4730')
    cy.get('#email').type('cliente@example.com')
    cy.get('#status').select('Ativo')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/listagem-cliente')

    cy.get('.notification')
      .should('be.visible')
      .then(() => {
        cy.get('.notification').should('be.visible')
      })
  })

  it('Deve testar se o formulário possui as validações', () => {
    cy.visit('http://localhost:4173/cadastro-cliente')
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('#nome').type('Nome do Cliente')
    cy.get('button[type="submit"]').click()
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('#cpf').type('123.456.789')
    cy.get('button[type="submit"]').click()
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('#telefone').type('(92) 99257-4730')
    cy.get('button[type="submit"]').click()
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('#email').type('cliente@example.com')
    cy.get('button[type="submit"]').click()
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('#status').select('Ativo')
    cy.get('button[type="submit"]').click()
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('#cpf').clear()
    cy.get('#cpf').type('123.456.789-09')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/listagem-cliente')

    cy.get('.notification')
      .should('be.visible')
      .then(() => {
        cy.get('.notification').should('be.visible')
      })
  })
})

// Associar Produtos a Cliente
describe('Associar Produtos a Cliente', () => {
  it('Deve associar produtos a um cliente selecionado', () => {
    cy.visit('http://localhost:4173/associacao-produto-cliente');
    cy.get('select').select('Cliente 1');

    cy.get('input[id^="checkboxProduto"]').check({ force: true });
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/listagem-cliente')

    cy.get('.notification')
      .should('be.visible')
      .then(() => {
        cy.get('.notification').should('be.visible')
      })
  });

  it('Deve testar validações do formulário e ao final realizar com sucesso, corrigindo os erros', () => {
    cy.visit('http://localhost:4173/associacao-produto-cliente');
    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').should('not.be.disabled')
    
    cy.get('select').select('Cliente 1');
    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').should('not.be.disabled')
    
    cy.get('input[id^="idProduto3"]').check({ force: true });
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/listagem-cliente')

    cy.get('.notification')
      .should('be.visible')
      .then(() => {
        cy.get('.notification').should('be.visible')
      })
  });
});

// Acessar página não encontrada e voltar pra home
describe('Acessar página que não existe', () => {
  it('Acessar página que não existe e voltar a tela inicial', () => {
    cy.visit('http://localhost:4173/');
    cy.visit('http://localhost:4173/ricardo');

    cy.get('#pageHome').click();

    cy.url().should('include', '/')
    cy.visit('http://localhost:4173/');
  });
});





