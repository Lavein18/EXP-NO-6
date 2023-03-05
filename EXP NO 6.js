<script type="text/javascript">
$(document).ready(function(){

$("#moretab").hover(function(){
    $("#categories").slideDown("fast");
    clearTimeout(debounce);
});

$("#moretab").mouseleave (function() {
    debounce = setTimeout(closeMenu,400);
});

var debounce;
var closeMenu = function(){
    $("#categories").slideUp("fast");
    clearTimeout(debounce);
}

});
</script>
