<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GlobalIngredient extends Model
{
    protected $fillable = ['name'];

    // Relación con UserIngredient
    public function userIngredients()
    {
        return $this->hasMany(UserIngredient::class, 'ingredient_id');
    }

    // Relación con RecipeIngredient
    public function recipeIngredients()
    {
        return $this->hasMany(RecipeIngredient::class, 'ingredient_id');
    }
}