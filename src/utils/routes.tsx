import { TopNavItem } from "remote_a/top_navigation";

export default (baseName: string): TopNavItem[] => [
  {
    path: `${baseName}`,
    title: "Remote B",
  },
  {
    path: `${baseName}about`,
    title: "About",
  },
];
