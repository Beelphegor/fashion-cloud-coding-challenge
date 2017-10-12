import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { StartPageComponent } from 'app/start-page/start-page.component';
import { DetailPageComponent } from 'app/detail-page/detail-page.component';

const appRoutes: Routes = [
    {path: '', component: StartPageComponent},
    {path: 'details/:tag', component: DetailPageComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}