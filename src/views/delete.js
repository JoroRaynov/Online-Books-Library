import { deleteBookById } from "../api/getter.js";

export async function deleteBook(ctx) {
    const choice = confirm("Are you sure you want to delete this book?");

    if (choice) {
        await deleteBookById(ctx.params.id);
        ctx.page.redirect('/dashboard')

    }
} 