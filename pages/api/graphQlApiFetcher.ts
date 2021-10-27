import { GraphQLClient } from "graphql-request";

interface graphQlConfig {
  entity: string;
  query: string;
  plural?: boolean;
}

async function graphQlApiFetcher({
  entity,
  query,
  plural = false,
}: graphQlConfig) {
  const graphCmsLink = process.env.GRAPH_QL_LINK;
  if (!graphCmsLink) return null;

  const graphcms = new GraphQLClient(graphCmsLink);

  try {
    const data = await graphcms.request(query);
    console.log(data);
    return data[plural ? entity.concat("s") : entity];
  } catch (error) {
    return "error";
  }
}

export default graphQlApiFetcher;
