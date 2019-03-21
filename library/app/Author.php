<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = [
        'name', 
    ];


    public function getAll()
    {
        return $this->get();
    }
    
    public function getItem($id)
    {
        return $this->find($id);
    }
}
