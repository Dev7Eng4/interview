import React, { useContext, useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface Props {
  children: React.ReactNode;
}

interface Contact {
  id: string;
  name: string;
}

const ContactsContext = React.createContext({
  contacts: [{ id: '1', name: 'name' }],
  createContact: (id: string, name: string) => {},
});

export function useContacts() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ children }: Props) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  // const [contacts, setContacts] = useLocalStorage('contacts', []);

  function createContact(id: string, name: string) {
    setContacts((prev) => {
      return [...prev, { id, name }];
    });
  }

  const value = useMemo(
    () => ({
      contacts,
      createContact,
    }),
    [contacts, createContact]
  );

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
}
