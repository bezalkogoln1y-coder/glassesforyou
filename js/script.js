$(function() {
    $('.toggles button').click(function() {
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);
        
        $('.item').not(get_current).hide(500);
        get_current.show(500);
    })
    
    $('#showall').click(function(){
        $('.item').show(500);
    })
})

jQuery(document).ready(function() {
		jQuery(".eTimer").eTimer({
			etType: 0, etDate: "05.08.2019.23.0", etShowSign: 1, etSep: " ", etFontFamily: "Arial", etTextColor: "black", etPaddingTB: 0, etPaddingLR: 0, etBorderSize: 0, etBorderRadius: 5, etBorderColor: "white", etLastUnit: 4, etNumberFontFamily: "Impact", etNumberSize: 35, etNumberColor: "white", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "red", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
		});
	});