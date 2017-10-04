<?php

namespace BRKsDeadPool\Gate\Support;

use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Cache;

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

    public function roleCache()
    {
        if (!Cache::has('roles')) {
            Cache::put('roles', $this->roleModel()->get(), Carbon::now()->addHour());
        }

        return Cache::get('roles');
    }
}