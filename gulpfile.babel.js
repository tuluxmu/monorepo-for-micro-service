import {
  task
} from 'gulp';
import buildAWSStack from './GulpTask/buildAWSStack';

task(buildAWSStack);

exports = {
  buildAWSStack,
}
