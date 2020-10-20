import { AuthGuard } from './guards/auth.guard';
import { CounterComponent } from './components/counter/counter.component';
import { LogInComponent } from './components/log-in/log-in.component';

import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'login', component: LogInComponent },
    { path: 'counter', component: CounterComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
