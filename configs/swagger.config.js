const { paths } = require("../docs/swagger");

const swaggerOptions = {
  definition: {
    info: {
      title: "E-Sewa Implementation Documentation",
      description:
        "Provides all sort of extra information about the E-Sewa Implementation Project",
      contact: {
        name: "Roshan Paudel",
      },
      servers: [{ url: "https://localhost:8085" }],
    },
    paths: paths,
  },
  apis: ["./controllers/*.js"],
};

module.exports = swaggerOptions;
