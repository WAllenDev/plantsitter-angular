import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlantsOverviewComponent } from './components/plants-overview/plants-overview.component';
import { PlantComponent } from './components/plant/plant.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: PlantsOverviewComponent},
  {path: 'add', component: AddPlantComponent},
  {path: 'details', component: PlantDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    PlantsOverviewComponent,
    PlantComponent,
    PlantDetailsComponent,
    AddPlantComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
