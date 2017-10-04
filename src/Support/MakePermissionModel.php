<?php

namespace BRKsDeadPool\Gate\Support;

use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Cache;

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

    public function permissionCache()
    {
        if (!Cache::has('permissions')) {
            $this->cachePermissions();
        }

        return Cache::get('permissions');
    }

    public function cachePermissions()
    {
        Cache::put('permissions', $this->permissionModel()->get(), Carbon::now()->addHour());
    }
}