const {app,BrowserWindow}=require('electron');
app.commandLine.appendSwitch('autoplay-policy','no-user-gesture-required');
app.whenReady().then(()=>{const w=new BrowserWindow({fullscreen:true,autoHideMenuBar:true,backgroundColor:'#050403'});w.loadFile('www/index.html');
w.webContents.on('before-input-event',(e,i)=>{if(i.key==='F11'&&i.type==='keyDown')w.setFullScreen(!w.isFullScreen())})});
app.on('window-all-closed',()=>app.quit());
