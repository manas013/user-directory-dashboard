import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe(data => this.user = data);
  }
}
