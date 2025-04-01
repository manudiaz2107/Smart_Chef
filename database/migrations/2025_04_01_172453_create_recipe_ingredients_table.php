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
        Schema::create('recipe_ingredients', function (Blueprint $table) {
            $table->integer('recipe_id')->index('idx_recipe');
            $table->integer('user_ingredient_id')->index('user_ingredient_id');
            $table->float('quantity');
            $table->integer('unit_id')->index('unit_id');

            $table->primary(['recipe_id', 'user_ingredient_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipe_ingredients');
    }
};
