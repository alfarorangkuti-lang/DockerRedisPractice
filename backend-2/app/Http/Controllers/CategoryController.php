<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        try {
            $data = Category::all();
            return response()->json($data);
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            $data = Category::findOrFail($id);
            return response()->json($data);
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'category' => 'string|required',
                'description' => 'string|nullable'
            ]);
            Category::create($validated);

            return response()->json('berhasil');
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function update(Request $request)
    {
        try {
            $item = Category::findOrFail($request->id);
            $validated = $request->validate([
                'category' => 'string|required|unique:categories,category',
                'description' => 'string|nullable'
            ]);
            
            $affected = $item->update($validated);

            return response()->json($affected > 0 ? 'berhasil' : 'gagal');
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function destroy(int $id)
    {
        try {
            $data = Category::findOrFail($id);
            $affected = $data->delete();

            return response()->json($affected > 0 ? 'berhasil' : 'gagal');
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }
}
