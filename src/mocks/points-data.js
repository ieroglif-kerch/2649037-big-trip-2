import { EVENTS_COUNT, DATA_DATES } from '../const.js';
import { getRandomNumber } from '../utils.js';
import { destinations } from './destination.js';

const points = [];

const lastDate = new Date(DATA_DATES.START);

const destinationIds = destinations.map((d) => d.id);

const point = (index) => {
  // задаем начальную дату
  const dateFrom = new Date(lastDate);

  // находим длительность и время между событиями
  const durationHours = getRandomNumber(0, DATA_DATES.DURATION_HOURS);
  const dateTo = new Date(lastDate);
  dateTo.setHours(dateTo.getHours() + durationHours);

  // записываем начало следующего события.
  lastDate.setDate(dateTo.getDate() + getRandomNumber(0, DATA_DATES.GAP));

  return {
    id: index,
    basePrice: getRandomNumber(),
    dateFrom: dateFrom.toISOString(),
    dateTo: dateTo.toISOString(),
    destination: destinationIds[getRandomNumber(0, destinationIds.length - 1)],
    isFavorite: Boolean(Math.round(Math.random()))
  };
};

const createPoints = () => {
  for (let i = 0; i < EVENTS_COUNT; i++) {
    points.push(point(i));
  }
};

export { createPoints };
