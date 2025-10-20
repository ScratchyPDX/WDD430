import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  standalone: false,
  templateUrl: './edit-server.html',
  styleUrl: './edit-server.css'
})
export class EditServer  implements OnInit {
  server: {id: number, name: string, status: string} | undefined;
  serverName: string = '';
  serverStatus: string = '';

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
