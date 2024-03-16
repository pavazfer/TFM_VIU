<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use DB;
class AuthController extends Controller
{
    public function __construct() {
        DB::setDefaultConnection('mysql');
    }

    public function loginUser(Request $request): JsonResponse
    {
        $this->databaseConfig();
        $this->validate($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if(Auth::attempt($request->all())){

            $user = Auth::user();
            $bytes = random_bytes(10);
            $success =  $user->createToken($user->email.bin2hex($bytes))->plainTextToken;
            return response()->json(['token' => $success],200);
        }

        return response()->json(['message' => 'Email o contraseña incorrectas'],401);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function userDetails(): JsonResponse
    {
        $this->databaseConfig();
        if (Auth::check()) {

            $user = Auth::user();
            $user->load('panels');
            return response()->json(['data' => $user],200);
        }

        return response()->json(['message' => 'Email o contraseña incorrectas'],401);
    }

    /**
     * Display the specified resource.
     */
    public function logout(): JsonResponse
    {
        $this->databaseConfig();
        $user = Auth::user();

        $user->currentAccessToken()->delete();

        return response()->json(['message' => 'Cierre de sesión correcto'],200);
    }
}