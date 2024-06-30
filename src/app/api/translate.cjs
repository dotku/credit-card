const { translate } = require("google-translate-api-browser");

translate("Je ne mangé pas six jours", { to: "en" })
  .then((res) => {
    // I do not eat six days
    console.log(res.text);
  })
  .catch((err) => {
    console.error(err);
  });
