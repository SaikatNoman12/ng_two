import { CustomPipePipe } from './appPipe/customPipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './service/my-service.service';
import { NewServiceService } from './service/new-service.service';
import { CardServicesService } from './service/card-services.service';
import { LandToyotaComponent } from './about/land-toyota/land-toyota.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
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
import { ParentComponent } from './parent/parent.component';
import { CildComponent } from './parent/cild/cild.component';
import { CardOneComponent } from './home/card-one/card-one.component';
import { CardTwoComponent } from './home/card-two/card-two.component';
import { ChildComponent } from './home/child/child.component';
import { ExexerciseComponent } from './exexercise/exexercise.component';
import { UserComponent } from './exexercise/user/user.component';
import { AdminComponent } from './exexercise/admin/admin.component';
import { NewExersiceComponent } from './new-exersice/new-exersice.component';
import { ChildExerciseComponent } from './new-exersice/child-exercise/child-exercise.component';
import { GetApiDataComponent } from './get-api-data/get-api-data.component';
import { SubjectComponentComponent } from './subject-component/subject-component.component';
import { SubComponentComponent } from './sub-component/sub-component.component';
import { SubComponent2Component } from './sub-component2/sub-component2.component';
import { SubComponent3Component } from './sub-component3/sub-component3.component';
import { SubComponent4Component } from './sub-component4/sub-component4.component';
import { HooksComponent } from './hooks/hooks.component';
import { ChildCompComponent } from './hooks/child-comp/child-comp.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildViewComponent } from './view-child/child-view/child-view.component';
import { ChildView2Component } from './view-child/child-view2/child-view2.component';
import { MyDirectiveDirective } from './Directive/my-directive.directive';
import { ViewChild3Component } from './view-child/view-child3/view-child3.component';
import { HostListenDirective } from './Directive/host-listen.directive';
import { BindHostDirective } from './Directive/bind-host.directive';
import { DropDirectiveDirective } from './Directive/drop-directive.directive';
import { PipeComponent } from './pipe/pipe.component';
import { MyPipePipe } from './appPipe/my-pipe.pipe';
import { ConditionPipePipe } from './appPipe/condition-pipe.pipe';
import { ConditionPipeParamPipe } from './appPipe/condition-pipe-param.pipe';
import { FilterPipePipe } from './appPipe/filter-pipe.pipe';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { FormsModule } from '@angular/forms';

const appRoute: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: FormComponent },
  { path: 'buy-now', component: ParentComponent },
  { path: 'exercise', component: ExexerciseComponent },
  { path: 'get-api', component: GetApiDataComponent },
  { path: 'subject', component: SubjectComponentComponent },
  { path: 'hooks', component: HooksComponent },
  { path: 'viewChild', component: ViewChildComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'filter-pipe', component: FilterPipeComponent },
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
    NGCONTENTComponent,
    ParentComponent,
    CildComponent,
    CardOneComponent,
    CardTwoComponent,
    ChildComponent,
    ExexerciseComponent,
    UserComponent,
    AdminComponent,
    NewExersiceComponent,
    ChildExerciseComponent,
    GetApiDataComponent,
    SubjectComponentComponent,
    SubComponentComponent,
    SubComponent2Component,
    SubComponent3Component,
    SubComponent4Component,
    HooksComponent,
    ChildCompComponent,
    ViewChildComponent,
    ChildViewComponent,
    ChildView2Component,
    MyDirectiveDirective,
    ViewChild3Component,
    HostListenDirective,
    BindHostDirective,
    DropDirectiveDirective,
    PipeComponent,
    CustomPipePipe,
    MyPipePipe,
    ConditionPipePipe,
    ConditionPipeParamPipe,
    FilterPipePipe,
    FilterPipeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CardServicesService,
    NewServiceService,
    MyServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
