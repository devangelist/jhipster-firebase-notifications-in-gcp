/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GcpExampleTestModule } from '../../../test.module';
import { NotificationsComponent } from 'app/entities/notifications/notifications.component';
import { NotificationsService } from 'app/entities/notifications/notifications.service';
import { Notifications } from 'app/shared/model/notifications.model';

describe('Component Tests', () => {
    describe('Notifications Management Component', () => {
        let comp: NotificationsComponent;
        let fixture: ComponentFixture<NotificationsComponent>;
        let service: NotificationsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GcpExampleTestModule],
                declarations: [NotificationsComponent],
                providers: []
            })
                .overrideTemplate(NotificationsComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(NotificationsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(NotificationsService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Notifications(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.notifications[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
