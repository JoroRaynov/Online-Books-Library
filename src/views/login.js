import { login } from '../api/user.js';

import { html } from '../lib.js';

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="login">
    <form @submit=${onSubmit} id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>

`

export function loginView(ctx) {
    ctx.render(loginTemplate(onSubmit))


    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        if (email == '' || password == '') {
            return alert('All fields are required!')
        }

        await login(email, password);
        e.target.reset()

        ctx.page.redirect('/dashboard')
    }
}