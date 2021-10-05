import { Subject } from "rxjs";

export class PopupMessageService{
  private isOpen = false;
  private msg = '';
  changedDisplay = new Subject<boolean>();
  changedMsg = new Subject<string>();

  displayMessage = (msg: string) => {
    this.msg = msg;
    this.isOpen = true;

    this.changedDisplay.next(this.isOpen);
    this.changedMsg.next(this.msg);
  }

  closeMessage = () => {
    this.isOpen = false;
    this.msg = '';

    this.changedDisplay.next(this.isOpen);
    this.changedMsg.next(this.msg);
  }
}