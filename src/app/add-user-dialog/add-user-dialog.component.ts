import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.css'
})
export class AddUserDialogComponent {
  constructor(private commonService:CommonService, private dialog: MatDialog){}

  saveData(){
    this.commonService.users.update(items=>[...items,{...this.formData}]);
    console.log(this.formData)
    this.dialog.closeAll();
  }

    formData = {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
    };

    close(){
    this.dialog.closeAll();
    }
}
