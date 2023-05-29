<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class NewsCategory extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function news(): HasMany
    {
        return $this->hasMany(News::class, 'news_category_id');
    }
}
