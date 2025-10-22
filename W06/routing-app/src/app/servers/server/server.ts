import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.html',
  styleUrl: './server.css'
})
export class Server implements OnInit {
  server: {id: number, name: string, status: string} = {id: 0, name: '', status: ''};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(params => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
    this.route.data.subscribe((data) => {
      this.server = data['server'];
    });
  }

  onEdit() {
    // programmatic navigation
    // this.route.params.subscribe(params => {
      this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    // });
  }

}
