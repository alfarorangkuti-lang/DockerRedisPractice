<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse; 

class AuthController extends Controller
{
    public function user(Request $request): JsonResponse
    {
        return response()->json([
            'id' => $request->user()->id,
            'username' => $request->user()->username,
        ]);
    }

    public function register(Request $request): JsonResponse
    {
        try {
            $data = $request->validate([
                'username' => ['required', 'string'],
                'password' => ['required', 'string'],
            ]);

            DB::table('users')->insert([
                'username' => $data['username'],
                'password' => Hash::make($data['password']),
                'role' => 'admin',
            ]);

            return response()->json(['message' => 'berhasil!']);
        } catch (\Throwable $error) {
            return response()->json(['message' => $error->getMessage()]);
        }
    }

    public function login(Request $request): JsonResponse
    {
        try {
            $credentials = $request->only('username', 'password');

            if (!$token = auth()->attempt($credentials)) {
                return response()->json([
                    'message' => 'invalid!'
                ],401);
            }

            return response()->json(['message' => [
                'token' => $token,
                'type' => 'Bearer'
            ]]);
        } catch (\Throwable $error) {
            return response()->json(['message' => $error->getMessage()]);
        }
    }
}
