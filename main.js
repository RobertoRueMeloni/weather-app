const { app, BrowserWindow } = require('electron')

let win;

function createWindow (){
  win = new BrowserWindow({
    width:1200,
    height:1200,
    backgroundColor:'#ffffff'
    
  })
  win.loadURL(`file://${__dirname}/dist/weather-app/index.html`)

  // DevTools
  win.webContents.openDevTools()

  win.on('closed', function(){
    win = null
  })
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