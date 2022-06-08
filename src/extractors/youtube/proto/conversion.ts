import { searchFilter } from "../types";

const duration: { [key in searchFilter["duration"]]: number | null } = {
  all: null,
  short: 1,
  long: 2,
  medium: 3,
};

const order: { [key in searchFilter["order"]]: number | null } = {
  relevance: 0,
  rating: 1,
  uploadDate: 2,
  viewCount: 3,
};

const type: { [key in searchFilter["type"]]: number | null } = {
  all: null,
  video: 1,
  channel: 2,
  playlist: 3,
};

const uploadDate: { [key in searchFilter["uploadDate"]]: number | null } = {
  all: null,
  hour: 1,
  day: 2,
  week: 3,
  month: 4,
  year: 5,
};

export { duration, order, type, uploadDate };
