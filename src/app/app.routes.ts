import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { TenantsComponent } from './components/tenants/tenants.component';
import { EnvironmentsComponent } from './components/environments/environments.component';
import { EnvironmentDetailsComponent } from './components/environment-details/environment-details.component';
import { AccountComponent } from './components/account/account.component';
import { TenantEnvironmentsComponent } from './components/tenant-environments/tenant-environments.component';
import { TenantEnvironmentPropertiesComponent } from './components/tenant-environment-properties/tenant-environment-properties.component';

export const routes: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'tenants',
                component:TenantsComponent
            },
            {
                path:'environments',
                component:EnvironmentsComponent
            },
            {
                path:'accounts',
                component:AccountComponent
            },
            {
                path: 'environments/environment',
                component: EnvironmentDetailsComponent
            },
            {
                path: 'tenants/:tenant',
                component:TenantEnvironmentsComponent
            },
            {
                path: 'tenants/:tenant/:environment',
                component:TenantEnvironmentPropertiesComponent
            }
            
        ]
    }
];