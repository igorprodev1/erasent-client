import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './main/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//material modules 
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MainService } from '../shared/services/main.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { SearchPipe } from '../shared/pipe/search-pipe';
import { ArraySortPipe } from '../shared/pipe/sort-pipe';

@NgModule({
  declarations: [SearchPipe, ArraySortPipe, MainComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutRoutingModule,
    FormsModule,
    HttpClientModule,
    // material
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [MainService]
})
export class LayoutModule { }
