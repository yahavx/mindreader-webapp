import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {User, UserMD} from '../objects/user';
import {Snapshot, SnapshotMD} from '../objects/snapshot';
import {Result} from '../objects/result';

// TODO: pass this as a parameter somehow
const address = '127.0.0.1:5000';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AuthService {
  host: string; // TODO: use
  ip: string;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserMD[]> {
    return this.http.get<UserMD[]>(`${address}/users`);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${address}/users/${userId}`);
  }

  getSnapshots(userId: string): Observable<SnapshotMD[]> {
    return this.http.get<SnapshotMD[]>(`${address}/users/${userId}/snapshots`);
  }

  getSnapshot(userId: string, snapshotId: string): Observable<Snapshot> {
    return this.http.get<Snapshot>(`${address}/users/${userId}/snapshots/${snapshotId}`);
  }

  getResult(userId: string, snapshotId: string, resultName: string): Observable<Result> {
    return this.http.get<Result>(`${address}/users/${userId}/snapshots/${snapshotId}/${resultName}`);
  }

  getResultData(userId: string, snapshotId: string, resultName: string): Observable<Result> {
    return this.http.get<Result>(`${address}/users/${userId}/snapshots/${snapshotId}/${resultName}/data`);
  }
}
