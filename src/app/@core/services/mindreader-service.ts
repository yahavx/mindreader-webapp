import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {User, UserMD} from '../objects/user';
import {Snapshot, SnapshotMD} from '../objects/snapshot';
import {Result} from '../objects/result';
import {Feelings} from '../objects/feelings';
import {Pose} from '../objects/pose';
import {ColorImage} from '../objects/color-image';
import {DepthImage} from '../objects/depth-image';

// TODO: pass this as a parameter somehow
const address = '127.0.0.1:5000';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AuthService {
  host: string;
  ip: string;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserMD[]> {
    return this.http.get<UserMD[]>(`${address}/users`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${address}/users/${userId}`);
  }

  getSnapshots(userId: number): Observable<SnapshotMD[]> {
    return this.http.get<SnapshotMD[]>(`${address}/users/${userId}/snapshots`);
  }

  getSnapshot(userId: number, snapshotId: string): Observable<Snapshot> {
    return this.http.get<Snapshot>(`${address}/users/${userId}/snapshots/${snapshotId}`);
  }

  getResult(userId: number, snapshotId: string, resultName: string): Observable<Result> {
    return this.http.get<Result>(`${address}/users/${userId}/snapshots/${snapshotId}/${resultName}`);
  }

  getResultData(userId: number, snapshotId: string, resultName: string): Observable<Result> {
    return this.http.get<Result>(`${address}/users/${userId}/snapshots/${snapshotId}/${resultName}/data`);
  }

  // The following can be called via GetResult also but its more explicit

  getFeelings(userId: number, snapshotId: string): Observable<Feelings> {
    return this.http.get<Feelings>(`${address}/users/${userId}/snapshots/${snapshotId}/feelings`);
  }

  getPose(userId: number, snapshotId: string): Observable<Pose> {
    return this.http.get<Pose>(`${address}/users/${userId}/snapshots/${snapshotId}/pose`);
  }

  getColorImage(userId: number, snapshotId: string): Observable<ColorImage> {
    return this.http.get<ColorImage>(`${address}/users/${userId}/snapshots/${snapshotId}/color_image`);
  }

  getDepthImage(userId: number, snapshotId: string): Observable<DepthImage> {
    return this.http.get<DepthImage>(`${address}/users/${userId}/snapshots/${snapshotId}/depth_image`);
  }
}
