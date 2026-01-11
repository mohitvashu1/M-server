import axios from "axios";

const queries = {
  verifyGoogleToken: async (
    parent: any,
    { token }: { token: string }
  ) => {
    const googleOauthURL = new URL(
      "https://oauth2.googleapis.com/tokeninfo"
    );

    googleOauthURL.searchParams.set("id_token", token);

    const { data } = await axios.get(googleOauthURL.toString(), {
      responseType: "json",
    });

    console.log(data);

    return "OK";
  },
};

export const resolvers = { queries };
