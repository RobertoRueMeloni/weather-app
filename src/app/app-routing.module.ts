// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { SettingComponent } from './setting/setting.component';
// import { WeathermapComponent } from './weathermap/weathermap.component';

// const routes: Routes = [
//   {path:"dashboard", component:WeathermapComponent},
//   {path: "login", component:LoginComponent},
//   {path:"settings", component: SettingComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SettingComponent } from './setting/setting.component';
import { WeathermapComponent } from './weathermap/weathermap.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: WeathermapComponent,
    pathMatch: 'full',
    data: { title: 'Dashboard' }
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: { title: 'Login' }
  },
  {
    path: 'setting',
    component: SettingComponent,
    pathMatch: 'full',
    data: { title: 'Settings' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
