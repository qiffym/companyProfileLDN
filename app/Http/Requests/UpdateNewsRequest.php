<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNewsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|unique:news,title,' . $this->news->id,
            'slug' => 'required|unique:news,slug,' . $this->news->id,
            'news_category_id' => 'required|exists:news_categories,id',
            'excerpt' => 'nullable',
            'content' => 'required',
            'author' => 'required|exists:users,id',
            'hidden' => 'nullable|boolean',
            'publish_at' => 'nullable|date'
        ];
    }
}
