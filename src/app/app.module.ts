import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from "./clients/clients.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddClientComponent } from "./clients/AddClient/AddClient.component";
import { UserService } from "./_service/UserService/user.service";
import { RegisterBusinessComponent } from "./register-business/register-business.component";

const appRoutes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'clients', component: ClientsComponent,
  children:[
      { path: 'addClient', component: AddClientComponent,
        outlet: 'clientAddOutlet'
      }
  ]
    
   },
  { path: 'register', component: RegisterBusinessComponent },
 
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    ClientsComponent,
    AddClientComponent,
    PageNotFoundComponent,
    RegisterBusinessComponent
  ],
  imports: [
    FormsModule,      
    BrowserModule.withServerTransition({appId: 'MyServe'}),
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
