module.exports = {
  component: require("./formGenerator.vue"),
  schema: require("./utils/schema.js"),
  validators: require("./utils/validators.js"),
  abstractField: require("./fields/abstractField").default
}
