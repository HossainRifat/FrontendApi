import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-send-offer',
  templateUrl: './send-offer.component.html',
  styleUrls: ['./send-offer.component.css']
})
export class SendOfferComponent implements OnInit {
  name:any;
  constructor(private service:ApiServiceService) { }

  ngOnInit(): void {
    this.name=this.service.getCompanyName();
  }

}
