<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class NewsCategory extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function scopeFilter(Builder $query, array $filters): void
    {
        $query->when($filters['search'] ?? false, fn ($query, $search) => [
            $query->where('name', 'LIKE', '%' . $search . '%')
        ]);
    }

    public function news(): HasMany
    {
        return $this->hasMany(News::class, 'news_category_id');
    }
}
