class HomePage {
  getDataTable() {
    return cy.get("#charachters_table");
  }

  getDataTableSearchBar() {
    return cy.get("#table_toolbar__searchbar");
  }

  getCustomRowName(rowId: number) {
    return cy.get(`#row_${rowId}_name`);
  }
}

export default HomePage;
