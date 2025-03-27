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
        Schema::create('recipe_allergens', function (Blueprint $table) {
            $table->integer('recipe_id');
            $table->integer('allergen_id')->index('allergen_id');
            $table->string('severity', 10)->nullable();

            $table->primary(['recipe_id', 'allergen_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipe_allergens');
    }
};
