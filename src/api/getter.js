import { post, get, put, del } from "./api.js";

export async function addBook(title, description, imageUrl, type) {
    return post('/data/books', { title, description, imageUrl, type })
}


export async function getAllBooks() {
    return get('/data/books?sortBy=_createdOn%20desc')
}

export async function getBookById(id) {
    return get('/data/books/' + id)
}

export async function updateBook(id, title, description, imageUrl, type) {
    return put('/data/books/' + id, { title, description, imageUrl, type })
}


export async function deleteBookById(id) {
    return del('/data/books/' + id)
}

export async function getAllBooksById(userId) {
    return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getAllLikes(bookId) {
    return get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

export async function checkIfUserHasLiked(bookId, userId) {

    return get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function addLike(bookId) {
    return post('/data/likes', { bookId })
}