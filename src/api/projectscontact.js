import instance from "./config";

const getContacts = () => {
    return instance.get(`/contacts`);
};
const getContact = (id) => {
    return instance.get(`/contacts/${id}`);
};
const addContact = (contact) => {
    return instance.post(`/contacts`, contact);
};
const deleteContact = (id) => {
    return instance.delete(`/contacts/${id}`);
};
const updateContact = (contact) => {
    return instance.put(`/contacts/${contact.id}`, contact);
};
export { getContacts, getContact, addContact, deleteContact, updateContact };