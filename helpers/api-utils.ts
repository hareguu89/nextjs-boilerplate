import type { AxiosResponse } from "axios";
import axios from "axios";
import type { IDummy, IEvents } from "type";

export const getAllEvents = async () => {
  const { data } = await axios.get<AxiosResponse<IEvents>>(
    "https://nextjs-dummy-9be3f-default-rtdb.firebaseio.com/events.json",
  );

  const value = Object.entries(data);

  const values: IDummy[] = value.map(el => {
    return {
      id: el[0],
      ...el[1],
    };
  });

  return values;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();

  const returnValue = allEvents.filter(event => event.isFeatured);

  return returnValue;
};

export const getEventById = async (id: string | string[] | undefined) => {
  const allEvents = await getAllEvents();

  return allEvents.find(event => event.id === id);
};
