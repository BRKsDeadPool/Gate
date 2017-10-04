<?php

namespace BRKsDeadPool\Gate\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class Permission extends Model
{
    protected static function boot()
    {
        parent::boot();
        $cache = function() {
            if (Cache::has('permissions')) {
                Cache::forget('permissions');
            }

            Cache::put('permissions', self::all(), Carbon::now()->addHour());

            if (Cache::has('role_user')) {
                Cache::forget('role_user');
            }
            Cache::put('role_user', DB::table('role_user')->get());
        };
        static::created($cache);
        static::updated($cache);
        static::deleted($cache);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description'
    ];

    /**
     * Get the roles for the permissions
     */
    public function roles()
    {
        return $this->belongsToMany(config('gate.models.role'));
    }
}
