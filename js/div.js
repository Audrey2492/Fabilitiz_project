<script type="text/javascript">
function hideShow(e){

	(e.preventDefault) ? e.preventDefault() : (e.returnValue = false);
	
	var targetID = (e.target || e.srcElement).getAttribute("data-toShow"),
		elementToShow = document.getElementById(targetID);

	elementToShow.style.height = (elementToShow.offsetHeight == 0 ? elementToShow.scrollHeight : "0") + 'px';

}

var a = document.querySelectorAll("[data-toShow]"),
	x = 0,
	l = a.length;

for (; x<l; x++) document.addEventListener ? a[x].addEventListener("click", hideShow, false) : a[x].attachEvent("onclick", hideShow);

</script>

