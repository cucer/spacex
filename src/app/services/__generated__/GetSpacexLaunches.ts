/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSpacexLaunches
// ====================================================

export interface GetSpacexLaunches_launches_launch_site {
  __typename: "LaunchSite";
  site_name: string | null;
  site_name_long: string | null;
}

export interface GetSpacexLaunches_launches_links {
  __typename: "LaunchLinks";
  article_link: string | null;
  video_link: string | null;
  wikipedia: string | null;
}

export interface GetSpacexLaunches_launches_rocket {
  __typename: "LaunchRocket";
  rocket_name: string | null;
  rocket_type: string | null;
}

export interface GetSpacexLaunches_launches {
  __typename: "Launch";
  details: string | null;
  id: string | null;
  launch_date_local: any | null;
  launch_site: GetSpacexLaunches_launches_launch_site | null;
  launch_success: boolean | null;
  launch_year: string | null;
  links: GetSpacexLaunches_launches_links | null;
  mission_name: string | null;
  rocket: GetSpacexLaunches_launches_rocket | null;
}

export interface GetSpacexLaunches {
  launches: (GetSpacexLaunches_launches | null)[] | null;
}

export interface GetSpacexLaunchesVariables {
  limit: number;
}
