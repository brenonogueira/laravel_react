<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
Route::post('/posts/store', [PostController::class, 'store'])->name('posts.store');
Route::get('/posts/edit/{id}', [PostController::class, 'edit'])->name('posts.edit');
Route::put('/posts/update/{id}', [PostController::class, 'update'])->name('posts.update');
Route::delete('/posts/destroy/{id}', [PostController::class, 'destroy'])->name('posts.destroy');
