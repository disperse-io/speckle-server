/* eslint-disable no-restricted-imports */
import path from 'path'
import yargs from 'yargs'
import '../../bootstrap'
import { logger } from '@/logging/logging'

const execution = yargs
  .scriptName('yarn cli')
  .usage('$0 <cmd> [args]')
  .commandDir(path.resolve(__dirname, './commands'), { extensions: ['js', 'ts'] })
  .demandCommand()
  .fail((msg, err, yargs) => {
    if (!err) {
      // If validation error (no err instance) then just show help and show the message
      console.log(yargs.help())
      console.log('\n', msg)
    } else {
      // If actual app error occurred, show the msg, but don't show help info
      logger.error(err)
      console.log('\n', 'Specify --help for available options')
    }

    process.exit(1)
  })
  .help().argv

const promise = Promise.resolve(execution)
promise.then(() => {
  // weird TS typing issue
  yargs.exit(0, undefined as unknown as Error)
})
