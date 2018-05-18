import { NgModule } from '@angular/core';
import { FirstPageComponent } from './first-page/first-page';
import { DataPageComponent } from './data-page/data-page';
import { MedDataPageComponent } from './med-data-page/med-data-page';
import { AdvDataPageComponent } from './adv-data-page/adv-data-page';
import { DescPageComponent } from './desc-page/desc-page';
import { RoughWorkComponent } from './rough-work/rough-work';
@NgModule({
	declarations: [FirstPageComponent,
    DataPageComponent,
    MedDataPageComponent,
    AdvDataPageComponent,
    DescPageComponent,
    RoughWorkComponent],
	imports: [],
	exports: [FirstPageComponent,
    DataPageComponent,
    MedDataPageComponent,
    AdvDataPageComponent,
    DescPageComponent,
    RoughWorkComponent]
})
export class ComponentsModule {}
