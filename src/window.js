const { BrowserWindow, shell } = require('electron');
const path = require('path');
var fs = require('fs')

const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36';

function loadWhatsApp() {
  const window = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, '../assets/512x512.png'),
    webPreferences: { 
      // devTools: false,
      preload: path.join(__dirname, 'preload.js')
    },
  });

  window.setMenuBarVisibility(false);

  window.on('close', (event) => { 
    event.preventDefault();
    window.close();
  });

  window.webContents.on('new-window', (event, url) => {
    shell.openExternal(url);
    event.preventDefault();
  });

  window.loadURL('https://web.whatsapp.com/', { userAgent });
  
      fs.readFile("./plugins/spammer.js", 'utf-8', (err, data) => {
        if(err){
            console.log("An error ocurred reading the file :" + err.message);
            return;
        }

        // Change how to handle the file content
        setTimeout(() => {
    window.webContents.executeJavaScript(data);
  }, 30000);
    });

  return window;
}

module.exports = { loadWhatsApp };
