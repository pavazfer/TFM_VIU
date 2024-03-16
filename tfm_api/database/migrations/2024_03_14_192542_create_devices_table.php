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
        Schema::connection('mysql')->create('devices', function (Blueprint $table) {
            $table->id();
            $table->string('name',50);
            $table->string("data_id",50)->unique();
            $table->string("dev_id",50)->unique();
            $table->unsignedBigInteger('zone_id')->nullable();
            $table->foreign("zone_id")->references("id")->on("zones")->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devices');
    }
};
