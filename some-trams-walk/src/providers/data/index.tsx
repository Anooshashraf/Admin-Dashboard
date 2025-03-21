import graphqlDataProvider, {
  GraphQLClient,
  liveProvider as graphqlLiveProvider,
} from "@refinedev/nestjs-query";
import { fetchWrapper } from "./fetch-wrapper";
import { createClient } from "graphql-ws";

import { url } from "inspector";

export const API_URL = "https://api.crm.refine.dev";
export const WS_Client = "wss://api.crm.refine.dev/graphql";
export const API_BASE_URL = "https://api.crm.refine.dev";

export const client = new GraphQLClient(API_URL, {
  fetch: (url: string, options: RequestInit) => {
    try {
      return fetchWrapper(url, options);
    } catch (error) {
      return Promise.reject(error as Error);
    }
  },
});

export const wsClient =
  typeof window !== "undefined"
    ? createClient({
        url: WS_Client,
        connectionParams: () => {
          const accessToken = localStorage.getItem("access_token");
          return {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };
        },
      })
    : undefined;

export const dataProvider = graphqlDataProvider(client); // this is a function that takes a client and returns a data provider for refine to use
export const liveProvider = wsClient
  ? graphqlLiveProvider(wsClient)
  : undefined; // in this live provider we pass our web socket client
