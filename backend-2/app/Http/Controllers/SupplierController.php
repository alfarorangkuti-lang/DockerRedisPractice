<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Supplier;
use Illuminate\Support\Facades\DB;

class SupplierController extends Controller
{
    public function index()
    {
        try {
            $data = Supplier::all();
            return response()->json($data);
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            $data = Supplier::find($id)->get();
            return response()->json($data);
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string'
            ]);

            Supplier::create($validated);

            return response()->json('berhasil');
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function update(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required | string'
            ]);
            $data = Supplier::find($request->id);
            $affected = $data->update($validated);

            return response()->json($affected > 0 ? 'berhasil' : 'gagal');
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }

    public function destroy(int $id)
    {
        try {
            $affected = Supplier::find($id)->delete();

            return response()->json($affected > 0 ? 'berhasil' : 'gagal');
        } catch (\Throwable $error) {
            return response()->json($error->getMessage());
        }
    }
}
