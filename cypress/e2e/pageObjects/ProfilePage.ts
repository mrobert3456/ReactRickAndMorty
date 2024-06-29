class ProfilePage {
  getBackNavButton() {
    return cy.get("#back_navigation__button");
  }

  getHomeBreadcrumbLink() {
    return cy.get("#breadcrumb__home__link");
  }
}

export default ProfilePage;
