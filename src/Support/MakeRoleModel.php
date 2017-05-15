<?php

namespace BRKsDeadPool\Gate\Support;

use Exception;

trait MakeRoleModel
{
    /**
     *  Make a role model
     *
     * @throws \Exception
     */
    public function roleModel()
    {
        $role = app()->make(config('gate.models.role'));

        if (!$role instanceof \Illuminate\Database\Eloquent\Model) {
            throw new Exception('Class ' . config('gate.models.role') . 'must be instance off "Illuminate\\Database\\Eloquent\\Model');
        }

        return $role;
    }
}