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
        Schema::table('nutrition_info', function (Blueprint $table) {
            $table->foreign(['recipe_id'], 'nutrition_info_ibfk_1')->references(['id'])->on('user_recipes')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('nutrition_info', function (Blueprint $table) {
            $table->dropForeign('nutrition_info_ibfk_1');
        });
    }
};
