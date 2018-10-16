(function($) {
    $(document).ready(function() {
        $('select[data-attr="db_cf7_taxonomie_select"]').change(function(e) {
            var optionSelected = $('option:selected', this).val();

            var post_type = $('select[data-attr="db_cf7_cpt_select"]').attr('id');
            var url = '/wp-json/db-df7-cpt/v1/posts?term=' + optionSelected + '&post_type=' + post_type + '&taxonomy=' + $(this).attr('id');

            console.log(url);
            
            $.ajax({
              url: url,
              success: function (response) {
                console.log(response);
                var posts_select = $('select[data-attr="db_cf7_cpt_select"]');

                var posts = response.posts;

                posts.forEach(function(post) {
                  var option = $('<option></option>').val(post.post_title).text(post.post_title);
                  posts_select.append(option);
                });
              }
            })
        });
    });
})(jQuery);