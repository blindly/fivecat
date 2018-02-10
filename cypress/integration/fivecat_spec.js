describe('Fivecat Testing', function () {
      it('Visits the local Fivecat', function () {
        cy.visit('http://localhost:9000')

      })


      context('Trending', function () {
        beforeEach(function () {
          // Visiting our app before each test removes any state build up from
          // previous tests. Visiting acts as if we closed a tab and opened a fresh one
          cy.visit('http://localhost:9000/read/trending')
        })

        it('Validate trending', function () {
          cy.get('#affirmation blockquote').should('have.class', 'align-center')
          cy.get('#news article p a').should('have.class', 'title')
        })

      })

      context('Startups', function () {
        beforeEach(function () {
          // Visiting our app before each test removes any state build up from
          // previous tests. Visiting acts as if we closed a tab and opened a fresh one
          cy.visit('http://localhost:9000/read/startups')
        })

        it('Validate startups', function () {
          cy.get('#affirmation blockquote').should('have.class', 'align-center')
          cy.get('#news article p a').should('have.class', 'title')
        })

      })

      context('Webdev', function () {
        beforeEach(function () {
          // Visiting our app before each test removes any state build up from
          // previous tests. Visiting acts as if we closed a tab and opened a fresh one
          cy.visit('http://localhost:9000/read/webdev')
        })

        it('Validate webdev', function () {
          cy.get('#affirmation blockquote').should('have.class', 'align-center')
          cy.get('#news article p a').should('have.class', 'title')
        })

      })

      context('Altcoin', function () {
        beforeEach(function () {
          // Visiting our app before each test removes any state build up from
          // previous tests. Visiting acts as if we closed a tab and opened a fresh one
          cy.visit('http://localhost:9000/read/crypto')
        })

        it('Validate Altcoin', function () {
          cy.get('#affirmation blockquote').should('have.class', 'align-center')
          cy.get('#news article p a').should('have.class', 'title')
        })

      })

      context('Technology', function () {
        beforeEach(function () {
          // Visiting our app before each test removes any state build up from
          // previous tests. Visiting acts as if we closed a tab and opened a fresh one
          cy.visit('http://localhost:9000/read/tech')
        })

        it('Validate Technology', function () {
          cy.get('#affirmation blockquote').should('have.class', 'align-center')
          cy.get('#news article p a').should('have.class', 'title')
        })

      })

      context('Programming', function () {
        beforeEach(function () {
          // Visiting our app before each test removes any state build up from
          // previous tests. Visiting acts as if we closed a tab and opened a fresh one
          cy.visit('http://localhost:9000/read/programming')
        })

        it('Validate Programming', function () {
          cy.get('#affirmation blockquote').should('have.class', 'align-center')
          cy.get('#news article p a').should('have.class', 'title')
        })

      })

      context('Enterprise', function () {
        beforeEach(function () {
          // Visiting our app before each test removes any state build up from
          // previous tests. Visiting acts as if we closed a tab and opened a fresh one
          cy.visit('http://localhost:9000/read/enterprise')
        })

        it('Validate Enterprise', function () {
          cy.get('#affirmation blockquote').should('have.class', 'align-center')
          cy.get('#news article p a').should('have.class', 'title')
        })

      })

      context('Top Weekly', function () {
        beforeEach(function () {
          // Visiting our app before each test removes any state build up from
          // previous tests. Visiting acts as if we closed a tab and opened a fresh one
          cy.visit('http://localhost:9000/read/week')
        })

        it('Validate Weekly', function () {
          cy.get('#affirmation blockquote').should('have.class', 'align-center')
          cy.get('#news article p a').should('have.class', 'title')
        })

      })

      context('Know This', function () {
        beforeEach(function () {
          // Visiting our app before each test removes any state build up from
          // previous tests. Visiting acts as if we closed a tab and opened a fresh one
          cy.visit('http://localhost:9000/read/know')
        })

        it('Validate Know This', function () {
          cy.get('#affirmation blockquote').should('have.class', 'align-center')
          //cy.get('#news article').should('have.element', 'p')

          cy.get('#news').children()
        })

      })

      context('Learn That', function () {
        beforeEach(function () {
          // Visiting our app before each test removes any state build up from
          // previous tests. Visiting acts as if we closed a tab and opened a fresh one
          cy.visit('http://localhost:9000/read/learn')
        })

        it('Validate Learn That', function () {
          cy.get('#affirmation blockquote').should('have.class', 'align-center')
          //cy.get('#news article').should('have.element', 'p')

          cy.get('#news').children()
        })

        context('Jokes', function () {
          beforeEach(function () {
            // Visiting our app before each test removes any state build up from
            // previous tests. Visiting acts as if we closed a tab and opened a fresh one
            cy.visit('http://localhost:9000/read/jokes')
          })

          it('Validate jokes', function () {
            cy.get('#affirmation blockquote').should('have.class', 'align-center')
            //cy.get('#news article').should('have.element', 'p')

            cy.get('#news').children()
          })

        })

      })

    })