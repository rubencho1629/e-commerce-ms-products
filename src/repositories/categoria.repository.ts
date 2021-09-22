import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgreDataSource} from '../datasources';
import {Categoria, CategoriaRelations} from '../models';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.id,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
