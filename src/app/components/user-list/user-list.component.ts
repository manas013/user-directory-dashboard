// src/app/components/user-list/user-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserDetailComponent } from "../../user-detail/user-detail.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, UserDetailComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';
  sortKey: string = 'name';
  sortAsc: boolean = true;
  currentPage = 1;
  usersPerPage = 5;

  selectedUserId: number | null = null;

  selectedUser: any = null;

selectUser(userId: number): void {
this.selectedUserId = userId;
  this.selectedUser = this.users.find(u => u.id === userId);
}

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.updateFilteredUsers();
    });
  }

  updateFilteredUsers(): void {
    this.filteredUsers = [...this.users];
    this.search();
  }

  search(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
    this.currentPage = 1;
  }

  sort(key: 'name' | 'company'): void {
    this.sortAsc = this.sortKey === key ? !this.sortAsc : true;
    this.sortKey = key;
    this.filteredUsers.sort((a, b) => {
      const valA = key === 'company' ? a.company.name : a[key];
      const valB = key === 'company' ? b.company.name : b[key];
      return (valA > valB ? 1 : -1) * (this.sortAsc ? 1 : -1);
    });
  }

  totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.usersPerPage);
  }

  get paginatedUsers(): any[] {
    const start = (this.currentPage - 1) * this.usersPerPage;
    return this.filteredUsers.slice(start, start + this.usersPerPage);
  }
}
