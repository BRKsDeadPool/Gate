<?php

namespace BRKsDeadPool\Gate\Manager;

use BRKsDeadPool\Gate\Contracts\PermissionManager as PermissionManagerContract;
use BRKsDeadPool\Gate\Models\Permission;

class PermissionManager implements PermissionManagerContract
{

    /**
     * Create a given permission
     *
     * @param $name string
     * @param $description string
     * @return \BRKsDeadPool\Gate\Models\Permission
     */
    public function create(string $name, string $description)
    {
        return Permission::create(compact(['name', 'description']));
    }

    /**
     *  Update a given permission
     *
     * @param $name string
     * @param $description string
     * @return \BRKsDeadPool\Gate\Models\Permission
     */
    public function update(string $name, string $description)
    {
        $permission = Permission::where('name', $name)
            ->update(compact(['name', 'description']));

        return $permission;
    }

    /**
     *  Remove a given permission
     *
     * @param $name string
     * @return bool
     */
    public function remove(string $name)
    {
        return Permission::where('name', $name)
            ->delete();
    }
}