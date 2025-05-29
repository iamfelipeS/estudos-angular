import { NgModule } from '@angular/core';
import { CurrencyFormatPipe } from './currency-format.pipe';


@NgModule ({
    declarations: [ CurrencyFormatPipe, ],
    exports: [ CurrencyFormatPipe, ]
})

export class PipesModule{

}
