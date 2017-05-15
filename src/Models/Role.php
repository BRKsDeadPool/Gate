<?php

namespace BRKsDeadPool\Gate\Models;

use BRKsDeadPool\Gate\Support\MakePermissionModel;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use MakePermissionModel;

    /**
     *  Attributes that are mass assignable
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description'
    ];

    /**
     *  Attributes that are hidden
     *
     * @var array
     */
    protected $hidden = [

    ];

    /**
     * Get the user for the roles
     */
    public function users()
    {
        return $this->belongsToMany(config('auth.providers.users.model'));
    }

    /**
     *  Get the permission for roles
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function permissions()
    {
        return $this->belongsToMany(config('gate.models.permission'));
    }

    /**
     *  Grant the permission to a role
     *
     * @param $permission \BRKsDeadPool\Gate\Models\Permission
     * @return mixed
     */
    public function givePermissionTo($permission)
    {
        try {
            $this->permissions()
                ->attach(
                    $this->permissionModel()
                        ->where('name', $permission)
                        ->firstOrFail()
                );
            return true;
        } catch (\Exception $exception) {
            return false;
        }
    }

    public function revokePermissionTo($permission)
    {
        try {
            $this->permissions()
                ->detach(
                    $this->permissionModel()
                        ->where('name', $permission)
                        ->firstOrFail()
                );
            return true;
        } catch (\Exception $exception) {
            return false;
        }
    }
}