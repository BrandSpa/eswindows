<?php
function esw_type_post_metabox() {
	add_meta_box('esw_post', 'ESW Post', 'esw_type_post_cb', 'post', 'normal', 'high', null);
}

add_action('add_meta_boxes', 'esw_type_post_metabox');

function esw_type_post_cb($post) {
	wp_nonce_field('aws_type_product_meta', 'esw_type_post_nonce');

  $fields = [
    "header",
     "intro",
     "year",
     "month",
     "day"
  ];

	$props = ['months' => months()];

  foreach($fields as $field) {
    ${$field} = esc_textarea(get_post_meta($post->ID, $field . '_key', true));
    $props[$field] = ${$field};
  }

?>

  <div
    class="post-metabox-container"
    data-props='<?php echo json_encode($props) ?>'
  ></div>

<script src="<?php echo get_template_directory_uri() ?>/public/js/admin.js"></script>
<?php
}

function ews_post_save($post_id) {
  $fields = [
    "header",
     "intro",
     "year",
     "month",
     "day"
  ];

  foreach($fields as $field) {
    update_field(array(
      'field_key' => $field . '_key',
      'field_name' => $field,
      'post_id' => $post_id
    ));
  }

}

add_action( 'save_post', 'ews_post_save');
