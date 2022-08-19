import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InboxComponent } from '../messenger/inbox/inbox.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openMsg(){
    this.dialog.open(InboxComponent);
  }
  

}
