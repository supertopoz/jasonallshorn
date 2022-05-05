const renderPortfolio = (data) => {
  $('.portfolio').empty();


  let html = ""
  let tabs = {
      "programming": "",
      "analytics": "",
      "author": ""
  }
  portfolioData.forEach((item) =>{

  let url = '';
    if(item.url){
     url =  `
        <a href=" ${item.url}" target="_blank" rel="noopener">
          <span class="link-button">Site</span>
        </a>
      `
    }
  tabs[item.tab] += `
    <div class="portfolio-item">
      <div class="card">
        <img class="card-image"  alt="website image" src="${item.image}"/>
      </div>
      <h1>${item.title}</h1>
      <p>${item.stack}</p>
      <div>
        <a href="${item.repo}" target="_blank" rel="noopener">
        <span class="link-button">More</span>
        </a>
        ${url}
      </div>
    </div>
     `
  })
    document.getElementById('portfolio-programming').innerHTML = tabs.programming;
    document.getElementById('portfolio-analytics').innerHTML = tabs.analytics;
    document.getElementById('portfolio-author').innerHTML = tabs.author;
}
$(document).ready(() => {
	renderPortfolio();
})

function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}
