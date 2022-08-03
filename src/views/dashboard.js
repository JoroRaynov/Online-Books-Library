import { getAllBooks } from '../api/getter.js';
import { html } from '../lib.js';

const dashboardTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list">
        ${books.length == 0 ? html`<p class="no-books">No books in database!</p>` : books.map(b => html`
        <li class="otherBooks">
            <h3>${b.title}</h3>
            <p>Type: ${b.type}</p>
            <p class="img"><img src=${b.imageUrl}></p>
            <a class="button" href="/dashboard/${b._id}">Details</a>
        </li>
        `)}

    </ul>
    <!-- Display paragraph: If there are no books in the database -->

</section>
`

export async function dashboardView(ctx) {

    const books = await getAllBooks();

    ctx.render(dashboardTemplate(books));


}