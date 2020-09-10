const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : `file://${path.resolve(
          __dirname,
          '..',
          '..',
          'dist',
          'client',
          'renderer',
          'index.html'
        )}`
  )
}

app.whenReady().then(createWindow)
