// KrazyStars API v1.0 - Documentation
// http://krazywoman.com/krazystars/


// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE
    // Call API
    
    Math.random() < 0.5 ? gender = "m" : gender = "f";

    display_info(gender);

}

function display_info(gender) {
    
    let url = "http://krazywoman.com/krazystars/api/star/search.php?g=m";
    document.getElementById("male_button").disabled = true;
    document.getElementById("female_button").disabled = false;

    if (gender == 'f') {
        url = "http://krazywoman.com/krazystars/api/star/search.php?g=f";
        document.getElementById("male_button").disabled = false;
        document.getElementById("female_button").disabled = true;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            const response = JSON.parse(xhr.responseText);
            const stars = response.records;

            let i = 1;

            for (const star of stars) {

                if (star.id <= 3) {

                    const wiki = document.getElementById(`wiki${star.id}`);
                    wiki.setAttribute("href", `${star.wikipedia_url}`);
                    wiki.innerHTML = `${star.fullname}`;

                    const imdb = document.getElementById(`imdb${star.id}`);
                    imdb.setAttribute("href", `${star.imdb_url}`)
                    imdb.innerHTML = `${star.fullname}`;

                    document.getElementById(`image${star.id}`).setAttribute("src", `${star.photo_background_url}`);
                    document.getElementById(`slide_heading${star.id}`).innerHTML = `${star.fullname}`; 
                    document.getElementById(`slide_title${star.id}`).innerHTML = `${star.quote}`;

                } else if (star.id >= 11 && star.id <= 13) {

                    const wiki = document.getElementById(`wiki${i}`);
                    wiki.setAttribute("href", `${star.wikipedia_url}`);
                    wiki.innerHTML = `${star.fullname}`;

                    const imdb = document.getElementById(`imdb${i}`);
                    imdb.setAttribute("href", `${star.imdb_url}`)
                    imdb.innerHTML = `${star.fullname}`;

                    document.getElementById(`image${i}`).setAttribute("src", `${star.photo_background_url}`);
                    document.getElementById(`slide_heading${i}`).innerHTML = `${star.fullname}`; 
                    document.getElementById(`slide_title${i}`).innerHTML = `${star.quote}`;

                    i++;

                } else {
                    
                    const wiki = document.getElementById("wiki_links");
                    wiki.innerHTML += `<a id="wiki${star.id}" class="dropdown-item" href="${star.wikipedia_url}" target="_blank">${star.fullname}</a>`

                    const imdb = document.getElementById("imdb_links");
                    imdb.innerHTML += `<a id="imdb${star.id}" class="dropdown-item" href="${star.imdb_url}" target="_blank">${star.fullname}</a>`

                    const carousel = document.getElementById("slide_show");

                    carousel.innerHTML += `<div class="carousel-item">
                                                <img id="image${star.id}" src="${star.photo_background_url}" alt="">
                                                <div class="carousel-caption">
                                                    <h2 class="star_h2" id="slide_heading${star.id}" style="padding: 5px; background-color: grey; color: white">${star.fullname}</h2>
                                                    <p id="slide_title${star.id}" style="padding: 5px; background-color: black; color: white">${star.quote}</p>
                                                </div>
                                            </div>`;

                }
            }
        }
    }

    xhr.send();
}


// This function is called when user clicks on "Show Male Stars" button.
function show_male_stars() {

    // YOUR CODE GOES HERE
    display_info("m");
}

// This function is called when user clicks on "Show Female Stars" button.
function show_female_stars() {

    // YOUR CODE GOES HERE
    display_info("f");
}