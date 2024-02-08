import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../_services/admin.service';
import { Photo } from 'src/app/_modules/photo';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit{
  photos: Photo[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getPhotosForApproval();
  }

  getPhotosForApproval(){
    this.adminService.getPhotosForApproval().subscribe({
      next: photosResult => {this.photos = photosResult; console.log(photosResult)}
    });
  }

  approvePhoto(photoid: number){
    this.adminService.approvePhoto(photoid).subscribe({
      next: _ => this.photos.splice(this.photos.findIndex(p => p.id, 1))
    })
  }

  rejectPhoto(photoid: number){
    this.adminService.rejectPhoto(photoid).subscribe({
      next: _ => this.photos.splice(this.photos.findIndex(p => p.id, 1))
    })
  }
}
