import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http' ;
import {Ng2Webstorage} from 'ngx-webstorage';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MarketComponent } from './market/market.component';
import { FarmComponent } from './farm/farm.component';

import { FarmsService } from './services/farms.service';
import { TypesComponent } from './types/types.component';
import { ShopComponent } from './shop/shop.component';
import { ItemComponent } from './item/item.component';
import {ShopsService} from './services/shops.service' ;
import {FormsModule} from "@angular/forms";
import { BuyComponent } from './buy/buy.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'types', component: TypesComponent },
  { path: 'market', component: MarketComponent },
  { path: 'farms/:id/buy' , component: BuyComponent},
  { path: 'farms/:id' , component: FarmComponent},
  { path: 'shop/:id' , component: ItemComponent},
  { path: 'shop' , component: ShopComponent},
  { path: '',      component: HomeComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    MarketComponent,
    FarmComponent,
    TypesComponent,
    ShopComponent,
    ItemComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    FarmsService,
    ShopsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
