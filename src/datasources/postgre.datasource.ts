import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'postgre',
  connector: 'postgresql',
  url: '',
  host: '172.27.100.11',
  port: 5432,
  user: 'postgres',
  password: 'postgrs04postgrs04postgrs04postgrs04',
  database: 'prueba'
};


@lifeCycleObserver('datasource')
export class PostgreDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'postgre';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postgre', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
