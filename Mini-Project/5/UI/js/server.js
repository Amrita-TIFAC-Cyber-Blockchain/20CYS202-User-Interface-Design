const $ = document.querySelectorAll.bind(document);

$(".focusable, .button").forEach(el => {
	// blur only on mouse click
	// for accessibility, keep focus when keyboard focused
	el.addEventListener("mousedown", e => e.preventDefault());
	el.setAttribute("tabindex", "0");
});

$(".server").forEach(el => {
	el.addEventListener("click", () => {
		const activeServer = $(".server.active")[0];
		activeServer.classList.remove("active");
		activeServer.removeAttribute("aria-selected");
		
		el.classList.add("active");
		el.setAttribute("aria-selected", true);
	});
})

$(".channel-text").forEach(el => {
	el.addEventListener("click", () => {
		$(".channel-text.active")[0].classList.remove("active");
		el.classList.add("active");
	});
})

// focus/blur on channel header click
$(".channels-header")[0].addEventListener("click", e => {
	e.preventDefault();
	
	const focused = document.activeElement === e.target;
	focused ? e.target.blur() : e.target.focus();
});