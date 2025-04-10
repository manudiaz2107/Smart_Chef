<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserIngredient extends Model
{
    protected $fillable = [
        'user_id', 'ingredient_type', 'ingredient_id', 'quantity', 'unit_id', 'expiration_date',
    ];

    // Relación con User
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Relación con Unit
    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }

    // Relación con GlobalIngredient
    public function globalIngredient()
    {
        return $this->belongsTo(GlobalIngredient::class, 'ingredient_id');
    }
    
}