/* 
  * app: módulo, que controla o ciclo de vida do evento do seu aplicativo.
  * Browser Window: módulo, que cria e gerencia janelas de aplicativos.
*/

const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    }).loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})