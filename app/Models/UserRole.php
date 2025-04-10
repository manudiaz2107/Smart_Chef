<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    protected $fillable = ['name'];

    // Relación inversa con User
    public function users()
    {
        return $this->hasMany(User::class, 'role_id');
    }
}