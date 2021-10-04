import { Subject } from "rxjs";

export class CursorService{
  changedSize = new Subject<boolean>();
  changedMsg = new Subject<string>();
  private isLarge = false;
  private msg = '';

  enlargeCursor = (msg: string) => {
    this.isLarge = true;
    this.msg = msg;

    this.changedMsg.next(this.msg);
    this.changedSize.next(this.isLarge);
  }

  normalizeCursor = () => {
    this.isLarge = false;
    this.msg = ''

    this.changedMsg.next(this.msg);
    this.changedSize.next(this.isLarge);
  }
}