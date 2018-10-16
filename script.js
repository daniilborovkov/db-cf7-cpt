(function($) {
    $(document).ready(function() {
        $('select[data-attr="db_cf7_taxonomie_select"]').change(function(e) {
            var optionSelected = $('option:selected', this).val();
            console.log(optionSelected);
        });
    });
})(jQuery);