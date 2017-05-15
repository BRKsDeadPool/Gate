<?php

namespace BRKsDeadPool\Gate;

use BRKsDeadPool\Gate\Contracts\PermissionManager as PermissionManagerContract;
use BRKsDeadPool\Gate\Contracts\RoleManager as RoleManagerContract;
use BRKsDeadPool\Gate\Manager\PermissionManager;
use BRKsDeadPool\Gate\Manager\RoleManager;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Exception;

class GateServiceProvider extends ServiceProvider
{
    /**
     *  Indicates if loading of the service provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(GateContract $gate)
    {
        $this->publishes([
            __DIR__ . '/config/gate.php' => config_path('gate.php')
        ], 'config');

        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');

        $this->registerPermissions($gate);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(PermissionManagerContract::class, function () {
            return new PermissionManager();
        });
        $this->app->bind(RoleManagerContract::class, function () {
            return new RoleManager();
        });
    }

    /**
     *  Dynamically register permissions with Laravel's gate
     *
     * @param $gate \Illuminate\Contracts\Auth\Access\Gate
     * @return void
     */
    public function registerPermissions(GateContract $gate)
    {
        foreach ($this->permissions() as $permission) {
            $gate->define($permission->name, function ($user) use ($permission) {
                return $user->hasPermission($permission->name);
            });
        }
    }

    /**
     *  Fetch the collection of site permissions
     *
     * @throws Exception
     * @return \Illuminate\Support\Collection
     */
    public function permissions()
    {
        if ($this->app->runningInConsole()) {
            return collect([]);
        }

        $permissions = $this->app->make(config('gate.models.permission'));

        if (!$permissions instanceof \Illuminate\Database\Eloquent\Model) {
            throw new Exception('Class ' . config('gate.models.permission') . 'must be instance of Illuminate\\Database\\Eloquent\\Model');
        }

        return $permissions->with('roles')->get();
    }
}