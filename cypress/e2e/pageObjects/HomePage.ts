class HomePage {
  getDataTable() {
    return cy.get("#charachters_table");
  }

  getDataTableSearchBar() {
    return cy.get("#table_toolbar__searchbar");
  }

  getCustomRowName(rowId: number) {
    return cy.get(`#row${rowId}-cell_1_name > a`);
  }

  getNextPageButton() {
    return cy.get("#next_page__button");
  }

  getPrevPageButton() {
    return cy.get("#prev_page__button");
  }
}

export default HomePage;
