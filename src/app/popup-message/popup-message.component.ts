import { PopupMessageService } from './../shared/services/popup-message.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})
export class PopupMessageComponent implements OnInit {
  isOpen = false;
  msg = '';

  constructor(private popupMsgSvc: PopupMessageService) { }

  ngOnInit(): void {
    this.popupMsgSvc.changedDisplay.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
    })

    this.popupMsgSvc.changedMsg.subscribe((msg: string) => {
      this.msg = msg;
    })
  }

  onClose(){
    this.popupMsgSvc.closeMessage();
  }
}
