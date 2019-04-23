import { NgModule } from '@angular/core';

import { GcpExampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GcpExampleSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GcpExampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GcpExampleSharedCommonModule {}
