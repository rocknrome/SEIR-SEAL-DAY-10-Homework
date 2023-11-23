// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};


    //YEAR 1
$(() => {
	//query for div witd id "container"
    const $container = $('#container');
        console.log($container);

    //creating the h1 element
    const $h1 = $('<h1>').text('Hogwarts');
        console.log($h1);

    //appending $h1 to $container
    $container.append($h1);                 //it has been created in JS and not yet added to DOM
                                         //therefore it is not visible yet on the webpage
    //h2 element
    const $h2 = $('<h2>').text('RockNRome');
        $container.append($h2);



    //YEAR 2
    //h3 element
    const $h3 = $('<h3>').text('Gryffindor');
        $container.append($h3);

    //h4 element "Pet"
    const $h4Pet = $('<h4>').text('Cookie').addClass('cat');
        $container.append($h4Pet);

    //h4 element "Wand"
    const $h4Wand = $('<h4>').text('Holly Wand with Unicorn Hair Core');
        $container.append($h4Wand);

    //unsorted list with attributes "storage" and "trunk"
    const $ul = $('<ul>').attr('storage', 'trunk');

    //adding list items
    $ul.append($('<li>').text('butter beer'));
    $ul.append($('<li>').text('invisibility cloak').addClass('secret'));
    $ul.append($('<li>').text('magic map').addClass('secret'));
    $ul.append($('<li>').text('time turner').addClass('secret'));
    $ul.append($('<li>').text('leash').addClass('cat'));
    $ul.append($('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans'));

    $container.append($ul);
});