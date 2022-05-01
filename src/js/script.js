$('.personage, .person').draggable({
    containment: ".block",
    cursor: "none",
    cursorAt: { left: 20 },
    scroll: false
});
$('.personage').on('click', function() {
    $('.person').addClass("person-active")
});
