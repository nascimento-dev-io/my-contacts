class ContactMapper {
  toPersistence(domainContact) {
    return {
      id: domainContact.id,
    };
  }

  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export default new ContactMapper();
