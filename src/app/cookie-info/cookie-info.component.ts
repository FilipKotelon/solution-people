import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-info',
  templateUrl: './cookie-info.component.html',
  styleUrls: ['./cookie-info.component.scss'],
})
export class CookieInfoComponent implements OnInit {
  accepted = true;
  closeInfo = false;

  constructor(private cookieSvc: CookieService) { }

  ngOnInit(): void {
    if(this.cookieSvc.check('cookiesAccepted')){
      this.accepted = (this.cookieSvc.get('cookiesAccepted') === 'true');

      if(this.accepted){
        this.closeInfo = true;
      }
    } else {
      this.accepted = false;
    }
  }

  acceptCookies = () => {
    this.accepted = true;
    this.cookieSvc.set('cookiesAccepted', 'true');

    setTimeout(() => {
      this.closeInfo = true;
    }, 600)
  }
}
