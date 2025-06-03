import { Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { AboutMeComponent } from './ui/pages/about-me/about-me.component';
import { MyWorkComponent } from './ui/pages/my-work/my-work.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },

    { path: 'about-me', component: AboutMeComponent },

    { path: 'projects', component: MyWorkComponent}
    
];
