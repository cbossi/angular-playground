import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TitleService {

  private readonly titleSubject: BehaviorSubject<string>;
  public readonly title: Observable<string>;

  constructor() {
    this.titleSubject = new BehaviorSubject(undefined);
    this.title = this.titleSubject.asObservable();
  }

  public updateTitle(title: string): void {
    this.titleSubject.next(title);
  }

}
