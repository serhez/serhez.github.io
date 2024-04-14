// ~/types/index.d.ts

export { Link, Project, Paper };

declare global {
    type Link = {
        title: string;
        url: string;
        icon: string;
    };

    type Project = {
        title: string;
        description: string;
        links: Link[];
    };

    type Paper = {
        title: string;
        authors: string[];
        venue: string;
        abstract: string;
        links: Link[];
    };
}
