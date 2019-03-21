<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('book_id');
            $table->unsignedBigInteger('customer_id');
            $table->date('started_at');
            $table->date('end_at');
            $table->timestamps();

            $table->foreign('book_id')->references('id')->on('books');
            $table->foreign('customer_id')->references('id')->on('customers');

            $table->index( 'book_id','book_id');
            $table->index( 'customer_id','customer_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rents');
    }
}
