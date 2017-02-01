var menuItems = [
    {
        name: "Login",
        url: "/auth/login",
        viewable: ["anonymous"],
        children: []
    },
    {
        name: "Logout",
        url: "/auth/logout",
        viewable: ["user", "manager", "admin"],
        children: []
    },
    {
        name: "Dashboard",
        url: "/dashboard",
        viewable: ["user", "manager", "admin"],
        children: []
    },
    {
        name: "Articles",
        url: "",
        viewable: ["user", "manager", "admin"],
        children: [
            {
                name: "Feed",
                url: "/articles",
                viewable: ["user", "manager", "admin"],
                children: []
            },
            {
                name: "Published",
                url: "/articles/published",
                viewable: ["user", "manager", "admin"],
                children: []
            },
            {
                name: "Scheduled",
                url: "/articles/scheduled",
                viewable: ["user", "manager", "admin"],
                children: []
            },
            {
                name: "Pinned",
                url: "/articles/pinned",
                viewable: ["user", "manager", "admin"],
                children: []
            }
        ]
    },
    {
        name: "Reporting",
        url: "/reporting",
        viewable: ["manager", "admin"],
        children: []
    },
    {
        name: "Administration",
        url: "",
        viewable: ["manager", "admin"],
        children: [
            {
                name: "Local Users",
                url: "/app/users/index",
                viewable: ["manager", "admin"],
                children: []
            }
        ]
    }
];

module.exports = menuItems;