import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShopService } from 'src/app/shared/services/shop.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subscription: any;
  private _completed = new Subject();
  cartNumber: number = 0;
  windowWidth: number = 0;
  
  isNavbarCollapsed = true;

  constructor(
    private _shopService: ShopService,
    public _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.subscription = this._shopService.getCartNumberChangeEmitter()
      .pipe(takeUntil(this._completed))
      .subscribe(item => this.cartNumberChanged(item));
  }

  
  cartNumberChanged(numb: any) {
    this.cartNumber = numb;
  }

  ngOnDestroy() {
    this._completed.next();
    this._completed.complete();
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.windowWidth = window.innerWidth;
  }

  signout(){
    this._authService.logout();
    this._router.navigate(['/signin']);
  }
}
function takeUntil(_completed: Subject<unknown>): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

