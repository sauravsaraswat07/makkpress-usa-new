$w.onReady(function () {

    currentTime();

    $w('#readMore').onClick(() => {
        $w('#adtionaltext').expand();
    })

    $w('#firstm').onMouseIn(() => {
        $w('#first').expand();
    })

});
 
function currentTime() {

    const now = new Date()

    $w('#time').text = now.toLocaleTimeString([], { timeStyle: 'short' })
    $w('#message').text = now.getMinutes() % 2 === 0 ? 'time to get even' : 'we live in odd times'

}

/**
*	Adds an event handler that runs when the pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function firstm_mouseIn(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
}