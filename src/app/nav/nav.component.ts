import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {

  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
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
