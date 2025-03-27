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
        Schema::create('meal_plans', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('user_id');
            $table->date('meal_date');
            $table->string('meal_type', 10)->nullable();
            $table->integer('user_recipe_id')->index('user_recipe_id');
            $table->dateTime('created_at')->nullable()->useCurrent();

            $table->index(['user_id', 'meal_date'], 'idx_meal_plan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meal_plans');
    }
};
