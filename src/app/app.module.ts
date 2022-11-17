import { LandToyotaComponent } from './about/land-toyota/land-toyota.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ErrorComponent } from './error/error.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { BirdComponent } from './products/bird/bird.component';
import { KingCarComponent } from './about/king-car/king-car.component';
import { HondaHrComponent } from './about/honda-hr/honda-hr.component';
import { AudiComponent } from './about/audi/audi.component';
import { NGFORComponent } from './ngfor/ngfor.component';
import { NGCONTENTComponent } from './contacts/ngcontent/ngcontent.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: FormComponent },
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'king-car', component: KingCarComponent },
      { path: 'honda-hr', component: HondaHrComponent },
      { path: 'land-toyota', component: LandToyotaComponent },
      { path: 'audi', component: AudiComponent }
    ]
  },
  {
    path: 'products', children: [
      { path: '', component: ProductsComponent },
      { path: 'bird', component: BirdComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'washing-machine', component: WashingMachineComponent },
      { path: 'laptop', component: LaptopComponent },
    ]
  },
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'washing-machine', component: WashingMachineComponent },
      { path: 'bird', component: BirdComponent },
      { path: 'mobile', component: MobileComponent },
    ]
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactsComponent,
    ProductsComponent,
    HomeComponent,
    FormComponent,
    ErrorComponent,
    LaptopComponent,
    MobileComponent,
    WashingMachineComponent,
    BirdComponent,
    KingCarComponent,
    HondaHrComponent,
    LandToyotaComponent,
    AudiComponent,
    NGFORComponent,
    NGCONTENTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
