<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'author_id','name','type' 
    ];

    public function author()
    {
        return $this->belongsTo('App\Author', 'author_id');
    }

    public function getAll()
    {
        return $this->get();
    }
    
    public function getItem($id)
    {
        return $this->find($id);
    }

     /**
     * save item
     * @param array $params
     * @return collection
     */
    public function saveItem($params)
    {
        $new = $this->create($params);
        
        return $new;

    }

}
