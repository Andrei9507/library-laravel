<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'first_name','last_name','email',
    ];

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
