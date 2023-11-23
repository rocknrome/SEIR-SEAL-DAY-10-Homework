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



    //YEAR 3
    //adding list items
    $ul.append($('<li>').text('butter beer'));
    $ul.append($('<li>').text('invisibility cloak').addClass('secret'));
    $ul.append($('<li>').text('magic map').addClass('secret'));
    $ul.append($('<li>').text('time turner').addClass('secret'));
    $ul.append($('<li>').text('leash').addClass('cat'));
    $ul.append($('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans'));

    $container.append($ul);



    //YEAR 4
    //adding h5 element
    const $h5 = $('<h5>').text('Spring 2017');
        $container.append($h5);

    //creating a table
    const $table = $('<table>');

    //creating thead and th elements
    const $thead = $('<thead>');
    $thead.append($('<th>').text('Day'));
    $thead.append($('<th>').text('Classes'));
    $table.append($thead);

    //creating elements for each day
    //Monday
    const $trMonday = $('<tr>');
    $trMonday.append($('<td>').text('Monday'));
    $trMonday.append($('<td>').text('Herbology, Potions'));
    $table.append($trMonday);

    //Tuesday
    const $trTuesday = $('<tr>');
    $trTuesday.append($('<td>').text('Tuesday'));
    $trTuesday.append($('<td>').text('Divination,  History of Magic'));
    $table.append($trTuesday);

    //Wednesday
    const $trWednesday = $('<tr>');
    $trWednesday.append($('<td>').text('Wednesday'));
    $trWednesday.append($('<td>').text('Charms, Potions'));
    $table.append($trWednesday);

    //Thursday
    const $trThursday = $('<tr>');
    $trThursday.append($('<td>').text('Thursday'));
    $trThursday.append($('<td>').text('Transfiguration, Defense Against the Dark Arts'));
    $table.append($trThursday);

    //Friday
    const $trFriday = $('<tr>');
    $trFriday.append($('<td>').text('Friday'));
    $trFriday.append($('<td>').text('Quidditch practice'));
    $table.append($trFriday);

    $container.append($table)



    //YEAR 4
    //removing the wand
    $('#container h4:contains("Holly Wand with Unicorn Hair Core")').remove();

    //removing the butter beer
    $('#container ul li:contains("butter beer")').remove();

    //getting a new wand
    const $newWand = $('<h4>').text('Wonderous Magic Unlimited').css('color','indigo'); //adding color as css styling
    $container.append($newWand)

    //finding the element "cat"
    const $pet = $container.find('h4.cat');
    //placing new wand after cat
    $pet.after($newWand);

    //sending pet on a mission
    const $spyPet = $('#container h4.cat').detach();
        $('body').append($spyPet);                      //appending pet to "body"

    //bringing pet back
    const $petIsBack = $('body h4.cat').detach();
        $('#container h4').first().before($petIsBack);  //returning "cat" to its original location (first position)

});