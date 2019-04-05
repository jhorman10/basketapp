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
  { path: 'user-configurations', loadChildren: './pages/user-configurations/user-configurations.module#UserConfigurationsPageModule' },
  { path: 'user-search-csp', loadChildren: './pages/user-search-csp/user-search-csp.module#UserSearchCSPPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'user-sponsors-and-organziation', loadChildren: './pages/user-sponsors-and-organziation/user-sponsors-and-organziation.module#UserSponsorsAndOrganziationPageModule' },
  { path: 'admin-input-csp', loadChildren: './pages/admin-input-csp/admin-input-csp.module#AdminInputCSPPageModule' },
  { path: 'admin-asign-locate', loadChildren: './pages/admin-asign-locate/admin-asign-locate.module#AdminAsignLocatePageModule' },
  { path: 'admin-delete-csp', loadChildren: './pages/admin-delete-csp/admin-delete-csp.module#AdminDeleteCSPPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'admin-create-csp-step1', loadChildren: './pages/admin-create-csp-step1/admin-create-csp-step1.module#AdminCreateCSPStep1PageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'admin-create-csp-step2', loadChildren: './pages/admin-create-csp-step2/admin-create-csp-step2.module#AdminCreateCSPStep2PageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'admin-create-csp-step3', loadChildren: './pages/admin-create-csp-step3/admin-create-csp-step3.module#AdminCreateCSPStep3PageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'admin-crete-fixture-step1', loadChildren: './pages/admin-crete-fixture-step1/admin-crete-fixture-step1.module#AdminCreteFixtureStep1PageModule' },
  // tslint:disable-next-line:max-line-length
  { path: 'admin-crete-fixture-step2', loadChildren: './pages/admin-crete-fixture-step2/admin-crete-fixture-step2.module#AdminCreteFixtureStep2PageModule' },
  { path: 'admin-crete-csp-fs', loadChildren: './pages/admin-crete-csp-fs/admin-crete-csp-fs.module#AdminCreteCSPFsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
