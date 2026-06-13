<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ParentProductController extends Controller
{
    public function index()
    {
        try {
            $products = $this->baseQuery()
                ->orderByDesc('name')
                ->get();

            return $products
                ->groupBy('name')
                ->map(fn ($variants, $name) => [
                    'name' => $name,
                    'variants' => $variants->map(fn ($product) => [
                        'id' => $product->id,
                        'memory' => $product->memory,
                        'dgi_price' => $product->dgi_price,
                        'created_at' => $product->created_at,
                    ])->values(),
                ])
                ->values();
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function showByName(string $name)
    {
        try {
            return $this->baseQuery()
                ->where('name', $name)
                ->get();
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            return response()->json($this->baseQuery()->where('id', $id)->first());
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            DB::table('parent_products')->insert([
                'name' => $request->input('name'),
                'ram' => $request->input('memory'),
                'dgi_price' => $request->input('price'),
            ]);

            return response('berhasil');
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function updateName(Request $request)
    {
        try {
            $affected = DB::table('parent_products')
                ->where('name', $request->input('name'))
                ->update(['name' => $request->input('newName')]);

            return response($affected > 0 ? 'berhasil' : '');
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function update(Request $request)
    {
        try {
            $affected = DB::table('parent_products')
                ->where('id', $request->input('id'))
                ->update([
                    'name' => $request->input('name'),
                    'ram' => $request->input('memory'),
                    'dgi_price' => $request->input('price'),
                ]);

            return response($affected > 0 ? 'berhasil' : '');
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function destroy(int $id)
    {
        try {
            $affected = DB::table('parent_products')->where('id', $id)->delete();

            return response($affected > 0 ? 'berhasil' : 'terjadi kesalahan');
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    private function baseQuery()
    {
        return DB::table('parent_products')
            ->select([
                'id',
                'name',
                DB::raw('ram as memory'),
                'dgi_price',
                'created_at',
            ]);
    }
}
