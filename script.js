(function($) {
    $(document).ready(function() {
        // hide elements without this
        $('select[data-attr="db_cf7_cpt_select"]').hide();
        // wordpress doesnt not give to push empty option. !Я знаю про костыль
        $('select[data-attr="db_cf7_taxonomie_select"]').prepend($('<option value="" selected="selected">  </option>'));
        $('select[data-attr="db_cf7_taxonomie_select"]').change(function(e) {
            var optionSelected = $('option:selected', this).attr('data-term');
            var post_type = $('select[data-attr="db_cf7_cpt_select"]').attr('id');
            var url = '/wp-json/db-df7-cpt/v1/posts?term=' + optionSelected + '&post_type=' + post_type + '&taxonomy=' + $(this).attr('id');
            console.log(url);
            if (typeof optionSelected != 'undefined') {
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
            } else {
                $('select[data-attr="db_cf7_cpt_select"]').hide();
            }
        });
    });
})(jQuery);