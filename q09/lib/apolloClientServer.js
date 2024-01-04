//Use this for server components 

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-appsupport/rsc";
export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: "https://www.dnd5eapi.co/graphql",
            // you can disable result caching here if you want to
            // (this does not work if you are rendering your page with
            // `export const dynamic = "force-static"`)
            // fetchOptions: { cache: "no-store" },
        }),
    });
});

