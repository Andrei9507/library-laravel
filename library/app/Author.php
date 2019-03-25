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
    
    // public function updateAuthor($id)
    // {
    //     $author = $this->find($id);
    //     $fields = Request::input();
    //     $fields['updated_by'] = Auth::user()->employee->id;
    //     $fields['register_number'] = strtolower(trim(str_replace(' ', '', $fields['cui'])));
    //     $company->update($fields);


    //     foreach(Request::input('contact') as $contact)
    //     {
    //         //if there is a new contact completed, with name
    //         if(!empty($contact['id']))
    //             Contact::find($contact['id'])->update($contact);
    //         elseif( !empty($contact['name']))
    //             Contact::create($contact);
    //     }
        
        
    //     CompanyContractors::updateCompanyItems($id);
    //     CompanyActivities::updateCompanyItems($id);
    //     CompanyDivision::updateCompanyDivisions($id, request()->all());
        
        
    //     return $company;
    // }
}
