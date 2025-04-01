<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'users'; // Nombre de la tabla
    protected $primaryKey = 'id'; // Clave primaria
    public $timestamps = true; // Habilita timestamps (created_at, updated_at)

    // Campos que se pueden llenar masivamente
    protected $fillable = [
        'username',
        'email',
        'password_hash',
        'role_id',
    ];

    // Campos ocultos (no se muestran en JSON)
    protected $hidden = [
        'password_hash',
    ];

    // Mutador para el campo "password" (hashing automático)
    public function setPasswordHashAttribute($value)
    {
        $this->attributes['password_hash'] = bcrypt($value);
    }

    // Relación con roles
    public function role()
    {
        return $this->belongsTo(UserRole::class, 'role_id');
    }
}