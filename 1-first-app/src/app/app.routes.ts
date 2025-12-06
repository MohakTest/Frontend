import { Routes } from '@angular/router';
import { Home } from './routing/home/home';
import { List } from './routing/list/list';
import { Add } from './routing/add/add';
import { NotFound } from './routing/not-found/not-found';
import { User } from './routing/user/user';

export const routes: Routes = [

    {
        path : 'home',
        component : Home
    },
    {
        path : 'list',
        component : List
    },
    {
        path : 'add',
        component : Add
    },
    {
        path : 'user/:id',
        component : User  
    },
    {
        path : '**',
        component : NotFound
    }
];
