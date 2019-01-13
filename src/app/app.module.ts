import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { routingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserResolver } from './user.resolver';
import { AuthGuard } from './guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    routingModule,
    SharedModule,
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
