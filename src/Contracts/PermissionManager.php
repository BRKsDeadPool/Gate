<?php

namespace BRKsDeadPool\Gate\Contracts;

interface PermissionManager
{
    /**
     * Create a given permission
     *
     * @param $name string
     * @param $description string
     * @return \BRKsDeadPool\Gate\Models\Permission
     */
    public function create(string $name, string $description);

    /**
     *  Update a given permission
     *
     * @param $name string
     * @param $description string
     * @return \BRKsDeadPool\Gate\Models\Permission
     */
    public function update(string $name, string $description);

    /**
     *  Remove a given permission
     *
     * @param $name string
     * @return bool
     */
    public function remove(string $name);
}