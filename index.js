document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: null, name: "ETF Daily News" },
                author: "MarketBeat News",
                title: "Tesla (NASDAQ:TSLA) Shares Down 0.3%",
                description: "Tesla, Inc. (NASDAQ:TSLA – Get Free Report) shares were down 0.3% during mid-day trading on Monday . The stock traded as low as $258.10 and last traded at $259.71. Approximately 25,611,697 shares were traded during trading, a decline of 73% from the average d…",
                url: "https://www.etfdailynews.com/2024/09/30/tesla-nasdaqtsla-shares-down-0-3/",
                urlToImage: "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                publishedAt: "2024-09-30T20:56:17Z",
                content: "Tesla, Inc. (NASDAQ:TSLA – Get Free Report) shares were down 0.3% during mid-day trading on Monday . The stock traded as low as $258.10 and last traded at $259.71. Approximately 25,611,697 shares wer… [+5530 chars]"
            },
            {
                source: { id: null, name: "Hollywood Life" },
                author: "Hollywood Life Staff",
                title: "From Red Carpets to Car Lots: How Celebrities Choose and Protect Their Luxury Cars",
                description: "Stars: they’re just like us, especially when it comes to the road. While the image of celebrity lifestyle tends to be one of glamour, it’s not always the case, especially not in heavily-congested traffic, where an A-lister in a Mercedes is as likely as the av…",
                url: "https://hollywoodlife.com/2024/09/30/how-celebs-choose-and-protect-luxury-cars/",
                urlToImage: "https://hollywoodlife.com/wp-content/uploads/2024/09/Screenshot-2024-09-30-at-4.38.29 PM-e1727728731581.png?fit=1244%2C702",
                publishedAt: "2024-09-30T20:41:42Z",
                content: "Image Credit: mali maeder from Pexels\r\nStars: theyre just like us, especially when it comes to the road. While the image of celebrity lifestyle tends to be one of glamour, its not always the case, es… [+3107 chars]"
            },
            {
                source: { id: null, name: "Investor's Business Daily" },
                author: "Investor's Business Daily",
                title: "Nvidia Stock Slips As China Tells Companies Not To Buy Its Chips",
                description: "The AI chip leader tested a key level, while peers also fell slightly.",
                url: "https://www.investors.com/news/technology/nvidia-stock-nvda-china-chips-restrictions/",
                urlToImage: "https://www.investors.com/wp-content/uploads/2024/02/Stock-Nvidia-Voyager-02-company.jpg",
                publishedAt: "2024-09-30T20:30:01Z",
                content: "Nvidia (NVDA) fell before bouncing back Monday, testing its 21-day line as China reportedly urges local companies not to buy its chips. Nvidia stock faces potentially bigger hurdles in China after Bl… [+1826 chars]"
            },
            {
                source: { id: "next-big-future", name: "Next Big Future" },
                author: "Brian Wang",
                title: "Tesla China Megapack Factory is Over Twice As Big as Expected",
                description: "I, Brian Wang, noticed that an aerial view of the Tesla China Megapack factory was revealing a building that is over the twice the size of the Lathrop California Tesla Megapack factory. I had a discussion with Bradford Ferguson of Rebellionaire who has visite…",
                url: "https://www.nextbigfuture.com/2024/09/tesla-china-megapack-factory-is-over-twice-as-big-as-expected.html",
                urlToImage: "https://nextbigfuture.s3.amazonaws.com/uploads/2024/09/Screenshot-2024-09-30-at-12.46.39-PM.jpg",
                publishedAt: "2024-09-30T20:19:33Z",
                content: "I, Brian Wang, noticed that an aerial view of the Tesla China Megapack factory was revealing a building that is over the twice the size of the Lathrop California Tesla Megapack factory.\r\nI had a disc… [+1661 chars]"
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);
});
