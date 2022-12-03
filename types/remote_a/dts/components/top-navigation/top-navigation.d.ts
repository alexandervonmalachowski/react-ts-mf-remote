/// <reference types="react" />
export type TopNavItem = {
    path: string;
    title: string;
};
type TopNavigationProps = {
    routes: TopNavItem[];
};
export declare const TopNavigation: ({ routes }: TopNavigationProps) => JSX.Element;
export {};
