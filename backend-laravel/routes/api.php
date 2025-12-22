<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ChatController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::post('/chat', [ChatController::class, 'sendMessage']);
Route::get('/chats', [ChatController::class, 'getChats']);

// (Optional – default route, you can keep it)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
