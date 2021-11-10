import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Encuentros extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaJuego: string;

  @property({
    type: 'string',
    required: true,
  })
  quienJugo: string;

  @property({
    type: 'string',
    required: true,
  })
  quienGano: string;

  @property({
    type: 'string',
    required: true,
  })
  estadio: string;

  @property({
    type: 'number',
    required: true,
  })
  puntajeGanador: number;

  @property({
    type: 'number',
    required: true,
  })
  puntajePerdedor: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Encuentros>) {
    super(data);
  }
}

export interface EncuentrosRelations {
  // describe navigational properties here
}

export type EncuentrosWithRelations = Encuentros & EncuentrosRelations;

