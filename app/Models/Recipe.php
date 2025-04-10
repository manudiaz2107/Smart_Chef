<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    // Nombre de la tabla asociada al modelo
    protected $table = 'global_recipes';

    // Atributos que pueden ser asignados
    protected $fillable = [
        'name',
        'description',
        'instructions',
        'image_url',
        'preparation_time',
        'difficulty',
    ];

    // Relaciones del modelo
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'recipe_categories', 'recipe_id', 'category_id');
    }

    public function allergens()
    {
        return $this->belongsToMany(Allergen::class, 'recipe_allergens', 'recipe_id', 'allergen_id')
            ->withPivot('severity');
    }

    public function ingredients()
    {
        return $this->belongsToMany(UserIngredient::class, 'recipe_ingredients', 'recipe_id', 'user_ingredient_id')
            ->withPivot('quantity', 'unit_id');
    }

    public function nutritionInfo()
    {
        return $this->hasOne(NutritionInfo::class, 'recipe_id');
    }
}