var xhr = new XMLHttpRequest();
var url = './news_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
var news_articles = xhr.response.articles;
var newsArticlesDiv = document.getElementById('news_articles');


  news_articles.forEach(function(article) {
      var newsArticleDiv = document.createElement('div');
      newsArticleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      newsArticleDiv.appendChild(title);
      newsArticleDiv.appendChild(description);
      newsArticleDiv.appendChild(waysHeader);
      newsArticleDiv.appendChild(waysList);
      newsArticleDiv.appendChild(benefitsHeader);
      newsArticleDiv.appendChild(benefitsList);

      newsArticlesDiv.appendChild(newsArticleDiv);
    });

    var newsArticleDiv = document.createElement('div');
    newsArticleDiv.classList.add('article');
    newsArticleDiv.appendChild(title);
}
    xhr.send();