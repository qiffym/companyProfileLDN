<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class News extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $with = ['author', 'news_category'];

    /**
     * Get the author that owns the News
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author');
    }

    public function news_category(): BelongsTo
    {
        return $this->belongsTo(NewsCategory::class);
    }
}
