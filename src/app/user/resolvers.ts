
export const resolvers = {
  queries: {
    verifyGoogleToken: async (_: any, { token }: { token: string }) => {
      return token;
    },
  },
};
