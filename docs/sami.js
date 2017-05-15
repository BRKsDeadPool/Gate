
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">[Global Namespace]</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:CreateRolesPermissionTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateRolesPermissionTable.html">CreateRolesPermissionTable</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:BRKsDeadPool" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BRKsDeadPool.html">BRKsDeadPool</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:BRKsDeadPool_Gate" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BRKsDeadPool/Gate.html">Gate</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:BRKsDeadPool_Gate_Contracts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BRKsDeadPool/Gate/Contracts.html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:BRKsDeadPool_Gate_Contracts_PermissionManager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Contracts/PermissionManager.html">PermissionManager</a>                    </div>                </li>                            <li data-name="class:BRKsDeadPool_Gate_Contracts_RoleManager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Contracts/RoleManager.html">RoleManager</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:BRKsDeadPool_Gate_Facades" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BRKsDeadPool/Gate/Facades.html">Facades</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:BRKsDeadPool_Gate_Facades_PermissionManager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Facades/PermissionManager.html">PermissionManager</a>                    </div>                </li>                            <li data-name="class:BRKsDeadPool_Gate_Facades_RoleManager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Facades/RoleManager.html">RoleManager</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:BRKsDeadPool_Gate_Manager" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BRKsDeadPool/Gate/Manager.html">Manager</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:BRKsDeadPool_Gate_Manager_PermissionManager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Manager/PermissionManager.html">PermissionManager</a>                    </div>                </li>                            <li data-name="class:BRKsDeadPool_Gate_Manager_RoleManager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Manager/RoleManager.html">RoleManager</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:BRKsDeadPool_Gate_Models" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BRKsDeadPool/Gate/Models.html">Models</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:BRKsDeadPool_Gate_Models_Permission" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Models/Permission.html">Permission</a>                    </div>                </li>                            <li data-name="class:BRKsDeadPool_Gate_Models_Role" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Models/Role.html">Role</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:BRKsDeadPool_Gate_Support" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BRKsDeadPool/Gate/Support.html">Support</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:BRKsDeadPool_Gate_Support_HasRole" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Support/HasRole.html">HasRole</a>                    </div>                </li>                            <li data-name="class:BRKsDeadPool_Gate_Support_MakePermissionModel" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Support/MakePermissionModel.html">MakePermissionModel</a>                    </div>                </li>                            <li data-name="class:BRKsDeadPool_Gate_Support_MakeRoleModel" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/Support/MakeRoleModel.html">MakeRoleModel</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:BRKsDeadPool_Gate_GateServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="BRKsDeadPool/Gate/GateServiceProvider.html">GateServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": ".html", "name": "", "doc": "Namespace "},{"type": "Namespace", "link": "BRKsDeadPool.html", "name": "BRKsDeadPool", "doc": "Namespace BRKsDeadPool"},{"type": "Namespace", "link": "BRKsDeadPool/Gate.html", "name": "BRKsDeadPool\\Gate", "doc": "Namespace BRKsDeadPool\\Gate"},{"type": "Namespace", "link": "BRKsDeadPool/Gate/Contracts.html", "name": "BRKsDeadPool\\Gate\\Contracts", "doc": "Namespace BRKsDeadPool\\Gate\\Contracts"},{"type": "Namespace", "link": "BRKsDeadPool/Gate/Facades.html", "name": "BRKsDeadPool\\Gate\\Facades", "doc": "Namespace BRKsDeadPool\\Gate\\Facades"},{"type": "Namespace", "link": "BRKsDeadPool/Gate/Manager.html", "name": "BRKsDeadPool\\Gate\\Manager", "doc": "Namespace BRKsDeadPool\\Gate\\Manager"},{"type": "Namespace", "link": "BRKsDeadPool/Gate/Models.html", "name": "BRKsDeadPool\\Gate\\Models", "doc": "Namespace BRKsDeadPool\\Gate\\Models"},{"type": "Namespace", "link": "BRKsDeadPool/Gate/Support.html", "name": "BRKsDeadPool\\Gate\\Support", "doc": "Namespace BRKsDeadPool\\Gate\\Support"},
            {"type": "Interface", "fromName": "BRKsDeadPool\\Gate\\Contracts", "fromLink": "BRKsDeadPool/Gate/Contracts.html", "link": "BRKsDeadPool/Gate/Contracts/PermissionManager.html", "name": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager", "fromLink": "BRKsDeadPool/Gate/Contracts/PermissionManager.html", "link": "BRKsDeadPool/Gate/Contracts/PermissionManager.html#method_create", "name": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager::create", "doc": "&quot;Create a given permission&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager", "fromLink": "BRKsDeadPool/Gate/Contracts/PermissionManager.html", "link": "BRKsDeadPool/Gate/Contracts/PermissionManager.html#method_update", "name": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager::update", "doc": "&quot;Update a given permission&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager", "fromLink": "BRKsDeadPool/Gate/Contracts/PermissionManager.html", "link": "BRKsDeadPool/Gate/Contracts/PermissionManager.html#method_remove", "name": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager::remove", "doc": "&quot;Remove a given permission&quot;"},
            
            {"type": "Interface", "fromName": "BRKsDeadPool\\Gate\\Contracts", "fromLink": "BRKsDeadPool/Gate/Contracts.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html#method_create", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager::create", "doc": "&quot;Create a new role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html#method_update", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager::update", "doc": "&quot;Update a given role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html#method_remove", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager::remove", "doc": "&quot;Remove a given role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html#method_givePermission", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager::givePermission", "doc": "&quot;Give a permission to a given role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html#method_revokePermission", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager::revokePermission", "doc": "&quot;Revoke a given permission to a given role&quot;"},
            
            
            {"type": "Class", "fromName": "BRKsDeadPool\\Gate\\Contracts", "fromLink": "BRKsDeadPool/Gate/Contracts.html", "link": "BRKsDeadPool/Gate/Contracts/PermissionManager.html", "name": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager", "fromLink": "BRKsDeadPool/Gate/Contracts/PermissionManager.html", "link": "BRKsDeadPool/Gate/Contracts/PermissionManager.html#method_create", "name": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager::create", "doc": "&quot;Create a given permission&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager", "fromLink": "BRKsDeadPool/Gate/Contracts/PermissionManager.html", "link": "BRKsDeadPool/Gate/Contracts/PermissionManager.html#method_update", "name": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager::update", "doc": "&quot;Update a given permission&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager", "fromLink": "BRKsDeadPool/Gate/Contracts/PermissionManager.html", "link": "BRKsDeadPool/Gate/Contracts/PermissionManager.html#method_remove", "name": "BRKsDeadPool\\Gate\\Contracts\\PermissionManager::remove", "doc": "&quot;Remove a given permission&quot;"},
            
            {"type": "Class", "fromName": "BRKsDeadPool\\Gate\\Contracts", "fromLink": "BRKsDeadPool/Gate/Contracts.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html#method_create", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager::create", "doc": "&quot;Create a new role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html#method_update", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager::update", "doc": "&quot;Update a given role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html#method_remove", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager::remove", "doc": "&quot;Remove a given role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html#method_givePermission", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager::givePermission", "doc": "&quot;Give a permission to a given role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Contracts\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Contracts/RoleManager.html", "link": "BRKsDeadPool/Gate/Contracts/RoleManager.html#method_revokePermission", "name": "BRKsDeadPool\\Gate\\Contracts\\RoleManager::revokePermission", "doc": "&quot;Revoke a given permission to a given role&quot;"},
            
            {"type": "Class", "fromName": "BRKsDeadPool\\Gate\\Facades", "fromLink": "BRKsDeadPool/Gate/Facades.html", "link": "BRKsDeadPool/Gate/Facades/PermissionManager.html", "name": "BRKsDeadPool\\Gate\\Facades\\PermissionManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Facades\\PermissionManager", "fromLink": "BRKsDeadPool/Gate/Facades/PermissionManager.html", "link": "BRKsDeadPool/Gate/Facades/PermissionManager.html#method_getFacadeAccessor", "name": "BRKsDeadPool\\Gate\\Facades\\PermissionManager::getFacadeAccessor", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "BRKsDeadPool\\Gate\\Facades", "fromLink": "BRKsDeadPool/Gate/Facades.html", "link": "BRKsDeadPool/Gate/Facades/RoleManager.html", "name": "BRKsDeadPool\\Gate\\Facades\\RoleManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Facades\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Facades/RoleManager.html", "link": "BRKsDeadPool/Gate/Facades/RoleManager.html#method_getFacadeAccessor", "name": "BRKsDeadPool\\Gate\\Facades\\RoleManager::getFacadeAccessor", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "BRKsDeadPool\\Gate", "fromLink": "BRKsDeadPool/Gate.html", "link": "BRKsDeadPool/Gate/GateServiceProvider.html", "name": "BRKsDeadPool\\Gate\\GateServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\GateServiceProvider", "fromLink": "BRKsDeadPool/Gate/GateServiceProvider.html", "link": "BRKsDeadPool/Gate/GateServiceProvider.html#method_boot", "name": "BRKsDeadPool\\Gate\\GateServiceProvider::boot", "doc": "&quot;Bootstrap any application services.&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\GateServiceProvider", "fromLink": "BRKsDeadPool/Gate/GateServiceProvider.html", "link": "BRKsDeadPool/Gate/GateServiceProvider.html#method_register", "name": "BRKsDeadPool\\Gate\\GateServiceProvider::register", "doc": "&quot;Register any application services.&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\GateServiceProvider", "fromLink": "BRKsDeadPool/Gate/GateServiceProvider.html", "link": "BRKsDeadPool/Gate/GateServiceProvider.html#method_registerPermissions", "name": "BRKsDeadPool\\Gate\\GateServiceProvider::registerPermissions", "doc": "&quot;Dynamically register permissions with Laravel&#039;s gate&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\GateServiceProvider", "fromLink": "BRKsDeadPool/Gate/GateServiceProvider.html", "link": "BRKsDeadPool/Gate/GateServiceProvider.html#method_permissions", "name": "BRKsDeadPool\\Gate\\GateServiceProvider::permissions", "doc": "&quot;Fetch the collection of site permissions&quot;"},
            
            {"type": "Class", "fromName": "BRKsDeadPool\\Gate\\Manager", "fromLink": "BRKsDeadPool/Gate/Manager.html", "link": "BRKsDeadPool/Gate/Manager/PermissionManager.html", "name": "BRKsDeadPool\\Gate\\Manager\\PermissionManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Manager\\PermissionManager", "fromLink": "BRKsDeadPool/Gate/Manager/PermissionManager.html", "link": "BRKsDeadPool/Gate/Manager/PermissionManager.html#method_create", "name": "BRKsDeadPool\\Gate\\Manager\\PermissionManager::create", "doc": "&quot;Create a given permission&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Manager\\PermissionManager", "fromLink": "BRKsDeadPool/Gate/Manager/PermissionManager.html", "link": "BRKsDeadPool/Gate/Manager/PermissionManager.html#method_update", "name": "BRKsDeadPool\\Gate\\Manager\\PermissionManager::update", "doc": "&quot;Update a given permission&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Manager\\PermissionManager", "fromLink": "BRKsDeadPool/Gate/Manager/PermissionManager.html", "link": "BRKsDeadPool/Gate/Manager/PermissionManager.html#method_remove", "name": "BRKsDeadPool\\Gate\\Manager\\PermissionManager::remove", "doc": "&quot;Remove a given permission&quot;"},
            
            {"type": "Class", "fromName": "BRKsDeadPool\\Gate\\Manager", "fromLink": "BRKsDeadPool/Gate/Manager.html", "link": "BRKsDeadPool/Gate/Manager/RoleManager.html", "name": "BRKsDeadPool\\Gate\\Manager\\RoleManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Manager\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Manager/RoleManager.html", "link": "BRKsDeadPool/Gate/Manager/RoleManager.html#method_create", "name": "BRKsDeadPool\\Gate\\Manager\\RoleManager::create", "doc": "&quot;Create a new role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Manager\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Manager/RoleManager.html", "link": "BRKsDeadPool/Gate/Manager/RoleManager.html#method_update", "name": "BRKsDeadPool\\Gate\\Manager\\RoleManager::update", "doc": "&quot;Update a given role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Manager\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Manager/RoleManager.html", "link": "BRKsDeadPool/Gate/Manager/RoleManager.html#method_remove", "name": "BRKsDeadPool\\Gate\\Manager\\RoleManager::remove", "doc": "&quot;Remove a given role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Manager\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Manager/RoleManager.html", "link": "BRKsDeadPool/Gate/Manager/RoleManager.html#method_givePermission", "name": "BRKsDeadPool\\Gate\\Manager\\RoleManager::givePermission", "doc": "&quot;Give a permission to a given role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Manager\\RoleManager", "fromLink": "BRKsDeadPool/Gate/Manager/RoleManager.html", "link": "BRKsDeadPool/Gate/Manager/RoleManager.html#method_revokePermission", "name": "BRKsDeadPool\\Gate\\Manager\\RoleManager::revokePermission", "doc": "&quot;Revoke a given permission to a given role&quot;"},
            
            {"type": "Class", "fromName": "BRKsDeadPool\\Gate\\Models", "fromLink": "BRKsDeadPool/Gate/Models.html", "link": "BRKsDeadPool/Gate/Models/Permission.html", "name": "BRKsDeadPool\\Gate\\Models\\Permission", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Models\\Permission", "fromLink": "BRKsDeadPool/Gate/Models/Permission.html", "link": "BRKsDeadPool/Gate/Models/Permission.html#method_roles", "name": "BRKsDeadPool\\Gate\\Models\\Permission::roles", "doc": "&quot;Get the roles for the permissions&quot;"},
            
            {"type": "Class", "fromName": "BRKsDeadPool\\Gate\\Models", "fromLink": "BRKsDeadPool/Gate/Models.html", "link": "BRKsDeadPool/Gate/Models/Role.html", "name": "BRKsDeadPool\\Gate\\Models\\Role", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Models\\Role", "fromLink": "BRKsDeadPool/Gate/Models/Role.html", "link": "BRKsDeadPool/Gate/Models/Role.html#method_users", "name": "BRKsDeadPool\\Gate\\Models\\Role::users", "doc": "&quot;Get the user for the roles&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Models\\Role", "fromLink": "BRKsDeadPool/Gate/Models/Role.html", "link": "BRKsDeadPool/Gate/Models/Role.html#method_permissions", "name": "BRKsDeadPool\\Gate\\Models\\Role::permissions", "doc": "&quot;Get the permission for roles&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Models\\Role", "fromLink": "BRKsDeadPool/Gate/Models/Role.html", "link": "BRKsDeadPool/Gate/Models/Role.html#method_givePermissionTo", "name": "BRKsDeadPool\\Gate\\Models\\Role::givePermissionTo", "doc": "&quot;Grant the permission to a role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Models\\Role", "fromLink": "BRKsDeadPool/Gate/Models/Role.html", "link": "BRKsDeadPool/Gate/Models/Role.html#method_revokePermissionTo", "name": "BRKsDeadPool\\Gate\\Models\\Role::revokePermissionTo", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "BRKsDeadPool\\Gate\\Support", "fromLink": "BRKsDeadPool/Gate/Support.html", "link": "BRKsDeadPool/Gate/Support/HasRole.html", "name": "BRKsDeadPool\\Gate\\Support\\HasRole", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Support\\HasRole", "fromLink": "BRKsDeadPool/Gate/Support/HasRole.html", "link": "BRKsDeadPool/Gate/Support/HasRole.html#method_assignRole", "name": "BRKsDeadPool\\Gate\\Support\\HasRole::assignRole", "doc": "&quot;Assign the given role to the user&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Support\\HasRole", "fromLink": "BRKsDeadPool/Gate/Support/HasRole.html", "link": "BRKsDeadPool/Gate/Support/HasRole.html#method_hasRole", "name": "BRKsDeadPool\\Gate\\Support\\HasRole::hasRole", "doc": "&quot;Determine if the user has the given role&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Support\\HasRole", "fromLink": "BRKsDeadPool/Gate/Support/HasRole.html", "link": "BRKsDeadPool/Gate/Support/HasRole.html#method_hasPermission", "name": "BRKsDeadPool\\Gate\\Support\\HasRole::hasPermission", "doc": "&quot;Determine if the user can perform a given action&quot;"},
                    {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Support\\HasRole", "fromLink": "BRKsDeadPool/Gate/Support/HasRole.html", "link": "BRKsDeadPool/Gate/Support/HasRole.html#method_roles", "name": "BRKsDeadPool\\Gate\\Support\\HasRole::roles", "doc": "&quot;Get roles for current user&quot;"},
            
            {"type": "Trait", "fromName": "BRKsDeadPool\\Gate\\Support", "fromLink": "BRKsDeadPool/Gate/Support.html", "link": "BRKsDeadPool/Gate/Support/MakePermissionModel.html", "name": "BRKsDeadPool\\Gate\\Support\\MakePermissionModel", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Support\\MakePermissionModel", "fromLink": "BRKsDeadPool/Gate/Support/MakePermissionModel.html", "link": "BRKsDeadPool/Gate/Support/MakePermissionModel.html#method_permissionModel", "name": "BRKsDeadPool\\Gate\\Support\\MakePermissionModel::permissionModel", "doc": "&quot;Make permission model&quot;"},
            
            {"type": "Trait", "fromName": "BRKsDeadPool\\Gate\\Support", "fromLink": "BRKsDeadPool/Gate/Support.html", "link": "BRKsDeadPool/Gate/Support/MakeRoleModel.html", "name": "BRKsDeadPool\\Gate\\Support\\MakeRoleModel", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "BRKsDeadPool\\Gate\\Support\\MakeRoleModel", "fromLink": "BRKsDeadPool/Gate/Support/MakeRoleModel.html", "link": "BRKsDeadPool/Gate/Support/MakeRoleModel.html#method_roleModel", "name": "BRKsDeadPool\\Gate\\Support\\MakeRoleModel::roleModel", "doc": "&quot;Make a role model&quot;"},
            
            {"type": "Class",  "link": "CreateRolesPermissionTable.html", "name": "CreateRolesPermissionTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateRolesPermissionTable", "fromLink": "CreateRolesPermissionTable.html", "link": "CreateRolesPermissionTable.html#method_up", "name": "CreateRolesPermissionTable::up", "doc": "&quot;Run the migrations&quot;"},
                    {"type": "Method", "fromName": "CreateRolesPermissionTable", "fromLink": "CreateRolesPermissionTable.html", "link": "CreateRolesPermissionTable.html#method_down", "name": "CreateRolesPermissionTable::down", "doc": "&quot;Reverse the migrations&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


