import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListsComponent } from './views/lists/lists.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RollOnScrollDirective } from './directives/roll-on-scroll.directive';
import { MyNumberPipe } from './pipes/my-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ListItemComponent,
    RollOnScrollDirective,
    MyNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
