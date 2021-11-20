// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// This Module's Components

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        // RouterModule.forChild(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule,
    ],
    declarations: [
        DashboardComponent
   ],
    exports: [
        DashboardComponent
    ]
})
export class TextModule {

}