import { schema } from 'normalizr';

export const room = new schema.Entity('rooms');
export const rooms = [room];

export const accessArea = new schema.Entity('accessAreas');
export const accessAreas = [accessArea];

export const campus = new schema.Entity('campuses', { rooms, accessAreas });
export const campuses = [campus];
