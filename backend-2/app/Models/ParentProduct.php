<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'ram', 'dgi_price'])]
class ParentProduct extends Model
{
    protected $table = 'parent_products';

    protected $appends = ['memory'];

    protected $hidden = ['ram'];

    protected $casts = [
        'created_at' => 'datetime',
        'dgi_price' => 'integer',
    ];

    public const UPDATED_AT = null;

    protected function memory(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->ram,
            set: fn ($value) => ['ram' => $value],
        );
    }
}
