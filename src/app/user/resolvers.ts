


const queries = {
  queries: {
    verifyGoogleToken: async (_: any, { token }: { token: string }) => {
      return token;
    },
  },
};


export const resolvers={queries}