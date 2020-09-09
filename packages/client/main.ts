const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
// const { autoUpdater } = require('electron-updater')
const distDir = path.resolve(__dirname, '..', '..', '..', 'dist', 'client')

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  if (process.env.NODE_ENV === 'development') {
    console.log('Server localhost:4000')
    mainWindow.loadURL('http://localhost:4000')
  } else {
    console.log('Server index.html')
    mainWindow.loadURL(
      url.format({
        pathname: path.join(distDir, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }
}

app.whenReady().then(createWindow)
