import { addLike, checkIfUserHasLiked, getAllLikes, getBookById } from '../api/getter.js';
import { getUserData } from '../api/util.js';
import { html } from '../lib.js';


const detailsTemplate = (book, isOwner, totalLikes, btn, giveALike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">

            ${isOwner ? html`
            <a class="button" href="/dashboard/${book._id}/edit">Edit</a>
            <a class="button" href="/dashboard/${book._id}/delete">Delete</a>` 
            : ''}
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->


            <!-- Bonus -->
            
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
    ${btn ? '' : html `<a class="button" @click=${giveALike} href="/dashboard/${book._id}">Like</a>`}
                       <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${totalLikes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const user = getUserData();

    const book = await getBookById(id);
    const bookOwner = book._ownerId

    const isOwner = user?.id == bookOwner;
    let isThisUserLiked = 0;
    if(user){
         isThisUserLiked = await checkIfUserHasLiked(id, user.id);

    }
    const btn = isOwner || isThisUserLiked || !user;
    // console.log(isThisUserLiked);
    
   async function giveALike() {
        await addLike(id)
    }
    const totalLikes = await getAllLikes(id);
    ctx.render(detailsTemplate(book, isOwner, totalLikes, btn,giveALike))


}