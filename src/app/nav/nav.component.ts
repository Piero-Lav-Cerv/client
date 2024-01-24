import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private memberService: MembersService) {}

  ngOnInit(): void {

  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        this.memberService.resetUserParams();
        this.router.navigateByUrl('/members');
      },
    });
  }

  logout() {
    this.accountService.logout();
    this.cleanFields();
    this.router.navigateByUrl('/');
  }

  cleanFields(){
    this.model.username = "";
    this.model.password = "";
  }
}
