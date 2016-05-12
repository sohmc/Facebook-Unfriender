// ==UserScript==
// @name            Facebook Bulk Unfriend
// @namespace       
// @description     Allows for bulk unfriends on Facebook
// @version         0.1
// @license         GPL 3.0
// @include         http*://*.facebook.com/*/friends*
// @require         https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==

$jq = this.jQuery = jQuery.noConflict(true);

$jq( document ).ready(function() {
    alert('Ready.');
    find_profileids();
});


function find_profileids() {
    $jq('a[data-profileid]').after(function(index) {
        console.log(index + ': ' + $jq(this).attr('data-profileid'));
        return "<br/><p>foo</p>";
    });

    
}

