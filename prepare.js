const fs=require('fs');fs.mkdirSync('www/lib',{recursive:true});
try{fs.copyFileSync('node_modules/three/build/three.min.js','www/lib/three.min.js');console.log('three.js bundled offline')}catch(e){console.log('Run: npm install  (first)')}
