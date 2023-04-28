// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

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
	})
});

let fadeOptions = {
  "duration":   200,
  "delay":      0
};



