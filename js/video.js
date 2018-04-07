/*

    Theme Name: BMW - MOTORS

    Theme CoOoder: mhmd absallam

    PSD designer : ____________

    Author: DR - Manal :)

    Author URI: www.himit.com
    

*/

if($(".bg-container-youtube").is(':visible')){

    if($(window).width() >= 1200){

        $('.player').mb_YTPlayer();

    }

    else{

        $(".bg-container-youtube").backstretch([

            "imgs/1.png",		//-- CHANGE WITH YOUR IMAGE URL

            "imgs/1.png"

            ],{

            duration:6000,

            fade:'normal'

        });

    }

}