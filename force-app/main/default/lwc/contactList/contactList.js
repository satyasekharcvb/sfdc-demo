import { LightningElement, wire } from "lwc";
import getContactsList from "@salesforce/apex/ContactsController.getContactsList";
export default class ContactList extends LightningElement {
  @wire(getContactsList)
  contacts;
}
