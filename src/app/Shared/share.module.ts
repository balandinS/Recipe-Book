import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownDirective } from './dropDown.directive';


@NgModule({
    declarations: [ DropDownDirective],
    exports: [
        CommonModule,
        DropDownDirective
    ]
})
export class ShareModule {

}
