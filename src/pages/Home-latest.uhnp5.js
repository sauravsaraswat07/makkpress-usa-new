import wixSite from 'wix-site';
import wixLocation from 'wix-location';
import { session } from 'wix-storage';

$w.onReady(function () {
    let current = wixSite.currentPage;
    $w("#input49").hide();
    let baseUrl = wixLocation.baseUrl;
    $w("#input49").value = baseUrl + current.url;
    console.log("https://ishan26.editorx.io/makkpress-usa-new" + current.url);

    console.log(baseUrl);

});


$w("#button42").onClick( (event) => {
 let urlValue = $w('#input54').value;
     session.setItem("URL",urlValue);
    
} );