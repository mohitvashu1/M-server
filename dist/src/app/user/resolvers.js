export const resolvers = {
    queries: {
        verifyGoogleToken: async (_, { token }) => {
            return token;
        },
    },
};
//# sourceMappingURL=resolvers.js.map