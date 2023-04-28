// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixLocation from 'wix-location';
$w.onReady(function () {

	$w('#repeater5').forEachItem(($item) =>{
		$item('#box287').onClick(() => {
			if ($item('#box286').collapsed) {
				$item('#uparrow').show("fade", fadeOptions);
				$item('#downarrow').hide("fade", fadeOptions);
				$item('#box286').expand();
			} else {
				$item('#uparrow').hide("fade", fadeOptions);
				$item('#downarrow').show("fade", fadeOptions);
				$item('#box286').collapse();
			}
			
		})
	});
	let path = wixLocation.path;
path = path.toString();
console.log(path);
$w("#input50").value = path;
console.log($w("#input50").value);
$w("#input50").hidden;
});

let fadeOptions = {
  "duration":   200,
  "delay":      0
};



