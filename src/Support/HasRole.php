<?php

namespace BRKsDeadPool\Gate\Support;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

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
        $role = $this->roleCache()
            ->where('name', $role)->first();

        if (!$role) {
            throw new \Exception('No Role Found');
        }

        $model = $this->roles()->save($role);

        Cache::forget('role_user');

        return $model;
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
            return $this->userRoles()->contains('name', $role);
        }

        return !!$role->intersect($this->userRoles())->count();
    }

    /**
     *  Determine if the user can perform a given action
     *
     * @param $permission mixed
     * @return bool
     * @throws \Exception
     */
    public function hasPermission($permission)
    {
        $permission = $this->permissionCache()
            ->where('name', $permission)
            ->first();

        if (!$permission) {
            throw new \Exception('No permission found');
        }

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

    /**
     * @return mixed
     */
    public function userRoles()
    {
        if (!Cache::has('role_user')) {
            Cache::put('role_user', DB::table('role_user')->get(), 60);
        }

        $roles = Cache::get('role_user')->where('user_id', $this->id)->pluck('role_id')->all();

        return $this->roleCache()->whereIn('id', $roles);
    }
}