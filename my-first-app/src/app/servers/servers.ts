import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: false,
  templateUrl: './servers.html',
  styleUrl: './servers.css'
})
export class Servers {
  allowNewServer: boolean = false;
  serverCreation = "No server was created!";
  serverName: string = "Testserver";
  serverCreated: boolean = false;
  servers = ['Test server', 'Test server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() { }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = "Server was created! Name is '" + this.serverName + "'";
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  setServerName(name: string) {
    this.serverName = name;
  }

}
