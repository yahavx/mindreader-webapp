import {User} from './user';
import {Feelings} from './feelings';
import {Snapshot} from './snapshot';

export class DefaultObjects { // Those objects to avoid loading problems
  static user: User = new User(1, '1', 1, '1');
  static feelings: Feelings = new Feelings(1, 1, 1, 1);
  static snapshot: Snapshot = new Snapshot(1, '1', []);
}
