import {Component, isDevMode, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {UserService} from './shared/services/user.service';
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  private subscription: Subscription;
  isLogin: boolean;
  isAdmin: boolean;
  language: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private translate: TranslateService) {
    this.router.events.subscribe(
      () => window.scrollTo(0, 0)
    );
    this.translate.use('sr');
    this.translate.setDefaultLang('sr');

    this.router.events.subscribe(re => {
      if (re instanceof NavigationEnd) {
        this.isLogin = re.url === '/login';
        this.isAdmin = re.url === '/admin';
      }
    })
  }


  ngOnInit() {
    this.language = UserService.getUserLanguage();
  }
}
