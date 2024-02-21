import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
const getVisibleContacts = (contacts, inputValue) => {
  return contacts.filter((contact) => {
    const nameWords = contact.name.toLowerCase();
    const searchTermArray = inputValue.toLowerCase().split(" ");
    if (
      searchTermArray.every(
        (word) =>
          nameWords.split(" ").includes(word) ||
          nameWords.split(" ").some((a) => a.startsWith(word))
      )
    ) {
      return true;
    }
  });
};

export const ContactList = ({ onDelete }) => {
  const contacts = useSelector((state) => state.contacts.items);
  console.log(contacts);
  const inputValue = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, inputValue);
  return (
    <ul>
      {visibleContacts.map((contact) => {
        return (
          <li className={css.list} key={contact.id}>
            <Contact user={contact} onDelete={onDelete} />
          </li>
        );
      })}{" "}
    </ul>
  );
};
