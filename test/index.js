/* eslint-disable global-require */
const { dbBuild, dbFakeData } = require('../server/database/config/db_build');

dbBuild()
  .then(dbFakeData)
  .then(() => require('./getMembers'))
  .then(() => require('./postOfferTypeOfferTest'))
  .then(() => require('./loginTest'))
  .then(() => require('./postSkill'))
  .then(() => require('./insertOfferRoute'))
  .then(() => require('./getMemberSkills'))
  .then(() => require('./getOffersRoute'))
  .then(() => require('./getMyApplication'))
  .then(() => require('./getMyApplications'))
  .then(() => require('./saved-offer-test'))
  .then(() => require('./getSavedOfferTest'))
  .then(() => require('./getOfferApplications'))
  .then(() => require('./getSkills'))
  .then(() => require('./getFilterRoute'))
  .then(() => require('./getMyOffersTest'))
  .then(() => require('./addHiredMember'))
  .then(() => require('./getOfferTypeTest'))
  .then(() => require('./addMember'))
  .then(() => require('./patchHiredMember'))
  .then(() => require('./getOfferId'))
  .then(() => require('./addApplication'))
  .then(() => require('./patchFilter'))
  .then(() => require('./getMyOffersTest'))
  .then(() => require('./deleteSavedOffer'))
  .then(() => require('./deleteOffer'))
  .then(() => require('./profiletest/addEducation'))
  .then(() => require('./profiletest/addExperience'))
  .then(() => require('./profiletest/deleteEducation'))
  .then(() => require('./profiletest/deleteExperience'))
  .then(() => require('./profiletest/getMember'))
  .then(() => require('./profiletest/getMemberEducation'))
  .then(() => require('./profiletest/getExperiences'))
  .then(() => require('./logout-controller'))
  .catch(err => console.log(err));
