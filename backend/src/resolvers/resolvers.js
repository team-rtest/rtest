export default {
  /*
  Resolvers are structured as follows
  resolver: async(root, args, context, info) => {
    // do something
  }

  info is probably useless for most of your needs
  */
  Query: {
    hello: () => "hi",
  },
};
