/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GcpExampleTestModule } from '../../../test.module';
import { NotificationsDetailComponent } from 'app/entities/notifications/notifications-detail.component';
import { Notifications } from 'app/shared/model/notifications.model';

describe('Component Tests', () => {
    describe('Notifications Management Detail Component', () => {
        let comp: NotificationsDetailComponent;
        let fixture: ComponentFixture<NotificationsDetailComponent>;
        const route = ({ data: of({ notifications: new Notifications(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GcpExampleTestModule],
                declarations: [NotificationsDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(NotificationsDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(NotificationsDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.notifications).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
