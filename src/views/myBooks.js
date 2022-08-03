import { getAllBooksById } from '../api/getter.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';


const myBookTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">
        ${books.length == 0 ? html `<p class="no-books">No books in database!</p>` 
        : books.map(b => html`
        <li class="otherBooks">
            <h3>${b.title}</h3>
            <p>Type: ${b.type}</p>
            <p class="img"><img src=${b.imageUrl}></p>
            <a class="button" href="/dashboard/${b._id}">Details</a>
        </li>
        `)}
    </ul>

    <!-- Display paragraph: If the user doesn't have his own books  -->
    
</section>
`

export async function myBooksView(ctx) {
    const user = getUserData();
    const books = await getAllBooksById(user.id);

    ctx.render(myBookTemplate(books))
}