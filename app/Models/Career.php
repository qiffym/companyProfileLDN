<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function scopeFilter(Builder $query, array $filters): void
    {
        $query->when($filters['search'] ?? false, fn ($query, $search) => [
            $query->where('position_name', 'LIKE', '%' . $search . '%')->orWhere('department', 'LIKE', '%' . $search . '%')
        ]);
    }
}
