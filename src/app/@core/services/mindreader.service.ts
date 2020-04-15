import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {User, UserMD} from '../objects/user';
import {Snapshot, SnapshotMD} from '../objects/snapshot';
import {Topics} from '../objects/topics';
import {Feelings} from '../objects/feelings';
import {Pose} from '../objects/pose';
import {ColorImage} from '../objects/color-image';
import {DepthImage} from '../objects/depth-image';
import {Injectable} from '@angular/core';
import {EnvService} from './env.service';


@Injectable()
export class MindreaderService {
  apiUrl: string;

  constructor(private http: HttpClient, private env: EnvService) {
    this.apiUrl = env.apiUrl;
  }

  getUsers(): Observable<UserMD[]> {
    return this.http.get<UserMD[]>(`${this.apiUrl}/users`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`);
  }

  getSnapshots(userId: number): Observable<SnapshotMD[]> {
    return this.http.get<SnapshotMD[]>(`${this.apiUrl}/users/${userId}/snapshots`);
  }

  getSnapshot(userId: number, snapshotId: string): Observable<Snapshot> {
    return this.http.get<Snapshot>(`${this.apiUrl}/users/${userId}/snapshots/${snapshotId}`);
  }

  getResult(userId: number, snapshotId: string, resultName: string): Observable<Topics> {
    return this.http.get<Topics>(`${this.apiUrl}/users/${userId}/snapshots/${snapshotId}/${resultName}`);
  }

  getResultData(userId: number, snapshotId: string, resultName: string): Observable<Topics> {
    return this.http.get<Topics>(`${this.apiUrl}/users/${userId}/snapshots/${snapshotId}/${resultName}/data`);
  }

  // The following can be called via GetResult also but its better to use the explicit way

  getFeelings(userId: number, snapshotId: string): Observable<Feelings> {
    return this.http.get<Feelings>(`${this.apiUrl}/users/${userId}/snapshots/${snapshotId}/feelings`);
  }

  getPose(userId: number, snapshotId: string): Observable<Pose> {
    return this.http.get<Pose>(`${this.apiUrl}/users/${userId}/snapshots/${snapshotId}/pose`);
  }

  getColorImage(userId: number, snapshotId: string): Observable<ColorImage> {
    return this.http.get<ColorImage>(`${this.apiUrl}/users/${userId}/snapshots/${snapshotId}/color_image`);
  }

  getDepthImage(userId: number, snapshotId: string): Observable<DepthImage> {
    return this.http.get<DepthImage>(`${this.apiUrl}/users/${userId}/snapshots/${snapshotId}/depth_image`);
  }

  getColorImageData(userId: number, snapshotId: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/users/${userId}/snapshots/${snapshotId}/color_image/data`, {
      responseType: 'blob'
    });
  }

  getDepthImageData(userId: number, snapshotId: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/users/${userId}/snapshots/${snapshotId}/depth_image/data`, {
      responseType: 'blob'
    });
  }
}
