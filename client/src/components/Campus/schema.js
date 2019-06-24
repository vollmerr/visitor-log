import { schema } from 'normalizr';

export const room = new schema.Entity('rooms');
export const rooms = [room];

// const areas = new schema.Entity('areas');

export const campus = new schema.Entity('campuses', { rooms });
export const campuses = [campus];
