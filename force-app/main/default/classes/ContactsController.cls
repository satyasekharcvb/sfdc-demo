public with sharing class ContactsController {
    @AuraEnabled
    public static List<Contact> getContactsList(){
        return [SELECT Name FROM Contact];
    }
}
