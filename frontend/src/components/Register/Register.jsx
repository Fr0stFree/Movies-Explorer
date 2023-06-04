import Interface from "../Interface/Interface";
import React from "react";

export default class Register extends Interface {
    get title() {
        return 'Добро пожаловать!'
    }

    get submitButtonText() {
        return 'Зарегистрироваться'
    }

    get extraButtonText() {
        return "Уже зарегистрированы?"
    }

    get extraButtonLinkText() {
        return "Войти"
    }

    get extraButtonRedirectTo() {
        return "/signin"
    }

    handleSubmit(event) {
        event.preventDefault()
        const name = this.state.fields.name.value
        const email = this.state.fields.email.value
        const password = this.state.fields.password.value
        this.props.onSubmit({ email, name, password });
    }
}
