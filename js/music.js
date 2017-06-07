$(function () {
    $('.slide-out-div').tabSlideOut({
        tabHandle: '.handle',                              //class of the element that will be your tab
        pathToTabImage: 'image/music1-01.svg',          //path to the image for the tab (optionaly can be set using css)
        imageHeight: '183px',                               //height of tab image
        imageWidth: '60px',                               //width of tab image
        tabLocation: 'left',                               //side of screen where tab lives, top, right, bottom, or left
        speed: 300,                                        //speed of animation
        action: 'click',                                   //options: 'click' or 'hover', action to trigger animation
        topPos: '200px',                                   //position from the top
        fixedPosition: false                               //options: true makes it stick(fixed position) on scroll
    });
});







$(function () {
    // Setup the player to autoplay the next track
    var a = audiojs.createAll({
        trackEnded: function () {
            var next = $('ol li.playing').next();
            if (!next.length) next = $('ol li').first();
            next.addClass('playing').siblings().removeClass('playing');
            audio.load($('a', next).attr('data-src'));
            audio.play();
        }
    });

    // Load in the first track
    var audio = a[0];
    first = $('ol a').attr('data-src');
    $('ol li').first().addClass('playing');
    audio.load(first);

    // Load in a track on click
    $('ol li').click(function (e) {
        e.preventDefault();
        $(this).addClass('playing').siblings().removeClass('playing');
        audio.load($('a', this).attr('data-src'));
        audio.play();
    });
    // Keyboard shortcuts
    $(document).keydown(function (e) {
        var unicode = e.charCode ? e.charCode : e.keyCode;
        // right arrow
        if (unicode === 39) {
            var next = $('li.playing').next();
            if (!next.length) next = $('ol li').first();
            next.click();
            // back arrow
        } else if (unicode === 37) {
            var prev = $('li.playing').prev();
            if (!prev.length) prev = $('ol li').last();
            prev.click();
            // spacebar
        } else if (unicode === 32) {
            audio.playPause();
        }
    })
});






function play(mp3_file) {
    var audio = new Audio(mp3_file);
    audio.play();
}





/**
 * Created by mengruzhang on 5/25/17.
 */
