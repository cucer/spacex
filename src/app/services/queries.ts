import gql from "graphql-tag";

export const GET_SPACEX_LAUNCHES = gql`
  query GetSpacexLaunches($limit: Int!) {
    launches(limit: $limit) {
      details
      id
      launch_date_local
      launch_site {
        site_name
        site_name_long
      }
      launch_success
      launch_year
      links {
        article_link
        video_link
        wikipedia
      }
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;
