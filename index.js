const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const connection = require('./connection');
const userRouter = require('./user');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* 🔽 ADD THIS SWAGGER CONFIGURATION */

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CMS API",
      version: "1.0.0",
      description: "CMS Backend API Documentation",
    },
  },
  apis: ["./user.js"], // change if your routes are in another folder
};

const swaggerSpec = swaggerJsdoc(options);

/* 🔼 END SWAGGER CONFIG */

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/user', userRouter);

module.exports = app;
