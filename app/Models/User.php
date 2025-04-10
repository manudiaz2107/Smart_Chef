<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'username', 'email', 'password', 'role_id',
    ];

    protected $hidden = [
        'password',
    ];

    // Relación con UserRole
    public function role()
    {
        return $this->belongsTo(UserRole::class, 'role_id');
    }

    // Relación con UserIngredient
    public function ingredients()
    {
        return $this->hasMany(UserIngredient::class, 'user_id');
    }

    // Relación con UserRecipe
    public function recipes()
    {
        return $this->hasMany(UserRecipe::class, 'user_id');
    }

    // Relación con MealPlan
    public function mealPlans()
    {
        return $this->hasMany(MealPlan::class, 'user_id');
    }

    // Relación con ShoppingList
    public function shoppingLists()
    {
        return $this->hasMany(ShoppingList::class, 'user_id');
    }
}