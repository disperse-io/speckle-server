import knex from '@/db/knex'
import { logger } from '@/logging/logging'
import { CommandModule } from 'yargs'

const command: CommandModule = {
  command: 'up',
  describe: 'Run next migration that has not yet been run',
  async handler() {
    logger.info('Running next migration...')
    await knex.migrate.up()
    logger.info('Completed running next migration')
  }
}

export = command
