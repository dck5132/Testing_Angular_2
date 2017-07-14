import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component.app';
import { FormsModule } from '@angular/forms';

@NgModule ({
    
    imports: [
        BrowserModule, FormsModule
        ],
    declarations: [
        AppComponent
        ],
    bootstrap: [
        AppComponent
        ]
    
})

export class AppModule {}