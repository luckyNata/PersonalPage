import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private loginService: LoginService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|boolean{
    return this.loginService.isLoggedUser();
  }
}
