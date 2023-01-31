// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, MenuItem, globalShortcut } = require('electron');
const path = require('path');

const createWindow = () => {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    // and load the index.html of the app.
    // win.loadFile('index.html');

    // load the external URL. Learn more here: https://dev.to/austincunningham/create-an-electron-app-on-fedora-4gm5
    win.loadURL('https://en.wikipedia.com');

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
}

// Customize Menu
const menu = new Menu();
menu.append(new MenuItem({
    label: 'Menu',
    submenu: [
        {
            role: 'help',
            accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
            click: () => { console.log('Sorry, I cannot help you!') }
        }
    ]
}))

Menu.setApplicationMenu(menu);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    globalShortcut.register('Alt+CommandOrControl+I', () => {
        console.log('Electron loves global shortcuts!')
    })
}).then(() => {
    createWindow();

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});