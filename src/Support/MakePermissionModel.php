<?php

namespace BRKsDeadPool\Gate\Support;

use Exception;

trait MakePermissionModel
{
    /**
     *  Make permission model
     *
     * @throws Exception
     * @return Model
     */
    public function permissionModel()
    {
        $permission = app()->make(config('gate.models.permission'));

        if (!$permission instanceof \Illuminate\Database\Eloquent\Model) {
            throw new Exception('Class ' . config('gate.models.permission') . 'must be instance off "Illuminate\\Database\\Eloquent\\Model');
        }

        return $permission;
    }
}