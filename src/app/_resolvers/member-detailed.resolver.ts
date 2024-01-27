import { ResolveFn } from '@angular/router';
import { Member } from '../_modules/member';
import { inject } from '@angular/core';
import { MembersService } from '../_services/members.service';

export const memberDetailedResolver: ResolveFn<Member> = (route, state) => {
  const memberService = inject(MembersService);//to get hold data before a component is constructed

  return memberService.getMember(route.paramMap.get('username')!)
};
