/*激活fullpage*/
$(document).ready(function(){
	$('#fullpage').fullpage({
		sectionsColor:['red','green','yellow','blue'],
		anchors:['page1','page2','page3','page4'],
		/*loopTop:true,
		loopButtom:true*/
		navigation:true
	});
});
