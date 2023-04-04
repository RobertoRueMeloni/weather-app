const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');

// Define custom protocol handler
app.setAsDefaultProtocolClient('myapp')

let win;

function createWindow (){
  win = new BrowserWindow({
    width:1200,
    height:1200,
    backgroundColor:'#ffffff'
  })

  // Intercept custom protocol handler
  // protocol.interceptFileProtocol('file', (request, callback) => {
  //   const url = request.url.substr(7)    /* all urls start with 'file://' */
  //   callback({ path: path.normalize(`${__dirname}/${url}`) })
  // })


  win.loadURL(`file://${__dirname}/dist/weather-app/index.html`)
  

  // DevTools
  win.webContents.openDevTools()

  //Minimize maximise and close functions

  win.on('closed', function(){
    win = null
  })
  ipcMain.on('minimize', () => {
    win.minimize();
  });

  ipcMain.on('maximize', () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });

  ipcMain.on('close', () => {
    win.close();
  });
}


//Create window on electron inizialization
app.on('ready', createWindow)

//Quit when all window are closed
app.on('window-all-closed',function(){
  //on macOs specific close process
  if(process.platform !== 'darwin'){
    app.quit()
  } 
})

app.on('activate', function(){
  //macOs specific close process
  if(win === null){
    createWindow()
  }
})
