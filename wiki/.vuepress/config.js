const path = require("path")
const ogPrefix = "og: http://ogp.me/ns#";

/**
 * Creates a Sidebar
 * @param {string} title Name of the Sidebar
 * @param {bool} collapsable  Is the Sidebar collapsable?
 * @param  {...string} children Sidebars children
 */
function createSideBar(title, collapsable, ...children) {
    return [{
        title,
        collapsable,
        children
    }]
}

module.exports = {
    head: [
        ["link", {
            rel: "icon",
            href: "@images/logo.png"
        }],
        ['meta', [
            // { name: "theme-color", content: "#2196f3" },
            // { name: 'theme-color', content: "#121212" },
            { prefix: ogPrefix, name: "og:title", content: "MTFO Wiki" },
            { prefix: ogPrefix, name: "og:description", content: "The Offical GTFO Modding Community Wiki" },
            { prefix: ogPrefix, name: "og:image", content: "@images/logo.png" },
            { prefix: ogPrefix, name: "og:image:width", content: "254" },
            { prefix: ogPrefix, name: "og:image:height", content: "254" },
            // { name: "og:type", content: "website" }
        ]]
    ],
    locales: {
        "/": {
            lang: "en-US",
            title: "MTFO Wiki",
        },
        // "/fr/": {
        //     lang: "fr-FR",
        //     title: "MTFO Wiki"
        // },
        // "/de/": {
        //     lang: "de-DE",
        //     title: "MTFO Wiki"
        // }
    },
    markdown: {
        extendMarkdown: md => md.use(require('markdown-it-task-lists')),
        lineNumbers: false,
        // toc: { 
        //     includeLevel: [1, 2, 3]
        // }
    },
    theme: "yuu",
    themeConfig: {
        yuu: {
            defaultColorTheme: "red",
            disableThemeIgnore: true,
            labels: {
                darkTheme: "Dark theme",
                ignoreThemes: "Ignore themes"
            }
        },

        repo: "GTFO-Modding/Wiki",
        docsDir: "docs",
        editLinks: true,

        // logo: "./logo.png",
        smoothScroll: true,
        displayAllHeaders: false,
        activeHeaderLinks: false,

        locales: {
            "/": {
                selectText: "Language",
                label: "English",
                ariaLabel: "Language",
                editLinkText: "Help improve this page!",
                lastUpdated: "Last Updated",
                nav: [{
                        text: "Home",
                        ariaLabel: "Home",
                        link: "/"
                    },
                    // {
                    //     text: "Beginners Guide",
                    //     ariaLabel: "Getting Setup",
                    //     link: "/guides/beginners/setting-up-bepinex"
                    // },
                    {
                        text: "Guides",
                        ariaLabel: "Guides",
                        items: [
                            {
                                text: "Beginners Guide",
                                link: "/beginners-guide/"
                            },
                            {
                                text: "Creating Rundowns",
                                link: "/creating-rundowns/"
                            },
                            {
                                text: "Creating Plugins",
                                link: "/creating-plugins/"
                            }
                        ]
                    },
                    {
                        text: "Discord",
                        ariaLabel: "Discord",
                        link: "https://discord.com/invite/rRMPtv4FAh"
                    }
                ],
                // sidebar: {
                //     "/community/": [
                //         {
                //             title: "Community",
                //             collapsable: false,
                //             // sidebarDepth: 1,
                //             children: [
                //                 "guidelines",
                //                 "getting-featured"
                //             ]
                //         }
                //     ],
                //     "/guides/": [
                //         {
                //             title: "Guides",
                //             collapsable: false,
                //             // sidebarDepth: 1,
                //             children: [
                //                 {
                //                     title: "Getting Started",
                //                     collapsable: true,
                //                     children: [
                //                         "beginners/setting-up-bepinex",
                //                         "beginners/installing-rundowns",
                //                     ]
                //                 },
                //                 {
                //                     title: "Developers",
                //                     collapsable: true,
                //                     children: [
                //                         "developers/creating-rundowns",
                //                         "developers/creating-plugins"
                //                     ]
                //                 }
                //             ]
                //         }
                //     ],
                //     "/docs/": [
                //         {
                //             title: "Documentation",
                //             collapsable: false,
                //             // sidebarDepth: 1,
                //             children: [
                //                 {
                //                     title: "Datablocks",
                //                     collapsable: true,
                //                     initialOpenGroupIndex: -1,
                //                     sidebarDepth: -1,
                //                     children: [
                //                         {
                //                             title: "Datas",
                //                             collapsable: true,
                //                             sidebarDepth: -1,
                //                             initialOpenGroupIndex: -1,
                //                             children: [
                //                                 "datablocks/datas/model-data",
                //                                 "datablocks/datas/linked-slave-model-data",
                //                                 "datablocks/datas/min-max-value",
                //                                 "datablocks/datas/health-data",
                //                                 "datablocks/datas/expedition-in-tier",
                //                                 "datablocks/datas/layer-data",
                //                                 "datablocks/datas/local-zone-index"
                //                             ]
                //                         },
                //                         "datablocks/rundown",
                //                         "datablocks/level-layout",
                //                         "datablocks/player-offline-gear",
                //                         "datablocks/enemy",
                //                         "datablocks/enemy-detection",
                //                         "datablocks/enemy-balancing",
                //                         "datablocks/enemy-movement",
                //                         "datablocks/enemy-behavior",
                //                         "datablocks/enemy-population",
                //                     ]
                //                 }
                //             ]
                //         },
                //     ],
                //     "/": [
                //         ""
                //     ]
                // }
            },
            "/fr/": {
                selectText: "Langue",
                label: "Français",
                ariaLabel: "Langue",
                editLinkText: "Aidez à améliorer cette page !",
                lastUpdated: "Dernière mise à jour",
                nav: [

                ],
                sidebar: {

                }
            },
            "/de/": {
                selectText: "",
                label: "",
                ariaLabel: "",
                editLinkText: "",
                lastUpdated: "",
                nav: [

                ],
                sidebar: {

                }
            }
        }
    },
    plugins: [
        "vuepress-plugin-smooth-scroll",
        "@vuepress/nprogress",
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ["@vuepress/last-updated", {
            transformer: timestamp => require('dateformat')(timestamp, 'yyyy/mm/dd hh:MM:ss TT')
        }],
        ['@vuepress/medium-zoom', {
            options: {
                margin: 8,
                background: '#21253073',
            },
        }],
        ["container", {
            type: "feature",
            before: info => `<div class="feature"><h2>${info}</h2>`,
            after: "</div>",
        }],
        ['container', {
            type: "param",
            before: `<div class="block">`,
            after: "</div>",
        }],
        ["named-chunks", {
            pageChunkName: ({
                key
            }) => `page${key.slice(1)}`,
            layoutChunkName: ({
                componentName
            }) => `layout-${componentName}`,
        }],
        // Still need to configure this! https://github.com/lorisleiva/vuepress-plugin-seo
        ["seo", {

        }]
        ["sitemap", {
            hostname: "https://wiki.mtfo.dev"
        }]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@images': path.resolve(__dirname, '../.assets/images'),
            },
        },
    },
}
