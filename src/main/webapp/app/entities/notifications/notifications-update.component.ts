import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { INotifications } from 'app/shared/model/notifications.model';
import { NotificationsService } from './notifications.service';

@Component({
    selector: 'jhi-notifications-update',
    templateUrl: './notifications-update.component.html'
})
export class NotificationsUpdateComponent implements OnInit {
    notifications: INotifications;
    isSaving: boolean;

    constructor(protected notificationsService: NotificationsService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ notifications }) => {
            this.notifications = notifications;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.notifications.id !== undefined) {
            this.subscribeToSaveResponse(this.notificationsService.update(this.notifications));
        } else {
            this.subscribeToSaveResponse(this.notificationsService.create(this.notifications));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<INotifications>>) {
        result.subscribe((res: HttpResponse<INotifications>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
