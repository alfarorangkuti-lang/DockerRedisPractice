<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ParentProductController;
use App\Http\Controllers\SupplierController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::get('/', [AuthController::class, 'user'])->middleware('auth:api');
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::get('/unauthed', function() {
    return response()->json(['message' => 'unauthenticated'],401);
})->name('login');

Route::middleware('auth:api')->group(function () {
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/categories/{id}', [CategoryController::class, 'show']);
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::put('/categories', [CategoryController::class, 'update']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

    Route::get('/parentProducts', [ParentProductController::class, 'index']);
    Route::get('/parentProducts/byId/{id}', [ParentProductController::class, 'show']);
    Route::get('/parentProducts/{name}', [ParentProductController::class, 'showByName']);
    Route::post('/parentProducts', [ParentProductController::class, 'store']);
    Route::put('/parentProducts/editName', [ParentProductController::class, 'updateName']);
    Route::put('/parentProducts/editParentProducts', [ParentProductController::class, 'update']);

    Route::get('/suppliers', [SupplierController::class, 'index']);
    Route::get('/suppliers/{id}', [SupplierController::class, 'show']);
    Route::post('/suppliers', [SupplierController::class, 'store']);
    Route::put('/suppliers', [SupplierController::class, 'update']);
    Route::delete('/suppliers/{id}', [SupplierController::class, 'destroy']);
    Route::delete('/parentProducts/{id}', [ParentProductController::class, 'destroy']);

});


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
