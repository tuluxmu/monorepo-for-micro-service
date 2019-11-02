import fs from 'fs';
const rename = require('gulp-rename');

const buildPath = 'dist';
import {
  src,
  dest
} from 'gulp';


const buildLambda = (cb) => {
  const templateDir = `${buildPath}/lambda`;
  if(!fs.existsSync(templateDir)) {
    fs.mkdirSync(templateDir);
    console.log(`📁Folder created: ${templateDir}`);    
  }   
cb();
};
export default buildLambda;