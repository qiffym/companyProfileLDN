<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FAQ extends Model
{
    use HasFactory;

    protected $table = 'faqs';
    protected $guarded = ['id'];

    public function scopeFilter(Builder $query, array $filters): void
    {
        $query->when($filters['search'] ?? false, fn ($query, $search) => [
            $query->where('question', 'LIKE', '%' . $search . '%')->orWhere('answer', 'LIKE', '%' . $search . '%')
        ]);
    }
}
