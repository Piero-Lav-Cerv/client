import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/_modules/member';
import { MembersService } from 'src/app/_services/members.service';
import { PresenceService } from '../../_services/presence.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  @Input() member: Member | undefined;

  constructor(private membersService: MembersService, private toastrService: ToastrService,
    public presenceService: PresenceService) {}

  ngOnInit(): void {

  }

  addLike(member: Member) {
    this.membersService.addLike(member.userName).subscribe({
      next: () => this.toastrService.success('You have liked ' + member.knownAs)
    })
  }
}
