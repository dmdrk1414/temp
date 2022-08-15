import { useState } from 'react';
import '../scss/main.scss';

function Ariticle() {
    const jsonData = require('../json/article.json');
    const jsonArray = jsonData.article[0];
    // eslint-disable-next-line
    const [article, setArticle] = useState([jsonArray.title, jsonArray.reporter, jsonArray.contents, jsonArray.copyright]);

    return (
        <div>
            {/* <!-- article body --> */}
            <div className="article-container">
                <div className="article article_title">{article[0]}</div>
                <div className="article article_reporter">{article[1]}</div>
                <div className="article article_contents">{article[2]}</div>
                <div className="article article_source">{article[3]}</div>
            </div>
        </div>
    );
}

export default Ariticle;
