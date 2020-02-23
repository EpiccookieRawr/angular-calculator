import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable()

export class HistoryService {
    expressionLogs = [];
    private _insertLogAction$ = new Subject<string[]>();

    get insertLogAction$(): Observable<string[]> {
        return this._insertLogAction$.asObservable();
    }

    addExpressionToLogs(expression: string[]) {
        this.expressionLogs.push(expression);
        this._insertLogAction$.next(this.expressionLogs);
    }
}