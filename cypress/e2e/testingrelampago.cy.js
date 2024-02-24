describe('Pruebas de funcionalidades en testingrelampago.com', () => {
  // Caso de prueba 1: Verificar la navegación a la página de inicio
  it('Navega a la página de inicio', () => {
    cy.visit('https://testingrelampago.com/')
    cy.url().should('eq', 'https://testingrelampago.com/')
  })

  // Caso de prueba 2: Verificar la visualización de un elemento en la página
  it('Verifica la existencia de un elemento', () => {
    cy.visit('https://testingrelampago.com/')
    cy.get('h1').should('exist')
  })

  // Caso de prueba 3: Verificar la interacción con un formulario
  it('Envía un formulario de contacto', () => {
    cy.visit('https://testingrelampago.com/contact-us')
    cy.get('input[data-aid="CONTACT_FORM_NAME"]').type('Ejemplo')
    cy.get('input[data-aid="E-mail"]').type('ejemplo@example.com')
    cy.get('textarea[placeholder="Message*"]').type('Este es un mensaje de prueba')
    cy.get('button[type="submit"]').click()
    cy.contains('Gracias por tu consulta. Nos comunicaremos contigo en un plazo de 48 horas.').should('exist')
  })

  // Caso de prueba 4: Verificar la navegación a través de enlaces
  it('Navega a través de enlaces', () => {
    cy.visit('https://testingrelampago.com/')
    cy.contains('Acerca de').click()
    cy.url().should('include', '/acerca')
  })

  // Caso de prueba 5: Verificar la funcionalidad de búsqueda
  it('Realiza una búsqueda', () => {
    cy.visit('https://testingrelampago.com/')
    cy.get('input[name="busqueda"]').type('prueba')
    cy.get('button[type="submit"]').click()
    cy.get('.resultado-busqueda').should('exist')
  })

  // Caso de prueba 6: Verificar la ordenación de elementos
  it('Ordena elementos correctamente', () => {
    cy.visit('https://testingrelampago.com/productos')
    cy.get('.boton-ordenar').click()
    cy.get('.producto').first().should('contain', 'Producto A')
  })

  // Caso de prueba 7: Verificar la funcionalidad de carrito de compras
  it('Agrega un producto al carrito', () => {
    cy.visit('https://testingrelampago.com/producto/1')
    cy.get('.boton-agregar-carrito').click()
    cy.contains('Producto agregado al carrito').should('exist')
  })

  // Caso de prueba 8: Verificar la visualización de mensajes de error
  it('Visualiza mensajes de error en un formulario', () => {
    cy.visit('https://testingrelampago.com/contacto')
    cy.get('button[type="submit"]').click()
    cy.contains('Este campo es obligatorio').should('exist')
  })

  // Caso de prueba 9: Verificar la funcionalidad de inicio de sesión
  it('Inicia sesión con credenciales válidas', () => {
    cy.visit('https://testingrelampago.com/login')
    cy.get('input[name="usuario"]').type('usuarioEjemplo')
    cy.get('input[name="contraseña"]').type('contraseñaEjemplo')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })

  // Caso de prueba 10: Verificar la funcionalidad de logout
  it('Cierra sesión correctamente', () => {
    cy.visit('https://testingrelampago.com/perfil')
    cy.get('.boton-logout').click()
    cy.url().should('eq', 'https://testingrelampago.com/')
  })
})
