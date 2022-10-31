
import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moments';
import { Router, ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = 'http://localhost:3333';
  faTimes = faTimes
  faEdit = faEdit

  constructor(private momentService: MomentService, private route: ActivatedRoute,
     private messagesService: MessagesService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMoment(id).subscribe(item => this.moment = item.data);


  }

  async  deletar(id: number){
  await this.momentService.deleteMoment(id).subscribe()

  this.messagesService.add("momento excluido com sucesso!")

  this.router.navigate(['/']);

  }

}
