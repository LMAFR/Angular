import { Component, Input} from '@angular/core';
import { AccountsService } from 'src/accounts.service';
import { LogginService } from 'src/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogginService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logginService:LogginService, private accountsService: AccountsService){ }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.logginService.logStatusChange(status);
  }
}
