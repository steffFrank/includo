import ROUTES from "./routes";

export const sidebarLinks = [
    {
        label: "Home",
        route: ROUTES.HOME,
        imgURL: "icons/home.svg",
    },
    {
        label: "Corsi",
        route: ROUTES.COURSES,
        imgURL: "/icons/courses.svg",
    },
    {
        label: "Blog",
        route: ROUTES.BLOG,
        imgURL: "icons/newspaper.svg",
    },
    {
        label: "Testimonianze",
        route: ROUTES.TESTIMONIALS,
        imgURL: "icons/star.svg",
    },
    {
        label: "Contatti",
        route: ROUTES.CONTACT,
        imgURL: "icons/suitcase.svg",
    },

    {
        label: "Profile",
        route: ROUTES.PROFILE,
        imgURL: "icons/user.svg",
    },
];
