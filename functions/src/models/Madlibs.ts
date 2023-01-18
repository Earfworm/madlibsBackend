import { ObjectId } from "mongodb";

export default interface Madlibs {
  _id?: ObjectId;
  name: string;
  story: string;
}
