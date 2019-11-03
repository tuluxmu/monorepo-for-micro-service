import fs from 'fs';
import gulp from 'gulp';
import replace from 'gulp-replace';
import stack from '../AWS/stack.entry'
import config from './config';

const buildPath = 'dist';
const {
  nameSpace,
  brand,
  environment
} = config;


const buildAWSStack = (cb) => {
  const templateDir = `${buildPath}/stack`;
  if(!fs.existsSync(templateDir)) {
    fs.mkdirSync(templateDir);
    console.log(`📁Folder created: ${templateDir}`);    
  }   

  Object.entries(stack).forEach(([key, value]) => {
    fs.writeFileSync(`${templateDir}/${key}.json`, JSON.stringify(value));
  });

  gulp.src(`${templateDir}/*`)
  .pipe(replace(/%%nameSpace%%/g, nameSpace))
  .pipe(replace(/%%brand%%/g, brand))
  .pipe(replace(/%%environment%%/g, environment))
  .pipe(gulp.dest(`${templateDir}/`));
  
  cb();
};
export default buildAWSStack;