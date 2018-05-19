// code from https://github.com/IonicaBizau/scrape-it

const scrapeIt = require("scrape-it");

// Promise interface
scrapeIt("https://zhihu.com/search?type=content&q=钓鱼", {
    title: ".header h1"
    , desc: ".header h2"
    , avatar: {
        selector: ".header img"
        , attr: "src"
    }
}).then(page => {
    console.log(page);
});

// Callback interface
scrapeIt("https://www.zhihu.com/search?type=content&q=%E9%92%93%E9%B1%BC", {
        // Fetch the articles
        articles: {
            listItem: ".item"
            , data: {

                // Get the article date and convert it into a Date object
                createdAt: {
                    selector: ".date"
                    , convert: x => new Date(x)
            }

            // Get the title
            , title: ".title"

            // Nested list
            , tags: {
                listItem: ".tags > span"
            }

            // Get the content
            , content: {
                selector: ".entry-content"
                , how: "html"
            }
        }
    }

    // Fetch the blog pages
    , pages: {
    listItem: "li.page"
        , name: "pages"
        , data: {
        title: "a"
            , url: {
            selector: "a"
                , attr: "href"
        }
    }
}

// Fetch some other data from the page
, title: ".header h1"
    , desc: ".header h2"
    , avatar: {
    selector: ".header img"
        , attr: "src"
}
}, (err, page) => {
    console.log(err || page);
});