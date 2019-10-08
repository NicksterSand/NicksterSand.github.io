$.getJSON("https://api.github.com/users/nickstersand/repos", function(data){
    for(var i = 0; i < data.length; i++) {
        var langImg;
        var altText = data[i].language;
        if(data[i].language == "C"){
            langImg = "c.png";
        }else if(data[i].language == "C++"){
            langImg = "cpp.png";
        }else if(data[i].language == "Python"){
            langImg = "python.png";
        }else if(data[i].language == "HTML") {
            langImg = "html.png";
        }else if(data[i].language == "JavaScript"){
            langImg = "javascript.png";
        }else if(data[i].language == null){
            langImg = "none.png";
            altText="";
        }else{
            langImg = "none.png";
        }

        $("#projects").append(`<a href="${data[i].html_url}"><div>
            ${langImg != "none.png"?'<img class="langImg" src="' + langImg + '"><h3>'+data[i].name+'</h3>':'<h3>'+data[i].name+'</h3><p class="altText">'+altText+'</p>'}
            <p>${data[i].description}</p>
         </div></a>`);

    }
});