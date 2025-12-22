<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\ChatMessage;

class ChatController extends Controller
{
    public function sendMessage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'required|string|min:1'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $message = $request->input('message');
        $reply = 'You said: ' . $message;

        ChatMessage::create([
            'message' => $message,
            'reply' => $reply
        ]);

        return response()->json([
            'status' => 'success',
            'reply' => $reply
        ]);
    }
    public function getChats()
{
    $chats = \App\Models\ChatMessage::orderBy('created_at', 'desc')
        ->paginate(10);

    return response()->json([
        'status' => 'success',
        'data' => $chats
    ]);
}


}
