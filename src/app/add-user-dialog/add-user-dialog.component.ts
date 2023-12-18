import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.css'
})
export class AddUserDialogComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private dialog: MatDialog, private commonService: CommonService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  saveData() {
    if (this.userForm.valid) {
      this.commonService.users.update(items => [...items, { ...this.userForm.getRawValue() }]);
      console.log(this.userForm.value);
      this.dialog.closeAll();
    }
  }

  formData = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
  };

  close() {
    this.dialog.closeAll();
  }
}
