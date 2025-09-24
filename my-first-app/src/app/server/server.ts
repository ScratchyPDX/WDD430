import { Component, Input } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.html",
  styleUrls: ["./server.css"],
  standalone: false
})
export class Server {
  serverId: number = 10;
  serverStatus: string = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerId(): number {
    return this.serverId;
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
