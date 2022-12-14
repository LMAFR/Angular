import { Component} from '@angular/core';
import { AccountsService } from 'src/accounts.service';
import { LogginService } from 'src/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private logginService:LogginService, private accountsService:AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status:string) => alert('Status changed! Now is ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName,accountStatus);
  }
}
