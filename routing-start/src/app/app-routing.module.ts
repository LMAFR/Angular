import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    {path: '', component:HomeComponent},
    {path:'users', component:UsersComponent, children:[
      {path:':id/:name', component:UserComponent}
    ]},
    {path:'servers', 
    // canActivate:[AuthGuard],
    // CanActivateChild applies the service in the square brackets only to the children
    canActivateChild:[AuthGuard],
    component:ServersComponent, children:[
      {path:':id', component:ServerComponent},
      {path:':id/edit', component:EditServerComponent, canDeactivate:[CanDeactivateGuard]}
    ]},
    {path:'not-found', component:PageNotFoundComponent},
  // The line below shall be placed as the last one in evey project, as in other case all the routes created below it will be ignored
    {path:'**', redirectTo:'/not-found'}
    
  ]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {

}