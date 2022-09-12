/* eslint-disable no-undef */
Cypress.Commands.add('login', (user) => {
  cy.request('POST', 'http://localhost:3001/api/login', user).then(
    (response) => {
      window.localStorage.setItem('loggedUser', JSON.stringify(response.body));
      cy.visit('http://localhost:3000/blogs');
    }
  );
});

Cypress.Commands.add('createBlog', (blog) => {
  cy.request({
    url: 'http://localhost:3001/api/blogs',
    method: 'POST',
    body: blog,
    headers: {
      Authorization: `bearer ${
        JSON.parse(localStorage.getItem('loggedUser')).token
      }`,
    },
  });
});
