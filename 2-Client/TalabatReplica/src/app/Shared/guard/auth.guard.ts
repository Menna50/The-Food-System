import { CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServicesService } from 'src/app/Services/auth-services.service';

export const authGuard : CanActivateFn = 
    (route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean | Promise<boolean> |Observable<boolean>=> 
      {
    
        return false;
      };
