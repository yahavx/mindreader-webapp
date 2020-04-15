export class Snapshot {
  timestamp: number;
  snapshotId: string;
  topics: string[];

  constructor(date: number, snapshotId: string, topics: string[]) {
    this.timestamp = date;
    this.snapshotId = snapshotId;
    this.topics = topics;
  }
}

export class SnapshotMD {
  timestamp: number;
  snapshotId: string;

  constructor(date: number, snapshotId: string) {
    this.timestamp = date;
    this.snapshotId = snapshotId;
  }
}
