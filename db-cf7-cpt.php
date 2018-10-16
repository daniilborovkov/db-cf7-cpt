<?php
/**
 * Plugin Name:     Db Cf7 Cpt
 * Plugin URI:      daniilborovkov.github.io/db-cf7-cpt
 * Description:     Custom post type and taxonomies laod
 * Author:          Daniil Borovkov
 * Author URI:      daniilborovkov.github.io
 * Text Domain:     db-cf7-cpt
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Db_Cf7_Cpt
 */
// TODO: ajax taxonomies load

// Custom contact form 7 retreat select
add_action('wpcf7_init', 'db_cf7_cpt_taxonomies_select');
function db_cf7_cpt_taxonomies_select()
{
    wpcf7_add_form_tag('db_taxonomies_select', 'db_cf7_cpt_taxonomies_handler', array('name-attr' => true, 'aria' => true));
}
function db_cf7_cpt_taxonomies_handler($tag)
{
    $atts          = array();
    $atts['name']  = $tag->name;
    $atts['class'] = $tag->get_class_option();
    $atts['id']    = $tag->get_id_option();
    $atts          = wpcf7_format_atts($atts);
    $html          = '<select data-attr="db_cf7_taxonomie_select" ' . $atts . '>';
    $args          = array(
        'taxonomy' => $tag->get_id_option(),
        'hide_empty' => false,
    );
    $retreats = get_terms( $args );
    foreach ($retreats as $retreat):
        $html .= '<option value="' . $retreat->name . '">' . $retreat->name . '</option>';
    endforeach;
    $html .= '</select>';
    return $html;
}

add_action('wpcf7_init', 'db_cf7_cpt_cpt_select');
function db_cf7_cpt_cpt_select()
{
    wpcf7_add_form_tag('db_cpt_select', 'db_cf7_cpt_cpt_handler', array('name-attr' => true));
}
function db_cf7_cpt_cpt_handler($tag)
{
    $atts          = array();
    $atts['name']  = $tag->name;
    $atts['class'] = $tag->get_class_option();
    $atts['id']    = $tag->get_id_option();
    $atts          = wpcf7_format_atts($atts);
    $html          = '<select data-attr="db_cf7_cpt_select" ' . $atts . '>';
    $args          = array(
        'post_type'      => $tag->get_id_option(),
        'posts_per_page' => -1,
    );
    $retreats = get_posts($args);
    foreach ($retreats as $retreat):
        $retreat_id = $retreat->ID;
        $slug       = $retreat->post_name;
        $title      = get_the_title($retreat_id);
        $html .= '<option value="' . $slug . '">' . $title . '</option>';
    endforeach;
    $html .= '</select>';
    return $html;
}
