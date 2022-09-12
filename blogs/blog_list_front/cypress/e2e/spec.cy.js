/* eslint-disable no-undef */
describe('Blogs app', function () {
  beforeEach(function () {
    const newUser = {
      username: 'testUser',
      name: 'testUser',
      password: 'password',
    };
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
    cy.request('POST', 'http://localhost:3001/api/users', newUser);
    cy.visit('http://localhost:3000/');
  });

  it('Front page loads', function () {
    cy.contains('Welcome to the Blog saver');
  });

  it('Login form is shown on front page', function () {
    cy.get('#login-form');
  });

  describe('Login', function () {
    it('succeeds with the correct credentials', function () {
      cy.get('#username-input').type('testUser');
      cy.get('#password-input').type('password');
      cy.get('#login-button').click();
      cy.contains('testUser');
    });

    it('fails with wrong credentials', function () {
      cy.get('#username-input').type('wrongUser');
      cy.get('#password-input').type('wrongPassword');
      cy.get('#login-button').click();
      cy.contains('Invalid username or password');
    });
  });

  describe('When logged in', function () {
    beforeEach(function () {
      const user = { username: 'testUser', password: 'password' };
      cy.login(user);
    });

    it('the user can create a new blog', function () {
      cy.get('#add-blog-button').click();
      cy.get('#title-input').type('new blog title');
      cy.get('#author-input').type('new blog author');
      cy.get('#url-input').type('www.test.com.ar');
      cy.get('#save-blog-button').click();
      cy.contains('new blog title');
    });

    describe.only('and two blogs exists', function () {
      beforeEach(function () {
        const firstBlog = {
          title: 'testtitle1',
          author: 'testauthor1',
          url: 'testurl1.com.ar',
        };
        const secondBlog = {
          title: 'testtitle2',
          author: 'testauthor2',
          url: 'testurl2.com.ar',
        };
        cy.createBlog(firstBlog);
        cy.createBlog(secondBlog);
        cy.visit('http://localhost:3000/blogs');
      });

      it('the user can like a blog', function () {
        cy.get('.like-button').first().click();
      });

      it('can delete a blog', function () {
        cy.get('.delete-button').first().click();
      });

      it('blogs are ordered by like number', function () {
        cy.get('.blog').first().contains('testtitle1');
        cy.get('.like-button').last().click();
        cy.get('.blog').first().contains('testtitle2');
      });
    });
  });
});
