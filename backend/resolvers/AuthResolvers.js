const authResolvers = {
    // https://jkettmann.com/password-based-authentication-with-graphql-and-passport/
    Query: {
      currentUser: (parent, args, context) => context.getUser(),
    },
    Mutation: {
      logout: (parent, args, context) => context.logout(),
      login: async (parent, { email, password }, context) => {
        const { user } = await context.authenticate('graphql-local', { email, password });
        await context.login(user);
        return { user }
      },
      signup(firstName: String, lastName: String, email: String, password: String): AuthPayload
    },
  };
  
export default authResolvers;


    