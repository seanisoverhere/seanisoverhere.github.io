// KrazyMLBB API v1.0 - Documentation
// http://krazywoman.com/krazymlbb/

const YOUTUBE_API_KEY = 'AIzaSyAIOICYzeq0lya7PfQwmtc95CWCwlo3vLA'; // Did you get your YouTube API key?

// When the webpage loads
// Display all heroes
function display_default() {

    // Display all heroes
        
    // YOUR CODE GOES HERE

    show_heroes('all');
}


// Given a hero_class (tank, fighter, mage, asassin, marksman, support, all)
function show_heroes(hero_class) {

    // if 'tank'
    // only display 'tank' heroes

    // if 'all'
    // display ALL heroes

    // YOUR CODE GOES HERE


    // if (hero_class !== "all") {
    //     url = `http://krazywoman.com/krazymlbb/api/hero/search.php?c=${hero_class}`;
    // }

    const heroCard = document.getElementById("hero_cards");
    heroCard.innerHTML = '';

    let url = "http://krazywoman.com/krazymlbb/api/hero/read.php";

    if (hero_class !== "all") {
        url = `http://krazywoman.com/krazymlbb/api/hero/search.php?c=${hero_class}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const heroes = data.records;

            for (const hero of heroes) {
                // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${hero.name}-gameplay&type=video&key=${YOUTUBE_API_KEY}`)
                //     .then(response => response.json())
                //     .then(data => {
                //             let videoId = data.items[0].id.videoId;
                            heroCard.innerHTML += `
                                <div class="card mb-3 mx-auto">
                                    <div class="row no-gutters">
                                        <div class="col-md-3">
                                            <img src="${hero.img_profile_url}" class="card-img" width="100%" alt="${hero.name}">
                                        </div>
                                        <div class="col-md-9">
                                            <!-- Hero -->
                                            <div class="card-body">
                                                <h5 class="card-title">${hero.name}</h5>

                                                <button type="button" class="btn btn-secondary btn-sm rounded-pill mb-2" data-toggle="modal" data-target="#youtube_modal${hero.id}">
                                                Youtube Videos
                                                </button>
                                                
                                                <div class="modal fade" id="youtube_modal${hero.id}">
                                                    <div class="modal-dialog modal-lg">
                                                        <div class="modal-content">
                                    
                                                            <!-- Modal Header -->
                                                            <div class="modal-header">
                                                                <h4 class="modal-title">${hero.name} Gameplay</h4>
                                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                            </div>
                                                            
                                                            <!-- Modal body -->
                                                            <div class="modal-body mx-auto">
                                                                <iframe id="iframe_${hero.id}" width="560" height="315" src="https://www.youtube.com/embed/Lyhp86JuIOc" frameborder="0" 
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                                                                    
                                                            <!-- Modal footer -->
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                                            </div>
                                    
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- YouTube Modal Ends Here -->

                                                <p class="card-text">${hero.description}</p>
                                                
                                                <p class="text-center">
                                                    <button type="button" class="btn mb-1" style="background-color:#ff7002; color: white; width: 220px">
                                                        Battlepoint Cost <span class="badge badge-light">${hero.purchase.battlepoint_cost}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#1326ff; color: white; width: 220px">
                                                        Diamond Cost <span class="badge badge-light">${hero.purchase.diamond_cost}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        Movement Speed <span class="badge badge-light">${hero.stats.movement_speed}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        Physical Attack <span class="badge badge-light">${hero.stats.physical_attack}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        Physical Defense <span class="badge badge-light">${hero.stats.physical_defense}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        Magic Power <span class="badge badge-light">${hero.stats.magic_power}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        Armor <span class="badge badge-light">${hero.stats.armor}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        Magic Resistance <span class="badge badge-light">${hero.stats.magic_resistance}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        HP <span class="badge badge-light">${hero.stats.hp}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        Mana <span class="badge badge-light">${hero.stats.mana}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        Attack Speed <span class="badge badge-light">${hero.stats.attack_speed}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        HP Regen Rate <span class="badge badge-light">${hero.stats.hp_regen_rate}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                                        Mana Regen Rate <span class="badge badge-light">${hero.stats.mana_regen_rate}</span>
                                                    </button>

                                                    <button type="button" class="btn mb-1" style="background-color:#3e3b3a; color: white; width: 220px">
                                                        Class <span class="badge badge-light">${hero.class}</span>
                                                    </button>

                                                </p>
                                            </div> <!-- end of card-body -->
                                        </div> <!-- end of col -->
                                    </div> <!-- end of row -->
                                </div> <!-- end of card (one hero) -->`
                    // })
            }

        });    

}