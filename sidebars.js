/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      collapsible: false,
      className: "no-indent",
      items: [
        "getting-started/installation"
      ],
    },
    {
      type: "category",
      label: "Using Yuvomi",
      collapsible: false,
      className: "no-indent",
      items: [
        "usage/first-steps",
        "usage/dashboard",
        {
          type: "category",
          label: "Modules",
          link: {
            type: "doc",
            id: "usage/modules/index",
          },
          collapsible: true,
          items: [
            {
              type: "category",
              label: "Plan",
              collapsible: false,
              className: "no-indent",
              items: [
                "usage/modules/calendar",
                "usage/modules/tasks",
                "usage/modules/notes",
              ]
            },
            {
              type: "category",
              label: "Household",
              collapsible: false,
              className: "no-indent",
              items: [
                "usage/modules/documents",
                "usage/modules/inventory",
                "usage/modules/rewards",
                {
                  type: "category",
                  label: "Kitchen",
                  collapsible: true,
                  // className: "no-indent",
                  link: {
                    type: "doc",
                    id: "usage/modules/meals",
                  },
                  items: [
                    "usage/modules/meals",
                    "usage/modules/recipes",
                    "usage/modules/shopping",
                    "usage/modules/pantry",
                  ]
                },
                "usage/modules/housekeeping",
              ]
            },
            {
              type: "category",
              label: "People",
              collapsible: false,
              className: "no-indent",
              items: [
                "usage/modules/contacts",
                "usage/modules/birthdays",
                "usage/modules/health",
              ]
            },
            {
              type: "category",
              label: "Finances",
              collapsible: false,
              className: "no-indent",
              items: [
                "usage/modules/budget",
              ]
            },
            {
              type: "category",
              label: "Others",
              collapsible: false,
              className: "no-indent",
              items: [
                "usage/modules/family",
                "usage/modules/reminders",
                "usage/modules/api-tokens",
                "usage/modules/backup",
              ]
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Help & Support",
      collapsible: false,
      className: "no-indent",
      items: [
        "help-support/support",
        "help-support/faq",
        "help-support/troubleshooting"
      ],
    },
  ],
};

module.exports = sidebars;
