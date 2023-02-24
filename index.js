const { app } = require('electron')
const { loadWhatsApp } = require('./src/window');
const { createTrayIconFor } = require('./src/tray');
const { clearServiceWorkers } = require('./src/session');
const electron = require('electron');
const dialog = electron.dialog;

// Disable error dialogs by overriding
dialog.showErrorBox = function(title, content) {
    console.log(`${title}\n${content}`);
};

let window;
let tray;

const isFirstInstance = app.requestSingleInstanceLock();

if (!isFirstInstance) {
  app.quit();
  return;
}

app.on('second-instance', () => {
  if (window) {
    if (window.isMinimized()) { window.restore(); }
    window.focus();
  }
});

const startApp = () => {
  window = loadWhatsApp();
  tray = createTrayIconFor(window, app);
}

app.on('ready', startApp);
app.on('before-quit', clearServiceWorkers);
app.on('window-all-closed', () => app.quit());