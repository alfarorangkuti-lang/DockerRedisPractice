<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function index()
    {
        try {
            return DB::table('categories')->get();
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            return response()->json(DB::table('categories')->where('id', $id)->first());
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            DB::table('categories')->insert([
                'category' => $request->input('category'),
                'description' => $request->input('description'),
            ]);

            return response('berhasil');
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function update(Request $request)
    {
        try {
            $affected = DB::table('categories')
                ->where('id', $request->input('id'))
                ->update([
                    'category' => $request->input('category'),
                    'description' => $request->input('description'),
                ]);

            return response($affected > 0 ? 'berhasil' : 'gagal');
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function destroy(int $id)
    {
        try {
            $affected = DB::table('categories')->where('id', $id)->delete();

            return response($affected > 0 ? 'berhasil' : 'gagal');
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }
}
