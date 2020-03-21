const { app, BrowserWindow } = require('electron');
const path = require('path');

const PAGE_URL =
  process.env === 'development'
    ? `file://${resolve('../dist/index.html')}`
    : `file://${resolve('../dist/index.html')}`;

function resolve(src) {
  return path.resolve(__dirname, src);
}

function start() {
  let win = new BrowserWindow({
    width: 480,
    height: 360,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL(PAGE_URL);

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
