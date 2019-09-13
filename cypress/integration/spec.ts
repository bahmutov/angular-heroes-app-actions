it('shows Heroes and finds Bombasto', () => {
  cy.visit('/')
    .get('.module.hero').should('have.length', 4)

  cy.get('#search-box').type('Bombasto')
  cy.get('ul.search-result li').should('have.length', 1)
    .first().should('contain', 'Bombasto')
})

it.only('drives Heroes component via App Actions', () => {
  const clearHeroes = () =>
    cy.window()
      .should('have.property', 'heroes')
      .should('have.property', 'heroes')
      .then(heroes => {
        // @ts-ignore
        heroes.length = 0
      })

  const tick = () =>
    cy.window()
      .should('have.property', 'appRef')
      // @ts-ignore
      .invoke('tick')

  const addHero = (name: string) =>
    cy.window()
      // @ts-ignore
      .its('heroes')
      // .pause()
      .invoke('add', name)

  cy.visit('/heroes')
  clearHeroes()
  tick()
  // confirm UI
  // cy.get('ul.heroes li').should('have.length', 0)

  // the world needs a new hero
  addHero('Gleb')
  tick()
})
