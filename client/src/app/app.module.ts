import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";
//////////////
import { HomeComponent } from "./components/home components/home/home.component";
import { NavbarComponent } from "./components/home components/navbar/navbar.component";
import { FirstPageComponent } from "./components/home components/first-page/first-page.component";
import { SecondPageComponent } from "./components/home components/second-page/second-page.component";
//////////////
import { UserDashBoardComponent } from "./components/userDashBoard/userDashBoard.component";
import { ProductsComponent } from "./components/products/products.component";
import { CategroyComponent } from "./components/categroy/categroy.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { ProductComponent } from "./components/product/product.component";
import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { ProductCardComponent } from "./components/profile cmponents/product-card/product-card.component";
import { ProfilComponent } from "./components/profile cmponents/profil/profil.component";
import { StartRatingComponent } from "./components/profile cmponents/start-rating/start-rating.component";
import { ServicesService } from "./components/services/services.service";

import { AuthService } from "./components/auth-service/auth.service";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "dashboard/:id",
    component: UserDashBoardComponent,
    children: [
      { path: "add-product", component: AddProductComponent },
      { path: "category", component: CategroyComponent },
      { path: "products", component: ProductsComponent }
    ]
  },
  { path: "profile/:id", component: ProfilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserDashBoardComponent,
    ProductsComponent,
    CategroyComponent,
    SideBarComponent,
    ProductComponent,
    NavbarComponent,
    FirstPageComponent,
    SecondPageComponent,
    AddProductComponent,
    ProductCardComponent,
    ProfilComponent,
    StartRatingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    // ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule
  ],

  providers: [ServicesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
