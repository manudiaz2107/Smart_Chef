@extends('layouts.app')

@section('title', 'Login / Register')

@section('content')
<div class="card-switch">
    <label class="switch">
        <input type="checkbox" class="toggle">
        <span class="slider"></span>
        <span class="card-side"></span>
        <div class="flip-card__inner">
            <!-- Login Form -->
            <div class="flip-card__front">
                <div class="title">Iniciar Sesión</div>
                <form class="flip-card__form" method="POST" action="{{ route('login.submit') }}">
                    @csrf
                    <input class="flip-card__input" name="email" placeholder="Email" type="email" required>
                    <input class="flip-card__input" name="password" placeholder="Contraseña" type="password" required>
                    <button class="flip-card__btn">¡Vamos!</button>
                </form>
            </div>

            <!-- Register Form -->
            <div class="flip-card__back">
                <div class="title">Registrarse</div>
                <form class="flip-card__form" method="POST" action="{{ route('register.submit') }}">
                    @csrf
                    <input class="flip-card__input" name="username" placeholder="Nombre de Usuario" type="text" required>
                    <input class="flip-card__input" name="email" placeholder="Email" type="email" required>
                    <input class="flip-card__input" name="password" placeholder="Contraseña" type="password" required>
                    <input class="flip-card__input" name="password_confirmation" placeholder="Confirmar Contraseña" type="password" required>
                    <button class="flip-card__btn">Confirmar</button>
                </form>
            </div>
        </div>
    </label>
</div>
@endsection