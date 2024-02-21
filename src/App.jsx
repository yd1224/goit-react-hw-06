import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactForm } from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
      {/* <select name="payment"
             value={paymentMethod} onChange={evt => {
        setpaymentMethod(evt.target.value);
      }}
   >
        <option value="apple">Apple</option>
        <option value="visa">Visa</option>
            <option value="cash">Cash</option>
      </select> */}
    </div>
  );
}

export default App;
