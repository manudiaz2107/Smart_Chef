<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('custom_recipes', function (Blueprint $table) {
            $table->foreign(['user_id'], 'custom_recipes_ibfk_1')->references(['id'])->on('users')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('custom_recipes', function (Blueprint $table) {
            $table->dropForeign('custom_recipes_ibfk_1');
        });
    }
};
