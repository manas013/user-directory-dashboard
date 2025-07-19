import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute ,Router,RouterModule  } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
    imports: [RouterModule],
    standalone: true,
})
export class UserDetailComponent implements OnInit {
  @Input() userData: any; // used if passed as input
  @Output() close = new EventEmitter<void>(); // used if shown in modal

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService ,  private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(+id).subscribe(data => {
        this.user = data;
      });
    } else if (this.userData) {
      this.user = this.userData;
    }
  }

  onClose(): void {
    this.close.emit();
      this.router.navigate(['/']);
  }
}
