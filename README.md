Steps to reproduce:

run from cmd.exe:

`git clone https://github.com/shahrouzz/electron-win64-zombie-bug.git`

`cd electron-win64-zombie-bug`

`yarn`

`yarn electron .`

After the crash there will still be a electron.exe renderer process running in taskmanager.

note: if you run it in a bash in windows, use the following command to run:

`./node_modules/electron/dist/electron.exe .`

Tested on Electron 6.0.11 on Microsoft Windows 10 Pro 