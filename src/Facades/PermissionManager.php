<?php

namespace BRKsDeadPool\Gate\Facades;

use Illuminate\Support\Facades\Facade;
use BRKsDeadPool\Gate\Contracts\PermissionManager as PermissionManagerContract;

class PermissionManager extends Facade
{
    protected static function getFacadeAccessor()
    {
        return PermissionManagerContract::class;
    }
}