// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

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

    //h3 element
    const $h3 = $('<h3>').text('Gryffindor');
        $container.append($h3);

    //h4 element "Pet"
    const $h4Pet = $('<h4>').text('Cookie').addClass('cat');
        $container.append($h4Pet);

    //h4 element "Wand"
    const $h4Wand = $('<h4>').text('Holly Wand with Unicorn Hair Core');
        $container.append($h4Wand);


});