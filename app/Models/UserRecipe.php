<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserRecipe extends Model
{
    protected $fillable = [
        'user_id', 'recipe_type', 'recipe_id',
    ];

    // Relación con User
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Relación con RecipeIngredient
    public function ingredients()
    {
        return $this->hasMany(RecipeIngredient::class, 'recipe_id');
    }
}