<?php

namespace BRKsDeadPool\Gate\Models;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description'
    ];

    /**
     * Get the roles for the permissions
     */
    public function roles()
    {
        return $this->belongsToMany(config('gate.models.role'));
    }
}
