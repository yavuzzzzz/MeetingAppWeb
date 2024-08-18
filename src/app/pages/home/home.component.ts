import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../../services/meeting.service';
import { Meeting } from '../../models/meeting';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  meetings: Meeting[] = [];

  constructor(private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.meetingService.getMeetings().subscribe(data => {
      this.meetings = data;
    }, error => {
      console.error('Veri çekme hatası:', error);
    });
  }
}
