import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ExampleModule } from './ExampleModule/example/example.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleDirectiveDirective } from './example-directive.directive';
import { DegreeToFareiheitPipe } from './ExamplePipes/degree-to-fareiheit.pipe';
import { MyComponentComponent } from './Example/my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleDirectiveDirective,
    DegreeToFareiheitPipe,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
