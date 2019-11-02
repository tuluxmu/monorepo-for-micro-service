import fs from 'fs';
// import stackTemplates from '../packages/stack.template.js'

const buildPath = 'dist';

const buildAWSStackTemplate = (cb) => {
  console.log(`
    =buildAWSStackTemplate=
  `);
  // const templateDir = `${buildPath}/stackTeamplate`;
  // if(!fs.existsSync(templateDir)) {
  //   fs.mkdirSync(templateDir);
  //   console.log(`📁Folder created: ${templateDir}`);    
  // }   
  // Object.entries(stackTemplates).forEach(([key, value]) => {
  //   fs.writeFileSync(`${templateDir}/${key}.json`, JSON.stringify(value));
  // });
  cb();
};
export default buildAWSStackTemplate;