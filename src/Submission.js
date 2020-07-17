//firebase db
import { db } from "./firebase.js";

export const MessageForm = (form) => {
  db.collection("messages").add(form); // update
};
