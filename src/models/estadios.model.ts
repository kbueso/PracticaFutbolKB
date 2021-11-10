import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Estadios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  ubicacion: string;


  @property({
    type: 'number',
    required: true,
  })
  capacidad: number;

  @property({
    type: 'string',
    required: true,
  })
  pais: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Estadios>) {
    super(data);
  }
}

export interface EstadiosRelations {
  // describe navigational properties here
}

export type EstadiosWithRelations = Estadios & EstadiosRelations;
