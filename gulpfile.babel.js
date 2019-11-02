import {
  task
} from 'gulp';
import buildAWSStackTemplate from './GulpTask/buildAWSStackTemplate';
import buildAWSStack from './GulpTask/buildAWSStack';
import buildLambda from './GulpTask/buildLambda';

task(buildAWSStackTemplate);
task(buildAWSStack);
task(buildLambda);

exports = {
  buildAWSStackTemplate,
  buildAWSStack,
  buildLambda
}
