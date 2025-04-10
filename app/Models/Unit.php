<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $fillable = ['name', 'abbreviation'];

    public function userIngredients()
    {
        return $this->hasMany(UserIngredient::class, 'unit_id');
    }

    public function recipeIngredients()
    {
        return $this->hasMany(RecipeIngredient::class, 'unit_id');
    }
}