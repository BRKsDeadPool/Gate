<?php

namespace BRKsDeadPool\Gate\Manager;

use BRKsDeadPool\Gate\Contracts\RoleManager as RoleManagerContract;
use BRKsDeadPool\Gate\Models\Role;

class RoleManager implements RoleManagerContract
{

    /**
     *  Create a new role
     * @param $name string
     * @param $description string
     * @return \BRKsDeadPool\Gate\Models\Role
     */
    public function create(string $name, string $description)
    {
        return Role::create(compact(['name', 'description']));
    }

    /**
     *  Update a given role
     *
     * @param $oldName string
     * @param $name string
     * @param $description string
     * @return \BRKsDeadPool\Gate\Models\Role
     */
    public function update(string $oldName, string $name, string $description)
    {
        $role = Role::where('name', $oldName)
            ->update(compact(['name', 'description']));

        return $role;
    }

    /**
     *  Remove a given role
     *
     * @param $name string
     * @return bool
     */
    public function remove(string $name)
    {
        return Role::where('name', $name)
            ->delete();
    }

    /**
     *  Give a permission to a given role
     *
     * @param $rname string
     * @param $pname string
     * @return \BRKsDeadPool\Gate\Models\Role
     */
    public function givePermission(string $rname, string $pname)
    {
        $role = Role::where('name', $rname)->firstOrFail();

        $role->givePermissionTo($pname);

        return $role->load('permissions');
    }

    /**
     *  Revoke a given permission to a given role
     *
     * @param $rname string
     * @param $pname string
     * @return \BRKsDeadPool\Gate\Models\Role
     */
    public function revokePermission(string $rname, string $pname)
    {
        $role = Role::where('name', $rname)->firstOrFail();

        $role->revokePermissionTo($pname);

        return $role->load('permissions');
    }
}