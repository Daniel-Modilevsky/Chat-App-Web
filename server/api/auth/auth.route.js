const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
// const swaggerJsDoc = require('swagger-jsdoc');
// router.get('/api-docs', swaggerUi.setup(swaggerJsDoc));

const { signup, login, getAllUsers } = require("./auth.controller");
const {
  inputExistRegister,
  inputExistLogin,
  inputValidationRegister,
  inputValidationLogin,
} = require("./auth.middleware");

/**
 * @swagger
 * /api/signup:
 *   post:
 *     parameters:
 *      - in: body
 *        name: User
 *        description: New User
 *        schema:
 *          type: object
 *          properties:
 *            userName:
 *              type: string
 *            password:
 *              type: string
 *            picture:
 *              type: string
 *     responses:
 *       200:
 *         description: Created
 */
router.post("/api/signup", inputExistRegister, inputValidationRegister, signup);

/**
 * @swagger
 * /api/login:
 *   post:
 *     parameters:
 *      - in: body
 *        name: User
 *        description: Confirm User
 *        schema:
 *          type: object
 *          properties:
 *            userName:
 *              type: string
 *            password:
 *              type: string
 *     responses:
 *       200:
 *         description: Loged in
 */
router.post("/api/login", inputExistLogin, inputValidationLogin, login);

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: get all users
 *     responses:
 *       200:
 *         description: Returns users
 */
router.get("/api/users/", getAllUsers);

module.exports = router;
