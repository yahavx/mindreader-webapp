export class Snapshot {
  date: number;
  snapshot_id: string;
  results: string[];

  constructor(date: number, snapshot_id: string, results: string[]) {
    this.date = date;
    this.snapshot_id = snapshot_id;
    this.results = results;
  }
}

export class SnapshotMD {
  date: number;
  snapshot_id: string;

  constructor(date: number, snapshotId: string) {
    this.date = date;
    this.snapshot_id = snapshotId;
  }
}
