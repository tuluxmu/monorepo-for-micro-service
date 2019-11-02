import fs from 'fs';
import stack from '../packages/stack.entry'

const buildPath = 'dist';

const buildAWSStack = (cb) => {
  const templateDir = `${buildPath}/stack`;
  if(!fs.existsSync(templateDir)) {
    fs.mkdirSync(templateDir);
    console.log(`📁Folder created: ${templateDir}`);    
  }   
  Object.entries(stack).forEach(([key, value]) => {
    fs.writeFileSync(`${templateDir}/${key}.json`, JSON.stringify(value));
  });
  cb();
};
export default buildAWSStack;