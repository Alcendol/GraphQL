const {graphql, buildschema} = require("graphql")

var schema = buildschema(`
  type Query {
    hello; String
  }
`)

var rootValue = {
  hello: () => {
    return "Hello world"
  }
}

graphql({
  schema,
  source: "{hello}",
  rootValue,
}).then(response => {console.log(response)})
