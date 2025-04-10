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
        Schema::create('user_ingredients', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('user_id')->index('idx_user');
            $table->enum('ingredient_type', ['global', 'custom']);
            $table->integer('ingredient_id');
            $table->float('quantity');
            $table->integer('unit_id')->index('unit_id');
            $table->date('expiration_date')->nullable();
            $table->dateTime('created_at')->nullable()->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_ingredients');
    }
};
