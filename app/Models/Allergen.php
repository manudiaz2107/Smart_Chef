<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Allergen extends Model
{
    //
    public function recipes()
{
    return $this->belongsToMany(Recipe::class, 'recipe_allergens', 'allergen_id', 'recipe_id')
        ->withPivot('severity');
}
}
