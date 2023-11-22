// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
	//query for div witd id "container"
    const $container = $('container');
    console.log($container);

    //creating the h1 element
    const $h1 = $('<h1>').text('Hogwarts');
    console.log($h1);

    //appending $h1 to $container
    $container.append($h1);                 //it has been created in JS and not yet added to DOM
});                                         //therefore it is not visible yet on the webpage