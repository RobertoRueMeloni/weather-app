import { Component, EventEmitter, Output } from '@angular/core';
// import { ipcRenderer } from 'electron';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  
  onSelect(feature:string){
    this.featureSelected.emit(feature)
  }
  
  // minimize() {
  //   ipcRenderer.send('minimize');
  // }

  // maximize() {
  //   ipcRenderer.send('maximize');
  // }

  // close() {
  //   ipcRenderer.send('close');
  // }

}
