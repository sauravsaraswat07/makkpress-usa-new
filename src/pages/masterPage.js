import wixAnimations from 'wix-animations';

const menuItems = {

   solutions: {
 
      button: '#SolutionButton',

      underline: '#solutionLine',
 
      contentBox: '#solutionsContentBox'
 
   },

   ourClients: {

      button: '#ClientsButton',

      underline: '#clientsLine',

      contentBox: '#clientsContentBox'

   },

   ecommerceBlogs: {

      button: '#EcommerceBlogs',

      underline: '#ecommerceLine',

      contentBox: '#ecommerceContentBox'
   },
 
   ourwork: {
 
      button: '#OurWorkButton',

      underline: '#ourWorkLine',
 
      contentBox: '#ourWorkContentBox'
 
   },
 
   company: {
 
      button: '#companyButton',

      underline: '#companyLine',
 
      contentBox: '#companyContentBox'
 
   }
 
}
 
$w.onReady(function () {

   initMegaMenu()

});



function initMegaMenu() {

   for (let i in menuItems) {

      $w(menuItems[i].button).onMouseIn(() => {

         openRelevantPanel(menuItems[i]);

      });


      $w(menuItems[i].contentBox).onMouseOut(() => {

         openRelevantPanel();

      });

   }

}



async function openRelevantPanel(hoverItem) {

   for (let i in menuItems) {

      if (menuItems[i] === hoverItem) {

         $w(menuItems[i].underline).show();

         await $w(menuItems[i].contentBox).expand();

         wixAnimations.timeline()

            .add($w(menuItems[i].contentBox), { y: -20, opacity: 0, duration: 0 })

            .add($w(menuItems[i].contentBox), { y: 0, opacity: 1, duration: 200 })

         .play();

      } else {

         $w(menuItems[i].underline).hide();

         $w(menuItems[i].contentBox).collapse();

      }

   }

}


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



/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function send_proposal(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
}
