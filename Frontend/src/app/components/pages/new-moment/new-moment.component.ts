import { Moment } from './../../../Moments';
import { MomentService } from './../../../services/moment.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText = "Compartilhar";

  formData = new FormData();

  constructor(private momentService: MomentService, private messagesService: MessagesService,
     private router: Router) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((moments: any) => console.log(moments));
  }

  changeHandler(moment: Moment): void {
    console.log(moment);
    this.formData.append('title', moment.title);
    this.formData.append('description', moment.description);

    if (moment.image) {
      this.formData.append('image', moment.image);
    }

    console.log(this.formData);
    
    this.momentService.createMoment(this.formData).subscribe();

    this.messagesService.add("Momento adicionado com sucesso!")

    this.router.navigate(['/']);
  }

}
