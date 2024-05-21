import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { LayoutComponent } from './layout.component';
import { DetailsComponent } from './details.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
   
    ],
    declarations: [
        LayoutComponent,
        DetailsComponent,
        
    ]
})
export class RecipeModule { }