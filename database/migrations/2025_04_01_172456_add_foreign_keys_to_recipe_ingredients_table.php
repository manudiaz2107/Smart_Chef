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
        Schema::table('recipe_ingredients', function (Blueprint $table) {
            $table->foreign(['recipe_id'], 'recipe_ingredients_ibfk_1')->references(['id'])->on('user_recipes')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['user_ingredient_id'], 'recipe_ingredients_ibfk_2')->references(['id'])->on('user_ingredients')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['unit_id'], 'recipe_ingredients_ibfk_3')->references(['id'])->on('units')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('recipe_ingredients', function (Blueprint $table) {
            $table->dropForeign('recipe_ingredients_ibfk_1');
            $table->dropForeign('recipe_ingredients_ibfk_2');
            $table->dropForeign('recipe_ingredients_ibfk_3');
        });
    }
};
