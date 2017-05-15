<?php

namespace BRKsDeadPool\Gate\Support;

use Illuminate\Support\Collection;

trait HasRole
{
    use MakeRoleModel, MakePermissionModel;

    /*
     |------------------------------------------------------------------------------------------------------------------
     |  Action methods
     |------------------------------------------------------------------------------------------------------------------
     |  These methods were created to be used in development to perform actions
     |  and manage permissions or roles
     |
     */

    /**
     *  Assign the given role to the user
     *
     * @param $role string
     * @return mixed
     */
    public function assignRole($role)
    {
        return $this->roles()->save(
            $this->roleModel()
                ->where('name', $role)->firstOrFail()
        );
    }

    /*
     |------------------------------------------------------------------------------------------------------------------
     |  Checker methods
     |------------------------------------------------------------------------------------------------------------------
     |  These methods were created to be used in development to determine if
     |  the user has permissions or belongs to a given role to perform some action
     |
     */

    /**
     *  Determine if the user has the given role
     *
     * @param $role mixed
     * @return bool
     */
    public function hasRole($role)
    {
        if (is_string($role)) {
            return $this->roles->contains('name', $role);
        }

        return !!$role->intersect($this->roles)->count();
    }

    /**
     *  Determine if the user can perform a given action
     *
     * @param $permission mixed
     * @return bool
     */
    public function hasPermission($permission)
    {
        $permission = $this->permissionModel()
            ->where('name', $permission)
            ->firstOrFail();

        return $this->hasRole($permission->roles);
    }

    /*
     |------------------------------------------------------------------------------------------------------------------
     |  Getter methods
     |------------------------------------------------------------------------------------------------------------------
     |  These methods were created to be used in package only, there are not useful
     |  things to do with them
     |
     */

    /**
     *  Get roles for current user
     *
     * @return Collection
     */
    public function roles()
    {
        return $this->belongsToMany(config('gate.models.role'));
    }

}