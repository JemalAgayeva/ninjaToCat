$(document).ready(function(){  
    $('img').click(function(){  //this is a three-way pass-off of images and their values. 1 to 2, 2 to 3, 3 to 1, and repeat.//  
    $(this).attr('placeholder', $(this).attr('src'));
    $(this).attr('src', $(this).attr('data-alt-src'));
    $(this).attr('data-alt-src', $(this).attr('placeholder'));
})
});