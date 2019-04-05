import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule' },
  { path: 'user-register', loadChildren: './pages/user-register/user-register.module#UserRegisterPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'admin-create-championship', loadChildren: './pages/admin-create-championship/admin-create-championship.module#AdminCreateChampionshipPageModule' },
  { path: 'admin-create-users', loadChildren: './pages/admin-create-users/admin-create-users.module#AdminCreateUsersPageModule' },
  { path: 'user-configurations', loadChildren: './pages/user-configurations/user-configurations.module#UserConfigurationsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
