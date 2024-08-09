import { Route } from '@angular/router';
import { ListViewComponent } from './components/list-view.component';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    { path: '', component: NxWelcomeComponent },
    { path: 'list-view', component: ListViewComponent },
];
