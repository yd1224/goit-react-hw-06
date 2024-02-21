import { nanoid } from "nanoid";
export const addContact = (text) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      ...text,
    },
  };
};

export const deleteContact = (Id) => {
  return {
    type: "contacts/deleteContact",
    payload: Id,
  };
};

export const setInputValue = (value) => {
  return {
    type: "filters/setInputValue",
    payload: value,
  };
};
