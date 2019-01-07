routes = {
  '/': homePage,
  '/signup': signupPage,
  '/login': loginPage,
};

let loginPage = `
<form id='login-form' method="post">
  <h1> Welcome Back! </h1>
  <div>
    <input type="text" id="username" name="username" placeholder="username">
  </div>
  <div>
    <input type="text" name="email" id="email" placeholder="email">
  </div>
  <div>
    <input type="text" id="password" name="password" placeholder="password">
  </div>
  <button type="submit">Submit</button>
</form>
`;

let contentDiv = document.getElementById('content');
contentDiv.innerHTML = routes[window.location.pathname];
