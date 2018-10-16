(function($) {
    $(document).ready(function() {
        // hide elements without this
        $('select[data-attr="db_cf7_cpt_select"]').hide();
        $('select[data-attr="db_cf7_taxonomie_select"]').change(function(e) {
            var optionSelected = $('option:selected', this).val();
            var post_type = $('select[data-attr="db_cf7_cpt_select"]').attr('id');
            var url = '/wp-json/db-df7-cpt/v1/posts?term=' + optionSelected + '&post_type=' + post_type + '&taxonomy=' + $(this).attr('id');
            console.log(url);
            $.ajax({
                url: url,
                success: function(response) {
                    var posts_select = $('select[data-attr="db_cf7_cpt_select"]');
                    // clear all options
                    posts_select.empty();
                    var posts = response.posts;
                    if (posts.length > 0) {
                        // add options to select
                        posts.forEach(function(post) {
                            var option = $('<option></option>').val(post.post_title).text(post.post_title);
                            posts_select.append(option);
                        });
                        $('select[data-attr="db_cf7_cpt_select"]').show();
                    } else {
                        $('select[data-attr="db_cf7_cpt_select"]').hide();
                    }
                }
            })
        });
    });
})(jQuery);