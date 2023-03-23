import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';

export interface CanComponentLeave{
  canLeave:()=> boolean;
}
@Injectable({
  providedIn: 'root'
})
// export class UnsavedchangesGuard implements CanDeactivate<AdduserComponent> {
  
//  canDeactivate(component: AdduserComponent ) { 
   
//   if(component.userName.dirty)
//   {
//     return window.confirm('You have some unsaved changes. Are you sure you want to navigate?')
//   } else {
//     true;
//   }
//  }
// }

export class UnsavedchangesGuard implements CanDeactivate<CanComponentLeave>{
  canDeactivate(component: CanComponentLeave){
    if(component.canLeave){
      return component.canLeave();
    }
    return true;
  }
  }


