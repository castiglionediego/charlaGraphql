const { ApolloServer, gql } = require("apollo-server");
const adminConnector = require('../dataAccess/adminAxios');


const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  },
  {
    title: "El libro",
    author: "Autor del libro"
  }
];

const typeDefs = gql`
 
  type Book {
    title: String
    author: String
  }
 
  type AlertTypes {
    id: ID
    description: String
    source: String
  }

  type Query {
    books: [Book]
    alertTypes: [AlertTypes]
  }


`;

const resolvers = {
  Query: {
    books: () => books,
    alertTypes: () => getAlertTypes()
  }
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


getAlertTypes = async () => {
  const response = await adminConnector.get('/alertTypes');
  return response.data;
}