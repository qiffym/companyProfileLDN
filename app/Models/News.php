<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class News extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $with = ['author', 'news_category'];

    public function scopeFilter(Builder $query, array $filters): void
    {
        $query->when($filters['search'] ?? false, fn ($query, $search) => [
            $query->where('title', 'LIKE', '%' . $search . '%')->orWhere('content', 'LIKE', '%' . $search . '%')
        ]);
    }


    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author');
    }

    public function news_category(): BelongsTo
    {
        return $this->belongsTo(NewsCategory::class);
    }
}
