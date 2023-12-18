import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-user-data-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-data-display.component.html',
  styleUrl: './user-data-display.component.css'
})
export class UserDataDisplayComponent {
constructor(private commonService:CommonService, public dialog:MatDialog){

}

  openDialog() {
    this.dialog.open(AddUserDialogComponent);
  }

getUsers(){
  return this.commonService.users();
}
}
