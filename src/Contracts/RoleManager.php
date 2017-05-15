<?php

namespace BRKsDeadPool\Gate\Contracts;

interface RoleManager
{
    /**
     *  Create a new role
     * @param $name string
     * @param $description string
     * @return \BRKsDeadPool\Gate\Models\Role
     */
    public function create(string $name, string $description);

    /**
     *  Update a given role
     *
     * @param $name string
     * @param $newName string
     * @param $description string
     * @return \BRKsDeadPool\Gate\Models\Role
     */
    public function update(string $name, string $newName, string $description);

    /**
     *  Remove a given role
     *
     * @param $name string
     * @param $id int
     * @return bool
     */
    public function remove(string $name);

    /**
     *  Give a permission to a given role
     *
     * @param $role string
     * @param $permission string
     * @return \BRKsDeadPool\Gate\Models\Role
     */
    public function givePermission(string $role, string $permission);

    /**
     *  Revoke a given permission to a given role
     *
     * @param $role string
     * @param $permission string
     * @return \BRKsDeadPool\Gate\Models\Role
     */
    public function revokePermission(string $role, string $permission);
}