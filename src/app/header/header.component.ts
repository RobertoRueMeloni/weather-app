import { Component, EventEmitter, Output } from '@angular/core';

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

}
// import { Component, EventEmitter, Output } from '@angular/core';
// import { remote } from 'electron';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   @Output() featureSelected = new EventEmitter<string>();

//   minimizeWindow(): void {
//     const electron: typeof import('electron') = (window as any).require('electron');
//     const window = electron.remote.getCurrentWindow();
//     window.minimize();
//   }

//   maximizeWindow(): void {
//     const electron: typeof import('electron') = (window as any).require('electron');
//     const window = electron.remote.getCurrentWindow();
//     if (!window.isMaximized()) {
//       window.maximize();
//     } else {
//       window.unmaximize();
//     }
//   }

//   closeWindow(): void {
//     const electron: typeof import('electron') = (window as any).require('electron');
//     const window = electron.remote.getCurrentWindow();
//     window.close();
//   }
// }
