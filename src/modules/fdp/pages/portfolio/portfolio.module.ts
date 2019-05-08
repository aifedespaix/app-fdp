import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {MaterialModule} from '../../commun/material/material.module';
import {MailService} from '../../commun/mail/mail.service';
import {PortfolioRoutingModule} from './portfolio.routing.module';
import { PortfolioComponent } from './portfolio.component';
import {CommunModule} from '../../commun/commun.module';

@NgModule({
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent],
  imports: [
    MaterialModule,
    PortfolioRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    CommunModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    MailService
  ]
})
export class PortfolioModule {}
