# Malar (Android + PC)
Game lives in `www/` (plain HTML + three.js). Pick ONE route:

## A) Easiest: install as app (Android + PC, works offline)
1. `npm install && npm run prepare-assets`  (bundles three.js into www/lib)
2. Upload the `www` folder to any HTTPS host (Netlify Drop: drag the folder onto app.netlify.com/drop, or GitHub Pages).
3. Open the link in Chrome/Edge: Android menu > "Install app" / "Add to Home screen"; PC address bar > install icon.

## B) PC .exe / AppImage (Electron)
npm install
npm start          # test
npm run dist       # installer/portable in dist/   (run on Windows for .exe)
F11 = fullscreen toggle, Alt+F4 = quit.

## C) Android APK (Capacitor, needs Android Studio)
npm install
npx cap add android
npm run android
In android/app/src/main/AndroidManifest.xml add to <activity>:  android:screenOrientation="sensorLandscape"
npx cap open android   # then Build > Build APK(s)

(Or no Android Studio: host www (route A) and paste the URL into pwabuilder.com > Android package.)

Note: Malayalam voice lines use the device's own Malayalam text-to-speech. If the device has none, subtitles + synth sounds play instead.
