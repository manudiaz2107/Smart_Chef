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
        Schema::table('recipe_categories', function (Blueprint $table) {
            $table->foreign(['recipe_id'], 'recipe_categories_ibfk_1')->references(['id'])->on('user_recipes')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['category_id'], 'recipe_categories_ibfk_2')->references(['id'])->on('categories')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('recipe_categories', function (Blueprint $table) {
            $table->dropForeign('recipe_categories_ibfk_1');
            $table->dropForeign('recipe_categories_ibfk_2');
        });
    }
};
