import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-meet-you-dialog',
  templateUrl: './meet-you-dialog.component.html',
  styleUrls: ['./meet-you-dialog.component.css']
})
export class MeetYouDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<MeetYouDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this._router.navigate(['/login']);
    this.dialogRef.close();
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
