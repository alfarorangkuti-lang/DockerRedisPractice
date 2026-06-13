<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ParentProduct;

class ParentProductController extends Controller
{
    public function index()
    {
        try {
            $data = ParentProduct::all();
            $result = $data
                ->groupBy('name')
                ->map(function ($items, $name) {
                    return [
                        'name' => $name,
                        'variants' => $items->map(function ($item) {
                            return [
                                'id' => $item['id'],
                                'memory' => $item['ram'],
                                'dgi_price' => $item['dgi_price']
                            ];
                        })->values()
                    ];
                })
                ->values();

            return response()->json($result);

        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function showByName(string $name)
    {
        try {
            $data = ParentProduct::where('name', $name)->get();
            return response()->json($data);
        } catch (\Throwable $error) {
            return response($error->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            $data = ParentProduct::findOrFail($id);
            return response()->json($data);
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'string|required',
                'memory' => 'string|required',
                'price' => 'numeric|required'
            ]);
            ParentProduct::create([
                'name' => $validated['name'],
                'ram' => $validated['memory'],
                'dgi_price' => $validated['price'],
            ]);

            return response()->json('berhasil');
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function updateName(Request $request)
    {
        try {
            $validated = $request->validate([
                'newName' => 'string|required'
            ]);
            $data = ParentProduct::where('name', $request->name);
            $affected = $data->update(['name' => $validated['newName']]);
            return response()->json('berhasil');
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function update(Request $request)
    {
        try {
            $data = ParentProduct::findOrFail($request->id);
            $validated = $request->validate([
                'name' => 'string|required',
                'memory' => 'string|required',
                'price' => 'numeric|required'
            ]);
            $affected = $data->update([
                'name' => $validated['name'],
                'ram' => $validated['memory'],
                'dgi_price' => $validated['price']
            ]);

            return response()->json($affected > 0 ? 'berhasil' : '');
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function destroy(int $id)
    {
        try {
            $data = ParentProduct::findOrFail($id);
            $affected = $data->delete();

            return response()->json($affected > 0 ? 'berhasil' : 'terjadi kesalahan');
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }
}
