module.exports = {
  paths: {
    "/": {
      get: {
        tags: ["Payment"],
        summary: "Renders initial page for payment",
        responses: {
          200: {
            description: "Successful response",
          },
        },
      },
    },
    "/payment/success": {
      get: {
        tags: ["Payment"],
        summary:
          "Used to handle the successful E-Sewa Payment for verfifying the payments to check whelther the transcation was fraud or not.",
        description: "Returns a JSON Object ",
        parameters: [
          {
            in: "query",
            name: "amt",
            type: "number",
            description: "Total Amount of money",
          },
          {
            in: "query",
            name: "rid",
            type: "string",
            description: "Reference id provided by e-sewa",
          },
          {
            in: "query",
            name: "pid",
            type: "string",
            description: "product id",
          },
          {
            in: "query",
            name: "scd",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Successful response",
          },
        },
      },
    },
    "/payment/failed": {
      get: {
        tags: ["Payment"],
        summary: "User is re-directed to page when transcation failed",
        description: "Returns String of message",
        responses: {
          200: {
            description: "Successful response",
          },
        },
      },
    },
  },
};
