export class Snapshot {
  date: number;
  snapshotId: string;
  results: string[];

  constructor(date: number, snapshotId: string, results: string[]) {
    this.date = date;
    this.snapshotId = snapshotId;
    this.results = results;
  }
}

export class SnapshotMD {
  date: number;
  snapshotId: string;

  constructor(date: number, snapshotId: string) {
    this.date = date;
    this.snapshotId = snapshotId;
  }
}
