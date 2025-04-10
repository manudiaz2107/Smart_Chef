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
        Schema::table('shopping_lists', function (Blueprint $table) {
            $table->foreign(['user_id'], 'shopping_lists_ibfk_1')->references(['id'])->on('users')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['user_ingredient_id'], 'shopping_lists_ibfk_2')->references(['id'])->on('user_ingredients')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['unit_id'], 'shopping_lists_ibfk_3')->references(['id'])->on('units')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('shopping_lists', function (Blueprint $table) {
            $table->dropForeign('shopping_lists_ibfk_1');
            $table->dropForeign('shopping_lists_ibfk_2');
            $table->dropForeign('shopping_lists_ibfk_3');
        });
    }
};
