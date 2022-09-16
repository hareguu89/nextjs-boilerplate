import type { AxiosResponse } from "axios";
import axios from "axios";
import type { Db, SortDirection, ObjectId } from "mongodb";
import { MongoClient } from "mongodb";
import type { IComments } from "pages/api/comments/[eventId]";
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

type Tdate = {
  year: number;
  month: number;
};

export const getFilteredEvents = async (dateFilter: Tdate) => {
  const { year, month } = dateFilter;

  const getEvents = await getAllEvents();

  const filteredEvents = getEvents.filter(event => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export const connectDatabase = async (collection: string) => {
  const client = await MongoClient.connect(
    `mongodb+srv://hareguu89:nextjs@cluster0.jpi0lwq.mongodb.net/${collection}?retryWrites=true&w=majority`,
  );

  return client;
};

interface IInsert {
  client: MongoClient | undefined;
  collection: string;
  data: IComments | { [key: string]: string };
}

export const insertDocument = async ({ client, collection, data }: IInsert) => {
  const db = client?.db();
  const response = await db?.collection(collection).insertOne(data);

  return response;
};

interface IDocument {
  db: Db;
  collection: string;
  sort: { [key: string]: SortDirection };
}
export const getAllDocument = async ({ db, collection, sort }: IDocument) => {
  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
};
