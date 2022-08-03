import { logout } from './api/user.js';
import { render, page } from './lib.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { deleteBook } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { myBooksView } from './views/myBooks.js';
import { registerView } from './views/register.js';
import { updateNav } from './views/updateNav.js';

const main = document.getElementById('site-content');

page(decorateContext);
page(updateNav)
page('/login', loginView);
page('/register', registerView);
page('/logout', logout);
page('/addbook', createView);
page('/dashboard', dashboardView);
page('/dashboard/:id', detailsView);
page('/dashboard/:id/edit', editView);
page('/dashboard/:id/delete', deleteBook);
page('/mybooks', myBooksView);


page.start();



function decorateContext(ctx, next) {
    ctx.render = renderMain;
    next()
}


function renderMain(template) {
    render(template, main)
}

