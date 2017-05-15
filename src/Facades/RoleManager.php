<?php

namespace BRKsDeadPool\Gate\Facades;

use Illuminate\Support\Facades\Facade;
use BRKsDeadPool\Gate\Contracts\RoleManager as RoleManagerContract;

class RoleManager extends Facade
{
    protected static function getFacadeAccessor()
    {
        return RoleManagerContract::class;
    }
}