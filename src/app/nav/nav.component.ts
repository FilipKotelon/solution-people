import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  onDark = false;
  isMobile = false;
  fullNavOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((e) => {
      if(e instanceof NavigationEnd){
        if(e.url === '/our-solutions'){
          this.onDark = true;
        } else {
          this.onDark = false;
        }
      }
    });

    this.checkIfMobile();
    window.addEventListener('resize', () => {
      this.checkIfMobile();
    })
  }

  checkIfMobile = () => {
    if(window.innerWidth < 576){
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  openFullNav = () => {
    this.fullNavOpen = true;
  }

  closeFullNav = () => {
    this.fullNavOpen = false;
  }
}
