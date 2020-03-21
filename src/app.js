const { app, BrowserWindow } = require('electron');
const path = require('path');

function start() {
  let win = new BrowserWindow({
    width: 600,
    height: 480,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(path.join(__dirname, '../dist/index.html'));

  // debug
  // win.webContents.openDevTools();
}

app.whenReady().then(start);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    start();
  }
});
