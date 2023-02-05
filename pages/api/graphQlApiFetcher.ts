import { GraphQLClient } from "graphql-request";

interface graphQlConfig {
  entity: string;
  query: string;
  plural?: boolean;
}

async function graphQlApiFetcher({ entity, query, plural = false }: graphQlConfig) {
  const graphCmsLink = process.env.GRAPH_QL_LINK;
  if (!graphCmsLink) return null;

  const graphcms = new GraphQLClient(graphCmsLink);
  const data = await graphcms.request(query);
  return data[plural ? entity.concat("s") : entity];
}

export default graphQlApiFetcher;
