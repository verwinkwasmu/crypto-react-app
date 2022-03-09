/// <reference types="cypress" />

describe('Cryptocurrency page', () => {
    before(() => {
        // IMPT must make sure that intercepts come before the 'visit' if not the first request will not be captured thus failing it
        cy.intercept("GET", "https://coinranking1.p.rapidapi.com/coins?limit=100", {
            fixture: "cryptos.json"
        }).as('getCryptos')
        cy.visit('/cryptocurrencies')

        cy.wait('@getCryptos').then((interception) => {
            assert.isNotNull(interception.response.body, '@getCryptos API call has data')
        })
    })

    it('Test Display page title', () => {
        cy.get('.fs-1').contains("Top 100 Cryptocurrencies in the World").should("be.visible")
    })

    it('Test if correct crypto comes up when input is changed', () => {
        cy.get("input[placeholder='Search for Cryptocurrencies']").type('Ethereum')
        cy.get('.card').should('contain', 'Ethereum').and('contain', 'Price (USD)').and('contain', 'Market Cap').and('contain', 'Daily Change').should('be.visible')

        cy.get("input[placeholder='Search for Cryptocurrencies']").clear().type('Binance')
        cy.get('.card').should('contain', 'Binance').and('contain', 'Price (USD)').and('contain', 'Market Cap').and('contain', 'Daily Change').should('be.visible')
    })

    it('Test if clicking coin card leads to a the coinDetails page', () => {
        cy.get("input[placeholder='Search for Cryptocurrencies']").clear().type('Bitcoin')
        cy.get('a').contains('Bitcoin').click()
        cy.location('pathname').should('eq', '/crypto/Qwsogvtv82FCd')
        cy.wait(3000)
        cy.go('back')
    })

    it('Test Display Footer', () => {
        cy.get('.footer').should('contain', 'CryptoSphere').and('contain', 'Home').and('contain', 'Cryptocurrencies').and('contain', 'News').should('be.visible')
    })

})

describe('CryptoDetails Page', () => {

    before(() => {
        // IMPT must make sure that intercepts come before the 'visit' if not the first request will not be captured thus failing it
        cy.intercept("GET", "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd", {
            fixture: "cryptoDetails_BTC.json"
        }).as('getCryptoDetails')

        cy.intercept("GET", "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?timeperiod=7d", {
            fixture: "coinHistory_BTC.json"
        }).as('getCryptoPriceHistory')

        cy.visit("/crypto/Qwsogvtv82FCd")

        cy.wait('@getCryptoDetails').then((interception) => {
            assert.isNotNull(interception.response.body, '@getCryptoDetails API call has data')
        })

        cy.wait('@getCryptoPriceHistory').then((interception) => {
            assert.isNotNull(interception.response.body, '@getCryptoPriceHistory API call has data')
        })
    })


    it('Test Crypto Details content', () => {
        cy.get('h3').contains('Bitcoin (BTC)').should("be.visible");
        cy.get('canvas').should('be.visible');
        cy.get('h3').contains('Bitcoin Value Statistics').should('be.visible');
        cy.get('h3').contains('Bitcoin Links').should("be.visible");
    })
})
