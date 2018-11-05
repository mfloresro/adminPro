
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// RUTAS
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

// servicios
import { ServiceModule } from './services/service.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PipesModule } from './pipes/pipes.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
