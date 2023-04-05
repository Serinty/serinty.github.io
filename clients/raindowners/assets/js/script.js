$('#safari').click(function () { toggleFunction('#safari'); return false; });
$('#wildCam').click(function () { toggleFunction('#wildCam'); return false; });
$('#toggleBtn').click(function () { toggleFunction('#sideBar'); scrollFunction('#banner'); return false; });
$('#qs1_head').click(function () { toggleFunction('#qs1_body'); return false; });
$('#qs2_head').click(function () { toggleFunction('#qs2_body'); return false; });
$('#qs3_head').click(function () { toggleFunction('#qs3_body'); return false; });
$('#qs4_head').click(function () { toggleFunction('#qs4_body'); return false; });
$('#qs5_head').click(function () { toggleFunction('#qs5_body'); return false; });

function toggleFunction(id) {
    $(id).toggleClass('active');
}
function scrollFunction(id) {
    $.scrollTo(id, 800, { easing: 'elasout' });
}