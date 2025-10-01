import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: false,
  templateUrl: './server-element.html',
  styleUrl: './server-element.css'
})
export class ServerElement implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element!: { type: string; name: string; content: string };

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!')
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('DoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
