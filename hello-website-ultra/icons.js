'use-strick'
// Imports
import { q, qa, CLICK } from './website/ux/dom.js';
let react_native_icons = qa('span');



// Arrays
let filterArray = ["accessibility_outline", "accessibility_sharp", "accessibility", "add_circle_outline", "add_circle_sharp", "add_circle", "add_outline", "add_sharp", "add", "airplane_outline", "airplane_sharp", "airplane", "alarm_outline", "alarm_sharp", "alarm", "albums_outline", "albums_sharp", "albums", "alert_circle_outline", "alert_circle_sharp", "alert_circle", "alert_outline", "alert_sharp", "alert", "american_football_outline", "american_football_sharp", "american_football", "analytics_outline", "analytics_sharp", "analytics", "aperture_outline", "aperture_sharp", "aperture", "apps_outline", "apps_sharp", "apps", "archive_outline", "archive_sharp", "archive", "arrow_back_circle_outline", "arrow_back_circle_sharp", "arrow_back_circle", "arrow_back_outline", "arrow_back_sharp", "arrow_back", "arrow_down_circle_outline", "arrow_down_circle_sharp", "arrow_down_circle", "arrow_down_outline", "arrow_down_sharp", "arrow_down", "arrow_forward_circle_outline", "arrow_forward_circle_sharp", "arrow_forward_circle", "arrow_forward_outline", "arrow_forward_sharp", "arrow_forward", "arrow_redo_circle_outline", "arrow_redo_circle_sharp", "arrow_redo_circle", "arrow_redo_outline", "arrow_redo_sharp", "arrow_redo", "arrow_undo_circle_outline", "arrow_undo_circle_sharp", "arrow_undo_circle", "arrow_undo_outline", "arrow_undo_sharp", "arrow_undo", "arrow_up_circle_outline", "arrow_up_circle_sharp", "arrow_up_circle", "arrow_up_outline", "arrow_up_sharp", "arrow_up", "at_circle_outline", "at_circle_sharp", "at_circle", "at_outline", "at_sharp", "at", "attach_outline", "attach_sharp", "attach", "backspace_outline", "backspace_sharp", "backspace", "bag_add_outline", "bag_add_sharp", "bag_add", "bag_check_outline", "bag_check_sharp", "bag_check", "bag_handle_outline", "bag_handle_sharp", "bag_handle", "bag_outline", "bag_remove_outline", "bag_remove_sharp", "bag_remove", "bag_sharp", "bag", "balloon_outline", "balloon_sharp", "balloon", "ban_outline", "ban_sharp", "ban", "bandage_outline", "bandage_sharp", "bandage", "bar_chart_outline", "bar_chart_sharp", "bar_chart", "barbell_outline", "barbell_sharp", "barbell", "barcode_outline", "barcode_sharp", "barcode", "baseball_outline", "baseball_sharp", "baseball", "basket_outline", "basket_sharp", "basket", "basketball_outline", "basketball_sharp", "basketball", "battery_charging_outline", "battery_charging_sharp", "battery_charging", "battery_dead_outline", "battery_dead_sharp", "battery_dead", "battery_full_outline", "battery_full_sharp", "battery_full", "battery_half_outline", "battery_half_sharp", "battery_half", "beaker_outline", "beaker_sharp", "beaker", "bed_outline", "bed_sharp", "bed", "beer_outline", "beer_sharp", "beer", "bicycle_outline", "bicycle_sharp", "bicycle", "bluetooth_outline", "bluetooth_sharp", "bluetooth", "boat_outline", "boat_sharp", "boat", "body_outline", "body_sharp", "body", "bonfire_outline", "bonfire_sharp", "bonfire", "book_outline", "book_sharp", "book", "bookmark_outline", "bookmark_sharp", "bookmark", "bookmarks_outline", "bookmarks_sharp", "bookmarks", "bowling_ball_outline", "bowling_ball_sharp", "bowling_ball", "briefcase_outline", "briefcase_sharp", "briefcase", "browsers_outline", "browsers_sharp", "browsers", "brush_outline", "brush_sharp", "brush", "bug_outline", "bug_sharp", "bug", "build_outline", "build_sharp", "build", "bulb_outline", "bulb_sharp", "bulb", "bus_outline", "bus_sharp", "bus", "business_outline", "business_sharp", "business", "cafe_outline", "cafe_sharp", "cafe", "calculator_outline", "calculator_sharp", "calculator", "calendar_clear_outline", "calendar_clear_sharp", "calendar_clear", "calendar_number_outline", "calendar_number_sharp", "calendar_number", "calendar_outline", "calendar_sharp", "calendar", "call_outline", "call_sharp", "call", "camera_outline", "camera_reverse_outline", "camera_reverse_sharp", "camera_reverse", "camera_sharp", "camera", "car_outline", "car_sharp", "car_sport_outline", "car_sport_sharp", "car_sport", "car", "card_outline", "card_sharp", "card", "caret_back_circle_outline", "caret_back_circle_sharp", "caret_back_circle", "caret_back_outline", "caret_back_sharp", "caret_back", "caret_down_circle_outline", "caret_down_circle_sharp", "caret_down_circle", "caret_down_outline", "caret_down_sharp", "caret_down", "caret_forward_circle_outline", "caret_forward_circle_sharp", "caret_forward_circle", "caret_forward_outline", "caret_forward_sharp", "caret_forward", "caret_up_circle_outline", "caret_up_circle_sharp", "caret_up_circle", "caret_up_outline", "caret_up_sharp", "caret_up", "cart_outline", "cart_sharp", "cart", "cash_outline", "cash_sharp", "cash", "cellular_outline", "cellular_sharp", "cellular", "chatbox_ellipses_outline", "chatbox_ellipses_sharp", "chatbox_ellipses", "chatbox_outline", "chatbox_sharp", "chatbox", "chatbubble_ellipses_outline", "chatbubble_ellipses_sharp", "chatbubble_ellipses", "chatbubble_outline", "chatbubble_sharp", "chatbubble", "chatbubbles_outline", "chatbubbles_sharp", "chatbubbles", "checkbox_outline", "checkbox_sharp", "checkbox", "checkmark_circle_outline", "checkmark_circle_sharp", "checkmark_circle", "checkmark_done_circle_outline", "checkmark_done_circle_sharp", "checkmark_done_circle", "checkmark_done_outline", "checkmark_done_sharp", "checkmark_done", "checkmark_outline", "checkmark_sharp", "checkmark", "chevron_back_circle_outline", "chevron_back_circle_sharp", "chevron_back_circle", "chevron_back_outline", "chevron_back_sharp", "chevron_back", "chevron_down_circle_outline", "chevron_down_circle_sharp", "chevron_down_circle", "chevron_down_outline", "chevron_down_sharp", "chevron_down", "chevron_forward_circle_outline", "chevron_forward_circle_sharp", "chevron_forward_circle", "chevron_forward_outline", "chevron_forward_sharp", "chevron_forward", "chevron_up_circle_outline", "chevron_up_circle_sharp", "chevron_up_circle", "chevron_up_outline", "chevron_up_sharp", "chevron_up", "clipboard_outline", "clipboard_sharp", "clipboard", "var_close_circle_outline", "var_close_circle_sharp", "var_close_circle", "var_close_outline", "var_close_sharp", "var_close", "cloud_circle_outline", "cloud_circle_sharp", "cloud_circle", "cloud_done_outline", "cloud_done_sharp", "cloud_done", "cloud_download_outline", "cloud_download_sharp", "cloud_download", "cloud_offline_outline", "cloud_offline_sharp", "cloud_offline", "cloud_outline", "cloud_sharp", "cloud_upload_outline", "cloud_upload_sharp", "cloud_upload", "cloud", "cloudy_night_outline", "cloudy_night_sharp", "cloudy_night", "cloudy_outline", "cloudy_sharp", "cloudy", "code_download_outline", "code_download_sharp", "code_download", "code_outline", "code_sharp", "code_slash_outline", "code_slash_sharp", "code_slash", "code_working_outline", "code_working_sharp", "code_working", "code", "cog_outline", "cog_sharp", "cog", "color_fill_outline", "color_fill_sharp", "color_fill", "color_filter_outline", "color_filter_sharp", "color_filter", "color_palette_outline", "color_palette_sharp", "color_palette", "color_wand_outline", "color_wand_sharp", "color_wand", "compass_outline", "compass_sharp", "compass", "construct_outline", "construct_sharp", "construct", "contract_outline", "contract_sharp", "contract", "contrast_outline", "contrast_sharp", "contrast", "copy_outline", "copy_sharp", "copy", "create_outline", "create_sharp", "create", 
"crop_outline", "crop_sharp", "crop", "cube_outline", "cube_sharp", "cube", "cut_outline", "cut_sharp", "cut", "desktop_outline", "desktop_sharp", "desktop", "diamond_outline", "diamond_sharp", "diamond", "dice_outline", "dice_sharp", "dice", "disc_outline", "disc_sharp", "disc", "document_attach_outline", "document_attach_sharp", "document_attach", "document_lock_outline", "document_lock_sharp", "document_lock", "document_outline", "document_sharp", "document_text_outline", "document_text_sharp", "document_text", "document", "documents_outline", "documents_sharp", "documents", "download_outline", "download_sharp", "download", "duplicate_outline", "duplicate_sharp", "duplicate", "ear_outline", "ear_sharp", "ear", "earth_outline", "earth_sharp", "earth", "easel_outline", "easel_sharp", "easel", "egg_outline", "egg_sharp", "egg", "ellipse_outline", "ellipse_sharp", "ellipse", "ellipsis_horizontal_circle_outline", "ellipsis_horizontal_circle_sharp", "ellipsis_horizontal_circle", "ellipsis_horizontal_outline", "ellipsis_horizontal_sharp", "ellipsis_horizontal", "ellipsis_vertical_circle_outline", "ellipsis_vertical_circle_sharp", "ellipsis_vertical_circle", "ellipsis_vertical_outline", "ellipsis_vertical_sharp", "ellipsis_vertical", "enter_outline", "enter_sharp", "enter", "exit_outline", "exit_sharp", "exit", "expand_outline", "expand_sharp", "expand", "extension_puzzle_outline", "extension_puzzle_sharp", "extension_puzzle", "eye_off_outline", "eye_off_sharp", "eye_off", "eye_outline", "eye_sharp", "eye", "eyedrop_outline", "eyedrop_sharp", "eyedrop", "fast_food_outline", "fast_food_sharp", "fast_food", "female_outline", "female_sharp", "female", "file_tray_full_outline", "file_tray_full_sharp", "file_tray_full", "file_tray_outline", "file_tray_sharp", "file_tray_stacked_outline", "file_tray_stacked_sharp", "file_tray_stacked", "file_tray", "film_outline", "film_sharp", "film", "filter_circle_outline", "filter_circle_sharp", "filter_circle", "filter_outline", "filter_sharp", "filter", "finger_print_outline", "finger_print_sharp", "finger_print", "fish_outline", "fish_sharp", "fish", "fitness_outline", "fitness_sharp", "fitness", "flag_outline", "flag_sharp", "flag", "flame_outline", "flame_sharp", "flame", "flash_off_outline", "flash_off_sharp", "flash_off", "flash_outline", "flash_sharp", "flash", "flashlight_outline", "flashlight_sharp", "flashlight", "flask_outline", "flask_sharp", "flask", "flower_outline", "flower_sharp", "flower", "folder_open_outline", "folder_open_sharp", "folder_open", "folder_outline", "folder_sharp", "folder", "football_outline", "football_sharp", "football", "footsteps_outline", "footsteps_sharp", "footsteps", "funnel_outline", "funnel_sharp", "funnel", "game_controller_outline", "game_controller_sharp", "game_controller", "gift_outline", "gift_sharp", "gift", "git_branch_outline", "git_branch_sharp", "git_branch", "git_commit_outline", "git_commit_sharp", "git_commit", "git_compare_outline", "git_compare_sharp", "git_compare", "git_merge_outline", "git_merge_sharp", "git_merge", "git_network_outline", "git_network_sharp", "git_network", "git_pull_request_outline", "git_pull_request_sharp", "git_pull_request", "glasses_outline", "glasses_sharp", "glasses", "globe_outline", "globe_sharp", "globe", "golf_outline", "golf_sharp", "golf", "grid_outline", "grid_sharp", "grid", "hammer_outline", "hammer_sharp", "hammer", "hand_left_outline", "hand_left_sharp", "hand_left", "hand_right_outline", "hand_right_sharp", "hand_right", "happy_outline", "happy_sharp", "happy", "hardware_chip_outline", "hardware_chip_sharp", "hardware_chip", "headset_outline", "headset_sharp", "headset", "heart_circle_outline", "heart_circle_sharp", "heart_circle", "heart_dislike_circle_outline", "heart_dislike_circle_sharp", "heart_dislike_circle", "heart_dislike_outline", "heart_dislike_sharp", "heart_dislike", "heart_half_outline", "heart_half_sharp", "heart_half", "heart_outline", "heart_sharp", "heart", "help_buoy_outline", "help_buoy_sharp", "help_buoy", "help_circle_outline", "help_circle_sharp", "help_circle", "help_outline", "help_sharp", "help", "home_outline", "home_sharp", "home", "hourglass_outline", "hourglass_sharp", "hourglass", "ice_cream_outline", "ice_cream_sharp", "ice_cream", "id_card_outline", "id_card_sharp", "id_card", "image_outline", "image_sharp", "image", "images_outline", "images_sharp", "images", "infinite_outline", "infinite_sharp", "infinite", "information_circle_outline", "information_circle_sharp", "information_circle", "information_outline", "information_sharp", "information", "invert_mode_outline", "invert_mode_sharp", "invert_mode", "journal_outline", "journal_sharp", "journal", "key_outline", "key_sharp", "key", "keypad_outline", "keypad_sharp", "keypad", "language_outline", "language_sharp", "language", "laptop_outline", "laptop_sharp", "laptop", "layers_outline", "layers_sharp", "layers", "leaf_outline", "leaf_sharp", "leaf", "library_outline", "library_sharp", "library", "link_outline", "link_sharp", "link", "list_circle_outline", "list_circle_sharp", "list_circle", "list_outline", "list_sharp", "list", "locate_outline", "locate_sharp", "locate", "var_location_outline", "var_location_sharp", "var_location", "lock_var_closed_outline", "lock_var_closed_sharp", "lock_var_closed", "lock_open_outline", "lock_open_sharp", "lock_open", "log_in_outline", "log_in_sharp", "log_in", "log_out_outline", "log_out_sharp", "log_out", "logo_alipay", "logo_amazon", "logo_amplify", "logo_android", "logo_angular", "logo_apple_appstore", "logo_apple_ar", "logo_apple", "logo_behance", "logo_bitbucket", "logo_bitcoin", "logo_buffer", "logo_capacitor", "logo_chrome", "logo_var_closed_captioning", "logo_codepen", "logo_css3", "logo_designernews", "logo_deviantart", "logo_discord", "logo_docker", "logo_dribbble", "logo_dropbox", "logo_edge", "logo_electron", "logo_euro", "logo_facebook", "logo_figma", "logo_firebase", "logo_firefox", "logo_flickr", "logo_foursquare", "logo_github", "logo_gitlab", "logo_google_playstore", "logo_google", "logo_hackernews", "logo_html5", "logo_instagram", "logo_ionic", "logo_ionitron", "logo_javascript", "logo_laravel", "logo_linkedin", "logo_markdown", "logo_mastodon", "logo_medium", "logo_microsoft", "logo_no_smoking", "logo_nodejs", "logo_npm", "logo_octocat", "logo_paypal", "logo_pinterest", "logo_playstation", "logo_pwa", "logo_python", "logo_react", "logo_reddit", "logo_rss", "logo_sass", "logo_skype", "logo_slack", "logo_snapchat", "logo_soundcloud", "logo_stackoverflow", "logo_steam", "logo_stencil", "logo_tableau", "logo_tiktok", "logo_tumblr", "logo_tux", "logo_twitch", "logo_twitter", "logo_usd", "logo_venmo", "logo_vercel", "logo_vimeo", "logo_vk", "logo_vue", "logo_web_component", "logo_wechat",  
"logo_whatsapp", "logo_windows", "logo_wordpress", "logo_xbox", "logo_xing", "logo_yahoo", "logo_yen", "logo_youtube", "magnet_outline", "magnet_sharp", "magnet", "mail_open_outline", "mail_open_sharp", "mail_open", "mail_outline", "mail_sharp", "mail_unread_outline", "mail_unread_sharp", "mail_unread", "mail", "male_female_outline", "male_female_sharp", "male_female", "male_outline", "male_sharp", "male", "man_outline", "man_sharp", "man", "map_outline", "map_sharp", "map", "medal_outline", "medal_sharp", "medal", "medical_outline", "medical_sharp", "medical", "medkit_outline", "medkit_sharp", "medkit", "megaphone_outline", "megaphone_sharp", "megaphone", "menu_outline", "menu_sharp", "menu", "mic_circle_outline", "mic_circle_sharp", "mic_circle", "mic_off_circle_outline", "mic_off_circle_sharp", "mic_off_circle", "mic_off_outline", "mic_off_sharp", "mic_off", "mic_outline", "mic_sharp", "mic", "moon_outline", "moon_sharp", "moon", "move_outline", "move_sharp", "move", "musical_note_outline", "musical_note_sharp", "musical_note", "musical_notes_outline", "musical_notes_sharp", "musical_notes", "navigate_circle_outline", "navigate_circle_sharp", "navigate_circle", "navigate_outline", "navigate_sharp", "navigate", "newspaper_outline", "newspaper_sharp", "newspaper", "notifications_circle_outline", "notifications_circle_sharp", "notifications_circle", "notifications_off_circle_outline", "notifications_off_circle_sharp", "notifications_off_circle", "notifications_off_outline", "notifications_off_sharp", "notifications_off", "notifications_outline", "notifications_sharp", "notifications", "nuclear_outline", "nuclear_sharp", "nuclear", "nutrition_outline", "nutrition_sharp", "nutrition", "open_outline", "open_sharp", "open", "options_outline", "options_sharp", "options", "paper_plane_outline", "paper_plane_sharp", "paper_plane", "partly_sunny_outline", "partly_sunny_sharp", "partly_sunny", "pause_circle_outline", "pause_circle_sharp", "pause_circle", "pause_outline", "pause_sharp", "pause", "paw_outline", "paw_sharp", "paw", "pencil_outline", "pencil_sharp", "pencil", "people_circle_outline", "people_circle_sharp", "people_circle", "people_outline", "people_sharp", "people", "person_add_outline", "person_add_sharp", "person_add", "person_circle_outline", "person_circle_sharp", "person_circle", "person_outline", "person_remove_outline", "person_remove_sharp", "person_remove", "person_sharp", "person", "phone_landscape_outline", "phone_landscape_sharp", "phone_landscape", "phone_portrait_outline", "phone_portrait_sharp", "phone_portrait", "pie_chart_outline", "pie_chart_sharp", "pie_chart", "pin_outline", "pin_sharp", "pin", "pint_outline", "pint_sharp", "pint", "pizza_outline", "pizza_sharp", "pizza", "planet_outline", "planet_sharp", "planet", "play_back_circle_outline", "play_back_circle_sharp", "play_back_circle", "play_back_outline", "play_back_sharp", "play_back", "play_circle_outline", "play_circle_sharp", "play_circle", "play_forward_circle_outline", "play_forward_circle_sharp", "play_forward_circle", "play_forward_outline", "play_forward_sharp", "play_forward", "play_outline", "play_sharp", "play_skip_back_circle_outline", "play_skip_back_circle_sharp", "play_skip_back_circle", "play_skip_back_outline", "play_skip_back_sharp", "play_skip_back", "play_skip_forward_circle_outline", "play_skip_forward_circle_sharp", "play_skip_forward_circle", "play_skip_forward_outline", "play_skip_forward_sharp", "play_skip_forward", "play", "podium_outline", "podium_sharp", "podium", "power_outline", "power_sharp", "power", "pricetag_outline", "pricetag_sharp", "pricetag", "pricetags_outline", "pricetags_sharp", "pricetags", "print_outline", "print_sharp", "print", "prism_outline", "prism_sharp", "prism", "pulse_outline", "pulse_sharp", "pulse", "push_outline", "push_sharp", "push", "qr_code_outline", "qr_code_sharp", "qr_code", "radio_button_off_outline", "radio_button_off_sharp", "radio_button_off", "radio_button_on_outline", "radio_button_on_sharp", "radio_button_on", "radio_outline", "radio_sharp", "radio", "rainy_outline", "rainy_sharp", "rainy", "reader_outline", "reader_sharp", "reader", "receipt_outline", "receipt_sharp", "receipt", "recording_outline", "recording_sharp", "recording", "refresh_circle_outline", "refresh_circle_sharp", "refresh_circle", "refresh_outline", "refresh_sharp", "refresh", "reload_circle_outline", "reload_circle_sharp", "reload_circle", "reload_outline", "reload_sharp", "reload", "remove_circle_outline", "remove_circle_sharp", "remove_circle", "remove_outline", "remove_sharp", "remove", "reorder_four_outline", "reorder_four_sharp", "reorder_four", "reorder_three_outline", "reorder_three_sharp", "reorder_three", "reorder_two_outline", "reorder_two_sharp", "reorder_two", "repeat_outline", "repeat_sharp", "repeat", "resize_outline", "resize_sharp", "resize", "restaurant_outline", "restaurant_sharp", "restaurant", "return_down_back_outline", "return_down_back_sharp", "return_down_back", "return_down_forward_outline", "return_down_forward_sharp", "return_down_forward", "return_up_back_outline", "return_up_back_sharp", "return_up_back", "return_up_forward_outline", "return_up_forward_sharp", "return_up_forward", "ribbon_outline", "ribbon_sharp", "ribbon", "rocket_outline", "rocket_sharp", "rocket", "rose_outline", "rose_sharp", "rose", "sad_outline", "sad_sharp", "sad", "save_outline", "save_sharp", "save", "scale_outline", "scale_sharp", "scale", "scan_circle_outline", "scan_circle_sharp", "scan_circle", "scan_outline", "scan_sharp", "scan", "school_outline", "school_sharp", "school", "search_circle_outline", "search_circle_sharp", "search_circle", "search_outline", "search_sharp", "search", "send_outline", "send_sharp", "send", "server_outline", "server_sharp", "server", "settings_outline", "settings_sharp", "settings", "shapes_outline", "shapes_sharp", "shapes", "share_outline", "share_sharp", "share_social_outline", "share_social_sharp", "share_social", "share", "shield_checkmark_outline", "shield_checkmark_sharp", "shield_checkmark", "shield_half_outline", "shield_half_sharp", "shield_half", "shield_outline", "shield_sharp", "shield", "shirt_outline", "shirt_sharp", "shirt", "shuffle_outline", "shuffle_sharp", "shuffle", "skull_outline", "skull_sharp", "skull", "snow_outline", "snow_sharp", "snow", "sparkles_outline", "sparkles_sharp", "sparkles", "speedometer_outline", "speedometer_sharp", "speedometer", "square_outline", "square_sharp", "square", "star_half_outline", "star_half_sharp", "star_half", "star_outline", "star_sharp", "star", "stats_chart_outline", "stats_chart_sharp", "stats_chart", "stop_circle_outline", "stop_circle_sharp", "stop_circle", "stop_outline", "stop_sharp", "stop", "stopwatch_outline", "stopwatch_sharp", "stopwatch", "storefront_outline", "storefront_sharp", "storefront", "subway_outline", "subway_sharp", "subway", "sunny_outline", "sunny_sharp", "sunny", "swap_horizontal_outline", "swap_horizontal_sharp", "swap_horizontal", "swap_vertical_outline", "swap_vertical_sharp",  
"swap_vertical", "sync_circle_outline", "sync_circle_sharp", "sync_circle", "sync_outline", "sync_sharp", "sync", "tablet_landscape_outline", "tablet_landscape_sharp", "tablet_landscape", "tablet_portrait_outline", "tablet_portrait_sharp", "tablet_portrait", "telescope_outline", "telescope_sharp", "telescope", "tennisball_outline", "tennisball_sharp", "tennisball", "terminal_outline", "terminal_sharp", "terminal", "text_outline", "text_sharp", "text", "thermometer_outline", "thermometer_sharp", "thermometer", "thumbs_down_outline", "thumbs_down_sharp", "thumbs_down", "thumbs_up_outline", "thumbs_up_sharp", "thumbs_up", "thunderstorm_outline", "thunderstorm_sharp", "thunderstorm", "ticket_outline", "ticket_sharp", "ticket", "time_outline", "time_sharp", "time", "timer_outline", "timer_sharp", "timer", "today_outline", "today_sharp", "today", "toggle_outline", "toggle_sharp", "toggle", "trail_sign_outline", "trail_sign_sharp", "trail_sign", "train_outline", "train_sharp", "train", "transgender_outline", "transgender_sharp", "transgender", "trash_bin_outline", "trash_bin_sharp", "trash_bin", "trash_outline", "trash_sharp", "trash", "trending_down_outline", "trending_down_sharp", "trending_down", "trending_up_outline", "trending_up_sharp", "trending_up", "triangle_outline", "triangle_sharp", "triangle", "trophy_outline", "trophy_sharp", "trophy", "tv_outline", "tv_sharp", "tv", "umbrella_outline", "umbrella_sharp", "umbrella", "unlink_outline", "unlink_sharp", "unlink", "videocam_off_outline", "videocam_off_sharp", "videocam_off", "videocam_outline", "videocam_sharp", "videocam", "volume_high_outline", "volume_high_sharp", "volume_high", "volume_low_outline", "volume_low_sharp", "volume_low", "volume_medium_outline", "volume_medium_sharp", "volume_medium", "volume_mute_outline", "volume_mute_sharp", "volume_mute", "volume_off_outline", "volume_off_sharp", "volume_off", "walk_outline", "walk_sharp", "walk", "wallet_outline", "wallet_sharp", "wallet", "warning_outline", "warning_sharp", "warning", "watch_outline", "watch_sharp", "watch", "water_outline", "water_sharp", "water", "wifi_outline", "wifi_sharp", "wifi", "wine_outline", "wine_sharp", "wine", "woman_outline", "woman_sharp", "woman"];
let svg = [ `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" cx="256" cy="56" r="40" />
      <path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" d="M204.23,274.44c2.9-18.06,4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88,176.76c-12-4-23.21-10.7-24-23.94-1-17,14-28,29-24,0,0,88,31.14,163,31.14s162-31,162-31c18-5,30,9,30,23.79,0,14.21-11,19.21-24,23.94l-88,31.91c-8,3-21,9-26,18.18-6,10.75-5,29.53-2.1,47.59l5.9,29.63L351.21,467.9c2.8,13.15-6.3,25.44-19.4,27.74S308,489,304.12,476.28L266.56,360.35q-2.71-8.34-4.8-16.87L256,320l-5.3,21.65q-2.52,10.35-5.8,20.48L208,476.18c-4,12.85-14.5,21.75-27.6,19.46S158,480.05,160.94,467.9l37.39-163.83Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M448,112c-66.82,17.92-119.55,32-192,32S130.82,129.92,64,112L48,163c48,20.53,96.71,35.16,147.2,53.2L144,496l56.4,16L246,336h20l45.6,176L368,496,316.8,216.2C367.26,199.93,416,183.53,464,164Z" />
      <path d="M256,112a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,112Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256,112a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,112Z" />
      <path d="M432,112.8l-.45.12h0l-.42.13c-1,.28-2,.58-3,.89-18.61,5.46-108.93,30.92-172.56,30.92-59.13,0-141.28-22-167.56-29.47a73.79,73.79,0,0,0-8-2.58c-19-5-32,14.3-32,31.94,0,17.47,15.7,25.79,31.55,31.76v.28l95.22,29.74c9.73,3.73,12.33,7.54,13.6,10.84,4.13,10.59.83,31.56-.34,38.88l-5.8,45L150.05,477.44q-.15.72-.27,1.47l-.23,1.27h0c-2.32,16.15,9.54,31.82,32,31.82,19.6,0,28.25-13.53,32-31.94h0s28-157.57,42-157.57,42.84,157.57,42.84,157.57h0c3.75,18.41,12.4,31.94,32,31.94,22.52,0,34.38-15.74,32-31.94-.21-1.38-.46-2.74-.76-4.06L329,301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1.09,1.09,0,0,0,.08-.15c1.08-2,6-6.48,17.48-10.79l89.28-31.21a16.9,16.9,0,0,0,1.62-.52c16-6,32-14.3,32-31.93S451,107.81,432,112.8Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="256" y1="176" x2="256" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336" y1="256" x2="176" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm96,224H272v80H240V272H160V240h80V160h32v80h80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,224H272v64a16,16,0,0,1-32,0V272H176a16,16,0,0,1,0-32h64V176a16,16,0,0,1,32,0v64h64a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <line x1="256" y1="112" x2="256" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="400" y1="256" x2="112" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <line x1="256" y1="112" x2="256" y2="400" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <line x1="400" y1="256" x2="112" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <line x1="256" y1="112" x2="256" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="400" y1="256" x2="112" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M407.72,224c-3.4,0-14.79.1-18,.3l-64.9,1.7a1.83,1.83,0,0,1-1.69-.9L193.55,67.56A9,9,0,0,0,186.89,64H160l73,161a2.35,2.35,0,0,1-2.26,3.35l-121.69,1.8a8.06,8.06,0,0,1-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29,0-1.1,1.21-.75,2.43L52.17,249.9a16.3,16.3,0,0,1,0,11.9L32.31,333c-.59,1.95-.52,3,1.77,3H52c8.14,0,9.25-1.06,13.41-6.3l37.7-45.7a8.19,8.19,0,0,1,6.6-3.1l120.68,2.7a2.7,2.7,0,0,1,2.43,3.74L160,448h26.64a9,9,0,0,0,6.65-3.55L323.14,287c.39-.6,2-.9,2.69-.9l63.9,1.7c3.3.2,14.59.3,18,.3C452,288.1,480,275.93,480,256S452.12,224,407.72,224Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M407.72,208c-2.72,0-14.44.08-18.67.31l-57.77,1.52L198.06,48H135.25l74.59,164.61-97.31,1.44L68.25,160H16.14l20.61,94.18c.15.54.33,1.07.53,1.59a.26.26,0,0,1,0,.15,15.42,15.42,0,0,0-.53,1.58L15.86,352H67.64l45.45-55,96.77,2.17L135.24,464h63l133-161.75,57.77,1.54c4.29.23,16,.31,18.66.31,24.35,0,44.27-3.34,59.21-9.94C492.22,283,496,265.46,496,256,496,225.94,463,208,407.72,208Zm-71.29,87.9v0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M186.62,464H160a16,16,0,0,1-14.57-22.6l64.46-142.25L113.1,297,77.8,339.77C71.07,348.23,65.7,352,52,352H34.08a17.66,17.66,0,0,1-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38,0,0,0,0-.15,14.82,14.82,0,0,1-.53-1.59L16.92,182.76c-2.15-7.61.2-12.93,2.56-16.06a16.83,16.83,0,0,1,13.6-6.7H52c10.23,0,20.16,4.59,26,12l34.57,42.05,97.32-1.44-64.44-142A16,16,0,0,1,160,48h26.91a25,25,0,0,1,19.35,9.8l125.05,152,57.77-1.52c4.23-.23,15.95-.31,18.66-.31C463,208,496,225.94,496,256c0,9.46-3.78,27-29.07,38.16-14.93,6.6-34.85,9.94-59.21,9.94-2.68,0-14.37-.08-18.66-.31l-57.76-1.54-125.36,152A25,25,0,0,1,186.62,464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M416.07,272a160,160,0,1,0-160,160A160,160,0,0,0,416.07,272Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M142.12,91.21A46.67,46.67,0,0,0,112,80l-2.79.08C83.66,81.62,64,104,64.07,131c0,13.21,4.66,19.37,10.88,27.23A4.55,4.55,0,0,0,78.19,160h.88a3.23,3.23,0,0,0,2.54-1.31L142.38,99a5.38,5.38,0,0,0,1.55-4A5.26,5.26,0,0,0,142.12,91.21Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M369.88,91.21A46.67,46.67,0,0,1,400,80l2.79.08C428.34,81.62,448,104,447.93,131c0,13.21-4.66,19.37-10.88,27.23a4.55,4.55,0,0,1-3.24,1.76h-.88a3.23,3.23,0,0,1-2.54-1.31L369.62,99a5.38,5.38,0,0,1-1.55-4A5.26,5.26,0,0,1,369.88,91.21Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="256.07 160 256.07 272 176.07 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="416.07" y1="432" x2="376.07" y2="392" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="96.07" y1="432" x2="136.07" y2="392" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M403.79,64.11l-3.27-.1H400c-14.73,0-28.55,5.91-40.52,15S344,96,344,96l88,86s11.25-5.71,17.61-13.85,14.28-18.08,14.32-37.11C464,95.55,437.6,66.15,403.79,64.11Z" />
      <path d="M108.21,64.11l3.27-.1H112c14.73,0,28.55,5.91,40.52,15S168,96,168,96L80,182s-11.25-5.71-17.61-13.85S48.11,150.07,48.07,131C48,95.55,74.4,66.15,108.21,64.11Z" />
      <path d="M391.3,384.6a.06.06,0,0,1,0-.08C425,344,441,288.24,427,229.23c-13.64-57.52-72.67-115.69-130.34-128.66C182,74.79,80.07,161.71,80.07,272a175.15,175.15,0,0,0,40.78,112.52.06.06,0,0,1,0,.08L73,432a.06.06,0,0,0,0,.08L96,454.59a.06.06,0,0,0,.08,0l47.43-47.37a.06.06,0,0,1,.08,0,175.64,175.64,0,0,0,225.05,0,0,0,0,0,1,.07,0L416,454.59a.06.06,0,0,0,.08,0L440,432ZM272.07,288h-112A0,0,0,0,1,160,288v-31.9a0,0,0,0,1,.05-.05h80a0,0,0,0,0,0-.05V144h32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M153.59,110.46A21.41,21.41,0,0,0,152.48,79h0A62.67,62.67,0,0,0,112,64l-3.27.09-.48,0C74.4,66.15,48,95.55,48.07,131c0,19,8,29.06,14.32,37.11a20.61,20.61,0,0,0,14.7,7.8c.26,0,.7.05,2,.05a19.06,19.06,0,0,0,13.75-5.89Z" />
      <path d="M403.79,64.11l-3.27-.1H400a62.67,62.67,0,0,0-40.52,15,21.41,21.41,0,0,0-1.11,31.44l60.77,59.65A19.06,19.06,0,0,0,432.93,176c1.28,0,1.72,0,2-.05a20.61,20.61,0,0,0,14.69-7.8c6.36-8.05,14.28-18.08,14.32-37.11C464,95.55,437.6,66.15,403.79,64.11Z" />
      <path d="M256.07,96c-97,0-176,78.95-176,176a175.23,175.23,0,0,0,40.81,112.56L84.76,420.69a16,16,0,1,0,22.63,22.62l36.12-36.12a175.63,175.63,0,0,0,225.12,0l36.13,36.12a16,16,0,1,0,22.63-22.62l-36.13-36.13A175.17,175.17,0,0,0,432.07,272C432.07,175,353.12,96,256.07,96Zm16,176a16,16,0,0,1-16,16h-80a16,16,0,0,1,0-32h64V160a16,16,0,0,1,32,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="64" y="176" width="384" height="256" rx="28.87" ry="28.87" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="144" y1="80" x2="368" y2="80" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="112" y1="128" x2="400" y2="128" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="128" y="64" width="256" height="32" />
      <rect x="96" y="112" width="320" height="32" />
      <path d="M464,448H48V160H464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M368,96H144a16,16,0,0,1,0-32H368a16,16,0,0,1,0,32Z" />
      <path d="M400,144H112a16,16,0,0,1,0-32H400a16,16,0,0,1,0,32Z" />
      <path d="M419.13,448H92.87A44.92,44.92,0,0,1,48,403.13V204.87A44.92,44.92,0,0,1,92.87,160H419.13A44.92,44.92,0,0,1,464,204.87V403.13A44.92,44.92,0,0,1,419.13,448Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M250.26,166.05,256,288l5.73-121.95a5.74,5.74,0,0,0-5.79-6h0A5.74,5.74,0,0,0,250.26,166.05Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,367.91a20,20,0,1,1,20-20A20,20,0,0,1,256,367.91Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polygon points="240 304 272 304 278 144 234 144 240 304" style="fill:none" />
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm20,319.91H236v-40h40ZM272,304H240l-6-160h44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm0,319.91a20,20,0,1,1,20-20A20,20,0,0,1,256,367.91Zm21.72-201.15-5.74,122a16,16,0,0,1-32,0l-5.74-121.94v-.05a21.74,21.74,0,1,1,43.44,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,80c-8.66,0-16.58,7.36-16,16l8,216a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8l8-216C272.58,87.36,264.66,80,256,80Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="416" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polygon points="240 80 248 320 264 320 272 80 240 80" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="240" y="400" width="32" height="32" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,80c-8.66,0-16.58,7.36-16,16l8,216a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8l8-216C272.58,87.36,264.66,80,256,80Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="416" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <ellipse cx="256" cy="256" rx="267.57" ry="173.44" transform="translate(-106.04 256) rotate(-45)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="334.04" y1="177.96" x2="177.96" y2="334.04" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="278.3" y1="278.3" x2="233.7" y2="233.7" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="322.89" y1="233.7" x2="278.3" y2="189.11" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="456.68" y1="211.4" x2="300.6" y2="55.32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="211.4" y1="456.68" x2="55.32" y2="300.6" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="233.7" y1="322.89" x2="189.11" y2="278.3" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M120.9,120.51c-44.75,44.56-67.29,101.05-78.64,145.9L244.57,467.85c45.05-11.3,101.78-33.74,146.53-78.3s67.29-101.05,78.64-145.91L267.43,42.21C222.38,53.51,165.65,76,120.9,120.51Zm259,257.83h0Zm-45-224.2,22.52,22.42-33.78,33.63,22.52,22.42L323.55,255,301,232.61,278.52,255,301,277.45l-22.51,22.42L256,277.45l-22.52,22.42L256,322.29l-22.52,22.42L211,322.29l-33.78,33.63L154.67,333.5l33.78-33.63-22.52-22.42L188.45,255,211,277.45,233.48,255,211,232.61l22.51-22.42L256,232.61l22.52-22.42L256,187.77l22.52-22.42L301,187.77Z" />
      <path d="M478.48,198.41C485.85,143.65,464,48.05,464,48.05S367.86,26.17,312.86,33.51c-2.54.33-5.21.72-8,1.14L477.33,206.36C477.76,203.6,478.14,200.94,478.48,198.41Z" />
      <path d="M33.52,311.65C26.15,366.41,48.05,464,48.05,464s60,16,99.86,16a391.92,391.92,0,0,0,51.23-3.45c2.54-.33,5.21-.72,8-1.15L34.67,303.7C34.24,306.46,33.86,309.12,33.52,311.65Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M122.06,122.06c-44.37,44.37-66.71,100.61-78,145.28L244.66,467.9c44.67-11.25,100.91-33.59,145.28-78s66.71-100.61,78-145.28L267.34,44.1C222.67,55.35,166.43,77.69,122.06,122.06ZM378.79,378.78h0ZM300.65,189,323,166.71A15.78,15.78,0,0,1,345.29,189L323,211.35l11.16,11.17a15.78,15.78,0,0,1-22.32,22.32l-11.16-11.16L278.32,256l11.16,11.16a15.78,15.78,0,1,1-22.32,22.32L256,278.32l-22.32,22.33,11.16,11.16a15.78,15.78,0,1,1-22.32,22.32L211.35,323,189,345.29A15.78,15.78,0,0,1,166.71,323L189,300.65l-11.16-11.17a15.78,15.78,0,0,1,22.32-22.32l11.16,11.16L233.68,256l-11.16-11.16a15.78,15.78,0,1,1,22.32-22.32L256,233.68l22.32-22.33-11.16-11.16a15.78,15.78,0,0,1,22.32-22.32Z" />
      <path d="M476.57,199.63c7.31-54.53,4-120.26-20-144.21s-89.68-27.3-144.21-20c-2.51.34-5.16.72-7.91,1.15l171,171C475.85,204.79,476.23,202.14,476.57,199.63Z" />
      <path d="M35.43,312.37c-7.31,54.53-4,120.26,20,144.21C72.17,473.33,109.34,480,148.84,480a387,387,0,0,0,50.79-3.43c2.51-.34,5.16-.72,7.91-1.15l-171-171C36.15,307.21,35.77,309.86,35.43,312.37Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <line x1="344" y1="280" x2="432" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="232" y1="216" x2="296" y2="280" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="80" y1="320" x2="184" y2="216" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="456" cy="168" r="24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="320" cy="304" r="24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="208" cy="192" r="24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="56" cy="344" r="24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M450,128a46,46,0,0,0-44.11,59l-71.37,71.36a45.88,45.88,0,0,0-29,0l-52.91-52.91a46,46,0,1,0-89.12,0L75,293.88A46.08,46.08,0,1,0,106.11,325l87.37-87.36a45.85,45.85,0,0,0,29,0l52.92,52.92a46,46,0,1,0,89.12,0L437,218.12A46,46,0,1,0,450,128Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M456,128a40,40,0,0,0-37.23,54.6L334.6,266.77a39.86,39.86,0,0,0-29.2,0L245.23,206.6a40,40,0,1,0-74.46,0L70.6,306.77A40,40,0,1,0,93.23,329.4L193.4,229.23a39.86,39.86,0,0,0,29.2,0l60.17,60.17a40,40,0,1,0,74.46,0l84.17-84.17A40,40,0,1,0,456,128Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="360" y1="94.59" x2="360" y2="296" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="443.13" y1="212.87" x2="296" y2="360" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="417.41" y1="360" x2="216" y2="360" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="299.13" y1="443.13" x2="155.13" y2="299.13" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="152" y1="416" x2="152" y2="216" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="68.87" y1="299.13" x2="212.87" y2="155.13" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="94.59" y1="152" x2="288" y2="152" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="212.87" y1="68.87" x2="360" y2="216" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polygon points="216 48 345.49 176.18 345.49 48 216 48" />
      <polygon points="181.47 58.38 80 134 256 134 181.47 58.38" />
      <polygon points="336 344 464 344 464 216 336 344" />
      <polygon points="454 182 378 80 378 256 454 182" />
      <polygon points="48 166 48 294 176 166 48 166" />
      <polygon points="330 454 432 378 256 378 330 454" />
      <polygon points="58 330 134 432 134 256 58 330" />
      <path d="M345.49,222.12l-55.55-55.46H222.06l-55.55,55.46v67.76l55.62,55.52c.44,0,.88-.06,1.33-.06h66.48l55.55-55.46Z" />
      <polygon points="165.98 336.09 166 464 294 464 165.98 336.09" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M250.54,129.17l-67.8-67.8A209.65,209.65,0,0,0,86.32,136h161.4A4,4,0,0,0,250.54,129.17Z" />
      <path d="M167.72,168H67.63A207.34,207.34,0,0,0,51.48,293.9L170.54,174.83A4,4,0,0,0,167.72,168Z" />
      <path d="M344,167.72V67.56A207.82,207.82,0,0,0,218.11,51.48L337.17,170.54A4,4,0,0,0,344,167.72Z" />
      <path d="M460.52,218.1,341.46,337.17a4,4,0,0,0,2.82,6.83H444.37a207.34,207.34,0,0,0,16.15-125.9Z" />
      <path d="M382.83,250.54l67.83-67.82A209.08,209.08,0,0,0,376,86.2V247.72A4,4,0,0,0,382.83,250.54Z" />
      <path d="M221.68,341.77a8,8,0,0,0,5.54,2.23h59.66a8,8,0,0,0,5.7-2.39l49.18-50a8,8,0,0,0,2.3-5.62L344,225.18a8,8,0,0,0-2.38-5.69l-50-49.25a8,8,0,0,0-5.63-2.3l-60.84.06a8,8,0,0,0-5.69,2.38l-49.25,50a8,8,0,0,0-2.3,5.63l.06,60.78a8,8,0,0,0,2.45,5.76Z" />
      <path d="M261.46,382.83l67.8,67.8A209.65,209.65,0,0,0,425.68,376H264.28A4,4,0,0,0,261.46,382.83Z" />
      <path d="M168,344.28V444.44a207.82,207.82,0,0,0,125.89,16.08L174.83,341.46A4,4,0,0,0,168,344.28Z" />
      <path d="M129.17,261.46,61.34,329.29A209.1,209.1,0,0,0,136,425.8V264.28A4,4,0,0,0,129.17,261.46Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <rect x="64" y="64" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="216" y="64" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="368" y="64" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="64" y="216" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="216" y="216" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="368" y="216" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="64" y="368" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="216" y="368" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="368" y="368" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <rect x="48" y="48" width="112" height="112" rx="8" ry="8" />
      <rect x="200" y="48" width="112" height="112" rx="8" ry="8" />
      <rect x="352" y="48" width="112" height="112" rx="8" ry="8" />
      <rect x="48" y="200" width="112" height="112" rx="8" ry="8" />
      <rect x="200" y="200" width="112" height="112" rx="8" ry="8" />
      <rect x="352" y="200" width="112" height="112" rx="8" ry="8" />
      <rect x="48" y="352" width="112" height="112" rx="8" ry="8" />
      <rect x="200" y="352" width="112" height="112" rx="8" ry="8" />
      <rect x="352" y="352" width="112" height="112" rx="8" ry="8" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z" />
      <path d="M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z" />
      <path d="M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z" />
      <path d="M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z" />
      <path d="M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z" />
      <path d="M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z" />
      <path d="M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z" />
      <path d="M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z" />
      <path d="M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M80,152V408a40.12,40.12,0,0,0,40,40H392a40.12,40.12,0,0,0,40-40V152" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="48" y="64" width="416" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="320 304 256 368 192 304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="345.89" x2="256" y2="224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="32" y="48" width="448" height="80" rx="12" ry="12" />
      <path d="M64,160V440a24,24,0,0,0,24,24H424a24,24,0,0,0,24-24V160ZM256,390.63,169.32,304,192,281.32,240,329.37V208h32V329.37l48.07-48.07,22.61,22.64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M64,164V408a56,56,0,0,0,56,56H392a56,56,0,0,0,56-56V164a4,4,0,0,0-4-4H68A4,4,0,0,0,64,164ZM331,315.63l-63.69,63.68a16,16,0,0,1-22.62,0L181,315.63c-6.09-6.09-6.65-16-.85-22.38a16,16,0,0,1,23.16-.56L240,329.37V224.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,224V329.37l36.69-36.68a16,16,0,0,1,23.16.56C337.65,299.62,337.09,309.54,331,315.63Z" />
      <rect x="32" y="48" width="448" height="80" rx="32" ry="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="249.38 336 170 256 249.38 176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="181.03" y1="256" x2="342" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm224-80.09L208.42,240H358v32H208.42L272,336.09,249.3,358.63,147.46,256,249.3,153.37Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm212.65-91.36a16,16,0,0,1,.09,22.63L208.42,240H342a16,16,0,0,1,0,32H208.42l52.32,52.73A16,16,0,1,1,238,347.27l-79.39-80a16,16,0,0,1,0-22.54l79.39-80A16,16,0,0,1,260.65,164.64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="244 400 100 256 244 112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="120" y1="256" x2="412" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="244 400 100 256 244 112" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
      <line x1="120" y1="256" x2="412" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="244 400 100 256 244 112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="120" y1="256" x2="412" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="176 262.62 256 342 336 262.62" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="330.97" x2="256" y2="170" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,464c114.87,0,208-93.13,208-208S370.87,48,256,48,48,141.13,48,256,141.13,464,256,464ZM175.91,240,240,303.58V154h32V303.58L336.09,240l22.54,22.71L256,364.54,153.37,262.7Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,464c114.87,0,208-93.13,208-208S370.87,48,256,48,48,141.13,48,256,141.13,464,256,464ZM164.64,251.35a16,16,0,0,1,22.63-.09L240,303.58V170a16,16,0,0,1,32,0V303.58l52.73-52.32A16,16,0,1,1,347.27,274l-80,79.39a16,16,0,0,1-22.54,0l-80-79.39A16,16,0,0,1,164.64,251.35Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="112 268 256 412 400 268" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="256" y1="392" x2="256" y2="100" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="112 268 256 412 400 268" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
      <line x1="256" y1="392" x2="256" y2="100" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="112 268 256 412 400 268" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="256" y1="392" x2="256" y2="100" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="262.62 336 342 256 262.62 176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="330.97" y1="256" x2="170" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM240,336.09,303.58,272H154V240H303.58L240,175.91l22.71-22.54L364.54,256,262.7,358.63Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM251.35,347.36a16,16,0,0,1-.09-22.63L303.58,272H170a16,16,0,0,1,0-32H303.58l-52.32-52.73A16,16,0,1,1,274,164.73l79.39,80a16,16,0,0,1,0,22.54l-79.39,80A16,16,0,0,1,251.35,347.36Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="268 112 412 256 268 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="392" y1="256" x2="100" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="268 112 412 256 268 400" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
      <line x1="392" y1="256" x2="100" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="268 112 412 256 268 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="392" y1="256" x2="100" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M266.91,327.74V290.42c-57.07,0-84.51,13.47-108.58,38.68-5.4,5.65-15,1.32-14.29-6.43,5.45-61.45,34.14-117.09,122.87-117.09V168.26a8.32,8.32,0,0,1,14-6L365.42,242a8.2,8.2,0,0,1,0,11.94L281,333.71A8.32,8.32,0,0,1,266.91,327.74Z" />
      <path d="M64,256c0,106,86,192,192,192s192-86,192-192S362,64,256,64,64,150,64,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm98,88c0-68.13,22.67-137.14,119.17-137.14V152L366,248,265.17,344V289.14C198.48,289.14,173.85,308.43,146,344Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm96,66.67c5.45-61.45,34.14-117.09,122.87-117.09V168.26a8.32,8.32,0,0,1,14-6L365.42,242a8.2,8.2,0,0,1,0,11.94L281,333.71a8.32,8.32,0,0,1-14-6V290.42c-57.07,0-84.51,13.47-108.58,38.68C152.93,334.75,143.35,330.42,144,322.67Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M448,256,272,88v96C103.57,184,64,304.77,64,424c48.61-62.24,91.6-96,208-96v96Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M48,399.26C48,335.19,62.44,284,90.91,247c34.38-44.67,88.68-68.77,161.56-71.75V72L464,252,252.47,432V329.35c-44.25,1.19-77.66,7.58-104.27,19.84-28.75,13.25-49.6,33.05-72.08,58.7L48,440Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M58.79,439.13A16,16,0,0,1,48,424c0-73.1,14.68-131.56,43.65-173.77,35-51,90.21-78.46,164.35-81.87V88a16,16,0,0,1,27.05-11.57l176,168a16,16,0,0,1,0,23.14l-176,168A16,16,0,0,1,256,424V344.23c-45,1.36-79,8.65-106.07,22.64-29.25,15.12-50.46,37.71-73.32,67a16,16,0,0,1-17.82,5.28Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M245.09,327.74V290.42c57.07,0,84.51,13.47,108.58,38.68,5.4,5.65,15,1.32,14.29-6.43-5.45-61.45-34.14-117.09-122.87-117.09V168.26a8.32,8.32,0,0,0-14.05-6L146.58,242a8.2,8.2,0,0,0,0,11.94L231,333.71A8.32,8.32,0,0,0,245.09,327.74Z" />
      <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm-9.17,241.14V344L146,248l100.83-96v54.86c96.5,0,119.17,69,119.17,137.14C338.15,308.43,313.52,289.14,246.83,289.14Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm97.67,281.1c-24.07-25.21-51.51-38.68-108.58-38.68v37.32a8.32,8.32,0,0,1-14.05,6L146.58,254a8.2,8.2,0,0,1,0-11.94L231,162.29a8.32,8.32,0,0,1,14.05,6v37.32c88.73,0,117.42,55.64,122.87,117.09C368.65,330.42,359.07,334.75,353.67,329.1Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M240,424V328c116.4,0,159.39,33.76,208,96,0-119.23-39.57-240-208-240V88L64,256Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M464,440l-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7-26.61-12.26-60-18.65-104.27-19.84V432L48,252,259.53,72V175.21c72.88,3,127.18,27.08,161.56,71.75C449.56,284,464,335.19,464,399.26Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M448,440a16,16,0,0,1-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335,352.88,301,345.59,256,344.23V424A16,16,0,0,1,229,435.57l-176-168a16,16,0,0,1,0-23.14l176-168A16,16,0,0,1,256,88v80.36c74.14,3.41,129.38,30.91,164.35,81.87C449.32,292.44,464,350.9,464,424a16,16,0,0,1-16,16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="176 249.38 256 170 336 249.38" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="181.03" x2="256" y2="342" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm80.09,224L272,208.42V358H240V208.42L175.91,272,153.37,249.3,256,147.46,358.63,249.3Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm91.36,212.65a16,16,0,0,1-22.63.09L272,208.42V342a16,16,0,0,1-32,0V208.42l-52.73,52.32A16,16,0,1,1,164.73,238l80-79.39a16,16,0,0,1,22.54,0l80,79.39A16,16,0,0,1,347.36,260.65Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="112 244 256 100 400 244" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="256" y1="120" x2="256" y2="412" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="112 244 256 100 400 244" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
      <line x1="256" y1="120" x2="256" y2="412" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="112 244 256 100 400 244" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="256" y1="120" x2="256" y2="412" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M448.08,256.08c0-106-86-192-192-192s-192,86-192,192,86,192,192,192S448.08,362.11,448.08,256.08Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M300.81,358.29c-20.83,7.42-34.05,9.59-54.19,9.59-61.17,0-106.39-50.07-101-111.84S205,144.21,266.14,144.21c68.92,0,106.79,45.55,101.47,106.55-4,45.54-32.8,58.66-47.89,56-14.2-2.55-25.92-15.52-23.75-40.35l5.62-44.66c-7.58-9.17-28.11-18-49.93-14.54C231.77,210.3,209,228,206.56,256s14.49,50.84,39.93,50.84,47.86-18.39,50.69-50.84" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:28px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M256.41,48.74c-114.85,0-208,93.11-208,208s93.12,208,208,208,208-93.12,208-208S371.25,48.74,256.41,48.74ZM381.22,252c-2.85,32.63-16.78,49.7-28,58.26s-24.69,12.34-36.33,10.26a41.63,41.63,0,0,1-27-17.52,60.84,60.84,0,0,1-43.72,17.9,51.65,51.65,0,0,1-38.55-16.83c-11.39-12.42-17-30.36-15.33-49.23,3.05-35,30.92-57.39,56.87-61.48,27.21-4.29,52.24,6.54,62.91,19.46l3.84,4.66-6.34,50.38c-1.19,14.34,3.29,23.48,12.29,25.1,2.39.42,8.11-.13,14.38-4.93,6.72-5.15,15.14-16,17.1-38.47,2.32-26.55-4.35-49.19-19.28-65.49-15.5-16.9-39.1-25.84-68.24-25.84-54,0-101.81,44.43-106.57,99-2.29,26.2,5.66,50.68,22.39,68.93C198,344,221,353.88,246.29,353.88c19,0,30.61-2.05,49.49-8.78L309,340.41l9.39,26.37-13.19,4.7c-21.82,7.77-36.68,10.4-58.88,10.4-33.28,0-63.57-13.06-85.3-36.77-22.09-24.11-32.62-56.17-29.65-90.29,2.91-33.33,18.46-64.63,43.77-88.12s57.57-36.49,90.7-36.49c37.2,0,67.94,12.08,88.88,34.93C374.77,187.05,384.2,217.89,381.22,252Z" />
      <path d="M253.51,221c-14.83,2.33-31.55,15.84-33.34,36.26-1,11.06,2,21.22,8.08,27.87a23.63,23.63,0,0,0,17.91,7.75c19.7,0,33.8-14.79,36.8-38.59l1.75-13.89h.09l1.65-13.11a49.63,49.63,0,0,0-32.94-6.3Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M255.46,48.74c-114.84,0-208,93.11-208,208s93.12,208,208,208,208-93.12,208-208S370.31,48.74,255.46,48.74ZM380.28,252c-2.85,32.63-16.79,49.7-28,58.26S327.61,322.58,316,320.5a41.61,41.61,0,0,1-26.82-17.19,62.06,62.06,0,0,1-44,17.57,51.66,51.66,0,0,1-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23,3-35,30.91-57.39,56.87-61.48,27.2-4.29,52.23,6.54,62.9,19.46l3.85,4.66-6.34,50.38c-1.19,14.34,3.28,23.48,12.29,25.1,2.39.42,8.1-.13,14.37-4.93,6.72-5.15,15.14-16,17.1-38.47C354.7,223,348,200.35,333.1,184.05c-15.49-16.9-39.09-25.84-68.23-25.84-54,0-101.81,44.43-106.58,99-2.28,26.2,5.67,50.68,22.4,68.93C197.05,344,220,353.88,245.35,353.88c19,0,30.61-2.05,49.48-8.78a14,14,0,0,1,9.4,26.38c-21.82,7.77-36.68,10.4-58.88,10.4-33.28,0-63.57-13.06-85.3-36.77C138,321,127.42,288.94,130.4,254.82c2.91-33.33,18.45-64.63,43.77-88.12s57.57-36.49,90.7-36.49c37.2,0,67.93,12.08,88.87,34.93C373.83,187.05,383.25,217.89,380.28,252Z" />
      <path d="M252.57,221c-14.83,2.33-31.56,15.84-33.34,36.26-1,11.06,2,21.22,8.07,27.87a23.65,23.65,0,0,0,17.91,7.75c20.31,0,34.73-14.94,36.75-38.06a14,14,0,0,1,.34-2.07l3.2-25.45a49.61,49.61,0,0,0-32.93-6.3Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M320,254.27c-4.5,51-40.12,80-80.55,80s-67.34-35.82-63.45-80,37.12-80,77.55-80S323.88,210.27,320,254.27Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M319.77,415.77c-28.56,12-47.28,14.5-79.28,14.5-97.2,0-169-78.8-160.49-176s94.31-176,191.51-176C381,78.27,441.19,150,432.73,246c-6.31,71.67-52.11,92.32-76.09,88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M407.6,115.78c-32.07-35-79.47-53.51-137.09-53.51-51,0-100.69,19.8-139.82,55.76S67.56,201.87,63.06,252.86C58.51,304.53,74.47,353.15,108,389.76c33.37,36.44,80.07,56.51,131.49,56.51,32.52,0,53.61-2.36,85.48-15.75l14.75-6.2-12.4-29.5L312.57,401c-27.15,11.4-43.78,13.25-73.08,13.25-42.34,0-80.65-16.38-107.89-46.12-27.4-29.92-40.42-69.86-36.66-112.48,7.84-89,86.6-161.4,175.57-161.4,48.4,0,87.65,14.91,113.49,43.13,24.61,26.87,35.6,63.92,31.79,107.15-3.29,37.35-17.76,55.74-29.32,64.6-11,8.44-22,10.18-28,9.11-17.68-3.13-26.87-20.46-24.59-46.29l9.93-109.12L311.9,160l-2,22.29a79.69,79.69,0,0,0-57.32-24c-23.8,0-46.54,10.07-64,28.37-16.77,17.53-27.23,41.05-29.45,66.22-2.45,27.87,5.75,54.34,22.51,72.64a76.14,76.14,0,0,0,56.88,24.77A93,93,0,0,0,310,318a60,60,0,0,0,42.88,31.81c16.89,3,36.73-2.69,53.08-15.21,30.19-23.13,39.36-60.19,41.74-87.2C452.22,195.7,438,149,407.6,115.78Zm-126.34,186a62.19,62.19,0,0,1-42.81,16.53,43.94,43.94,0,0,1-33.28-14.38c-10.71-11.7-15.9-29.27-14.23-48.22,3.23-36.68,30.29-65.4,61.61-65.4a48.16,48.16,0,0,1,35.88,15.82C299.3,218,304.63,235,303.06,252.86,301.28,273.14,293.73,290,281.26,301.74Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M320,254.27c-4.5,51-40.12,80-80.55,80s-67.34-35.82-63.45-80,37.12-80,77.55-80S323.88,210.27,320,254.27Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M319.77,415.77c-28.56,12-47.28,14.5-79.28,14.5-97.2,0-169-78.8-160.49-176s94.31-176,191.51-176C381,78.27,441.19,150,432.73,246c-6.31,71.67-52.11,92.32-76.09,88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M216.08,192V335.85a40.08,40.08,0,0,0,80.15,0l.13-188.55a67.94,67.94,0,1,0-135.87,0V337.12a95.51,95.51,0,1,0,191,0V159.74" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M216.08,192V335.55a40.08,40.08,0,0,0,80.15,0L296.36,147a67.94,67.94,0,1,0-135.87,0V336.82a95.51,95.51,0,0,0,191,0V159.44" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M216.08,192V335.85a40.08,40.08,0,0,0,80.15,0l.13-188.55a67.94,67.94,0,1,0-135.87,0V337.12a95.51,95.51,0,1,0,191,0V159.74" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M135.19,390.14A28.79,28.79,0,0,0,156.87,400H403.13A29,29,0,0,0,432,371.13V140.87A29,29,0,0,0,403.13,112H156.87a28.84,28.84,0,0,0-21.67,9.84v0L46.33,256l88.86,134.11Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336.67" y1="192.33" x2="206.66" y2="322.34" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336.67" y1="322.34" x2="206.66" y2="192.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336.67" y1="192.33" x2="206.66" y2="322.34" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336.67" y1="322.34" x2="206.66" y2="192.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M144,96,32,256,144,416H448V96ZM359.3,322.34,336.67,345l-65-65-65,65L184,322.34l65-65-65-65,22.63-22.63,65,65,65-65,22.63,22.63-65,65Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M403.13,96H156.87a44.9,44.9,0,0,0-33.68,15.27,15.88,15.88,0,0,0-1.91,2.7L32,247.75a16,16,0,0,0,0,16.5l89.15,133.57a16.24,16.24,0,0,0,2,2.88,44.89,44.89,0,0,0,33.7,15.3H403.13A44.92,44.92,0,0,0,448,371.13V140.87A44.92,44.92,0,0,0,403.13,96ZM348,311a16,16,0,1,1-22.63,22.62L271.67,280,218,333.65A16,16,0,0,1,195.35,311L249,257.33l-53.69-53.69A16,16,0,0,1,218,181l53.69,53.7L325.36,181A16,16,0,0,1,348,203.64l-53.7,53.69Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line x1="256" y1="256" x2="256" y2="384" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="320" y1="320" x2="192" y2="320" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <path d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" fill-rule="evenodd" />
      <path d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" fill-rule="evenodd" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M460,160H372V148A116.13,116.13,0,0,0,258.89,32c-1,0-1.92,0-2.89,0s-1.93,0-2.89,0A116.13,116.13,0,0,0,140,148v12H52a4,4,0,0,0-4,4V464a16,16,0,0,0,16,16H448a16,16,0,0,0,16-16V164A4,4,0,0,0,460,160ZM180,149c0-41.84,33.41-76.56,75.25-77A76.08,76.08,0,0,1,332,148v12H180ZM336,336H272v64H240V336H176V304h64V240h32v64h64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M454.66,169.4A31.86,31.86,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.78,31.78,0,0,0,454.66,169.4ZM320,336H272v48a16,16,0,0,1-32,0V336H192a16,16,0,0,1,0-32h48V256a16,16,0,0,1,32,0v48h48a16,16,0,0,1,0,32Zm16-176H176V144a80,80,0,0,1,160,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" points="320 264 230.4 376 192 331.12" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" fill-rule="evenodd" d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" fill-rule="evenodd" d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M460,160H372V148A116.13,116.13,0,0,0,258.89,32c-1,0-1.92,0-2.89,0s-1.93,0-2.89,0A116.13,116.13,0,0,0,140,148v12H52a4,4,0,0,0-4,4V464a16,16,0,0,0,16,16H448a16,16,0,0,0,16-16V164A4,4,0,0,0,460,160ZM180,149c0-41.84,33.41-76.56,75.25-77A76.08,76.08,0,0,1,332,148v12H180Zm50.81,252.12-61.37-71.72,24.31-20.81L230,350.91l87.51-109.4,25,20Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M454.65,169.4A31.82,31.82,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.75,31.75,0,0,0,454.65,169.4ZM332.49,274l-89.6,112a16,16,0,0,1-12.23,6h-.26a16,16,0,0,1-12.16-5.6l-38.4-44.88a16,16,0,1,1,24.32-20.8L230,350.91,307.51,254a16,16,0,0,1,25,20ZM336,160H176V144a80,80,0,0,1,160,0Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <path d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <path d="M160,224v16a96,96,0,0,0,96,96h0a96,96,0,0,0,96-96V224" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M460,160H372V148A116.13,116.13,0,0,0,258.89,32c-1,0-1.92,0-2.89,0s-1.93,0-2.89,0A116.13,116.13,0,0,0,140,148v12H52a4,4,0,0,0-4,4V464a16,16,0,0,0,16,16H448a16,16,0,0,0,16-16V164A4,4,0,0,0,460,160ZM180,149c0-41.84,33.41-76.56,75.25-77A76.08,76.08,0,0,1,332,148v12H180Zm188,91a112,112,0,0,1-224,0V208h32v32a80,80,0,0,0,160,0V208h32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M454.65,169.4A31.82,31.82,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.75,31.75,0,0,0,454.65,169.4ZM176,144a80,80,0,0,1,160,0v16H176Zm192,96a112,112,0,0,1-224,0V224a16,16,0,0,1,32,0v16a80,80,0,0,0,160,0V224a16,16,0,0,1,32,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" fill-rule="evenodd" d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" fill-rule="evenodd" d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" x1="320" y1="320" x2="192" y2="320" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" fill-rule="evenodd" d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" fill-rule="evenodd" d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M460,160H372V148A116.13,116.13,0,0,0,258.89,32c-1,0-1.92,0-2.89,0s-1.93,0-2.89,0A116.13,116.13,0,0,0,140,148v12H52a4,4,0,0,0-4,4V464a16,16,0,0,0,16,16H448a16,16,0,0,0,16-16V164A4,4,0,0,0,460,160ZM180,149c0-41.84,33.41-76.56,75.25-77A76.08,76.08,0,0,1,332,148v12H180ZM336,336H176V304H336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M454.66,169.4A31.86,31.86,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.78,31.78,0,0,0,454.66,169.4ZM320,336H192a16,16,0,0,1,0-32H320a16,16,0,0,1,0,32Zm16-176H176V144a80,80,0,0,1,160,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M372,160V148A116.13,116.13,0,0,0,258.89,32c-1,0-1.92,0-2.89,0s-1.93,0-2.89,0A116.13,116.13,0,0,0,140,148v12H52a4,4,0,0,0-4,4V464a16,16,0,0,0,16,16H448a16,16,0,0,0,16-16V164a4,4,0,0,0-4-4Zm-40,0H180V149c0-41.84,33.41-76.56,75.25-77A76.08,76.08,0,0,1,332,148Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M454.65,169.4A31.82,31.82,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.75,31.75,0,0,0,454.65,169.4ZM176,144a80,80,0,0,1,160,0v16H176Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M414.11,153.82C429.66,264.4,345.85,357.09,282.54,366s-169.48-57.5-185-167.68a159.82,159.82,0,1,1,316.53-44.49Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" />
      <path d="M236.06,308.05c-32.83-13-67.08-43.1-82.27-85.46" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" />
      <path d="M367.7,495.78c-32.83-13-63.31-40.06-78.5-82.41" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" />
      <polygon points="266.71 368.21 257.54 417.82 320.85 408.92 298.36 363.76 266.71 368.21" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M391,307.27c32.75-46.35,46.59-101.63,39-155.68h0C416.47,55.59,327.38-11.54,231.38,2S68.24,104.53,81.73,200.53c7.57,53.89,36.12,103.16,80.37,138.74,26.91,21.64,57.59,36.1,86.05,41.33l-8.36,45.23a8,8,0,0,0,9,9.38L279,431c15.9,35.87,41.65,60.48,78.41,75l14.88,5.88,11.77-29.75-14.88-5.89c-26.35-10.42-44.48-26.16-57-49.92l21.84-3.07a8,8,0,0,0,6.05-11.49l-20.49-41.16C345.56,357.73,371.07,335.42,391,307.27ZM230.18,322.93c-41.26-16.32-76.3-52.7-91.45-94.94l-5.4-15.06,30.12-10.8,5.4,15.06c14.5,40.44,47.27,65.77,73.1,76l14.88,5.88-11.77,29.76Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M391,307.27c32.75-46.35,46.59-101.63,39-155.68A175.82,175.82,0,0,0,231.38,2c-96,13.49-163.14,102.58-149.65,198.58,7.57,53.89,36.12,103.16,80.37,138.74C186.68,359,214.41,372.82,240.72,379a8,8,0,0,1,6,9.22l-4.87,26.38a16.29,16.29,0,0,0,1.48,10.57,16,16,0,0,0,14.2,8.61,15.21,15.21,0,0,0,2.23-.16l17.81-2.5a2,2,0,0,1,2.09,1.14c16.72,36.31,45.46,63.85,82.15,78.36a16,16,0,0,0,21-9.65c2.83-8.18-1.64-17.07-9.68-20.28a118.57,118.57,0,0,1-59.3-51.88,2,2,0,0,1,1.45-3l7.4-1a16.54,16.54,0,0,0,10.08-5.23,16,16,0,0,0,2.39-17.8l-12.06-24.23A8,8,0,0,1,326.35,367C349.94,353.83,372.8,333,391,307.27Zm-154.9,16.78a16,16,0,0,1-5.88-1.12c-41.26-16.32-76.3-52.7-91.45-94.94a16,16,0,1,1,30.12-10.8c14.5,40.44,47.27,65.77,73.1,76a16,16,0,0,1-5.89,30.88Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle cx="256" cy="256" r="208" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" />
      <line x1="108.92" y1="108.92" x2="403.08" y2="403.08" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM432,256a175.09,175.09,0,0,1-35.8,106.26L149.74,115.8A175.09,175.09,0,0,1,256,80C353.05,80,432,159,432,256ZM80,256a175.09,175.09,0,0,1,35.8-106.26L362.26,396.2A175.09,175.09,0,0,1,256,432C159,432,80,353.05,80,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="48" cx="256" cy="256" r="200" />
      <line stroke="#000" stroke-miterlimit="10" stroke-width="48" x1="114.58" y1="114.58" x2="397.42" y2="397.42" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <rect x="-24.43" y="167.88" width="560.87" height="176.25" rx="88.12" ry="88.12" transform="translate(-106.04 256) rotate(-45)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="169.41" y="156.59" width="176" height="196" rx="32" ry="32" transform="translate(255.41 -107.45) rotate(45)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="208" r="16" />
      <circle cx="304" cy="256" r="16" />
      <circle cx="208" cy="256" r="16" />
      <circle cx="256" cy="304" r="16" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M27.71,337.1a40,40,0,0,0,0,56.54l90.65,90.65h0a40,40,0,0,0,56.54,0l75.1-75.1L102.81,262Z" />
      <path d="M496,147.1a39.87,39.87,0,0,0-11.75-28.38l-91-91a40.14,40.14,0,0,0-56.75,0L264,100.28,411.72,248l72.53-72.53A39.85,39.85,0,0,0,496,147.1Z" />
      <path d="M273.06,386.19l116-116L241.77,123l-116,116Zm19.63-141.5a16,16,0,1,1,0,22.62A16,16,0,0,1,292.69,244.69Zm-48-48a16,16,0,1,1,0,22.62A16,16,0,0,1,244.69,196.69Zm0,96a16,16,0,1,1,0,22.62A16,16,0,0,1,244.69,292.69Zm-25.38-48a16,16,0,1,1-22.62,0A16,16,0,0,1,219.31,244.69Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M275.8,157a16,16,0,0,0-22.63,0l-93.34,93.34a16,16,0,0,0,0,22.63l79.2,79.2h0a16,16,0,0,0,22.63,0L355,258.83a16,16,0,0,0,0-22.63Z" style="fill:none" />
      <path d="M137.21,295.6a47.81,47.81,0,0,1-9.43-13.38L69,341a72.2,72.2,0,0,0,0,102h0a72.37,72.37,0,0,0,102,0l58.77-58.76a47.81,47.81,0,0,1-13.38-9.43Z" style="fill:none" />
      <path d="M392,48a71.55,71.55,0,0,0-51,21l-55.92,55.91a48.05,48.05,0,0,1,13.36,9.45l79.19,79.19a48.05,48.05,0,0,1,9.45,13.36L443,171A72,72,0,0,0,392,48Z" style="fill:none" />
      <path d="M275.8,157a16,16,0,0,0-22.63,0l-93.34,93.34a16,16,0,0,0,0,22.63l79.2,79.2h0a16,16,0,0,0,22.63,0L355,258.83a16,16,0,0,0,0-22.63ZM219.31,267.31a16,16,0,1,1,0-22.62A16,16,0,0,1,219.31,267.31Zm48,48a16,16,0,1,1,0-22.62A16,16,0,0,1,267.31,315.31Zm0-96a16,16,0,1,1,0-22.62A16,16,0,0,1,267.31,219.31Zm48,48a16,16,0,1,1,0-22.62A16,16,0,0,1,315.31,267.31Z" />
      <path d="M465.61,46.39a104.38,104.38,0,0,0-147.25,0L248.6,116.28a4,4,0,0,0,4.2,6.58,35.74,35.74,0,0,1,11.69-2.54,47.7,47.7,0,0,1,33.94,14.06l79.19,79.19a47.7,47.7,0,0,1,14.06,33.94,35.68,35.68,0,0,1-2.54,11.69,4,4,0,0,0,6.58,4.2l69.89-69.76a104.38,104.38,0,0,0,0-147.25Z" />
      <path d="M254.34,386.83a47.91,47.91,0,0,1-33.94-14L141.21,293.6a47.81,47.81,0,0,1-9.43-13.38c-4.59-9.7-1.39-25,2.48-36.9a4,4,0,0,0-6.64-4L50.39,316.36A104.12,104.12,0,0,0,197.64,463.61l72.75-72.88a4,4,0,0,0-4.21-6.58C262,385.73,257.78,386.83,254.34,386.83Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M32,32V464a16,16,0,0,0,16,16H480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="96" y="224" width="80" height="192" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="240" y="176" width="80" height="240" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="383.64" y="112" width="80" height="304" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <polygon points="496 496 16 496 16 16 48 16 48 464 496 464 496 496" />
      <path d="M192,432H80V208H192Z" />
      <path d="M336,432H224V160H336Z" />
      <path d="M479.64,432h-112V96h112Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M480,496H48a32,32,0,0,1-32-32V32a16,16,0,0,1,32,0V464H480a16,16,0,0,1,0,32Z" />
      <path d="M156,432H116a36,36,0,0,1-36-36V244a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,156,432Z" />
      <path d="M300,432H260a36,36,0,0,1-36-36V196a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,300,432Z" />
      <path d="M443.64,432h-40a36,36,0,0,1-36-36V132a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,443.64,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <line x1="48" y1="256" x2="464" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="384" y="128" width="32" height="256" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="96" y="128" width="32" height="256" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="32" y="192" width="16" height="128" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="464" y="192" width="16" height="128" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <polygon points="496 176 438 176 438 112 362 112 362 234 150 234 150 112 74 112 74 176 16 176 16 336 74 336 74 400 150 400 150 278 362 278 362 400 438 400 438 336 496 336 496 176" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M467,176a29.94,29.94,0,0,0-25.32,12.5,2,2,0,0,1-3.64-1.14V150.71c0-20.75-16.34-38.21-37.08-38.7A38,38,0,0,0,362,150v82a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V150.71c0-20.75-16.34-38.21-37.08-38.7A38,38,0,0,0,74,150v37.38a2,2,0,0,1-3.64,1.14A29.94,29.94,0,0,0,45,176c-16.3.51-29,14.31-29,30.62v98.72c0,16.31,12.74,30.11,29,30.62a29.94,29.94,0,0,0,25.32-12.5A2,2,0,0,1,74,324.62v36.67C74,382,90.34,399.5,111.08,400A38,38,0,0,0,150,362V280a2,2,0,0,1,2-2H360a2,2,0,0,1,2,2v81.29c0,20.75,16.34,38.21,37.08,38.7A38,38,0,0,0,438,362V324.62a2,2,0,0,1,3.64-1.14A29.94,29.94,0,0,0,467,336c16.3-.51,29-14.31,29-30.62V206.64C496,190.33,483.26,176.53,467,176Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M384,400.33l35.13-.33A29,29,0,0,0,448,371.13V140.87A29,29,0,0,0,419.13,112l-35.13.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M128,112l-36.8.33c-15.88,0-27.2,13-27.2,28.87V371.47c0,15.87,11.32,28.86,27.2,28.86L128,400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="384" y1="192" x2="384" y2="320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="320" y1="160" x2="320" y2="352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="176" x2="256" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="192" y1="160" x2="192" y2="352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="128" y1="192" x2="128" y2="320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <polyline points="400 400.33 448 400 448 112 400 112.33" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="112 112 64 112.33 64 400.33 112 400" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <line x1="384" y1="192" x2="384" y2="320" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <line x1="320" y1="160" x2="320" y2="352" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="176" x2="256" y2="336" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <line x1="192" y1="160" x2="192" y2="352" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <line x1="128" y1="192" x2="128" y2="320" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M419.13,96H419l-35.05.33L128,96h-.16l-36.74.33C66.93,96.38,48,116.07,48,141.2V371.47c0,25.15,19,44.86,43.2,44.86h.15l36.71-.33,255.92.33h.17l35.07-.33A44.91,44.91,0,0,0,464,371.13V140.87A44.92,44.92,0,0,0,419.13,96ZM144,320a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Zm64,32a16,16,0,0,1-32,0V160a16,16,0,0,1,32,0Zm64-16a16,16,0,0,1-32,0V176a16,16,0,0,1,32,0Zm64,16a16,16,0,0,1-32,0V160a16,16,0,0,1,32,0Zm64-32a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <line x1="294.25" y1="108.6" x2="233.68" y2="126.19" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="317.13" y1="156.11" x2="265.63" y2="192.51" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="355.89" y1="194.87" x2="319.49" y2="246.37" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="403.4" y1="217.75" x2="385.81" y2="278.32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M432.94,255.05A192,192,0,0,1,256.63,74.35" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="108.54" y1="294.31" x2="126.13" y2="233.74" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="156.05" y1="317.19" x2="192.45" y2="265.69" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="194.81" y1="355.95" x2="246.31" y2="319.55" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="217.69" y1="403.46" x2="278.26" y2="385.87" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M255,433.61A192,192,0,0,0,74.29,256.69" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M302.16,56.2a13.88,13.88,0,0,1-3.42,8.91l-.11,5.13-27.71-.57c0,1.3.09,2.61.16,3.91h0a177.33,177.33,0,0,0,3.45,26.31l24.72-7.18,7.81,26.88-24.71,7.18a177.21,177.21,0,0,0,13.34,27.69l21.27-15,16.16,22.86-21.29,15.05q5.25,6.33,11.11,12.19c3.91,3.91,8,7.6,12.2,11.1l15.71-22.22,22.86,16.16L358,216.75a178.78,178.78,0,0,0,27.68,13.32l7.49-25.8,26.89,7.81-7.5,25.83a177.8,177.8,0,0,0,31,3.67l-.41-24.67,17.41-.29A208,208,0,0,0,301.82,52.93,13.65,13.65,0,0,1,302.16,56.2Z" />
      <path d="M214,441.64l27.91.49a177.46,177.46,0,0,0-3.62-29.95l-24.14,7-7.81-26.88,24.11-7a177.92,177.92,0,0,0-13.33-27.68L196.79,372l-16.16-22.86L201,334.73c-3.49-4.22-7.19-8.3-11.09-12.2s-8-7.62-12.19-11.12l-13.91,19.68L141,314.93l13.9-19.66a177.26,177.26,0,0,0-27.7-13.33l-6.37,21.94-26.89-7.81,6.38-22A177.32,177.32,0,0,0,74,270.67c-1.59-.09-3.18-.16-4.78-.2l.4,22.34-17.71.32A207.88,207.88,0,0,0,213.72,459.61Z" />
      <path d="M444.65,302.67l-.55-33.06a206,206,0,0,1-39.33-4.74L397,291.8,370.06,284l7.83-27a206.91,206.91,0,0,1-36.06-17.35l-16.36,23.15-22.86-16.16,16.33-23.11a204.21,204.21,0,0,1-30-30L266.75,209.2l-16.16-22.87,22.17-15.67a206,206,0,0,1-17.38-36.06l-25.75,7.48-7.81-26.89,25.73-7.47q-2-9.21-3.18-18.64l-.47,0-.78-14h0l-.33-6-17.94-.32a13.38,13.38,0,0,1-1.79-.16l-6.35-.13.06-2.47a14,14,0,0,1-5.66-11.49,13.27,13.27,0,0,1,.13-1.67A208,208,0,0,0,52.16,217.43l16.1-.28.45,25.18,6.83.38,14,.77,0,.48q9.42,1.17,18.64,3.18l6.68-23L141.7,232,135,255a205.3,205.3,0,0,1,36.06,17.38l14.53-20.56L208.47,268,194,288.5a203.5,203.5,0,0,1,30,30l21.3-15,16.16,22.86L240.1,341.41a206.86,206.86,0,0,1,17.34,36.06l25.27-7.33L290.52,397l-25.24,7.33A205.9,205.9,0,0,1,270,442.63l29.42.53-.29,16.48a207.94,207.94,0,0,0,160-157.21Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M444,295.67l-.47-26.07a205.42,205.42,0,0,1-39.27-4.73l-5,17.35a14,14,0,1,1-26.88-7.81l5-17.38a206.47,206.47,0,0,1-36.05-17.35l-10.44,14.77a14,14,0,0,1-22.87-16.16l10.41-14.73a204.8,204.8,0,0,1-30-30L273.71,204a14,14,0,0,1-16.16-22.87l14.74-10.42a205.3,205.3,0,0,1-17.38-36.06l-17.32,5a14,14,0,1,1-7.81-26.89l17.3-5a205.88,205.88,0,0,1-4.43-32.59h0q-.17-3-.24-6l-18.22-.33a14,14,0,0,1-13.74-14A208,208,0,0,0,55,202.42a16,16,0,0,1,15,15.66l.44,24.43c1.58.05,3.16.11,4.73.2a205.88,205.88,0,0,1,32.59,4.43l5-17.3a14,14,0,0,1,26.89,7.81l-5,17.32a205.21,205.21,0,0,1,36,17.38L181,257.61a14,14,0,0,1,22.87,16.16L193.48,288.5a205.65,205.65,0,0,1,15.79,14.23,203.79,203.79,0,0,1,14.23,15.79l14.73-10.41A14,14,0,0,1,254.39,331l-14.76,10.43A206.86,206.86,0,0,1,257,377.47l17.38-5.05a14,14,0,0,1,7.81,26.89l-17.35,5a205.89,205.89,0,0,1,4.7,38.28l18.27.33a16,16,0,0,1,15.71,16.28,11.69,11.69,0,0,1-.08,1.19A208,208,0,0,0,456.83,309.36,14,14,0,0,1,444,295.67Z" />
      <path d="M301.49,56.2A14,14,0,0,1,287.5,70h-.25l-16.81-.3c.05,1.31.1,2.62.17,3.93h0a178.83,178.83,0,0,0,3.44,26.31l16.29-4.74A14,14,0,0,1,298.15,122l-16.27,4.73a178.06,178.06,0,0,0,13.33,27.69l13.84-9.78a14,14,0,1,1,16.16,22.87l-13.86,9.79q5.25,6.33,11.12,12.19c3.9,3.91,8,7.6,12.2,11.1l9.78-13.84A14,14,0,1,1,367.32,203l-9.76,13.8a178.83,178.83,0,0,0,27.68,13.33L390,213.85a14,14,0,0,1,26.89,7.81l-4.73,16.26a177.72,177.72,0,0,0,30.95,3.65l-.16-9a14,14,0,0,1,13.75-14.24h.25a14.67,14.67,0,0,1,2.59.25,208,208,0,0,0-158-163.51C301.48,55.47,301.5,55.83,301.49,56.2Z" />
      <path d="M208.44,457.55a16,16,0,0,1,16.28-15.71l16.76.29a178.49,178.49,0,0,0-3.62-29.95L221.6,416.9A14,14,0,1,1,213.79,390L230,385.3a177.92,177.92,0,0,0-13.33-27.68l-13.8,9.76a14,14,0,1,1-16.16-22.87l13.84-9.78c-3.5-4.22-7.19-8.3-11.1-12.2s-8-7.62-12.19-11.12l-9.79,13.86a14,14,0,1,1-22.87-16.16l9.78-13.84a177.16,177.16,0,0,0-27.69-13.33L122,298.21A14,14,0,1,1,95.1,290.4l4.73-16.29a177.32,177.32,0,0,0-26.31-3.44c-.89-.05-1.79-.08-2.68-.12L71,281.14a16,16,0,0,1-15.71,16.28H55a16,16,0,0,1-3.94-.51A208,208,0,0,0,208.71,460.78,15.72,15.72,0,0,1,208.44,457.55Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M68.4,192A20.38,20.38,0,0,0,48,212.2a17.87,17.87,0,0,0,.8,5.5L100.5,400a40.46,40.46,0,0,0,39.1,29.5H372.4A40.88,40.88,0,0,0,411.7,400l51.7-182.3.6-5.5A20.38,20.38,0,0,0,443.6,192H68.4ZM261.72,352.07A42.07,42.07,0,1,1,304,310,42.27,42.27,0,0,1,261.72,352.07Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="160 192 256 64 352 192" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M339.2,217.6,256,106.67,172.8,217.6l-25.6-19.2,96-128a16,16,0,0,1,25.6,0l96,128Z" />
      <path d="M441.59,192H70.41a12,12,0,0,0-11.68,14.77L112.59,434H399.41l53.86-227.23A12,12,0,0,0,441.59,192ZM256,351.66A37.71,37.71,0,1,1,293.89,314,37.88,37.88,0,0,1,256,351.66Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M424.11,192H360L268.8,70.4a16,16,0,0,0-25.6,0L152,192H87.89a32.57,32.57,0,0,0-32.62,32.44,30.3,30.3,0,0,0,1.31,9l46.27,163.14a50.72,50.72,0,0,0,48.84,36.91H360.31a51.21,51.21,0,0,0,49-36.86l46.33-163.36a15.62,15.62,0,0,0,.46-2.36l.53-4.93a13.3,13.3,0,0,0,.09-1.55A32.57,32.57,0,0,0,424.11,192ZM256,106.67,320,192H192Zm0,245a37.7,37.7,0,1,1,37.88-37.7A37.87,37.87,0,0,1,256,351.63Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M432.94,255.05A192,192,0,0,1,256.63,74.35" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M255,433.61A192,192,0,0,0,74.29,256.69" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="120.24" y1="120.24" x2="391.76" y2="391.76" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="120.24" y1="391.76" x2="391.76" y2="120.24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M256,233.37l34.45-34.45A207.08,207.08,0,0,1,240.33,63.67c0-5,.19-10.05.54-15A207.09,207.09,0,0,0,120.67,98Z" />
      <path d="M313.14,176.23,391.33,98A207.07,207.07,0,0,0,273,48.8c-.41,4.9-.64,9.86-.64,14.87A175.25,175.25,0,0,0,313.14,176.23Z" />
      <path d="M335.77,198.86a175.25,175.25,0,0,0,112.56,40.81c5,0,10-.23,14.87-.64A207.07,207.07,0,0,0,414,120.67Z" />
      <path d="M176.23,313.14A175.23,175.23,0,0,0,63.67,272.33q-7.52,0-14.87.64A207.07,207.07,0,0,0,98,391.33Z" />
      <path d="M256,278.63l-34.45,34.45a207.08,207.08,0,0,1,50.12,135.25c0,5-.19,10.05-.54,15A207.06,207.06,0,0,0,391.33,414Z" />
      <path d="M448.33,271.67a207.08,207.08,0,0,1-135.25-50.12L278.63,256,414,391.33a207.09,207.09,0,0,0,49.39-120.2C458.38,271.48,453.37,271.67,448.33,271.67Z" />
      <path d="M233.37,256,98,120.67a207.06,207.06,0,0,0-49.39,120.2c5-.35,10-.54,15-.54a207.08,207.08,0,0,1,135.25,50.12Z" />
      <path d="M120.67,414A207.07,207.07,0,0,0,239,463.2q.63-7.35.64-14.87a175.23,175.23,0,0,0-40.81-112.56Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M256,233.37l34.45-34.45A207.08,207.08,0,0,1,240.33,63.67c0-5,.19-10.05.54-15A207.09,207.09,0,0,0,120.67,98Z" />
      <path d="M313.14,176.23,391.33,98A207.07,207.07,0,0,0,273,48.8c-.41,4.9-.64,9.86-.64,14.87A175.25,175.25,0,0,0,313.14,176.23Z" />
      <path d="M335.77,198.86a175.25,175.25,0,0,0,112.56,40.81c5,0,10-.23,14.87-.64A207.07,207.07,0,0,0,414,120.67Z" />
      <path d="M176.23,313.14A175.23,175.23,0,0,0,63.67,272.33q-7.52,0-14.87.64A207.07,207.07,0,0,0,98,391.33Z" />
      <path d="M256,278.63l-34.45,34.45a207.08,207.08,0,0,1,50.12,135.25c0,5-.19,10.05-.54,15A207.06,207.06,0,0,0,391.33,414Z" />
      <path d="M448.33,271.67a207.08,207.08,0,0,1-135.25-50.12L278.63,256,414,391.33a207.09,207.09,0,0,0,49.39-120.2C458.38,271.48,453.37,271.67,448.33,271.67Z" />
      <path d="M233.37,256,98,120.67a207.06,207.06,0,0,0-49.39,120.2c5-.35,10-.54,15-.54a207.08,207.08,0,0,1,135.25,50.12Z" />
      <path d="M120.67,414A207.07,207.07,0,0,0,239,463.2q.63-7.35.64-14.87a175.23,175.23,0,0,0-40.81-112.56Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M48,322.3V189.7A29.74,29.74,0,0,1,77.7,160H215.14l24.4-32H77.7A61.77,61.77,0,0,0,16,189.7V322.3A61.77,61.77,0,0,0,77.7,384h96.85a22.57,22.57,0,0,1,.26-7.32l.15-.75.21-.73,6.5-23.2H77.7A29.74,29.74,0,0,1,48,322.3Z" />
      <path d="M386.3,128H287.66a22.69,22.69,0,0,1-.27,7.2l-.15.74-.21.73L280.49,160H386.3A29.74,29.74,0,0,1,416,189.7V322.3A29.74,29.74,0,0,1,386.3,352H247l-24.42,32H386.3A61.77,61.77,0,0,0,448,322.3V189.7A61.77,61.77,0,0,0,386.3,128Z" />
      <path d="M162.65,294.16a24.37,24.37,0,0,1-21.56-13,25,25,0,0,1,1.42-25.83l.31-.46.33-.44L197.62,183H89.69a20,20,0,0,0-20,20V309a20,20,0,0,0,20,20h98.42l9.78-34.86Z" />
      <path d="M276.07,280.89l27.07-35.49a5.2,5.2,0,0,0,.77-1.91,5,5,0,0,0,.08-.66,5,5,0,0,0-.08-1.29,5.11,5.11,0,0,0-.68-1.75,4.76,4.76,0,0,0-.78-.95,3.48,3.48,0,0,0-.48-.38,4,4,0,0,0-1.11-.55,4.28,4.28,0,0,0-1.31-.2H237.93l12.12-43.21L253.28,183l6.21-22.16L260,159l7.79-27.76h0a3.51,3.51,0,0,0,.05-.55c0-.06,0-.11,0-.16s0-.26-.05-.38,0-.09,0-.14a2.2,2.2,0,0,0-.17-.45h0a3.77,3.77,0,0,0-.26-.39l-.09-.1a2.73,2.73,0,0,0-.25-.23l-.1-.08a3.14,3.14,0,0,0-.39-.24h0a2,2,0,0,0-.41-.14l-.13,0-.33,0h-.13a2.3,2.3,0,0,0-.45,0h0a1.9,1.9,0,0,0-.42.15l-.13.07-.3.21-.11.1a2.4,2.4,0,0,0-.36.41h0l-18,23.63-13.14,17.22L222.77,183l-63.71,83.55a5.72,5.72,0,0,0-.44.8,4.78,4.78,0,0,0-.35,1.09,4.7,4.7,0,0,0-.08,1.29,4.86,4.86,0,0,0,2,3.71,4.74,4.74,0,0,0,.54.31,4.31,4.31,0,0,0,1.89.43h61.62L194.42,380.6a3.64,3.64,0,0,0,0,.56s0,.1,0,.15a2.32,2.32,0,0,0,.06.38.58.58,0,0,0,0,.14,2.2,2.2,0,0,0,.17.45h0a3.62,3.62,0,0,0,.26.38l.09.1.25.24a.39.39,0,0,1,.1.08,2.22,2.22,0,0,0,.39.23h0a2.83,2.83,0,0,0,.41.14l.13,0a1.86,1.86,0,0,0,.33,0h.13a2.32,2.32,0,0,0,.45-.06h0a2.05,2.05,0,0,0,.41-.16l.13-.07.3-.21.11-.09a2.4,2.4,0,0,0,.36-.41h0L221.82,352l17.53-23Z" />
      <path d="M319.5,256.93l-.46.6L264.51,329h109.8a20,20,0,0,0,20-20V203a20,20,0,0,0-20-20H274.05l-9.74,34.73h35.24A24.35,24.35,0,0,1,321,230.5a25.21,25.21,0,0,1-1,25.79Z" />
      <path d="M480,202.67a16,16,0,0,0-16,16v74.66a16,16,0,0,0,32,0V218.67A16,16,0,0,0,480,202.67Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M306.68,237.62h-66.5l15.33-54.7L261.94,160,265.88,146l4.29-15.33h0a3.56,3.56,0,0,0,.06-.44c0-.06,0-.12,0-.19a1.85,1.85,0,0,0,0-.23,2,2,0,0,0,0-.24l0-.14c0-.1-.07-.19-.11-.29l0-.05a2.33,2.33,0,0,0-2-1.35h-.1a2.25,2.25,0,0,0-1.8,1h0l-12.5,17.15L234.9,171.44l-8.36,11.48-35.41,48.6L160,274.26h66.44l-30,107a3.93,3.93,0,0,0-.06.48s0,.06,0,.1a1.94,1.94,0,0,0,0,.34.29.29,0,0,0,0,.09,3,3,0,0,0,.07.32l0,.06a1.83,1.83,0,0,0,.14.32v0a2.38,2.38,0,0,0,1.52,1.16l.11,0,.33,0h.13a2.1,2.1,0,0,0,1.31-.5l.06-.05a2.6,2.6,0,0,0,.42-.45h0L223.3,352l13-17.82Z" />
      <path d="M289.78,134.55l-.14.74-.21.73-6.72,24H417V352H248.05l-23.33,32H449V128H290.13A22.62,22.62,0,0,1,289.78,134.55Z" />
      <path d="M49,160H218.49l23.31-32H17V384H176.49a22.73,22.73,0,0,1,.34-6.67l.15-.75.2-.73L183.87,352H49Z" />
      <polygon points="264.76 329.08 395.31 329.08 395.31 182.92 276.28 182.92 266.55 217.62 306.68 217.62 346 217.62 322.84 249.4 264.76 329.08" />
      <polygon points="160 294.26 120.69 294.26 143.84 262.48 201.79 182.92 70.69 182.92 70.69 329.08 190.29 329.08 200.06 294.26 160 294.26" />
      <rect x="465" y="202.67" width="32" height="106.67" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M48,322.3V189.7A29.74,29.74,0,0,1,77.7,160H215.14l24.4-32H77.7A61.77,61.77,0,0,0,16,189.7V322.3A61.77,61.77,0,0,0,77.7,384h96.85a22.57,22.57,0,0,1,.26-7.32l.15-.75.21-.73,6.5-23.2H77.7A29.74,29.74,0,0,1,48,322.3Z" />
      <path d="M386.3,128H287.66a22.69,22.69,0,0,1-.27,7.2l-.15.74-.21.73L280.49,160H386.3A29.74,29.74,0,0,1,416,189.7V322.3A29.74,29.74,0,0,1,386.3,352H247l-24.42,32H386.3A61.77,61.77,0,0,0,448,322.3V189.7A61.77,61.77,0,0,0,386.3,128Z" />
      <path d="M162.65,294.16a24.37,24.37,0,0,1-21.56-13,25,25,0,0,1,1.42-25.83l.31-.46.33-.44L197.62,183H89.69a20,20,0,0,0-20,20V309a20,20,0,0,0,20,20h98.42l9.78-34.86Z" />
      <path d="M276.07,280.89l27.07-35.49a5.2,5.2,0,0,0,.77-1.91,5,5,0,0,0,.08-.66,5,5,0,0,0-.08-1.29,5.11,5.11,0,0,0-.68-1.75,4.76,4.76,0,0,0-.78-.95,3.48,3.48,0,0,0-.48-.38,4,4,0,0,0-1.11-.55,4.28,4.28,0,0,0-1.31-.2H237.93l12.12-43.21L253.28,183l6.21-22.16L260,159l7.79-27.76h0a3.51,3.51,0,0,0,.05-.55c0-.06,0-.11,0-.16s0-.26-.05-.38,0-.09,0-.14a2.2,2.2,0,0,0-.17-.45h0a3.77,3.77,0,0,0-.26-.39l-.09-.1a2.73,2.73,0,0,0-.25-.23l-.1-.08a3.14,3.14,0,0,0-.39-.24h0a2,2,0,0,0-.41-.14l-.13,0-.33,0h-.13a2.3,2.3,0,0,0-.45,0h0a1.9,1.9,0,0,0-.42.15l-.13.07-.3.21-.11.1a2.4,2.4,0,0,0-.36.41h0l-18,23.63-13.14,17.22L222.77,183l-63.71,83.55a5.72,5.72,0,0,0-.44.8,4.78,4.78,0,0,0-.35,1.09,4.7,4.7,0,0,0-.08,1.29,4.86,4.86,0,0,0,2,3.71,4.74,4.74,0,0,0,.54.31,4.31,4.31,0,0,0,1.89.43h61.62L194.42,380.6a3.64,3.64,0,0,0,0,.56s0,.1,0,.15a2.32,2.32,0,0,0,.06.38.58.58,0,0,0,0,.14,2.2,2.2,0,0,0,.17.45h0a3.62,3.62,0,0,0,.26.38l.09.1.25.24a.39.39,0,0,1,.1.08,2.22,2.22,0,0,0,.39.23h0a2.83,2.83,0,0,0,.41.14l.13,0a1.86,1.86,0,0,0,.33,0h.13a2.32,2.32,0,0,0,.45-.06h0a2.05,2.05,0,0,0,.41-.16l.13-.07.3-.21.11-.09a2.4,2.4,0,0,0,.36-.41h0L221.82,352l17.53-23Z" />
      <path d="M319.5,256.93l-.46.6L264.51,329h109.8a20,20,0,0,0,20-20V203a20,20,0,0,0-20-20H274.05l-9.74,34.73h35.24A24.35,24.35,0,0,1,321,230.5a25.21,25.21,0,0,1-1,25.79Z" />
      <path d="M480,202.67a16,16,0,0,0-16,16v74.66a16,16,0,0,0,32,0V218.67A16,16,0,0,0,480,202.67Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <rect x="31" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="479" y1="218.67" x2="479" y2="293.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <rect x="32" y="144" width="400" height="224" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="480" y1="218.67" x2="480" y2="293.33" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <rect x="31" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="479" y1="218.67" x2="479" y2="293.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="85.69" y="198.93" width="292.63" height="114.14" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="480" y1="218.67" x2="480" y2="293.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M17,384H449V128H17ZM49,160H417V352H49Z" />
      <rect x="70.69" y="182.94" width="324.63" height="146.13" />
      <rect x="465" y="202.67" width="32" height="106.67" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="85.69" y="198.93" width="292.63" height="114.14" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="480" y1="218.67" x2="480" y2="293.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="85.69" y="198.93" width="154.31" height="114.13" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="480" y1="218.67" x2="480" y2="293.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M17,384H449V128H17ZM49,160H417V352H49Z" />
      <rect x="70.69" y="182.92" width="185.31" height="146.16" />
      <rect x="465" y="202.67" width="32" height="106.67" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="85.69" y="198.93" width="154.31" height="114.13" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="480" y1="218.67" x2="480" y2="293.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M445.2,48.05,398,48H128C73.7,48,64,83.7,64,96c30.3,4.2,48,8,48,40V400A64,64,0,0,0,176,464H368a64,64,0,0,0,64-64V96c0-19,11.5-38.35,12.6-40,1.2-1.9,3.4-4.4,3.4-5.5S447.7,48.05,445.2,48.05Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="176" x2="432" y2="176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M453.55,54.7,464,32l-335.6,0c-27.74,0-49,6.57-63.31,19.51C54.39,61.27,48,74.89,48,88v24H64c31,0,32,16.79,32,35V460a20,20,0,0,0,20,20H428a20,20,0,0,0,20-20V96C448,78.84,450.28,61.86,453.55,54.7ZM416,96v64H128V138c0-36.15-21-51-41.77-53.46C89,70,105.7,64.05,128.4,64.05H418.32A221.83,221.83,0,0,0,416,96Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M444,32H128c-19.38,0-45.9,4.34-64.11,24.77C52.17,69.92,48,85.66,48,96a16,16,0,0,0,13.8,15.85C91.7,116,96,117.79,96,136V400A80.07,80.07,0,0,0,176,480H368a80.11,80.11,0,0,0,80-80V96c0-12.55,7.46-27.25,10-31.36l.1-.14c.22-.35.5-.72.78-1.1,2-2.79,5.09-7,5.09-12.95C464,39.79,454.89,32,444,32ZM84.11,83.08c5.24-8.87,17.17-19,44.29-19H422.83C419.3,72.87,416,84.27,416,96v64H128V136C128,98.68,106.65,87.86,84.11,83.08Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M432,224V96a16,16,0,0,0-16-16H96A16,16,0,0,0,80,96V224a48,48,0,0,0-48,48V432H68V400H444v32h36V272A48,48,0,0,0,432,224Zm-192,0H120V192a16,16,0,0,1,16-16h88a16,16,0,0,1,16,16Zm32-32a16,16,0,0,1,16-16h88a16,16,0,0,1,16,16v32H272Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M432,230.7a79.44,79.44,0,0,0-32-6.7H112a79.51,79.51,0,0,0-32,6.69h0A80.09,80.09,0,0,0,32,304V416a16,16,0,0,0,32,0v-8a8.1,8.1,0,0,1,8-8H440a8.1,8.1,0,0,1,8,8v8a16,16,0,0,0,32,0V304A80.09,80.09,0,0,0,432,230.7Z" />
      <path d="M376,80H136a56,56,0,0,0-56,56v72a4,4,0,0,0,5.11,3.84A95.5,95.5,0,0,1,112,208h4.23a4,4,0,0,0,4-3.55A32,32,0,0,1,152,176h56a32,32,0,0,1,31.8,28.45,4,4,0,0,0,4,3.55h24.46a4,4,0,0,0,4-3.55A32,32,0,0,1,304,176h56a32,32,0,0,1,31.8,28.45,4,4,0,0,0,4,3.55H400a95.51,95.51,0,0,1,26.89,3.85A4,4,0,0,0,432,208V136A56,56,0,0,0,376,80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M352,200V440a40.12,40.12,0,0,1-40,40H136a40.12,40.12,0,0,1-40-40V224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M352,224h40a56.16,56.16,0,0,1,56,56v80a56.16,56.16,0,0,1-56,56H352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="224" y1="256" x2="224" y2="416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="288" y1="256" x2="288" y2="416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="160" y1="256" x2="160" y2="416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,112a48,48,0,0,1,0,96c-13.25,0-29.31-7.31-38-16H160c-8,22-27,32-48,32a48,48,0,0,1,0-96,47.91,47.91,0,0,1,26,9" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M91.86,132.43a40,40,0,1,1,60.46-52S160,91,160,96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M145.83,64.71C163.22,44.89,187.57,32,216,32c52.38,0,94,42.84,94,95.21A95,95,0,0,1,308.33,145" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M448,208H368v-5.74A63.93,63.93,0,0,0,321.65,96a111,111,0,0,0-27.59-47.29A108.62,108.62,0,0,0,216,16c-29.91,0-57.78,12.28-79,34.67a56,56,0,0,0-67.51,77.51c-1,.86-1.91,1.74-2.83,2.66A63.56,63.56,0,0,0,48,176.26,62.65,62.65,0,0,0,68.77,222.8,65,65,0,0,0,80,231V480a16,16,0,0,0,16,16H352a16,16,0,0,0,16-16V432h80a16,16,0,0,0,16-16V224A16,16,0,0,0,448,208ZM176,432H144V240h32Zm64,0H208V240h32Zm64,0H272V240h32Zm16-240c-8.33,0-20.55-5.18-26.69-11.31L288.63,176H148.79L145,186.53c-5.81,16-18.83,20.41-28.73,21.29a34.08,34.08,0,0,1-25.91-8.67,31,31,0,0,1-10.32-23,31.8,31.8,0,0,1,9.33-22.71c.16-.17.33-.32.5-.49A31.78,31.78,0,0,1,112,144c.09,0,9.12.34,16.4,5.8l12.8,9.6,19.2-25.6-12.8-9.6A63.69,63.69,0,0,0,112,112a64.79,64.79,0,0,0-14,1.55A24,24,0,0,1,139.4,89.87l.23.35.4.46a35.78,35.78,0,0,1,5,8.94l5.62,15,30-11.24-5.62-15a68.2,68.2,0,0,0-10-17.74c-.38-.52-.79-1-1.19-1.51C178.38,55.45,196.64,48,216,48a76.86,76.86,0,0,1,55.23,23.18A80.2,80.2,0,0,1,292.61,142l-3,15.72,31.43,6,3-15.72A111.78,111.78,0,0,0,326,128.57,32,32,0,0,1,320,192ZM432,400H368V240h64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M392,208H368v-5.74A63.93,63.93,0,0,0,321.65,96a111,111,0,0,0-27.59-47.29A108.62,108.62,0,0,0,216,16c-29.91,0-57.78,12.28-79,34.68a56,56,0,0,0-67.51,77.54A63.91,63.91,0,0,0,80,231.39V440a56.06,56.06,0,0,0,56,56H312a56.06,56.06,0,0,0,56-56v-8h24a72.08,72.08,0,0,0,72-72V280A72.08,72.08,0,0,0,392,208ZM176,416a16,16,0,0,1-32,0V256a16,16,0,0,1,32,0Zm64,0a16,16,0,0,1-32,0V256a16,16,0,0,1,32,0Zm64,0a16,16,0,0,1-32,0V256a16,16,0,0,1,32,0Zm16-224c-8.33,0-20.55-5.18-26.69-11.31A16,16,0,0,0,282,176H160a16,16,0,0,0-15,10.53C138.17,205.21,121.4,208,112,208a32,32,0,0,1,0-64c.09,0,9.12.34,16.4,5.8a16,16,0,1,0,19.2-25.6A63.69,63.69,0,0,0,112,112a63.55,63.55,0,0,0-14,1.57A24,24,0,0,1,120,80a23.78,23.78,0,0,1,19.38,9.84,51.35,51.35,0,0,1,4.71,7.9A16,16,0,0,0,176,96c0-6.77-3.61-15.17-10.76-25-.46-.63-1-1.25-1.45-1.86C178.39,55.44,196.64,48,216,48a76.86,76.86,0,0,1,55.23,23.18A80.2,80.2,0,0,1,292.61,142a16,16,0,0,0,12.73,18.71,16.29,16.29,0,0,0,3,.28,16,16,0,0,0,15.7-13A111.78,111.78,0,0,0,326,128.57,32,32,0,0,1,320,192ZM432,360a40,40,0,0,1-40,40H368V240h24a40,40,0,0,1,40,40Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M388,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M124,288a76,76,0,1,0,76,76,76.24,76.24,0,0,0-76-76Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="256 360 256 274 192 232 272 144 312 216 368 216" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,136a31.89,31.89,0,0,0,32-32.1A31.55,31.55,0,0,0,320.2,72a32,32,0,1,0-.2,64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M320,192l-29.5-60.1C284.32,118,284.32,118,264,118c-13.26,0-14.76,0-23,7.3l-71.7,69.1C161,202.85,160,203.85,160,221c0,12.67,3.78,14.61,18.51,22.9L240,278v90h32V254s-29-17-48.3-30l48.9-51.5c18.7,28.5,27.3,51.5,38,51.5H384V192Z" />
      <path d="M388,448a92,92,0,1,1,92-92A92.1,92.1,0,0,1,388,448Zm0-152a60,60,0,1,0,60,60A60.07,60.07,0,0,0,388,296Z" />
      <path d="M124,448a92,92,0,1,1,92-92A92.1,92.1,0,0,1,124,448Zm0-152a60,60,0,1,0,60,60A60.07,60.07,0,0,0,124,296Z" />
      <path d="M320,128a31.89,31.89,0,0,0,32-32.1A31.55,31.55,0,0,0,320.2,64a32,32,0,1,0-.2,64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M388,448a92,92,0,1,1,92-92A92.1,92.1,0,0,1,388,448Zm0-152a60,60,0,1,0,60,60A60.07,60.07,0,0,0,388,296Z" />
      <path d="M124,448a92,92,0,1,1,92-92A92.1,92.1,0,0,1,124,448Zm0-152a60,60,0,1,0,60,60A60.07,60.07,0,0,0,124,296Z" />
      <path d="M320,128a31.89,31.89,0,0,0,32-32.1A31.55,31.55,0,0,0,320.2,64a32,32,0,1,0-.2,64Z" />
      <path d="M367.55,192H323.79a4,4,0,0,1-3.51-2.08l-31.74-58.17h0A31,31,0,0,0,239.16,124h0L169.3,194.4a32.56,32.56,0,0,0-9.3,22.4c0,17.4,12.6,23.6,18.5,27.1C207,260.32,227.07,272.33,238.08,279a4,4,0,0,1,1.92,3.41v69.12c0,8.61,6.62,16,15.23,16.43A16,16,0,0,0,272,352V266a16,16,0,0,0-6.66-13l-37-26.61a4,4,0,0,1-.58-6l42-44.79a4,4,0,0,1,6.42.79L298,215.77A16,16,0,0,0,312,224h56a16,16,0,0,0,16-16.77C383.58,198.62,376.16,192,367.55,192Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <polyline points="144 352 368 160 256 48 256 464 368 352 144 160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M397.41,161.13,236-.28v212.8L141.83,131.8l-26,30.37L225.27,256,115.8,349.83l26,30.37L236,299.48v212.8L397.41,350.87,286.73,256ZM276,96.28l62.59,62.59L276,212.52Zm62.58,256.85L276,415.72V299.48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M388,160.77a20,20,0,0,0-5.85-14.91l-112-112A20,20,0,0,0,236,48V212.52l-79-67.71a20,20,0,0,0-26,30.38L225.27,256,131,336.81a20,20,0,1,0,26,30.38l79-67.71V464a20,20,0,0,0,34.14,14.14l112-112A20,20,0,0,0,381,336.81L286.73,256,381,175.19A20,20,0,0,0,388,160.77ZM338.58,353.13,276,415.72V299.49ZM276,212.52V96.28l62.59,62.59Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M461.93,261.05c-2-4.76-6.71-7.83-11.67-9.49L263.08,177.08a23.78,23.78,0,0,0-14.17,0l-187,74.52c-5,1.56-9.83,4.77-11.81,9.53s-2.94,9.37-1,15.08L95.63,395.36A7.46,7.46,0,0,0,103.1,400c26.69-1.68,50.31-15.23,68.38-32.5a7.66,7.66,0,0,1,10.49,0C201.29,386,227,400,256,400s54.56-14,73.88-32.54a7.67,7.67,0,0,1,10.5,0c18.07,17.28,41.69,30.86,68.38,32.54a7.45,7.45,0,0,0,7.46-4.61l46.7-119.16C464.9,271.45,463.91,265.82,461.93,261.05Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M416,473.14a6.84,6.84,0,0,0-3.56-6c-27.08-14.55-51.77-36.82-62.63-48a10.05,10.05,0,0,0-12.72-1.51c-50.33,32.42-111.61,32.44-161.95.05a10.09,10.09,0,0,0-12.82,1.56c-10.77,11.28-35.19,33.3-62.43,47.75A7.15,7.15,0,0,0,96,472.72a6.73,6.73,0,0,0,7.92,7.15c20.85-4.18,41-13.68,60.2-23.83a8.71,8.71,0,0,1,8-.06A185.14,185.14,0,0,0,340,456a8.82,8.82,0,0,1,8.09.06c19.1,10,39.22,19.59,60,23.8a6.72,6.72,0,0,0,7.95-6.71Z" />
      <path d="M320,96V72a24.07,24.07,0,0,0-24-24H216a24.07,24.07,0,0,0-24,24V96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M416,233V144a48.14,48.14,0,0,0-48-48H144a48.14,48.14,0,0,0-48,48v92" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="183.6" x2="256" y2="396.45" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M477.77,246.42c-2.13-6-7.23-9.55-12.56-11.95L432,221.38V92a20,20,0,0,0-20-20H336V40a16,16,0,0,0-16-16H192a16,16,0,0,0-16,16V72H100A20,20,0,0,0,80,92V221.46L46.92,234.52c-5.33,2.4-10.58,6-12.72,12s-3.16,11.81-1,19L84.25,415.7h1.06c34.12,0,64-17.41,85.31-43.82C191.94,398.29,221.8,414,255.92,414s64-15.76,85.31-42.17c21.32,26.41,51.18,43.87,85.3,43.87h1.06l51.25-150.17C481,259.53,479.91,252.43,477.77,246.42ZM256,152,112,208.83V108a4,4,0,0,1,4-4H396a4,4,0,0,1,4,4V208.76Z" />
      <path d="M345.22,407c-52.25,36.26-126.35,36.25-178.6,0,0,0-45.64,63-94.64,63l13.33,1c29.86,0,58.65-11.73,85.31-25.59a185.33,185.33,0,0,0,170.6,0c26.66,13.87,55.45,25.6,85.31,25.6l13.33-1C392.21,470,345.22,407,345.22,407Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M416,473.14a6.83,6.83,0,0,0-3.57-6c-27.07-14.55-51.76-36.82-62.62-48a10.05,10.05,0,0,0-12.72-1.51c-50.33,32.42-111.61,32.44-161.95.05a10.09,10.09,0,0,0-12.82,1.56c-10.77,11.28-35.19,33.3-62.43,47.75A7.11,7.11,0,0,0,96,472.72a6.73,6.73,0,0,0,7.92,7.15c20.85-4.18,41-13.68,60.2-23.83a8.71,8.71,0,0,1,8-.06,185.14,185.14,0,0,0,167.81,0,8.82,8.82,0,0,1,8.09.06c19.1,10,39.22,19.59,60,23.8a6.73,6.73,0,0,0,8-6.71Z" />
      <path d="M476.71,246.91h0c-3.49-8.39-10.9-14.89-20.9-18.35L432,219.08V136a64,64,0,0,0-64-64H336V64a40,40,0,0,0-40-40H216a40,40,0,0,0-40,40v8H144a64,64,0,0,0-64,64v83.15l-23.58,9.39c-9.94,3.3-17.63,10-21.15,18.44-2.45,5.89-5.25,15-1.3,26.46l.1.3L80.73,393.18A23.33,23.33,0,0,0,102.58,408c.5,0,1,0,1.53-.05,31.32-2,56-17.27,72.6-31.61C200.42,396.81,228.31,408,256,408s55.43-11.2,79.14-31.7c16.59,14.36,41.3,29.67,72.61,31.65a23.36,23.36,0,0,0,23.37-14.74l46.65-119C481.05,266.12,480.67,256.45,476.71,246.91ZM269,154.21l-1.14-.4a39.53,39.53,0,0,0-23.73,0l-.58.18L117.48,204.22A4,4,0,0,1,112,200.5V136a32,32,0,0,1,32-32H368a32,32,0,0,1,32,32v64.44a4,4,0,0,1-5.48,3.72Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" cx="256" cy="56" r="40" />
      <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" d="M199.3,295.62h0l-30.4,172.2a24,24,0,0,0,19.5,27.8,23.76,23.76,0,0,0,27.6-19.5l21-119.9v.2s5.2-32.5,17.5-32.5h3.1c12.5,0,17.5,32.5,17.5,32.5v-.1l21,119.9a23.92,23.92,0,1,0,47.1-8.4l-30.4-172.2-4.9-29.7c-2.9-18.1-4.2-47.6.5-59.7,4-10.4,14.13-14.2,23.2-14.2H424a24,24,0,0,0,0-48H88a24,24,0,0,0,0,48h92.5c9.23,0,19.2,3.8,23.2,14.2,4.7,12.1,3.4,41.6.5,59.7Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <circle cx="256" cy="56" r="56" />
      <polygon points="464 128 48 128 48 180 192 180 160 505.13 211 512 232.65 320 279.67 320 301 512 352 505.02 320 180 464 180 464 128" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <circle cx="256" cy="56" r="56" />
      <path d="M437,128H75a27,27,0,0,0,0,54H176.88c6.91,0,15,3.09,19.58,15,5.35,13.83,2.73,40.54-.57,61.23l-4.32,24.45a.42.42,0,0,1-.12.35l-34.6,196.81A27.43,27.43,0,0,0,179,511.58a27.06,27.06,0,0,0,31.42-22.29l23.91-136.8S242,320,256,320c14.23,0,21.74,32.49,21.74,32.49l23.91,136.92a27.24,27.24,0,1,0,53.62-9.6L320.66,283a.45.45,0,0,0-.11-.35l-4.33-24.45c-3.3-20.69-5.92-47.4-.57-61.23,4.56-11.88,12.91-15,19.28-15H437a27,27,0,0,0,0-54Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M273.38,368.33c-.81-9.23-8.86-16.44-18.55-16.44A18.63,18.63,0,0,0,236.63,366h0l-18.2,88.38a35.75,35.75,0,0,0-.93,7.88c0,19.93,16.68,33.78,37.33,33.78s37.34-13.85,37.34-33.78a36.16,36.16,0,0,0-1.29-9.45Z" />
      <path d="M411.05,407.86a41.78,41.78,0,0,0-5.95-4.35l-69.53-48.59c-6.77-4.25-14-4.13-19.25,1a13.53,13.53,0,0,0-2,17.2l52.5,69a36.57,36.57,0,0,0,4,4.69c9.1,10.17,29.28,10.73,40.37,0C422.13,435.9,422,416.46,411.05,407.86Z" />
      <path d="M463.3,335.88H392.88c-4.55,0-8.88,3.35-8.88,8.16s2.95,7.85,6.92,9.16l66.43,20.55C467,376,480,367.4,480,356.66,480,343,472.4,335.88,463.3,335.88Z" />
      <path d="M128.22,344c0-5-4.55-8.16-9.45-8.16H48.35c-8.87,0-16.35,9.58-16.35,20.32S44.62,376,54.3,373.75l67.43-20.55C126.12,351.89,128.22,349,128.22,344Z" />
      <path d="M176.55,355,107,403.38a32.34,32.34,0,0,0-6,4.35,26.33,26.33,0,0,0,0,38.56,29.39,29.39,0,0,0,40.36,0,30.75,30.75,0,0,0,4-4.68L197.9,373c3.5-5.58,2.92-12.49-2-17.06A15,15,0,0,0,176.55,355Z" />
      <path d="M368,125.09c0-55.7-49.22-89.16-94.2-93.06a8,8,0,0,0-8.69,7.71c-3.12,76-109.38,110.69-119.87,178.68-7,45.4,16.65,72.37,34.31,85.78a15.94,15.94,0,0,0,23.93-5.62c22.5-45.86,74.33-63.49,109.72-85.94C356.08,185.44,368,156.2,368,125.09Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M240,95.7c-12.82-23-30.51-31-59.16-31.63a3.86,3.86,0,0,0-4.06,3.51C175.83,101.8,144,112.43,144,140.73c0,19.37,5.39,29,17.16,39.28" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M352.45,178.76c8.6,14.31,15.55,30.08,15.55,48,0,52.52-42.47,93.1-94.86,93.1a94.42,94.42,0,0,1-65.14-26" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M199.89,336l-15.25-5.62a100.35,100.35,0,0,1-32-23.08c-13.93-14.9-29.29-40.71-23.38-79.11,5.2-33.73,44.2-74.21,69.34-97.87,27.24-25.62,66-65.85,64.15-99.15L262,16h15.18C328.53,16,384,53.62,384,114.41c0,45.57-22,77.61-68.91,106.9-8,5-16.44,9.66-25.42,14.53-30.63,16.62-75.29,49.83-85.73,85.32Z" />
      <path d="M181.19,113.59C201,95,218.91,78.15,227.62,59.79q-2.76-1.68-5.7-3.09c-11.87-5.69-26.1-8.34-44.76-8.34h-.42l-16.52,0,.56,16.49c.47,14.06-6.06,22.51-14.33,33.21C137.8,109.26,128,121.94,128,141c0,10.23,1.29,18.76,4.2,26.36q3.5-5.31,7.61-10.63C152,141,166.86,127.05,181.19,113.59Z" />
      <path d="M330.34,239.85c-9.31,5.9-19,11.14-29.25,16.71C268.44,274.25,237.61,291,227.86,324l-.6,2A110.5,110.5,0,0,0,273.13,336c29.66,0,57.45-11.13,78.24-31.36A107.38,107.38,0,0,0,384,227a92.39,92.39,0,0,0-5.59-31C367.06,212.18,351.27,226.58,330.34,239.85Z" />
      <path d="M268.72,360H243.28a4,4,0,0,0-3.92,3.22L214,491.22a4,4,0,0,0,3.92,4.78h76.26a4,4,0,0,0,3.92-4.78l-25.41-128A4,4,0,0,0,268.72,360Z" />
      <path d="M325.68,354.32l-11.36,11.36a4,4,0,0,0-.5,5.05l59.47,89.21a4,4,0,0,0,6.16.61l41.1-41.1a4,4,0,0,0-.61-6.16l-89.21-59.47A4,4,0,0,0,325.68,354.32Z" />
      <path d="M388,336a4,4,0,0,0-4,4v8.61a4,4,0,0,0,3.34,3.95l88,14.66a4,4,0,0,0,4.66-3.94V340a4,4,0,0,0-4-4Z" />
      <path d="M186.32,354.32l11.36,11.36a4,4,0,0,1,.5,5.05l-59.47,89.21a4,4,0,0,1-6.16.61l-41.1-41.1a4,4,0,0,1,.61-6.16l89.21-59.47A4,4,0,0,1,186.32,354.32Z" />
      <path d="M124,336H36a4,4,0,0,0-4,4v23.28a4,4,0,0,0,4.66,3.94l88-14.66a4,4,0,0,0,3.34-3.95V340A4,4,0,0,0,124,336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M273.38,368.37c-.81-9.23-8.86-16.44-18.55-16.44A18.63,18.63,0,0,0,236.63,366l-18.2,88.36a35.59,35.59,0,0,0-.93,7.87c0,19.93,16.68,33.77,37.33,33.77s37.34-13.84,37.34-33.77a36.16,36.16,0,0,0-1.29-9.45Z" />
      <path d="M411.05,407.89a42.66,42.66,0,0,0-5.95-4.36L335.57,355c-6.77-4.24-14-4.13-19.25,1a13.52,13.52,0,0,0-2,17.19l52.5,69a38,38,0,0,0,4,4.69c9.1,10.16,29.28,10.72,40.37,0C422.13,435.92,422,416.49,411.05,407.89Z" />
      <path d="M463.3,335.93H392.88c-4.55,0-8.88,3.35-8.88,8.15s2.95,7.85,6.92,9.16l66.43,20.55C467,376,480,367.44,480,356.71,480,343.08,472.4,335.93,463.3,335.93Z" />
      <path d="M128.22,344.08c0-4.95-4.55-8.15-9.45-8.15H48.35c-8.87,0-16.35,9.58-16.35,20.31S44.62,376,54.3,373.79l67.43-20.55C126.12,351.93,128.22,349,128.22,344.08Z" />
      <path d="M176.55,355.05,107,403.41a32.29,32.29,0,0,0-6,4.34,26.33,26.33,0,0,0,0,38.56,29.41,29.41,0,0,0,40.36,0,30.75,30.75,0,0,0,4-4.68L197.9,373c3.5-5.57,2.92-12.48-2-17A15,15,0,0,0,176.55,355.05Z" />
      <path d="M293.46,242.39c10-5.42,19.45-10.54,28.31-16.16,42.46-26.92,62.23-59,62.23-101,0-64.66-56.07-104.4-108.82-109-6.49-.57-15-.42-19.91,3.88s-5.88,12.56-6.15,19.1c-1.38,33.61-28.38,59-57,85.86-28,26.3-56.93,53.49-62.71,91C121,270.75,151.15,302.78,169.87,317a31.88,31.88,0,0,0,19.3,6.51,32.32,32.32,0,0,0,7.41-.87,31.75,31.75,0,0,0,21.27-16.95C232.76,275.3,263.62,258.57,293.46,242.39Z" />
      <path d="M139.82,156.57c12.22-15.76,27-29.68,41.37-43.15C201.11,94.7,219,77.84,227.69,59.56c-12.24-7.37-27.36-11.36-46.51-11.36-17.79,0-20.39,5.18-20.39,19.06,0,12.56-6.53,20.54-14.34,30.65C137.8,109.1,128,121.77,128,140.84c0,10.23,1.29,18.77,4.2,26.37Q135.7,161.89,139.82,156.57Z" />
      <path d="M330.34,239.74c-9.33,5.92-19,11.16-29.25,16.71-28.91,15.68-56.21,30.48-68.88,56.28-.64,1.32-1.25,2.5-1.88,3.61a8,8,0,0,0,3.89,11.3c12.31,5.1,25.13,8.27,38.91,8.27a111.42,111.42,0,0,0,78.24-31.37A107.45,107.45,0,0,0,384,226.85a86.56,86.56,0,0,0-1.33-15,8,8,0,0,0-13.8-4C358.69,219.32,345.94,229.85,330.34,239.74Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M256,160c16-63.16,76.43-95.41,208-96a15.94,15.94,0,0,1,16,16V368a16,16,0,0,1-16,16c-128,0-177.45,25.81-208,64-30.37-38-80-64-208-64-9.88,0-16-8.05-16-17.93V80A15.94,15.94,0,0,1,48,64C179.57,64.59,240,96.84,256,160Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="160" x2="256" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M464,48c-67.61.29-117.87,9.6-154.24,25.69C282.62,85.69,272,94.77,272,125.53V448c41.57-37.5,78.46-48,224-48V48Z" />
      <path d="M48,48c67.61.29,117.87,9.6,154.24,25.69,27.14,12,37.76,21.08,37.76,51.84V448c-41.57-37.5-78.46-48-224-48V48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M202.24,74C166.11,56.75,115.61,48.3,48,48h0a31.36,31.36,0,0,0-17.92,5.33A32,32,0,0,0,16,79.9V366c0,19.34,13.76,33.93,32,33.93,71.07,0,142.36,6.64,185.06,47a4.11,4.11,0,0,0,6.94-3V106.82a15.89,15.89,0,0,0-5.46-12A143,143,0,0,0,202.24,74Z" />
      <path d="M481.92,53.3A31.33,31.33,0,0,0,464,48h0c-67.61.3-118.11,8.71-154.24,26a143.31,143.31,0,0,0-32.31,20.78,15.93,15.93,0,0,0-5.45,12V443.91a3.93,3.93,0,0,0,6.68,2.81c25.67-25.5,70.72-46.82,185.36-46.81a32,32,0,0,0,32-32v-288A32,32,0,0,0,481.92,53.3Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M352,48H160a48,48,0,0,0-48,48V464L256,336,400,464V96A48,48,0,0,0,352,48Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M416,480,256,357.41,96,480V32H416Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M400,480a16,16,0,0,1-10.63-4L256,357.41,122.63,476A16,16,0,0,1,96,464V96a64.07,64.07,0,0,1,64-64H352a64.07,64.07,0,0,1,64,64V464a16,16,0,0,1-16,16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M128,80V64a48.14,48.14,0,0,1,48-48H400a48.14,48.14,0,0,1,48,48V432l-80-64" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,96H112a48.14,48.14,0,0,0-48,48V496L216,368,368,496V144A48.14,48.14,0,0,0,320,96Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <polygon points="112 0 112 48 416 48 416 416 464 448 464 0 112 0" />
      <polygon points="48 80 48 512 216 388 384 512 384 80 48 80" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M400,0H176a64.11,64.11,0,0,0-62,48H342a74,74,0,0,1,74,74V426.89l22,17.6a16,16,0,0,0,19.34.5A16.41,16.41,0,0,0,464,431.57V64A64,64,0,0,0,400,0Z" />
      <path d="M320,80H112a64,64,0,0,0-64,64V495.62A16.36,16.36,0,0,0,54.6,509a16,16,0,0,0,19.71-.71L216,388.92,357.69,508.24a16,16,0,0,0,19.6.79A16.4,16.4,0,0,0,384,495.59V144A64,64,0,0,0,320,80Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle cx="256" cy="256" r="208" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" />
      <circle cx="288" cy="200" r="24" />
      <circle cx="296" cy="128" r="24" />
      <circle cx="360" cy="168" r="24" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM286,230a28,28,0,1,1,28-28A28,28,0,0,1,286,230Zm8-76a28,28,0,1,1,28-28A28,28,0,0,1,294,154Zm68,44a28,28,0,1,1,28-28A28,28,0,0,1,362,198Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM288,224a24,24,0,1,1,24-24A24,24,0,0,1,288,224Zm8-72a24,24,0,1,1,24-24A24,24,0,0,1,296,152Zm64,40a24,24,0,1,1,24-24A24,24,0,0,1,360,192Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <rect x="32" y="128" width="448" height="320" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M144,128V96a32,32,0,0,1,32-32H336a32,32,0,0,1,32,32v32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="480" y1="240" x2="32" y2="240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,240v24a8,8,0,0,1-8,8H200a8,8,0,0,1-8-8V240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M336,288H176V256H16V452a12,12,0,0,0,12,12H484a12,12,0,0,0,12-12V256H336Z" />
      <path d="M496,124a12,12,0,0,0-12-12H384V56a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8v56H28a12,12,0,0,0-12,12V224H496ZM344,112H168V88H344Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M336,80H176a16,16,0,0,0-16,16v16H352V96A16,16,0,0,0,336,80Z" style="fill:none" />
      <path d="M496,176a64.07,64.07,0,0,0-64-64H384V96a48.05,48.05,0,0,0-48-48H176a48.05,48.05,0,0,0-48,48v16H80a64.07,64.07,0,0,0-64,64v48H496ZM352,112H160V96a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16Z" />
      <path d="M336,264a24,24,0,0,1-24,24H200a24,24,0,0,1-24-24v-4a4,4,0,0,0-4-4H16V400a64,64,0,0,0,64,64H432a64,64,0,0,0,64-64V256H340a4,4,0,0,0-4,4Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <rect x="48" y="64" width="416" height="384" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M397.82,64H114.18C77.69,64,48,94.15,48,131.2V176H64c0-16,16-32,32-32H416c16,0,32,16,32,32h16V131.2C464,94.15,434.31,64,397.82,64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M32,64V448a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H48A16,16,0,0,0,32,64ZM440,428H72a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H440a4,4,0,0,1,4,4V424A4,4,0,0,1,440,428Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M416,48H96a64,64,0,0,0-64,64V400a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V112A64,64,0,0,0,416,48Zm24,96H72a8,8,0,0,1-8-8V112A32.09,32.09,0,0,1,96,80H416a32.09,32.09,0,0,1,32,32v24A8,8,0,0,1,440,144Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M452.37,59.63h0a40.49,40.49,0,0,0-57.26,0L184,294.74c23.08,4.7,46.12,27.29,49.26,49.26L452.37,116.89A40.49,40.49,0,0,0,452.37,59.63Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M138,336c-29.88,0-54,24.5-54,54.86,0,23.95-20.88,36.57-36,36.57C64.56,449.74,92.82,464,120,464c39.78,0,72-32.73,72-73.14C192,360.5,167.88,336,138,336Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M480,96,416,32,172,292l64,64Z" />
      <path d="M142,320c-36.52,0-66,30.63-66,68.57,0,25.43-31,45.72-44,45.72C52.24,462.17,86.78,480,120,480c48.62,0,88-40.91,88-91.43C208,350.63,178.52,320,142,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M233.15,360.11a15.7,15.7,0,0,1-4.92-.77,16,16,0,0,1-10.92-13c-2.15-15-19.95-32.46-36.62-35.85A16,16,0,0,1,172,284.16L383.09,49.06c.19-.22.39-.43.59-.63a56.57,56.57,0,0,1,79.89,0h0a56.51,56.51,0,0,1,.11,79.78l-219,227A16,16,0,0,1,233.15,360.11Z" />
      <path d="M119.89,480.11c-32.14,0-65.45-16.89-84.85-43a16,16,0,0,1,12.85-25.54c5.34,0,20-4.87,20-20.57,0-39.07,31.4-70.86,70-70.86s70,31.79,70,70.86C207.89,440.12,168.41,480.11,119.89,480.11Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M370,378c28.89,23.52,46,46.07,46,86" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M142,378c-28.89,23.52-46,46.06-46,86" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384,208c28.89-23.52,32-56.07,32-96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M128,206c-28.89-23.52-32-54.06-32-94" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="464" y1="288.13" x2="384" y2="288.13" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="128" y1="288.13" x2="48" y2="288.13" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="192" x2="256" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,448h0c-70.4,0-128-57.6-128-128V223.93c0-65.07,57.6-96,128-96h0c70.4,0,128,25.6,128,96V320C384,390.4,326.4,448,256,448Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M179.43,143.52A49.08,49.08,0,0,1,176,127.79,80,80,0,0,1,255.79,48h.42A80,80,0,0,1,336,127.79a41.91,41.91,0,0,1-3.12,14.3" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M480,304.13v-32H400V215.2c29.42-27.95,32-64.76,32-103.2V96H400v16c0,28-1.86,48.15-9.9,63.84C368,128,324.32,112,256,112c-39.8,0-75.19,7.06-100.43,24.32-14.9,10.19-25.2,24.91-32.7,39.72C114,160.57,112,140.82,112,112V96H80v16c0,37.44,2.59,73.36,32,101.2v58.93H32v32l80-.13c0,19,3.7,53.09,10.39,69.69C96.6,396.76,80,422.31,80,464v16h32V464c0-27.66,9.1-44.71,26.17-61.32C160,448,177,464,240,464V176h32V464c65,0,80-16,101.83-61.32C390.9,419.29,400,436.35,400,464v16h32V464c0-41.68-16.6-67.23-42.39-90.31C396.3,357.09,400,323,400,304Z" />
      <path d="M256,32c-48.06,0-96,0-96,84,26.12-14,59.35-20,96-20,24.09,0,46.09,2.65,65.39,8,10.75,3,24.66,8.71,30.61,12C352,32,304.06,32,256,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M463.55,272.13H400v-48.2q0-4.32-.27-8.47c29.57-27.88,32.25-64.63,32.27-103,0-8.61-6.64-16-15.25-16.41A16,16,0,0,0,400,112c0,28-1.86,48.15-9.9,63.84-19.22-41.15-65.78-63.91-134.1-63.91-39.8,0-74.19,9.13-99.43,26.39-14.9,10.19-26.2,22.91-33.7,37.72C114,160.65,112,141,112,112.46c0-8.61-6.6-16-15.2-16.44A16,16,0,0,0,80,112c0,37.63,2.61,73.73,32.44,101.63q-.43,5.06-.44,10.3v48.2H48.45c-8.61,0-16,6.62-16.43,15.23a16,16,0,0,0,16,16.77h64V320a143.32,143.32,0,0,0,10.39,53.69C96.74,396.64,80.18,422,80,463.34c0,8.74,6.62,16.3,15.36,16.65A16,16,0,0,0,112,464c0-27.66,9.1-44.71,26.17-61.32A144.37,144.37,0,0,0,220,459.42a16,16,0,0,0,20-15.49V192.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,192V443.93a16,16,0,0,0,20,15.49,144.4,144.4,0,0,0,81.82-56.74c17,16.54,26.09,33.52,26.17,60.95A16.27,16.27,0,0,0,415.09,480,16,16,0,0,0,432,464c0-41.68-16.6-67.23-42.39-90.31A143.32,143.32,0,0,0,400,320V304.13h64a16,16,0,0,0,16-16.77C479.58,278.75,472.16,272.13,463.55,272.13Z" />
      <path d="M321.39,104l.32.09c13.57,3.8,25.07-10.55,18.2-22.85A95.86,95.86,0,0,0,256.21,32h-.42A95.87,95.87,0,0,0,171.6,82.13c-6.84,12.58,5.14,27,18.84,22.86,19.71-6,41.79-9.06,65.56-9.06C280.09,95.93,302.09,98.65,321.39,104Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M393.87,190a32.1,32.1,0,0,1-45.25,0l-26.57-26.57a32.09,32.09,0,0,1,0-45.26L382.19,58a1,1,0,0,0-.3-1.64c-38.82-16.64-89.15-8.16-121.11,23.57-30.58,30.35-32.32,76-21.12,115.84a31.93,31.93,0,0,1-9.06,32.08L64,380a48.17,48.17,0,1,0,68,68L285.86,281a31.93,31.93,0,0,1,31.6-9.13C357,282.46,402,280.47,432.18,250.68c32.49-32,39.5-88.56,23.75-120.93a1,1,0,0,0-1.6-.26Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="96" cy="416" r="16" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M230,209.2,32,405.58,106.65,480,304.24,281.83c46.47,17.46,105.52,12.54,143-24.78,40.44-40.32,40.35-108,16.81-156.79l-87.33,87.06-52.32-52.13,87.33-87.06C363,24.46,294.67,24.34,254.23,64.66,216.2,102.57,211.45,162.26,230,209.2Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M469.54,120.52h0a16,16,0,0,0-25.54-4L382.56,178a16.12,16.12,0,0,1-22.63,0L333.37,151.4a16,16,0,0,1,0-22.63l61.18-61.19a16,16,0,0,0-4.78-25.92h0C343.56,21,285.88,31.78,249.51,67.88c-30.9,30.68-40.11,78.62-25.25,131.53a15.89,15.89,0,0,1-4.49,16L53.29,367.46a64.17,64.17,0,1,0,90.6,90.64L297.57,291.25a15.9,15.9,0,0,1,15.77-4.57,179.3,179.3,0,0,0,46.22,6.37c33.4,0,62.71-10.81,83.85-31.64C482.56,222.84,488.53,157.42,469.54,120.52ZM99.48,447.15a32,32,0,1,1,28.34-28.35A32,32,0,0,1,99.48,447.15Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M304,384V360c0-29,31.54-56.43,52-76,28.84-27.57,44-64.61,44-108,0-80-63.73-144-144-144A143.6,143.6,0,0,0,112,176c0,41.84,15.81,81.39,44,108,20.35,19.21,52,46.7,52,76v24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="224" y1="480" x2="288" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="208" y1="432" x2="304" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="384" x2="256" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M294,240s-21.51,16-38,16-38-16-38-16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <rect x="208" y="464" width="96" height="32" />
      <rect x="192" y="416" width="128" height="32" />
      <path d="M369.42,62.69C339.35,32.58,299.07,16,256,16A159.62,159.62,0,0,0,96,176c0,46.62,17.87,90.23,49,119.64l4.36,4.09C167.37,316.57,192,339.64,192,360v40h48V269.11L195.72,244,214,217.72,256,240l41.29-22.39,19.1,25.68-44.39,26V400h48V360c0-19.88,24.36-42.93,42.15-59.77l4.91-4.66C399.08,265,416,223.61,416,176A159.16,159.16,0,0,0,369.42,62.69Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M288,464H224a16,16,0,0,0,0,32h64a16,16,0,0,0,0-32Z" />
      <path d="M304,416H208a16,16,0,0,0,0,32h96a16,16,0,0,0,0-32Z" />
      <path d="M369.42,62.69C339.35,32.58,299.07,16,256,16A159.62,159.62,0,0,0,96,176c0,46.62,17.87,90.23,49,119.64l4.36,4.09C167.37,316.57,192,339.64,192,360v24a16,16,0,0,0,16,16h24a8,8,0,0,0,8-8V274.82a8,8,0,0,0-5.13-7.47A130.73,130.73,0,0,1,208.71,253,16,16,0,1,1,227.29,227c7.4,5.24,21.65,13,28.71,13s21.31-7.78,28.73-13A16,16,0,0,1,303.29,253a130.73,130.73,0,0,1-26.16,14.32,8,8,0,0,0-5.13,7.47V392a8,8,0,0,0,8,8h24a16,16,0,0,0,16-16V360c0-19.88,24.36-42.93,42.15-59.77l4.91-4.66C399.08,265,416,223.61,416,176A159.16,159.16,0,0,0,369.42,62.69Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <rect x="80" y="112" width="352" height="192" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="80" y="304" width="352" height="128" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M400,112H112A32.09,32.09,0,0,1,80,80h0a32.09,32.09,0,0,1,32-32H400a32.09,32.09,0,0,1,32,32h0A32.09,32.09,0,0,1,400,112Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M144,432v22a10,10,0,0,1-10,10H106a10,10,0,0,1-10-10V432Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M416,432v22a10,10,0,0,1-10,10H378a10,10,0,0,1-10-10V432Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="368" cy="368" r="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="144" cy="368" r="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="112" x2="256" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="80" y1="80" x2="80" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="432" y1="80" x2="432" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M400,64H112a16,16,0,0,0,0,32H400a16,16,0,0,0,0-32Z" style="fill:none" />
      <path d="M424,32H88A24,24,0,0,0,64,56V416a32,32,0,0,0,16,27.71V480h72V448H360v32h72V443.71A32,32,0,0,0,448,416V56A24,24,0,0,0,424,32ZM175.82,371.47a32,32,0,1,1-35.3-35.29A32.09,32.09,0,0,1,175.82,371.47ZM240,288H96V128H240ZM256,96H96.46L96,64H416l-.46,32H256Zm16,32H416V288H272Zm64.18,236.53a32,32,0,1,1,35.3,35.29A32.09,32.09,0,0,1,336.18,364.53Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M400,32H112A48,48,0,0,0,64,80V400a47.91,47.91,0,0,0,16,35.74V454a26,26,0,0,0,26,26h28a26,26,0,0,0,26-26v-6H352v6a26,26,0,0,0,26,26h28a26,26,0,0,0,26-26V435.74A47.91,47.91,0,0,0,448,400V80A48,48,0,0,0,400,32ZM147.47,399.82a32,32,0,1,1,28.35-28.35A32,32,0,0,1,147.47,399.82ZM236,288H112a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16H236a4,4,0,0,1,4,4V284A4,4,0,0,1,236,288ZM256,96H112.46c-8.6,0-16-6.6-16.44-15.19A16,16,0,0,1,112,64H399.54c8.6,0,16,6.6,16.44,15.19A16,16,0,0,1,400,96H256Zm20,32H400a16,16,0,0,1,16,16V272a16,16,0,0,1-16,16H276a4,4,0,0,1-4-4V132A4,4,0,0,1,276,128Zm60.18,243.47a32,32,0,1,1,28.35,28.35A32,32,0,0,1,336.18,371.47Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <line x1="176" y1="416" x2="176" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M80,32H272a32,32,0,0,1,32,32V476a4,4,0,0,1-4,4H48a0,0,0,0,1,0,0V64A32,32,0,0,1,80,32Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,192H432a32,32,0,0,1,32,32V480a0,0,0,0,1,0,0H304a0,0,0,0,1,0,0V208A16,16,0,0,1,320,192Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M98.08,431.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,431.87Z" />
      <path d="M98.08,351.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,351.87Z" />
      <path d="M98.08,271.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,271.87Z" />
      <path d="M98.08,191.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,191.87Z" />
      <path d="M98.08,111.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,111.87Z" />
      <path d="M178.08,351.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,351.87Z" />
      <path d="M178.08,271.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,271.87Z" />
      <path d="M178.08,191.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,191.87Z" />
      <path d="M178.08,111.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,111.87Z" />
      <path d="M258.08,431.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,431.87Z" />
      <path d="M258.08,351.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,351.87Z" />
      <path d="M258.08,271.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,271.87Z" />
      <ellipse cx="256" cy="176" rx="15.95" ry="16.03" transform="translate(-49.47 232.56) rotate(-45)" />
      <path d="M258.08,111.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,111.87Z" />
      <path d="M400,400a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
      <path d="M400,320a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
      <path d="M400,240a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
      <path d="M336,400a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
      <path d="M336,320a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
      <path d="M336,240a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M320,176V16H32V496H160V400h32v96H480V176ZM112,432H80V400h32Zm0-80H80V320h32Zm0-80H80V240h32Zm0-80H80V160h32Zm0-80H80V80h32ZM240,80h32v32H240ZM192,352H160V320h32Zm0-80H160V240h32Zm0-80H160V160h32Zm0-80H160V80h32Zm80,320H240V400h32Zm0-80H240V320h32Zm0-80H240V240h32Zm0-80H240V160h32v32ZM448,464H320V432h32V400H320V352h32V320H320V272h32V240H320V208H448Z" />
      <rect x="384" y="400" width="32" height="32" />
      <rect x="384" y="320" width="32" height="32" />
      <rect x="384" y="240" width="32" height="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M432,176H320V64a48,48,0,0,0-48-48H80A48,48,0,0,0,32,64V480a16,16,0,0,0,16,16H152a8,8,0,0,0,8-8V416.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,192,416v72a8,8,0,0,0,8,8H464a16,16,0,0,0,16-16V224A48,48,0,0,0,432,176ZM98.08,431.87a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,431.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,351.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,271.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,191.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,98.08,111.87Zm80,240a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,351.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,271.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,191.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,178.08,111.87Zm80,320a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,431.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,351.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,271.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,191.87Zm0-80a16,16,0,1,1,13.79-13.79A16,16,0,0,1,258.08,111.87ZM444,464H320V208H432a16,16,0,0,1,16,16V460A4,4,0,0,1,444,464Z" />
      <path d="M400,400a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
      <path d="M400,320a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
      <path d="M400,240a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
      <path d="M336,400a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
      <path d="M336,320a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
      <path d="M336,240a16,16,0,1,0,16,16,16,16,0,0,0-16-16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M368,80h64a16,16,0,0,1,16,16v34a46,46,0,0,1-46,46H368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M96,80H368a0,0,0,0,1,0,0V272a80,80,0,0,1-80,80H176a80,80,0,0,1-80-80V80A0,0,0,0,1,96,80Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="64" y1="416" x2="400" y2="416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M448,64H80V318.34a19.83,19.83,0,0,0,5.86,14.14l29.65,29.66A19.87,19.87,0,0,0,129.66,368H334.34a19.87,19.87,0,0,0,14.15-5.86l29.65-29.66A19.83,19.83,0,0,0,384,318.34V192h32a16,16,0,0,0,11.31-4.69l32-32A16,16,0,0,0,464,144V80A16,16,0,0,0,448,64Zm-16,73.37L409.37,160H384V96h48Z" />
      <rect x="48" y="400" width="368" height="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M432,64H96A16,16,0,0,0,80,80V272a96.11,96.11,0,0,0,96,96H288a96.11,96.11,0,0,0,96-96V192h18a62.07,62.07,0,0,0,62-62V96A32,32,0,0,0,432,64Zm0,66a30,30,0,0,1-30,30H384V96h48Z" />
      <path d="M400,400H64a16,16,0,0,0,0,32H400a16,16,0,0,0,0-32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <rect x="112" y="48" width="288" height="416" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="160.01" y="112" width="191.99" height="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="168" cy="248" r="24" />
      <circle cx="256" cy="248" r="24" />
      <circle cx="344" cy="248" r="24" />
      <circle cx="168" cy="328" r="24" />
      <circle cx="256" cy="328" r="24" />
      <circle cx="168" cy="408" r="24" />
      <circle cx="256" cy="408" r="24" />
      <rect x="320" y="304" width="48" height="128" rx="24" ry="24" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M416,48a16,16,0,0,0-16-16H112A16,16,0,0,0,96,48V464a16,16,0,0,0,16,16H400a16,16,0,0,0,16-16ZM192,432H144V384h48Zm0-80H144V304h48Zm0-80H144V224h48Zm88,160H232V384h48Zm0-80H232V304h48Zm0-80H232V224h48Zm88,160H320V304h48Zm0-160H320V224h48Zm0-96H144V80H368Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M416,80a48.05,48.05,0,0,0-48-48H144A48.05,48.05,0,0,0,96,80V432a48.05,48.05,0,0,0,48,48H368a48.05,48.05,0,0,0,48-48ZM168,432a24,24,0,1,1,24-24A24,24,0,0,1,168,432Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,168,352Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,168,272Zm88,160a24,24,0,1,1,24-24A24,24,0,0,1,256,432Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,256,352Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,256,272ZM368,408a24,24,0,0,1-48,0V328a24,24,0,0,1,48,0ZM344,272a24,24,0,1,1,24-24A24,24,0,0,1,344,272Zm19.31-100.69A16,16,0,0,1,352,176H160a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16H352a16,16,0,0,1,16,16v64A16,16,0,0,1,363.31,171.31Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48" />
      <line fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="128" y1="48" x2="128" y2="80" />
      <line fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="384" y1="48" x2="384" y2="80" />
      <line fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="464" y1="160" x2="48" y2="160" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V192H32Z" />
      <path d="M480,87.77A23.8,23.8,0,0,0,456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M480,128a64,64,0,0,0-64-64H400V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,48V64H144V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,48V64H96a64,64,0,0,0-64,64v12a4,4,0,0,0,4,4H476a4,4,0,0,0,4-4Z" />
      <path d="M32,416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V180a4,4,0,0,0-4-4H36a4,4,0,0,0-4,4Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="48" y="80" width="416" height="384" rx="48" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" />
      <line x1="128" y1="48" x2="128" y2="80" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="384" y1="48" x2="384" y2="80" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="464" y1="160" x2="48" y2="160" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <polyline points="304 260 347.42 228 352 228 352 396" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <path d="M191.87,306.63c9.11,0,25.79-4.28,36.72-15.47a37.9,37.9,0,0,0,11.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4,0-33.52,11.61-37.85,18.93" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <path d="M149,374.16c4.88,8.27,19.71,25.84,43.88,25.84,28.59,0,52.12-15.94,52.12-43.82,0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V176H32ZM342.17,212H368V412H336V256.29l-35.39,26.08-19-25.76ZM222,335.3c-8.54-8.74-22.75-12.67-30.11-12.67h-16v-32h16c4.85,0,17.41-2.6,25.28-10.65a22,22,0,0,0,6.57-16.08c0-23.23-28.63-23.9-31.89-23.9-17.34,0-23.8,10.61-24.07,11.06l-8.13,13.78-27.56-16.27,8.14-13.77c7.64-13,25.22-26.8,51.62-26.8,16.44,0,31.76,4.77,43.13,13.42,13.39,10.2,20.76,25.28,20.76,42.48A54,54,0,0,1,240,302.35c-1.15,1.18-2.36,2.28-3.59,3.35a66.18,66.18,0,0,1,8.42,7.23c10.56,10.8,16.14,25.75,16.14,43.25,0,18.06-7.61,34-21.42,44.92-12.17,9.61-28.75,14.9-46.7,14.9-27.87,0-48.48-18.16-57.66-33.7l-8.13-13.78,27.56-16.27L162.78,366c1.08,1.84,11.15,18,30.1,18,16.66,0,36.12-7.29,36.12-27.82C229,349.93,227.78,341.23,222,335.3Z" />
      <path d="M456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480V87.77A23.8,23.8,0,0,0,456,64Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M416,64H400V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,48V64H144V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,48V64H96a64,64,0,0,0-64,64v12a4,4,0,0,0,4,4H476a4,4,0,0,0,4-4V128A64,64,0,0,0,416,64Z" />
      <path d="M476,176H36a4,4,0,0,0-4,4V416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V180A4,4,0,0,0,476,176ZM239.58,401.1c-12.17,9.61-28.75,14.9-46.7,14.9-27.87,0-48.48-18.16-57.66-33.7A16,16,0,0,1,162.78,366c1.08,1.84,11.15,18,30.1,18,16.66,0,36.12-7.29,36.12-27.82,0-6.25-1.22-14.95-7-20.88-8.54-8.74-22.75-12.67-30.11-12.67a16,16,0,0,1,0-32c4.85,0,17.41-2.6,25.28-10.65a22,22,0,0,0,6.57-16.08c0-23.23-28.63-23.9-31.89-23.9-17.34,0-23.8,10.61-24.07,11.06a16,16,0,1,1-27.55-16.26c7.64-13,25.22-26.8,51.62-26.8,16.44,0,31.76,4.77,43.13,13.42,13.39,10.2,20.76,25.28,20.76,42.48A54,54,0,0,1,240,302.35c-1.15,1.18-2.36,2.28-3.59,3.35a66.18,66.18,0,0,1,8.42,7.23c10.56,10.8,16.14,25.75,16.14,43.25C261,374.24,253.39,390.19,239.58,401.1ZM368,396a16,16,0,0,1-32,0V256.29l-22.51,16.59a16,16,0,1,1-19-25.76l43.42-32a16,16,0,0,1,9.49-3.12H352a16,16,0,0,1,16,16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48" />
      <circle cx="296" cy="232" r="24" />
      <circle cx="376" cy="232" r="24" />
      <circle cx="296" cy="312" r="24" />
      <circle cx="376" cy="312" r="24" />
      <circle cx="136" cy="312" r="24" />
      <circle cx="216" cy="312" r="24" />
      <circle cx="136" cy="392" r="24" />
      <circle cx="216" cy="392" r="24" />
      <circle cx="296" cy="392" r="24" />
      <line fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="128" y1="48" x2="128" y2="80" />
      <line fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="384" y1="48" x2="384" y2="80" />
      <line fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" x1="464" y1="160" x2="48" y2="160" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V176H32ZM352,212a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H356a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H356a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H196a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H196a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H116a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H116a4,4,0,0,1-4-4Z" />
      <path d="M456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480V87.77A23.8,23.8,0,0,0,456,64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M480,128a64,64,0,0,0-64-64H400V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,48V64H144V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,48V64H96a64,64,0,0,0-64,64v12a4,4,0,0,0,4,4H476a4,4,0,0,0,4-4Z" />
      <path d="M32,416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V179a3,3,0,0,0-3-3H35a3,3,0,0,0-3,3ZM376,208a24,24,0,1,1-24,24A24,24,0,0,1,376,208Zm0,80a24,24,0,1,1-24,24A24,24,0,0,1,376,288Zm-80-80a24,24,0,1,1-24,24A24,24,0,0,1,296,208Zm0,80a24,24,0,1,1-24,24A24,24,0,0,1,296,288Zm0,80a24,24,0,1,1-24,24A24,24,0,0,1,296,368Zm-80-80a24,24,0,1,1-24,24A24,24,0,0,1,216,288Zm0,80a24,24,0,1,1-24,24A24,24,0,0,1,216,368Zm-80-80a24,24,0,1,1-24,24A24,24,0,0,1,136,288Zm0,80a24,24,0,1,1-24,24A24,24,0,0,1,136,368Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M451,374c-15.88-16-54.34-39.35-73-48.76C353.7,313,351.7,312,332.6,326.19c-12.74,9.47-21.21,17.93-36.12,14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48,5.41-23.23,14.79-36c13.22-18,12.22-21,.92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9,44,119.9,47,108.83,51.6A160.15,160.15,0,0,0,83,65.37C67,76,58.12,84.83,51.91,98.1s-9,44.38,23.07,102.64,54.57,88.05,101.14,134.49S258.5,406.64,310.85,436c64.76,36.27,89.6,29.2,102.91,23s22.18-15,32.83-31a159.09,159.09,0,0,0,13.8-25.8C465,391.17,468,391.17,451,374Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M478.94,370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83,3.83,0,0,0-3.92.49c-11.63,9.07-31.21,25.73-32.26,26.63-6.78,5.81-6.78,5.81-12.33,4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56,4-12.34.9-1.05,17.57-20.63,26.64-32.25a3.83,3.83,0,0,0,.49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52A3.9,3.9,0,0,0,138,32.2,322.35,322.35,0,0,0,82,57.65,338,338,0,0,0,33.35,92a3.83,3.83,0,0,0-1.26,3.74c2.09,9.74,12.08,50.4,43.08,106.72,31.63,57.48,53.55,86.93,100,133.22S252,405.21,309.54,436.84c56.32,31,97,41,106.72,43.07a3.86,3.86,0,0,0,3.75-1.26A337.73,337.73,0,0,0,454.35,430a322.7,322.7,0,0,0,25.45-56A3.9,3.9,0,0,0,478.94,370.14Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M391,480c-19.52,0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91,298.77,93.61,267.79,61,208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82,73.38,58.16,62.65,74.11,52A176.3,176.3,0,0,1,102.75,36.8c1-.43,1.93-.84,2.76-1.21,4.95-2.23,12.45-5.6,21.95-2,6.34,2.38,12,7.25,20.86,16,18.17,17.92,43,57.83,52.16,77.43,6.15,13.21,10.22,21.93,10.23,31.71,0,11.45-5.76,20.28-12.75,29.81-1.31,1.79-2.61,3.5-3.87,5.16-7.61,10-9.28,12.89-8.18,18.05,2.23,10.37,18.86,41.24,46.19,68.51s57.31,42.85,67.72,45.07c5.38,1.15,8.33-.59,18.65-8.47,1.48-1.13,3-2.3,4.59-3.47,10.66-7.93,19.08-13.54,30.26-13.54h.06c9.73,0,18.06,4.22,31.86,11.18,18,9.08,59.11,33.59,77.14,51.78,8.77,8.84,13.66,14.48,16.05,20.81,3.6,9.53.21,17-2,22-.37.83-.78,1.74-1.21,2.75a176.49,176.49,0,0,1-15.29,28.58c-10.63,15.9-21.4,28.21-39.38,36.58A67.42,67.42,0,0,1,391,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M350.54,148.68l-26.62-42.06C318.31,100.08,310.62,96,302,96H210c-8.62,0-16.31,4.08-21.92,10.62l-26.62,42.06C155.85,155.23,148.62,160,140,160H80a32,32,0,0,0-32,32V384a32,32,0,0,0,32,32H432a32,32,0,0,0,32-32V192a32,32,0,0,0-32-32H373C364.35,160,356.15,155.23,350.54,148.68Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="272" r="80" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="124 158 124 136 100 136 100 158" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M350.54,148.68l-26.62-42.06C318.31,100.08,310.62,96,302,96H210c-8.62,0-16.31,4.08-21.92,10.62l-26.62,42.06C155.85,155.23,148.62,160,140,160H80a32,32,0,0,0-32,32V384a32,32,0,0,0,32,32H432a32,32,0,0,0,32-32V192a32,32,0,0,0-32-32H373C364.35,160,356.15,155.23,350.54,148.68Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="124 158 124 136 100 136 100 158" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M335.76,285.22V271.91a80,80,0,0,0-131-61.6M176,258.78v13.31a80,80,0,0,0,130.73,61.8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="196 272 176 252 156 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="356 272 336 292 316 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M456,144H373c-3,0-6.72-1.94-9.62-5L336.07,96.21C326,80,320,80,302,80H210c-18,0-23,0-34.07,16.21L148.62,139c-2.22,2.42-5.34,5-8.62,5V128a8,8,0,0,0-8-8H92a8,8,0,0,0-8,8v16H56a24,24,0,0,0-24,24V408a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V168A24,24,0,0,0,456,144ZM256,368c-47.82,0-87.76-34.23-95-80H117.37L176,229.37,234.63,288H194a64.07,64.07,0,0,0,102.63,33.49L320,343l-3.68,3.72A96.64,96.64,0,0,1,256,368Zm80-53.84L277.11,256H318a64.26,64.26,0,0,0-103-33.36L192,200l3.14-2.45A96.19,96.19,0,0,1,255.76,176c47.85,0,87,34.19,94.24,80h44.92Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M432,144H373c-3,0-6.72-1.94-9.62-5L337.44,98.06a15.52,15.52,0,0,0-1.37-1.85C327.11,85.76,315,80,302,80H210c-13,0-25.11,5.76-34.07,16.21a15.52,15.52,0,0,0-1.37,1.85l-25.94,41c-2.22,2.42-5.34,5-8.62,5v-8a16,16,0,0,0-16-16H100a16,16,0,0,0-16,16v8H80a48.05,48.05,0,0,0-48,48V384a48.05,48.05,0,0,0,48,48H432a48.05,48.05,0,0,0,48-48V192A48.05,48.05,0,0,0,432,144ZM316.84,346.3a96.06,96.06,0,0,1-155.66-59.18,16,16,0,0,1-16.49-26.43l20-20a16,16,0,0,1,22.62,0l20,20A16,16,0,0,1,196,288a17.31,17.31,0,0,1-2-.14,64.07,64.07,0,0,0,102.66,33.63,16,16,0,1,1,20.21,24.81Zm50.47-63-20,20a16,16,0,0,1-22.62,0l-20-20a16,16,0,0,1,13.09-27.2A64,64,0,0,0,215,222.64,16,16,0,1,1,194.61,198a96,96,0,0,1,156,59,16,16,0,0,1,16.72,26.35Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <circle cx="256" cy="272" r="64" />
      <path d="M456,144H373c-3,0-6.72-1.94-9.62-5l-27.28-42.8C325,80,320,80,302,80H210c-18,0-24,0-34.07,16.21L148.62,139c-2.22,2.42-5.34,5-8.62,5V128a8,8,0,0,0-8-8H92a8,8,0,0,0-8,8v16H56a24,24,0,0,0-24,24V408a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V168A24,24,0,0,0,456,144ZM260.51,367.9a96,96,0,1,1,91.39-91.39A96.11,96.11,0,0,1,260.51,367.9Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <circle cx="256" cy="272" r="64" />
      <path d="M432,144H373c-3,0-6.72-1.94-9.62-5L337.44,98.06a15.52,15.52,0,0,0-1.37-1.85C327.11,85.76,315,80,302,80H210c-13,0-25.11,5.76-34.07,16.21a15.52,15.52,0,0,0-1.37,1.85l-25.94,41c-2.22,2.42-5.34,5-8.62,5v-8a16,16,0,0,0-16-16H100a16,16,0,0,0-16,16v8H80a48.05,48.05,0,0,0-48,48V384a48.05,48.05,0,0,0,48,48H432a48.05,48.05,0,0,0,48-48V192A48.05,48.05,0,0,0,432,144ZM256,368a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,368Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M80,224l37.78-88.15C123.93,121.5,139.6,112,157.11,112H354.89c17.51,0,33.18,9.5,39.33,23.85L432,224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="80" y="224" width="352" height="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="112 368 112 400 80 400 80 368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="432 368 432 400 400 400 400 368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="144" cy="288" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="368" cy="288" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M447.68,220.78a16.44,16.44,0,0,0-1-3.1l-48-112A16,16,0,0,0,384,96H128a16,16,0,0,0-14.71,9.7l-48,112a16.44,16.44,0,0,0-1,3.1A16.15,16.15,0,0,0,64,224V408a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V384H400v24a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V224A16.15,16.15,0,0,0,447.68,220.78ZM144,320a32,32,0,1,1,32-32A32,32,0,0,1,144,320Zm224,0a32,32,0,1,1,32-32A32,32,0,0,1,368,320ZM104.26,208l34.29-80h234.9l34.29,80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M469.71,234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288,112,256,112s-88,4-117.36,18.63-38.75,52.52-50.27,70S49.62,224.87,42.29,234.6,29.8,305.84,32.94,336s9,48,9,48h86c14.08,0,18.66-5.29,47.46-8C207,373,238,372,256,372s50,1,81.58,4c28.8,2.73,33.53,8,47.46,8h85s5.86-17.84,9-48S477,244.33,469.71,234.6Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="400" y="384" width="56" height="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="56" y="384" width="56" height="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M364.47,309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279,288,256.2,288s-33.17,1.64-57.61,4.81-42.79,8.81-50.66,16.35C136.12,320.6,153.42,333.44,167,335c13.16,1.5,39.47.95,89.31.95s76.15.55,89.31-.95C359.18,333.35,375.24,321.4,364.47,309.16Z" />
      <path d="M431.57,243.05a3.23,3.23,0,0,0-3.1-3c-11.81-.42-23.8.42-45.07,6.69a93.88,93.88,0,0,0-30.08,15.06c-2.28,1.78-1.47,6.59,1.39,7.1A455.32,455.32,0,0,0,407.53,272c10.59,0,21.52-3,23.55-12.44A52.41,52.41,0,0,0,431.57,243.05Z" />
      <path d="M80.43,243.05a3.23,3.23,0,0,1,3.1-3c11.81-.42,23.8.42,45.07,6.69a93.88,93.88,0,0,1,30.08,15.06c2.28,1.78,1.47,6.59-1.39,7.1A455.32,455.32,0,0,1,104.47,272c-10.59,0-21.52-3-23.55-12.44A52.41,52.41,0,0,1,80.43,243.05Z" />
      <line x1="432" y1="192" x2="448" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="64" y1="192" x2="80" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M78,211s46.35-12,178-12,178,12,178,12" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M488,224c-3-5-32.61-17.79-32.61-17.79,5.15-2.66,8.67-3.21,8.67-14.21,0-12-.06-16-8.06-16H428.86c-.11-.24-.23-.49-.34-.74-17.52-38.26-19.87-47.93-46-60.95C347.47,96.88,281.76,96,256,96s-91.47.88-126.49,18.31c-26.16,13-25.51,19.69-46,60.95,0,.11-.21.4-.4.74H55.94c-7.94,0-8,4-8,16,0,11,3.52,11.55,8.67,14.21C56.61,206.21,28,220,24,224s-8,32-8,80,4,96,4,96H31.94c0,14,2.06,16,8.06,16h80c6,0,8-2,8-16H384c0,14,2,16,8,16h82c4,0,6-3,6-16h12s4-49,4-96S491,229,488,224ZM125.26,268.94A516.94,516.94,0,0,1,70.42,272C50,272,49.3,273.31,47.86,260.56a72.16,72.16,0,0,1,.51-17.51L49,240h3c12,0,23.27.51,44.55,6.78a98,98,0,0,1,30.09,15.06C131,265,132,268,132,268Zm247.16,72L368,352H144s.39-.61-5-11.18c-4-7.82,1-12.82,8.91-15.66C163.23,319.64,208,304,256,304s93.66,13.48,108.5,21.16C370,328,376.83,330,372.42,341Zm-257-136.53a96.23,96.23,0,0,1-9.7.07c2.61-4.64,4.06-9.81,6.61-15.21,8-17,17.15-36.24,33.44-44.35,23.54-11.72,72.33-17,110.23-17s86.69,5.24,110.23,17c16.29,8.11,25.4,27.36,33.44,44.35,2.57,5.45,4,10.66,6.68,15.33-2,.11-4.3,0-9.79-.19Zm347.72,56.11C461,273,463,272,441.58,272a516.94,516.94,0,0,1-54.84-3.06c-2.85-.51-3.66-5.32-1.38-7.1a93.84,93.84,0,0,1,30.09-15.06c21.28-6.27,33.26-7.11,45.09-6.69a3.22,3.22,0,0,1,3.09,3A70.18,70.18,0,0,1,463.14,260.56Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M494.26,276.22c-3.6-40.41-9.53-48.28-11.77-51.24-5.15-6.84-13.39-11.31-22.11-16l0,0a3.6,3.6,0,0,1-.91-5.68A15.93,15.93,0,0,0,464,190.77,16.27,16.27,0,0,0,447.65,176h-15.6a17,17,0,0,0-2,.13,8.5,8.5,0,0,0-1.41-.47l0,0c-9.24-19.53-21.89-46.27-48.11-59.32C341.64,97,270,96,256,96s-85.64,1-124.48,20.31c-26.22,13.05-38.87,39.79-48.11,59.32l-.08.16a6.52,6.52,0,0,0-1.35.34,17,17,0,0,0-2-.13H64.35A16.27,16.27,0,0,0,48,190.77a15.93,15.93,0,0,0,4.59,12.47,3.6,3.6,0,0,1-.91,5.68l0,0c-8.72,4.72-17,9.19-22.11,16-2.24,3-8.16,10.83-11.77,51.24-2,22.74-2.3,46.28-.73,61.44,3.29,31.5,9.46,50.54,9.72,51.33a16,16,0,0,0,13.2,10.87h0V400a16,16,0,0,0,16,16h56a16,16,0,0,0,16-16h0c8.61,0,14.6-1.54,20.95-3.18a158.83,158.83,0,0,1,28-4.91C207.45,389,237.79,388,256,388c17.84,0,49.52,1,80.08,3.91a159.16,159.16,0,0,1,28.11,4.93c6.08,1.56,11.85,3,19.84,3.15h0a16,16,0,0,0,16,16h56a16,16,0,0,0,16-16v-.12h0A16,16,0,0,0,485.27,389c.26-.79,6.43-19.83,9.72-51.33C496.56,322.5,496.28,299,494.26,276.22ZM112.33,189.31c8-17,17.15-36.24,33.44-44.35,23.54-11.72,72.33-17,110.23-17s86.69,5.24,110.23,17c16.29,8.11,25.4,27.36,33.44,44.35l1,2.17a8,8,0,0,1-7.44,11.42C360,202,290,199.12,256,199.12s-104,2.95-137.28,3.85a8,8,0,0,1-7.44-11.42C111.63,190.81,112,190.06,112.33,189.31Zm11.93,79.63A427.17,427.17,0,0,1,72.42,272c-10.6,0-21.53-3-23.56-12.44-1.39-6.35-1.24-9.92-.49-13.51C49,243,50,240.78,55,240c13-2,20.27.51,41.55,6.78,14.11,4.15,24.29,9.68,30.09,14.06C129.55,263,128,268.64,124.26,268.94Zm221.38,82c-13.16,1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79,7.87-7.54,26.23-13.18,50.68-16.35S233.38,304,256.2,304s32.12,1,57.62,4.81,44.77,9.52,50.68,16.35C375.28,337.4,359.21,349.35,345.64,351Zm117.5-91.39c-2,9.48-13,12.44-23.56,12.44a455.91,455.91,0,0,1-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1,5.71-4.49,16-9.91,30.09-14.06,21.28-6.27,33.55-8.78,44.09-6.69,2.57.51,3.93,3.27,4.09,5A40.64,40.64,0,0,1,463.14,259.56Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M447.68,220.78a16,16,0,0,0-1-3.08l-37.78-88.16C400.19,109.17,379,96,354.89,96H157.11c-24.09,0-45.3,13.17-54,33.54L65.29,217.7A15.72,15.72,0,0,0,64,224V400a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V384H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V224A16.15,16.15,0,0,0,447.68,220.78ZM144,320a32,32,0,1,1,32-32A32,32,0,0,1,144,320Zm224,0a32,32,0,1,1,32-32A32,32,0,0,1,368,320ZM104.26,208l28.23-65.85C136.11,133.69,146,128,157.11,128H354.89c11.1,0,21,5.69,24.62,14.15L407.74,208Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <rect x="48" y="96" width="416" height="320" rx="56" ry="56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="48" y1="192" x2="464" y2="192" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:60px" />
      <rect x="128" y="300" width="48" height="20" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:60px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M32,416a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V222H32ZM98,278a8,8,0,0,1,8-8h92a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H106a8,8,0,0,1-8-8Z" />
      <path d="M464,80H48A16,16,0,0,0,32,96v66H480V96A16,16,0,0,0,464,80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M32,376a56,56,0,0,0,56,56H424a56,56,0,0,0,56-56V222H32Zm66-76a30,30,0,0,1,30-30h48a30,30,0,0,1,30,30v20a30,30,0,0,1-30,30H128a30,30,0,0,1-30-30Z" />
      <path d="M424,80H88a56,56,0,0,0-56,56v26H480V136A56,56,0,0,0,424,80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M273.77,169.57,184.68,243.7a16,16,0,0,0,0,24.6l89.09,74.13A16,16,0,0,0,300,330.14V181.86A16,16,0,0,0,273.77,169.57Z" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256ZM300,364.27,169.91,256,300,147.73Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm252-74.14V330.14a16,16,0,0,1-26.23,12.29L184.68,268.3a16,16,0,0,1,0-24.6l89.09-74.13A16,16,0,0,1,300,181.86Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M321.94,98,158.82,237.78a24,24,0,0,0,0,36.44L321.94,414c15.57,13.34,39.62,2.28,39.62-18.22V116.18C361.56,95.68,337.51,84.62,321.94,98Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polygon points="368 64 144 256 368 448 368 64" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M321.94,98,158.82,237.78a24,24,0,0,0,0,36.44L321.94,414c15.57,13.34,39.62,2.28,39.62-18.22V116.18C361.56,95.68,337.51,84.62,321.94,98Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M342.43,238.23,268.3,327.32a16,16,0,0,1-24.6,0l-74.13-89.09A16,16,0,0,1,181.86,212H330.14A16,16,0,0,1,342.43,238.23Z" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256Zm-99.73-44L256,342.09,147.73,212Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM342.43,238.23,268.3,327.32a16,16,0,0,1-24.6,0l-74.13-89.09A16,16,0,0,1,181.86,212H330.14A16,16,0,0,1,342.43,238.23Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polygon points="64 144 256 368 448 144 64 144" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M238.23,342.43l89.09-74.13a16,16,0,0,0,0-24.6l-89.09-74.13A16,16,0,0,0,212,181.86V330.14A16,16,0,0,0,238.23,342.43Z" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM212,147.73,342.09,256,212,364.27Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM212,330.14V181.86a16,16,0,0,1,26.23-12.29l89.09,74.13a16,16,0,0,1,0,24.6l-89.09,74.13A16,16,0,0,1,212,330.14Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M190.06,414,353.18,274.22a24,24,0,0,0,0-36.44L190.06,98c-15.57-13.34-39.62-2.28-39.62,18.22V395.82C150.44,416.32,174.49,427.38,190.06,414Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polygon points="144 448 368 256 144 64 144 448" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M190.06,414,353.18,274.22a24,24,0,0,0,0-36.44L190.06,98c-15.57-13.34-39.62-2.28-39.62,18.22V395.82C150.44,416.32,174.49,427.38,190.06,414Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M342.43,273.77,268.3,184.68a16,16,0,0,0-24.6,0l-74.13,89.09A16,16,0,0,0,181.86,300H330.14A16,16,0,0,0,342.43,273.77Z" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48ZM147.73,300,256,169.91,364.27,300Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm74.14,252H181.86a16,16,0,0,1-12.29-26.23l74.13-89.09a16,16,0,0,1,24.6,0l74.13,89.09A16,16,0,0,1,330.14,300Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M414,321.94,274.22,158.82a24,24,0,0,0-36.44,0L98,321.94c-13.34,15.57-2.28,39.62,18.22,39.62H395.82C416.32,361.56,427.38,337.51,414,321.94Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polygon points="448 368 256 144 64 368 448 368" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M414,321.94,274.22,158.82a24,24,0,0,0-36.44,0L98,321.94c-13.34,15.57-2.28,39.62,18.22,39.62H395.82C416.32,361.56,427.38,337.51,414,321.94Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <circle cx="176" cy="416" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="400" cy="416" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="48 80 112 80 160 352 416 352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <circle cx="176" cy="416" r="32" />
      <circle cx="400" cy="416" r="32" />
      <polygon points="167.78 304 429.12 304 467.52 112 133.89 112 125.42 64 32 64 32 96 98.58 96 146.58 368 432 368 432 336 173.42 336 167.78 304" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <circle cx="176" cy="416" r="32" />
      <circle cx="400" cy="416" r="32" />
      <path d="M456.8,120.78A23.92,23.92,0,0,0,438.24,112H133.89l-6.13-34.78A16,16,0,0,0,112,64H48a16,16,0,0,0,0,32H98.58l45.66,258.78A16,16,0,0,0,160,368H416a16,16,0,0,0,0-32H173.42l-5.64-32H409.44A24.07,24.07,0,0,0,433,284.71l28.8-144A24,24,0,0,0,456.8,120.78Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="32" y="80" width="448" height="256" rx="16" ry="16" transform="translate(512 416) rotate(180)" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="64" y1="384" x2="448" y2="384" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="96" y1="432" x2="416" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="208" r="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M480,160a80,80,0,0,1-80-80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M32,160a80,80,0,0,0,80-80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M480,256a80,80,0,0,0-80,80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M32,256a80,80,0,0,1,80,80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="48" y="368" width="416" height="32" />
      <rect x="80" y="416" width="352" height="32" />
      <path d="M480,176a96.11,96.11,0,0,1-96-96V64H128V80a96.11,96.11,0,0,1-96,96H16v64H32a96.11,96.11,0,0,1,96,96v16H384V336a96.11,96.11,0,0,1,96-96h16V176ZM256,304a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,304Z" />
      <path d="M96,80V64H16v80H32A64.07,64.07,0,0,0,96,80Z" />
      <path d="M32,272H16v80H96V336A64.07,64.07,0,0,0,32,272Z" />
      <path d="M480,144h16V64H416V80A64.07,64.07,0,0,0,480,144Z" />
      <path d="M416,336v16h80V272H480A64.07,64.07,0,0,0,416,336Z" />
      <circle cx="256" cy="208" r="64" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M448,400H64a16,16,0,0,1,0-32H448a16,16,0,0,1,0,32Z" />
      <path d="M416,448H96a16,16,0,0,1,0-32H416a16,16,0,0,1,0,32Z" />
      <path d="M32,272H16v48a32,32,0,0,0,32,32H96V336A64.07,64.07,0,0,0,32,272Z" />
      <path d="M480,240h16V176H480a96.11,96.11,0,0,1-96-96V64H128V80a96.11,96.11,0,0,1-96,96H16v64c5,0,10.34,0,16,0a96.11,96.11,0,0,1,96,96v16H384V336A96.11,96.11,0,0,1,480,240ZM256,304a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,304Z" />
      <circle cx="256" cy="208" r="64" />
      <path d="M416,336v16h48a32,32,0,0,0,32-32V272H480A64.07,64.07,0,0,0,416,336Z" />
      <path d="M480,144h16V96a32,32,0,0,0-32-32H416V80A64.07,64.07,0,0,0,480,144Z" />
      <path d="M96,80V64H48A32,32,0,0,0,16,96v48H32A64.07,64.07,0,0,0,96,80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="416" y="96" width="64" height="320" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="288" y="176" width="64" height="240" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="160" y="240" width="64" height="176" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="32" y="304" width="64" height="112" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M496,432H400V80h96Z" />
      <path d="M368,432H272V160h96Z" />
      <path d="M240,432H144V224h96Z" />
      <path d="M112,432H16V288h96Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M472,432H424a24,24,0,0,1-24-24V104a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,472,432Z" />
      <path d="M344,432H296a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,344,432Z" />
      <path d="M216,432H168a24,24,0,0,1-24-24V248a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,216,432Z" />
      <path d="M88,432H40a24,24,0,0,1-24-24V312a24,24,0,0,1,24-24H88a24,24,0,0,1,24,24v96A24,24,0,0,1,88,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M408,64H104a56.16,56.16,0,0,0-56,56V312a56.16,56.16,0,0,0,56,56h40v80l93.72-78.14a8,8,0,0,1,5.13-1.86H408a56.16,56.16,0,0,0,56-56V120A56.16,56.16,0,0,0,408,64Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="160" cy="216" r="32" />
      <circle cx="256" cy="216" r="32" />
      <circle cx="352" cy="216" r="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M456,48H56A24,24,0,0,0,32,72V360a24,24,0,0,0,24,24h72v80l117.74-80H456a24,24,0,0,0,24-24V72A24,24,0,0,0,456,48ZM160,248a32,32,0,1,1,32-32A32,32,0,0,1,160,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,248ZM456,80h0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M408,48H104a72.08,72.08,0,0,0-72,72V312a72.08,72.08,0,0,0,72,72h24v64a16,16,0,0,0,26.25,12.29L245.74,384H408a72.08,72.08,0,0,0,72-72V120A72.08,72.08,0,0,0,408,48ZM160,248a32,32,0,1,1,32-32A32,32,0,0,1,160,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,248Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,248Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M408,64H104a56.16,56.16,0,0,0-56,56V312a56.16,56.16,0,0,0,56,56h40v80l93.72-78.14a8,8,0,0,1,5.13-1.86H408a56.16,56.16,0,0,0,56-56V120A56.16,56.16,0,0,0,408,64Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M128,464V384H56a24,24,0,0,1-24-24V72A24,24,0,0,1,56,48H456a24,24,0,0,1,24,24V360a24,24,0,0,1-24,24H245.74ZM456,80h0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M144,464a16,16,0,0,1-16-16V384H104a72.08,72.08,0,0,1-72-72V120a72.08,72.08,0,0,1,72-72H408a72.08,72.08,0,0,1,72,72V312a72.08,72.08,0,0,1-72,72H245.74l-91.49,76.29A16.05,16.05,0,0,1,144,464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M87.48,380c1.2-4.38-1.43-10.47-3.94-14.86A42.63,42.63,0,0,0,81,361.34a199.81,199.81,0,0,1-33-110C47.64,139.09,140.72,48,255.82,48,356.2,48,440,117.54,459.57,209.85A199,199,0,0,1,464,251.49c0,112.41-89.49,204.93-204.59,204.93-18.31,0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14,31.14,0,0,0-11.13-2.07,30.7,30.7,0,0,0-12.08,2.43L81.5,462.78A15.92,15.92,0,0,1,76.84,464a9.61,9.61,0,0,1-9.58-9.74,15.85,15.85,0,0,1,.6-3.29Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="160" cy="256" r="32" />
      <circle cx="256" cy="256" r="32" />
      <circle cx="352" cy="256" r="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M475.22,206.52C464.88,157.87,437.46,113.59,398,81.84A227.4,227.4,0,0,0,255.82,32C194.9,32,138,55.47,95.46,98.09,54.35,139.33,31.82,193.78,32,251.37A215.66,215.66,0,0,0,67.65,370.13L72,376.18,48,480l114.8-28.56s2.3.77,4,1.42,16.33,6.26,31.85,10.6c12.9,3.6,39.74,9,60.77,9,59.65,0,115.35-23.1,156.83-65.06C457.36,365.77,480,310.42,480,251.49A213.5,213.5,0,0,0,475.22,206.52ZM160,288a32,32,0,1,1,32-32A32,32,0,0,1,160,288Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,288Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,288Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M398,81.84A227.4,227.4,0,0,0,255.82,32C194.9,32,138,55.47,95.46,98.09,54.35,139.33,31.82,193.78,32,251.37A215.66,215.66,0,0,0,67.65,370.13l.19.27c.28.41.57.82.86,1.22s.65.92.73,1.05l.22.4c1.13,2,2,4.44,1.23,6.9L52.46,446.63a29.13,29.13,0,0,0-1.2,7.63A25.69,25.69,0,0,0,76.83,480a29.44,29.44,0,0,0,10.45-2.29l67.49-24.36.85-.33a14.75,14.75,0,0,1,5.8-1.15,15.12,15.12,0,0,1,5.37,1c1.62.63,16.33,6.26,31.85,10.6,12.9,3.6,39.74,9,60.77,9,59.65,0,115.35-23.1,156.83-65.06C457.36,365.77,480,310.42,480,251.49a213.5,213.5,0,0,0-4.78-45C464.88,157.87,437.46,113.59,398,81.84ZM87.48,380h0ZM160,288a32,32,0,1,1,32-32A32,32,0,0,1,160,288Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,288Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,288Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M87.49,380c1.19-4.38-1.44-10.47-3.95-14.86A44.86,44.86,0,0,0,81,361.34a199.81,199.81,0,0,1-33-110C47.65,139.09,140.73,48,255.83,48,356.21,48,440,117.54,459.58,209.85A199,199,0,0,1,464,251.49c0,112.41-89.49,204.93-204.59,204.93-18.3,0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09,31.09,0,0,0-11.12-2.07,30.71,30.71,0,0,0-12.09,2.43L81.51,462.78A16,16,0,0,1,76.84,464a9.6,9.6,0,0,1-9.57-9.74,15.85,15.85,0,0,1,.6-3.29Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M475.22,206.52C464.88,157.87,437.46,113.59,398,81.84A227.4,227.4,0,0,0,255.82,32C194.9,32,138,55.47,95.46,98.09,54.35,139.33,31.82,193.78,32,251.37A215.66,215.66,0,0,0,67.65,370.13L72,376.18,48,480l114.8-28.56s2.3.77,4,1.42,16.33,6.26,31.85,10.6c12.9,3.6,39.74,9,60.77,9,59.65,0,115.35-23.1,156.83-65.06C457.36,365.77,480,310.42,480,251.49A213.5,213.5,0,0,0,475.22,206.52Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M76.83,480a25.69,25.69,0,0,1-25.57-25.74,29.13,29.13,0,0,1,1.2-7.63L70.88,380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66,215.66,0,0,1,32,251.37c-.18-57.59,22.35-112,63.46-153.28C138,55.47,194.9,32,255.82,32A227.4,227.4,0,0,1,398,81.84c39.45,31.75,66.87,76,77.21,124.68a213.5,213.5,0,0,1,4.78,45c0,58.93-22.64,114.28-63.76,155.87-41.48,42-97.18,65.06-156.83,65.06-21,0-47.87-5.36-60.77-9-15.52-4.34-30.23-10-31.85-10.6a15.12,15.12,0,0,0-5.37-1,14.75,14.75,0,0,0-5.8,1.15l-.85.33L87.28,477.71A29.44,29.44,0,0,1,76.83,480Zm-2-31.8ZM87.48,380h0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M448,312.43c.77-1.11,1.51-2.26,2.27-3.34A174.55,174.55,0,0,0,480,211.85C480.32,112.55,396.54,32,292.94,32c-90.36,0-165.74,61.49-183.4,143.12a172.81,172.81,0,0,0-4,36.83c0,99.4,80.56,182.11,184.16,182.11,16.47,0,38.66-4.95,50.83-8.29s24.23-7.75,27.35-8.94,8-2.41,11.89-1.29l77.42,22.38a4,4,0,0,0,5-4.86l-17.72-67.49C443.24,320.57,443.08,319.63,448,312.43Z" />
      <path d="M312.54,415.38a165.32,165.32,0,0,1-23.26,2.05c-42.43,0-82.5-11.2-115-32.2a184.09,184.09,0,0,1-53.09-49.32C95.11,301.34,80.89,257.4,80.89,211.42c0-3.13.11-6.14.22-9.16a4.34,4.34,0,0,0-7.54-3.12A158.76,158.76,0,0,0,58.71,394.38c2.47,3.77,3.87,6.68,3.44,8.62L48.06,475.26a4,4,0,0,0,5.22,4.53l68-24.24a16.85,16.85,0,0,1,12.92.22c20.35,8,42.86,12.92,65.37,12.92a169.45,169.45,0,0,0,116.63-46A4.29,4.29,0,0,0,312.54,415.38Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M60.44,389.17c0,.07,0,.2-.08.38C60.39,389.43,60.41,389.3,60.44,389.17Z" />
      <path d="M439.9,405.6a26.77,26.77,0,0,1-9.59-2l-56.78-20.13-.42-.17a9.88,9.88,0,0,0-3.91-.76,10.32,10.32,0,0,0-3.62.66c-1.38.52-13.81,5.19-26.85,8.77-7.07,1.94-31.68,8.27-51.43,8.27-50.48,0-97.68-19.4-132.89-54.63A183.38,183.38,0,0,1,100.3,215.1a175.9,175.9,0,0,1,4.06-37.58c8.79-40.62,32.07-77.57,65.55-104A194.76,194.76,0,0,1,290.3,32c52.21,0,100.86,20,137,56.18,34.16,34.27,52.88,79.33,52.73,126.87a177.86,177.86,0,0,1-30.3,99.15l-.19.28-.74,1c-.17.23-.34.45-.5.68l-.15.27a21.63,21.63,0,0,0-1.08,2.09l15.74,55.94a26.42,26.42,0,0,1,1.12,7.11A24,24,0,0,1,439.9,405.6Z" />
      <path d="M299.87,425.39a15.74,15.74,0,0,0-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78,201.78,0,0,1-128.82-58.75A199.21,199.21,0,0,1,86.4,244.16C85,234.42,85,232,85,232a16,16,0,0,0-28-10.58h0S49.12,230,45.4,238.61a162.09,162.09,0,0,0,11,150.06C59,393,59,395,58.42,399.5c-2.73,14.11-7.51,39-10,51.91a24,24,0,0,0,8,22.92l.46.39A24.34,24.34,0,0,0,72,480a23.42,23.42,0,0,0,9-1.79l53.51-20.65a8.05,8.05,0,0,1,5.72,0c21.07,7.84,43,12,63.78,12a176,176,0,0,0,74.91-16.66c5.46-2.56,14-5.34,19-11.12A15,15,0,0,0,299.87,425.39Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="352 176 217.6 336 160 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="64" y="64" width="384" height="384" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M48,48V464H464V48ZM218,360.38,137.4,270.81l23.79-21.41,56,62.22L350,153.46,374.54,174Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M400,48H112a64.07,64.07,0,0,0-64,64V400a64.07,64.07,0,0,0,64,64H400a64.07,64.07,0,0,0,64-64V112A64.07,64.07,0,0,0,400,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="352 176 217.6 336 160 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM218,360.38,137.4,270.81l23.79-21.41,56,62.22L350,153.46,374.54,174Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="368 192 256.13 320 208.18 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="191.95" y1="320" x2="144" y2="272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="305.71" y1="192" x2="254.16" y2="251" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm48.19,121.42,24.1,21.06-73.61,84.1-24.1-23.06ZM191.93,342.63,121.37,272,144,249.37,214.57,320Zm65,.79L185.55,272l22.64-22.62,47.16,47.21L366.48,169.42l24.1,21.06Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM242.11,240.47l51.55-59a16,16,0,0,1,24.1,21.06l-51.55,59a16,16,0,1,1-24.1-21.06Zm-38.86,90.85a16,16,0,0,1-22.62,0l-47.95-48a16,16,0,1,1,22.64-22.62l48,48A16,16,0,0,1,203.25,331.32Zm176.8-128.79-111.88,128A16,16,0,0,1,256.66,336h-.54a16,16,0,0,1-11.32-4.69l-47.94-48a16,16,0,1,1,22.64-22.62l29.8,29.83a8,8,0,0,0,11.68-.39l95-108.66a16,16,0,0,1,24.1,21.06Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <polyline points="464 128 240 384 144 288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="144" y1="384" x2="48" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="368" y1="128" x2="232" y2="284" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <polyline points="465 127 241 384 149 292" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px" />
      <line x1="140" y1="385" x2="47" y2="292" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px" />
      <line x1="363" y1="127" x2="236" y2="273" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <polyline points="464 128 240 384 144 288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="144" y1="384" x2="48" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="368" y1="128" x2="232" y2="284" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <polyline points="416 128 192 384 96 288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <polyline points="416 128 192 384 96 288" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <polyline points="416 128 192 384 96 288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="296 352 200 256 296 160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm62.63,304L296,374.63,177.37,256,296,137.37,318.63,160l-96,96Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm35.31,292.69a16,16,0,1,1-22.62,22.62l-96-96a16,16,0,0,1,0-22.62l96-96a16,16,0,0,1,22.62,22.62L206.63,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="328 112 184 256 328 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="328 112 184 256 328 400" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="328 112 184 256 328 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="352 216 256 312 160 216" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,464c114.87,0,208-93.13,208-208S370.87,48,256,48,48,141.13,48,256,141.13,464,256,464ZM160,193.37l96,96,96-96L374.63,216,256,334.63,137.37,216Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM363.31,227.31l-96,96a16,16,0,0,1-22.62,0l-96-96a16,16,0,0,1,22.62-22.62L256,289.37l84.69-84.68a16,16,0,0,1,22.62,22.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
    <title>Chevron Down</title>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144" />
</svg>
`,
    
    
    
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="112 184 256 328 400 184" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144" />
      
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M64,256c0,106,86,192,192,192s192-86,192-192S362,64,256,64,64,150,64,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="216 352 312 256 216 160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48ZM216,374.63,193.37,352l96-96-96-96L216,137.37,334.63,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm257.37,0-84.68-84.69a16,16,0,0,1,22.62-22.62l96,96a16,16,0,0,1,0,22.62l-96,96a16,16,0,0,1-22.62-22.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="184 112 328 256 184 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="184 112 328 256 184 400" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="184 112 328 256 184 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="352 296 256 200 160 296" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm96,270.63-96-96-96,96L137.37,296,256,177.37,374.63,296Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48ZM363.31,307.31a16,16,0,0,1-22.62,0L256,222.63l-84.69,84.68a16,16,0,0,1-22.62-22.62l96-96a16,16,0,0,1,22.62,0l96,96A16,16,0,0,1,363.31,307.31Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="112 328 256 184 400 328" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="112 328 256 184 400 328" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="112 328 256 184 400 328" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M336,64h32a48,48,0,0,1,48,48V432a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V112a48,48,0,0,1,48-48h32" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="176" y="32" width="160" height="64" rx="26.13" ry="26.13" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M420,48H352V28a12,12,0,0,0-12-12H172a12,12,0,0,0-12,12V48H92A12,12,0,0,0,80,60V484a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V60A12,12,0,0,0,420,48Zm-84.13,64H176.13V80H335.87Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M368,48H356.59a8,8,0,0,1-7.44-5.08A42.18,42.18,0,0,0,309.87,16H202.13a42.18,42.18,0,0,0-39.28,26.92A8,8,0,0,1,155.41,48H144a64,64,0,0,0-64,64V432a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V112A64,64,0,0,0,368,48Zm-48.13,64H192.13a16,16,0,0,1,0-32H319.87a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="320" y1="320" x2="192" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="192" y1="320" x2="320" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm86.63,272L320,342.63l-64-64-64,64L169.37,320l64-64-64-64L192,169.37l64,64,64-64L342.63,192l-64,64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm75.31,260.69a16,16,0,1,1-22.62,22.62L256,278.63l-52.69,52.68a16,16,0,0,1-22.62-22.62L233.37,256l-52.68-52.69a16,16,0,0,1,22.62-22.62L256,233.37l52.69-52.68a16,16,0,0,1,22.62,22.62L278.63,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <line x1="368" y1="368" x2="144" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="368" y1="144" x2="144" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M333.88,240.59a8,8,0,0,1-6.66-6.66C320.68,192.78,290.82,168,256,168c-32.37,0-53.93,21.22-62.48,43.58a7.92,7.92,0,0,1-6.16,5c-27.67,4.35-50.82,22.56-51.35,54.3-.52,31.53,25.51,57.11,57,57.11H326c27.5,0,50-13.72,50-44C376,256.77,354,243.58,333.88,240.59Z" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm70,280H196c-33,0-60-23-60-56,0-34.21,26-53,56-56,7.28-23.9,29.5-48,64-48,36.5,0,67.55,27.23,72,72,21.49,1.12,48,14.09,48,44C376,314.28,353.5,328,326,328Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm70,280H193.05c-31.53,0-57.56-25.58-57-57.11.53-31.74,23.68-49.95,51.35-54.3a7.92,7.92,0,0,0,6.16-5C202.07,189.22,223.63,168,256,168c33.17,0,61.85,22.49,70.14,60.21a17.75,17.75,0,0,0,13.18,13.43C357.79,246.05,376,259.21,376,284,376,314.28,353.5,328,326,328Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M400,240c-8.89-89.54-71-144-144-144-69,0-113.44,48.2-128,96C68,198,16,235.59,16,304c0,66,54,112,120,112H396c55,0,100-27.44,100-88C496,268.18,443,242.24,400,240Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="317 208 209.2 336 163 284.8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M414.25,225.36c-6.52-41.18-24.05-76.4-51.11-102.46A153.57,153.57,0,0,0,256,80c-35.5,0-68.24,11.69-94.68,33.8a156.42,156.42,0,0,0-45.22,63.61c-30.26,4.81-57.45,17.18-77.38,35.37C13.39,235.88,0,267.42,0,304c0,36,14.38,68.88,40.49,92.59C65.64,419.43,99.56,432,136,432H396c32.37,0,60.23-8.57,80.59-24.77C499.76,388.78,512,361.39,512,328,512,266.15,463.56,232.66,414.25,225.36Zm-204.63,135-69.22-76.7,23.76-21.44,44.62,49.46,106.29-126.2,24.47,20.61Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M424.44,227.25a16,16,0,0,1-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57,153.57,0,0,0,256,80c-35.5,0-68.24,11.69-94.68,33.8a156.24,156.24,0,0,0-42,56,16,16,0,0,1-11.37,9.15c-27,5.62-51.07,17.34-69.18,33.87C13.39,235.88,0,267.42,0,304c0,36,14.38,68.88,40.49,92.59C65.64,419.43,99.56,432,136,432H396c32.37,0,60.23-8.57,80.59-24.77C499.76,388.78,512,361.39,512,328,512,270.43,470,237.42,424.44,227.25Zm-95.2-8.94-107.8,128a16,16,0,0,1-12,5.69h-.27a16,16,0,0,1-11.88-5.28l-45.9-50.87c-5.77-6.39-5.82-16.33.3-22.4a16,16,0,0,1,23.16.63l33.9,37.58,96-114a16,16,0,1,1,24.48,20.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M320,336h76c55,0,100-21.21,100-75.6s-53-73.47-96-75.6C391.11,99.74,329,48,256,48c-69,0-113.44,45.79-128,91.2-60,5.7-112,35.88-112,98.4S70,336,136,336h56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="192 400.1 256 464 320 400.1" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="224" x2="256" y2="448.03" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M472.7,189.5c-15.76-10-36.21-16.79-58.59-19.54-6.65-39.1-24.22-72.52-51.27-97.26C334.15,46.45,296.21,32,256,32c-35.35,0-68,11.08-94.37,32a149.7,149.7,0,0,0-45.29,60.42c-30.67,4.32-57,14.61-76.71,30C13.7,174.83,0,203.56,0,237.6,0,305,55.92,352,136,352H240V208h32V352H396c72.64,0,116-34.24,116-91.6C512,230.35,498.41,205.83,472.7,189.5Z" />
      <polygon points="240 419.42 191.98 371 169.37 394 256 480 342.63 394 320.02 371 272 419.42 272 352 240 352 240 419.42" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M472.7,189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16,16,0,0,1,412,159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15,46.45,296.21,32,256,32c-35.35,0-68,11.08-94.37,32a150.13,150.13,0,0,0-41.95,52.83A16.05,16.05,0,0,1,108,125.8c-27.13,4.9-50.53,14.68-68.41,28.7C13.7,174.83,0,203.56,0,237.6,0,305,55.93,352,136,352H240V224.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,224V352H396c72.64,0,116-34.24,116-91.6C512,230.35,498.41,205.83,472.7,189.5Z" />
      <path d="M240,425.42l-36.7-36.64a16,16,0,0,0-22.6,22.65l64,63.89a16,16,0,0,0,22.6,0l64-63.89a16,16,0,0,0-22.6-22.65L272,425.42V352H240Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M93.72,183.25C49.49,198.05,16,233.1,16,288c0,66,54,112,120,112H320.37" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M467.82,377.74C485.24,363.3,496,341.61,496,312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16,0-48.79,6.93-67.6,18.14" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="448" y1="448" x2="64" y2="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <rect x="240" y="-31.53" width="32" height="575.06" transform="translate(-106.04 256) rotate(-45)" />
      <path d="M38.72,212.78C13.39,235.88,0,267.42,0,304c0,36,14.38,68.88,40.49,92.59C65.64,419.43,99.56,432,136,432H364.12L110.51,178.39C82.5,183.78,57.42,195.72,38.72,212.78Z" />
      <path d="M476.59,407.23C499.76,388.78,512,361.39,512,328c0-61.85-48.44-95.34-97.75-102.64-6.52-41.18-24.05-76.4-51.11-102.46A153.57,153.57,0,0,0,256,80c-30.47,0-58.9,8.62-83.07,25L475.75,407.86C476,407.65,476.32,407.45,476.59,407.23Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M448,464a15.92,15.92,0,0,1-11.31-4.69l-384-384A16,16,0,0,1,75.31,52.69l384,384A16,16,0,0,1,448,464Z" />
      <path d="M38.72,196.78C13.39,219.88,0,251.42,0,288c0,36,14.38,68.88,40.49,92.59C65.64,403.43,99.56,416,136,416H328.8a8,8,0,0,0,5.66-13.66L100.88,168.76a8,8,0,0,0-8-2C72,173.15,53.4,183.38,38.72,196.78Z" />
      <path d="M476.59,391.23C499.76,372.78,512,345.39,512,312c0-57.57-42-90.58-87.56-100.75a16,16,0,0,1-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57,153.57,0,0,0,256,64c-31.12,0-60.12,9-84.62,26.1a8,8,0,0,0-1.14,12.26L461.68,393.8a8,8,0,0,0,10.2.93Q474.31,393.05,476.59,391.23Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M400,240c-8.89-89.54-71-144-144-144-69,0-113.44,48.2-128,96C68,198,16,235.59,16,304c0,66,54,112,120,112H396c55,0,100-27.44,100-88C496,268.18,443,242.24,400,240Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M396,432H136c-36.44,0-70.36-12.57-95.51-35.41C14.38,372.88,0,340,0,304c0-36.58,13.39-68.12,38.72-91.22,19.93-18.19,47.12-30.56,77.38-35.37a156.42,156.42,0,0,1,45.22-63.61C187.76,91.69,220.5,80,256,80a153.57,153.57,0,0,1,107.14,42.9c27.06,26.06,44.59,61.28,51.11,102.46C463.56,232.66,512,266.15,512,328c0,33.39-12.24,60.78-35.41,79.23C456.23,423.43,428.37,432,396,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M320,367.79h76c55,0,100-29.21,100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69,0-113.44,45.79-128,91.2-60,5.7-112,43.88-112,106.4s54,106.4,120,106.4h56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="320 255.79 256 191.79 192 255.79" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="448.21" x2="256" y2="207.79" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M473.66,210c-16.56-12.3-37.7-20.75-59.52-24-6.62-39.18-24.21-72.67-51.3-97.45C334.15,62.25,296.21,47.79,256,47.79c-35.35,0-68,11.08-94.37,32.05a149.61,149.61,0,0,0-45.32,60.49c-29.94,4.6-57.12,16.68-77.39,34.55C13.46,197.33,0,227.24,0,261.39c0,34.52,14.49,66,40.79,88.76,25.12,21.69,58.94,33.64,95.21,33.64H240V230.42l-48,48-22.63-22.63L256,169.17l86.63,86.62L320,278.42l-48-48V383.79H396c31.34,0,59.91-8.8,80.45-24.77,23.26-18.1,35.55-44,35.55-74.83C512,254.25,498.74,228.58,473.66,210Z" />
      <rect x="240" y="383.79" width="32" height="80.41" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M473.66,210c-14-10.38-31.2-18-49.36-22.11a16.11,16.11,0,0,1-12.19-12.22c-7.8-34.75-24.59-64.55-49.27-87.13C334.15,62.25,296.21,47.79,256,47.79c-35.35,0-68,11.08-94.37,32.05a150.07,150.07,0,0,0-42.06,53,16,16,0,0,1-11.31,8.87c-26.75,5.4-50.9,16.87-69.34,33.12C13.46,197.33,0,227.24,0,261.39c0,34.52,14.49,66,40.79,88.76,25.12,21.69,58.94,33.64,95.21,33.64H240V230.42l-36.69,36.69a16,16,0,0,1-23.16-.56c-5.8-6.37-5.24-16.3.85-22.39l63.69-63.68a16,16,0,0,1,22.62,0L331,244.14c6.28,6.29,6.64,16.6.39,22.91a16,16,0,0,1-22.68.06L272,230.42V383.79H396c31.34,0,59.91-8.8,80.45-24.77,23.26-18.1,35.55-44,35.55-74.83C512,254.25,498.74,228.58,473.66,210Z" />
      <path d="M240,448.21a16,16,0,1,0,32,0V383.79H240Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M396,432H136c-36.44,0-70.36-12.57-95.51-35.41C14.38,372.88,0,340,0,304c0-36.58,13.39-68.12,38.72-91.22,18.11-16.53,42.22-28.25,69.18-33.87a16,16,0,0,0,11.37-9.15,156.24,156.24,0,0,1,42.05-56C187.76,91.69,220.5,80,256,80a153.57,153.57,0,0,1,107.14,42.9c24.73,23.81,41.5,55.28,49.18,92a16,16,0,0,0,12.12,12.39C470,237.42,512,270.43,512,328c0,33.39-12.24,60.78-35.41,79.23C456.23,423.43,428.37,432,396,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M388.31,272c47.75,0,89.77-27.77,107.69-68.92-14.21,6.18-30.9,8.61-47.38,8.61A116.31,116.31,0,0,1,332.31,95.38c0-16.48,2.43-33.17,8.61-47.38C299.77,65.92,272,107.94,272,155.69a116.31,116.31,0,0,0,3.44,28.18" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M90.61,306.85A16.07,16.07,0,0,0,104,293.6C116.09,220.17,169.63,176,232,176c57.93,0,96.62,37.75,112.2,77.74a15.84,15.84,0,0,0,12.2,9.87c50,8.15,91.6,41.54,91.6,99.59C448,422.6,399.4,464,340,464H106c-49.5,0-90-24.7-90-79.2C16,336.33,54.67,312.58,90.61,306.85Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M340,480H106c-29.5,0-54.92-7.83-73.53-22.64C11.23,440.44,0,415.35,0,384.8c0-29.44,12.09-54.25,35-71.74,14.55-11.13,33.41-18.87,53.2-22,6.06-36.92,21.92-68.53,46.29-92A139.82,139.82,0,0,1,232,160c32.33,0,62.15,10.65,86.24,30.79a142.41,142.41,0,0,1,40.83,57.05c27.18,4.48,51.59,15.68,69.56,32.08C451.77,301,464,329.82,464,363.2c0,32.85-13.13,62.87-37,84.52C404.11,468.54,373.2,480,340,480Z" />
      <path d="M381.55,219.93c26.5,6.93,50,19.32,68.65,36.34q3.89,3.56,7.47,7.34c25.41-18.4,45.47-44.92,54.33-71.38-16.24,7.07-35.31,9.85-54.15,9.85-73.42,0-115.93-42.51-115.93-115.93,0-18.84,2.78-37.91,9.85-54.15-40.41,13.53-81,53.19-92.52,98.13a162.61,162.61,0,0,1,79.52,36.12A173,173,0,0,1,381.55,219.93Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M340,480H106c-29.5,0-54.92-7.83-73.53-22.64C11.23,440.44,0,415.35,0,384.8c0-29.44,12.09-54.25,35-71.74,12.1-9.26,27.2-16.17,43.33-20.05A16,16,0,0,0,90.14,280.8c7.15-32.54,22.25-60.49,44.33-81.75A139.82,139.82,0,0,1,232,160c32.33,0,62.15,10.65,86.24,30.79a142.22,142.22,0,0,1,37.65,49.54,16.06,16.06,0,0,0,11.12,9c24,5.22,45.42,15.78,61.62,30.56C451.77,301,464,329.82,464,363.2c0,32.85-13.13,62.87-37,84.52C404.11,468.54,373.2,480,340,480Z" />
      <path d="M510.53,209.79a16.34,16.34,0,0,0-1.35-15.8,16,16,0,0,0-19.57-5.58c-10.7,4.65-24.48,7.17-39.92,7.28-55.3.4-101.38-45-101.38-100.31,0-15.75,2.48-29.84,7.18-40.76a16.3,16.3,0,0,0-1.85-16.33,16,16,0,0,0-19.1-5c-38.63,16.82-66.18,51.51-75.27,92.54a4,4,0,0,0,3.19,4.79,162.54,162.54,0,0,1,76.31,35.59,172.58,172.58,0,0,1,39.64,47.84,16.35,16.35,0,0,0,9.54,7.64c23.89,7.17,45.1,18.9,62.25,34.54q4.44,4.07,8.48,8.42a4,4,0,0,0,5.16.57A129.12,129.12,0,0,0,510.53,209.79Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M100.18,241.19a15.93,15.93,0,0,0,13.37-13.25C126.6,145.59,186.34,96,256,96c64.69,0,107.79,42.36,124.92,87a16.11,16.11,0,0,0,12.53,10.18C449.36,202.06,496,239.21,496,304c0,66-54,112-120,112H116c-55,0-100-27.44-100-88C16,273.57,59.89,247.19,100.18,241.19Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M376,432H116c-32.37,0-60.23-8.57-80.59-24.77C12.24,388.78,0,361.39,0,328c0-61.85,48.44-95.34,97.75-102.64,6.52-41.18,24-76.4,51.11-102.46A153.57,153.57,0,0,1,256,80c35.5,0,68.24,11.69,94.68,33.8a156.42,156.42,0,0,1,45.22,63.61c30.26,4.81,57.45,17.18,77.38,35.36C498.61,235.88,512,267.42,512,304c0,36-14.38,68.88-40.49,92.59C446.36,419.43,412.44,432,376,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M376,432H116c-32.37,0-60.23-8.57-80.59-24.77C12.24,388.78,0,361.39,0,328c0-57.57,42-90.58,87.56-100.75a16,16,0,0,0,12.12-12.39c7.68-36.68,24.45-68.15,49.18-92A153.57,153.57,0,0,1,256,80c35.5,0,68.24,11.69,94.68,33.8a156.24,156.24,0,0,1,42.05,56,16,16,0,0,0,11.37,9.16c27,5.61,51.07,17.33,69.18,33.85C498.61,235.88,512,267.42,512,304c0,36-14.38,68.88-40.49,92.59C446.36,419.43,412.44,432,376,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="192 288.1 256 352 320 288.1" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="160" x2="256" y2="336.03" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px" />
      <polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px" />
      <polyline points="192 288.1 256 352 320 288.1" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px" />
      <line x1="256" y1="160" x2="256" y2="336.03" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px" />
      <polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px" />
      <polyline points="192 288.1 256 352 320 288.1" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px" />
      <line x1="256" y1="160" x2="256" y2="336.03" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <polygon points="161.98 397.63 0 256 161.98 114.37 189.63 145.98 64 256 189.63 366.02 161.98 397.63" />
      <polygon points="350.02 397.63 322.37 366.02 448 256 322.37 145.98 350.02 114.37 512 256 350.02 397.63" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="304" y1="96" x2="208" y2="416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <polygon points="161.98 397.63 0 256 161.98 114.37 189.63 145.98 64 256 189.63 366.02 161.98 397.63" />
      <polygon points="350.02 397.63 322.37 366.02 448 256 322.37 145.98 350.02 114.37 512 256 350.02 397.63" />
      <polygon points="222.15 442 182 430.08 289.85 70 330 81.92 222.15 442" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M160,389a20.91,20.91,0,0,1-13.82-5.2l-128-112a21,21,0,0,1,0-31.6l128-112a21,21,0,0,1,27.66,31.61L63.89,256l109.94,96.19A21,21,0,0,1,160,389Z" />
      <path d="M352,389a21,21,0,0,1-13.84-36.81L448.11,256,338.17,159.81a21,21,0,0,1,27.66-31.61l128,112a21,21,0,0,1,0,31.6l-128,112A20.89,20.89,0,0,1,352,389Z" />
      <path d="M208,437a21,21,0,0,1-20.12-27l96-320A21,21,0,1,1,324.11,102l-96,320A21,21,0,0,1,208,437Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <circle cx="256" cy="256" r="26" />
      <circle cx="346" cy="256" r="26" />
      <circle cx="166" cy="256" r="26" />
      <polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <circle cx="256" cy="256" r="26" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px" />
      <circle cx="346" cy="256" r="26" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px" />
      <circle cx="166" cy="256" r="26" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px" />
      <polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px" />
      <polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <circle cx="256" cy="256" r="26" style="stroke:#000;stroke-miterlimit:10;stroke-width:10px" />
      <circle cx="346" cy="256" r="26" style="stroke:#000;stroke-miterlimit:10;stroke-width:10px" />
      <circle cx="166" cy="256" r="26" style="stroke:#000;stroke-miterlimit:10;stroke-width:10px" />
      <polyline points="160 368 32 256 160 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px" />
      <polyline points="352 368 480 256 352 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M160,389a20.91,20.91,0,0,1-13.82-5.2l-128-112a21,21,0,0,1,0-31.6l128-112a21,21,0,0,1,27.66,31.61L63.89,256l109.94,96.19A21,21,0,0,1,160,389Z" />
      <path d="M352,389a21,21,0,0,1-13.84-36.81L448.11,256,338.17,159.81a21,21,0,0,1,27.66-31.61l128,112a21,21,0,0,1,0,31.6l-128,112A20.89,20.89,0,0,1,352,389Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M456.7,242.27l-26.08-4.2a8,8,0,0,1-6.6-6.82c-.5-3.2-1-6.41-1.7-9.51a8.08,8.08,0,0,1,3.9-8.62l23.09-12.82a8.05,8.05,0,0,0,3.9-9.92l-4-11a7.94,7.94,0,0,0-9.4-5l-25.89,5a8,8,0,0,1-8.59-4.11q-2.25-4.2-4.8-8.41a8.16,8.16,0,0,1,.7-9.52l17.29-19.94a8,8,0,0,0,.3-10.62l-7.49-9a7.88,7.88,0,0,0-10.5-1.51l-22.69,13.63a8,8,0,0,1-9.39-.9c-2.4-2.11-4.9-4.21-7.4-6.22a8,8,0,0,1-2.5-9.11l9.4-24.75A8,8,0,0,0,365,78.77l-10.2-5.91a8,8,0,0,0-10.39,2.21L327.77,95.91a7.15,7.15,0,0,1-8.5,2.5s-5.6-2.3-9.8-3.71A8,8,0,0,1,304,87l.4-26.45a8.07,8.07,0,0,0-6.6-8.42l-11.59-2a8.07,8.07,0,0,0-9.1,5.61l-8.6,25.05a8,8,0,0,1-7.79,5.41h-9.8a8.07,8.07,0,0,1-7.79-5.41l-8.6-25.05a8.07,8.07,0,0,0-9.1-5.61l-11.59,2a8.07,8.07,0,0,0-6.6,8.42l.4,26.45a8,8,0,0,1-5.49,7.71c-2.3.9-7.3,2.81-9.7,3.71-2.8,1-6.1.2-8.8-2.91L167.14,75.17A8,8,0,0,0,156.75,73l-10.2,5.91A7.94,7.94,0,0,0,143.25,89l9.4,24.75a8.06,8.06,0,0,1-2.5,9.11c-2.5,2-5,4.11-7.4,6.22a8,8,0,0,1-9.39.9L111,116.14a8,8,0,0,0-10.5,1.51l-7.49,9a8,8,0,0,0,.3,10.62l17.29,19.94a8,8,0,0,1,.7,9.52q-2.55,4-4.8,8.41a8.11,8.11,0,0,1-8.59,4.11l-25.89-5a8,8,0,0,0-9.4,5l-4,11a8.05,8.05,0,0,0,3.9,9.92L85.58,213a7.94,7.94,0,0,1,3.9,8.62c-.6,3.2-1.2,6.31-1.7,9.51a8.08,8.08,0,0,1-6.6,6.82l-26.08,4.2a8.09,8.09,0,0,0-7.1,7.92v11.72a7.86,7.86,0,0,0,7.1,7.92l26.08,4.2a8,8,0,0,1,6.6,6.82c.5,3.2,1,6.41,1.7,9.51a8.08,8.08,0,0,1-3.9,8.62L62.49,311.7a8.05,8.05,0,0,0-3.9,9.92l4,11a7.94,7.94,0,0,0,9.4,5l25.89-5a8,8,0,0,1,8.59,4.11q2.25,4.2,4.8,8.41a8.16,8.16,0,0,1-.7,9.52L93.28,374.62a8,8,0,0,0-.3,10.62l7.49,9a7.88,7.88,0,0,0,10.5,1.51l22.69-13.63a8,8,0,0,1,9.39.9c2.4,2.11,4.9,4.21,7.4,6.22a8,8,0,0,1,2.5,9.11l-9.4,24.75a8,8,0,0,0,3.3,10.12l10.2,5.91a8,8,0,0,0,10.39-2.21l16.79-20.64c2.1-2.6,5.5-3.7,8.2-2.6,3.4,1.4,5.7,2.2,9.9,3.61a8,8,0,0,1,5.49,7.71l-.4,26.45a8.07,8.07,0,0,0,6.6,8.42l11.59,2a8.07,8.07,0,0,0,9.1-5.61l8.6-25a8,8,0,0,1,7.79-5.41h9.8a8.07,8.07,0,0,1,7.79,5.41l8.6,25a8.07,8.07,0,0,0,9.1,5.61l11.59-2a8.07,8.07,0,0,0,6.6-8.42l-.4-26.45a8,8,0,0,1,5.49-7.71c4.2-1.41,7-2.51,9.6-3.51s5.8-1,8.3,2.1l17,20.94A8,8,0,0,0,355,439l10.2-5.91a7.93,7.93,0,0,0,3.3-10.12l-9.4-24.75a8.08,8.08,0,0,1,2.5-9.12c2.5-2,5-4.1,7.4-6.21a8,8,0,0,1,9.39-.9L401,395.66a8,8,0,0,0,10.5-1.51l7.49-9a8,8,0,0,0-.3-10.62l-17.29-19.94a8,8,0,0,1-.7-9.52q2.55-4.05,4.8-8.41a8.11,8.11,0,0,1,8.59-4.11l25.89,5a8,8,0,0,0,9.4-5l4-11a8.05,8.05,0,0,0-3.9-9.92l-23.09-12.82a7.94,7.94,0,0,1-3.9-8.62c.6-3.2,1.2-6.31,1.7-9.51a8.08,8.08,0,0,1,6.6-6.82l26.08-4.2a8.09,8.09,0,0,0,7.1-7.92V250A8.25,8.25,0,0,0,456.7,242.27ZM256,112A143.82,143.82,0,0,1,395.38,220.12,16,16,0,0,1,379.85,240l-105.24,0a16,16,0,0,1-13.91-8.09l-52.1-91.71a16,16,0,0,1,9.85-23.39A146.94,146.94,0,0,1,256,112ZM112,256a144,144,0,0,1,43.65-103.41,16,16,0,0,1,25.17,3.47L233.06,248a16,16,0,0,1,0,15.87l-52.67,91.7a16,16,0,0,1-25.18,3.36A143.94,143.94,0,0,1,112,256ZM256,400a146.9,146.9,0,0,1-38.19-4.95,16,16,0,0,1-9.76-23.44l52.58-91.55a16,16,0,0,1,13.88-8H379.9a16,16,0,0,1,15.52,19.88A143.84,143.84,0,0,1,256,400Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M464,249.93a10.58,10.58,0,0,0-9.36-9.94L429,235.84a5.42,5.42,0,0,1-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52,5.52,0,0,1,2.63-5.85l22.78-12.65a10.35,10.35,0,0,0,5-12.83l-3.95-10.9a10.32,10.32,0,0,0-12.13-6.51l-25.55,5a5.5,5.5,0,0,1-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6,5.6,0,0,1,.44-6.5l17-19.63a10.44,10.44,0,0,0,.39-13.77l-7.42-8.91a10.24,10.24,0,0,0-13.58-2l-22.37,13.43a5.39,5.39,0,0,1-6.39-.63c-2.47-2.17-4.95-4.26-7.37-6.19a5.45,5.45,0,0,1-1.72-6.21l9.26-24.4a10.35,10.35,0,0,0-4.31-13.07l-10.08-5.85a10.31,10.31,0,0,0-13.46,2.83L325,96.28A4.58,4.58,0,0,1,319.4,98c-.62-.25-5.77-2.36-9.78-3.7a5.42,5.42,0,0,1-3.74-5.23L306.27,63a10.48,10.48,0,0,0-8.57-10.88l-11.45-2a10.45,10.45,0,0,0-11.75,7.17L266,82.1a5.42,5.42,0,0,1-5.36,3.65h-9.75a5.53,5.53,0,0,1-5.3-3.67l-8.46-24.67a10.46,10.46,0,0,0-11.77-7.25l-11.46,2a10.46,10.46,0,0,0-8.57,10.79l.4,26.16a5.45,5.45,0,0,1-3.86,5.25c-2.28.89-7.26,2.78-9.51,3.63-2,.72-4.19-.07-6-2.1l-16.26-20A10.3,10.3,0,0,0,156.69,73l-10.06,5.83A10.36,10.36,0,0,0,142.31,92l9.25,24.34a5.54,5.54,0,0,1-1.7,6.23c-2.43,2-4.92,4-7.4,6.22a5.38,5.38,0,0,1-6.35.64L114,115.74a10.39,10.39,0,0,0-13.61,2l-7.4,8.9a10.32,10.32,0,0,0,.37,13.76L110.45,160a5.42,5.42,0,0,1,.45,6.45c-1.71,2.72-3.34,5.58-4.82,8.44a5.53,5.53,0,0,1-5.86,2.82l-25.51-4.93a10.34,10.34,0,0,0-12.14,6.51l-4,10.88a10.37,10.37,0,0,0,5,12.85l22.78,12.65A5.39,5.39,0,0,1,89,221.59l-.23,1.24c-.53,2.8-1,5.45-1.47,8.27a5.48,5.48,0,0,1-4.46,4.64l-25.7,4.15A10.42,10.42,0,0,0,48,250.16v11.58A10.26,10.26,0,0,0,57.16,272l25.68,4.14a5.41,5.41,0,0,1,4.5,4.67c.49,3.16,1,6.42,1.7,9.52a5.52,5.52,0,0,1-2.63,5.85L63.64,308.85a10.35,10.35,0,0,0-5,12.83l4,10.9a10.33,10.33,0,0,0,12.13,6.51l25.55-4.95a5.5,5.5,0,0,1,5.82,2.81c1.5,2.8,3.12,5.64,4.8,8.42a5.58,5.58,0,0,1-.44,6.5l-17,19.64A10.41,10.41,0,0,0,93,385.27l7.41,8.91a10.24,10.24,0,0,0,13.58,2l22.37-13.43a5.39,5.39,0,0,1,6.39.63c2.48,2.17,5,4.26,7.37,6.19a5.45,5.45,0,0,1,1.72,6.21l-9.26,24.4a10.35,10.35,0,0,0,4.31,13.07L157,439.09a10.3,10.3,0,0,0,13.45-2.82L187,415.92c1.39-1.73,3.6-2.5,5.24-1.84,3.47,1.44,5.8,2.25,9.93,3.63a5.44,5.44,0,0,1,3.75,5.23l-.4,26.05a10.5,10.5,0,0,0,8.57,10.88l11.45,2a10.44,10.44,0,0,0,11.75-7.17l8.5-24.77a5.48,5.48,0,0,1,5.36-3.65h9.75a5.52,5.52,0,0,1,5.3,3.67l8.47,24.67a10.48,10.48,0,0,0,10,7.41,9.74,9.74,0,0,0,1.78-.16l11.47-2a10.46,10.46,0,0,0,8.56-10.79l-.4-26.16a5.43,5.43,0,0,1,3.75-5.2c3.84-1.29,6.53-2.33,8.91-3.24l.6-.24c3.06-1.06,4.53.14,5.47,1.31l16.75,20.63A10.3,10.3,0,0,0,355,439l10.07-5.83a10.35,10.35,0,0,0,4.31-13.1l-9.24-24.34a5.52,5.52,0,0,1,1.69-6.23c2.43-2,4.92-4,7.4-6.22a5.39,5.39,0,0,1,6.38-.62L398,396.06a10.39,10.39,0,0,0,13.61-2l7.4-8.9a10.31,10.31,0,0,0-.37-13.75l-17.06-19.67a5.42,5.42,0,0,1-.45-6.45c1.71-2.71,3.34-5.57,4.82-8.44a5.56,5.56,0,0,1,5.86-2.82L437.29,339a10.34,10.34,0,0,0,12.14-6.51l3.95-10.88a10.36,10.36,0,0,0-5-12.84L425.58,296.1a5.4,5.4,0,0,1-2.61-5.89l.23-1.25c.53-2.8,1-5.44,1.47-8.26a5.48,5.48,0,0,1,4.46-4.64l25.7-4.14A10.43,10.43,0,0,0,464,261.64V249.93ZM171.59,361.27a135.12,135.12,0,0,1,.5-210.94l60,105.61ZM256,391.11a133.75,133.75,0,0,1-48.49-9.05L268,276.79H389.22C379.21,341.45,323.29,391.11,256,391.11Zm12.06-155.9-59.95-105.5A133.87,133.87,0,0,1,256,120.89c67.29,0,123.21,49.66,133.22,114.32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M464,249.93a10.58,10.58,0,0,0-9.36-9.94L429,235.84a5.42,5.42,0,0,1-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52,5.52,0,0,1,2.63-5.85l22.78-12.65a10.35,10.35,0,0,0,5-12.83l-3.95-10.9a10.32,10.32,0,0,0-12.13-6.51l-25.55,5a5.51,5.51,0,0,1-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6,5.6,0,0,1,.44-6.5l17-19.64a10.42,10.42,0,0,0,.39-13.76l-7.42-8.91a10.24,10.24,0,0,0-13.58-2l-22.37,13.43a5.39,5.39,0,0,1-6.39-.63c-2.47-2.17-5-4.26-7.37-6.19a5.45,5.45,0,0,1-1.72-6.21l9.26-24.4a10.35,10.35,0,0,0-4.31-13.07L354.8,72.91a10.3,10.3,0,0,0-13.45,2.83L325,96.28A4.6,4.6,0,0,1,319.4,98c-.61-.25-5.77-2.36-9.78-3.7a5.42,5.42,0,0,1-3.74-5.23L306.27,63a10.48,10.48,0,0,0-8.57-10.88l-11.45-2a10.45,10.45,0,0,0-11.75,7.17L266,82.1a5.46,5.46,0,0,1-5.36,3.65h-9.75a5.5,5.5,0,0,1-5.3-3.67l-8.46-24.67a10.46,10.46,0,0,0-11.77-7.25l-11.47,2a10.46,10.46,0,0,0-8.56,10.79l.4,26.16a5.45,5.45,0,0,1-3.86,5.25c-2.29.89-7.26,2.79-9.52,3.63-2,.72-4.18-.07-5.94-2.1l-16.26-20A10.3,10.3,0,0,0,156.69,73l-10.06,5.83A10.36,10.36,0,0,0,142.31,92l9.25,24.34a5.54,5.54,0,0,1-1.7,6.23c-2.43,2-4.92,4-7.4,6.22a5.38,5.38,0,0,1-6.35.64L114,115.74a10.4,10.4,0,0,0-13.61,2L93,126.63a10.31,10.31,0,0,0,.37,13.75L110.45,160a5.42,5.42,0,0,1,.45,6.45c-1.71,2.72-3.34,5.58-4.82,8.44a5.53,5.53,0,0,1-5.86,2.82l-25.51-4.93a10.34,10.34,0,0,0-12.14,6.51l-4,10.88a10.38,10.38,0,0,0,5,12.85l22.78,12.65A5.39,5.39,0,0,1,89,221.59l-.24,1.27c-.52,2.79-1,5.43-1.46,8.24a5.48,5.48,0,0,1-4.46,4.64l-25.69,4.15A10.42,10.42,0,0,0,48,250.16v11.58A10.26,10.26,0,0,0,57.16,272l25.68,4.14a5.41,5.41,0,0,1,4.5,4.67c.49,3.16,1,6.42,1.7,9.52a5.52,5.52,0,0,1-2.63,5.85L63.64,308.85a10.35,10.35,0,0,0-5,12.83l4,10.9a10.33,10.33,0,0,0,12.13,6.51l25.55-4.95a5.49,5.49,0,0,1,5.82,2.81c1.5,2.8,3.11,5.63,4.8,8.42a5.58,5.58,0,0,1-.44,6.5l-17,19.63A10.41,10.41,0,0,0,93,385.27l7.41,8.91a10.23,10.23,0,0,0,13.58,2l22.37-13.43a5.39,5.39,0,0,1,6.39.63c2.48,2.17,5,4.26,7.37,6.19a5.47,5.47,0,0,1,1.73,6.21l-9.27,24.4a10.35,10.35,0,0,0,4.31,13.07L157,439.09a10.3,10.3,0,0,0,13.45-2.82L187,415.92c1.4-1.73,3.6-2.5,5.23-1.84,3.48,1.44,5.81,2.25,9.94,3.63a5.44,5.44,0,0,1,3.75,5.23l-.4,26.05a10.5,10.5,0,0,0,8.57,10.88l11.45,2a10.43,10.43,0,0,0,11.75-7.17l8.5-24.77a5.45,5.45,0,0,1,5.36-3.65h9.75a5.49,5.49,0,0,1,5.3,3.67l8.47,24.67a10.48,10.48,0,0,0,10,7.41,9.74,9.74,0,0,0,1.78-.16l11.47-2a10.46,10.46,0,0,0,8.56-10.79l-.4-26.16a5.43,5.43,0,0,1,3.75-5.2c3.84-1.29,6.54-2.33,8.91-3.25l.6-.23c3.1-1.07,4.6.23,5.47,1.31l16.75,20.63A10.3,10.3,0,0,0,355,439l10.07-5.83a10.35,10.35,0,0,0,4.31-13.1l-9.24-24.34a5.52,5.52,0,0,1,1.69-6.23c2.43-2,4.92-4,7.4-6.22a5.39,5.39,0,0,1,6.38-.62L398,396.06a10.39,10.39,0,0,0,13.61-2l7.4-8.9a10.31,10.31,0,0,0-.37-13.75l-17.06-19.67a5.42,5.42,0,0,1-.45-6.45c1.71-2.71,3.34-5.57,4.82-8.44a5.55,5.55,0,0,1,5.86-2.82L437.29,339a10.34,10.34,0,0,0,12.14-6.51l3.95-10.88a10.37,10.37,0,0,0-5-12.84L425.58,296.1a5.4,5.4,0,0,1-2.61-5.89l.24-1.27c.52-2.79,1-5.43,1.46-8.24a5.48,5.48,0,0,1,4.46-4.64l25.69-4.14A10.43,10.43,0,0,0,464,261.64V249.93Zm-282.45,94a15.8,15.8,0,0,1-25.47,2.66,135.06,135.06,0,0,1,.42-181.65A15.81,15.81,0,0,1,182,167.71l45.65,80.35a15.85,15.85,0,0,1,0,15.74ZM256,391.11a134.75,134.75,0,0,1-28.31-3,15.81,15.81,0,0,1-10.23-23.36l46-80a15.79,15.79,0,0,1,13.7-7.93h92.14a15.8,15.8,0,0,1,15.1,20.53C366.91,351.67,316,391.11,256,391.11Zm7.51-163.9L218,147.07a15.81,15.81,0,0,1,10.31-23.3A134,134,0,0,1,256,120.89c60,0,110.91,39.44,128.37,93.79a15.8,15.8,0,0,1-15.1,20.53h-92A15.78,15.78,0,0,1,263.51,227.21Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M419.1,337.45a3.94,3.94,0,0,0-6.1,0c-10.5,12.4-45,46.55-45,77.66,0,27,21.5,48.89,48,48.89h0c26.5,0,48-22,48-48.89C464,384,429.7,349.85,419.1,337.45Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M387,287.9,155.61,58.36a36,36,0,0,0-51,0l-5.15,5.15a36,36,0,0,0,0,51l52.89,52.89,57-57L56.33,263.2a28,28,0,0,0,.3,40l131.2,126a28.05,28.05,0,0,0,38.9-.1c37.8-36.6,118.3-114.5,126.7-122.9,5.8-5.8,18.2-7.1,28.7-7.1h.3A6.53,6.53,0,0,0,387,287.9Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M416,320s-64,48-64,99.84c0,33.28,28.67,60.16,64,60.16s64-27,64-60.16C480,368,416,320,416,320Z" />
      <path d="M144,32,68,108l70,70L32,280,208,464,360.8,315.7,416,304Zm24,116-39.6-41,15.88-15.89L184,132Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M416,480c-35.29,0-64-29.11-64-64.88,0-33.29,28.67-65.4,44.08-82.64,1.87-2.1,3.49-3.91,4.68-5.31a19.94,19.94,0,0,1,30.55,0c1.13,1.31,2.63,3,4.36,4.93,15.5,17.3,44.33,49.51,44.33,83.05C480,450.89,451.29,480,416,480Z" />
      <path d="M398.23,276.64,166.89,47.22a52.1,52.1,0,0,0-73.6,0l-4.51,4.51A53.2,53.2,0,0,0,72.89,89.06,51.66,51.66,0,0,0,88.14,126l41.51,41.5L45,252a44.52,44.52,0,0,0-13,32,42.81,42.81,0,0,0,13.5,30.84l131.24,126a44,44,0,0,0,61.08-.18L361.93,320.38a15.6,15.6,0,0,1,8.23-4.29,69.21,69.21,0,0,1,11.93-.86h.3a22.53,22.53,0,0,0,15.84-38.59ZM152.29,144.85l-41.53-41.52a20,20,0,0,1,0-28.34l5.16-5.15a20.07,20.07,0,0,1,28.39,0L186,111.21Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <circle cx="256" cy="184" r="120" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="344" cy="328" r="120" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="168" cy="328" r="120" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M256,185a167.85,167.85,0,0,1,134.9-18.28C382.36,99.83,325.12,48,256,48S129.64,99.83,121.1,166.67A167.85,167.85,0,0,1,256,185Z" />
      <path d="M336,331.73a167.51,167.51,0,0,1-52.37,118.08A135,135,0,0,0,344,464c75,0,136-61,136-136a136,136,0,0,0-59.06-112.08A168.53,168.53,0,0,1,336,331.73Z" />
      <path d="M283.58,206.19a167.87,167.87,0,0,1,49.36,89.89A136.14,136.14,0,0,0,391,200.38a135.87,135.87,0,0,0-107.43,5.81Z" />
      <path d="M176.05,331.73a168.53,168.53,0,0,1-85-115.81A136,136,0,0,0,32,328c0,75,61,136,136,136a135,135,0,0,0,60.42-14.19A167.51,167.51,0,0,1,176.05,331.73Z" />
      <path d="M179.06,296.08a167.87,167.87,0,0,1,49.36-89.89A135.87,135.87,0,0,0,121,200.38,136.14,136.14,0,0,0,179.06,296.08Z" />
      <path d="M302.9,345.33a168.22,168.22,0,0,1-93.8,0A135.9,135.9,0,0,0,256,431.6,135.9,135.9,0,0,0,302.9,345.33Z" />
      <path d="M209,311.62a136,136,0,0,0,94,0,135.93,135.93,0,0,0-47-87.22A135.93,135.93,0,0,0,209,311.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M253.72,202.53a4,4,0,0,0,4.56,0,151.88,151.88,0,0,1,128.44-20.41,4,4,0,0,0,5.15-4C388.8,105.86,329,48,256,48S123.2,105.86,120.13,178.15a4,4,0,0,0,5.15,4,151.88,151.88,0,0,1,128.44,20.41Z" />
      <path d="M405.31,212.56a152.53,152.53,0,0,1-83.08,108.23,4,4,0,0,0-2.28,3.69c0,1.17.05,2.34.05,3.52a151.58,151.58,0,0,1-47.15,109.94,4,4,0,0,0,.64,6.31A135.24,135.24,0,0,0,344,464c72.07,0,134.1-60.28,136-132.34a136.07,136.07,0,0,0-68.76-121.87A4,4,0,0,0,405.31,212.56Z" />
      <path d="M390.57,203.67a4,4,0,0,0-2.69-4.4,135.84,135.84,0,0,0-114.4,12.49,4,4,0,0,0-.64,6.29,151.92,151.92,0,0,1,44.47,81.4,4,4,0,0,0,5.94,2.72A136.29,136.29,0,0,0,390.57,203.67Z" />
      <path d="M192,328c0-1.18,0-2.35.05-3.52a4,4,0,0,0-2.28-3.69,152.53,152.53,0,0,1-83.08-108.23,4,4,0,0,0-5.88-2.77A136.07,136.07,0,0,0,32.05,331.66C34,403.72,96,464,168.05,464a135.24,135.24,0,0,0,70.46-19.75,4,4,0,0,0,.64-6.31A151.58,151.58,0,0,1,192,328Z" />
      <path d="M168,192a135.34,135.34,0,0,0-43.88,7.27,4,4,0,0,0-2.69,4.4,136.29,136.29,0,0,0,67.32,98.5,4,4,0,0,0,5.94-2.72,151.92,151.92,0,0,1,44.47-81.4,4,4,0,0,0-.64-6.29A135.18,135.18,0,0,0,168,192Z" />
      <path d="M256,336a151.44,151.44,0,0,1-42.72-6.12,4,4,0,0,0-5.15,4,135.69,135.69,0,0,0,45.18,95.4,4,4,0,0,0,5.38,0,135.69,135.69,0,0,0,45.18-95.4,4,4,0,0,0-5.15-4A151.44,151.44,0,0,1,256,336Z" />
      <path d="M302.57,308.33a135.94,135.94,0,0,0-43.87-81.58,4.06,4.06,0,0,0-5.4,0,135.94,135.94,0,0,0-43.87,81.58,4,4,0,0,0,2.69,4.4,136.06,136.06,0,0,0,87.76,0A4,4,0,0,0,302.57,308.33Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M430.11,347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1,0-43.8l30.3-26.9c46.4-41,46.4-108.2,0-149.2-34.2-30.1-80.1-45-127.8-45-55.7,0-113.9,20.3-158.8,60.1-83.5,73.8-83.5,194.7,0,268.5,41.5,36.7,97.5,55,152.9,55.4h1.7c55.4,0,110-17.9,148.8-52.4C444.41,382.9,442,359,430.11,347.9Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="144" cy="208" r="32" />
      <circle cx="152" cy="311" r="32" />
      <circle cx="224" cy="144" r="32" />
      <circle cx="256" cy="367" r="48" />
      <circle cx="328" cy="144" r="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M416,352c-12.6-.84-21-4-28-12-14-16-14-36,5.49-52.48l32.82-29.14c50.27-44.41,50.27-117.21,0-161.63C389.26,64.14,339.54,48,287.86,48c-60.34,0-123.39,22-172,65.11-90.46,80-90.46,210.92,0,290.87,45,39.76,105.63,59.59,165.64,60h1.84c60,0,119.07-19.5,161.2-56.77C464,390,464,385,444.62,355.56,440,348,431,353,416,352ZM112,208a32,32,0,1,1,32,32A32,32,0,0,1,112,208Zm40,135a32,32,0,1,1,32-32A32,32,0,0,1,152,343Zm40-199a32,32,0,1,1,32,32A32,32,0,0,1,192,144Zm64,271a48,48,0,1,1,48-48A48,48,0,0,1,256,415Zm72-239a32,32,0,1,1,32-32A32,32,0,0,1,328,176Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M441,336.2l-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77,5.34-9.94l30.28-26.87c25.92-22.91,40.2-53.66,40.2-86.59S449.73,119.92,423.78,97c-35.89-31.59-85-49-138.37-49C223.72,48,162,71.37,116,112.11c-43.87,38.77-68,90.71-68,146.24s24.16,107.47,68,146.23c21.75,19.24,47.49,34.18,76.52,44.42a266.17,266.17,0,0,0,86.87,15h1.81c61,0,119.09-20.57,159.39-56.4,9.7-8.56,15.15-20.83,15.34-34.56C456.14,358.87,450.56,345.09,441,336.2ZM112,208a32,32,0,1,1,32,32A32,32,0,0,1,112,208Zm40,135a32,32,0,1,1,32-32A32,32,0,0,1,152,343Zm40-199a32,32,0,1,1,32,32A32,32,0,0,1,192,144Zm64,271a48,48,0,1,1,48-48A48,48,0,0,1,256,415Zm72-239a32,32,0,1,1,32-32A32,32,0,0,1,328,176Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" x="280.48" y="122.9" width="63.03" height="378.2" rx="31.52" transform="translate(-129.23 312) rotate(-45)" />
      <path d="M178.38,178.38h0a31.64,31.64,0,0,0,0,44.75L223.25,268,268,223.25l-44.87-44.87A31.64,31.64,0,0,0,178.38,178.38Z" />
      <line stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="48" y1="192" x2="96" y2="192" />
      <line stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="90.18" y1="90.18" x2="124.12" y2="124.12" />
      <line stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="192" y1="48" x2="192" y2="96" />
      <line stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="293.82" y1="90.18" x2="259.88" y2="124.12" />
      <line stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="124.12" y1="259.88" x2="90.18" y2="293.82" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <rect x="158.6" y="150.86" width="95.03" height="110.51" transform="translate(-85.38 206.12) rotate(-45)" />
      <polygon points="301.41 234.21 234.22 301.41 412 480 480 412 301.41 234.21" />
      <rect x="32" y="176" width="80" height="32" />
      <rect x="91.22" y="67.22" width="32" height="80" transform="translate(-44.41 107.22) rotate(-45)" />
      <rect x="176" y="32" width="32" height="80" />
      <rect x="236.92" y="91.22" width="80" height="32" transform="translate(5.29 227.22) rotate(-45)" />
      <rect x="67.22" y="260.92" width="80" height="32" transform="translate(-164.41 156.92) rotate(-45)" />
    </svg>`,
    
    `<svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <path d="M96,208H48c-8.8,0-16-7.2-16-16s7.2-16,16-16h48c8.8,0,16,7.2,16,16S104.8,208,96,208z" />
      <path d="M124.1,140.1c-4.2,0-8.3-1.7-11.3-4.7l-33.9-33.9c-6.2-6.2-6.2-16.4,0-22.6s16.4-6.2,22.6,0l33.9,33.9
	c6.3,6.2,6.3,16.4,0,22.6C132.4,138.4,128.4,140.1,124.1,140.1z" />
      <path d="M192,112c-8.8,0-16-7.2-16-16V48c0-8.8,7.2-16,16-16s16,7.2,16,16v48C208,104.8,200.8,112,192,112z" />
      <path d="M259.9,140.1c-8.8,0-16-7.2-16-16c0-4.2,1.7-8.3,4.7-11.3l33.9-33.9c6.2-6.2,16.4-6.2,22.6,0c6.2,6.2,6.2,16.4,0,22.6
	l-33.9,33.9C268.2,138.4,264.1,140.1,259.9,140.1z" />
      <path d="M90.2,309.8c-8.8,0-16-7.2-16-16c0-4.2,1.7-8.3,4.7-11.3l33.9-33.9c6.2-6.2,16.4-6.2,22.6,0s6.2,16.4,0,22.6l-33.9,33.9
	C98.5,308.1,94.4,309.8,90.2,309.8z" />
      <path d="M234.2,167c-18.4-18.7-48.5-19-67.2-0.7s-19,48.5-0.7,67.2c0.2,0.2,0.5,0.5,0.7,0.7l39.5,39.5c3.1,3.1,8.2,3.1,11.3,0
	l55.9-55.9c3.1-3.1,3.1-8.2,0-11.3L234.2,167z" />
      <path d="M457,389.8L307.6,240.4c-3.1-3.1-8.2-3.1-11.3,0l-55.9,55.9c-3.1,3.1-3.1,8.2,0,11.3L389.8,457c18.4,18.7,48.5,19,67.2,0.7
	c18.7-18.4,19-48.5,0.7-67.2C457.5,390.3,457.3,390,457,389.8L457,389.8z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M350.67,150.93l-117.2,46.88a64,64,0,0,0-35.66,35.66l-46.88,117.2a8,8,0,0,0,10.4,10.4l117.2-46.88a64,64,0,0,0,35.66-35.66l46.88-117.2A8,8,0,0,0,350.67,150.93ZM256,280a24,24,0,1,1,24-24A24,24,0,0,1,256,280Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <circle cx="256" cy="256" r="24" />
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm48,256L144,368l64-160,160-64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <circle cx="256" cy="256" r="24" />
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM361.07,161.33l-46.88,117.2a64,64,0,0,1-35.66,35.66l-117.2,46.88a8,8,0,0,1-10.4-10.4l46.88-117.2a64,64,0,0,1,35.66-35.66l117.2-46.88A8,8,0,0,1,361.07,161.33Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M436.67,184.11a27.17,27.17,0,0,1-38.3,0l-22.48-22.49a27.15,27.15,0,0,1,0-38.29l50.89-50.89a.85.85,0,0,0-.26-1.38C393.68,57,351.09,64.15,324.05,91c-25.88,25.69-27.35,64.27-17.87,98a27,27,0,0,1-7.67,27.14l-173,160.76a40.76,40.76,0,1,0,57.57,57.54l162.15-173.3A27,27,0,0,1,372,253.44c33.46,8.94,71.49,7.26,97.07-17.94,27.49-27.08,33.42-74.94,20.1-102.33a.85.85,0,0,0-1.36-.22Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M224,284c-17.48-17-25.49-24.91-31-30.29a18.24,18.24,0,0,1-3.33-21.35,20.76,20.76,0,0,1,3.5-4.62l15.68-15.29a18.66,18.66,0,0,1,5.63-3.87,18.11,18.11,0,0,1,20,3.62c5.45,5.29,15.43,15,33.41,32.52" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M317.07,291.3c40.95,38.1,90.62,83.27,110,99.41a13.46,13.46,0,0,1,.94,19.92L394.63,444a14,14,0,0,1-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M17.34,193.5l29.41-28.74a4.71,4.71,0,0,1,3.41-1.35,4.85,4.85,0,0,1,3.41,1.35h0a9.86,9.86,0,0,0,8.19,2.77c3.83-.42,7.92-1.6,10.57-4.12,6-5.8-.94-17.23,4.34-24.54a207,207,0,0,1,19.78-22.6c6-5.88,29.84-28.32,69.9-44.45A107.31,107.31,0,0,1,206.67,64c22.59,0,40,10,46.26,15.67a89.54,89.54,0,0,1,10.28,11.64A78.92,78.92,0,0,0,254,88.54,68.82,68.82,0,0,0,234,87.28c-13.33,1.09-29.41,7.26-38,14-13.9,11-19.87,25.72-20.81,44.71-.68,14.12,2.72,22.1,36.1,55.49a6.6,6.6,0,0,1-.34,9.16l-18.22,18a6.88,6.88,0,0,1-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85,30.85,0,0,0-18.27,3.87,11.39,11.39,0,0,0-2.64,2,14.14,14.14,0,0,0,.42,20.08l1.71,1.6a4.63,4.63,0,0,1,0,6.64L71.73,246.6A4.71,4.71,0,0,1,68.32,248a4.86,4.86,0,0,1-3.41-1.35L17.34,200.22A4.88,4.88,0,0,1,17.34,193.5Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M497.14,111.38l-81.09,80.84-48.58-48.41L448.56,63c-45.22-22-108.65-22.09-146.2,15.35-35.32,35.2-39.73,90.61-22.54,134.2L99.57,391.37a12,12,0,0,0,0,17l52.27,52.11a12,12,0,0,0,17,0l180-180.5c43.16,16.21,98,11.64,132.74-23C519.08,219.53,519,156.64,497.14,111.38Z" />
      <path d="M365.45,308.62l-71.83,72,75.53,79.92a10.88,10.88,0,0,0,15.65.21l60-60.46a11,11,0,0,0-.24-15.69Z" />
      <path d="M119,212c0-4.87-4-9.33-7.45-12.78l-.25-.24-1.54-1.47a1.06,1.06,0,0,1-.26-.8,16.16,16.16,0,0,1,9.52-2c1.27.13,5.91.9,12.4,4.91,3.38,2.09,32.63,30.23,43.93,40.7a11,11,0,0,0,.14,15.35l7.43,7.86,65.66-65.17-8.25-7.84a10.87,10.87,0,0,0-15.31-.06c-23-24.68-29-35.45-31-42.45-4.42-15.47,4.14-28,14-36,5.84-4.62,17.88-8.08,29-9a52.72,52.72,0,0,1,11.61.6c3.47.5,6.3,1.14,7.39,1.4a68.51,68.51,0,0,1,11,4l12-19a88.38,88.38,0,0,0-13.4-17.7c-1.59-1.66-3.31-3.37-5.19-5.1-7.78-7.15-28-19.2-54.59-19.2a117.38,117.38,0,0,0-44.77,8.82c-37.44,15.34-61.88,36.25-73.11,47.35l-.07.07A219.55,219.55,0,0,0,67,128.56c-5.35,7.53-4.77,15.84-4.38,21.34,0,.32,0,.67.07,1a18.41,18.41,0,0,0-10.78-3.5A18,18,0,0,0,39,152.73L2,189.62a6.79,6.79,0,0,0,0,9.6L65,262a6.72,6.72,0,0,0,9.5,0l37.06-37C115,221.56,119,216.86,119,212Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M503.58,126.2a16.85,16.85,0,0,0-27.07-4.55L425.36,172.8h0a11.15,11.15,0,0,1-15.66,0l-22.48-22.48a11.17,11.17,0,0,1,0-15.67L438.1,83.76a16.85,16.85,0,0,0-5.27-27.4c-39.71-17-89.08-7.45-120,23.29-26.81,26.61-34.83,68-22,113.7a11,11,0,0,1-3.16,11.1L114.77,365.1a56.76,56.76,0,1,0,80.14,80.18L357,272.08a11,11,0,0,1,10.9-3.17c45,12,86,4,112.43-22,15.2-15,25.81-36.17,29.89-59.71C514.05,165,511.63,142.76,503.58,126.2Z" />
      <path d="M437.33,378.41c-13.94-11.59-43.72-38.4-74.07-66.22L297.19,382.8c28.24,30,53.8,57.85,65,70.88l.07.08A30,30,0,0,0,383.72,464l1.1,0a30.11,30.11,0,0,0,21-8.62l.07-.07,33.43-33.37a29.46,29.46,0,0,0-2-43.53Z" />
      <path d="M118.54,214.55a20.48,20.48,0,0,0-3-10.76,2.76,2.76,0,0,1,2.62-4.22h.06c.84.09,5.33.74,11.7,4.61,4.73,2.87,18.23,12.08,41.73,35.54a34.23,34.23,0,0,0,7.22,22.12l66.23-61.55a33.73,33.73,0,0,0-21.6-9.2,2.65,2.65,0,0,1-.21-.26l-.65-.69L198.1,156.3a28.45,28.45,0,0,1-4-26.11,35.23,35.23,0,0,1,11.78-16.35c5.69-4.41,18.53-9.72,29.44-10.62a52.92,52.92,0,0,1,15.19.94,65.57,65.57,0,0,1,7.06,2.13,15.46,15.46,0,0,0,2.15.63,16,16,0,0,0,16.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a91.85,91.85,0,0,0-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.13,123.13,0,0,0-46.3,9C121.94,72.45,96.84,93.58,85.3,104.79l-.09.09A222.14,222.14,0,0,0,63.7,129.5,27,27,0,0,0,59,141.27a7.33,7.33,0,0,1-7.71,6.17c-.36,0-.73,0-1.09,0a20.65,20.65,0,0,0-14.59,5.9L6.16,182.05l-.32.32a20.89,20.89,0,0,0-.24,28.72c.19.2.37.39.57.58L53.67,258A21,21,0,0,0,68.32,264a20.65,20.65,0,0,0,14.59-5.9l29.46-28.79A20.51,20.51,0,0,0,118.54,214.55Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="304 416 304 304 416 304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="314.2" y1="314.23" x2="432" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="208 96 208 208 96 208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="197.8" y1="197.77" x2="80" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="416 208 304 208 304 96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="314.23" y1="197.8" x2="432" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="96 304 208 304 208 416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="197.77" y1="314.2" x2="80" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="304 416 304 304 416 304" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="314.2" y1="314.23" x2="432" y2="432" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="208 96 208 208 96 208" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="197.8" y1="197.77" x2="80" y2="80" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="416 208 304 208 304 96" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="314.23" y1="197.8" x2="432" y2="80" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="96 304 208 304 208 416" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="197.77" y1="314.2" x2="80" y2="432" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="304 416 304 304 416 304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="314.2" y1="314.23" x2="432" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="208 96 208 208 96 208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="197.8" y1="197.77" x2="80" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="416 208 304 208 304 96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="314.23" y1="197.8" x2="432" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="96 304 208 304 208 416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="197.77" y1="314.2" x2="80" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,464C141.12,464,48,370.88,48,256S141.12,48,256,48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M256,32C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32ZM128.72,383.28A180,180,0,0,1,256,76V436A178.82,178.82,0,0,1,128.72,383.28Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M256,32A224,224,0,0,0,97.61,414.39,224,224,0,1,0,414.39,97.61,222.53,222.53,0,0,0,256,32ZM64,256C64,150.13,150.13,64,256,64V448C150.13,448,64,361.87,64,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <rect x="128" y="128" width="336" height="336" rx="57" ry="57" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M383.5,128l.5-24a56.16,56.16,0,0,0-56-56H112a64.19,64.19,0,0,0-64,64V328a56.16,56.16,0,0,0,56,56h24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M456,480H136a24,24,0,0,1-24-24V128a16,16,0,0,1,16-16H456a24,24,0,0,1,24,24V456A24,24,0,0,1,456,480Z" />
      <path d="M112,80H400V56a24,24,0,0,0-24-24H60A28,28,0,0,0,32,60V376a24,24,0,0,0,24,24H80V112A32,32,0,0,1,112,80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M408,480H184a72,72,0,0,1-72-72V184a72,72,0,0,1,72-72H408a72,72,0,0,1,72,72V408A72,72,0,0,1,408,480Z" />
      <path d="M160,80H395.88A72.12,72.12,0,0,0,328,32H104a72,72,0,0,0-72,72V328a72.12,72.12,0,0,0,48,67.88V160A80,80,0,0,1,160,80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M384,224V408a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V168a40,40,0,0,1,40-40H271.48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M459.94,53.25a16.06,16.06,0,0,0-23.22-.56L424.35,65a8,8,0,0,0,0,11.31l11.34,11.32a8,8,0,0,0,11.34,0l12.06-12C465.19,69.54,465.76,59.62,459.94,53.25Z" />
      <path d="M399.34,90,218.82,270.2a9,9,0,0,0-2.31,3.93L208.16,299a3.91,3.91,0,0,0,4.86,4.86l24.85-8.35a9,9,0,0,0,3.93-2.31L422,112.66A9,9,0,0,0,422,100L412.05,90A9,9,0,0,0,399.34,90Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M464.37,49.2a22.07,22.07,0,0,0-31.88-.76L414.18,66.69l31.18,31.1,18-17.91A22.16,22.16,0,0,0,464.37,49.2Z" />
      <polygon points="252.76 336 239.49 336 208 336 176 336 176 304 176 272.51 176 259.24 185.4 249.86 323.54 112 48 112 48 464 400 464 400 188.46 262.14 326.6 252.76 336" />
      <polygon points="400 143.16 432.79 110.3 401.7 79.21 368.85 112 400 112 400 143.16" />
      <polygon points="208 304 239.49 304 400 143.16 400 112 368.85 112 208 272.51 208 304" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M459.94,53.25a16.06,16.06,0,0,0-23.22-.56L424.35,65a8,8,0,0,0,0,11.31l11.34,11.32a8,8,0,0,0,11.34,0l12.06-12C465.19,69.54,465.76,59.62,459.94,53.25Z" />
      <path d="M399.34,90,218.82,270.2a9,9,0,0,0-2.31,3.93L208.16,299a3.91,3.91,0,0,0,4.86,4.86l24.85-8.35a9,9,0,0,0,3.93-2.31L422,112.66A9,9,0,0,0,422,100L412.05,90A9,9,0,0,0,399.34,90Z" />
      <path d="M386.34,193.66,264.45,315.79A41.08,41.08,0,0,1,247.58,326l-25.9,8.67a35.92,35.92,0,0,1-44.33-44.33l8.67-25.9a41.08,41.08,0,0,1,10.19-16.87L318.34,125.66A8,8,0,0,0,312.69,112H104a56,56,0,0,0-56,56V408a56,56,0,0,0,56,56H344a56,56,0,0,0,56-56V199.31A8,8,0,0,0,386.34,193.66Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M144,48V320a48,48,0,0,0,48,48H464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M368,304V192a48,48,0,0,0-48-48H208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="368" y1="368" x2="368" y2="464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="144" y1="144" x2="48" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <polygon points="166 346 166 32 122 32 122 122 32 122 32 166 122 166 122 390 346 390 346 480 390 480 390 390 480 390 480 346 166 346" />
      <polygon points="346 320 390 320 390 122 192 122 192 166 346 166 346 320" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M458,346H192a26,26,0,0,1-26-26V54a22,22,0,0,0-44,0v68H54a22,22,0,0,0,0,44h68V320a70.08,70.08,0,0,0,70,70H346v68a22,22,0,0,0,44,0V390h68a22,22,0,0,0,0-44Z" />
      <path d="M214,166H320a26,26,0,0,1,26,26V298a22,22,0,0,0,44,0V192a70.08,70.08,0,0,0-70-70H214a22,22,0,0,0,0,44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M448,341.37V170.61A32,32,0,0,0,432.11,143l-152-88.46a47.94,47.94,0,0,0-48.24,0L79.89,143A32,32,0,0,0,64,170.61V341.37A32,32,0,0,0,79.89,369l152,88.46a48,48,0,0,0,48.24,0l152-88.46A32,32,0,0,0,448,341.37Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="69 153.99 256 263.99 443 153.99" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="463.99" x2="256" y2="263.99" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <polygon points="48 170 48 366.92 240 480 240 284 48 170" />
      <path d="M272,480,464,366.92V170L272,284ZM448,357.64h0Z" />
      <polygon points="448 144 256 32 64 144 256 256 448 144" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M440.9,136.3a4,4,0,0,0,0-6.91L288.16,40.65a64.14,64.14,0,0,0-64.33,0L71.12,129.39a4,4,0,0,0,0,6.91L254,243.88a4,4,0,0,0,4.06,0Z" />
      <path d="M54,163.51A4,4,0,0,0,48,167V340.89a48,48,0,0,0,23.84,41.39L234,479.51a4,4,0,0,0,6-3.46V274.3a4,4,0,0,0-2-3.46Z" />
      <path d="M272,275v201a4,4,0,0,0,6,3.46l162.15-97.23A48,48,0,0,0,464,340.89V167a4,4,0,0,0-6-3.45l-184,108A4,4,0,0,0,272,275Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <circle cx="104" cy="152" r="56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="104" cy="360" r="56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M157,175,146,190,183,205s3.46-6.42,7-10Z" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M154.17,334.43,460,162c-2.5-6.7-28-12-64-4-29.12,6.47-121.16,29.05-159.16,56.05C205.85,236.06,227,272,192,298c-25.61,19-44.43,22.82-44.43,22.82Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M344.47,278.24,295,306.67c14.23,6.74,65.54,33.27,117,36.33,14.92.89,30,.39,39-6Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="240" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M480,128H432L233.06,198.46l-59.13-31.59a72.16,72.16,0,1,0-25.69,41.47l52.2,31.72L192,277l-43.64,26.76a71.74,71.74,0,1,0,24.79,38L480,160ZM103.48,192a40,40,0,1,1,40-40A40,40,0,0,1,103.48,192Zm0,208a40,40,0,1,1,40-40A40,40,0,0,1,103.48,400Zm152-144a16,16,0,1,1,16-16A16,16,0,0,1,255.48,256Z" />
      <polygon points="343.79 259.87 260.05 308.05 432 368 479.99 368 480 336 343.79 259.87" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M103.48,224a71.64,71.64,0,0,0,44.76-15.66l41.5,16.89,6.82-12.63a39.15,39.15,0,0,1,4.32-6.37l14.22-14.42-41.17-24.94A72,72,0,1,0,103.48,224Zm0-112a40,40,0,1,1-40,40A40,40,0,0,1,103.48,112Z" />
      <path d="M480,169l-5.52-12.58c-4.48-10.42-14.74-16-32.78-17.85-10.12-1-26.95-1.24-49.69,3.81-20,4.45-122.14,28.2-164.95,58.62C206.81,215.39,203,234.67,200,250.16c-2.78,14.14-5,25.31-18,35-15,11.14-27.27,16.38-33.58,18.6a71.74,71.74,0,1,0,24.79,38ZM255.48,256a16,16,0,1,1,16-16A16,16,0,0,1,255.48,256Zm-152,144a40,40,0,1,1,40-40A40,40,0,0,1,103.48,400Z" />
      <path d="M343.79,259.87l-83.74,48.18,27.63,13.08,3.62,1.74C310,331.92,359.74,356,410.53,359c3.89.23,7.47.34,10.78.34C442,359.31,453,354,459.75,350L480,336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <rect x="32" y="64" width="448" height="320" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <polygon points="304 448 296 384 216 384 208 448 304 448" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="368" y1="448" x2="144" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M32,304v48a32.09,32.09,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V304Zm224,64a16,16,0,1,1,16-16A16,16,0,0,1,256,368Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M480,48H32A16,16,0,0,0,16,64V384a16,16,0,0,0,16,16H200v32H128v32H384V432H312V400H480a16,16,0,0,0,16-16V64A16,16,0,0,0,480,48ZM460,84V300H52V84ZM240.13,354.08a16,16,0,1,1,13.79,13.79A16,16,0,0,1,240.13,354.08Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-h</title>
      <path d="M16,352a48.05,48.05,0,0,0,48,48H197.88l-4,32H144a16,16,0,0,0,0,32H368a16,16,0,0,0,0-32H318.12l-4-32H448a48.05,48.05,0,0,0,48-48V304H16Zm240-16a16,16,0,1,1-16,16A16,16,0,0,1,256,336Z" />
      <path d="M496,96a48.05,48.05,0,0,0-48-48H64A48.05,48.05,0,0,0,16,96V288H496Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M35.42,188.21,243.17,457.67a16.17,16.17,0,0,0,25.66,0L476.58,188.21a16.52,16.52,0,0,0,.95-18.75L407.06,55.71A16.22,16.22,0,0,0,393.27,48H118.73a16.22,16.22,0,0,0-13.79,7.71L34.47,169.46A16.52,16.52,0,0,0,35.42,188.21Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="48" y1="176" x2="464" y2="176" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <polyline points="400 64 352 176 256 48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <polyline points="112 64 160 176 256 48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="256" y1="448" x2="160" y2="176" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="256" y1="448" x2="352" y2="176" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="396.31 32 264 32 348.19 144.26 396.31 32" />
      <polygon points="115.69 32 163.81 144.26 248 32 115.69 32" />
      <polygon points="256 74.67 192 160 320 160 256 74.67" />
      <polygon points="422.95 51.06 376.26 160 488 160 422.95 51.06" />
      <polygon points="89.05 51.06 23 160 135.74 160 89.05 51.06" />
      <polygon points="146.68 192 24 192 246.8 480 247.33 480 146.68 192" />
      <polygon points="365.32 192 264.67 480 265.2 480 488 192 365.32 192" />
      <polygon points="329.39 192 182.61 192 256 400 329.39 192" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M121.72,32A4,4,0,0,0,118,37.56l2.3,5.43L161,137.89a4,4,0,0,0,6.88.82L243,38.4a4,4,0,0,0-3.2-6.4Z" />
      <path d="M419.93,58.06l-41.28,96.37a4,4,0,0,0,3.68,5.57h101a4,4,0,0,0,3.4-6.11L427,57.53A4,4,0,0,0,419.93,58.06Z" />
      <path d="M85,57.57,25.29,153.89a4,4,0,0,0,3.4,6.11h101a4,4,0,0,0,3.67-5.58L92,58.1A4,4,0,0,0,85,57.57Z" />
      <path d="M393.27,32H267.82a1.94,1.94,0,0,0-1.56,3.11l79.92,106.46a1.94,1.94,0,0,0,3.34-.4L391.6,43,395,34.66A1.92,1.92,0,0,0,393.3,32Z" />
      <path d="M239,448,149.57,194.51A3.78,3.78,0,0,0,146,192H25.7a3.72,3.72,0,0,0-2.95,6l216,279.81a5.06,5.06,0,0,0,6.39,1.37h0a5,5,0,0,0,2.39-6.08Z" />
      <path d="M486.3,192H366a3.75,3.75,0,0,0-3.54,2.51L264.26,472.67a5.21,5.21,0,0,0,2.42,6.31h0a5.22,5.22,0,0,0,6.61-1.39L489.25,198h0A3.72,3.72,0,0,0,486.3,192Z" />
      <path d="M259.2,78.93l56,74.67A4,4,0,0,1,312,160H200a4,4,0,0,1-3.2-6.4l56-74.67A4,4,0,0,1,259.2,78.93Zm-7,310.31L184.5,197.33a4,4,0,0,1,3.77-5.33H323.73a4,4,0,0,1,3.77,5.33L259.77,389.24A4,4,0,0,1,252.23,389.24Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448,341.37V170.61A32,32,0,0,0,432.11,143l-152-88.46a47.94,47.94,0,0,0-48.24,0L79.89,143A32,32,0,0,0,64,170.61V341.37A32,32,0,0,0,79.89,369l152,88.46a48,48,0,0,0,48.24,0l152-88.46A32,32,0,0,0,448,341.37Z" />
      <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" points="69 153.99 256 263.99 443 153.99" />
      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" x1="256" y1="463.99" x2="256" y2="263.99" />
      <ellipse cx="256" cy="152" rx="24" ry="16" />
      <ellipse cx="208" cy="296" rx="16" ry="24" />
      <ellipse cx="112" cy="328" rx="16" ry="24" />
      <ellipse cx="304" cy="296" rx="16" ry="24" />
      <ellipse cx="400" cy="240" rx="16" ry="24" />
      <ellipse cx="304" cy="384" rx="16" ry="24" />
      <ellipse cx="400" cy="328" rx="16" ry="24" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M48,366.92,240,480V284L48,170ZM192,288c8.84,0,16,10.75,16,24s-7.16,24-16,24-16-10.75-16-24S183.16,288,192,288ZM96,320c8.84,0,16,10.75,16,24s-7.16,24-16,24-16-10.75-16-24S87.16,320,96,320Z" />
      <path d="M272,284V480L464,366.92V170Zm48,140c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S328.84,424,320,424Zm0-88c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S328.84,336,320,336Zm96,32c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S424.84,368,416,368Zm0-88c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S424.84,280,416,280Zm32,77.64h0Z" />
      <path d="M256,32,64,144,256,256,448,144Zm0,120c-13.25,0-24-7.16-24-16s10.75-16,24-16,24,7.16,24,16S269.25,152,256,152Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M440.88,129.37,288.16,40.62a64.14,64.14,0,0,0-64.33,0L71.12,129.37a4,4,0,0,0,0,6.9L254,243.85a4,4,0,0,0,4.06,0L440.9,136.27A4,4,0,0,0,440.88,129.37ZM256,152c-13.25,0-24-7.16-24-16s10.75-16,24-16,24,7.16,24,16S269.25,152,256,152Z" />
      <path d="M238,270.81,54,163.48a4,4,0,0,0-6,3.46V340.86a48,48,0,0,0,23.84,41.39L234,479.48a4,4,0,0,0,6-3.46V274.27A4,4,0,0,0,238,270.81ZM96,368c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S104.84,368,96,368Zm96-32c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S200.84,336,192,336Z" />
      <path d="M458,163.51,274,271.56a4,4,0,0,0-2,3.45V476a4,4,0,0,0,6,3.46l162.15-97.23A48,48,0,0,0,464,340.86V167A4,4,0,0,0,458,163.51ZM320,424c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S328.84,424,320,424Zm0-88c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S328.84,336,320,336Zm96,32c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S424.84,368,416,368Zm0-88c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S424.84,280,416,280Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="256" r="96" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="256" r="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <circle cx="256" cy="256" r="32" />
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM256,336a80,80,0,1,1,80-80A80.09,80.09,0,0,1,256,336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M256,176a80,80,0,1,0,80,80A80.09,80.09,0,0,0,256,176Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,256,288Z" />
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM256,368A112,112,0,1,1,368,256,112.12,112.12,0,0,1,256,368Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M208,64h66.75a32,32,0,0,1,22.62,9.37L438.63,214.63A32,32,0,0,1,448,237.25V432a48,48,0,0,1-48,48H192a48,48,0,0,1-48-48V304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M288,72V192a32,32,0,0,0,32,32H440" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M160,80V232a23.69,23.69,0,0,1-24,24c-12,0-24-9.1-24-24V88c0-30.59,16.57-56,48-56s48,24.8,48,55.38V226.13c0,43-27.82,77.87-72,77.87s-72-34.86-72-77.87V144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M280,240a8,8,0,0,1-8-8V48H214.75a65.42,65.42,0,0,0-6.5-9.81C196.72,23.88,179.59,16,160,16c-37.68,0-64,29.61-64,72V232c0,25,20.34,40,40,40a39.57,39.57,0,0,0,40-40V80H144V232a7.75,7.75,0,0,1-8,8c-2.23,0-8-1.44-8-8V88c0-19.34,8.41-40,32-40,29.69,0,32,30.15,32,39.38V226.13c0,17.45-5.47,33.23-15.41,44.46C166.5,282,152.47,288,136,288s-30.5-6-40.59-17.41C85.47,259.36,80,243.58,80,226.13V144H48v82.13c0,51.51,33.19,89.63,80,93.53V468a12,12,0,0,0,12,12H452a12,12,0,0,0,12-12V240Z" />
      <path d="M308,208H454.31a2,2,0,0,0,1.42-3.41L307.41,56.27A2,2,0,0,0,304,57.69V204A4,4,0,0,0,308,208Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M460,240H320a48,48,0,0,1-48-48V52a4,4,0,0,0-4-4H214.75a65.42,65.42,0,0,0-6.5-9.81C196.72,23.88,179.59,16,160,16c-37.68,0-64,29.61-64,72V232c0,25,20.34,40,40,40a39.57,39.57,0,0,0,40-40V80a16,16,0,0,0-32,0V232a7.75,7.75,0,0,1-8,8c-2.23,0-8-1.44-8-8V88c0-19.34,8.41-40,32-40,29.69,0,32,30.15,32,39.38V226.13c0,17.45-5.47,33.23-15.41,44.46C166.5,282,152.47,288,136,288s-30.5-6-40.59-17.41C85.47,259.36,80,243.58,80,226.13V144a16,16,0,0,0-32,0v82.13c0,51.51,33.19,89.63,80,93.53V432a64,64,0,0,0,64,64H400a64,64,0,0,0,64-64V244A4,4,0,0,0,460,240Z" />
      <path d="M320,208H449.81a2,2,0,0,0,1.41-3.41L307.41,60.78A2,2,0,0,0,304,62.19V192A16,16,0,0,0,320,208Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M288,304V286c0-16.63-14.26-30-32-30s-32,13.37-32,30v18" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <path d="M304,416H208a32,32,0,0,1-32-32V336a32,32,0,0,1,32-32h96a32,32,0,0,1,32,32v48A32,32,0,0,1,304,416Z" />
      <path d="M416,221.25V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V96a48,48,0,0,1,48-48h98.75a32,32,0,0,1,22.62,9.37L406.63,198.63A32,32,0,0,1,416,221.25Z" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" />
      <path d="M256,50.88V176a32,32,0,0,0,32,32H413.12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M276,192H422.31a2,2,0,0,0,1.42-3.41L275.41,40.27A2,2,0,0,0,272,41.69V188A4,4,0,0,0,276,192Z" />
      <path d="M256,272c-8.82,0-16,6.28-16,14v18h32V286C272,278.28,264.82,272,256,272Z" />
      <path d="M248,224a8,8,0,0,1-8-8V32H92A12,12,0,0,0,80,44V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V224Zm88,175.91A16.1,16.1,0,0,1,319.91,416H192.09A16.1,16.1,0,0,1,176,399.91V320c0-10,7-16,16-16h16V286c0-25.36,21.53-46,48-46s48,20.64,48,46v18h16a15.8,15.8,0,0,1,16,16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M288,192H417.81a2,2,0,0,0,1.41-3.41L275.41,44.78A2,2,0,0,0,272,46.19V176A16,16,0,0,0,288,192Z" />
      <path d="M256,272c-8.82,0-16,6.28-16,14v18h32V286C272,278.28,264.82,272,256,272Z" />
      <path d="M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V228A4,4,0,0,0,428,224ZM336,384a32,32,0,0,1-32,32H208a32,32,0,0,1-32-32V336a32,32,0,0,1,32-32V286c0-25.36,21.53-46,48-46s48,20.64,48,46v18a32,32,0,0,1,32,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M416,221.25V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V96a48,48,0,0,1,48-48h98.75a32,32,0,0,1,22.62,9.37L406.63,198.63A32,32,0,0,1,416,221.25Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,56V176a32,32,0,0,0,32,32H408" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M240,216V32H92A12,12,0,0,0,80,44V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V224H248A8,8,0,0,1,240,216Z" />
      <path d="M272,41.69V188a4,4,0,0,0,4,4H422.31a2,2,0,0,0,1.42-3.41L275.41,40.27A2,2,0,0,0,272,41.69Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M416,221.25V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V96a48,48,0,0,1,48-48h98.75a32,32,0,0,1,22.62,9.37L406.63,198.63A32,32,0,0,1,416,221.25Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,56V176a32,32,0,0,0,32,32H408" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="288" x2="336" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="368" x2="336" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M272,41.69V188a4,4,0,0,0,4,4H422.31a2,2,0,0,0,1.42-3.41L275.41,40.27A2,2,0,0,0,272,41.69Z" />
      <path d="M248,224a8,8,0,0,1-8-8V32H92A12,12,0,0,0,80,44V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V224ZM352,384H160V352H352Zm0-80H160V272H352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V228A4,4,0,0,0,428,224ZM336,384H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Zm0-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Z" />
      <path d="M419.22,188.59,275.41,44.78A2,2,0,0,0,272,46.19V176a16,16,0,0,0,16,16H417.81A2,2,0,0,0,419.22,188.59Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V228A4,4,0,0,0,428,224Z" />
      <path d="M419.22,188.59,275.41,44.78A2,2,0,0,0,272,46.19V176a16,16,0,0,0,16,16H417.81A2,2,0,0,0,419.22,188.59Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M336,264.13V436c0,24.3-19.05,44-42.95,44H107C83.05,480,64,460.3,64,436V172a44.26,44.26,0,0,1,44-44h94.12a24.55,24.55,0,0,1,17.49,7.36l109.15,111A25.4,25.4,0,0,1,336,264.13Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M200,128V236a28.34,28.34,0,0,0,28,28H336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M176,128V76a44.26,44.26,0,0,1,44-44h94a24.83,24.83,0,0,1,17.61,7.36l109.15,111A25.09,25.09,0,0,1,448,168V340c0,24.3-19.05,44-42.95,44H344" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M312,32V140a28.34,28.34,0,0,0,28,28H448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M307.94,248,216,154.52V242a6,6,0,0,0,6,6Z" />
      <path d="M184,268V144H60a12,12,0,0,0-12,12V484a12,12,0,0,0,12,12H308a12,12,0,0,0,12-12V280H196A12,12,0,0,1,184,268Z" />
      <path d="M366,120h85.94L360,26.52V114A6,6,0,0,0,366,120Z" />
      <path d="M340,152a12,12,0,0,1-12-12V16H172a12,12,0,0,0-12,12v84h42.12A40.81,40.81,0,0,1,231,124.14l109.16,111a41.11,41.11,0,0,1,11.83,29V400H452a12,12,0,0,0,12-12V152Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M298.39,248a4,4,0,0,0,2.86-6.8l-78.4-79.72a4,4,0,0,0-6.85,2.81V236a12,12,0,0,0,12,12Z" />
      <path d="M197,267A43.67,43.67,0,0,1,184,236V144H112a64.19,64.19,0,0,0-64,64V432a64,64,0,0,0,64,64H256a64,64,0,0,0,64-64V280H228A43.61,43.61,0,0,1,197,267Z" />
      <path d="M372,120h70.39a4,4,0,0,0,2.86-6.8l-78.4-79.72A4,4,0,0,0,360,36.29V108A12,12,0,0,0,372,120Z" />
      <path d="M372,152a44.34,44.34,0,0,1-44-44V16H220a60.07,60.07,0,0,0-60,60v36h42.12A40.81,40.81,0,0,1,231,124.14l109.16,111a41.11,41.11,0,0,1,11.83,29V400h53.05c32.51,0,58.95-26.92,58.95-60V152Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M336,176h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V216a40,40,0,0,1,40-40h40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="176 272 256 352 336 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="48" x2="256" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M272,160V307.37l64-64L358.63,266,256,368.63,153.37,266,176,243.37l64,64V160H92a12,12,0,0,0-12,12V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V172a12,12,0,0,0-12-12Z" />
      <rect x="240" y="32" width="32" height="128" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M376,160H272V313.37l52.69-52.68a16,16,0,0,1,22.62,22.62l-80,80a16,16,0,0,1-22.62,0l-80-80a16,16,0,0,1,22.62-22.62L240,313.37V160H136a56.06,56.06,0,0,0-56,56V424a56.06,56.06,0,0,0,56,56H376a56.06,56.06,0,0,0,56-56V216A56.06,56.06,0,0,0,376,160Z" />
      <path d="M272,48a16,16,0,0,0-32,0V160h32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <rect x="128" y="128" width="336" height="336" rx="57" ry="57" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M383.5,128l.5-24a56.16,56.16,0,0,0-56-56H112a64.19,64.19,0,0,0-64,64V328a56.16,56.16,0,0,0,56,56h24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="296" y1="216" x2="296" y2="376" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="376" y1="296" x2="216" y2="296" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M112,80H400V56a24,24,0,0,0-24-24H66A34,34,0,0,0,32,66V376a24,24,0,0,0,24,24H80V112A32,32,0,0,1,112,80Z" />
      <path d="M456,112H136a24,24,0,0,0-24,24V456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V136A24,24,0,0,0,456,112ZM392,312H312v80H280V312H200V280h80V200h32v80h80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M408,112H184a72,72,0,0,0-72,72V408a72,72,0,0,0,72,72H408a72,72,0,0,0,72-72V184A72,72,0,0,0,408,112ZM375.55,312H312v63.55c0,8.61-6.62,16-15.23,16.43A16,16,0,0,1,280,376V312H216.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,216,280h64V216.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,312,216v64h64a16,16,0,0,1,16,16.77C391.58,305.38,384.16,312,375.55,312Z" />
      <path d="M395.88,80A72.12,72.12,0,0,0,328,32H104a72,72,0,0,0-72,72V328a72.12,72.12,0,0,0,48,67.88V160a80,80,0,0,1,80-80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M335.72,330.76C381.73,299.5,416,251.34,416,192a160,160,0,0,0-320,0V398.57C96,442.83,131.74,480,176,480h0c44.26,0,66.83-25.94,77.29-40C268.06,420.19,295,358.44,335.72,330.76Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M160,304V184c0-48.4,43.2-88,96-88h0c52.8,0,96,39.6,96,88" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M160,239c25-18,79.82-15,79.82-15,26,0,41.17,29.42,26,50.6,0,0-36.86,42.4-41.86,61.4" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M380.48,68.09C347.09,34.5,302.88,16,256,16,159,16,80,95,80,192V398.57a97.59,97.59,0,0,0,28,68.49A94.49,94.49,0,0,0,176,496c19.93,0,41.06-7.69,62.8-22.87a181.46,181.46,0,0,0,25.88-21.86C327.37,390.16,432,288.06,432,192,432,145.51,413.71,101.51,380.48,68.09ZM368,200H336V184c0-39.7-35.89-72-80-72s-80,32.3-80,72v30.41c27.5-7.84,59.89-6.62,64.26-6.41a48,48,0,0,1,38.62,75.9c-.3.41-.61.81-.95,1.2-16.55,19-36,45.49-38.46,55l-4.07,15.47-30.94-8.14,4.07-15.47c5.51-20.94,36.93-58.2,44.66-67.15A16,16,0,0,0,239.82,240l-.88,0c-10.67-.58-42.66-.25-62.12,8l-.82.35V320H144V184c0-57.35,50.24-104,112-104s112,46.65,112,104Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M256,16C159,16,80,95,80,192V398.57a97.59,97.59,0,0,0,28,68.49A94.51,94.51,0,0,0,176,496c36.86,0,67.18-15.62,90.12-46.42,4.48-6,9.55-14.74,15.42-24.85,15.32-26.37,36.29-62.47,63.17-80.74,25.77-17.51,47.23-39.54,62-63.72C423.51,252.94,432,223.24,432,192,432,95,353.05,16,256,16Zm96,184a16,16,0,0,1-16-16c0-39.7-35.89-72-80-72s-80,32.3-80,72v30.42c27.19-7.84,58.4-6.72,64.28-6.42a48,48,0,0,1,38.6,75.9c-.3.41-.61.81-.95,1.2-16.55,19-36,45.48-38.46,55a16,16,0,0,1-30.94-8.14c5.51-20.94,36.93-58.2,44.66-67.15A16,16,0,0,0,239.82,240l-.88,0c-16.6-.89-45.89.8-62.94,8.31V304a16,16,0,0,1-32,0V184c0-57.35,50.24-104,112-104s112,46.65,112,104A16,16,0,0,1,352,200Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M445.57,172.14c-16.06.1-14.48,29.73-34.49,15.75-7.43-5.18-12-12.71-21.33-15-8.15-2-16.5.08-24.55,1.47-9.15,1.58-20,2.29-26.94,9.22-6.71,6.67-10.26,15.62-17.4,22.33-13.81,13-19.64,27.19-10.7,45.57,8.6,17.67,26.59,27.26,46,26,19.07-1.27,38.88-12.33,38.33,15.38-.2,9.8,1.85,16.6,4.86,25.71,2.79,8.4,2.6,16.54,3.24,25.21,1.18,16.2,4.16,34.36,12.2,48.67l15-21.16c1.85-2.62,5.72-6.29,6.64-9.38,1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13-1.29-15.81,1.6-28.43-10.58-41.65-11.76-12.75-29-15.81-45.47-13.22-8.3,1.3-41.71,6.64-28.3-12.33,2.65-3.73,7.28-6.79,10.26-10.34,2.59-3.09,4.84-8.77,7.88-11.18s17-5.18,21-3.95,8.17,7,11.64,9.56a49.89,49.89,0,0,0,21.81,9.36c13.66,2,42.22-5.94,42-23.46C456.45,191.7,448.65,180,445.57,172.14Z" />
      <path d="M287.45,316.3c-5.33-22.44-35.82-29.94-52.26-42.11-9.45-7-17.86-17.81-30.27-18.69-5.72-.41-10.51.83-16.18-.64-5.2-1.34-9.28-4.14-14.82-3.41-10.35,1.36-16.88,12.42-28,10.92-10.55-1.42-21.42-13.76-23.82-23.81-3.08-12.92,7.14-17.11,18.09-18.26,4.57-.48,9.7-1,14.09.67,5.78,2.15,8.51,7.81,13.7,10.67,9.73,5.33,11.7-3.19,10.21-11.83-2.23-12.94-4.83-18.22,6.71-27.12,8-6.14,14.84-10.58,13.56-21.61-.76-6.48-4.31-9.41-1-15.86,2.51-4.91,9.4-9.34,13.89-12.27,11.59-7.56,49.65-7,34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44,9.27-21.41,14.19-7.2,5.09-21.22,10.87-28.43,3-9.7-10.59,6.43-14.07,10-21.46S176.34,70.33,170,66.79l-29.81,33.43a41.52,41.52,0,0,0,8.34,31.86c5.93,7.63,15.37,10.08,15.8,20.5.42,10-1.14,15.12-7.68,22.15-2.83,3-4.83,7.26-7.71,10.07-3.53,3.43-2.22,2.38-7.73,3.32-10.36,1.75-19.18,4.45-29.19,7.21C95.34,199.94,93.8,172.69,86.2,162l-25,20.19c-.27,3.31,4.1,9.4,5.29,13C73.32,215.76,87.1,231.67,96,251.35c9.37,20.84,34.53,15.06,45.64,33.32,9.86,16.2-.67,36.71,6.71,53.67,5.36,12.31,18,15,26.72,24,8.91,9.09,8.72,21.53,10.08,33.36a305.22,305.22,0,0,0,7.45,41.28c1.21,4.69,2.32,10.89,5.53,14.76,2.2,2.66,9.75,4.95,6.7,5.83,4.26.7,11.85,4.68,15.4,1.76,4.68-3.84,3.43-15.66,4.24-21,2.43-15.9,10.39-31.45,21.13-43.35,10.61-11.74,25.15-19.69,34.11-33C288.44,349,291.07,331.49,287.45,316.3Zm-33.39,26.32c-6,10.71-19.36,17.88-27.95,26.39-2.33,2.31-7.29,10.31-10.21,8.58-2.09-1.24-2.8-11.62-3.57-14a61.17,61.17,0,0,0-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7-2-3.53-.2-11.86-.13-15.7.11-5.6-2.44-14.91-1.06-20,1.6-5.87-1.48-2.33,3.77-3.49,2.77-.62,14.21,1.39,17.66,2.11,5.48,1.14,8.5,4.55,12.82,8,11.36,9.11,23.87,16.16,36.6,23.14C257.46,324.46,260.36,331.37,254.06,342.62Z" />
      <path d="M184.46,67.09c4.74,4.63,9.2,10.11,16.27,10.57,6.69.45,13-3.17,18.84,1.38,6.48,5,11.15,11.33,19.75,12.89,8.32,1.51,17.13-3.35,19.19-11.86,2-8.11-2.31-16.93-2.57-25.07,0-1.13.61-6.15-.17-7-.58-.64-5.42.08-6.16.1q-8.13.24-16.22,1.12a207.1,207.1,0,0,0-57.18,14.65C178.64,65.55,181.69,66.22,184.46,67.09Z" />
      <path d="M356.4,123.27c8.49,0,17.11-3.8,14.37-13.62-2.3-8.23-6.22-17.16-15.76-12.72-6.07,2.82-14.67,10-15.38,17.12C338.82,122.13,350.74,123.27,356.4,123.27Z" />
      <path d="M349.62,166.24c8.67,5.19,21.53,2.75,28.07-4.66,5.11-5.8,8.12-15.87,17.31-15.86a15.4,15.4,0,0,1,10.82,4.41c3.8,3.93,3.05,7.62,3.86,12.54,1.81,11.05,13.66.63,16.75-3.65,2-2.79,4.71-6.93,3.8-10.56-.84-3.39-4.8-7-6.56-10.11-5.14-9-9.37-19.47-17.07-26.74-7.41-7-16.52-6.19-23.55,1.08-5.76,6-12.45,10.75-16.39,18.05-2.78,5.13-5.91,7.58-11.54,8.91-3.1.73-6.64,1-9.24,3.08C338.64,148.43,342.76,162.12,349.62,166.24Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M267,474l-.8-.13A.85.85,0,0,0,267,474Z" />
      <path d="M448.9,187.78a5.51,5.51,0,0,0-10.67-.63h0A5.52,5.52,0,0,1,433,191H417.53a5.48,5.48,0,0,1-2.84-.79l-22.38-13.42a5.48,5.48,0,0,0-2.84-.79h-35.8a5.48,5.48,0,0,0-3.06.93l-44.15,29.43A5.52,5.52,0,0,0,304,211v41.74a5.51,5.51,0,0,0,2.92,4.87l57.89,30.9a5.55,5.55,0,0,1,2.92,4.8L368,316.8a5.53,5.53,0,0,0,2.85,4.75l23.26,12.87a5.54,5.54,0,0,1,2.85,4.83v48.6a5.52,5.52,0,0,0,9.17,4.14c9.38-8.26,22.83-20.32,24.62-23.08q4.44-6.87,8.33-14.07a207.39,207.39,0,0,0,13.6-31C465.36,287.13,455.34,221.14,448.9,187.78Z" />
      <path d="M286.4,302.8l-61.33-46a4,4,0,0,0-2.4-.8h-29.1a3.78,3.78,0,0,1-2.68-1.11l-13.72-13.72a4,4,0,0,0-2.83-1.17H121.15a3.79,3.79,0,0,1-2.68-6.47l8.42-8.42a3.78,3.78,0,0,1,2.68-1.11h32.37a8,8,0,0,0,7.7-5.83l6.89-24.5a4,4,0,0,1,2-2.47L206,177.06a3.79,3.79,0,0,0,2.05-3.37v-12.5a3.82,3.82,0,0,1,.68-2.17L223.33,138a3.75,3.75,0,0,1,1.78-1.38l20.43-7.67a3.79,3.79,0,0,0,2.46-3.55V114a3.8,3.8,0,0,0-1.69-3.16L225.83,97.22A3.83,3.83,0,0,0,222,97l-27.88,13.94a3.78,3.78,0,0,1-4-.41L176.9,100.08a3.8,3.8,0,0,1,.1-6l10.74-7.91a3.78,3.78,0,0,0-.09-6.16L170.92,68.34a3.78,3.78,0,0,0-4-.22c-6.05,3.31-23.8,13.11-30.1,17.52a209.48,209.48,0,0,0-68.16,80c-1.82,3.76-4.07,7.59-4.29,11.72s-3.46,13.35-4.81,17.08a3.78,3.78,0,0,0,.24,3.1l35.69,65.58a3.74,3.74,0,0,0,1.38,1.44l37.55,22.54a3.78,3.78,0,0,1,1.81,2.73l7.52,54.54a3.82,3.82,0,0,0,1.61,2.61l29.3,20.14a4,4,0,0,1,1.65,2.48l15.54,73.8a3.6,3.6,0,0,0,.49,1.22c1.46,2.36,7.28,11,14.3,12.28-.65.18-1.23.59-1.88.78a47.63,47.63,0,0,1,5,1.16c2,.54,4,1,6,1.43,3.13.62,3.44,1.1,4.94-1.68,2-3.72,4.29-5,6-5.46a3.85,3.85,0,0,0,2.89-2.9l10.07-46.68a4,4,0,0,1,1.6-2.42l45-31.9a4,4,0,0,0,1.69-3.27V306A4,4,0,0,0,286.4,302.8Z" />
      <path d="M262,48s-3.65.21-4.39.23q-8.13.24-16.22,1.12A207.45,207.45,0,0,0,184.21,64c2.43,1.68-1.75,3.22-1.75,3.22L189,80h35l24,12,21-12Z" />
      <path d="M354.23,120.06l16.11-14a4,4,0,0,0-.94-6.65l-18.81-8.73a4,4,0,0,0-5.3,1.9l-7.75,16.21a4,4,0,0,0,1.49,5.11l10.46,6.54A4,4,0,0,0,354.23,120.06Z" />
      <path d="M429.64,140.67l-5.83-9c-.09-.14-.17-.28-.25-.43-1.05-2.15-9.74-19.7-17-26.51-5.45-5.15-7-3.67-7.43-2.53a3.77,3.77,0,0,1-1.19,1.6L369.1,127.11a4,4,0,0,1-2.51.89H351.66a4,4,0,0,0-2.83,1.17l-12,12a4,4,0,0,0,0,5.66l12,12a4,4,0,0,0,2.83,1.17h75.17a4,4,0,0,0,4-4.17l-.55-13.15A4,4,0,0,0,429.64,140.67Z" />
      <path d="M256,72a184,184,0,1,1-130.1,53.9A182.77,182.77,0,0,1,256,72m0-40C132.3,32,32,132.3,32,256S132.3,480,256,480,480,379.7,480,256,379.7,32,256,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M414.39,97.74A224,224,0,1,0,97.61,414.52,224,224,0,1,0,414.39,97.74ZM64,256.13a191.63,191.63,0,0,1,6.7-50.31c7.34,15.8,18,29.45,25.25,45.66,9.37,20.84,34.53,15.06,45.64,33.32,9.86,16.21-.67,36.71,6.71,53.67,5.36,12.31,18,15,26.72,24,8.91,9.08,8.72,21.52,10.08,33.36a305.36,305.36,0,0,0,7.45,41.27c0,.1,0,.21.08.31C117.8,411.13,64,339.8,64,256.13Zm192,192a193.12,193.12,0,0,1-32-2.68c.11-2.71.16-5.24.43-7,2.43-15.9,10.39-31.45,21.13-43.35,10.61-11.74,25.15-19.68,34.11-33,8.78-13,11.41-30.5,7.79-45.69-5.33-22.44-35.82-29.93-52.26-42.1-9.45-7-17.86-17.82-30.27-18.7-5.72-.4-10.51.83-16.18-.63-5.2-1.35-9.28-4.15-14.82-3.42-10.35,1.36-16.88,12.42-28,10.92-10.55-1.41-21.42-13.76-23.82-23.81-3.08-12.92,7.14-17.11,18.09-18.26,4.57-.48,9.7-1,14.09.68,5.78,2.14,8.51,7.8,13.7,10.66,9.73,5.34,11.7-3.19,10.21-11.83-2.23-12.94-4.83-18.21,6.71-27.12,8-6.14,14.84-10.58,13.56-21.61-.76-6.48-4.31-9.41-1-15.86,2.51-4.91,9.4-9.34,13.89-12.27,11.59-7.56,49.65-7,34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44,9.27-21.41,14.19-7.2,5.09-21.22,10.87-28.43,3-9.7-10.59,6.43-14.06,10-21.46,1.65-3.45,0-8.24-2.78-12.75q5.41-2.28,11-4.23a15.6,15.6,0,0,0,8,3c6.69.44,13-3.18,18.84,1.38,6.48,5,11.15,11.32,19.75,12.88,8.32,1.51,17.13-3.34,19.19-11.86,1.25-5.18,0-10.65-1.2-16a190.83,190.83,0,0,1,105,32.21c-2-.76-4.39-.67-7.34.7-6.07,2.82-14.67,10-15.38,17.12-.81,8.08,11.11,9.22,16.77,9.22,8.5,0,17.11-3.8,14.37-13.62-1.19-4.26-2.81-8.69-5.42-11.37a193.27,193.27,0,0,1,18,14.14c-.09.09-.18.17-.27.27-5.76,6-12.45,10.75-16.39,18.05-2.78,5.14-5.91,7.58-11.54,8.91-3.1.73-6.64,1-9.24,3.08-7.24,5.7-3.12,19.4,3.74,23.51,8.67,5.19,21.53,2.75,28.07-4.66,5.11-5.8,8.12-15.87,17.31-15.86a15.4,15.4,0,0,1,10.82,4.41c3.8,3.94,3.05,7.62,3.86,12.54,1.43,8.74,9.14,4,13.83-.41a192.12,192.12,0,0,1,9.24,18.77c-5.16,7.43-9.26,15.53-21.67,6.87-7.43-5.19-12-12.72-21.33-15.06-8.15-2-16.5.08-24.55,1.47-9.15,1.59-20,2.29-26.94,9.22-6.71,6.68-10.26,15.62-17.4,22.33-13.81,13-19.64,27.19-10.7,45.57,8.6,17.67,26.59,27.26,46,26,19.07-1.27,38.88-12.33,38.33,15.38-.2,9.81,1.85,16.6,4.86,25.71,2.79,8.4,2.6,16.54,3.24,25.21A158,158,0,0,0,407.43,374,191.75,191.75,0,0,1,256,448.13Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <rect x="48" y="80" width="416" height="272" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="416" x2="256" y2="352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="80" x2="256" y2="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="400" y1="464" x2="368" y2="352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="464" x2="144" y2="352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M468,64H278V32H234V64H44A12,12,0,0,0,32,76V356a12,12,0,0,0,12,12h78.19L89.93,470.46l36.53,9.61L161.74,368H234v64h44V368h71.84l31,111.7,36.83-8.57L389.05,368H468a12,12,0,0,0,12-12V76A12,12,0,0,0,468,64ZM442,330H70V102H442Z" />
      <rect x="88" y="120" width="336" height="192" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <rect x="80" y="112" width="352" height="208" rx="12" ry="12" />
      <path d="M432,64H272V48a16,16,0,0,0-32,0V64H80a48.05,48.05,0,0,0-48,48V320a48.05,48.05,0,0,0,48,48h42.79L96.62,459.6a16,16,0,1,0,30.76,8.8L156.07,368H240v48a16,16,0,0,0,32,0V368h83.93l28.69,100.4a16,16,0,1,0,30.76-8.8L389.21,368H432a48.05,48.05,0,0,0,48-48V112A48.05,48.05,0,0,0,432,64Zm16,256a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V112A16,16,0,0,1,80,96H432a16,16,0,0,1,16,16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M256,48C192,48,96,171.69,96,286.55S160,464,256,464s160-62.59,160-177.45S320,48,256,48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M418.39,381.05c-8.08,21.68-19.76,40.1-34.72,54.75-14.38,14.07-32.1,24.95-52.67,32.34C309.08,476,283.85,480,256,480s-53.08-4-75-11.86c-20.57-7.39-38.29-18.27-52.67-32.34-15-14.65-26.64-33.07-34.72-54.75C84.58,356.82,80,328.53,80,296.94c0-30.28,6.68-62.57,19.86-96A371,371,0,0,1,151,111.42C195.78,53.56,241,32,256,32s62.67,22.4,105,79.42c18.33,24.71,38.87,58.34,51.17,89.54,13.18,33.41,19.86,65.7,19.86,96C432,328.53,427.42,356.82,418.39,381.05Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M256,480c-52.57,0-96.72-17.54-127.7-50.73C96.7,395.4,80,346.05,80,286.55,80,230.5,101.48,168,138.93,115,175.65,63,219.41,32,256,32s80.35,31,117.07,83C410.52,168,432,230.5,432,286.55c0,59.5-16.7,108.85-48.3,142.72C352.72,462.46,308.57,480,256,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M256,464C141.31,464,48,370.69,48,256S141.31,48,256,48s208,93.31,208,208S370.69,464,256,464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M256,464C141.31,464,48,370.69,48,256S141.31,48,256,48s208,93.31,208,208S370.69,464,256,464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="256" cy="256" r="26" />
      <circle cx="346" cy="256" r="26" />
      <circle cx="166" cy="256" r="26" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48ZM166,282a26,26,0,1,1,26-26A26,26,0,0,1,166,282Zm90,0a26,26,0,1,1,26-26A26,26,0,0,1,256,282Zm90,0a26,26,0,1,1,26-26A26,26,0,0,1,346,282Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="256" cy="256" r="26" />
      <circle cx="346" cy="256" r="26" />
      <circle cx="166" cy="256" r="26" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="256" cy="256" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="416" cy="256" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="96" cy="256" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="256" cy="256" r="48" />
      <circle cx="416" cy="256" r="48" />
      <circle cx="96" cy="256" r="48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="256" cy="256" r="48" />
      <circle cx="416" cy="256" r="48" />
      <circle cx="96" cy="256" r="48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="256" cy="256" r="26" />
      <circle cx="256" cy="346" r="26" />
      <circle cx="256" cy="166" r="26" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM230,166a26,26,0,1,1,26,26A26,26,0,0,1,230,166Zm0,90a26,26,0,1,1,26,26A26,26,0,0,1,230,256Zm0,90a26,26,0,1,1,26,26A26,26,0,0,1,230,346Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="256" cy="256" r="26" />
      <circle cx="256" cy="346" r="26" />
      <circle cx="256" cy="166" r="26" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="256" cy="256" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="416" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="96" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="256" cy="256" r="48" />
      <circle cx="256" cy="416" r="48" />
      <circle cx="256" cy="96" r="48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="256" cy="256" r="48" />
      <circle cx="256" cy="416" r="48" />
      <circle cx="256" cy="96" r="48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M176,176V136a40,40,0,0,1,40-40H424a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H216a40,40,0,0,1-40-40V336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="272 336 352 256 272 176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="48" y1="256" x2="336" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M160,240H307.37l-64-64L266,153.37,368.63,256,266,358.63,243.37,336l64-64H160V420a12,12,0,0,0,12,12H468a12,12,0,0,0,12-12V92a12,12,0,0,0-12-12H172a12,12,0,0,0-12,12Z" />
      <rect x="32" y="240" width="128" height="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M160,136V240H313.37l-52.68-52.69a16,16,0,0,1,22.62-22.62l80,80a16,16,0,0,1,0,22.62l-80,80a16,16,0,0,1-22.62-22.62L313.37,272H160V376a56.06,56.06,0,0,0,56,56H424a56.06,56.06,0,0,0,56-56V136a56.06,56.06,0,0,0-56-56H216A56.06,56.06,0,0,0,160,136Z" />
      <path d="M48,240a16,16,0,0,0,0,32H160V240Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M320,176V136a40,40,0,0,0-40-40H88a40,40,0,0,0-40,40V376a40,40,0,0,0,40,40H280a40,40,0,0,0,40-40V336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="384 176 464 256 384 336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="191" y1="256" x2="464" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M335.69,272h-161V240h161V92a12,12,0,0,0-12-12h-280a12,12,0,0,0-12,12V420a12,12,0,0,0,12,12h280a12,12,0,0,0,12-12Z" />
      <polygon points="419.06 272 355.06 336 377.69 358.63 480.31 256 377.69 153.37 355.06 176 419.06 240 335.69 240 335.69 272 419.06 272" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M336,376V272H191a16,16,0,0,1,0-32H336V136a56.06,56.06,0,0,0-56-56H88a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H280A56.06,56.06,0,0,0,336,376Z" />
      <path d="M425.37,272l-52.68,52.69a16,16,0,0,0,22.62,22.62l80-80a16,16,0,0,0,0-22.62l-80-80a16,16,0,0,0-22.62,22.62L425.37,240H336v32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="432 320 432 432 320 432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="421.8" y1="421.77" x2="304" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="80 192 80 80 192 80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="90.2" y1="90.23" x2="208" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="320 80 432 80 432 192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="421.77" y1="90.2" x2="304" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="192 432 80 432 80 320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="90.23" y1="421.8" x2="208" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="432 320 432 432 320 432" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="421.8" y1="421.77" x2="304" y2="304" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="80 192 80 80 192 80" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="90.2" y1="90.23" x2="208" y2="208" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="320 80 432 80 432 192" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="421.77" y1="90.2" x2="304" y2="208" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="192 432 80 432 80 320" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="90.23" y1="421.8" x2="208" y2="304" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="432 320 432 432 320 432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="421.8" y1="421.77" x2="304" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="80 192 80 80 192 80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="90.2" y1="90.23" x2="208" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="320 80 432 80 432 192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="421.77" y1="90.2" x2="304" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="192 432 80 432 80 320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="90.23" y1="421.8" x2="208" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M413.66,246.1H386a2,2,0,0,1-2-2V166.86A38.86,38.86,0,0,0,345.14,128H267.9a2,2,0,0,1-2-2V98.34c0-27.14-21.5-49.86-48.64-50.33a49.53,49.53,0,0,0-50.4,49.51V126a2,2,0,0,1-2,2H87.62A39.74,39.74,0,0,0,48,167.62V238a2,2,0,0,0,2,2H76.91c29.37,0,53.68,25.48,54.09,54.85.42,29.87-23.51,57.15-53.29,57.15H50a2,2,0,0,0-2,2v70.38A39.74,39.74,0,0,0,87.62,464H158a2,2,0,0,0,2-2V441.07c0-30.28,24.75-56.35,55-57.06,30.1-.7,57,20.31,57,50.28V462a2,2,0,0,0,2,2h71.14A38.86,38.86,0,0,0,384,425.14v-78a2,2,0,0,1,2-2h28.48c27.63,0,49.52-22.67,49.52-50.4S440.8,246.1,413.66,246.1Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M345.14,480H256V434.29a31.3,31.3,0,0,0-9.59-22.65c-7.67-7.56-18.83-11.81-30.57-11.64a44.38,44.38,0,0,0-28.45,10.67c-5.2,4.6-11.39,12.56-11.39,24.42V480H87.62A55.68,55.68,0,0,1,32,424.38V336H77.71c9.16,0,18.07-3.92,25.09-11A42.06,42.06,0,0,0,115,295.08C114.7,273.89,97.26,256,76.91,256H32V166.66a53.77,53.77,0,0,1,16.53-39A55.88,55.88,0,0,1,87.62,112h63.24V97.52A65.53,65.53,0,0,1,217.54,32c35.49.62,64.36,30.38,64.36,66.33V112h63.24A54.28,54.28,0,0,1,400,166.86V230.1h13.66c36.58,0,66.34,29,66.34,64.64,0,36.61-29.39,66.4-65.52,66.4H400v63.24C400,455.05,375.39,480,345.14,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M345.14,480H274a18,18,0,0,1-18-18V434.29a31.32,31.32,0,0,0-9.71-22.77c-7.78-7.59-19.08-11.8-30.89-11.51-21.36.5-39.4,19.3-39.4,41.06V462a18,18,0,0,1-18,18H87.62A55.62,55.62,0,0,1,32,424.38V354a18,18,0,0,1,18-18H77.71c9.16,0,18.07-3.92,25.09-11A42.06,42.06,0,0,0,115,295.08C114.7,273.89,97.26,256,76.91,256H50a18,18,0,0,1-18-18V167.62A55.62,55.62,0,0,1,87.62,112h55.24a8,8,0,0,0,8-8V97.52A65.53,65.53,0,0,1,217.54,32c35.49.62,64.36,30.38,64.36,66.33V104a8,8,0,0,0,8,8h55.24A54.86,54.86,0,0,1,400,166.86V222.1a8,8,0,0,0,8,8h5.66c36.58,0,66.34,29,66.34,64.64,0,36.61-29.39,66.4-65.52,66.4H408a8,8,0,0,0-8,8v56A54.86,54.86,0,0,1,345.14,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M432,448a15.92,15.92,0,0,1-11.31-4.69l-352-352A16,16,0,0,1,91.31,68.69l352,352A16,16,0,0,1,432,448Z" />
      <path d="M255.66,384c-41.49,0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91l0-.08c19.94-28.57,41.78-52.73,65.24-72.21a2,2,0,0,0,.14-2.94L93.5,161.38a2,2,0,0,0-2.71-.12c-24.92,21-48.05,46.76-69.08,76.92a31.92,31.92,0,0,0-.64,35.54c26.41,41.33,60.4,76.14,98.28,100.65C162,402,207.9,416,255.66,416a239.13,239.13,0,0,0,75.8-12.58,2,2,0,0,0,.77-3.31l-21.58-21.58a4,4,0,0,0-3.83-1A204.8,204.8,0,0,1,255.66,384Z" />
      <path d="M490.84,238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349,110.55,302,96,255.66,96a227.34,227.34,0,0,0-74.89,12.83,2,2,0,0,0-.75,3.31l21.55,21.55a4,4,0,0,0,3.88,1A192.82,192.82,0,0,1,255.66,128c40.69,0,80.58,12.43,118.55,37,34.71,22.4,65.74,53.88,89.76,91a.13.13,0,0,1,0,.16,310.72,310.72,0,0,1-64.12,72.73,2,2,0,0,0-.15,2.95l19.9,19.89a2,2,0,0,0,2.7.13,343.49,343.49,0,0,0,68.64-78.48A32.2,32.2,0,0,0,490.84,238.6Z" />
      <path d="M256,160a95.88,95.88,0,0,0-21.37,2.4,2,2,0,0,0-1,3.38L346.22,278.34a2,2,0,0,0,3.38-1A96,96,0,0,0,256,160Z" />
      <path d="M165.78,233.66a2,2,0,0,0-3.38,1,96,96,0,0,0,115,115,2,2,0,0,0,1-3.38Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <rect x="240.44" y="0.03" width="31.11" height="511.95" transform="translate(-106.04 256) rotate(-45)" />
      <path d="M259.34,192.09l60.57,60.57A64.07,64.07,0,0,0,259.34,192.09Z" />
      <path d="M252.66,319.91l-60.57-60.57A64.07,64.07,0,0,0,252.66,319.91Z" />
      <path d="M256,352a96,96,0,0,1-92.6-121.34L94.33,161.58C66.12,187.42,39.24,221.14,16,256c26.42,44,62.56,89.24,100.2,115.18C159.38,400.92,206.33,416,255.76,416A233.47,233.47,0,0,0,335,402.2l-53.61-53.6A95.84,95.84,0,0,1,256,352Z" />
      <path d="M256,160a96,96,0,0,1,92.6,121.34L419.26,352c29.15-26.25,56.07-61.56,76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1,111.2,304.31,96,255.76,96a222.92,222.92,0,0,0-78.21,14.29l53.11,53.11A95.84,95.84,0,0,1,256,160Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M432,448a15.92,15.92,0,0,1-11.31-4.69l-352-352A16,16,0,0,1,91.31,68.69l352,352A16,16,0,0,1,432,448Z" />
      <path d="M248,315.85l-51.79-51.79a2,2,0,0,0-3.39,1.69,64.11,64.11,0,0,0,53.49,53.49A2,2,0,0,0,248,315.85Z" />
      <path d="M264,196.15,315.87,248a2,2,0,0,0,3.4-1.69,64.13,64.13,0,0,0-53.55-53.55A2,2,0,0,0,264,196.15Z" />
      <path d="M491,273.36a32.2,32.2,0,0,0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349,110.55,302,96,255.68,96a226.54,226.54,0,0,0-71.82,11.79,4,4,0,0,0-1.56,6.63l47.24,47.24a4,4,0,0,0,3.82,1.05,96,96,0,0,1,116,116,4,4,0,0,0,1.05,3.81l67.95,68a4,4,0,0,0,5.4.24A343.81,343.81,0,0,0,491,273.36Z" />
      <path d="M256,352a96,96,0,0,1-93.3-118.63,4,4,0,0,0-1.05-3.81L94.81,162.69a4,4,0,0,0-5.41-.23c-24.39,20.81-47,46.13-67.67,75.72a31.92,31.92,0,0,0-.64,35.54c26.41,41.33,60.39,76.14,98.28,100.65C162.06,402,207.92,416,255.68,416a238.22,238.22,0,0,0,72.64-11.55,4,4,0,0,0,1.61-6.64l-47.47-47.46a4,4,0,0,0-3.81-1.05A96,96,0,0,1,256,352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M255.66,112c-77.94,0-157.89,45.11-220.83,135.33a16,16,0,0,0-.27,17.77C82.92,340.8,161.8,400,255.66,400,348.5,400,429,340.62,477.45,264.75a16.14,16.14,0,0,0,0-17.47C428.89,172.28,347.8,112,255.66,112Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="256" r="80" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <circle cx="256" cy="256" r="64" />
      <path d="M394.82,141.18C351.1,111.2,304.31,96,255.76,96c-43.69,0-86.28,13-126.59,38.48C88.52,160.23,48.67,207,16,256c26.42,44,62.56,89.24,100.2,115.18C159.38,400.92,206.33,416,255.76,416c49,0,95.85-15.07,139.3-44.79C433.31,345,469.71,299.82,496,256,469.62,212.57,433.1,167.44,394.82,141.18ZM256,352a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <circle cx="256" cy="256" r="64" />
      <path d="M490.84,238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349,110.55,302,96,255.66,96c-42.52,0-84.33,12.15-124.27,36.11C90.66,156.54,53.76,192.23,21.71,238.18a31.92,31.92,0,0,0-.64,35.54c26.41,41.33,60.4,76.14,98.28,100.65C162,402,207.9,416,255.66,416c46.71,0,93.81-14.43,136.2-41.72,38.46-24.77,72.72-59.66,99.08-100.92A32.2,32.2,0,0,0,490.84,238.6ZM256,352a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M262.51,204.22,70,396.69C57.56,409.15,48,464,48,464s54.38-9.09,67.31-22L307.8,249.51" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="211.72" y="172.19" width="192.15" height="64.05" rx="32.03" ry="32.03" transform="translate(234.54 -157.83) rotate(45)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M289.91,141s20.57,8.57,37.22-8.08L381.8,62.29c18.5-19.41,49.26-18.69,67.94,0h0c18.68,18.68,19.34,48.81,0,67.93l-70.68,54.67c-15.65,15.65-8.08,37.22-8.08,37.22" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M115.31,442s-26.48,17.34-44.56-.73S70,396.69,70,396.69" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M480,96.22a63.84,63.84,0,0,0-18.95-45.61,65,65,0,0,0-45.71-19h-.76a61.78,61.78,0,0,0-44.22,19.09l-74.88,74.88L261.6,91.72l-34.07,33.91-33.85,34,44,44L32,409.37V480h70.63l205.7-205.71L352,317.94l11.31-11.19c.11-.1,10.42-10.31,22.79-22.68l33.85-34-33.89-33.89L461,141.23A63.18,63.18,0,0,0,480,96.22ZM245,292.35,219.65,267l40.68-40.69,25.38,25.38Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M461.05,51a65,65,0,0,0-45.71-19h-.76a61.81,61.81,0,0,0-44.36,19.25,12.81,12.81,0,0,0-1.07,1.25l-54,69.76c-5.62,7.1-12.74,8.68-16.78,4.64L296.47,125a48,48,0,0,0-67.92,67.92l9.91,9.91a2,2,0,0,1,0,2.83L58.7,385.38C54,390.05,46.9,399.85,38.85,431c-4.06,15.71-6.51,29.66-6.61,30.24A16,16,0,0,0,48,480a15.68,15.68,0,0,0,2.64-.22c.58-.1,14.44-2.43,30.13-6.44,31.07-7.94,41.05-15.24,45.85-20L306.39,273.55a2,2,0,0,1,2.82,0l9.92,9.92a48,48,0,0,0,67.92-67.93L385.46,214c-5-5-2.52-12.11,4.32-17.14l69.75-53.94A17.82,17.82,0,0,0,461,141.6a63.2,63.2,0,0,0,19-45A63.88,63.88,0,0,0,461.05,51ZM250.78,283.9c-2.92,2.92-16.18,7.92-23.39.71s-2.24-20.42.69-23.35l33-33a2,2,0,0,1,2.83,0l19.84,19.83a2,2,0,0,1,0,2.83Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M322,416c0,35.35-20.65,64-56,64H134c-35.35,0-56-28.65-56-64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M336,336c17.67,0,32,17.91,32,40h0c0,22.09-14.33,40-32,40H64c-17.67,0-32-17.91-32-40h0c0-22.09,14.33-40,32-40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M344,336H179.31a8,8,0,0,0-5.65,2.34l-26.83,26.83a4,4,0,0,1-5.66,0l-26.83-26.83a8,8,0,0,0-5.65-2.34H56a24,24,0,0,1-24-24h0a24,24,0,0,1,24-24H344a24,24,0,0,1,24,24h0A24,24,0,0,1,344,336Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M64,276v-.22c0-55,45-83.78,100-83.78h72c55,0,100,29,100,84v-.22" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="241" y1="112" x2="248.44" y2="175.97" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M256,480H395.31a32,32,0,0,0,31.91-29.61L463,112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="368 112 384 48 431 32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="224" y1="112" x2="480" y2="112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M384,352H184.36l-41,35-41-35H16v24c0,30.59,21.13,55.51,47.26,56,2.43,15.12,8.31,28.78,17.16,39.47C93.51,487.28,112.54,496,134,496H266c21.46,0,40.49-8.72,53.58-24.55,8.85-10.69,14.73-24.35,17.16-39.47,13.88-.25,26.35-7.4,35-18.63A61.26,61.26,0,0,0,384,376Z" />
      <path d="M105,320h0l38.33,28.19L182,320H384v-8a40.07,40.07,0,0,0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67,184.56,267.85,176,236,176H164c-68.22,0-114.43,38.77-116,96.8A40.07,40.07,0,0,0,16,312v8h89Z" />
      <path d="M463.08,96H388.49l8.92-35.66L442,45,432,16,370,36,355.51,96H208v32h18.75l1.86,16H236c39,0,73.66,10.9,100.12,31.52A121.9,121.9,0,0,1,371,218.07a124.16,124.16,0,0,1,10.73,32.65,72,72,0,0,1,27.89,90.9A96,96,0,0,1,416,376c0,22.34-7.6,43.63-21.4,59.95a80,80,0,0,1-31.83,22.95,109.21,109.21,0,0,1-18.53,33c-1.18,1.42-2.39,2.81-3.63,4.15H416c16,0,23-8,25-23l36.4-345H496V96Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M368,128h.09" />
      <path d="M479.55,96H388.49l8.92-35.66,38.32-13.05c8.15-2.77,13-11.43,10.65-19.71a16,16,0,0,0-20.54-10.73l-47,16a16,16,0,0,0-10.36,11.27L355.51,96H224.45c-8.61,0-16,6.62-16.43,15.23A16,16,0,0,0,224,128h2.75l1,8.66A8.3,8.3,0,0,0,236,144h0c39,0,73.66,10.9,100.12,31.52A121.9,121.9,0,0,1,371,218.07a123.4,123.4,0,0,1,10.12,29.51,7.83,7.83,0,0,0,3.29,4.88,72,72,0,0,1,26.38,86.43,7.92,7.92,0,0,0-.15,5.53A96,96,0,0,1,416,376c0,22.34-7.6,43.63-21.4,59.95a80.12,80.12,0,0,1-28.78,21.67,8,8,0,0,0-4.21,4.37,108.19,108.19,0,0,1-17.37,29.86l0,0a2.5,2.5,0,0,0,1.9,4.11h49.21a48.22,48.22,0,0,0,47.85-44.14L477.4,128H480a16,16,0,0,0,16-16.77C495.58,102.62,488.16,96,479.55,96Z" />
      <path d="M108.69,320a23.87,23.87,0,0,1,17,7l15.51,15.51a4,4,0,0,0,5.66,0L162.34,327a23.87,23.87,0,0,1,17-7H375.92a8,8,0,0,0,8.08-7.92V312a40.07,40.07,0,0,0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67,184.56,267.85,176,236,176H164c-68.22,0-114.43,38.77-116,96.8A40.07,40.07,0,0,0,16,312h0a8,8,0,0,0,8,8Z" />
      <path d="M185.94,352a8,8,0,0,0-5.66,2.34l-22.14,22.15a20,20,0,0,1-28.28,0l-22.14-22.15a8,8,0,0,0-5.66-2.34H32.66A15.93,15.93,0,0,0,16.9,365.17,65.22,65.22,0,0,0,16,376c0,30.59,21.13,55.51,47.26,56,2.43,15.12,8.31,28.78,17.16,39.47C93.51,487.28,112.54,496,134,496H266c21.46,0,40.49-8.72,53.58-24.55,8.85-10.69,14.73-24.35,17.16-39.47,26.13-.47,47.26-25.39,47.26-56a65.22,65.22,0,0,0-.9-10.83A15.93,15.93,0,0,0,367.34,352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>female-outline</title>
      <circle cx="256" cy="184" r="152" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="256" y1="336" x2="256" y2="480" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="314" y1="416" x2="198" y2="416" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M430,190c0-95.94-78.06-174-174-174S82,94.06,82,190c0,88.49,66.4,161.77,152,172.61V394H176v44h58v58h44V438h58V394H278V362.61C363.6,351.77,430,278.49,430,190Zm-304,0c0-71.68,58.32-130,130-130s130,58.32,130,130S327.68,320,256,320,126,261.68,126,190Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M430,190c0-95.94-78.06-174-174-174S82,94.06,82,190c0,88.49,66.4,161.77,152,172.61V394H198a22,22,0,0,0,0,44h36v36a22,22,0,0,0,44,0V438h36a22,22,0,0,0,0-44H278V362.61C363.6,351.77,430,278.49,430,190Zm-304,0c0-71.68,58.32-130,130-130s130,58.32,130,130S327.68,320,256,320,126,261.68,126,190Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M384,80H128c-26,0-43,14-48,40L48,272V384a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V272L432,120C427,93,409,80,384,80Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="48" y1="272" x2="192" y2="272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="320" y1="272" x2="464" y2="272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M192,272a64,64,0,0,0,128,0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="144" y1="144" x2="368" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="128" y1="208" x2="384" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <rect x="128" y="128" width="256" height="38" />
      <rect x="112" y="192" width="288" height="38" />
      <path d="M448,64H64L32,256V448H480V256ZM436,256H320a64,64,0,0,1-128,0H76L98,106H414Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M479.66,268.7l-32-151.81C441.48,83.77,417.68,64,384,64H128c-16.8,0-31,4.69-42.1,13.94s-18.37,22.31-21.58,38.89l-32,151.87A16.65,16.65,0,0,0,32,272V384a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V272A16.65,16.65,0,0,0,479.66,268.7Zm-384-145.4c0-.1,0-.19,0-.28,3.55-18.43,13.81-27,32.29-27H384c18.61,0,28.87,8.55,32.27,26.91,0,.13.05.26.07.39l26.93,127.88a4,4,0,0,1-3.92,4.82H320a15.92,15.92,0,0,0-16,15.82,48,48,0,1,1-96,0A15.92,15.92,0,0,0,192,256H72.65a4,4,0,0,1-3.92-4.82Z" />
      <path d="M368,160H144a16,16,0,0,1,0-32H368a16,16,0,0,1,0,32Z" />
      <path d="M384,224H128a16,16,0,0,1,0-32H384a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M384,80H128c-26,0-43,14-48,40L48,272V384a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V272L432,120C427,93,409,80,384,80Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="48" y1="272" x2="192" y2="272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="320" y1="272" x2="464" y2="272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M192,272a64,64,0,0,0,128,0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M448,64H64L32,256V448H480V256ZM436,256H320a64,64,0,0,1-128,0H76L98,106H414Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M48,336v96a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V336" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="48" y1="336" x2="192" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="320" y1="336" x2="464" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M192,336a64,64,0,0,0,128,0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384,32H128c-26,0-43,14-48,40L48,192v96a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V192L432,72C427,45,409,32,384,32Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="48" y1="192" x2="192" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="320" y1="192" x2="464" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M192,192a64,64,0,0,0,128,0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M448,16H64L32,176V320H480V176ZM436,176H320a64,64,0,0,1-128,0H76L98,58H414Z" />
      <path d="M320,352a64,64,0,0,1-128,0H32V496H480V352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M464,352H320a16,16,0,0,0-16,16,48,48,0,0,1-96,0,16,16,0,0,0-16-16H48a16,16,0,0,0-16,16v64a64.07,64.07,0,0,0,64,64H416a64.07,64.07,0,0,0,64-64V368A16,16,0,0,0,464,352Z" />
      <path d="M479.46,187.88,447.61,68.45C441.27,35.59,417.54,16,384,16H128c-16.8,0-31,4.69-42.1,13.94S67.66,52,64.4,68.4L32.54,187.88A15.9,15.9,0,0,0,32,192v48c0,35.29,28.71,80,64,80H416c35.29,0,64-44.71,64-80V192A15.9,15.9,0,0,0,479.46,187.88ZM440.57,176H320a15.92,15.92,0,0,0-16,15.82,48,48,0,1,1-96,0A15.92,15.92,0,0,0,192,176H71.43a2,2,0,0,1-1.93-2.52L95.71,75C99.26,56.59,109.52,48,128,48H384c18.59,0,28.84,8.53,32.25,26.85l26.25,98.63A2,2,0,0,1,440.57,176Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M479.66,268.7l-32-151.81C441.48,83.77,417.68,64,384,64H128c-16.8,0-31,4.69-42.1,13.94s-18.37,22.31-21.58,38.89l-32,151.87A16.65,16.65,0,0,0,32,272V384a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V272A16.65,16.65,0,0,0,479.66,268.7Zm-384-145.4c0-.1,0-.19,0-.28,3.55-18.43,13.81-27,32.29-27H384c18.61,0,28.87,8.55,32.27,26.91,0,.13.05.26.07.39l26.93,127.88a4,4,0,0,1-3.92,4.82H320a15.92,15.92,0,0,0-16,15.82,48,48,0,1,1-96,0A15.92,15.92,0,0,0,192,256H72.65a4,4,0,0,1-3.92-4.82Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <rect x="48" y="96" width="416" height="320" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="384" y="336" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="384" y="256" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="384" y="176" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="384" y="96" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="48" y="336" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="48" y="256" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="48" y="176" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="48" y="96" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="128" y="96" width="256" height="160" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="128" y="256" width="256" height="160" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M480,80H32V432H480ZM112,352v48H64V352Zm0-80v48H64V272Zm0-80v48H64V192Zm0-80v48H64V112ZM368,272H144V240H368Zm80,80v48H400V352Zm0-80v48H400V272Zm0-80v48H400V192Zm0-80v48H400V112Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M436,80H76a44.05,44.05,0,0,0-44,44V388a44.05,44.05,0,0,0,44,44H436a44.05,44.05,0,0,0,44-44V124A44.05,44.05,0,0,0,436,80ZM112,388a12,12,0,0,1-12,12H76a12,12,0,0,1-12-12V364a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H76a12,12,0,0,1-12-12V284a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H76a12,12,0,0,1-12-12V204a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H76a12,12,0,0,1-12-12V124a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12ZM353.68,272H158.32a16,16,0,0,1,0-32H353.68a16,16,0,1,1,0,32ZM448,388a12,12,0,0,1-12,12H412a12,12,0,0,1-12-12V364a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H412a12,12,0,0,1-12-12V284a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H412a12,12,0,0,1-12-12V204a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Zm0-80a12,12,0,0,1-12,12H412a12,12,0,0,1-12-12V124a12,12,0,0,1,12-12h24a12,12,0,0,1,12,12Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="none" stroke="#000" stroke-width="32" stroke-miterlimit="10" d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" />
      <line fill="none" stroke="#000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" x1="144" y1="208" x2="368" y2="208" />
      <line fill="none" stroke="#000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" x1="176" y1="272" x2="336" y2="272" />
      <line fill="none" stroke="#000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" x1="224" y1="336" x2="288" y2="336" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm48,304H208V320h96Zm48-64H160V256H352Zm32-64H128V192H384Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm32,304H224a16,16,0,0,1,0-32h64a16,16,0,0,1,0,32Zm48-64H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Zm32-64H144a16,16,0,0,1,0-32H368a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <line x1="32" y1="144" x2="480" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="256" x2="400" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="208" y1="368" x2="304" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <rect x="16" y="120" width="480" height="48" />
      <rect x="96" y="232" width="320" height="48" />
      <rect x="192" y="344" width="128" height="48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z" />
      <path d="M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z" />
      <path d="M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M390.42,75.28a10.45,10.45,0,0,1-5.32-1.44C340.72,50.08,302.35,40,256.35,40c-45.77,0-89.23,11.28-128.76,33.84C122,77,115.11,74.8,111.87,69a12.4,12.4,0,0,1,4.63-16.32A281.81,281.81,0,0,1,256.35,16c49.23,0,92.23,11.28,139.39,36.48a12,12,0,0,1,4.85,16.08A11.3,11.3,0,0,1,390.42,75.28Zm-330.79,126a11.73,11.73,0,0,1-6.7-2.16,12.26,12.26,0,0,1-2.78-16.8c22.89-33.6,52-60,86.69-78.48C209.42,65,302.35,64.72,375.16,103.6c34.68,18.48,63.8,44.64,86.69,78a12.29,12.29,0,0,1-2.78,16.8,11.26,11.26,0,0,1-16.18-2.88c-20.8-30.24-47.15-54-78.36-70.56-66.34-35.28-151.18-35.28-217.29.24-31.44,16.8-57.79,40.8-78.59,71A10,10,0,0,1,59.63,201.28ZM204.1,491a10.66,10.66,0,0,1-8.09-3.6C175.9,466.48,165,453,149.55,424c-16-29.52-24.27-65.52-24.27-104.16,0-71.28,58.71-129.36,130.84-129.36S387,248.56,387,319.84a11.56,11.56,0,1,1-23.11,0c0-58.08-48.32-105.36-107.72-105.36S148.4,261.76,148.4,319.84c0,34.56,7.39,66.48,21.49,92.4,14.8,27.6,25,39.36,42.77,58.08a12.67,12.67,0,0,1,0,17A12.44,12.44,0,0,1,204.1,491Zm165.75-44.4c-27.51,0-51.78-7.2-71.66-21.36a129.1,129.1,0,0,1-55-105.36,11.57,11.57,0,1,1,23.12,0,104.28,104.28,0,0,0,44.84,85.44c16.41,11.52,35.6,17,58.72,17a147.41,147.41,0,0,0,24-2.4c6.24-1.2,12.25,3.12,13.4,9.84a11.92,11.92,0,0,1-9.47,13.92A152.28,152.28,0,0,1,369.85,446.56ZM323.38,496a13,13,0,0,1-3-.48c-36.76-10.56-60.8-24.72-86-50.4-32.37-33.36-50.16-77.76-50.16-125.28,0-38.88,31.9-70.56,71.19-70.56s71.2,31.68,71.2,70.56c0,25.68,21.5,46.56,48.08,46.56s48.08-20.88,48.08-46.56c0-90.48-75.13-163.92-167.59-163.92-65.65,0-125.75,37.92-152.79,96.72-9,19.44-13.64,42.24-13.64,67.2,0,18.72,1.61,48.24,15.48,86.64,2.32,6.24-.69,13.2-6.7,15.36a11.34,11.34,0,0,1-14.79-7,276.39,276.39,0,0,1-16.88-95c0-28.8,5.32-55,15.72-77.76,30.75-67,98.94-110.4,173.6-110.4,105.18,0,190.71,84.24,190.71,187.92,0,38.88-31.9,70.56-71.2,70.56s-71.2-31.68-71.2-70.56C303.5,293.92,282,273,255.42,273s-48.08,20.88-48.08,46.56c0,41,15.26,79.44,43.23,108.24,22,22.56,43,35,75.59,44.4,6.24,1.68,9.71,8.4,8.09,14.64A11.39,11.39,0,0,1,323.38,496Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M56.79,200.58l12.36,7.5L76.5,194.5C93.07,166.75,143.78,102,256,102,371,102,420,172.32,436.1,195.46l8.16,12.7L469.88,192l-8.54-13.36c-8.88-12.85-27.52-39.53-60.78-63.1C360.15,86.82,311.5,72.25,256,72.25c-128.07,0-186.69,75.11-206,107.25L42.63,192,54,198.86a14.09,14.09,0,0,0,1.63,1.1A12.57,12.57,0,0,0,56.79,200.58Z" />
      <path d="M379.22,172.32C343.68,143.39,301.1,128.07,256,128.07c-97.52,0-162.31,66-183.33,131.47C53.42,320,76.82,407.61,77.8,411.36l4.38,13.81,29.93-6.43-4.74-15c-.21-.75-22.1-82.93-5.41-135.21,9-28.08,27.73-55.4,51.35-74.79C181.81,170.39,217.35,158,256,158c90.58,0,141.93,70.61,156.45,108.11,11.27,28.93,8.67,61.82-6.28,82-5.53,7.39-15.28,16.07-30.12,15.32-33.81-1.72-39.66-18.43-47.79-50.25-3.9-15.32-7.9-31.18-17.87-44-12.14-15.75-29.8-23.36-54.28-23.36-26.33,0-46.27,8.68-59.38,25.72-28.6,37.28-10,100.93-9.21,103.61l.22.85c1.41,3.86,36.08,96.65,128.93,119.68l14.77,3.21,8.09-28.71-15.27-3.43c-74.22-18.43-105.21-94.39-107.59-100.39a152.44,152.44,0,0,1-5.1-29.79c-1.08-14.46-.32-34.39,9.43-47.14,7.15-9.32,18.64-13.82,35-13.82,29.79,0,34.78,14.57,42.58,44.79,7.58,29.46,18,69.85,75.84,72.75,22.21,1.07,42.26-8.79,56.34-27.65,21.13-28.28,25.14-71.57,10.19-110.14C429.27,225,406.74,194.82,379.22,172.32Z" />
      <path d="M154.18,343.21c-3.47-28.28,1.41-71,26.55-98.78,17.44-19.29,42.79-29,75.19-29,37.49,0,65.87,16.72,84.51,49.61a154,154,0,0,1,17.88,53.25l1.43,14.69,30-2.2a112.63,112.63,0,0,0-1-15.6c-.11-1.28-3.57-32.46-21-63.75C343.68,208.32,305.11,185.5,256,185.5c-41.5,0-74.55,13.18-98.06,39.11-31.85,35.14-38.35,86.25-33.91,122.35v.33C132,401.82,153,445.43,190.15,484.43l11.6,11.22,20.95-21.79-10.34-9.79C179.64,429.79,161.11,391.43,154.18,343.21Z" />
      <path d="M132.47,72.66C143.55,65.94,182.74,45.89,256,45.89c87.54,0,126.44,28.72,126.87,28.93l13.9,8.86L413,58.47l-13.22-8.56h0c-.52-.38-1.06-.76-1.6-1.12C385.5,40.54,340.54,16,256,16c-87.71,0-132.75,26.48-143.41,33.71h0L99,58.52l16.2,25.21Z" />
      <path d="M390.59,415.21c-33.37,3.75-60.45-2.67-80.71-18.85-34.24-27.43-38.68-75.11-38.79-76l-1.23-14.88-30.53,2.23,1.31,15c.22,2.46,5.2,60.75,49.62,96.54,22.11,17.89,49.74,26.89,82.24,26.89a187,187,0,0,0,21.56-1.29l16.59-2.09-6.1-29.71Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M63.28,202a15.29,15.29,0,0,1-7.7-2,14.84,14.84,0,0,1-5.52-20.46C69.34,147.36,128,72.25,256,72.25c55.47,0,104.12,14.57,144.53,43.29,33.26,23.57,51.9,50.25,60.78,63.1a14.79,14.79,0,0,1-4,20.79,15.52,15.52,0,0,1-21.24-4C420,172.32,371,102,256,102c-112.25,0-163,64.71-179.53,92.46A15,15,0,0,1,63.28,202Z" />
      <path d="M320.49,496a15.31,15.31,0,0,1-3.79-.43c-92.85-23-127.52-115.82-128.93-119.68l-.22-.85c-.76-2.68-19.39-66.33,9.21-103.61,13.11-17,33.05-25.72,59.38-25.72,24.48,0,42.14,7.61,54.28,23.36,10,12.86,14,28.72,17.87,44,8.13,31.82,14,48.53,47.79,50.25,14.84.75,24.59-7.93,30.12-15.32,14.95-20.15,17.55-53,6.28-82C398,228.57,346.61,158,256,158c-38.68,0-74.22,12.43-102.72,35.79C129.69,213.14,111,240.46,102,268.54c-16.69,52.28,5.2,134.46,5.41,135.21A14.83,14.83,0,0,1,96.54,422a15.39,15.39,0,0,1-18.74-10.6c-1-3.75-24.38-91.4-5.1-151.82,21-65.47,85.81-131.47,183.33-131.47,45.07,0,87.65,15.32,123.19,44.25,27.52,22.5,50,52.72,61.76,82.93,14.95,38.57,10.94,81.86-10.19,110.14-14.08,18.86-34.13,28.72-56.34,27.65-57.86-2.9-68.26-43.29-75.84-72.75-7.8-30.22-12.79-44.79-42.58-44.79-16.36,0-27.85,4.5-35,13.82-9.75,12.75-10.51,32.68-9.43,47.14a152.44,152.44,0,0,0,5.1,29.79c2.38,6,33.37,82,107.59,100.39a14.88,14.88,0,0,1,11,18.11A15.36,15.36,0,0,1,320.49,496Z" />
      <path d="M201.31,489.14a15.5,15.5,0,0,1-11.16-4.71c-37.16-39-58.18-82.61-66.09-137.14V347c-4.44-36.1,2.06-87.21,33.91-122.35,23.51-25.93,56.56-39.11,98.06-39.11,49.08,0,87.65,22.82,111.7,65.89,17.45,31.29,20.91,62.47,21,63.75a15.07,15.07,0,0,1-13.65,16.4,15.26,15.26,0,0,1-16.79-13.29h0A154,154,0,0,0,340.43,265c-18.64-32.89-47-49.61-84.51-49.61-32.4,0-57.75,9.75-75.19,29-25.14,27.75-30,70.5-26.55,98.78,6.93,48.22,25.46,86.58,58.18,120.86a14.7,14.7,0,0,1-.76,21.11A15.44,15.44,0,0,1,201.31,489.14Z" />
      <path d="M372.5,446.18c-32.5,0-60.13-9-82.24-26.89-44.42-35.79-49.4-94.08-49.62-96.54a15.27,15.27,0,0,1,30.45-2.36c.11.86,4.55,48.54,38.79,76,20.26,16.18,47.34,22.6,80.71,18.85a15.2,15.2,0,0,1,16.91,13.18,14.92,14.92,0,0,1-13.44,16.5A187,187,0,0,1,372.5,446.18Z" />
      <path d="M398.18,48.79C385.5,40.54,340.54,16,256,16c-88.74,0-133.81,27.11-143.78,34a11.59,11.59,0,0,0-1.84,1.4.36.36,0,0,1-.22.1,14.87,14.87,0,0,0-5.09,11.15A15.06,15.06,0,0,0,120.38,77.5a15.56,15.56,0,0,0,8.88-2.79c.43-.32,39.22-28.82,126.77-28.82S382.58,74.29,383,74.5a15.25,15.25,0,0,0,9.21,3A15.06,15.06,0,0,0,407.5,62.61,14.9,14.9,0,0,0,398.18,48.79Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="none" stroke="#000" stroke-width="32" stroke-linejoin="round" d="M240,152c-50.71,12.21-94.15,52.31-120.3,73.43a261.14,261.14,0,0,0-23.81-19.58C59.53,179.29,16,176,16,176s11.37,51.53,41.36,79.83C27.37,284.14,16,335.67,16,335.67s43.53-3.29,79.89-29.85a259.18,259.18,0,0,0,23.61-19.41C145.6,307.55,189.24,347.75,240,360l-16,56c39.43-6.67,78.86-35.51,94.72-48.25C448,362,496,279,496,256c0-22-48-106-176.89-111.73C303.52,131.78,263.76,102.72,224,96Z" />
      <circle cx="416" cy="239.99" r="16" />
      <path fill="none" stroke="#000" stroke-width="32" stroke-linecap="round" stroke-miterlimit="20" d="M378.37,356a199.22,199.22,0,0,1,0-200" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M335.45,256a214.83,214.83,0,0,1,29.08-108l7.62-13.26a280.69,280.69,0,0,0-48.64-7.15c-21.94-16.9-54.64-36.95-92.34-43.33L208,80l13.37,61.86C179.7,156,142.94,184.72,118.61,204.48q-7.06-5.91-14.78-11.55c-39.71-29-82.6-31.8-84.4-31.9L0,160l2.67,19.31c.29,2,6.79,44.73,31.65,76.52C9.46,287.63,3,330.33,2.67,332.36L0,352l19.43-1.36c1.8-.1,44.69-2.89,84.4-31.9q7.58-5.53,14.56-11.37c24.37,19.83,61.14,48.6,102.86,62.74L208,432l23.17-4.22c37.49-6.34,70.08-26.4,92-43.32a284.27,284.27,0,0,0,49.32-7.23l-7.91-13.18A214.92,214.92,0,0,1,335.45,256Z" />
      <path d="M499.59,221.75c-5.85-9.88-16.54-24.9-34.19-40.28a209.82,209.82,0,0,0-62-37L392.23,164a183.22,183.22,0,0,0-.09,183.87l11.75,19.57a209.26,209.26,0,0,0,61.42-36.49C497.05,303.47,512,269,512,256,512,243.69,504,229.26,499.59,221.75ZM416,256a16,16,0,1,1,16-16A16,16,0,0,1,416,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M512,256c0-16.54-14.27-46.76-45.61-74a207.06,207.06,0,0,0-60.28-36.12,3.15,3.15,0,0,0-3.93,1.56c-.15.29-.3.57-.47.86l-9.59,15.9a183.24,183.24,0,0,0,.07,183.78l.23.39,8.74,16a4,4,0,0,0,4.94,1.82C479.63,337.42,512,281.49,512,256Zm-93.92-.14a16,16,0,1,1,13.79-13.79A16,16,0,0,1,418.08,255.86Z" />
      <path d="M335.45,256a214.8,214.8,0,0,1,29.08-108l.12-.21,4.62-7.67a4,4,0,0,0-2.59-6,284.29,284.29,0,0,0-39.26-5.39,7.94,7.94,0,0,1-4.29-1.6c-19.28-14.66-57.5-40.3-96.46-46.89a16,16,0,0,0-18,20.18l10.62,37.17a4,4,0,0,1-2.42,4.84c-36.85,13.69-68.59,38.75-91.74,57.85a8,8,0,0,1-10.06.06q-4.72-3.75-9.69-7.39C65.74,164,19.17,160.19,17.21,160.05A16,16,0,0,0,.38,179.45c.42,1.93,9.19,40.69,31.7,71.61a8.09,8.09,0,0,1,0,9.55C9.57,291.52.8,330.29.38,332.22a16,16,0,0,0,16.83,19.4c2-.14,48.53-4,88.12-32.88q4.85-3.56,9.47-7.22a8,8,0,0,1,10.06.07c23.25,19.19,55.05,44.28,92,58a4,4,0,0,1,2.42,4.83L208.62,411.6a16,16,0,0,0,18,20.18c17.16-2.9,51.88-12.86,96.05-46.83a8.15,8.15,0,0,1,4.36-1.65A287.36,287.36,0,0,0,366.25,378a4,4,0,0,0,2.69-5.83l-4.51-8.29A214.81,214.81,0,0,1,335.45,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="48 256 160 256 208 160 256 320 304 224 336 288 464 288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M480,272H442.66a261.41,261.41,0,0,1-18.25,32H480Z" />
      <path d="M32,240v32H69.34a225.1,225.1,0,0,1-12.4-32Z" />
      <path d="M304,259.78,252.27,363.24l-48-160L169.89,272H69.34c10,20.92,23.5,41.41,40.63,61.68,40.12,47.46,94.25,79.75,137,108.32l9,6,9-6c42.78-28.57,96.91-60.86,137-108.32A322.78,322.78,0,0,0,424.41,304h-98.3Z" />
      <path d="M211.73,116.76l48,160L304,188.22,345.89,272h96.77A213.13,213.13,0,0,0,464,176.65C463.37,114.54,413.54,64,352.92,64c-48.11,0-80.1,28-96.92,48.21C239.18,92,207.19,64,159.08,64,98.46,64,48.63,114.54,48,176.65A211.23,211.23,0,0,0,56.94,240h93.17Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M193.69,152.84a16,16,0,0,1,29.64,2.56l36.4,121.36,30-59.92a16,16,0,0,1,28.62,0L345.89,272h96.76A213.08,213.08,0,0,0,464,176.65C463.37,114.54,413.54,64,352.92,64c-48.09,0-80,29.54-96.92,51-16.88-21.49-48.83-51-96.92-51C98.46,64,48.63,114.54,48,176.65A211.13,211.13,0,0,0,56.93,240h93.18Z" />
      <path d="M321.69,295.16,304,259.78l-33.69,67.38A16,16,0,0,1,256,336q-.67,0-1.38-.06a16,16,0,0,1-14-11.34l-36.4-121.36-30,59.92A16,16,0,0,1,160,272H69.35q14,29.29,37.27,57.66c18.77,22.88,52.8,59.46,131.39,112.81a31.84,31.84,0,0,0,36,0c78.59-53.35,112.62-89.93,131.39-112.81a316.79,316.79,0,0,0,19-25.66H336A16,16,0,0,1,321.69,295.16Z" />
      <path d="M464,272H442.65a260.11,260.11,0,0,1-18.25,32H464a16,16,0,0,0,0-32Z" />
      <path d="M48,240a16,16,0,0,0,0,32H69.35a225.22,225.22,0,0,1-12.42-32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M80,464V68.14a8,8,0,0,1,4-6.9C91.81,56.66,112.92,48,160,48c64,0,145,48,192,48a199.53,199.53,0,0,0,77.23-15.77A2,2,0,0,1,432,82.08V301.44a4,4,0,0,1-2.39,3.65C421.37,308.7,392.33,320,352,320c-48,0-128-32-192-32s-80,16-80,16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M102,480H64V57.37l4.69-4.68C72.14,49.23,92.78,32,160,32c37.21,0,78.83,14.71,115.55,27.68C305.12,70.13,333.05,80,352,80c42.83,0,72.72-14.25,73-14.4l23-11.14V313.89l-8.84,4.42C437.71,319,403.19,336,352,336c-24.14,0-54.38-7.14-86.39-14.71C229.63,312.79,192.43,304,160,304c-36.87,0-49.74,5.58-58,9.11Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M80,480a16,16,0,0,1-16-16V68.13A24,24,0,0,1,75.9,47.41C88,40.38,112.38,32,160,32c37.21,0,78.83,14.71,115.55,27.68C305.12,70.13,333.05,80,352,80a183.84,183.84,0,0,0,71-14.5,18,18,0,0,1,25,16.58V301.44a20,20,0,0,1-12,18.31c-8.71,3.81-40.51,16.25-84,16.25-24.14,0-54.38-7.14-86.39-14.71C229.63,312.79,192.43,304,160,304c-36.87,0-55.74,5.58-64,9.11V464A16,16,0,0,1,80,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M112,320c0-93,124-165,96-272,66,0,192,96,192,272a144,144,0,0,1-288,0Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,368c0,57.71-32,80-64,80s-64-22.29-64-80,40-86,32-128C266,240,320,310.29,320,368Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M394.24,197.56a300.67,300.67,0,0,0-53.38-90C301.2,61.65,240,32,192,32c19,70-14.36,117.12-44.79,163.77C122,234.36,96,274.27,96,320c0,88.22,71.78,160,160,160s160-71.78,160-160C416,276.7,408.68,235.51,394.24,197.56ZM288.33,418.69C278,429.69,265.05,432,256,432s-22-2.31-32.33-13.31S208,390.24,208,368c0-25.14,8.82-44.28,17.34-62.78,6.48-14.07,14.66-27.22,15.11-44.49,11.3,5.88,23.67,16.91,34.54,31.28,18.17,24,29,52.42,29,76C304,390.24,298.58,407.77,288.33,418.69Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M394.23,197.56a300.43,300.43,0,0,0-53.37-90C301.2,61.65,249.05,32,208,32a16,16,0,0,0-15.48,20c13.87,53-14.88,97.07-45.31,143.72C122,234.36,96,274.27,96,320c0,88.22,71.78,160,160,160s160-71.78,160-160C416,276.7,408.68,235.51,394.23,197.56ZM288.33,418.69C278,429.69,265.05,432,256,432s-22-2.31-32.33-13.31S208,390.24,208,368c0-25.14,8.82-44.28,17.34-62.78,4.95-10.74,10-21.67,13-33.37a8,8,0,0,1,12.49-4.51A126.48,126.48,0,0,1,275,292c18.17,24,29,52.42,29,76C304,390.24,298.58,407.77,288.33,418.69Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M432,448a15.92,15.92,0,0,1-11.31-4.69l-352-352A16,16,0,0,1,91.31,68.69l352,352A16,16,0,0,1,432,448Z" />
      <path d="M294.34,84.28,272.26,205.12a16,16,0,0,0,6.17,15.71,16.49,16.49,0,0,0,9.93,3.17h94.12l-38.37,47.42a4,4,0,0,0,.28,5.34l17.07,17.07a4,4,0,0,0,5.94-.31l60.8-75.16A16.37,16.37,0,0,0,431.5,204,16,16,0,0,0,416,192H307.19L335.4,37.63c.05-.3.1-.59.13-.89A18.45,18.45,0,0,0,302.73,23L210.15,137.46a4,4,0,0,0,.28,5.35l17.07,17.06a4,4,0,0,0,5.94-.31Z" />
      <path d="M217.78,427.57l22-120.71a16,16,0,0,0-6.19-15.7,16.54,16.54,0,0,0-9.92-3.16h-94.1l38.36-47.42a4,4,0,0,0-.28-5.34l-17.07-17.07a4,4,0,0,0-5.93.31L83.8,293.64A16.37,16.37,0,0,0,80.5,308,16,16,0,0,0,96,320H204.83L176.74,474.36l0,.11A18.37,18.37,0,0,0,209.24,489l92.61-114.46a4,4,0,0,0-.28-5.35L284.5,352.13a4,4,0,0,0-5.94.31Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <rect x="240.44" y="0.03" width="31.11" height="511.95" transform="translate(-106.04 256) rotate(-45)" />
      <polygon points="80 304 224 304 192 496 300.18 366.18 151.82 217.82 80 304" />
      <polygon points="432 208 288 208 320 16 211.82 145.82 360.18 294.18 432 208" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M432,448a15.92,15.92,0,0,1-11.31-4.69l-352-352A16,16,0,0,1,91.31,68.69l352,352A16,16,0,0,1,432,448Z" />
      <path d="M431.5,204A16,16,0,0,0,416,192H307.19L335.4,37.63c.05-.3.1-.59.13-.89A18.45,18.45,0,0,0,302.73,23L210.15,137.46a4,4,0,0,0,.29,5.35l151,151a4,4,0,0,0,5.94-.31l60.8-75.16A16.37,16.37,0,0,0,431.5,204Z" />
      <path d="M301.57,369.19l-151-151a4,4,0,0,0-5.93.31L83.8,293.64A16.37,16.37,0,0,0,80.5,308,16,16,0,0,0,96,320H204.83L176.74,474.36l0,.11A18.37,18.37,0,0,0,209.24,489l92.61-114.46A4,4,0,0,0,301.57,369.19Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M315.27,33,96,304H224L192.49,477.23a2.36,2.36,0,0,0,2.33,2.77h0a2.36,2.36,0,0,0,1.89-.95L416,208H288L319.66,34.75A2.45,2.45,0,0,0,317.22,32h0A2.42,2.42,0,0,0,315.27,33Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M432,208H288L320,16,80,304H224L192,496Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M194.82,496a18.36,18.36,0,0,1-18.1-21.53l0-.11L204.83,320H96a16,16,0,0,1-12.44-26.06L302.73,23a18.45,18.45,0,0,1,32.8,13.71c0,.3-.08.59-.13.89L307.19,192H416a16,16,0,0,1,12.44,26.06L209.24,489A18.45,18.45,0,0,1,194.82,496Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M456.64,162.86,349.12,55.36c-13.15-13.14-28.68-7.17-41.82,6l-11.95,12c-26.13,26.13-27.62,58.38-29.42,83.31-.89,12.24-9.78,27.55-18.51,36.28L58.58,381.67C42.23,398,45.89,421.09,62.31,437.51l12.17,12.17c16.36,16.35,39.43,20.16,55.86,3.74l188.83-188.8c8.74-8.74,24-17.55,36.29-18.52,24.87-1.86,58.62-4.85,83.26-29.49l11.94-11.94C463.81,191.53,469.78,176,456.64,162.86Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="224.68" cy="287.28" r="20" />
      <line x1="289" y1="81" x2="431" y2="223" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <polygon points="330 16 287.32 58.7 453.3 224.68 496 182 330 16" />
      <ellipse cx="224.68" cy="287.3" rx="20.03" ry="19.96" style="fill:none" />
      <path d="M429.21,243.85,268,82.59,249.65,168,16,402l94,94L344.23,262.2Zm-189,56.07a20,20,0,1,1,0-25.25A20,20,0,0,1,240.19,299.92Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M462,216c9.35-9.35,15.14-19.09,17.19-28.95,2.7-12.95-1.29-25.55-11.22-35.48L360.43,44.05C346.29,29.92,322,24.07,296,50l-2,2a8,8,0,0,0,0,11.32L448.64,218A8,8,0,0,0,460,218Z" />
      <path d="M250.14,153.08l-.16,2.34c-.53,7.18-6.88,19.15-13.88,26.14L47.27,370.36c-11.12,11.11-16.46,25.57-15.05,40.7C33.49,424.58,40.16,438,51,448.83L63.17,461c12.61,12.6,27.78,19,42.49,19a50.4,50.4,0,0,0,36-15.24l188.84-188.8c7.07-7.07,18.84-13.3,26.17-13.87,17.48-1.32,43.57-3.28,67.79-15.65a4,4,0,0,0,1-6.37L271.69,86.31a4,4,0,0,0-6.39,1C253.18,110.3,251.48,134.22,250.14,153.08Zm-9.95,146.83a20,20,0,1,1,0-25.25A20,20,0,0,1,240.19,299.91Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <line x1="176" y1="48" x2="336" y2="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="118" y1="304" x2="394" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M208,48v93.48a64.09,64.09,0,0,1-9.88,34.18L73.21,373.49C48.4,412.78,76.63,464,123.08,464H388.92c46.45,0,74.68-51.22,49.87-90.51L313.87,175.66A64.09,64.09,0,0,1,304,141.48V48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M469.11,382.76,325,153.92V74h32V32H155V74h32v79.92L42.89,382.76c-13,20.64-14.78,43.73-3,65.1S71.59,480,96,480H416c24.41,0,44.32-10.76,56.1-32.14S482.14,403.4,469.11,382.76ZM224.39,173.39a29.76,29.76,0,0,0,4.62-16V74h54v84.59a25.85,25.85,0,0,0,4,13.82L356.82,283H155.18Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M452.32,365,327.4,167.12A48.07,48.07,0,0,1,320,141.48V64h15.56c8.61,0,16-6.62,16.43-15.23A16,16,0,0,0,336,32H176.45c-8.61,0-16,6.62-16.43,15.23A16,16,0,0,0,176,64h16v77.48a47.92,47.92,0,0,1-7.41,25.63L59.68,365a74,74,0,0,0-2.5,75.84C70.44,465.19,96.36,480,124.13,480H387.87c27.77,0,53.69-14.81,66.95-39.21A74,74,0,0,0,452.32,365ZM211.66,184.2A79.94,79.94,0,0,0,224,141.48V68a4,4,0,0,1,4-4h56a4,4,0,0,1,4,4v73.48a79.94,79.94,0,0,0,12.35,42.72l57.8,91.53A8,8,0,0,1,351.37,288H160.63a8,8,0,0,1-6.77-12.27Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M215.08,156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36,51.36,0,0,1,256,32h0c28.55,0,51.69,23.69,51.69,51.69,0,16.5-5.85,48.95-10.77,73.23" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M215.08,355.08c-4.91,24.06-10.77,56.16-10.77,73.23A51.36,51.36,0,0,0,256,480h0c28.55,0,51.69-23.69,51.69-51.69,0-16.54-5.85-48.93-10.77-73.23" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M355.08,215.08c24.06-4.91,56.16-10.77,73.23-10.77A51.36,51.36,0,0,1,480,256h0c0,28.55-23.69,51.69-51.69,51.69-16.5,0-48.95-5.85-73.23-10.77" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M156.92,215.07c-24-4.89-56.25-10.76-73.23-10.76A51.36,51.36,0,0,0,32,256h0c0,28.55,23.69,51.69,51.69,51.69,16.5,0,48.95-5.85,73.23-10.77" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M296.92,156.92c13.55-20.48,32.3-47.25,44.37-59.31a51.35,51.35,0,0,1,73.1,0h0c20.19,20.19,19.8,53.3,0,73.1-11.66,11.67-38.67,30.67-59.31,44.37" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M156.92,296.92c-20.48,13.55-47.25,32.3-59.31,44.37a51.35,51.35,0,0,0,0,73.1h0c20.19,20.19,53.3,19.8,73.1,0,11.67-11.66,30.67-38.67,44.37-59.31" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M355.08,296.92c20.48,13.55,47.25,32.3,59.31,44.37a51.35,51.35,0,0,1,0,73.1h0c-20.19,20.19-53.3,19.8-73.1,0-11.69-11.69-30.66-38.65-44.37-59.31" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M215.08,156.92c-13.53-20.43-32.38-47.32-44.37-59.31a51.35,51.35,0,0,0-73.1,0h0c-20.19,20.19-19.8,53.3,0,73.1,11.61,11.61,38.7,30.68,59.31,44.37" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="256" r="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <circle cx="256" cy="256" r="43" />
      <path d="M475.93,303.91a67.49,67.49,0,0,0-47.62-115.6c-2.88,0-6.2.14-9.93.43,2.75-2.36,5.23-4.62,7.33-6.71A67.83,67.83,0,0,0,378,66.33h-.25a67.27,67.27,0,0,0-47.82,20c-2.11,2.11-4.37,4.59-6.72,7.33.29-3.75.44-7.07.44-9.93a67.69,67.69,0,1,0-135.38,0c0,2.87.15,6.19.44,9.93-2.36-2.74-4.62-5.22-6.72-7.33a67.27,67.27,0,0,0-47.82-20H134A67.9,67.9,0,0,0,86.29,182c2.1,2.09,4.58,4.35,7.34,6.72-3.74-.29-7.06-.44-9.94-.44a67.69,67.69,0,0,0,0,135.38c2.86,0,6.18-.15,9.93-.44-2.74,2.35-5.22,4.61-7.33,6.72a67.55,67.55,0,0,0,47.82,115.42h.25A67.32,67.32,0,0,0,182,425.71c2.09-2.1,4.35-4.58,6.71-7.33-.28,3.73-.43,7.05-.43,9.93a67.69,67.69,0,0,0,135.38,0c0-2.87-.15-6.19-.44-9.94,2.36,2.75,4.62,5.24,6.72,7.34a67.32,67.32,0,0,0,47.67,19.68h.25A67.5,67.5,0,0,0,425.71,330c-2.11-2.11-4.59-4.37-7.33-6.72,3.75.29,7.07.44,9.93.44A67.27,67.27,0,0,0,475.93,303.91ZM256,341a85,85,0,1,1,85-85A85.1,85.1,0,0,1,256,341Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <circle cx="256" cy="256" r="48" />
      <path d="M475.93,303.91a67.49,67.49,0,0,0-44.34-115.53,5.2,5.2,0,0,1-4.58-3.21h0a5.21,5.21,0,0,1,1-5.51A67.83,67.83,0,0,0,378,66.33h-.25A67.13,67.13,0,0,0,332.35,84a5.21,5.21,0,0,1-5.52,1h0a5.23,5.23,0,0,1-3.22-4.58,67.68,67.68,0,0,0-135.23,0A5.2,5.2,0,0,1,185.17,85h0a5.21,5.21,0,0,1-5.52-1,67.11,67.11,0,0,0-45.44-17.69H134A67.91,67.91,0,0,0,84,179.65a5.21,5.21,0,0,1,1,5.51h0a5.2,5.2,0,0,1-4.58,3.21,67.71,67.71,0,0,0,0,135.23A5.23,5.23,0,0,1,85,326.83h0a5.22,5.22,0,0,1-1,5.52,67.54,67.54,0,0,0,50.08,113h.25A67.38,67.38,0,0,0,179.65,428a5.21,5.21,0,0,1,5.51-1h0a5.2,5.2,0,0,1,3.21,4.58,67.71,67.71,0,0,0,135.23,0,5.23,5.23,0,0,1,3.22-4.58h0a5.21,5.21,0,0,1,5.51,1,67.38,67.38,0,0,0,45.29,17.42h.25a67.48,67.48,0,0,0,50.08-113,5.22,5.22,0,0,1-1-5.52h0a5.23,5.23,0,0,1,4.58-3.22A67.31,67.31,0,0,0,475.93,303.91ZM256,336a80,80,0,1,1,80-80A80.09,80.09,0,0,1,256,336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M64,192V120a40,40,0,0,1,40-40h75.89a40,40,0,0,1,22.19,6.72l27.84,18.56A40,40,0,0,0,252.11,112H408a40,40,0,0,1,40,40v40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M479.9,226.55,463.68,392a40,40,0,0,1-39.93,40H88.25a40,40,0,0,1-39.93-40L32.1,226.55A32,32,0,0,1,64,192h384.1A32,32,0,0,1,479.9,226.55Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M16.08,189.4,44.66,423.27A28,28,0,0,0,72.52,448h367a28,28,0,0,0,27.86-24.73L495.92,189.4A12,12,0,0,0,484,176H28A12,12,0,0,0,16.08,189.4Z" />
      <path d="M464,124a28,28,0,0,0-28-28H244.84l-48-32H76A28,28,0,0,0,48,92v52H464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M408,96H252.11a23.89,23.89,0,0,1-13.31-4L211,73.41A55.77,55.77,0,0,0,179.89,64H104a56.06,56.06,0,0,0-56,56v24H464C464,113.12,438.88,96,408,96Z" />
      <path d="M423.75,448H88.25a56,56,0,0,1-55.93-55.15L16.18,228.11l0-.28A48,48,0,0,1,64,176h384.1a48,48,0,0,1,47.8,51.83l0,.28L479.68,392.85A56,56,0,0,1,423.75,448ZM479.9,226.55h0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M440,432H72a40,40,0,0,1-40-40V120A40,40,0,0,1,72,80h75.89a40,40,0,0,1,22.19,6.72l27.84,18.56A40,40,0,0,0,220.11,112H440a40,40,0,0,1,40,40V392A40,40,0,0,1,440,432Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="32" y1="192" x2="480" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M16,420a28,28,0,0,0,28,28H468a28,28,0,0,0,28-28V208H16Z" />
      <path d="M496,124a28,28,0,0,0-28-28H212.84l-48-32H44A28,28,0,0,0,16,92v84H496Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M496,152a56,56,0,0,0-56-56H220.11a23.89,23.89,0,0,1-13.31-4L179,73.41A55.77,55.77,0,0,0,147.89,64H72a56,56,0,0,0-56,56v48a8,8,0,0,0,8,8H488a8,8,0,0,0,8-8Z" />
      <path d="M16,392a56,56,0,0,0,56,56H440a56,56,0,0,0,56-56V216a8,8,0,0,0-8-8H24a8,8,0,0,0-8,8Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <polygon points="256 175.15 179.91 238.98 200 320 256 320 312 320 332.09 238.98 256 175.15" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="332.09 238.98 384.96 216.58 410.74 143.32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="447" y1="269.97" x2="384.96" y2="216.58" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="179.91 238.98 127.04 216.58 101.26 143.32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="65" y1="269.97" x2="127.04" y2="216.58" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="256 175.15 256 117.58 320 74.94" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="192" y1="74.93" x2="256" y2="117.58" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="312 320 340 368 312 439" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="410.74" y1="368" x2="342" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="200 320 172 368 200.37 439.5" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="101.63" y1="368" x2="172" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM396.64,344.08H349.87l-16.89-29,15-60.44L377.79,242l42.65,36.71A164.87,164.87,0,0,1,396.64,344.08ZM134.21,242,164,254.67l15,60.44-16.89,29H115.36a164.87,164.87,0,0,1-23.8-65.34Zm249.07-92.47-18.41,52.33-31.12,13.18L277,167.46v-35l43.86-29.22A166.87,166.87,0,0,1,383.28,149.56ZM191.14,103.2,235,132.42v35l-56.75,47.61-31.12-13.18-18.41-52.33A166.87,166.87,0,0,1,191.14,103.2Zm26.44,314.3-20.1-50.66,16-27.51h85l16.06,27.53-20,50.6a166.23,166.23,0,0,1-77,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM399,352H353.78a8,8,0,0,1-6.91-4l-16.14-27.68a8,8,0,0,1-.86-6l14.86-59.92a8,8,0,0,1,4.65-5.45l28.1-11.9a8,8,0,0,1,8.34,1.3l41.63,35.82a8,8,0,0,1,2.69,7.26,174.75,174.75,0,0,1-24.28,66.68A8,8,0,0,1,399,352ZM134.52,237.13l28.1,11.9a8,8,0,0,1,4.65,5.45l14.86,59.92a8,8,0,0,1-.86,6L165.13,348a8,8,0,0,1-6.91,4H113a8,8,0,0,1-6.82-3.81,174.75,174.75,0,0,1-24.28-66.68,8,8,0,0,1,2.69-7.26l41.63-35.82A8,8,0,0,1,134.52,237.13Zm256.94-87.24-18.07,51.38A8,8,0,0,1,369,206l-29.58,12.53a8,8,0,0,1-8.26-1.24l-56.26-47.19A8,8,0,0,1,272,164V130.42a8,8,0,0,1,3.56-6.65l42.83-28.54a8,8,0,0,1,7.66-.67A176.92,176.92,0,0,1,390,142,8,8,0,0,1,391.46,149.89ZM193.6,95.23l42.84,28.54a8,8,0,0,1,3.56,6.65V164a8,8,0,0,1-2.86,6.13l-56.26,47.19a8,8,0,0,1-8.26,1.24L143,206a8,8,0,0,1-4.43-4.72l-18.07-51.38A8,8,0,0,1,122,142a176.92,176.92,0,0,1,64-47.48A8,8,0,0,1,193.6,95.23Zm17.31,327.46L191.18,373a8,8,0,0,1,.52-7l15.17-26a8,8,0,0,1,6.91-4h84.44a8,8,0,0,1,6.91,4l15.18,26a8,8,0,0,1,.53,7l-19.59,49.67a8,8,0,0,1-5.69,4.87,176.58,176.58,0,0,1-79,0A8,8,0,0,1,210.91,422.69Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M200,246.84c8.81,58.62-7.33,90.67-52.91,97.41-50.65,7.49-71.52-26.44-80.33-85.06-11.85-78.88,16-127.94,55.71-131.1C158.61,125.22,191.18,188.23,200,246.84Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" />
      <path d="M223.65,409.53c3.13,33.28-14.86,64.34-42,69.66-27.4,5.36-58.71-16.37-65.09-49.19s17.75-34.56,47.32-40.21S219.87,369.39,223.65,409.53Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" />
      <path d="M312,150.83c-8.81,58.62,7.33,90.67,52.9,97.41,50.66,7.49,71.52-26.44,80.33-85.06,11.86-78.89-16-128.22-55.7-131.1C353.13,29.44,320.82,92.21,312,150.83Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" />
      <path d="M288.35,313.53c-3.13,33.27,14.86,64.34,42,69.66,27.4,5.36,58.71-16.37,65.09-49.19s-17.75-34.56-47.32-40.22S292.13,273.38,288.35,313.53Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M130.54,358.31c-12.83,1.88-33.95,5.38-48-10.56S56.34,293.32,51,258.92c-7.88-50.7-.06-93.43,22-120.31,13-15.83,30.06-25,49.34-26.46,16.51-1.27,41.18,5.19,65,43.19,14.92,23.81,26.27,55.44,31.14,86.77h0c5.88,37.82,11.61,78.18-8.44,92.65-11.31,8.17-19.43,11-38.62,15.57C155.64,354.08,143.38,356.42,130.54,358.31Z" />
      <path d="M107.72,390.84l108.89-22.46c9.2-1.9,16.58,3.16,20,18.32,11.22,49.76-4.86,109.3-55.22,109.3-47.69,0-79.47-54.36-84.66-83.58C94.36,399.17,97.74,392.89,107.72,390.84Z" />
      <path d="M340.59,254.34c-19.19-4.55-27.31-7.4-38.62-15.57-20.05-14.47-14.32-54.83-8.44-92.65h0c4.87-31.33,16.22-63,31.14-86.77,23.8-38,48.47-44.46,65-43.19C408.93,17.63,426,26.78,439,42.61c22.08,26.88,29.9,69.61,22,120.31-5.35,34.4-17.46,72.76-31.59,88.83s-35.13,12.44-48,10.56S356.36,258.08,340.59,254.34Z" />
      <path d="M404.28,294.84,295.39,272.38c-9.2-1.9-16.58,3.16-20,18.32C264.18,340.46,280.26,400,330.62,400c47.69,0,79.47-54.36,84.66-83.58C417.64,303.17,414.26,296.89,404.28,294.84Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M133.83,361.27c-22.61,0-41-8.17-54.79-24.39S56.2,296.59,50.93,261.57c-7.76-51.61-.06-95.11,21.68-122.48,12.8-16.12,29.6-25.44,48.58-26.94,16.25-1.3,40.54,5.29,64,44,14.69,24.24,25.86,56.44,30.65,88.34h0c5.79,38.51,1.48,66.86-13.18,86.65-11.64,15.72-29.54,25.46-53.21,29A106.46,106.46,0,0,1,133.83,361.27Z" />
      <path d="M173,496c-13.21,0-26.6-4.23-38.66-12.36a79.79,79.79,0,0,1-33.52-50.6c-2.85-14.66-1.14-26.31,5.22-35.64,10.33-15.15,28.87-18.56,48.49-22.18,2.07-.38,4.17-.76,6.3-1.17,4.52-.86,9.14-2,13.62-3.11,16.78-4.14,34.14-8.43,48.47,1.75,9.59,6.8,15,18.36,16.62,35.32h0c1.84,19.57-2.36,39.1-11.83,55-10.19,17.11-25.47,28.42-43,31.86A61,61,0,0,1,173,496Z" />
      <path d="M378.17,265.27a106.69,106.69,0,0,1-15.6-1.2c-23.66-3.5-41.56-13.25-53.2-29-14.66-19.79-19-48.13-13.18-86.65,4.79-31.93,15.93-64.1,30.55-88.25,23.34-38.57,47.66-45.26,64-44.08,18.92,1.38,35.69,10.57,48.51,26.6,21.89,27.37,29.65,71,21.86,122.84-5.27,35-14.2,58.95-28.11,75.31S400.78,265.27,378.17,265.27Z" />
      <path d="M339,400a61,61,0,0,1-11.68-1.13c-17.56-3.44-32.84-14.75-43-31.86-9.47-15.9-13.67-35.43-11.83-55h0c1.6-17,7-28.52,16.62-35.33,14.33-10.17,31.69-5.89,48.47-1.74,4.48,1.1,9.1,2.24,13.62,3.11l6.29,1.17c19.63,3.61,38.17,7,48.5,22.17,6.36,9.33,8.07,21,5.22,35.64a79.78,79.78,0,0,1-33.52,50.61C365.56,395.78,352.17,400,339,400Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M35.4,87.12,204.05,283.56A16.07,16.07,0,0,1,208,294V413.32a7.93,7.93,0,0,0,5.39,7.59l80.15,26.67A7.94,7.94,0,0,0,304,440V294A16.07,16.07,0,0,1,308,283.56L476.6,87.12A14,14,0,0,0,466,64H46.05A14,14,0,0,0,35.4,87.12Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <polygon points="0 48 192 288 192 416 320 464 320 288 512 48 0 48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M296,464a23.88,23.88,0,0,1-7.55-1.23l-80.15-26.67A23.92,23.92,0,0,1,192,413.32V294.11a.44.44,0,0,0-.09-.13L23.26,97.54A30,30,0,0,1,46.05,48H466a30,30,0,0,1,22.79,49.54L320.09,294a.77.77,0,0,0-.09.13V440a23.93,23.93,0,0,1-24,24Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M467.51,248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5,91.5,0,0,0,352,96c-26.89,0-48.11,16-96,16s-69.15-16-96-16a99.09,99.09,0,0,0-27.2,3.66C89,112.59,61.94,165.7,43.33,248.83c-19,84.91-15.56,152,21.58,164.88,26,9,49.25-9.61,71.27-37,25-31.2,55.79-40.8,119.82-40.8s93.62,9.6,118.66,40.8c22,27.41,46.11,45.79,71.42,37.16C487.1,399.86,486.52,334.74,467.51,248.83Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="292" cy="224" r="20" />
      <path d="M336,288a20,20,0,1,1,20-19.95A20,20,0,0,1,336,288Z" />
      <circle cx="336" cy="180" r="20" />
      <circle cx="380" cy="224" r="20" />
      <line x1="160" y1="176" x2="160" y2="272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="208" y1="224" x2="112" y2="224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M478.07,356.88,439,151c-8.86-40.35-23-71-88-71H145c-66,0-79.14,30.65-88,71L18,356.88C11,391,22.43,418.13,51.37,428.69S103,423,119.18,391.3l15.42-30.52A16,16,0,0,1,148.88,352H347.16a16,16,0,0,1,14.28,8.78l15.42,30.52c16.14,31.7,38.88,48,67.81,37.39S485,391,478.07,356.88ZM224,240H176v48H144V240H96V208h48V160h32v48h48Zm68,4a20,20,0,1,1,20-20A20,20,0,0,1,292,244Zm44,44a20,20,0,1,1,20-20A20,20,0,0,1,336,288Zm0-88a20,20,0,1,1,20-20A20,20,0,0,1,336,200Zm44,44a20,20,0,1,1,20-20A20,20,0,0,1,380,244Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M483.13,245.38C461.92,149.49,430,98.31,382.65,84.33A107.13,107.13,0,0,0,352,80c-13.71,0-25.65,3.34-38.28,6.88C298.5,91.15,281.21,96,256,96s-42.51-4.84-57.76-9.11C185.6,83.34,173.67,80,160,80a115.74,115.74,0,0,0-31.73,4.32c-47.1,13.92-79,65.08-100.52,161C4.61,348.54,16,413.71,59.69,428.83a56.62,56.62,0,0,0,18.64,3.22c29.93,0,53.93-24.93,70.33-45.34,18.53-23.1,40.22-34.82,107.34-34.82,59.95,0,84.76,8.13,106.19,34.82,13.47,16.78,26.2,28.52,38.9,35.91,16.89,9.82,33.77,12,50.16,6.37,25.82-8.81,40.62-32.1,44-69.24C497.82,331.27,493.86,293.86,483.13,245.38ZM208,240H176v32a16,16,0,0,1-32,0V240H112a16,16,0,0,1,0-32h32V176a16,16,0,0,1,32,0v32h32a16,16,0,0,1,0,32Zm84,4a20,20,0,1,1,20-20A20,20,0,0,1,292,244Zm44,44a20,20,0,1,1,20-19.95A20,20,0,0,1,336,288Zm0-88a20,20,0,1,1,20-20A20,20,0,0,1,336,200Zm44,44a20,20,0,1,1,20-20A20,20,0,0,1,380,244Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M256,104v56h56a56,56,0,1,0-56-56Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M256,104c0,15.46,0,56,0,56H200a56,56,0,1,1,56-56Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <rect x="64" y="160" width="384" height="112" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M416,272V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="160" x2="256" y2="464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M346,110a34,34,0,0,0-68,0v34h34A34,34,0,0,0,346,110Z" style="fill:none" />
      <path d="M234,110a34,34,0,1,0-34,34h34Z" style="fill:none" />
      <path d="M234,144h44V256H442a22,22,0,0,0,22-22V166a22,22,0,0,0-22-22H382.18A77.95,77.95,0,0,0,256,55.79,78,78,0,0,0,129.81,144H70a22,22,0,0,0-22,22v68a22,22,0,0,0,22,22H234Zm44-34a34,34,0,1,1,34,34H278Zm-112,0a34,34,0,1,1,68,0v34H200A34,34,0,0,1,166,110Z" />
      <path d="M278,480H410a22,22,0,0,0,22-22V288H278Z" />
      <path d="M80,458a22,22,0,0,0,22,22H234V288H80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M200,144h40V104a40,40,0,1,0-40,40Z" style="fill:none" />
      <path d="M352,104a40,40,0,0,0-80,0v40h40A40,40,0,0,0,352,104Z" style="fill:none" />
      <path d="M80,416a64,64,0,0,0,64,64h92a4,4,0,0,0,4-4V292a4,4,0,0,0-4-4H88a8,8,0,0,0-8,8Z" />
      <path d="M240,252V144h32V252a4,4,0,0,0,4,4H416a47.93,47.93,0,0,0,16-2.75h0A48.09,48.09,0,0,0,464,208V192a48,48,0,0,0-48-48H375.46a2,2,0,0,1-1.7-3A72,72,0,0,0,256,58.82,72,72,0,0,0,138.24,141a2,2,0,0,1-1.7,3H96a48,48,0,0,0-48,48v16a48.09,48.09,0,0,0,32,45.25h0A47.93,47.93,0,0,0,96,256H236A4,4,0,0,0,240,252Zm32-148a40,40,0,1,1,40,40H272ZM197.14,64.1A40,40,0,0,1,240,104v40H200a40,40,0,0,1-2.86-79.89Z" />
      <path d="M276,480h92a64,64,0,0,0,64-64V296a8,8,0,0,0-8-8H276a4,4,0,0,0-4,4V476A4,4,0,0,0,276,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <circle cx="160" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="160" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="160" y1="368" x2="160" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="352" cy="160" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M352,208c0,128-192,48-192,160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M352,96a64,64,0,0,0-58.86,89.11L192,273.11V151.39a64,64,0,1,0-64,0V360.61a64,64,0,1,0,64,0V358L346.25,223.73c1.9.17,3.81.27,5.75.27a64,64,0,0,0,0-128ZM160,64a32,32,0,1,1-32,32A32,32,0,0,1,160,64Zm0,384a32,32,0,1,1,32-32A32,32,0,0,1,160,448ZM352,192a32,32,0,1,1,32-32A32,32,0,0,1,352,192Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M416,160a64,64,0,1,0-96.27,55.24c-2.29,29.08-20.08,37-75,48.42-17.76,3.68-35.93,7.45-52.71,13.93V151.39a64,64,0,1,0-64,0V360.61a64,64,0,1,0,64.42.24c2.39-18,16-24.33,65.26-34.52,27.43-5.67,55.78-11.54,79.78-26.95,29-18.58,44.53-46.78,46.36-83.89A64,64,0,0,0,416,160ZM160,64a32,32,0,1,1-32,32A32,32,0,0,1,160,64Zm0,384a32,32,0,1,1,32-32A32,32,0,0,1,160,448ZM352,192a32,32,0,1,1,32-32A32,32,0,0,1,352,192Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <circle cx="256" cy="256" r="96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="160" y1="256" x2="48" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="464" y1="256" x2="352" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M480,224H380a128,128,0,0,0-247.9,0H32v64H132.05A128,128,0,0,0,380,288H480ZM256,320a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M448,224H380a128,128,0,0,0-247.9,0H64a32,32,0,0,0,0,64h68.05A128,128,0,0,0,380,288H448a32,32,0,0,0,0-64ZM256,320a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <polyline points="304 160 240 96 304 32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="207 352 271 416 207 480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="112" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="400" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,96h84a60,60,0,0,1,60,60V368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M255,416H171a60,60,0,0,1-60-60V144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M209,384H172a28,28,0,0,1-28-28V152a64,64,0,1,0-64-1.16V356a92.1,92.1,0,0,0,92,92h37v55.21L294.39,416,209,328.79ZM113,64A32,32,0,1,1,81,96,32,32,0,0,1,113,64Z" />
      <path d="M432,360.61V156a92.1,92.1,0,0,0-92-92H305V9.93L217.14,96,305,182.07V128h35a28,28,0,0,1,28,28V360.61a64,64,0,1,0,64,0ZM400,448a32,32,0,1,1,32-32A32,32,0,0,1,400,448Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M218.31,340.69A16,16,0,0,0,191,352v32H171a28,28,0,0,1-28-28V152a64,64,0,1,0-64-1.16V356a92.1,92.1,0,0,0,92,92h20v32a16,16,0,0,0,27.31,11.31l64-64a16,16,0,0,0,0-22.62ZM112,64A32,32,0,1,1,80,96,32,32,0,0,1,112,64Z" />
      <path d="M432,360.61V156a92.1,92.1,0,0,0-92-92H320V32a16,16,0,0,0-27.31-11.31l-64,64a16,16,0,0,0,0,22.62l64,64A16,16,0,0,0,320,160V128h20a28,28,0,0,1,28,28V360.61a64,64,0,1,0,64,0ZM400,448a32,32,0,1,1,32-32A32,32,0,0,1,400,448Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <circle cx="129" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="129" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="129" y1="144" x2="129" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="385" cy="288" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M129,144c0,96,112,144,208,144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M384,224a63.66,63.66,0,0,0-37.95,12.5L160,153.36v-2a64,64,0,1,0-64,0V360.61a64,64,0,1,0,64,0V223.46l160.41,71.69A64,64,0,1,0,384,224ZM128,64A32,32,0,1,1,96,96,32,32,0,0,1,128,64Zm0,384a32,32,0,1,1,32-32A32,32,0,0,1,128,448ZM384,320a32,32,0,1,1,32-32A32,32,0,0,1,384,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M385,224a64,64,0,0,0-55.33,31.89c-42.23-1.21-85.19-12.72-116.21-31.33-32.2-19.32-49.71-44-52.15-73.35a64,64,0,1,0-64.31.18V360.61a64,64,0,1,0,64,0V266.15c44.76,34,107.28,52.38,168.56,53.76A64,64,0,1,0,385,224ZM129,64A32,32,0,1,1,97,96,32,32,0,0,1,129,64Zm0,384a32,32,0,1,1,32-32A32,32,0,0,1,129,448ZM385,320a32,32,0,1,1,32-32A32,32,0,0,1,385,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <circle cx="128" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="256" x2="256" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="384" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M128,144c0,74.67,68.92,112,128,112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384,144c0,74.67-68.92,112-128,112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M384,32a64,64,0,0,0-57.67,91.73L255.5,204.55l-70.19-80.1A64,64,0,1,0,128,160c1.1,0,2.2,0,3.29-.08L224,265.7v94.91a64,64,0,1,0,64,0V264.56l91.78-104.71c1.39.09,2.8.15,4.22.15a64,64,0,0,0,0-128ZM96,96a32,32,0,1,1,32,32A32,32,0,0,1,96,96ZM256,448a32,32,0,1,1,32-32A32,32,0,0,1,256,448ZM384,128a32,32,0,1,1,32-32A32,32,0,0,1,384,128Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M448,96a64,64,0,1,0-96.31,55.21c-1.79,20.87-11.47,38.1-28.87,51.29C305.07,216,280.09,224,256,224s-49.07-8-66.82-21.5c-17.4-13.19-27.08-30.42-28.87-51.29a64,64,0,1,0-64.11.29c2.08,40.87,21.17,76.87,54.31,102C171.3,269.26,197,280.19,224,285.09v75.52a64,64,0,1,0,64,0V285.09c27-4.9,52.7-15.83,73.49-31.59,33.14-25.13,52.23-61.13,54.31-102A64,64,0,0,0,448,96ZM128,64A32,32,0,1,1,96,96,32,32,0,0,1,128,64ZM256,448a32,32,0,1,1,32-32A32,32,0,0,1,256,448ZM384,128a32,32,0,1,1,32-32A32,32,0,0,1,384,128Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <circle cx="128" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="128" y1="144" x2="128" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="288 160 224 96 288 32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="128" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="384" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M240,96h84a60,60,0,0,1,60,60V368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M192,96a64,64,0,1,0-97,54.81v209.8a64,64,0,1,0,64,0V152A64.06,64.06,0,0,0,192,96ZM128,64A32,32,0,1,1,96,96,32,32,0,0,1,128,64Zm-1,384a32,32,0,1,1,32-32A32,32,0,0,1,127,448Z" />
      <path d="M416,360.61V156a92.1,92.1,0,0,0-92-92H289V9.93L201.14,96,289,182.07V128h35a28,28,0,0,1,28,28V360.61a64,64,0,1,0,64,0ZM384,448a32,32,0,1,1,32-32A32,32,0,0,1,384,448Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M192,96a64,64,0,1,0-96,55.39V360.61a64,64,0,1,0,64,0V151.39A64,64,0,0,0,192,96ZM128,64A32,32,0,1,1,96,96,32,32,0,0,1,128,64Zm0,384a32,32,0,1,1,32-32A32,32,0,0,1,128,448Z" />
      <path d="M416,360.61V156a92.1,92.1,0,0,0-92-92H304V32a16,16,0,0,0-27.31-11.31l-64,64a16,16,0,0,0,0,22.62l64,64A16,16,0,0,0,304,160V128h20a28,28,0,0,1,28,28V360.61a64,64,0,1,0,64,0ZM384,448a32,32,0,1,1,32-32A32,32,0,0,1,384,448Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M224,232a32,32,0,0,1,64,0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="448" y1="200" x2="464" y2="200" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="64" y1="200" x2="48" y2="200" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,200c0,96,16,128,80,128s80-32,80-128c0,0-16-16-80-16S64,200,64,200Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M448,200c0,96-16,128-80,128s-80-32-80-128c0,0,16-16,80-16S448,200,448,200Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M496,176H16v64H37.24L49.68,352H221.55L240,241.32V240a16,16,0,0,1,32,0v1.32L290.45,352H462.32l12.44-112H496Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-d</title>
      <path d="M464,184H453.1a78.72,78.72,0,0,0-16-7.18C419.5,171,396.26,168,368,168s-51.5,3-69.06,8.82c-14.06,4.69-20.25,9.86-22.25,11.87h0a47.94,47.94,0,0,0-41.36,0h0c-2-2-8.19-7.18-22.25-11.87C195.5,171,172.26,168,144,168s-51.5,3-69.06,8.82a78.72,78.72,0,0,0-16,7.18H48a16,16,0,0,0,0,32h.17c1,45.46,6.44,72.78,18.11,92.23a66.78,66.78,0,0,0,31.92,28c12.23,5.24,27.22,7.79,45.8,7.79,24.15,0,58.48-3.71,77.72-35.77,9.68-16.14,15.09-37.69,17.21-70.52A16,16,0,0,0,240,232a16,16,0,0,1,32,0,16,16,0,0,0,1.07,5.71c2.12,32.83,7.53,54.38,17.21,70.52a66.78,66.78,0,0,0,31.92,28c12.23,5.24,27.22,7.79,45.8,7.79,24.15,0,58.48-3.71,77.72-35.77,11.67-19.45,17.13-46.77,18.11-92.23H464a16,16,0,0,0,0-32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M256,48c-58.07,0-112.67,93.13-112.67,208S197.93,464,256,464s112.67-93.13,112.67-208S314.07,48,256,48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M117.33,117.33c38.24,27.15,86.38,43.34,138.67,43.34s100.43-16.19,138.67-43.34" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M394.67,394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43,16.19-138.67,43.34" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="48" x2="256" y2="464" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="464" y1="256" x2="48" y2="256" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:44px" />
      <path d="M256,48c-58.07,0-112.67,93.13-112.67,208S197.93,464,256,464s112.67-93.13,112.67-208S314.07,48,256,48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:44px" />
      <path d="M117.33,121.33c38.24,27.15,86.38,43.34,138.67,43.34s100.43-16.19,138.67-43.34" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <path d="M394.67,390.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43,16.19-138.67,43.34" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <line x1="256" y1="48" x2="256" y2="464" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:44px" />
      <line x1="464" y1="256" x2="48" y2="256" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M340.75,344.49c5.91-20.7,9.82-44.75,11.31-67.84A4.41,4.41,0,0,0,347.6,272H276.54a4.43,4.43,0,0,0-4.47,4.39v55.3a4.44,4.44,0,0,0,4.14,4.38,273.51,273.51,0,0,1,59,11.39A4.45,4.45,0,0,0,340.75,344.49Z" />
      <path d="M323.58,377.31a260.05,260.05,0,0,0-46.6-9.09,4.42,4.42,0,0,0-4.91,4.29v65.24a4.47,4.47,0,0,0,6.76,3.7c15.9-9.27,29-24.84,40.84-45.43,1.94-3.36,4.89-9.15,6.67-12.69A4.29,4.29,0,0,0,323.58,377.31Z" />
      <path d="M235.29,368.4a256.85,256.85,0,0,0-46.56,8.82c-2.64.76-3.75,4.4-2.55,6.79,1.79,3.56,4,8.11,5.89,11.51,13,23,26.84,37.5,41.24,45.93a4.47,4.47,0,0,0,6.76-3.7V372.48A4.16,4.16,0,0,0,235.29,368.4Z" />
      <path d="M235.6,272H164.54a4.41,4.41,0,0,0-4.46,4.64c1.48,23.06,5.37,47.16,11.26,67.84a4.46,4.46,0,0,0,5.59,3,272.2,272.2,0,0,1,59-11.36,4.44,4.44,0,0,0,4.15-4.38V276.4A4.43,4.43,0,0,0,235.6,272Z" />
      <path d="M277,143.78a235.8,235.8,0,0,0,46.5-9.14,4.3,4.3,0,0,0,2.76-6c-1.79-3.57-4.27-8.68-6.17-12.09-12.29-22-26.14-37.35-41.24-46a4.48,4.48,0,0,0-6.76,3.7v65.23A4.43,4.43,0,0,0,277,143.78Z" />
      <path d="M276.54,240H347.6a4.39,4.39,0,0,0,4.46-4.58c-1.48-22.77-5.27-47.8-11.16-68.22a4.46,4.46,0,0,0-5.59-2.95c-19,5.74-38.79,10.43-59.09,12a4.4,4.4,0,0,0-4.15,4.32v55.11A4.4,4.4,0,0,0,276.54,240Z" />
      <path d="M233.31,70.56c-15.42,8.57-29.17,24.43-41.47,46.37-1.91,3.41-4.19,8.11-6,11.67a4.31,4.31,0,0,0,2.76,6,225.42,225.42,0,0,0,46.54,9.17,4.43,4.43,0,0,0,4.91-4.29V74.26A4.49,4.49,0,0,0,233.31,70.56Z" />
      <path d="M235.92,176.26c-20.3-1.55-40.11-6.24-59.09-12a4.46,4.46,0,0,0-5.59,2.95c-5.89,20.42-9.68,45.45-11.16,68.22a4.39,4.39,0,0,0,4.46,4.58H235.6a4.4,4.4,0,0,0,4.47-4.34V180.58A4.4,4.4,0,0,0,235.92,176.26Z" />
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM176.6,430.85a219.08,219.08,0,0,1-12.48-19.66c-2-3.69-4.84-9.26-6.73-13.13a7.29,7.29,0,0,0-10.31-3.16c-4.3,2.41-10,5.72-14.13,8.43a147.29,147.29,0,0,1-23.57-22.43,248.83,248.83,0,0,1,30.41-18.36c1.86-1,2.77-2.14,2.18-4.18a374.8,374.8,0,0,1-14.09-82.17,4.36,4.36,0,0,0-4.3-4.17H66.84a2,2,0,0,1-2-1.7A98.28,98.28,0,0,1,64,256a96.27,96.27,0,0,1,.86-14.29,2,2,0,0,1,2-1.7H123.6c2.29,0,4.17-1.32,4.29-3.63a372.71,372.71,0,0,1,14-81.83,4.36,4.36,0,0,0-2.19-5.11,260.63,260.63,0,0,1-29.84-17.9A169.82,169.82,0,0,1,133,108.74c4.08,2.68,9.4,5.71,13.66,8.11a7.89,7.89,0,0,0,11-3.42c1.88-3.87,4-8.18,6.06-11.88a221.93,221.93,0,0,1,12.54-19.91A185,185,0,0,1,256,64c28.94,0,55.9,7,80.53,18.46a202.23,202.23,0,0,1,12,19c2.59,4.66,5.34,10.37,7.66,15.32a4.29,4.29,0,0,0,5.92,1.94c5.38-2.91,11.21-6.26,16.34-9.63a171.36,171.36,0,0,1,23.2,23,244.89,244.89,0,0,1-29.06,17.31,4.35,4.35,0,0,0-2.18,5.12,348.68,348.68,0,0,1,13.85,81.4,4.33,4.33,0,0,0,4.3,4.12l56.62-.07a2,2,0,0,1,2,1.7,117.46,117.46,0,0,1,0,28.62,2,2,0,0,1-2,1.72l-56.67,0a4.35,4.35,0,0,0-4.3,4.17,367.4,367.4,0,0,1-13.87,81.3,4.45,4.45,0,0,0,2.19,5.19c5,2.59,10.57,5.48,15.37,8.42s9.55,6.08,14.13,9.34a172.73,172.73,0,0,1-23,22.93c-2.44-1.61-5.34-3.44-7.84-4.94-1.72-1-4.89-2.77-6.65-3.76-3.82-2.14-7.88-.54-9.79,3.4s-4.83,9.59-6.87,13.25a212.42,212.42,0,0,1-12.35,19.53C310.91,442.37,284.94,448,256,448S201.23,442.37,176.6,430.85Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="256 400 256 32 432 112 256 192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,336c-87,0-175.3,43.2-191.64,124.74C62.39,470.57,68.57,480,80,480H432c11.44,0,17.62-9.43,15.65-19.26C431.3,379.2,343,336,256,336Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M240,16V191.66c0,.23,0,.47,0,.7V320.47q8-.47,16-.47t16,.47V202.3L448,112Z" />
      <path d="M462.91,457.5c-8.54-42.85-35-78.74-76.62-103.8C353.86,334.15,313.76,322.4,272,320v95.79H240V320c-41.79,2.4-81.89,14.15-114.32,33.7-41.59,25.06-68.08,60.95-76.62,103.8-2,9.81-.68,38.5-.68,38.5H463.59S464.87,467.31,462.91,457.5Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M272,320.46V202.3l166.62-75.73a16,16,0,0,0,0-29.14l-176-80A16,16,0,0,0,240,32V191.66c0,.23,0,.47,0,.7v128.1q8-.45,16-.46T272,320.46Z" />
      <path d="M463.33,457.5c-8.56-42.85-35.11-78.74-76.78-103.8C354.05,334.15,313.88,322.4,272,320v79.75a16,16,0,1,1-32,0V320c-41.88,2.4-82.05,14.15-114.55,33.7-41.67,25.06-68.22,60.95-76.78,103.8a32.49,32.49,0,0,0,6.44,27.08C61.13,492,70,496,80,496H432c10,0,18.88-4.05,24.9-11.42A32.49,32.49,0,0,0,463.33,457.5Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <rect x="48" y="48" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="288" y="48" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="48" y="288" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="288" y="288" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M240,240H32V32H240Z" />
      <path d="M480,240H272V32H480Z" />
      <path d="M240,480H32V272H240Z" />
      <path d="M480,480H272V272H480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M204,240H68a36,36,0,0,1-36-36V68A36,36,0,0,1,68,32H204a36,36,0,0,1,36,36V204A36,36,0,0,1,204,240Z" />
      <path d="M444,240H308a36,36,0,0,1-36-36V68a36,36,0,0,1,36-36H444a36,36,0,0,1,36,36V204A36,36,0,0,1,444,240Z" />
      <path d="M204,480H68a36,36,0,0,1-36-36V308a36,36,0,0,1,36-36H204a36,36,0,0,1,36,36V444A36,36,0,0,1,204,480Z" />
      <path d="M444,480H308a36,36,0,0,1-36-36V308a36,36,0,0,1,36-36H444a36,36,0,0,1,36,36V444A36,36,0,0,1,444,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M277.42,247a24.68,24.68,0,0,0-4.08-5.47L255,223.44a21.63,21.63,0,0,0-6.56-4.57,20.93,20.93,0,0,0-23.28,4.27c-6.36,6.26-18,17.68-39,38.43C146,301.3,71.43,367.89,37.71,396.29a16,16,0,0,0-1.09,23.54l39,39.43a16.13,16.13,0,0,0,23.67-.89c29.24-34.37,96.3-109,136-148.23,20.39-20.06,31.82-31.58,38.29-37.94A21.76,21.76,0,0,0,277.42,247Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M478.43,201l-34.31-34a5.44,5.44,0,0,0-4-1.59,5.59,5.59,0,0,0-4,1.59h0a11.41,11.41,0,0,1-9.55,3.27c-4.48-.49-9.25-1.88-12.33-4.86-7-6.86,1.09-20.36-5.07-29a242.88,242.88,0,0,0-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.79,123.79,0,0,0-47-9.24c-26.35,0-46.61,11.76-54,18.51-5.88,5.32-12,13.77-12,13.77A91.29,91.29,0,0,1,202.35,77a79.53,79.53,0,0,1,23.28-1.49C241.19,76.8,259.94,84.1,270,92c16.21,13,23.18,30.39,24.27,52.83.8,16.69-15.23,37.76-30.44,54.94a7.85,7.85,0,0,0,.4,10.83l21.24,21.23a8,8,0,0,0,11.14.1c13.93-13.51,31.09-28.47,40.82-34.46s17.58-7.68,21.35-8.09A35.71,35.71,0,0,1,380.08,194a13.65,13.65,0,0,1,3.08,2.38c6.46,6.56,6.07,17.28-.5,23.74l-2,1.89a5.5,5.5,0,0,0,0,7.84l34.31,34a5.5,5.5,0,0,0,4,1.58,5.65,5.65,0,0,0,4-1.58L478.43,209A5.82,5.82,0,0,0,478.43,201Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M294.28,256.9l-54.42-54.41a12,12,0,0,0-17,0L12.45,401a12,12,0,0,0-.27,17.2l66.05,66.28a12,12,0,0,0,17.22-.23L294.26,273.89A12,12,0,0,0,294.28,256.9Z" />
      <path d="M499.33,199.33l-43.89-43.58a21.46,21.46,0,0,0-15.28-6.26,21.89,21.89,0,0,0-12.79,4.14c0-.43.06-.85.09-1.22.45-6.5,1.15-16.32-5.2-25.22a258,258,0,0,0-24.8-28.74.6.6,0,0,0-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55,139.55,0,0,0,257.56,32C226,32,202,46.24,192.81,54.68A53.4,53.4,0,0,0,176,86.17L192,96s8.06-2,13.86-3.39a62.73,62.73,0,0,1,18.45-1.15C237.5,92.55,253.1,99.1,260,104.55c11.7,9.41,17.33,22.09,18.26,41.09.2,4.23-9.52,21.35-24.16,39.84a8,8,0,0,0,.61,10.62l45.37,45.37a8,8,0,0,0,11,.25c12.07-11,30.49-28,34.67-30.59,7.69-4.73,13.19-5.64,14.7-5.8a19.18,19.18,0,0,1,11.29,2.38,1.24,1.24,0,0,1-.31.95l-1.82,1.73-.3.28a21.52,21.52,0,0,0,.05,30.54l43.95,43.68a8,8,0,0,0,11.28,0l74.68-74.2A8,8,0,0,0,499.33,199.33Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M280.16,242.79l-26.11-26.12a32,32,0,0,0-45.14-.12L27.38,384.08c-6.61,6.23-10.95,14.17-11.35,23.06a32.11,32.11,0,0,0,9.21,23.94l39,39.43a.46.46,0,0,0,.07.07A32.29,32.29,0,0,0,87,480l1.18,0c8.89-.33,16.85-4.5,23.17-11.17l168.7-180.7A32,32,0,0,0,280.16,242.79Z" />
      <path d="M490,190l-.31-.31-34.27-33.92a21.46,21.46,0,0,0-15.28-6.26,21.89,21.89,0,0,0-12.79,4.14c0-.43.06-.85.09-1.22.45-6.5,1.15-16.32-5.2-25.22a258,258,0,0,0-24.8-28.74.6.6,0,0,0-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55,139.55,0,0,0,257.56,32C226,32,202,46.24,192.81,54.68A119.92,119.92,0,0,0,178.63,70.9a16,16,0,0,0,18.65,24.34,74.45,74.45,0,0,1,8.58-2.63,63.46,63.46,0,0,1,18.45-1.15C237.5,92.55,253.1,99.1,260,104.55c11.7,9.41,17.33,22.09,18.26,41.09.18,3.82-7.72,18.14-20,34.48a16,16,0,0,0,1.45,21l34.41,34.41a16,16,0,0,0,22,.62c9.73-8.69,24.55-21.79,29.73-25,7.69-4.73,13.19-5.64,14.7-5.8a19.18,19.18,0,0,1,11.29,2.38,1.24,1.24,0,0,1-.31.95l-1.82,1.73-.3.28a21.52,21.52,0,0,0,.05,30.54l34.26,33.91A21.45,21.45,0,0,0,419,281.39a21.7,21.7,0,0,0,15.22-6.2l55.5-54.82c.19-.19.38-.39.56-.59A21.87,21.87,0,0,0,490,190Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M80,320V144a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32V256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M144,256V80a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32V240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M272,241V96a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32V320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M208,240V48a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32V240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M80,320c0,117.4,64,176,152,176s123.71-39.6,144-88l52.71-144c6.66-18.05,3.64-34.79-11.87-43.6h0c-15.52-8.82-35.91-4.28-44.31,11.68L336,320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M429.58,209.08h0c-15.06-6.62-32.38,1.31-38.5,17.62L356,312H344.73V80c0-17.6-13.3-32-29.55-32h0c-16.26,0-29.55,14.4-29.55,32V231.75l-14.78.25V32c0-17.6-13.3-32-29.55-32h0c-16.25,0-29.55,14.4-29.55,32V231.75L197,232V64c0-17.6-13.3-32-29.55-32h0c-16.26,0-29.55,14.4-29.55,32V247.75L123.1,248V128c0-17.6-13.3-32-29.55-32h0C77.3,96,64,110.4,64,128V344c0,75.8,37.13,168,169,168,40.8,0,79.42-7,100.66-21a121.41,121.41,0,0,0,33.72-33.31,138,138,0,0,0,16-31.78l62.45-175.14C452,234.46,444.64,215.71,429.58,209.08Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M432.8,211.44h0c-15.52-8.82-34.91-2.28-43.31,13.68l-41.38,84.41a7,7,0,0,1-8.93,3.43h0a7,7,0,0,1-4.41-6.52V72c0-13.91-12.85-24-26.77-24s-26,10.09-26,24V228.64A11.24,11.24,0,0,1,271.21,240,11,11,0,0,1,260,229V24c0-13.91-10.94-24-24.86-24S210,10.09,210,24V228.64A11.24,11.24,0,0,1,199.21,240,11,11,0,0,1,188,229V56c0-13.91-12.08-24-26-24s-26,11.09-26,25V244.64A11.24,11.24,0,0,1,125.21,256,11,11,0,0,1,114,245V120c0-13.91-11.08-24-25-24s-25.12,10.22-25,24V336c0,117.41,72,176,160,176h16c88,0,115.71-39.6,136-88l68.71-169C451.33,237,448.31,220.25,432.8,211.44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M432,320V144a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M368,256V80a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M240,241V96a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M304,240V48a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M432,320c0,117.4-64,176-152,176s-123.71-39.6-144-88L83.33,264c-6.66-18.05-3.64-34.79,11.87-43.6h0c15.52-8.82,35.91-4.28,44.31,11.68L176,320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M82.42,209.08h0c15.06-6.62,32.38,1.31,38.5,17.62L156,312h11.27V80c0-17.6,13.3-32,29.55-32h0c16.26,0,29.55,14.4,29.55,32V231.75l14.78.25V32c0-17.6,13.3-32,29.55-32h0C287,0,300.25,14.4,300.25,32V231.75L315,232V64c0-17.6,13.3-32,29.55-32h0c16.26,0,29.55,14.4,29.55,32V247.75l14.78.25V128c0-17.6,13.3-32,29.55-32h0C434.7,96,448,110.4,448,128V344c0,75.8-37.13,168-169,168-40.8,0-79.42-7-100.66-21a121.41,121.41,0,0,1-33.72-33.31,138,138,0,0,1-16-31.78L66.16,250.77C60.05,234.46,67.36,215.71,82.42,209.08Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M79.2,211.44h0c15.52-8.82,34.91-2.28,43.31,13.68l41.38,84.41a7,7,0,0,0,8.93,3.43h0a7,7,0,0,0,4.41-6.52V72c0-13.91,12.85-24,26.77-24s26,10.09,26,24V228.64A11.24,11.24,0,0,0,240.79,240,11,11,0,0,0,252,229V24c0-13.91,10.94-24,24.86-24S302,10.09,302,24V228.64A11.24,11.24,0,0,0,312.79,240,11,11,0,0,0,324,229V56c0-13.91,12.08-24,26-24s26,11.09,26,25V244.64A11.24,11.24,0,0,0,386.79,256,11,11,0,0,0,398,245V120c0-13.91,11.08-24,25-24s25.12,10.22,25,24V336c0,117.41-72,176-160,176H272c-88,0-115.71-39.6-136-88L67.33,255C60.67,237,63.69,220.25,79.2,211.44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <circle cx="184" cy="232" r="24" />
      <path d="M256.05,384c-45.42,0-83.62-29.53-95.71-69.83A8,8,0,0,1,168.16,304H343.85a8,8,0,0,1,7.82,10.17C339.68,354.47,301.47,384,256.05,384Z" />
      <circle cx="328" cy="232" r="24" />
      <circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM328,208a24,24,0,1,1-24,24A23.94,23.94,0,0,1,328,208Zm-144,0a24,24,0,1,1-24,24A23.94,23.94,0,0,1,184,208Zm72.05,176c-45.42,0-83.75-29.49-95.72-69.83C159.29,310.65,158,304,158,304H354s-1.31,6.69-2.33,10.17C339.89,354.53,301.47,384,256.05,384Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM184,208a24,24,0,1,1-24,24A23.94,23.94,0,0,1,184,208ZM351.67,314.17c-12,40.3-50.2,69.83-95.62,69.83s-83.62-29.53-95.72-69.83A8,8,0,0,1,168.16,304H343.85A8,8,0,0,1,351.67,314.17ZM328,256a24,24,0,1,1,24-24A23.94,23.94,0,0,1,328,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="80" y="80" width="352" height="352" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="144" y="144" width="224" height="224" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="80" x2="256" y2="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336" y1="80" x2="336" y2="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="80" x2="176" y2="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="464" x2="256" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336" y1="464" x2="336" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="464" x2="176" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="432" y1="256" x2="464" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="432" y1="336" x2="464" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="432" y1="176" x2="464" y2="176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="48" y1="256" x2="80" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="48" y1="336" x2="80" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="48" y1="176" x2="80" y2="176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="160" y="160" width="192" height="192" />
      <path d="M480,198V154H448V88a24,24,0,0,0-24-24H358V32H314V64H278V32H234V64H198V32H154V64H88A24,24,0,0,0,64,88v66H32v44H64v36H32v44H64v36H32v44H64v66a24,24,0,0,0,24,24h66v32h44V448h36v32h44V448h36v32h44V448h66a24,24,0,0,0,24-24V358h32V314H448V278h32V234H448V198ZM128,128H384V384H128Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M352,128H160a32,32,0,0,0-32,32V352a32,32,0,0,0,32,32H352a32,32,0,0,0,32-32V160A32,32,0,0,0,352,128Zm0,216a8,8,0,0,1-8,8H168a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H344a8,8,0,0,1,8,8Z" style="fill:none" />
      <rect x="160" y="160" width="192" height="192" rx="8" ry="8" />
      <path d="M464,192a16,16,0,0,0,0-32H448V128a64.07,64.07,0,0,0-64-64H352V48a16,16,0,0,0-32,0V64H272V48a16,16,0,0,0-32,0V64H192V48a16,16,0,0,0-32,0V64H128a64.07,64.07,0,0,0-64,64v32H48a16,16,0,0,0,0,32H64v48H48a16,16,0,0,0,0,32H64v48H48a16,16,0,0,0,0,32H64v32a64.07,64.07,0,0,0,64,64h32v16a16,16,0,0,0,32,0V448h48v16a16,16,0,0,0,32,0V448h48v16a16,16,0,0,0,32,0V448h32a64.07,64.07,0,0,0,64-64V352h16a16,16,0,0,0,0-32H448V272h16a16,16,0,0,0,0-32H448V192ZM384,352a32,32,0,0,1-32,32H160a32,32,0,0,1-32-32V160a32,32,0,0,1,32-32H352a32,32,0,0,1,32,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M83,384c-13-33-35-93.37-35-128C48,141.12,149.33,48,256,48s208,93.12,208,208c0,34.63-23,97-35,128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M108.39,270.13l-13.69,8h0C64.47,295.83,63,350.54,91.32,400.33s75.87,75.81,106.1,58.12h0l13.69-8a16.16,16.16,0,0,0,5.78-21.87L130,276A15.74,15.74,0,0,0,108.39,270.13Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M403.61,270.13l13.69,8h0c30.23,17.69,31.74,72.4,3.38,122.19s-75.87,75.81-106.1,58.12h0l-13.69-8a16.16,16.16,0,0,1-5.78-21.87L382,276A15.74,15.74,0,0,1,403.61,270.13Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M411.16,97.45C368.43,55.85,311.88,32,256,32S143.57,55.85,100.84,97.45C56.45,140.67,32,196,32,256S58.84,374.49,77.42,408.25,121,480,144,480c32,0,96-32,96-32L128,240,73.58,271.73a176.07,176.07,0,0,1-1-18.84c0-48.57,19.32-94.1,56.15-130C164.24,88.34,210,70,256,70s91.73,18.34,127.27,52.93c36.83,35.86,56.14,81.39,56.14,130a175.56,175.56,0,0,1-1,18.82L384,240,272,448s64,32,96,32c23,0,48-38,66.58-71.75S480,316,480,256,455.55,140.67,411.16,97.45Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M411.16,97.46C368.43,55.86,311.88,32,256,32S143.57,55.86,100.84,97.46C56.45,140.67,32,197,32,256c0,26.67,8.75,61.09,32.88,125.55S137,473,157.27,477.41c5.81,1.27,12.62,2.59,18.73,2.59a60.06,60.06,0,0,0,30-8l14-8c15.07-8.82,19.47-28.13,10.8-43.35L143.88,268.08a31.73,31.73,0,0,0-43.57-11.76l-13.69,8a56.49,56.49,0,0,0-14,11.59,4,4,0,0,1-7-2A114.68,114.68,0,0,1,64,256c0-50.31,21-98.48,59.16-135.61C160,84.55,208.39,64,256,64s96,20.55,132.84,56.39C427,157.52,448,205.69,448,256a114.68,114.68,0,0,1-1.68,17.91,4,4,0,0,1-7,2,56.49,56.49,0,0,0-14-11.59l-13.69-8a31.73,31.73,0,0,0-43.57,11.76L281.2,420.65c-8.67,15.22-4.27,34.53,10.8,43.35l14,8a60.06,60.06,0,0,0,30,8c6.11,0,12.92-1.32,18.73-2.59C375,473,423,446,447.12,381.55S480,282.67,480,256C480,197,455.55,140.67,411.16,97.46Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M256,360a16,16,0,0,1-9-2.78c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06,25.22-56.33,55.53-56.33,20.4,0,35,10.63,44.1,20.41a6,6,0,0,0,8.72,0c9.11-9.78,23.7-20.41,44.1-20.41,30.31,0,55.22,25.27,55.53,56.33.28,27.1-9.31,52.13-29.3,76.5-9.38,11.44-26.4,29.73-65.7,56.41A16,16,0,0,1,256,360Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm74.69,252.82C322.19,311.18,291,339.3,256,364.33c-35-25-66.19-53.15-74.69-63.51-20-24.37-29.58-49.4-29.3-76.5.31-31.06,25.22-56.33,55.53-56.33,22,0,37.3,12.41,46.19,22.76L256,193.5l2.27-2.75C267,180.29,282.42,168,304.46,168c30.31,0,55.22,25.27,55.53,56.33C360.27,251.42,350.68,276.45,330.69,300.82Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm74.69,252.82c-9.38,11.44-26.4,29.73-65.7,56.41a15.93,15.93,0,0,1-18,0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06,25.22-56.33,55.53-56.33,20.4,0,35,10.63,44.1,20.41a6,6,0,0,0,8.72,0c9.11-9.78,23.7-20.41,44.1-20.41,30.31,0,55.22,25.27,55.53,56.33C360.27,251.42,350.68,276.45,330.69,300.82Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M333.2,297.69c18.28-23.39,27.06-47.43,26.79-73.37-.31-31.06-25.22-56.33-55.53-56.33-20.4,0-35,10.64-44.11,20.42a5.93,5.93,0,0,1-8.7,0c-9.11-9.78-23.71-20.42-44.11-20.42L206,168a4,4,0,0,0-2.75,6.84l124,123.21A3.92,3.92,0,0,0,333.2,297.69Z" />
      <path d="M158.84,221a4,4,0,0,0-6.82,2.72c0,.21,0,.43,0,.64-.28,27.1,9.31,52.13,29.3,76.5,9.38,11.44,26.4,29.73,65.7,56.41a15.93,15.93,0,0,0,18,0c5.15-3.49,9.9-6.84,14.31-10a4,4,0,0,0,.46-6.07Z" />
      <path d="M336,368a15.92,15.92,0,0,1-11.31-4.69l-176-176a16,16,0,0,1,22.62-22.62l176,176A16,16,0,0,1,336,368Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm63.73,310.36L136.59,176.06l22.74-22.51L342.52,335.91Zm-63.51,4.86c-35.36-25-66.31-51.92-74.91-62.4-20-24.37-29.58-49.4-29.3-76.5a58.27,58.27,0,0,1,.85-9.31l130.21,129.4C279.64,347,266.86,355.86,256.22,363.22Zm74.47-62.4-.31.38L197.33,169a53.8,53.8,0,0,1,10.21-1,59.34,59.34,0,0,1,44.1,19.41L256,192l4.36-4.6A59.34,59.34,0,0,1,304.46,168c30.31,0,55.22,25.27,55.53,56.33C360.27,251.42,350.68,276.45,330.69,300.82Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm23.3,299.19c-4.41,3.2-9.16,6.55-14.31,10a15.93,15.93,0,0,1-18,0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5,0-.21,0-.43,0-.64a4,4,0,0,1,6.82-2.72L279.76,341.12A4,4,0,0,1,279.3,347.19Zm68,16.12a16,16,0,0,1-22.62,0l-176-176a16,16,0,0,1,22.62-22.62l176,176A16,16,0,0,1,347.31,363.31ZM333.2,297.69a3.92,3.92,0,0,1-6,.37l-124-123.21A4,4,0,0,1,206,168l1.55,0c20.4,0,35,10.64,44.11,20.42a5.93,5.93,0,0,0,8.7,0c9.11-9.78,23.71-20.42,44.11-20.42,30.31,0,55.22,25.27,55.53,56.33C360.26,250.26,351.48,274.3,333.2,297.69Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M417.84,448a15.94,15.94,0,0,1-11.35-4.72L40.65,75.26A16,16,0,0,1,63.35,52.7l365.83,368A16,16,0,0,1,417.84,448Z" />
      <path d="M364.92,80c-48.09,0-80,29.55-96.92,51-16.88-21.48-48.83-51-96.92-51a107.37,107.37,0,0,0-31,4.55L168,112c22.26,0,45.81,9,63.94,26.67a123,123,0,0,1,21.75,28.47,16,16,0,0,0,28.6,0,123,123,0,0,1,21.77-28.51C322.19,121,342.66,112,364.92,112c43.15,0,78.62,36.33,79.07,81,.54,53.69-22.75,99.55-57.38,139.52l22.63,22.77c3-3.44,5.7-6.64,8.14-9.6,40-48.75,59.15-98.8,58.61-153C475.37,130.52,425.54,80,364.92,80Z" />
      <path d="M268,432C180.38,372.51,91,297.6,92,193a83.69,83.69,0,0,1,2.24-18.39L69,149.14a115.1,115.1,0,0,0-9,43.49c-.54,54.22,18.63,104.27,58.61,153,18.77,22.87,52.8,59.45,131.39,112.8a31.84,31.84,0,0,0,36,0c20.35-13.81,37.7-26.5,52.58-38.11l-22.66-22.81C300.25,409.6,284.09,421.05,268,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <polygon points="32 64.45 421.47 454.39 444.31 431.92 54.85 42 32 64.45" />
      <path d="M62.67,192.91c-.56,55.63,19.77,106.94,62.16,156.88C165.08,397.21,219.39,429.46,262.3,458l9,6,9-6c18.49-12.3,39.1-25.3,59.79-39.89L71.74,149.28A114.62,114.62,0,0,0,62.67,192.91Z" />
      <path d="M417.83,349.79c42.39-49.94,62.72-101.25,62.16-156.88-.63-62-50.61-112.54-111.43-112.54-48.26,0-80.35,28-97.23,48.17-16.88-20.2-49-48.17-97.23-48.17A108.24,108.24,0,0,0,142.84,85l270,270.48C414.55,353.59,416.21,351.7,417.83,349.79Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M417.84,448a16,16,0,0,1-11.35-4.72L40.65,75.28a16,16,0,1,1,22.7-22.56l365.83,368A16,16,0,0,1,417.84,448Z" />
      <path d="M364.92,80c-44.09,0-74.61,24.82-92.39,45.5a6,6,0,0,1-9.06,0C245.69,104.82,215.16,80,171.08,80a107.71,107.71,0,0,0-31,4.54l269.13,270.7c3-3.44,5.7-6.64,8.14-9.6,40-48.75,59.15-98.79,58.61-153C475.37,130.53,425.54,80,364.92,80Z" />
      <path d="M69,149.15a115.06,115.06,0,0,0-9,43.49c-.54,54.21,18.63,104.25,58.61,153,18.77,22.87,52.8,59.45,131.39,112.8a31.88,31.88,0,0,0,36,0c20.35-13.82,37.7-26.5,52.58-38.12Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M352.92,64c-48.09,0-80,29.54-96.92,51-16.88-21.49-48.83-51-96.92-51C98.46,64,48.63,114.54,48,176.65c-.54,54.21,18.63,104.27,58.61,153,18.77,22.88,52.8,59.46,131.39,112.81a31.84,31.84,0,0,0,36,0c78.59-53.35,112.62-89.93,131.39-112.81,40-48.74,59.15-98.8,58.61-153C463.37,114.54,413.54,64,352.92,64ZM256,416V207.58c0-19.63,5.23-38.76,14.21-56.22a1.19,1.19,0,0,1,.08-.16,123,123,0,0,1,21.77-28.51C310.19,105,330.66,96,352.92,96c43.15,0,78.62,36.32,79.07,81C433,281.61,343.63,356.51,256,416Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M352.92,64c-48.11,0-80.1,28-96.92,48.21C239.18,92,207.19,64,159.08,64,98.46,64,48.63,114.54,48,176.65c-.56,55.68,19.71,107,62,157,40.12,47.46,94.25,79.75,137,108.32l9,6,9-6c42.78-28.57,96.91-60.86,137-108.32,42.25-50,62.52-101.35,62-157C463.37,114.54,413.54,64,352.92,64Zm24.67,249c-31.78,37.6-74.68,65.75-112.52,90.59l-9.07,6V162.23l24.59-29.54C294.53,116,318.38,96,352.92,96c43.15,0,78.62,36.32,79.07,81a178.63,178.63,0,0,1-12.69,68.59C410.27,268.43,396.63,290.5,377.59,313Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M352.92,64c-48.09,0-80,29.54-96.92,51-16.88-21.49-48.83-51-96.92-51C98.46,64,48.63,114.54,48,176.65c-.54,54.21,18.63,104.27,58.61,153,18.77,22.88,52.8,59.46,131.39,112.81a31.84,31.84,0,0,0,36,0c78.59-53.35,112.62-89.93,131.39-112.81,40-48.74,59.15-98.8,58.61-153C463.37,114.54,413.54,64,352.92,64ZM256,416V207.58c0-19.63,5.23-38.76,14.21-56.22a1.19,1.19,0,0,1,.08-.16,123,123,0,0,1,21.77-28.51C310.19,105,330.66,96,352.92,96c43.15,0,78.62,36.32,79.07,81C433,281.61,343.63,356.51,256,416Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,448l-9-6c-42.78-28.57-96.91-60.86-137-108.32-42.25-50-62.52-101.35-62-157C48.63,114.54,98.46,64,159.08,64c48.11,0,80.1,28,96.92,48.21C272.82,92,304.81,64,352.92,64,413.54,64,463.37,114.54,464,176.65c.56,55.68-19.71,107-62,157C361.91,381.14,307.78,413.43,265,442Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,448a32,32,0,0,1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63,114.52,98.46,64,159.08,64c44.08,0,74.61,24.83,92.39,45.51a6,6,0,0,0,9.06,0C278.31,88.81,308.84,64,352.92,64,413.54,64,463.37,114.52,464,176.64c.54,54.21-18.63,104.26-58.61,153-18.77,22.87-52.8,59.45-131.39,112.8A32,32,0,0,1,256,448Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="256" r="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="208" y1="54" x2="216" y2="186" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="296" y1="186" x2="304" y2="54" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="208" y1="458" x2="216" y2="326" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="296" y1="326" x2="304" y2="458" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="458" y1="208" x2="326" y2="216" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="326" y1="296" x2="458" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="54" y1="208" x2="186" y2="216" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="186" y1="296" x2="54" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M256,32C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32ZM192,256a64,64,0,1,1,64,64A64,64,0,0,1,192,256Zm237.24-62.29L342.91,199a104.86,104.86,0,0,0-29.86-29.86l5.24-86.33a185,185,0,0,1,111,111ZM125.89,125.89a183.44,183.44,0,0,1,67.82-43.13L199,169.09A104.86,104.86,0,0,0,169.09,199l-86.33-5.24A183.44,183.44,0,0,1,125.89,125.89ZM82.76,318.29l86.33-5.24A104.86,104.86,0,0,0,199,342.91l-5.24,86.33A185,185,0,0,1,82.76,318.29Zm303.35,67.82a183.44,183.44,0,0,1-67.82,43.13l-5.24-86.33a104.86,104.86,0,0,0,29.86-29.86l86.33,5.24A183.44,183.44,0,0,1,386.11,386.11Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM192.13,260.18a64,64,0,1,1,59.69,59.69A64.07,64.07,0,0,1,192.13,260.18Zm240-66.64-96.37,5.84a4.06,4.06,0,0,1-3.44-1.59,96,96,0,0,0-18.07-18.07,4.06,4.06,0,0,1-1.59-3.44l5.84-96.37a4,4,0,0,1,5.42-3.51A193,193,0,0,1,435.6,188.12,4,4,0,0,1,432.09,193.54ZM193.54,79.91l5.84,96.37a4.06,4.06,0,0,1-1.59,3.44,96,96,0,0,0-18.07,18.07,4.06,4.06,0,0,1-3.44,1.59l-96.37-5.84a4,4,0,0,1-3.51-5.42A193,193,0,0,1,188.12,76.4,4,4,0,0,1,193.54,79.91ZM79.91,318.46l96.37-5.84a4.06,4.06,0,0,1,3.44,1.59,96,96,0,0,0,18.07,18.07,4.06,4.06,0,0,1,1.59,3.44l-5.84,96.37a4,4,0,0,1-5.42,3.51A193,193,0,0,1,76.4,323.88,4,4,0,0,1,79.91,318.46ZM318.46,432.09l-5.84-96.37a4.06,4.06,0,0,1,1.59-3.44,96,96,0,0,0,18.07-18.07,4.06,4.06,0,0,1,3.44-1.59l96.37,5.84a4,4,0,0,1,3.51,5.42A193,193,0,0,1,323.88,435.6,4,4,0,0,1,318.46,432.09Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:28px" />
      <circle cx="250" cy="348" r="20" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M288.55,150.84c-8.09-3.86-20-6-32.72-5.82-18,.22-33.13,5.2-45,14.78-23,18.48-24.55,40.37-24.77,42.8a61.69,61.69,0,0,0-.09,12,3,3,0,0,0,3,2.69h21.23a3,3,0,0,0,3-3A65.7,65.7,0,0,1,214,204c0-.11,1.14-11.7,14.36-22.34,7-5.64,16.11-8.44,27.83-8.59,9.32-.11,16.93,1.47,20.34,3.09C291,183,298,192.31,298,204.57c0,18-10.9,26.23-30.18,39.18C247.08,257.68,237,275.1,237,297v11a3,3,0,0,0,3,3h22a3,3,0,0,0,3-3V297c0-9.16,2.23-19.13,18.44-30C303.39,253.59,326,238.4,326,204.57,326,181.43,312.7,162.34,288.55,150.84Z" style="fill:none" />
      <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Zm10.44,302H236.23a2.57,2.57,0,0,1-2.56-2.57v-30.2a2.57,2.57,0,0,1,2.56-2.57h30.21a2.57,2.57,0,0,1,2.56,2.57v30.2A2.57,2.57,0,0,1,266.44,366Zm17-99C267.23,277.88,265,287.85,265,297v11a3,3,0,0,1-3,3H240a3,3,0,0,1-3-3V297c0-21.91,10.08-39.33,30.82-53.26C287.1,230.8,298,222.6,298,204.57c0-12.26-7-21.57-21.49-28.46-3.41-1.62-11-3.2-20.34-3.09-11.72.15-20.82,2.95-27.83,8.59C215.12,192.25,214,203.84,214,204a65.7,65.7,0,0,0-.84,10.28,3,3,0,0,1-3,3H188.91a3,3,0,0,1-3-2.69,61.69,61.69,0,0,1,.09-12c.22-2.43,1.8-24.32,24.77-42.8,11.91-9.58,27.06-14.56,45-14.78,12.7-.15,24.63,2,32.72,5.82C312.7,162.34,326,181.43,326,204.57,326,238.4,303.39,253.59,283.44,267Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Zm-6,304a20,20,0,1,1,20-20A20,20,0,0,1,250,368Zm33.44-102C267.23,276.88,265,286.85,265,296a14,14,0,0,1-28,0c0-21.91,10.08-39.33,30.82-53.26C287.1,229.8,298,221.6,298,203.57c0-12.26-7-21.57-21.49-28.46-3.41-1.62-11-3.2-20.34-3.09-11.72.15-20.82,2.95-27.83,8.59C215.12,191.25,214,202.83,214,203a14,14,0,1,1-28-1.35c.11-2.43,1.8-24.32,24.77-42.8,11.91-9.58,27.06-14.56,45-14.78,12.7-.15,24.63,2,32.72,5.82C312.7,161.34,326,180.43,326,203.57,326,237.4,303.39,252.59,283.44,266Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M160,164s1.44-33,33.54-59.46C212.6,88.83,235.49,84.28,256,84c18.73-.23,35.47,2.94,45.48,7.82C318.59,100.2,352,120.6,352,164c0,45.67-29.18,66.37-62.35,89.18S248,298.36,248,324" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:40px" />
      <circle cx="248" cy="399.99" r="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M160,164c0-10,1.44-33,33.54-59.46C212.6,88.83,235.49,84.28,256,84c18.73-.23,35.47,2.94,45.48,7.82C318.59,100.2,352,120.6,352,164c0,45.67-29.18,66.37-62.35,89.18S248,290.36,248,316" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:40px" />
      <rect x="220" y="368" width="56" height="56" rx="3.5" ry="3.5" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M160,164s1.44-33,33.54-59.46C212.6,88.83,235.49,84.28,256,84c18.73-.23,35.47,2.94,45.48,7.82C318.59,100.2,352,120.6,352,164c0,45.67-29.18,66.37-62.35,89.18S248,298.36,248,324" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:40px" />
      <circle cx="248" cy="399.99" r="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M80,212V448a16,16,0,0,0,16,16h96V328a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24V464h96a16,16,0,0,0,16-16V212" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M480,256,266.89,52c-5-5.28-16.69-5.34-21.78,0L32,256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="400 179 400 64 352 64 352 133" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <polygon points="416 174.74 416 48 336 48 336 106.45 256 32 0 272 64 272 64 480 208 480 208 320 304 320 304 480 448 480 448 272 512 272 416 174.74" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M261.56,101.28a8,8,0,0,0-11.06,0L66.4,277.15a8,8,0,0,0-2.47,5.79L63.9,448a32,32,0,0,0,32,32H192a16,16,0,0,0,16-16V328a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8l0,136a16,16,0,0,0,16,16h96.06a32,32,0,0,0,32-32l0-165.06a8,8,0,0,0-2.47-5.79Z" />
      <path d="M490.91,244.15l-74.8-71.56,0-108.59a16,16,0,0,0-16-16h-48a16,16,0,0,0-16,16l0,32L278.19,40.62C272.77,35.14,264.71,32,256,32h0c-8.68,0-16.72,3.14-22.14,8.63L21.16,244.13c-6.22,6-7,15.87-1.34,22.37A16,16,0,0,0,43,267.56L250.5,69.28a8,8,0,0,1,11.06,0L469.08,267.56a16,16,0,0,0,22.59-.44C497.81,260.76,497.3,250.26,490.91,244.15Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M145.61,464H366.39c19.8,0,35.55-16.29,33.42-35.06C386.06,308,304,310,304,256s83.11-51,95.8-172.94c2-18.78-13.61-35.06-33.41-35.06H145.61c-19.8,0-35.37,16.28-33.41,35.06C124.89,205,208,201,208,256s-82.06,52-95.8,172.94C110.06,447.71,125.81,464,145.61,464Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M343.3,432H169.13c-15.6,0-20-18-9.06-29.16C186.55,376,240,356.78,240,326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8,6.37-12.8H327.59c8.41,0,10.23,7.43,6.4,12.75C310.82,189,272,204.05,272,224V326c0,30.53,55.71,47,80.4,76.87C362.35,414.91,358.87,432,343.3,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M416,32H96V144L204,256,96,368V480H416V368L308,256,416,144ZM272,224V336l91,96H148l92-96V224l-80-80H352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M415.7,427.13c-8.74-76.89-43.83-108.76-69.46-132C328.52,279,320,270.61,320,256c0-14.41,8.49-22.64,26.16-38.44,25.93-23.17,61.44-54.91,69.56-132.84a47,47,0,0,0-12-36.26A50.3,50.3,0,0,0,366.39,32H145.61a50.34,50.34,0,0,0-37.39,16.46A47.05,47.05,0,0,0,96.28,84.72c8.09,77.68,43.47,109.19,69.3,132.19C183.42,232.8,192,241.09,192,256c0,15.1-8.6,23.56-26.5,39.75C140,318.85,105,350.48,96.3,427.13A46.59,46.59,0,0,0,108,463.33,50.44,50.44,0,0,0,145.61,480H366.39A50.44,50.44,0,0,0,404,463.33,46.59,46.59,0,0,0,415.7,427.13ZM343.3,432H169.13c-15.6,0-20-18-9.06-29.16C186.55,376,240,356.78,240,326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8,6.37-12.8H327.59c8.41,0,10.22,7.43,6.4,12.75C310.82,189,272,204.05,272,224V326c0,30.53,55.71,47,80.4,76.87C362.35,414.91,358.87,432,343.3,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <polyline points="352 256 256 480 194 335" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M299.42,223.48C291.74,239.75,275.18,252,256,252c-13.1,0-27-5-33.63-9.76C216.27,237.87,208,240,208,250v62a24.07,24.07,0,0,1-24,24h0a24.07,24.07,0,0,1-24-24V256h-2c-35.35,0-62-28.65-62-64a64,64,0,0,1,64-64h8v-8a88,88,0,0,1,176,0v8h8a64,64,0,0,1,0,128c-21.78,0-42-13-52.59-32.51Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M359.72,112.37a104,104,0,0,0-207.44,0A80.12,80.12,0,0,0,80,192c0,39.36,26.37,71.23,62.38,78.46a2,2,0,0,1,1.62,2v38.83c0,21.84,17.2,40.22,39,40.74a40,40,0,0,0,41-40V264.19a2,2,0,0,1,2.72-1.86A83.47,83.47,0,0,0,256,268a63.18,63.18,0,0,0,42.24-16.59,2,2,0,0,1,2.74,0A74.63,74.63,0,0,0,352,272a80,80,0,0,0,7.72-159.63Z" />
      <path d="M256,300v12a72.1,72.1,0,0,1-58.21,70.64L256,496l92.06-192.08a105.29,105.29,0,0,1-49.18-14.36A93.75,93.75,0,0,1,256,300Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M183,352c-21.84-.52-39-18.9-39-40.74V277.19a8,8,0,0,0-6-7.74C104.25,260.6,80,229.74,80,192a80.14,80.14,0,0,1,66.27-78.82,8,8,0,0,0,6.62-6.83,104,104,0,0,1,206.22,0,8,8,0,0,0,6.62,6.83A80,80,0,0,1,352,272a74.33,74.33,0,0,1-47.45-17.41,7.93,7.93,0,0,0-9.92-.14A62.89,62.89,0,0,1,256,268a80.47,80.47,0,0,1-21.8-3.18,8,8,0,0,0-10.2,7.69V312A40,40,0,0,1,183,352Z" />
      <path d="M263.39,299.7a8,8,0,0,0-7.39,7.91V312a72.11,72.11,0,0,1-50.69,68.76,8,8,0,0,0-4.91,10.78l40.91,94.8A16,16,0,0,0,256,496h0a16,16,0,0,0,14.69-9.7l73.78-172.15a8,8,0,0,0-6.2-11.07,106.31,106.31,0,0,1-35.9-11.59,8,8,0,0,0-7.13-.2A95,95,0,0,1,263.39,299.7Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="96" y="32" width="320" height="448" rx="48" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" />
      <line x1="208" y1="80" x2="304" y2="80" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <path d="M333.48,284.51A39.65,39.65,0,0,0,304,272c-11.6,0-22.09,4.41-29.54,12.43s-11.2,19.12-10.34,31C265.83,338.91,283.72,358,304,358s38.14-19.09,39.87-42.55C344.75,303.67,341.05,292.68,333.48,284.51Z" />
      <path d="M371.69,448H236.31a12.05,12.05,0,0,1-9.31-4.17,13,13,0,0,1-2.76-10.92c3.25-17.56,13.38-32.31,29.3-42.66C267.68,381.06,285.6,376,304,376s36.32,5.06,50.46,14.25c15.92,10.35,26.05,25.1,29.3,42.66A13,13,0,0,1,381,443.83,12.05,12.05,0,0,1,371.69,448Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M408,16H104A24,24,0,0,0,80,40V472a24,24,0,0,0,24,24H408a24,24,0,0,0,24-24V40A24,24,0,0,0,408,16ZM346.9,312.77a43,43,0,1,1-40.71-40.71A43,43,0,0,1,346.9,312.77ZM192,64H320V96H192ZM384,448H224V423.4c0-32.72,53.27-49.21,80-49.21s80,16.49,80,49.21Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M368,16H144A64.07,64.07,0,0,0,80,80V432a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,368,16ZM333.48,284.51c7.57,8.17,11.27,19.16,10.39,30.94C342.14,338.91,324.25,358,304,358s-38.17-19.09-39.88-42.55c-.86-11.9,2.81-22.91,10.34-31S292.4,272,304,272A39.65,39.65,0,0,1,333.48,284.51ZM192,80a16,16,0,0,1,16-16h96a16,16,0,0,1,0,32H208A16,16,0,0,1,192,80ZM381,443.83a12.05,12.05,0,0,1-9.31,4.17H236.31a12.05,12.05,0,0,1-9.31-4.17,13,13,0,0,1-2.76-10.92c3.25-17.56,13.38-32.31,29.3-42.66C267.68,381.06,285.6,376,304,376s36.32,5.06,50.46,14.25c15.92,10.35,26.05,25.1,29.3,42.66A13,13,0,0,1,381,443.83Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <rect x="48" y="80" width="416" height="352" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="336" cy="176" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M304,335.79,213.34,245.3A32,32,0,0,0,169.47,244L48,352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M224,432,347.34,308.66a32,32,0,0,1,43.11-2L464,368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M456,64H56A24,24,0,0,0,32,88V424a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V88A24,24,0,0,0,456,64ZM331.62,128.2a48,48,0,1,1-43.42,43.42A48,48,0,0,1,331.62,128.2ZM76,416a12,12,0,0,1-12-12V316.37L192.64,202l96.95,96.75L172.37,416Zm372-12a12,12,0,0,1-12,12H217.63L367.16,266.47,448,333.84Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M416,64H96a64.07,64.07,0,0,0-64,64V384a64.07,64.07,0,0,0,64,64H416a64.07,64.07,0,0,0,64-64V128A64.07,64.07,0,0,0,416,64Zm-80,64a48,48,0,1,1-48,48A48.05,48.05,0,0,1,336,128ZM96,416a32,32,0,0,1-32-32V316.37l94.84-84.3a48.06,48.06,0,0,1,65.8,1.9l64.95,64.81L172.37,416Zm352-32a32,32,0,0,1-32,32H217.63L339.05,294.58a47.72,47.72,0,0,1,61.64-.16L448,333.84Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M432,112V96a48.14,48.14,0,0,0-48-48H64A48.14,48.14,0,0,0,16,96V352a48.14,48.14,0,0,0,48,48H80" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="96" y="128" width="400" height="336" rx="45.99" ry="45.99" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <ellipse cx="372.92" cy="219.64" rx="30.77" ry="30.55" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M342.15,372.17,255,285.78a30.93,30.93,0,0,0-42.18-1.21L96,387.64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M265.23,464,383.82,346.27a31,31,0,0,1,41.46-1.87L496,402.91" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <ellipse cx="373.14" cy="219.33" rx="46.29" ry="46" style="fill:none" />
      <path d="M80,132V460a20,20,0,0,0,20,20H492a20,20,0,0,0,20-20V132a20,20,0,0,0-20-20H100A20,20,0,0,0,80,132Zm293.14,41.33a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-261.41,276V353.85l122.76-110.2L328.27,337l-113,112.33Zm368.27,0H259l144.58-144L480,370.59Z" />
      <path d="M20,32A20,20,0,0,0,0,52V396a20,20,0,0,0,20,20H48V100A20,20,0,0,1,68,80H448V52a20,20,0,0,0-20-20Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z" />
      <path d="M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,256s-48-96-126-96c-54.12,0-98,43-98,96s43.88,96,98,96c37.51,0,71-22.41,94-48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M256,256s48,96,126,96c54.12,0,98-43,98-96s-43.88-96-98-96c-37.51,0-71,22.41-94,48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M382,136c-40.87,0-73.46,20.53-93.6,37.76l-.71.61-11.47,12.47,25.32,41.61,18.74-18.79C339.89,193.1,361.78,184,382,184c40.8,0,74,32.3,74,72s-33.2,72-74,72c-62,0-104.14-81.95-104.56-82.78h0C275,240.29,221.56,136,130,136,62.73,136,8,189.83,8,256S62.73,376,130,376c32.95,0,65.38-13.11,93.79-37.92l.61-.54,11.38-12.38-25.33-41.61-18.83,18.88C172,319.4,151.26,328,130,328c-40.8,0-74-32.3-74-72s33.2-72,74-72c62,0,104.14,81.95,104.56,82.78h0C237,271.71,290.44,376,382,376c67.27,0,122-53.83,122-120S449.27,136,382,136Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,256s-48-96-126-96c-54.12,0-98,43-98,96s43.88,96,98,96c30,0,56.45-13.18,78-32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px" />
      <path d="M256,256s48,96,126,96c54.12,0,98-43,98-96s-43.88-96-98-96c-29.37,0-56.66,13.75-78,32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M248,64C146.39,64,64,146.39,64,248s82.39,184,184,184,184-82.39,184-184S349.61,64,248,64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="220 220 252 220 252 336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="208" y1="340" x2="296" y2="340" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M248,130a26,26,0,1,0,26,26A26,26,0,0,0,248,130Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,56C145.72,56,56,145.72,56,256s89.72,200,200,200,200-89.72,200-200S366.28,56,256,56Zm0,82a26,26,0,1,1-26,26A26,26,0,0,1,256,138Zm64,226H200V332h44V244H212V212h64V332h44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M256,56C145.72,56,56,145.72,56,256s89.72,200,200,200,200-89.72,200-200S366.28,56,256,56Zm0,82a26,26,0,1,1-26,26A26,26,0,0,1,256,138Zm48,226H216a16,16,0,0,1,0-32h28V244H228a16,16,0,0,1,0-32h32a16,16,0,0,1,16,16V332h28a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <polyline points="196 220 260 220 260 392" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:40px" />
      <line x1="187" y1="396" x2="325" y2="396" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:40px" />
      <path d="M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <polyline points="196 220 260 220 260 392" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:40px" />
      <line x1="187" y1="396" x2="325" y2="396" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:40px" />
      <path d="M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <polyline points="196 220 260 220 260 392" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:40px" />
      <line x1="187" y1="396" x2="325" y2="396" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:40px" />
      <path d="M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" cx="256" cy="256" r="208" />
      <path d="M256,176V336a80,80,0,0,1,0-160Z" />
      <path d="M256,48V176a80,80,0,0,1,0,160V464c114.88,0,208-93.12,208-208S370.88,48,256,48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM256,432V336a80,80,0,0,1,0-160V80C353.05,80,432,159,432,256S353.05,432,256,432Z" />
      <path d="M336,256a80,80,0,0,0-80-80V336A80,80,0,0,0,336,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" cx="256" cy="256" r="208" />
      <path d="M256,176V336a80,80,0,0,0,0-160Z" />
      <path d="M256,48V176a80,80,0,0,0,0,160V464C141.12,464,48,370.88,48,256S141.12,48,256,48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <rect x="96" y="48" width="320" height="416" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="320" y1="48" x2="320" y2="464" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:60px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M290,32H104A24,24,0,0,0,80,56V456a24,24,0,0,0,24,24H290Z" />
      <path d="M408,32H350V480h58a24,24,0,0,0,24-24V56A24,24,0,0,0,408,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M290,32H144A64.07,64.07,0,0,0,80,96V416a64.07,64.07,0,0,0,64,64H290Z" />
      <path d="M368,32H350V480h18a64.07,64.07,0,0,0,64-64V96A64.07,64.07,0,0,0,368,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M218.1,167.17c0,13,0,25.6,4.1,37.4-43.1,50.6-156.9,184.3-167.5,194.5a20.17,20.17,0,0,0-6.7,15c0,8.5,5.2,16.7,9.6,21.3,6.6,6.9,34.8,33,40,28,15.4-15,18.5-19,24.8-25.2,9.5-9.3-1-28.3,2.3-36s6.8-9.2,12.5-10.4,15.8,2.9,23.7,3c8.3.1,12.8-3.4,19-9.2,5-4.6,8.6-8.9,8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7,6.2,34,5,22.8-15.5,24.1-21.6-11.7-21.8-9.7-30.7c.7-3,6.8-10,11.4-11s25,6.9,29.6,5.9c5.6-1.2,12.1-7.1,17.4-10.4,15.5,6.7,29.6,9.4,47.7,9.4,68.5,0,124-53.4,124-119.2S408.5,48,340,48,218.1,101.37,218.1,167.17ZM400,144a32,32,0,1,1-32-32A32,32,0,0,1,400,144Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M218.1,167.2c0,13,0,25.6,4.1,37.4C179.1,255.2,54.7,399.1,54.7,399.1l2.9,36.3s34.8,33,40,28c15.4-15,24.8-25.2,24.8-25.2l7.24-43.35,47.11-3.47,3.78-46.8,49.63-.95.49-50.09,52.69,2.1,9-18.84c15.5,6.7,29.6,9.4,47.7,9.4,68.5,0,124-53.4,124-119.2S408.5,48,340,48,218.1,101.4,218.1,167.2ZM406.85,144A38.85,38.85,0,1,1,368,105.15,38.81,38.81,0,0,1,406.85,144Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M218.1,167.17c0,13,0,25.6,4.1,37.4-43.1,50.6-156.9,184.3-167.5,194.5a20.17,20.17,0,0,0-6.7,15c0,8.5,5.2,16.7,9.6,21.3,6.6,6.9,34.8,33,40,28,15.4-15,18.5-19,24.8-25.2,9.5-9.3-1-28.3,2.3-36s6.8-9.2,12.5-10.4,15.8,2.9,23.7,3c8.3.1,12.8-3.4,19-9.2,5-4.6,8.6-8.9,8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7,6.2,34,5,22.8-15.5,24.1-21.6-11.7-21.8-9.7-30.7c.7-3,6.8-10,11.4-11s25,6.9,29.6,5.9c5.6-1.2,12.1-7.1,17.4-10.4,15.5,6.7,29.6,9.4,47.7,9.4,68.5,0,124-53.4,124-119.2S408.5,48,340,48,218.1,101.37,218.1,167.17ZM400,144a32,32,0,1,1-32-32A32,32,0,0,1,400,144Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <circle cx="256" cy="448" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="320" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M288,192a32,32,0,1,1-32-32A32,32,0,0,1,288,192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="64" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="384" cy="320" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="384" cy="192" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="384" cy="64" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="128" cy="320" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="128" cy="192" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="128" cy="64" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <rect x="80" y="16" width="96" height="96" rx="8" ry="8" />
      <rect x="208" y="16" width="96" height="96" rx="8" ry="8" />
      <rect x="336" y="16" width="96" height="96" rx="8" ry="8" />
      <rect x="80" y="144" width="96" height="96" rx="8" ry="8" />
      <rect x="208" y="144" width="96" height="96" rx="8" ry="8" />
      <rect x="336" y="144" width="96" height="96" rx="8" ry="8" />
      <rect x="80" y="272" width="96" height="96" rx="8" ry="8" />
      <rect x="208" y="272" width="96" height="96" rx="8" ry="8" />
      <rect x="208" y="400" width="96" height="96" rx="8" ry="8" />
      <rect x="336" y="272" width="96" height="96" rx="8" ry="8" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <line x1="48" y1="112" x2="336" y2="112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="192" y1="64" x2="192" y2="112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="272 448 368 224 464 448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="301.5" y1="384" x2="434.5" y2="384" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M281.3,112S257,206,199,277,80,384,80,384" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,336s-35-27-72-75-56-85-56-85" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z" />
      <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M478.33,433.6l-90-218a22,22,0,0,0-40.67,0l-90,218a22,22,0,1,0,40.67,16.79L316.66,406H419.33l18.33,44.39A22,22,0,0,0,458,464a22,22,0,0,0,20.32-30.4ZM334.83,362,368,281.65,401.17,362Z" />
      <path d="M267.84,342.92a22,22,0,0,0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73,39.65-53.68,62.11-114.75,71.27-143.49H330a22,22,0,0,0,0-44H214V70a22,22,0,0,0-44,0V90H54a22,22,0,0,0,0,44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-31.41-41.68-43.08-68.65-43.17-68.87a22,22,0,0,0-40.58,17c.58,1.38,14.55,34.23,52.86,83.93.92,1.19,1.83,2.35,2.74,3.51-39.24,44.35-77.74,71.86-93.85,80.74a22,22,0,1,0,21.07,38.63c2.16-1.18,48.6-26.89,101.63-85.59,22.52,24.08,38,35.44,38.93,36.1a22,22,0,0,0,30.75-4.9Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <rect x="48" y="96" width="416" height="304" rx="32.14" ry="32.14" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="16" y1="416" x2="496" y2="416" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M477.29,400A27.75,27.75,0,0,0,480,388V108a28,28,0,0,0-28-28H60a28,28,0,0,0-28,28V388a27.75,27.75,0,0,0,2.71,12H0v32H512V400Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M496,400H467.66A47.92,47.92,0,0,0,480,367.86V128.14A48.2,48.2,0,0,0,431.86,80H80.14A48.2,48.2,0,0,0,32,128.14V367.86A47.92,47.92,0,0,0,44.34,400H16a16,16,0,0,0,0,32H496a16,16,0,0,0,0-32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M434.8,137.65,285.44,69.55c-16.19-7.4-42.69-7.4-58.88,0L77.3,137.65c-17.6,8-17.6,21.09,0,29.09l148,67.5c16.89,7.7,44.69,7.7,61.58,0l148-67.5C452.4,158.74,452.4,145.64,434.8,137.65Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M160,308.52,77.3,345.63c-17.6,8-17.6,21.1,0,29.1l148,67.5c16.89,7.69,44.69,7.69,61.58,0l148-67.5c17.6-8,17.6-21.1,0-29.1l-79.94-38.47" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M160,204.48,77.2,241.64c-17.6,8-17.6,21.1,0,29.1l148,67.49c16.89,7.7,44.69,7.7,61.58,0l148-67.49c17.7-8,17.7-21.1.1-29.1L352,204.48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polygon points="480 150 256 48 32 150 256 254 480 150" />
      <polygon points="255.71 392.95 110.9 326.75 32 362 256 464 480 362 401.31 326.7 255.71 392.95" />
      <path d="M480,256l-75.53-33.53L256.1,290.6,107.33,222.43,32,256,256,358,480,256S480,256,480,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,256c-13.47,0-26.94-2.39-37.44-7.17l-148-67.49C63.79,178.26,48,169.25,48,152.24s15.79-26,22.58-29.12L219.86,55.05c20.57-9.4,51.61-9.4,72.19,0l149.37,68.07c6.79,3.09,22.58,12.1,22.58,29.12s-15.79,26-22.58,29.11l-148,67.48C282.94,253.61,269.47,256,256,256ZM432.76,155.14h0Z" />
      <path d="M441.36,226.81,426.27,220,387.5,237.74l-94,43c-10.5,4.8-24,7.19-37.44,7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79,220l-15.22,6.84C63.79,229.93,48,239,48,256s15.79,26.08,22.56,29.17l148,67.63C229,357.6,242.49,360,256,360s26.94-2.4,37.44-7.19L441.31,285.2C448.12,282.11,464,273.09,464,256S448.23,229.93,441.36,226.81Z" />
      <path d="M441.36,330.8,426.27,324,387.5,341.73l-94,42.95c-10.5,4.78-24,7.18-37.44,7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79,324l-15.22,6.84C63.79,333.93,48,343,48,360s15.79,26.07,22.56,29.15l148,67.59C229,461.52,242.54,464,256,464s26.88-2.48,37.38-7.27l147.92-67.57C448.12,386.08,464,377.06,464,360S448.23,333.93,441.36,330.8Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M321.89,171.42C233,114,141,155.22,56,65.22c-19.8-21-8.3,235.5,98.1,332.7C231.89,468.92,352,461,392.5,392S410.78,228.83,321.89,171.42Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M173,253c86,81,175,129,292,147" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M150.38,253.68l21.94-23.3,11.65,11c73.63,69.36,147.51,111.56,234.45,133.07,11.73-32,12.77-67.22,2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.25-26-76.6-32.09-115.09-38.54-21.12-3.54-43-7.2-66.85-14.43C104.85,91.76,58.94,52.3,58.48,51.91L33.4,30.15,32,63.33c-.1,2.56-2.42,63.57,14.22,147.77,17.58,89,50.24,155.85,97.07,198.63,38,34.69,87.62,53.9,136.93,53.9A185.88,185.88,0,0,0,308,461.56c41.72-6.32,76.43-27.27,96-57.75-89.5-23.28-165.95-67.55-242-139.16Z" />
      <path d="M467.43,384.19c-16.83-2.59-33.13-5.84-49-9.77A158.49,158.49,0,0,1,406.3,400.1c-.74,1.25-1.51,2.49-2.29,3.71a583.43,583.43,0,0,0,58.55,12l15.82,2.44,4.86-31.63Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M161.35,242a16,16,0,0,1,22.62-.68c73.63,69.36,147.51,111.56,234.45,133.07,11.73-32,12.77-67.22,2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.84-26.38-81.66-33.25-121.15-39.89-49.82-8.38-96.88-16.3-141.79-63.85-5-5.26-11.81-7.37-18.32-5.66-7.44,2-12.43,7.88-14.82,17.6-5.6,22.75-2,86.51,13.75,153.82,25.29,108.14,65.65,162.86,95.06,189.73,38,34.69,87.62,53.9,136.93,53.9A186,186,0,0,0,308,461.56c41.71-6.32,76.43-27.27,96-57.75-89.49-23.28-165.94-67.55-242-139.16A16,16,0,0,1,161.35,242Z" />
      <path d="M467.43,384.19c-16.83-2.59-33.13-5.84-49-9.77a157.71,157.71,0,0,1-12.13,25.68c-.73,1.25-1.5,2.49-2.29,3.71a584.21,584.21,0,0,0,58.56,12,16,16,0,1,0,4.87-31.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="32" y="96" width="64" height="368" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="224" x2="240" y2="224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="400" x2="240" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="112" y="160" width="128" height="304" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="256" y="48" width="96" height="416" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M422.46,96.11l-40.4,4.25c-11.12,1.17-19.18,11.57-17.93,23.1l34.92,321.59c1.26,11.53,11.37,20,22.49,18.84l40.4-4.25c11.12-1.17,19.18-11.57,17.93-23.1L445,115C443.69,103.42,433.58,94.94,422.46,96.11Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M84,480H28a12,12,0,0,1-12-12V92A12,12,0,0,1,28,80H84A12,12,0,0,1,96,92V468A12,12,0,0,1,84,480Z" />
      <path d="M240,208V156a12,12,0,0,0-12-12H124a12,12,0,0,0-12,12v52Z" />
      <path d="M112,416v52a12,12,0,0,0,12,12H228a12,12,0,0,0,12-12V416Z" />
      <rect x="112" y="240" width="128" height="144" />
      <path d="M340,480H268a12,12,0,0,1-12-12V44a12,12,0,0,1,12-12h72a12,12,0,0,1,12,12V468A12,12,0,0,1,340,480Z" />
      <path d="M369,100.7l30,367.83a12,12,0,0,0,13.45,10.92l72.16-9a12,12,0,0,0,10.47-12.9L465,91.21a12,12,0,0,0-13.2-10.94l-72.13,7.51A12,12,0,0,0,369,100.7Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M64,480H48a32,32,0,0,1-32-32V112A32,32,0,0,1,48,80H64a32,32,0,0,1,32,32V448A32,32,0,0,1,64,480Z" />
      <path d="M240,176a32,32,0,0,0-32-32H144a32,32,0,0,0-32,32v28a4,4,0,0,0,4,4H236a4,4,0,0,0,4-4Z" />
      <path d="M112,448a32,32,0,0,0,32,32h64a32,32,0,0,0,32-32V418a2,2,0,0,0-2-2H114a2,2,0,0,0-2,2Z" />
      <rect x="112" y="240" width="128" height="144" rx="2" ry="2" />
      <path d="M320,480H288a32,32,0,0,1-32-32V64a32,32,0,0,1,32-32h32a32,32,0,0,1,32,32V448A32,32,0,0,1,320,480Z" />
      <path d="M495.89,445.45l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85,3c-17.59,1.67-30.65,15.71-29.17,31.36l32.23,340c1.48,15.65,16.94,27,34.53,25.31l31.85-3C484.31,475.14,497.37,461.1,495.89,445.45Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M208,352H144a96,96,0,0,1,0-192h64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:36px" />
      <path d="M304,160h64a96,96,0,0,1,0,192H304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:36px" />
      <line x1="163.29" y1="256" x2="350.71" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:36px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M200.66,352H144a96,96,0,0,1,0-192h55.41" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px" />
      <path d="M312.59,160H368a96,96,0,0,1,0,192H311.34" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px" />
      <line x1="169.07" y1="256" x2="344.93" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M200.66,352H144a96,96,0,0,1,0-192h55.41" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <path d="M312.59,160H368a96,96,0,0,1,0,192H311.34" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="169.07" y1="256" x2="344.93" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <line x1="224" y1="184" x2="352" y2="184" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="224" y1="256" x2="352" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="224" y1="327" x2="352" y2="327" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M448,258c0-106-86-192-192-192S64,152,64,258s86,192,192,192S448,364,448,258Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="168" cy="184" r="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="168" cy="257" r="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="168" cy="328" r="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM192,335.5a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm0-71a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm0-72a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm176,151H212.67v-32H368Zm0-71H212.67v-32H368Zm0-72H212.67v-32H368Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM168,350a24,24,0,1,1,24-24A24,24,0,0,1,168,350Zm0-71a24,24,0,1,1,24-24A24,24,0,0,1,168,279Zm0-73a24,24,0,1,1,24-24A24,24,0,0,1,168,206ZM352,341H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Zm0-71H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Zm0-72H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <line x1="160" y1="144" x2="448" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="160" y1="256" x2="448" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="160" y1="368" x2="448" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="80" cy="144" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="80" cy="256" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="80" cy="368" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <line x1="144" y1="144" x2="464" y2="144" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:48px" />
      <line x1="144" y1="256" x2="464" y2="256" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:48px" />
      <line x1="144" y1="368" x2="464" y2="368" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:48px" />
      <rect x="64" y="128" width="32" height="32" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <rect x="64" y="240" width="32" height="32" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <rect x="64" y="352" width="32" height="32" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <line x1="160" y1="144" x2="448" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="160" y1="256" x2="448" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="160" y1="368" x2="448" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <circle cx="80" cy="144" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="80" cy="256" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="80" cy="368" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <line x1="256" y1="96" x2="256" y2="56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="256" y1="456" x2="256" y2="416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <path d="M256,112A144,144,0,1,0,400,256,144,144,0,0,0,256,112Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="416" y1="256" x2="456" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="56" y1="256" x2="96" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <line x1="256" y1="96" x2="256" y2="56" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px" />
      <line x1="256" y1="456" x2="256" y2="416" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px" />
      <path d="M256,112A144,144,0,1,0,400,256,144,144,0,0,0,256,112Z" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px" />
      <line x1="416" y1="256" x2="456" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px" />
      <line x1="56" y1="256" x2="96" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <line x1="256" y1="96" x2="256" y2="56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="256" y1="456" x2="256" y2="416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <path d="M256,112A144,144,0,1,0,400,256,144,144,0,0,0,256,112Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="416" y1="256" x2="456" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="56" y1="256" x2="96" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="192" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M256,32C167.67,32,96,96.51,96,176c0,128,160,304,160,304S416,304,416,176C416,96.51,344.33,32,256,32Zm0,224a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <circle cx="256" cy="192" r="32" />
      <path d="M256,32C167.78,32,96,100.65,96,185c0,40.17,18.31,93.59,54.42,158.78,29,52.34,62.55,99.67,80,123.22a31.75,31.75,0,0,0,51.22,0c17.42-23.55,51-70.88,80-123.22C397.69,278.61,416,225.19,416,185,416,100.65,344.22,32,256,32Zm0,224a64,64,0,1,1,64-64A64.07,64.07,0,0,1,256,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M336,208V113a80,80,0,0,0-160,0v95" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="96" y="208" width="320" height="272" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M420,192H352V112a96,96,0,1,0-192,0v80H92a12,12,0,0,0-12,12V484a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V204A12,12,0,0,0,420,192Zm-106,0H198V111.25a58,58,0,1,1,116,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M368,192H352V112a96,96,0,1,0-192,0v80H144a64.07,64.07,0,0,0-64,64V432a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V256A64.07,64.07,0,0,0,368,192Zm-48,0H192V112a64,64,0,1,1,128,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M336,112a80,80,0,0,0-160,0v96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="96" y="208" width="320" height="272" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M420,192H198V111.25a58.08,58.08,0,0,1,99.07-41.07A59.4,59.4,0,0,1,314,112h38a96,96,0,1,0-192,0v80H92a12,12,0,0,0-12,12V484a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V204A12,12,0,0,0,420,192Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M368,192H192V112a64,64,0,1,1,128,0,16,16,0,0,0,32,0,96,96,0,1,0-192,0v80H144a64.07,64.07,0,0,0-64,64V432a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V256A64.07,64.07,0,0,0,368,192Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="288 336 368 256 288 176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="80" y1="256" x2="352" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M432,80H192a16,16,0,0,0-16,16V240H329.37l-64-64L288,153.37l91.31,91.32a16,16,0,0,1,0,22.62L288,358.63,265.37,336l64-64H176V416a16,16,0,0,0,16,16H432a16,16,0,0,0,16-16V96A16,16,0,0,0,432,80Z" />
      <rect x="64" y="240" width="112" height="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M392,80H232a56.06,56.06,0,0,0-56,56V240H329.37l-52.68-52.69a16,16,0,0,1,22.62-22.62l80,80a16,16,0,0,1,0,22.62l-80,80a16,16,0,0,1-22.62-22.62L329.37,272H176V376c0,32.05,33.79,56,64,56H392a56.06,56.06,0,0,0,56-56V136A56.06,56.06,0,0,0,392,80Z" />
      <path d="M80,240a16,16,0,0,0,0,32h96V240Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M304,336v40a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V136a40,40,0,0,1,40-40H256c22.09,0,48,17.91,48,40v40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="368 336 448 256 368 176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="256" x2="432" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M160,240H320V96a16,16,0,0,0-16-16H64A16,16,0,0,0,48,96V416a16,16,0,0,0,16,16H304a16,16,0,0,0,16-16V272H160Z" />
      <path d="M459.31,244.69,368,153.37,345.37,176l64,64H320v32h89.37l-64,64L368,358.63l91.31-91.32a16,16,0,0,0,0-22.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M160,256a16,16,0,0,1,16-16H320V136c0-32-33.79-56-64-56H104a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H264a56.06,56.06,0,0,0,56-56V272H176A16,16,0,0,1,160,256Z" />
      <path d="M459.31,244.69l-80-80a16,16,0,0,0-22.62,22.62L409.37,240H320v32h89.37l-52.68,52.69a16,16,0,1,0,22.62,22.62l80-80a16,16,0,0,0,0-22.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M102.41,32C62.38,32,32,64.12,32,103.78V408.23C32,447.86,64.38,480,104.41,480h303.2c40,0,72.39-32.14,72.39-71.77v-3.11c-1.35-.56-115.47-48.57-174.5-76.7-39.82,48.57-91.18,78-144.5,78-90.18,0-120.8-78.22-78.1-129.72,9.31-11.22,25.15-21.94,49.73-28,38.45-9.36,99.64,5.85,157,24.61a309.41,309.41,0,0,0,25.46-61.67H138.34V194h91.13V162.17H119.09V144.42H229.47V99s0-7.65,7.82-7.65h44.55v53H391v17.75H281.84V194h89.08a359.41,359.41,0,0,1-37.72,94.43c27,9.69,49.31,18.88,67.39,24.89,60.32,20,77.23,22.45,79.41,22.7V103.78C480,64.12,447.6,32,407.61,32H102.41ZM152,274.73q-5.81.06-11.67.63c-11.3,1.13-32.5,6.07-44.09,16.23-34.74,30-13.94,84.93,56.37,84.93,40.87,0,81.71-25.9,113.79-67.37-41.36-20-77-34.85-114.4-34.42Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M48.48,378.73a300.52,300.52,0,0,0,152.89,95.92,262.57,262.57,0,0,0,159.3-17.25,225.52,225.52,0,0,0,66.79-47,6.36,6.36,0,0,0-2-8.53,11.76,11.76,0,0,0-8-.05,401.92,401.92,0,0,1-116.55,39.34,358.13,358.13,0,0,1-127.29-8.83,446.73,446.73,0,0,1-119.1-60.49,5,5,0,0,0-6.06,6.9Z" />
      <path d="M387.15,388.44a168.11,168.11,0,0,1,48.94-2.23l.67.13a10,10,0,0,1,7.37,12.05A204.71,204.71,0,0,1,429,444.47a2.55,2.55,0,0,0,1.66,3.18,2.51,2.51,0,0,0,2.23-.37A83.31,83.31,0,0,0,464,382.86a12.44,12.44,0,0,0-10.22-13.22A95.75,95.75,0,0,0,384.91,384a2.55,2.55,0,0,0-.57,3.55A2.52,2.52,0,0,0,387.15,388.44Z" />
      <path d="M304.24,324.92a164,164,0,0,1-28.92,25.3A135.16,135.16,0,0,1,208.63,369a99.49,99.49,0,0,1-57.49-19.85,97.25,97.25,0,0,1-27.36-100.28,112.35,112.35,0,0,1,65.3-69.06,367.67,367.67,0,0,1,104.7-15.55V127A37.82,37.82,0,0,0,261,94.72a59.9,59.9,0,0,0-31.17,4.08,48.89,48.89,0,0,0-27.13,34.67,12,12,0,0,1-12.58,6.72l-50.9-4.5a11.38,11.38,0,0,1-8.38-10.16,103.66,103.66,0,0,1,36.61-63.45A143.86,143.86,0,0,1,257.85,32a146.24,146.24,0,0,1,84.27,27.67,86.82,86.82,0,0,1,30.7,70.22V258.8a84.46,84.46,0,0,0,8,31.28l15.87,23.23a13,13,0,0,1,0,11.23L349.7,364.25a12.5,12.5,0,0,1-12.68-.44A244.84,244.84,0,0,1,304.24,324.92Zm-10.6-116.83a257.68,257.68,0,0,0-44,2.89A63,63,0,0,0,208,242.54a63,63,0,0,0,3.07,54,40.6,40.6,0,0,0,47.11,12.19,78.61,78.61,0,0,0,35.46-55.58V208.09" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M112.31,268l40.36-68.69,34.65,59-67.54,115h135L289.31,432H16Zm58.57-99.76,33.27-56.67L392.44,432H325.76ZM222.67,80h66.59L496,432H429.32Z" style="fill-rule:evenodd" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path id="path80319" d="M380.91,199l42.47-73.57a8.63,8.63,0,0,0-3.12-11.76,8.52,8.52,0,0,0-11.71,3.12l-43,74.52c-32.83-15-69.78-23.35-109.52-23.35s-76.69,8.36-109.52,23.35l-43-74.52a8.6,8.6,0,1,0-14.88,8.64L131,199C57.8,238.64,8.19,312.77,0,399.55H512C503.81,312.77,454.2,238.64,380.91,199ZM138.45,327.65a21.46,21.46,0,1,1,21.46-21.46A21.47,21.47,0,0,1,138.45,327.65Zm235,0A21.46,21.46,0,1,1,395,306.19,21.47,21.47,0,0,1,373.49,327.65Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <polygon points="213.57 256 298.42 256 255.99 166.64 213.57 256" />
      <path d="M256,32,32,112,78.12,384,256,480l177.75-96L480,112Zm88,320-26.59-56H194.58L168,352H128L256,72,384,352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M256,32C132.26,32,32,132.26,32,256S132.26,480,256,480,480,379.74,480,256,379.74,32,256,32ZM171,353.89a15.48,15.48,0,0,1-13.46,7.65,14.91,14.91,0,0,1-7.86-2.16,15.48,15.48,0,0,1-5.6-21.21l15.29-25.42a8.73,8.73,0,0,1,7.54-4.3h2.26c11.09,0,18.85,6.67,21.11,13.13Zm129.45-50L200.32,304H133.77a15.46,15.46,0,0,1-15.51-16.15c.32-8.4,7.65-14.76,16-14.76h48.24l57.19-97.35h0l-18.52-31.55C217,137,218.85,127.52,226,123a15.57,15.57,0,0,1,21.87,5.17l9.9,16.91h.11l9.91-16.91A15.58,15.58,0,0,1,289.6,123c7.11,4.52,8.94,14,4.74,21.22l-18.52,31.55-18,30.69-39.09,66.66v.11h57.61c7.22,0,16.27,3.88,19.93,10.12l.32.65c3.23,5.49,5.06,9.26,5.06,14.75A13.82,13.82,0,0,1,300.48,303.92Zm77.75.11H351.09v.11l19.82,33.71a15.8,15.8,0,0,1-5.17,21.53,15.53,15.53,0,0,1-8.08,2.27A15.71,15.71,0,0,1,344.2,354l-29.29-49.86-18.2-31L273.23,233a38.35,38.35,0,0,1-.65-38c4.64-8.19,8.19-10.34,8.19-10.34L333,273h44.91c8.4,0,15.61,6.46,16,14.75A15.65,15.65,0,0,1,378.23,304Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline points="201.14 64 256 32 310.86 64" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="256" y1="32" x2="256" y2="112" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" />
      <polyline points="310.86 448 256 480 201.14 448" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="256" y1="480" x2="256" y2="400" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" />
      <polyline points="64 207.51 64 144 117.15 112.49" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="64" y1="144" x2="131.29" y2="184" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" />
      <polyline points="448 304.49 448 368 394.85 399.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="448" y1="368" x2="380.71" y2="328" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" />
      <polyline points="117.15 400 64 368 64 304.49" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="64" y1="368" x2="130.64" y2="328" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" />
      <polyline points="394.85 112.49 448 144 448 207.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="448" y1="144" x2="380.71" y2="184" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" />
      <polyline points="256 320 256 256 310.86 224" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" />
      <line x1="256" y1="256" x2="201.14" y2="224" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z" />
      <path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z" />
    </svg>`,
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M344.1,233.6c-28.9,0-32.9,28.8-32.9,28.8h61.4S373,233.6,344.1,233.6Z" />
      <path d="M204.8,262.4H150.4v50h51.7c7.8-.2,22.4-2.4,22.4-24.3C224.5,262.1,204.8,262.4,204.8,262.4Z" />
      <path d="M256,32C132.3,32,32,132.3,32,256S132.3,480,256,480,480,379.7,480,256,379.7,32,256,32Zm47.2,137.6h77.1v23H303.2v-23Zm-39,120.8c0,57-59.4,55.2-59.4,55.2H107.6v-187h97.2c29.6,0,52.9,16.3,52.9,49.8S229.2,244,229.2,244C266.8,244,264.2,290.4,264.2,290.4Zm144.2-3.1H311.5c0,34.7,32.9,32.5,32.9,32.5,31.1,0,30-20.1,30-20.1h32.9c0,53.4-64,49.7-64,49.7-76.7,0-71.8-71.5-71.8-71.5s-.1-71.8,71.8-71.8C419,206.2,408.4,287.3,408.4,287.3Z" />
      <path d="M218,211.3c0-19.4-13.2-19.4-13.2-19.4H150.4v41.7h51C210.2,233.6,218,230.7,218,211.3Z" />
    </svg>`,
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M483.13,32.23a19.65,19.65,0,0,0-2.54-.23h-449C23,31.88,16.12,38.88,16,47.75a11.44,11.44,0,0,0,.23,2.8L81.53,461.8a22.52,22.52,0,0,0,7,12.95h0A20,20,0,0,0,102,480H415.18a15.45,15.45,0,0,0,15.34-13.42L469.4,218.67H325.19l-18.46,112H205.21l-25.73-148H475.06l20.76-132C497.09,41.92,491.44,33.63,483.13,32.23Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M410.47,279.2c-5-11.5-12.7-21.6-28.1-30.1a98.15,98.15,0,0,0-25.4-10,62.22,62.22,0,0,0,16.3-11,56.37,56.37,0,0,0,15.6-23.3,77.11,77.11,0,0,0,3.5-28.2c-1.1-16.8-4.4-33.1-13.2-44.8s-21.2-20.7-37.6-27c-12.6-4.8-25.5-7.8-45.5-8.9V32h-40V96h-32V32h-41V96H96v48h27.87c8.7,0,14.6.8,17.6,2.3a13.22,13.22,0,0,1,6.5,6c1.3,2.5,1.9,8.4,1.9,17.5V343c0,9-.6,14.8-1.9,17.4s-2,4.9-5.1,6.3-3.2,1.3-11.8,1.3h-26.4L96,416h87v64h41V416h32v64h40V415.6c26-1.3,44.5-4.7,59.4-10.3,19.3-7.2,34.1-17.7,44.7-31.5s14-34.9,14.93-51.2C415.7,308.1,415,289.4,410.47,279.2ZM224,150h32v74H224Zm0,212V272h32v90Zm72-208.1c6,2.5,9.9,7.5,13.8,12.7,4.3,5.7,6.5,13.3,6.5,21.4,0,7.8-2.9,14.5-7.5,20.5-3.8,4.9-6.8,8.3-12.8,11.1Zm28.8,186.7c-7.8,6.9-12.3,10.1-22.1,13.8a56.06,56.06,0,0,1-6.7,1.9V273.5a40.74,40.74,0,0,1,11.3,3.4c7.8,3.3,15.2,6.9,19.8,13.2a43.82,43.82,0,0,1,8,24.7C335.07,325.7,332.27,334,324.77,340.6Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M39.93,149.25l197.4,95.32c5.14,2.45,12,3.73,18.79,3.73s13.65-1.28,18.78-3.73l197.4-95.32c10.38-5,10.38-13.18,0-18.2L274.9,35.73c-5.13-2.45-12-3.73-18.78-3.73s-13.65,1.28-18.79,3.73L39.93,131.05C29.55,136.07,29.55,144.23,39.93,149.25Z" />
      <path d="M472.3,246.9s-36.05-17.38-40.83-19.72-6.07-2.21-11.09.12-145.6,70.23-145.6,70.23A45.71,45.71,0,0,1,256,301.27c-6.77,0-13.65-1.29-18.78-3.74,0,0-136.85-66-143.27-69.18C87,225,85,225,78.67,228l-39,18.78c-10.38,5-10.38,13.19,0,18.2L237.1,360.3c5.13,2.45,12,3.73,18.78,3.73s13.65-1.28,18.79-3.73L472.07,265C482.68,260.08,482.68,251.92,472.3,246.9Z" />
      <path d="M472.3,362.75S436.25,345.37,431.47,343s-6.07-2.21-11.09.12S274.9,413.5,274.9,413.5a45.74,45.74,0,0,1-18.78,3.73c-6.77,0-13.65-1.28-18.79-3.73,0,0-136.85-66-143.26-69.18-7-3.39-9-3.39-15.29-.35l-39,18.78c-10.39,5-10.39,13.18,0,18.2l197.4,95.32c5.13,2.56,12,3.73,18.78,3.73s13.65-1.28,18.78-3.73L472.18,381C482.68,375.93,482.68,367.77,472.3,362.75Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M480,101.09,372.37,208.72,479.23,315.78l-69.3,69.3L126.71,101.85,196,32.54,303.07,139.42,410.67,32Z" />
      <path d="M32.55,196l69.3-69.31L385.07,409.93l-69.3,69.3-107-106.87L101.08,480,32,410.67,139.42,303.06Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M188.8,255.93A67.2,67.2,0,1,0,256,188.75,67.38,67.38,0,0,0,188.8,255.93Z" />
      <path d="M476.75,217.79s0,0,0,.05a206.63,206.63,0,0,0-7-28.84h-.11a202.16,202.16,0,0,1,7.07,29h0a203.5,203.5,0,0,0-7.07-29H314.24c19.05,17,31.36,40.17,31.36,67.05a86.55,86.55,0,0,1-12.31,44.73L231,478.45a2.44,2.44,0,0,1,0,.27V479h0v-.26A224,224,0,0,0,256,480c6.84,0,13.61-.39,20.3-1a222.91,222.91,0,0,0,29.78-4.74C405.68,451.52,480,362.4,480,255.94A225.25,225.25,0,0,0,476.75,217.79Z" />
      <path d="M256,345.5c-33.6,0-61.6-17.91-77.29-44.79L76,123.05l-.14-.24A224,224,0,0,0,207.4,474.55l0-.05,77.69-134.6A84.13,84.13,0,0,1,256,345.5Z" />
      <path d="M91.29,104.57l77.35,133.25A89.19,89.19,0,0,1,256,166H461.17a246.51,246.51,0,0,0-25.78-43.94l.12.08A245.26,245.26,0,0,1,461.17,166h.17a245.91,245.91,0,0,0-25.66-44,2.63,2.63,0,0,1-.35-.26A223.93,223.93,0,0,0,91.14,104.34l.14.24Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M0,80V432H512V80ZM464,255.78c0,25.74-1.6,45.32-3.77,77.22s-19.2,54.34-59.09,57.86S305.37,394.71,256,394.6c-49,.11-105.14-.11-145.14-3.74s-56.8-26-59.09-57.86S48,281.52,48,255.78s.11-42.46,3.77-77.22,23-54.12,59.09-57.64S209.14,117.4,256,117.4s109,0,145.14,3.52,55.43,23,59.09,57.64S464,230.15,464,255.78Z" />
      <path d="M367.57,282.84v.77c0,17.93-11.11,28.49-25.95,28.49s-24.84-11.88-26.27-28.49c0,0-1.31-8.69-1.31-26.29a229.5,229.5,0,0,1,1.53-28.6c2.64-18.7,11.77-28.49,26.6-28.49s26.49,12.76,26.49,32.12v.55h49.58c0-24.09-6.05-45.76-18.25-59.4S369.76,153,345.8,153a108.06,108.06,0,0,0-33,4.73,58.82,58.82,0,0,0-25.94,16.61C279.63,182.3,274,192.86,270,206.17s-6,30-6,50.27c0,19.8,1.65,36.3,4.84,49.61s8,23.87,14.4,31.79a49.76,49.76,0,0,0,24,16.5q14.5,4.62,34,4.62c27.47,0,47.26-7,59.13-20.57S418,305.06,418,279.1H367.35C367.57,279.1,367.57,281.85,367.57,282.84Z" />
      <path d="M197.3,282.84v.77c0,17.93-11.1,28.49-25.94,28.49s-24.84-11.88-26.27-28.49c0,0-1.31-8.69-1.31-26.29a229.5,229.5,0,0,1,1.53-28.6c2.64-18.7,11.77-28.49,26.6-28.49S198.4,213,198.4,232.35v.55H248c0-24.09-6-45.76-18.25-59.4S199.5,153,175.54,153a108.06,108.06,0,0,0-33,4.73,58.82,58.82,0,0,0-25.94,16.61c-7.26,7.92-12.86,18.48-16.93,31.79s-6,30-6,50.27c0,19.8,1.65,36.3,4.84,49.61s8,23.87,14.4,31.79a49.76,49.76,0,0,0,24,16.5q14.51,4.62,34,4.62c27.48,0,47.27-7,59.14-20.57s17.81-33.33,17.81-59.29H197.08C197.3,279.1,197.3,281.85,197.3,282.84Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M241.24,303.94c-15.32-10.36-30.74-20.57-46.06-30.93-2-1.38-3.43-1.48-5.5,0L150.8,299.13C182,319.9,244,361.32,244,361.32V307.53C244,306.31,242.45,304.75,241.24,303.94Z" />
      <path d="M195.09,240.67q23.19-15.24,46.11-30.86a7.54,7.54,0,0,0,2.8-5.34v-51.7s-62,41.12-93.26,61.94c13.7,9.16,26.67,17.91,39.78,26.44C191.54,241.81,193.92,241.43,195.09,240.67Z" />
      <path d="M269.84,209.35q23.71,16.07,47.63,31.82a4.3,4.3,0,0,0,3.83,0l39.76-26.47L268,152.48v53.35A4.79,4.79,0,0,0,269.84,209.35Z" />
      <path d="M258.11,230.37a5.27,5.27,0,0,0-4.74.17c-4.82,3-9.47,6.2-14.17,9.35-8.25,5.53-25.35,17-25.35,17l38.84,25.86a6.18,6.18,0,0,0,6.26.11l39-26S263.88,234.2,258.11,230.37Z" />
      <polygon points="141 237.12 141 276.73 170.62 256.89 141 237.12" />
      <path d="M256,32C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32ZM395,297c0,5.78-2.65,9.86-7.51,13.09q-61.71,41-123.29,82.19c-5.85,3.92-11.17,3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14,2.52-10.34,7.62-13.72,40.91-27.13,81.94-54.36,122.73-81.68,5.82-3.89,11.09-4,16.94-.09q61.54,41.21,123.26,82.19c4.68,3.11,7.45,6.95,7.45,12.66Z" />
      <path d="M316.25,273.23q-22.59,15.34-45.39,30.34c-2.41,1.58-2.89,3.31-2.86,6.19V361.1l93-62-38.53-25.88C320.17,271.61,318.58,271.65,316.25,273.23Z" />
      <polygon points="370 276.68 370 237.06 340.41 256.93 370 276.68" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M64,32,99,435.22,255.77,480,413,435.15,448,32ZM354.68,366.9,256.07,395l-98.46-28.24L150.86,289h48.26l3.43,39.56,53.59,15.16.13.28h0l53.47-14.85L315.38,265H203l-4-50H319.65L324,164H140l-4-49H376.58Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <polygon points="295.31 122.8 222.86 64 295.54 186.64 295.31 122.8" />
      <path d="M339.43,64V259.6h-41.6L225.6,141.28l1.94,118.32H181.71V131.2L139.09,96c1.14,1.44,2.28,2.88,3.31,4.44,11.43,16.68,17.14,36.6,17.14,60.6,0,59-35,98.52-87.88,98.52H0v.48L228.11,448H512V205.72Z" />
      <path d="M111.89,162.52c0-34.8-16.23-54.12-45.38-54.12H44.57V215.2H66.29C96,215.2,111.89,196.72,111.89,162.52Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="408 103.28 408 16 407.97 16 318.69 16 309.79 24.78 267.64 103.26 254.39 112 104 112 104 231.85 186.68 231.85 194.04 240.56 104 408.72 104 496 104.02 496 193.3 496 202.21 487.21 244.35 408.73 257.61 400 408 400 408 280.13 325.32 280.13 317.96 271.38 408 103.28" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M464,66.52A50,50,0,0,0,414.12,17L97.64,16A49.65,49.65,0,0,0,48,65.52V392c0,27.3,22.28,48,49.64,48H368l-13-44L464,496ZM324.65,329.81s-8.72-10.39-16-19.32C340.39,301.55,352.5,282,352.5,282a139,139,0,0,1-27.85,14.25,173.31,173.31,0,0,1-35.11,10.39,170.05,170.05,0,0,1-62.72-.24A184.45,184.45,0,0,1,191.23,296a141.46,141.46,0,0,1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62,19.09,42.38,28.26c-7.27,9.18-16.23,19.81-16.23,19.81-53.51-1.69-73.85-36.47-73.85-36.47,0-77.06,34.87-139.62,34.87-139.62,34.87-25.85,67.8-25.12,67.8-25.12l2.42,2.9c-43.59,12.32-63.44,31.4-63.44,31.4s5.32-2.9,14.28-6.77c25.91-11.35,46.5-14.25,55-15.21a24,24,0,0,1,4.12-.49,205.62,205.62,0,0,1,48.91-.48,201.62,201.62,0,0,1,72.89,22.95S333.61,145,292.44,132.7l3.39-3.86S329,128.11,363.64,154c0,0,34.87,62.56,34.87,139.62C398.51,293.34,378.16,328.12,324.65,329.81Z" />
      <path d="M212.05,218c-13.8,0-24.7,11.84-24.7,26.57s11.14,26.57,24.7,26.57c13.8,0,24.7-11.83,24.7-26.57C237,229.81,225.85,218,212.05,218Z" />
      <path d="M300.43,218c-13.8,0-24.7,11.84-24.7,26.57s11.14,26.57,24.7,26.57c13.81,0,24.7-11.83,24.7-26.57S314,218,300.43,218Z" />
    </svg>`,
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M507,211.16c-1.42-1.19-14.25-10.94-41.79-10.94a132.55,132.55,0,0,0-21.61,1.9c-5.22-36.4-35.38-54-36.57-55l-7.36-4.28-4.75,6.9a101.65,101.65,0,0,0-13.06,30.45c-5,20.7-1.9,40.2,8.55,56.85-12.59,7.14-33,8.8-37.28,9H15.94A15.93,15.93,0,0,0,0,262.07,241.25,241.25,0,0,0,14.75,348.9C26.39,379.35,43.72,402,66,415.74,91.22,431.2,132.3,440,178.6,440a344.23,344.23,0,0,0,62.45-5.71,257.44,257.44,0,0,0,81.69-29.73,223.55,223.55,0,0,0,55.57-45.67c26.83-30.21,42.74-64,54.38-94h4.75c29.21,0,47.26-11.66,57.23-21.65a63.31,63.31,0,0,0,15.2-22.36l2.14-6.18Z" />
      <path d="M47.29,236.37H92.4a4,4,0,0,0,4-4h0V191.89a4,4,0,0,0-4-4H47.29a4,4,0,0,0-4,4h0v40.44a4.16,4.16,0,0,0,4,4h0" />
      <path d="M109.5,236.37h45.12a4,4,0,0,0,4-4h0V191.89a4,4,0,0,0-4-4H109.5a4,4,0,0,0-4,4v40.44a4.16,4.16,0,0,0,4,4" />
      <path d="M172.9,236.37H218a4,4,0,0,0,4-4h0V191.89a4,4,0,0,0-4-4H172.9a4,4,0,0,0-4,4h0v40.44a3.87,3.87,0,0,0,4,4h0" />
      <path d="M235.36,236.37h45.12a4,4,0,0,0,4-4V191.89a4,4,0,0,0-4-4H235.36a4,4,0,0,0-4,4h0v40.44a4,4,0,0,0,4,4h0" />
      <path d="M109.5,178.57h45.12a4.16,4.16,0,0,0,4-4V134.09a4,4,0,0,0-4-4H109.5a4,4,0,0,0-4,4v40.44a4.34,4.34,0,0,0,4,4" />
      <path d="M172.9,178.57H218a4.16,4.16,0,0,0,4-4V134.09a4,4,0,0,0-4-4H172.9a4,4,0,0,0-4,4h0v40.44a4,4,0,0,0,4,4" />
      <path d="M235.36,178.57h45.12a4.16,4.16,0,0,0,4-4V134.09a4.16,4.16,0,0,0-4-4H235.36a4,4,0,0,0-4,4h0v40.44a4.16,4.16,0,0,0,4,4" />
      <path d="M235.36,120.53h45.12a4,4,0,0,0,4-4V76a4.16,4.16,0,0,0-4-4H235.36a4,4,0,0,0-4,4h0v40.44a4.17,4.17,0,0,0,4,4" />
      <path d="M298.28,236.37H343.4a4,4,0,0,0,4-4V191.89a4,4,0,0,0-4-4H298.28a4,4,0,0,0-4,4h0v40.44a4.16,4.16,0,0,0,4,4" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M256,32C132.33,32,32,132.33,32,256S132.33,480,256,480,480,379.78,480,256,379.67,32,256,32ZM398.22,135.25a186.36,186.36,0,0,1,44,108.38c-40.37-2.1-88.67-2.1-127.4,1.52-4.9-12.37-9.92-24.5-15.4-36.17C344.08,189.62,378.5,164.18,398.22,135.25ZM256,69.33a185.81,185.81,0,0,1,119.12,42.94c-20.3,25.66-52.15,48-91.82,64.86C261.6,137,236.63,102.47,210,75.28A187.51,187.51,0,0,1,256,69.33ZM171.53,89.75c26.95,26.83,52.27,61,74.44,101C203.85,203.62,155.55,211,104,211c-9.8,0-19.36-.35-28.81-.94A186.78,186.78,0,0,1,171.53,89.75ZM69.68,247.13c10.62.47,21.35.7,32.2.59,58.8-.7,113.52-9.92,160.54-25q6.65,13.83,12.6,28.35a115.43,115.43,0,0,0-16.69,5C194.05,283.07,143.42,326.58,116,379.2A186,186,0,0,1,69.33,256C69.33,253,69.45,250.05,69.68,247.13ZM256,442.67a185.57,185.57,0,0,1-114.45-39.32c24.85-49.23,69.18-90,125.07-115.27,5.25-2.45,12.25-4.43,20.3-6.18q10,27.64,17.85,57.4A678,678,0,0,1,322,430.42,185.06,185.06,0,0,1,256,442.67Zm100.92-29.75a672.61,672.61,0,0,0-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22,36.63-3,80.5-2.57,115.38,0A186.5,186.5,0,0,1,356.92,412.92Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M256.32,126.24,136.16,204.49l120.16,78.24L136.16,361,16,282.08l120.16-78.24L16,126.24,136.16,48ZM135.52,385.76l120.16-78.25,120.16,78.25L255.68,464Zm120.8-103.68,120.16-78.24-120.16-77.6L375.84,48,496,126.24,375.84,204.49,496,282.73,375.84,361Z" />
    </svg>`,
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M255.5,15h0c-132,0-240,108-240,240s108,240,240,240h0c85.4,0,160.8-45.2,203.3-112.9a6.87,6.87,0,0,0-9.1-9.7,108.64,108.64,0,0,1-18.4,8.6c-36.8,12.6-57.1,13.1-82.1,12-27.9-1.2-61.9-10.8-85.8-25s-43.5-34.6-54.1-52.3-17-39.9-14.1-68.3c2.9-29,29.4-52.6,60.4-52.6h0c33.5,0,60.8,26.6,60.8,60.1,0,17-8.1,31.7-18.5,43.5h0c-2.3,2.1-7.6,9.7,5.8,20,15.9,12.2,51.6,18,79.9,16.6s59.1-12.6,80.2-34.8c16.8-17.7,31.8-46.1,31.8-77.4C495.5,97.7,379.5,15,255.5,15Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M86.76,255a9.89,9.89,0,0,0,4.87-1.29,9.82,9.82,0,0,0,3.65-13.43c-16.46-28.56-17.81-52.12-7.45-70,14.26-24.57,53.61-33.65,105.27-24.29a9.86,9.86,0,0,0,11.45-7.9,9.84,9.84,0,0,0-7.93-11.44c-29.19-5.28-56-5.18-77.39.3-22.3,5.71-39,17.28-48.45,33.48-14,24.19-12.7,54.73,7.42,89.62A9.85,9.85,0,0,0,86.76,255Z" />
      <path d="M361.61,143.73c32.24.42,52.61,9.31,62.79,26.86,14.21,24.48,2.52,62.81-31.27,102.52a9.82,9.82,0,0,0,7.51,16.18,9.88,9.88,0,0,0,7.52-3.46c19.12-22.47,32.35-45.54,38.25-66.71,6.14-22,4.43-42.21-5-58.38-13.8-23.78-40.13-36.15-79.59-36.67h-.14a9.83,9.83,0,0,0-.12,19.66Z" />
      <path d="M326.47,414.89a9.88,9.88,0,0,0-13.5,3.35c-16.41,27.15-36.57,42.1-56.77,42.1-28.49,0-56-29.31-73.73-78.42A9.87,9.87,0,0,0,169.88,376a9.83,9.83,0,0,0-6,12.58c10,27.77,23.47,50.75,39,66.46,16.11,16.34,34.55,25,53.32,25,27.38,0,53.54-18.33,73.65-51.61a9.81,9.81,0,0,0-3.38-13.5Z" />
      <path d="M431.7,338.54a32.14,32.14,0,0,0-29.9,44.33C360,402.37,282,387.66,209.93,346.25c-32.91-18.9-62.16-41.86-84.6-66.39a9.9,9.9,0,0,0-13.91-.65,9.8,9.8,0,0,0-.65,13.9c23.79,26,54.68,50.28,89.33,70.18,40.28,23.13,82.27,38.63,121.43,44.81a225.54,225.54,0,0,0,35,2.91c23.12,0,43-4.3,58.51-12.79a32.2,32.2,0,1,0,16.7-59.68Zm0,44.66a12.6,12.6,0,0,1-7.82-2.72,10,10,0,0,0-2.2-2.21,12.61,12.61,0,1,1,10,4.93Z" />
      <path d="M82.09,338.59c.57-21.26,12.41-47,33.68-73.16,23.19-28.45,56.69-56,94.34-77.65,33.25-19.1,65.2-31.9,98.07-38.91a9.83,9.83,0,1,0-4.12-19.22c-34.85,7.43-68.78,21-103.79,41.09C116.09,219.09,59.9,289.88,62.46,343.9a32.32,32.32,0,1,0,19.63-5.31ZM80.3,383.2a12.5,12.5,0,1,1,12.59-12.5A12.56,12.56,0,0,1,80.3,383.2Z" />
      <path d="M256.2,96.32a32.23,32.23,0,0,0,26.53-13.81c17.89,11.69,34,35,45.81,66.12,13,34.39,19.84,75.38,19.84,118.54,0,37.18-5.19,72.35-15,103.6a9.72,9.72,0,0,0,.66,7.49,9.82,9.82,0,0,0,5.8,4.84,9.89,9.89,0,0,0,12.34-6.44c10.42-33.14,15.93-70.34,15.93-109.49,0-47.17-7.77-91.77-22.47-129-14.41-36.48-34.13-62.4-57.14-75.16A32.3,32.3,0,1,0,256.2,96.32Zm0-44.66a12.5,12.5,0,1,1-12.59,12.5A12.56,12.56,0,0,1,256.2,51.66Z" />
      <path d="M251,243.36h0a24.35,24.35,0,0,0,5.16,48.16,24.68,24.68,0,0,0,5.16-.55A24.36,24.36,0,1,0,251,243.36Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M231.8,272V224H376l8-48H231.8v-8.12c0-38.69,16.47-62.56,87.18-62.56,28.89,0,61.45,2.69,102.5,9.42l10.52-70A508.54,508.54,0,0,0,315.46,32C189.26,32,135,76.4,135,158.46V176l-55,0v48h55v48H80v48h55v33.54C135,435.6,189.23,480,315.43,480a507.76,507.76,0,0,0,116.44-12.78l-10.58-70c-41.05,6.73-73.46,9.42-102.35,9.42-70.7,0-87.14-20.18-87.14-67.94V320H360.27l7.87-48Z" />
    </svg>`,
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M480,257.35c0-123.7-100.3-224-224-224s-224,100.3-224,224c0,111.8,81.9,204.47,189,221.29V322.12H164.11V257.35H221V208c0-56.13,33.45-87.16,84.61-87.16,24.51,0,50.15,4.38,50.15,4.38v55.13H327.5c-27.81,0-36.51,17.26-36.51,35v42h62.12l-9.92,64.77H291V478.66C398.1,461.85,480,369.18,480,257.35Z" fill-rule="evenodd" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M336,176a80,80,0,0,0,0-160H176a80,80,0,0,0,0,160,80,80,0,0,0,0,160,80,80,0,1,0,80,80V176Z" />
      <circle cx="336" cy="256" r="80" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path id="icon" d="M93.19,329.38,140.64,25.31c1.64-10.37,15.55-12.82,20.46-3.55l51,95.45ZM432,400,385.26,123.21a11,11,0,0,0-18.54-6L80,400l159.36,91.91a33.18,33.18,0,0,0,31.91,0ZM302.36,158.93,265.82,89.39a10.86,10.86,0,0,0-19.36,0L85.83,375.74Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M471.46,194.62v-.07c-.22-.76-.45-1.52-.68-2.28-.05-.19-.11-.38-.17-.56-.43-1.44-.87-2.88-1.33-4.31l-.06-.2a223.24,223.24,0,0,0-10-25.56,191.77,191.77,0,0,0-12.9-23.8A225.15,225.15,0,0,0,371.58,64.1h0A222.9,222.9,0,0,0,256,32c-7,0-14,.34-20.82,1-24.12,2.54-64.78,11.21-97.77,40.18C257.5,11.86,417.94,85.7,404.29,223c-4.86,49-46.46,82.67-85.19,88.35a73.73,73.73,0,0,1-20.8.21c-94.59-13.15-88.8-90.68-60.06-123.83-38-.24-67.47,46.79-53.15,93l0,0c-32.95-61.18.35-157,70.93-186-82.95-12-160.71,28.2-185.7,98.07A330.23,330.23,0,0,1,88.07,118s-45.22,35.74-54.44,110.9c-.14,1.16-.27,2.32-.39,3.49-.05.4-.09.8-.13,1.21q-.53,5.25-.8,10.57c0,.27,0,.54,0,.81-.07,1.48-.13,3-.17,4.46l0,1.25c0,1.76-.07,3.52-.07,5.29,0,123.71,100.29,224,224,224S480,379.71,480,256A224,224,0,0,0,471.46,194.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M256,32h0C132.8,32,32,132.8,32,256h0c0,123.2,100.8,224,224,224h0c123.2,0,224-100.8,224-224h0C480,132.8,379.2,32,256,32ZM173.84,312A56,56,0,1,1,228,257.84,56,56,0,0,1,173.84,312Zm168,0A56,56,0,1,1,396,257.84,56,56,0,0,1,341.84,312Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M376.76,32H138.54C105.67,32,96,56.8,96,72.41V452.05c0,17.59,9.42,24.12,14.72,26.27s19.91,4,28.67-6.17c0,0,112.47-130.89,114.4-132.83,2.92-2.93,2.92-2.93,5.84-2.93H332.4c30.58,0,35.49-21.87,38.69-34.75,2.65-10.79,32.48-164,42.45-212.56C421.14,52,411.74,32,376.76,32Zm-5.67,269.64c2.65-10.79,32.48-164,42.45-212.56m-50.85,7.59-10,51.73c-1.19,5.65-8.28,11.6-14.86,11.6H241.91c-10.44,0-17.91,6.14-17.91,16.6v13.45c0,10.47,7.52,17.89,18,17.89h81.85c7.38,0,14.61,8.11,13,16s-9.09,46.57-10,50.89-5.84,11.72-14.61,11.72H248c-11.7,0-15.24,1.54-23.07,11.3s-78.26,94.59-78.26,94.59c-.71.82-1.41.58-1.41-.31V95.9c0-6.69,5.8-14.53,14.48-14.53H350.88A12.42,12.42,0,0,1,362.69,96.67Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
    </svg>`,
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M494.07,281.6l-25.18-78.08a11,11,0,0,0-.61-2.1L417.78,44.48a20.08,20.08,0,0,0-19.17-13.82A19.77,19.77,0,0,0,379.66,44.6L331.52,194.15h-152L131.34,44.59a19.76,19.76,0,0,0-18.86-13.94h-.11a20.15,20.15,0,0,0-19.12,14L42.7,201.73c0,.14-.11.26-.16.4L16.91,281.61a29.15,29.15,0,0,0,10.44,32.46L248.79,476.48a11.25,11.25,0,0,0,13.38-.07L483.65,314.07a29.13,29.13,0,0,0,10.42-32.47m-331-64.51L224.8,408.85,76.63,217.09m209.64,191.8,59.19-183.84,2.55-8h86.52L300.47,390.44M398.8,59.31l43.37,134.83H355.35M324.16,217l-43,133.58L255.5,430.14,186.94,217M112.27,59.31l43.46,134.83H69M40.68,295.58a6.19,6.19,0,0,1-2.21-6.9l19-59L197.08,410.27M470.34,295.58,313.92,410.22l.52-.69L453.5,229.64l19,59a6.2,6.2,0,0,1-2.19,6.92" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z" />
      <path d="M345.8,174,89.22,32.64l-.16-.09c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z" />
      <path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06l.16-.09L345.8,338l-60.61-57.95Z" />
      <path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M473.16,221.48l-2.26-9.59H262.46v88.22H387c-12.93,61.4-72.93,93.72-121.94,93.72-35.66,0-73.25-15-98.13-39.11a140.08,140.08,0,0,1-41.8-98.88c0-37.16,16.7-74.33,41-98.78s61-38.13,97.49-38.13c41.79,0,71.74,22.19,82.94,32.31l62.69-62.36C390.86,72.72,340.34,32,261.6,32h0c-60.75,0-119,23.27-161.58,65.71C58,139.5,36.25,199.93,36.25,256S56.83,369.48,97.55,411.6C141.06,456.52,202.68,480,266.13,480c57.73,0,112.45-22.62,151.45-63.66,38.34-40.4,58.17-96.3,58.17-154.9C475.75,236.77,473.27,222.12,473.16,221.48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M32,32V480H480V32ZM281.67,282.83v84H235v-84l-77-140H213l46.32,97.54,44.33-97.54h52.73Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M64,32,98.94,435.21,255.77,480,413,435.15,448,32ZM372,164H188l4,51H368L354.49,366.39,256,394.48l-98.68-28L150.54,289H198.8l3.42,39.29L256,343.07l53.42-14.92L315,264H148L135.41,114.41l240.79,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
      <path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
      <path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M256,153.9A102.1,102.1,0,1,0,358.1,256,102.23,102.23,0,0,0,256,153.9Z" />
      <circle cx="402.59" cy="116.45" r="46.52" />
      <path d="M459.86,163.2l-1.95-4.28-3.11,3.52a70,70,0,0,1-28.06,19.32l-3,1.1,1.22,2.93A181.43,181.43,0,0,1,439,256c0,100.92-82.1,183-183,183S73,356.92,73,256,155.08,73,256,73a180.94,180.94,0,0,1,78.43,17.7L337.3,92l1.25-2.92A70.19,70.19,0,0,1,359.21,62l3.67-2.93L358.71,57A221.61,221.61,0,0,0,256,32C132.49,32,32,132.49,32,256S132.49,480,256,480,480,379.51,480,256A222.19,222.19,0,0,0,459.86,163.2Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M468.41,269.19c-2.64-33.39-11.76-58-31.44-57.39a1,1,0,0,0-.92,1.37c5.11,12.59,9.68,36.9,9.17,58.07a1,1,0,0,1-2,.08c-2.19-21.21-7.1-41.19-16.22-59.43a186.69,186.69,0,0,0-348.91,41A4,4,0,0,1,74.76,256l-8.65,1.22c-17.2,2.4-26.9,34.9-21.7,72.5s23.5,66.2,40.7,63.8l13.24-1.85a4,4,0,0,1,3.93,1.84,186.71,186.71,0,0,0,339-56.07,4,4,0,0,1,3.68-3.08l4.4-.24C464.51,331.59,471.11,302.89,468.41,269.19ZM94.5,270.42a1,1,0,0,1,1.59-1.19c9.63,10,20.25,27.65,23.32,49.86,3.24,23.05-2.24,45.2-9.13,57.87a1,1,0,0,1-1.84-.73c4.07-14.44,5.16-33.83,2.27-54.74C107.91,301.17,102,283.22,94.5,270.42ZM273.27,380.21a15.53,15.53,0,0,1-15.41-13.83,15.48,15.48,0,1,1,15.41,13.83Zm81.84-4.72a15.37,15.37,0,1,1,14.6-16.2A15.43,15.43,0,0,1,355.11,375.49Z" />
      <path d="M165.51,70h0a.31.31,0,0,1,.1.2h0c.1.2.2.3.3.5v.1a5.78,5.78,0,0,0,2.3,2.7c2,1.5,5,2.4,8.6,3a63.69,63.69,0,0,0,11.9.5,28.25,28.25,0,0,0,2.9-.2c-.4-.4-.8-.9-1.2-1.3h-1.3a52,52,0,0,1-11.6-.9,19.71,19.71,0,0,1-8.4-3.4,9.24,9.24,0,0,1-1.4-1.4,4.48,4.48,0,0,1,0-2.3c.5-2.3,2.4-4.8,5.5-7.4a57.25,57.25,0,0,1,10.9-7c.9-.4,1.7-.9,2.6-1.3.1-.1.3-.1.5-.2a24.69,24.69,0,0,0-.2,10.5c2.3,11.9,11.6,20.3,23.2,20.6l4,24.3,12.7-3-4-23.3c10.8-4.6,16.3-16.1,14-28a25.8,25.8,0,0,0-3.9-9.5c-5.3-.8-15.6-.8-29.2,2.1,1.1-.3,2.1-.7,3.2-1a135.27,135.27,0,0,1,21.5-4.2c.6-.1,1.2-.1,1.8-.2l3.5-.3h.6a61.83,61.83,0,0,1,10.8.3,29,29,0,0,1,6.1,1.4,5.71,5.71,0,0,0-.9,3.2,6.12,6.12,0,0,0,4.3,5.8h0a25.53,25.53,0,0,1-2.1,2.8,26,26,0,0,1-2.9,2.8c-1.1.9-2.3,1.8-3.5,2.7l-6.5,3.8-.3,1.5a.35.35,0,0,0,.2-.1l8.4-4.7c1.2-.8,2.4-1.6,3.4-2.4a29.15,29.15,0,0,0,3.2-2.8,29.86,29.86,0,0,0,2.4-2.8l.3-.6a6.14,6.14,0,0,0,5.4-6,6.06,6.06,0,0,0-6.1-6.1,6.81,6.81,0,0,0-2.8.7,24.6,24.6,0,0,0-8.2-2.7,63.48,63.48,0,0,0-15.5-.6,14.92,14.92,0,0,0-2.1.2,13.55,13.55,0,0,1-2,.2,25.15,25.15,0,0,0-18.7-3.7,25.86,25.86,0,0,0-17.8,13c-1.3.5-2.6,1.1-3.8,1.7-.7.3-1.3.6-2,.9a60.75,60.75,0,0,0-13.9,9.1c-3.1,2.9-4.9,5.7-5.3,8.3a6.14,6.14,0,0,0,.7,4A2.19,2.19,0,0,1,165.51,70Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M505.57,234.62c-3.28-3.53-26.82-32.29-39.51-47.79-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a39.78,39.78,0,0,0-5.41.44c-.37.05-.75.11-1.15.15-2.45.27-10.06,1.5-28.14,4.48-14,2.29-35.11,5.77-38.31,6.07l-.71.06-.69.13c-10,1.78-16.62,6.22-19.56,13.19-1.55,3.68-3.22,11.15,2.94,19.86,1.53,2.22,6.83,9.56,15.94,22.17,6.06,8.4,12.87,17.82,18.75,26L259.9,275,150.66,96.05l-.2-.34-.23-.33-.44-.65C145.32,88.17,139.76,80,123.7,80h0c-1.13,0-2.31,0-3.63.11-4.6.25-21.42,1.57-40.89,3.11-21.49,1.69-50.9,4-54.72,4.1h-.73l-.79.08c-9.14.89-15.77,4.6-19.7,11-6.55,10.69-1.42,22.69.26,26.63C6.87,133,37.56,197.7,64.63,254.81c18,37.94,36.58,77.17,38.1,80.65a34.85,34.85,0,0,0,32.94,21.59,46.62,46.62,0,0,0,9.86-1.1l.21,0,.2-.05c13.86-3.38,57.83-14.54,89.2-22.59,1.9,3.32,3.9,6.83,6,10.44,21.93,38.5,37.9,66.35,43.16,73.46C287,421,295,432,310.06,432c5.46,0,10.46-1.4,15.74-2.89l1.53-.43.06,0h.06c10.53-3,150.69-52.16,157.87-55.35l.22-.1c5.44-2.41,13.66-6.05,16.18-15.4,1.65-6.12.18-12.33-4.38-18.46l-.07-.09-.07-.09c-.85-1.1-4-5.21-8.27-10.9-9.13-12.07-23.88-31.57-36.84-48.54,17.37-4.5,38.8-10.11,43.38-11.55,11.47-3.43,14.94-10.69,16-14.73C512.26,250.32,513.29,242.27,505.57,234.62Zm-320,58.19c-17.81,4.17-30.22,7.08-37.89,8.9-6.67-13.34-19.74-39.65-32.5-65.33C85.44,176.46,70.08,145.61,62,129.48l8.15-.7c13.34-1.15,31.61-2.72,41.78-3.57,16.76,28.26,74.32,125.3,96.3,162.3ZM427.58,172h0ZM310.06,416.4h0Zm53.67-56.95c-24.21,8-37.33,12.37-44.42,14.74-6.3-10.34-20.16-33.52-32.47-54.19l115.7-29.48c5,6.81,14.57,19.72,33.46,44.93C417.93,341.49,387.8,351.47,363.73,359.45ZM419.6,237.82l-23.76-31.53c13.67-2.39,21.54-3.77,26.15-4.6l12,14.88,11.94,14.82C437.73,233.38,428.19,235.71,419.6,237.82Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M475,64H37C16.58,64,0,81.38,0,102.77V409.19C0,430.59,16.58,448,37,448H475c20.38,0,37-17.41,37-38.81V102.77C512,81.38,495.42,64,475,64ZM288,368H224V256l-48,64-48-64V368H64V144h64l48,80,48-80h64Zm96,0L304,256h48.05L352,144h64V256h48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M480,173.59c0-104.13-68.26-134.65-68.26-134.65C377.3,23.15,318.2,16.5,256.8,16h-1.51c-61.4.5-120.46,7.15-154.88,22.94,0,0-68.27,30.52-68.27,134.65,0,23.85-.46,52.35.29,82.59C34.91,358,51.11,458.37,145.32,483.29c43.43,11.49,80.73,13.89,110.76,12.24,54.47-3,85-19.42,85-19.42l-1.79-39.5s-38.93,12.27-82.64,10.77c-43.31-1.48-89-4.67-96-57.81a108.44,108.44,0,0,1-1-14.9,558.91,558.91,0,0,0,96.39,12.85c32.95,1.51,63.84-1.93,95.22-5.67,60.18-7.18,112.58-44.24,119.16-78.09C480.84,250.42,480,173.59,480,173.59ZM399.46,307.75h-50V185.38c0-25.8-10.86-38.89-32.58-38.89-24,0-36.06,15.53-36.06,46.24v67H231.16v-67c0-30.71-12-46.24-36.06-46.24-21.72,0-32.58,13.09-32.58,38.89V307.75h-50V181.67q0-38.65,19.75-61.39c13.6-15.15,31.4-22.92,53.51-22.92,25.58,0,44.95,9.82,57.75,29.48L256,147.69l12.45-20.85c12.81-19.66,32.17-29.48,57.75-29.48,22.11,0,39.91,7.77,53.51,22.92Q399.5,143,399.46,181.67Z" />
    </svg>`,
    
    `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <g id="boxes" style="display:none;"></g>
      <g id="icons">
        <path d="M28,28v456h456V28H28z M406.83,136.04l-24.46,23.45c-2.11,1.61-3.15,4.25-2.72,6.86v172.28c-0.44,2.61,0.61,5.26,2.72,6.86
		l23.88,23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43,2.43-3.15,2.43-6.86V198.81l-68.79,174.71h-9.3l-80.09-174.71v117.1
		c-0.67,4.92,0.97,9.88,4.43,13.44l32.18,39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57,4.98-8.56,4.15-13.44V180.5
		c0.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65,150.55l60.35-150.55h84.66V136.04z" />
      </g>
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M31.87,30.58H244.7V243.39H31.87Z" />
      <path d="M266.89,30.58H479.7V243.39H266.89Z" />
      <path d="M31.87,265.61H244.7v212.8H31.87Z" />
      <path d="M266.89,265.61H479.7v212.8H266.89Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <rect x="360" y="256" width="16" height="48" />
      <polygon points="112 304 241.6 304 193.6 256 112 256 112 304" />
      <path d="M364.5,60.1a8.79,8.79,0,0,1-1-.6,218.79,218.79,0,0,0-34.4-14.8l-5.4-1.8A223.2,223.2,0,0,0,256,32C132.3,32,32,132.3,32,256A223.71,223.71,0,0,0,147.4,451.8c.4.2.7.5,1.1.7a218.79,218.79,0,0,0,34.4,14.8l5.4,1.8A222.7,222.7,0,0,0,256,480c123.7,0,224-100.3,224-224A223.76,223.76,0,0,0,364.5,60.1ZM256,426.4a161.85,161.85,0,0,1-27.2-2.4,170.14,170.14,0,0,1-28.5-7.3c-1.9-.6-3.8-1.2-5.6-1.9a162.39,162.39,0,0,1-19-8.6A170.33,170.33,0,0,1,85.6,255.9c0-37.2,12.4-71.4,32.7-99.4L355.5,393.7C327.4,414,293.2,426.4,256,426.4Zm137.8-71L156.6,118.2c28-20.2,62.1-32.6,99.4-32.6A162.79,162.79,0,0,1,283.2,88a170.14,170.14,0,0,1,28.5,7.3c1.8.6,3.7,1.2,5.6,1.9a162,162,0,0,1,18,8.1,170.25,170.25,0,0,1,91.2,150.8C426.4,293.3,414,327.4,393.8,355.4Z" />
      <polygon points="352 256 318 256 352 290 352 256" />
      <rect x="384" y="256" width="16" height="48" />
      <path d="M360.1,212.7c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1-2.8-4.2-1-14.8,3.7-21.9a8,8,0,0,0,.4-8.2,8.26,8.26,0,0,0-7-4.3,53.67,53.67,0,0,1-18.3-3.9c-10.6-4.5-15.6-12.1-15.6-23.1,0-25.8,21.8-27.7,22.8-27.7v-16c-12,0-38.8,11-38.8,43.7,0,17.5,9,31,25.7,38a66.58,66.58,0,0,0,12,3.6c-3.3,9.8-3.6,20.9,1.7,28.7,9,13.3,20.3,13.2,33.3,13.1h3.5c26.3,0,34.6,2.3,38.9,4.3,5.7,2.6,6.8,7.5,6.6,15.7v1h16v-1C375.8,235.8,376.1,220.1,360.1,212.7Z" />
      <path d="M400,244c0-25.7-3-39.2-9.1-49.6C382.3,180,368.5,172,352,172H334.6c2.9-8.3,5.4-19.8,3.5-30.9-3.2-18.8-19.1-30-43.1-30v16c21,0,26.1,9.1,27.4,16.7,2.5,14.5-6.8,32.1-6.9,32.3a8,8,0,0,0,.1,7.9,8.06,8.06,0,0,0,6.9,3.9H352c10.9,0,19.4,4.9,25.1,14.6,3.1,5.3,6.9,13.5,6.9,41.4h16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M429.76,130.07,274.33,36.85a37,37,0,0,0-36.65,0L82.24,130.06A38.2,38.2,0,0,0,64,162.83V349a38.26,38.26,0,0,0,18.24,32.8L123,406.14l.23.13c20.58,10.53,28.46,10.53,37.59,10.53,32.14,0,52.11-20.8,52.11-54.29V182a8.51,8.51,0,0,0-8.42-8.58H182.13a8.51,8.51,0,0,0-8.42,8.58V362.51a15,15,0,0,1-6.85,13.07c-5.9,3.6-14.47,2.84-24.14-2.15l-39.06-23.51a1.1,1.1,0,0,1-.48-.92V165.46a1.32,1.32,0,0,1,.59-1.06l151.84-93a.82.82,0,0,1,.73,0l151.93,93a1.34,1.34,0,0,1,.55,1.1V349a1.28,1.28,0,0,1-.45,1L256.31,440.65a1.22,1.22,0,0,1-.8,0l-38.83-23.06a7.8,7.8,0,0,0-7.83-.41l-.34.2c-10.72,6.35-13.6,8-23.54,11.62-1.62.59-5.43,2-5.76,5.77s3.29,6.45,6.51,8.32l51.9,31.87a35.67,35.67,0,0,0,18.3,5.07l.58,0h0a35.87,35.87,0,0,0,17.83-5.07l155.43-93.13A38.37,38.37,0,0,0,448,349V162.83A38.21,38.21,0,0,0,429.76,130.07Z" />
      <path d="M307.88,318.05c-37.29,0-45.24-10.42-47.6-27.24a8.43,8.43,0,0,0-8.22-7.32h-19.8a8.44,8.44,0,0,0-8.26,8.58c0,14.58,5.12,62.17,83.92,62.17h0c24.38,0,44.66-5.7,58.63-16.49S388,311.26,388,292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89,0-5.47,0-18.28,35.46-18.28,25.23,0,38.74,3.19,43.06,20a8.35,8.35,0,0,0,8.06,6.67h19.87a8.24,8.24,0,0,0,6.16-2.86,8.91,8.91,0,0,0,2.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06,0-73.55,20.75-73.55,55.5,0,38.1,28.49,48.87,71.29,53.33,50,5.17,50,12.71,50,19.37C349.46,304.2,345.15,318.05,307.88,318.05Z" />
    </svg>`,
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="227.6" y="213.1" width="28.4" height="57.1" />
      <path d="M0,156V327.4H142.2V356H256V327.4H512V156ZM142.2,298.9H113.8V213.2H85.3v85.7H28.4V184.6H142.2Zm142.2,0H227.5v28.6H170.6V184.6H284.4Zm199.2,0H455.2V213.2H426.8v85.7H398.4V213.2H370v85.7H313.1V184.6H483.8V298.9Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M172.86,290.12c-9.75,0-18.11,4.56-24.86,13.87s-10.07,20.58-10.07,34,3.43,24.91,10.07,34.12S163,386,172.86,386c9.1,0,17-4.66,23.68-13.87s10.07-20.58,10.07-34.12-3.43-24.81-10.07-34S182,290.12,172.86,290.12Z" />
      <path d="M340.32,290.12c-9.64,0-18.11,4.56-24.86,13.87s-10.07,20.58-10.07,34,3.43,24.91,10.07,34.12S330.57,386,340.32,386c9.11,0,17-4.66,23.79-13.87s10.07-20.58,10.07-34.12-3.43-24.81-10.07-34S349.54,290.12,340.32,290.12Z" />
      <path d="M459.36,165h0c-.11,0,2.89-15.49.32-42.47-2.36-27-8-51.78-17.25-74.53,0,0-4.72.87-13.72,3.14S405,58,384.89,67.18c-19.82,9.2-40.71,21.44-62.46,36.29-14.79-4.23-36.86-6.39-66.43-6.39-28.18,0-50.25,2.16-66.43,6.39Q117.9,53.25,69.46,48,55.65,82.13,52.32,122.75c-2.57,27,.43,42.58.43,42.58C26.71,193.82,16,234.88,16,268.78c0,26.22.75,49.94,6.54,71,6,20.91,13.6,38,22.6,51.14A147.49,147.49,0,0,0,79,425.43c13.39,10.08,25.71,17.34,36.86,21.89,11.25,4.76,24,8.23,38.57,10.72a279.19,279.19,0,0,0,32.68,4.34s30,1.62,69,1.62S325,462.38,325,462.38A285.25,285.25,0,0,0,357.68,458a178.91,178.91,0,0,0,38.46-10.72c11.15-4.66,23.47-11.81,37-21.89a145,145,0,0,0,33.75-34.55c9-13.11,16.6-30.23,22.6-51.14S496,294.89,496,268.67C496,235.85,485.29,194.25,459.36,165ZM389.29,418.07C359.39,432.26,315.46,438,257.18,438h-2.25c-58.29,0-102.22-5.63-131.57-19.93s-44.25-43.45-44.25-87.43c0-26.32,9.21-47.66,27.32-64,7.93-7,17.57-11.92,29.57-14.84s22.93-3,33.21-2.71c10.08.43,24.22,2.38,42.11,3.79s31.39,3.25,44.79,3.25c12.53,0,29.14-2.17,55.82-4.33s46.61-3.25,59.46-1.09c13.18,2.17,24.65,6.72,34.4,15.93q28.44,25.67,28.5,64C434.18,374.62,419.07,403.88,389.29,418.07Z" />
    </svg>`,
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M424.81,148.79c-.43,2.76-.93,5.58-1.49,8.48-19.17,98-84.76,131.8-168.54,131.8H212.13a20.67,20.67,0,0,0-20.47,17.46L169.82,444.37l-6.18,39.07a10.86,10.86,0,0,0,9.07,12.42,10.72,10.72,0,0,0,1.7.13h75.65a18.18,18.18,0,0,0,18-15.27l.74-3.83,14.24-90,.91-4.94a18.16,18.16,0,0,1,18-15.3h11.31c73.3,0,130.67-29.62,147.44-115.32,7-35.8,3.38-65.69-15.16-86.72A72.27,72.27,0,0,0,424.81,148.79Z" />
      <path d="M385.52,51.09C363.84,26.52,324.71,16,274.63,16H129.25a20.75,20.75,0,0,0-20.54,17.48l-60.55,382a12.43,12.43,0,0,0,10.39,14.22,12.58,12.58,0,0,0,1.94.15h89.76l22.54-142.29-.7,4.46a20.67,20.67,0,0,1,20.47-17.46h42.65c83.77,0,149.36-33.86,168.54-131.8.57-2.9,1.05-5.72,1.49-8.48h0C410.94,98.06,405.19,73.41,385.52,51.09Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M256.05,32c-123.7,0-224,100.3-224,224,0,91.7,55.2,170.5,134.1,205.2-.6-15.6-.1-34.4,3.9-51.4,4.3-18.2,28.8-122.1,28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2,19.2-58,43.2-58,20.4,0,30.2,15.3,30.2,33.6,0,20.5-13.1,51.1-19.8,79.5-5.6,23.8,11.9,43.1,35.4,43.1,42.4,0,71-54.5,71-119.1,0-49.1-33.1-85.8-93.2-85.8-67.9,0-110.3,50.7-110.3,107.3,0,19.5,5.8,33.3,14.8,43.9,4.1,4.9,4.7,6.9,3.2,12.5-1.1,4.1-3.5,14-4.6,18-1.5,5.7-6.1,7.7-11.2,5.6-31.3-12.8-45.9-47-45.9-85.6,0-63.6,53.7-139.9,160.1-139.9,85.5,0,141.8,61.9,141.8,128.3,0,87.9-48.9,153.5-120.9,153.5-24.2,0-46.9-13.1-54.7-27.9,0,0-13,51.6-15.8,61.6-4.7,17.3-14,34.5-22.5,48a225.13,225.13,0,0,0,63.5,9.2c123.7,0,224-100.3,224-224S379.75,32,256.05,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M399.77,203c-.8-17.1-3.3-34.5-10.8-50.1a82.45,82.45,0,0,0-16.5-23.2,105.59,105.59,0,0,0-21.3-16.3c-17.1-10.2-37.5-17-84.4-31S192,64,192,64V422.3l79.9,25.7s.1-198.8.1-299.5v-3.8c0-9.3,7.5-16.8,16.1-16.8h.5c8.5,0,15.5,7.5,15.5,16.8V278c11,5.3,29.2,9.3,41.8,9.1a47.79,47.79,0,0,0,24-5.7,49.11,49.11,0,0,0,18.4-17.8,78.64,78.64,0,0,0,9.9-27.3C400.07,225.5,400.17,214.2,399.77,203Z" />
      <path d="M86.67,357.8c27.4-9.8,89.3-29.5,89.3-29.5V281.1s-76.5,24.8-111.3,37.1c-8.6,3.1-17.3,5.9-25.7,9.5-9.8,4.1-19.4,8.7-28.1,14.8a26.29,26.29,0,0,0-9.2,10.1,17.36,17.36,0,0,0-.5,13.6c2,5.1,5.8,9.3,10.1,12.6,7.8,5.9,17.1,9.5,26.4,12.2a262.42,262.42,0,0,0,88.4,13.3c14.5-.2,36-1.9,50-4.4v-42s-11,2.5-41.3,12.5c-4.6,1.5-9.2,3.3-14,4.3a104.87,104.87,0,0,1-21.6,2.2c-6.5-.3-13.2-.7-19.3-3.1-2.2-1-4.6-2.2-5.5-4.6-.8-2,.3-4,1.7-5.4C78.87,360.9,82.87,359.3,86.67,357.8Z" />
      <path d="M512,345.9c-.1-6-3.7-11.2-7.9-15-7.1-6.3-15.9-10.3-24.7-13.5-5.5-1.9-9.3-3.3-14.7-5-25.2-8.2-51.9-11.2-78.3-11.3-8,.3-23.1.5-31,1.4-21.9,2.5-67.3,15.4-67.3,15.4v48.8s67.5-21.6,96.5-31.8a94.43,94.43,0,0,1,30.3-4.6c6.5.2,13.2.7,19.4,3.1,2.2.9,4.5,2.2,5.5,4.5.9,2.6-.9,5-2.9,6.5-4.7,3.8-10.7,5.3-16.2,7.4-41,14.5-132.7,44.7-132.7,44.7v47s117.2-39.6,170.8-58.8c8.9-3.3,17.9-6.1,26.4-10.4,7.9-4,15.8-8.6,21.8-15.3A19.74,19.74,0,0,0,512,345.9Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M330.7,352l77.72-192H356.9L303.74,284.07,265.93,160H226.32L185.74,284.07l-28.63-56.53L131.21,307l26.3,45h50.7l36.68-111.27,35,111.27Z" />
      <path d="M48.79,286.09H80.44a93.39,93.39,0,0,0,25.62-3.21l8.18-25.19,22.88-70.39a55.75,55.75,0,0,0-6-7.82Q113.54,160,79.59,160H0V352H48.79Zm41.9-81.92q6.89,6.92,6.88,18.52t-6,18.53q-6.64,7.62-24.44,7.61H48.79V197.25H67.21q16.59,0,23.48,6.92ZM376.85,317.61l14.79-37.25h42.69l-20.26-56.51L439.41,160,512,352H458.47l-12.4-34.39Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M314,36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09,311.09,0,0,0-51.66,4.38c-45.74,8-54.07,24.7-54.07,55.54V128H256v16H107.62C66.06,144,32.33,193.67,32,255.12c0,.29,0,.58,0,.88a162.91,162.91,0,0,0,3.13,32c9.29,46.28,38.23,80,72.49,80H128V314c0-31.3,20.84-59.95,55-66.1l9.87-1.23H314a56.05,56.05,0,0,0,15.06-2A52.48,52.48,0,0,0,368,193.68V91.92C368,63,343.32,41.19,314,36.38ZM194.93,105.5a20.37,20.37,0,1,1,20.3-20.3A20.29,20.29,0,0,1,194.93,105.5Z" />
      <path d="M475.28,217c-10.7-42.61-38.41-73-70.9-73H386.67v47.45c0,39.57-26,68.22-57.74,73.13a63.54,63.54,0,0,1-9.69.75H198.08a60,60,0,0,0-15.23,1.95C160.54,273.14,144,291.7,144,315.77V417.54c0,29,29.14,46,57.73,54.31,34.21,9.95,71.48,11.75,112.42,0,27.19-7.77,53.85-23.48,53.85-54.31V384H256V368H404.38c29.44,0,54.95-24.93,67.45-61.31A156.83,156.83,0,0,0,480,256,160.64,160.64,0,0,0,475.28,217ZM316.51,404a20.37,20.37,0,1,1-20.3,20.3A20.29,20.29,0,0,1,316.51,404Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z" />
      <path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M324,256a36,36,0,1,0,36,36A36,36,0,0,0,324,256Z" />
      <circle cx="188" cy="292" r="36" transform="translate(-97.43 94.17) rotate(-22.5)" />
      <path d="M496,253.77c0-31.19-25.14-56.56-56-56.56a55.72,55.72,0,0,0-35.61,12.86c-35-23.77-80.78-38.32-129.65-41.27l22-79L363.15,103c1.9,26.48,24,47.49,50.65,47.49,28,0,50.78-23,50.78-51.21S441,48,413,48c-19.53,0-36.31,11.19-44.85,28.77l-90-17.89L247.05,168.4l-4.63.13c-50.63,2.21-98.34,16.93-134.77,41.53A55.38,55.38,0,0,0,72,197.21c-30.89,0-56,25.37-56,56.56a56.43,56.43,0,0,0,28.11,49.06,98.65,98.65,0,0,0-.89,13.34c.11,39.74,22.49,77,63,105C146.36,448.77,199.51,464,256,464s109.76-15.23,149.83-42.89c40.53-28,62.85-65.27,62.85-105.06a109.32,109.32,0,0,0-.84-13.3A56.32,56.32,0,0,0,496,253.77ZM414,75a24,24,0,1,1-24,24A24,24,0,0,1,414,75ZM42.72,253.77a29.6,29.6,0,0,1,29.42-29.71,29,29,0,0,1,13.62,3.43c-15.5,14.41-26.93,30.41-34.07,47.68A30.23,30.23,0,0,1,42.72,253.77ZM390.82,399c-35.74,24.59-83.6,38.14-134.77,38.14S157,423.61,121.29,399c-33-22.79-51.24-52.26-51.24-83A78.5,78.5,0,0,1,75,288.72c5.68-15.74,16.16-30.48,31.15-43.79a155.17,155.17,0,0,1,14.76-11.53l.3-.21,0,0,.24-.17c35.72-24.52,83.52-38,134.61-38s98.9,13.51,134.62,38l.23.17.34.25A156.57,156.57,0,0,1,406,244.92c15,13.32,25.48,28.05,31.16,43.81a85.44,85.44,0,0,1,4.31,17.67,77.29,77.29,0,0,1,.6,9.65C442.06,346.77,423.86,376.24,390.82,399Zm69.6-123.92c-7.13-17.28-18.56-33.29-34.07-47.72A29.09,29.09,0,0,1,440,224a29.59,29.59,0,0,1,29.41,29.71A30.07,30.07,0,0,1,460.42,275.1Z" />
      <path d="M323.23,362.22c-.25.25-25.56,26.07-67.15,26.27-42-.2-66.28-25.23-67.31-26.27h0a4.14,4.14,0,0,0-5.83,0l-13.7,13.47a4.15,4.15,0,0,0,0,5.89h0c3.4,3.4,34.7,34.23,86.78,34.45,51.94-.22,83.38-31.05,86.78-34.45h0a4.16,4.16,0,0,0,0-5.9l-13.71-13.47a4.13,4.13,0,0,0-5.81,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M108.56,342.78a60.34,60.34,0,1,0,60.56,60.44A60.63,60.63,0,0,0,108.56,342.78Z" />
      <path d="M48,186.67v86.55c52,0,101.94,15.39,138.67,52.11s52,86.56,52,138.67h86.66C325.33,312.44,199.67,186.67,48,186.67Z" />
      <path d="M48,48v86.56c185.25,0,329.22,144.08,329.22,329.44H464C464,234.66,277.67,48,48,48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M511.78,328.07v0c-1.47-11.92-7.51-22.26-18-30.77a3.58,3.58,0,0,0-.43-.44l0,0-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5,0,0a3.5,3.5,0,0,0-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09C383.28,271.36,382.07,257,389.2,235c1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54,2.86-6.2,5.83-4.7,22-18.36,42.1-31.57,61.5l-.78,1.14c-8.14-17.26-6.45-30.63-.78-47.38,1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62,1.93-13.72,19.82-21.65,41.24-2,5.39-3.72,10-4.75,12.15-2.45,5-4.79,10.7-7.27,16.75-5.6,13.69-11.91,29.1-20.93,38.78-3.28-7.25,1.88-18.68,6.89-29.77,5.93-13.11,11.53-25.5,5.08-33.41a11.82,11.82,0,0,0-8.33-4.32,13.26,13.26,0,0,0-6.15,1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48,14.88-45.75,26.8-6.84,8-22,14.1-35.31,19.45C129.37,305,124.37,307,120.2,309c-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11,42-65.14,79.88-84.43,28.71-14.6,53.67-24.28,76.31-29.57,31.8-7.43,58.66-5.93,79.82,4.44,11.58,5.67,17,18,13.56,30.68-9,32.95-46.29,55.53-78.18,65.69-19.21,6.12-35.56,8.68-50,7.84-18.1-1.05-32.88-10.13-39.2-14a21.18,21.18,0,0,0-3.2-1.8l-.29-.07a3.21,3.21,0,0,0-3.19,1c-1.3,1.55-.84,4-.37,5.24,6.15,16.07,18.85,26.22,37.74,30.17a92.09,92.09,0,0,0,18.78,1.79c44.21,0,100.62-25.49,121.34-46.48,14.13-14.3,24.42-29,28.68-54.35,4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5,12.21-82.4,34.41-114.94,60.93-40.12,32.67-54.62,63-43.12,90.25,11.81,27.93,40.61,45.4,68.46,62.3,9,5.45,17.56,10.64,25.27,16-2.32,1.13-4.69,2.28-7.1,3.43C67.06,335,40.54,347.75,25.83,368.82c-10.68,15.35-12.68,30.63-5.94,45.42,3.6,7.87,10,13.21,18.89,15.87A50,50,0,0,0,53,432c17.31,0,36.36-7,46.73-13.47,18.32-11.5,30.19-26.94,35.29-45.89,4.54-16.86,3.45-33.61-3.15-48.56l22.45-11.32c-10.83,36-2.53,57.5,6.59,69.36,3.36,4.37,9.42,7,16.19,7.12s13-2.43,16.52-6.77c6.66-8.25,11.58-17.9,16.11-27.55-.24,6.3.06,12.68,2.21,18.09,1.93,4.87,5.11,8.1,9.21,9.34,4.36,1.33,9.47.21,14.39-3.15,22.17-15.17,37.33-51.58,49.51-80.85,1.73-4.16,3.39-8.16,5-11.9a152.5,152.5,0,0,0,12.5,31.07c1.18,2.14,1.08,3.08-.52,4.84-2.41,2.64-5.77,5.83-9.33,9.21-10.78,10.23-24.2,23-26,34.23-.7,4.5,2.4,8.6,7.21,9.53,14.47,2.88,31.9-1.33,46.64-11.25,13.4-9,18.44-21.55,15-37.19-3.33-15.06,4.27-33.76,22.59-55.62,3,12.53,7,22.66,12.52,31.53l-.15.12c-13.34,11.65-31.62,27.6-28.78,46.95a13.35,13.35,0,0,0,5.58,9.22,14.22,14.22,0,0,0,11.2,2.06c17.47-3.67,30.62-11.06,40.18-22.57s6.07-24.27,2.85-34.17c25-6.78,47.26-6.61,68.1.5,11.7,4,20.09,10.57,24.93,19.64,6.09,11.41,2.8,21.94-9.29,29.65-3.71,2.37-5.5,3.82-5.61,5.65a2.65,2.65,0,0,0,1,2.23c1.4,1.15,5.72,3.15,15.49-3,9-5.65,14.28-13.34,15.63-23A39,39,0,0,0,511.78,328.07ZM112.05,353.13l-.1,1.28c-1.56,14.64-9,27.4-22.15,38-8.26,6.66-17.23,10.75-25.25,11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48,38.32-50.8,60.81-59.13A51.39,51.39,0,0,1,112.05,353.13ZM214.4,281.27h0c-3.7,21.09-14.49,60.9-31.45,76.35-.81.74-1.49,1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28,5-52.69,6.59-13.42,16-22.31,26.52-25a5.29,5.29,0,0,1,1.34-.19,1.58,1.58,0,0,1,1,.27A1.64,1.64,0,0,1,214.4,281.27Zm83.49,76.88c-3.19,3.33-7.56,2.88-6.53,1.66l16.24-17.24C306.29,348.5,302.42,353.41,297.89,358.15Zm67.37-14.91a14.07,14.07,0,0,1-4.93,1.39c-.46-9.07,8.33-19.28,17-26.09C379.66,328,374.89,338,365.26,343.24Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M467.16,303.6a205.69,205.69,0,0,0,4.9-45.15c0-116.32-95.69-210.7-213.79-210.7a221.83,221.83,0,0,0-36.52,3A123.58,123.58,0,0,0,155.93,32C87.55,32,32,86.72,32,154.15A119.56,119.56,0,0,0,49,216a211.16,211.16,0,0,0-4.32,42.35c0,116.44,95.69,210.7,213.67,210.7a214,214,0,0,0,39.09-3.5A125.45,125.45,0,0,0,356.07,480C424.57,480,480,425.28,480,357.85A118,118,0,0,0,467.16,303.6ZM368,359c-9.92,13.76-24.51,24.73-43.41,32.43S283.36,403,257.69,403c-30.69,0-56.36-5.37-76.55-15.87a101,101,0,0,1-35.24-30.8c-9.11-12.83-13.66-25.66-13.66-38,0-7.7,3-14.35,8.87-19.95,5.84-5.37,13.42-8.17,22.29-8.17,7.35,0,13.65,2.1,18.79,6.42,4.9,4.08,9.1,10.15,12.48,18.08A108.09,108.09,0,0,0,207,336.15q6.32,8.22,17.86,13.65c7.82,3.62,18.2,5.48,31,5.48,17.62,0,32.09-3.73,42.94-11.08,10.74-7.12,15.88-15.75,15.88-26.25,0-8.28-2.69-14.82-8.29-19.95-5.83-5.37-13.42-9.57-22.87-12.37-9.69-3-22.87-6.18-39.21-9.56-22.17-4.67-41-10.27-56-16.57-15.28-6.42-27.65-15.4-36.76-26.48-9.22-11.32-13.77-25.55-13.77-42.24a67.86,67.86,0,0,1,14.47-42.58c9.57-12.25,23.46-21.82,41.55-28.35,17.74-6.53,38.86-9.8,62.66-9.8,19.14,0,35.83,2.22,49.83,6.42s25.91,10.15,35.36,17.38,16.34,14.93,20.77,23,6.66,16.22,6.66,24c0,7.46-2.92,14.35-8.76,20.3a29.65,29.65,0,0,1-21.94,9.1c-7.93,0-14.12-1.87-18.43-5.6-4-3.5-8.17-8.87-12.72-16.69-5.37-9.91-11.79-17.85-19.14-23.45-7.24-5.36-19.14-8.16-35.71-8.16-15.29,0-27.77,3-37,9-8.87,5.72-13.19,12.37-13.19,20.18a18.26,18.26,0,0,0,4.32,12.25,38.13,38.13,0,0,0,12.72,9.57,90.14,90.14,0,0,0,17.15,6.53c6,1.64,15.87,4.09,29.53,7.12,17.38,3.62,33.25,7.82,47.26,12.13,14.24,4.55,26.49,10,36.52,16.45a72.93,72.93,0,0,1,24.16,25.09c5.72,10,8.64,22.63,8.64,37.1A75.09,75.09,0,0,1,368,359Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M126.12,315.1A47.06,47.06,0,1,1,79.06,268h47.06Z" />
      <path d="M149.84,315.1a47.06,47.06,0,0,1,94.12,0V432.94a47.06,47.06,0,1,1-94.12,0Z" />
      <path d="M196.9,126.12A47.06,47.06,0,1,1,244,79.06v47.06Z" />
      <path d="M196.9,149.84a47.06,47.06,0,0,1,0,94.12H79.06a47.06,47.06,0,0,1,0-94.12Z" />
      <path d="M385.88,196.9A47.06,47.06,0,1,1,432.94,244H385.88Z" />
      <path d="M362.16,196.9a47.06,47.06,0,0,1-94.12,0V79.06a47.06,47.06,0,1,1,94.12,0Z" />
      <path d="M315.1,385.88A47.06,47.06,0,1,1,268,432.94V385.88Z" />
      <path d="M315.1,362.16a47.06,47.06,0,0,1,0-94.12H432.94a47.06,47.06,0,1,1,0,94.12Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M496,347.21a190.31,190.31,0,0,1-32.79-5.31c-27.28-6.63-54.84-24.26-68.12-52.43-6.9-14.63-2.64-18.59,11.86-24,14.18-5.27,29.8-7.72,36.86-23,5.89-12.76,1.13-27.76-10.41-35.49-15.71-10.53-30.35-.21-46.62,2.07,3.73-46.66,8.66-88.57-22.67-127.73C338.14,48.86,297.34,32,256.29,32S174.43,48.86,148.48,81.33c-31.38,39.26-26.4,81.18-22.67,127.92C109.49,207,95,196.46,79.18,207.07c-14.72,9.85-17,29.76-5.44,43s31.64,9.5,43.45,20.6c6.49,6.09,3.49,12.61-.35,20.14-14.48,28.4-39.26,45.74-69.84,51.56-4,.76-22.31,2.87-31,3.65,0,9.28.52,16.78,1.63,21.73,2.94,13.06,12.32,23.58,23.69,30.1C52.5,404.25,76.8,404.28,83,413.36c3,4.48,1.76,12.28,5.33,17.38a23.8,23.8,0,0,0,15.37,9.75c18.61,3.61,37.32-7.2,56.42-2.1,14.85,3.95,26.52,15.87,39.26,24,15.51,9.85,32.34,16.42,50.83,17.49,38.1,2.21,59.93-18.91,90.58-36.42,19.5-11.14,38.15-3.86,58.88-2.68,20.1,1.15,23.53-9.25,29.62-24.88a27.37,27.37,0,0,0,1.54-4.85,10.52,10.52,0,0,0,2.28-1.47c2-1.57,10.55-2.34,12.76-2.86,10.28-2.44,20.34-5.15,29.17-11.2,11.31-7.76,17.65-18.5,19.58-32.64A93.73,93.73,0,0,0,496,347.21ZM208,128c8.84,0,16,10.74,16,24s-7.16,24-16,24-16-10.74-16-24S199.16,128,208,128Zm103.62,77.7c-15.25,15-35,23.3-55.62,23.3a78.37,78.37,0,0,1-55.66-23.34,8,8,0,0,1,11.32-11.32A62.46,62.46,0,0,0,256,213c16.39,0,32.15-6.64,44.39-18.7a8,8,0,0,1,11.23,11.4ZM304,176c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S312.84,176,304,176Z" />
    </svg>`,
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M5.8,278a2.11,2.11,0,0,0-2,2L0,308.64,3.74,336.8a2.12,2.12,0,0,0,2.05,2,2.14,2.14,0,0,0,2-2h0l4.44-28.17L7.83,280a2.14,2.14,0,0,0-2-2Z" />
      <path d="M26.85,262.32a2.13,2.13,0,0,0-4.26,0l-5,46.32,5,45.3a2.13,2.13,0,0,0,4.26,0l5.73-45.31-5.73-46.32Z" />
      <path d="M106.17,219.59a4,4,0,0,0-3.87,3.87l-4,85.22,4,55.08a3.88,3.88,0,0,0,7.75,0v0l4.53-55.08-4.53-85.22A4,4,0,0,0,106.17,219.59Z" />
      <path d="M65.12,249.21a3.09,3.09,0,0,0-3,3L57.6,308.66l4.51,54.63a3,3,0,0,0,6,0l5.13-54.63-5.13-56.48A3.1,3.1,0,0,0,65.12,249.21Z" />
      <path d="M147.88,367.6a4.83,4.83,0,0,0,4.75-4.74l3.93-54.15-3.93-113.46a4.75,4.75,0,0,0-9.5,0l-3.49,113.45,3.49,54.17A4.81,4.81,0,0,0,147.88,367.6Z" />
      <path d="M233.28,367.85a6.6,6.6,0,0,0,6.5-6.52v0l2.74-52.6-2.74-131a6.5,6.5,0,1,0-13,0l-2.45,131c0,.08,2.45,52.67,2.45,52.67A6.59,6.59,0,0,0,233.28,367.85Z" />
      <path d="M190.26,367.65a5.67,5.67,0,0,0,5.62-5.64v0l3.34-53.33-3.34-114.28a5.63,5.63,0,1,0-11.25,0l-3,114.29,3,53.32a5.66,5.66,0,0,0,5.63,5.6Z" />
      <path d="M85.56,367.15A3.53,3.53,0,0,0,89,363.74l4.83-55.09L89,256.25a3.44,3.44,0,0,0-6.88,0l-4.26,52.38,4.26,55.08A3.5,3.5,0,0,0,85.56,367.15Z" />
      <path d="M44.84,364.13a2.67,2.67,0,0,0,2.57-2.52l5.43-53-5.42-55a2.57,2.57,0,0,0-5.14,0l-4.78,55,4.78,53a2.62,2.62,0,0,0,2.56,2.53Z" />
      <path d="M211.69,192.53a6.1,6.1,0,0,0-6.07,6.09l-2.71,110.11,2.71,53a6.07,6.07,0,0,0,12.13,0v0l3-53-3-110.13a6.1,6.1,0,0,0-6.06-6.07Z" />
      <path d="M127,367.71a4.41,4.41,0,0,0,4.31-4.3l4.23-54.71L131.26,204a4.32,4.32,0,0,0-8.63,0L118.89,308.7l3.75,54.73A4.38,4.38,0,0,0,127,367.71Z" />
      <path d="M174.17,362.54v0l3.63-53.8-3.63-117.28a5.19,5.19,0,1,0-10.37,0l-3.23,117.28,3.23,53.83a5.18,5.18,0,0,0,10.36,0v0Z" />
      <path d="M449,241.1A62.42,62.42,0,0,0,424.67,246c-5-57.18-52.61-102-110.66-102a111.92,111.92,0,0,0-40.28,7.58c-4.75,1.85-6,3.76-6.06,7.46V360.4a7.66,7.66,0,0,0,6.8,7.5c.16,0,173.44.11,174.56.11,34.78,0,63-28.41,63-63.45s-28.2-63.46-63-63.46Z" />
      <path d="M254.79,158.87a7,7,0,0,0-6.94,7L245,308.75l2.85,51.87a6.94,6.94,0,1,0,13.87-.06v.06l3.09-51.87-3.09-142.93a7,7,0,0,0-6.93-6.95Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M392,440V320h40V480H64V320h40V440Z" />
      <path d="M149.1,308.77l198.57,40.87,8.4-39.32L157.5,269.45Zm26.27-93.12L359.22,300,376,263.76,192.18,178.92Zm50.95-89,156,127.78,25.74-30.52-156-127.78ZM328,32,294.61,55.8,415.43,216.17,448,192ZM144,400H348V360H144Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M478.8,208.2a36,36,0,1,1-36-36A36,36,0,0,1,478.8,208.2ZM442.6,139a69.42,69.42,0,0,0-69.4,68.7l-43.2,62a48.86,48.86,0,0,0-5.4-.3,51.27,51.27,0,0,0-26.4,7.3L102.4,198a51.8,51.8,0,1,0-50.6,62.9,51.27,51.27,0,0,0,26.4-7.3L274,332.2a51.76,51.76,0,0,0,102.1-5.9l66.5-48.6a69.35,69.35,0,1,0,0-138.7Zm0,22.9a46.45,46.45,0,1,1-46.5,46.5A46.54,46.54,0,0,1,442.6,161.9Zm-390.8,9a38.18,38.18,0,0,1,33.7,20.2l-18.9-7.6v.1a30.21,30.21,0,0,0-22.6,56v.1l16.1,6.4a36.8,36.8,0,0,1-8.2.9,38.05,38.05,0,0,1-.1-76.1ZM324.6,283.1A38.1,38.1,0,1,1,290.9,339c6.3,2.5,12.5,5,18.8,7.6a30.27,30.27,0,1,0,22.5-56.2L316.3,284A46.83,46.83,0,0,1,324.6,283.1Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M188.8,334.07H386.13L279.47,448H83.2Z" />
      <path d="M512,199H106.61L0,313H405.39Z" />
      <path d="M232.2,64H428.8L322.62,177.93H125.87Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M242.69,340.3h26.62V267.7h67V241.88h-67v-72.6H242.69v72.6H176.54V267.7h66.15Z" />
      <path d="M119.26,445.18h22.59V380.64h59.7V360.47h-59.7V295.13H119.26v65.34H59.56v20.17h59.7Z" />
      <path d="M370.15,212h22.59V147.5h60.5V128.13h-60.5V62.79H370.15v65.34h-59.7V147.5h59.7Z" />
      <path d="M246.72,496h19.36V450h41.15V433.08H266.08v-46H246.72v46H206.39V450h40.33Z" />
      <path d="M120.07,212h21V146.69h60.51V128.13H141V62.79h-21v65.34H59.56v18.56h60.51Z" />
      <path d="M435.72,308.84h19.36V263.66H496V245.92H455.08V200.74H435.72v45.18H395.39v17.74h40.33Z" />
      <path fill-rule="evenodd" d="M370.15,445.18h22.59V380.64h60.5V360.47h-60.5V295.13H370.15v65.34h-59.7v20.17h59.7Z" />
      <path d="M307,74.08V60.37H266.66V16H252.14V60.37H211.81V74.08h40.33v44.37h14.52V74.08ZM56.11,305.61H70.63V261.24H111V247.53H70.63V204H56.11v43.56H16v14.52L56.11,262Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M390,32H120c-49.19,0-88,38.81-88,88V390c0,49.19,38.81,90,88,90H390c49.19,0,90-40.81,90-90V120C480,70.81,439.19,32,390,32ZM336,396H284c-42.51,0-72-23.68-72-76V240H176V192c42.51-11,57.95-48.32,60-80h44v72h52v56H280l-.39,70.51c0,21.87,11,29.43,28.62,29.43L336,340Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M443.66,405.05c-1.46-.79-2.85-1.54-4-2.2-6.47-3.83-13-10.52-11.85-17.83,2.42-15.94,2.89-23.47-.49-28.79a15.61,15.61,0,0,0-7.67-6.2l0-.06c1.41-2.56,2.26-5.66,2.83-10.12,1.44-11-5-44-13.7-70.7-8.08-24.68-29.24-50-44.7-68.56l-3.61-4.34c-23.88-28.93-24.34-38.19-26.55-82.67-.32-6.47-.69-13.8-1.17-22C329.87,41.43,304,16,256,16c-25.2,0-44.62,7.15-57.72,21.26C187.79,48.55,182,64,182,80.78c0,29.52,2,53,2.15,54.29,1.4,35.7,1,41.22-8.31,57.55-2.23,3.93-8.38,10.87-14.89,18.21-8.48,9.57-18.09,20.41-23.36,29.22-3.77,6.31-5.88,12.63-8.11,19.33-3.4,10.21-7.26,21.78-18.15,36.57-12.57,17.07-15.52,29.61-11,47.45v0c-4.94,6.45-4.83,14.37-4.75,20.23a25.84,25.84,0,0,1-.3,6.09c-2.29,7.59-12.42,9.4-22,10.18-1.58.12-3.1.21-4.55.29-7.26.39-13.53.74-17.13,6.3-3.47,5.36-1.12,13.8,2.14,25.48.72,2.58,1.46,5.25,2.19,8.06,1.83,7-.16,10.48-2.68,14.84-2.44,4.21-5.21,9-5.21,17.55,0,14.67,20,18,43.05,21.94,7.36,1.24,15,2.53,22.63,4.24a225.58,225.58,0,0,1,34.08,10.68c9.72,3.73,17.4,6.68,26.43,6.68,16.18,0,28.25-9.77,39.92-19.21L216.3,475c5.53-4.49,21.5-4,34.34-3.64,3.46.1,6.73.2,9.65.2l6.22,0c13.48-.08,31.94-.18,42.23,2.5,3.75,1,6.2,3.72,9.29,7.19C323.9,487.81,331.2,496,351.42,496c19.39,0,29.55-8.71,41.32-18.8,7.16-6.13,14.56-12.48,25.07-17.86,3.92-2,7.62-3.87,11.08-5.61C451.53,442.35,464,436.08,464,425.91,464,416,451.76,409.41,443.66,405.05ZM211.11,88.38a13.91,13.91,0,0,1,12.47,9c1.95,5.55,1.81,10.42.21,12.94,0,0-.22-1-.36-1.44a14.85,14.85,0,0,0-6.44-8.59,11.35,11.35,0,0,0-8.94-1.47c-4.26,1.13-8.41,5-8.91,18.79-5.16-10.47-2.31-18,.92-23C202.37,90.88,207.53,88.28,211.11,88.38Zm-17.5,375C192,479.24,175.2,479,170.09,478.59c-9.81-.82-21.66-4.69-33.13-8.43-4.52-1.47-9.19-3-13.73-4.34-13.2-3.89-30.12-6.74-43.72-9-3.22-.55-6.27-1.06-9.05-1.55s-4.61-1.27-5.2-2.3c-1-1.65.38-5.25,1.93-9.41C69.27,438,72.11,430.34,72,421c0-3.91-1.47-8.3-2.84-12.56-1.62-5-3.28-10.17-1.93-12.62,1.23-2.23,6.75-2.49,11.6-2.49h2.26c3.55,0,6.62.06,8.75-.53,6.51-1.81,14.86-6.92,17.81-13.88.9-2.17,1.37-6.94,2-14,.37-4.12.74-8.37,1.22-10.58a3.55,3.55,0,0,1,2.11-2.55c1.65-.77,6.78-1.91,18.63,4.08,11.18,5.65,22.88,25.84,34.2,45.37,3.56,6.14,6.92,11.94,10.3,17.36C190.15,441.14,194.94,450.2,193.61,463.4Zm128.84-31.56a68.74,68.74,0,0,1-4.55,10.9.58.58,0,0,1-1.08-.42,56.61,56.61,0,0,0,2.11-18.43c-.25-4.73-.4-7.59-2.66-8.51s-4.26.83-9.45,5.54c-1.1,1-2.36,2.14-3.78,3.4-10.8,9.47-26.88,20.68-55.61,23.37-16.84,1.59-27.59-4.63-30.92-8.14a2.16,2.16,0,0,0-3.07-.08,2.23,2.23,0,0,0-.51,2.29c2.12,6.84,1.2,12.26-.49,16.19-.95,2.2-1.85,2.05-2-.34-.25-4.64-1-9.88-3-14.19-3.11-6.94-7-14.34-8.89-17.88v-.05c3.24-1.49,8.86-4.83,11.37-10.88s4.48-18-9.82-31.74c-6.28-6.05-22.1-17.16-36.06-27-10.9-7.65-22.17-15.56-23.65-17.51-4.49-5.89-6.37-9.3-6.94-19.65.07-2.3.13-4.59.19-6.89l.27-2.49a.58.58,0,0,1,1.15,0,63.07,63.07,0,0,0,2,9.72c1.08,3.73,2.4,7.58,3.62,9.18,3.19,4.22,7.56,7.39,11.67,8.49a5.48,5.48,0,0,0,5-.72c2.93-2.33,2.65-7.6,2.19-16.34-.47-9-1.11-21.34,1.85-34.55,5.62-25,10.91-32.51,17.61-42,.86-1.22,1.75-2.47,2.65-3.79,1.44-2.08,3-4.1,4.67-6.23,7.47-9.61,15.93-20.49,13.92-40.95-.51-5.19-.76-8.83-.86-11.39a1,1,0,0,1,1.88-.59l.49.77,1.21,2c4.86,8,13.64,22.57,25.1,22.57a13.62,13.62,0,0,0,2.36-.21c23.39-3.93,51.9-30.25,52.17-30.51,3.12-3,2.84-6.14,1.64-7.91a5.18,5.18,0,0,0-6.45-1.72c-3.29,1.4-7.14,3.15-11.22,5-13.82,6.27-37,16.75-42.25,14.34a23.11,23.11,0,0,1-6.32-5.13,1,1,0,0,1,1.14-1.65c5.59,2.29,9.55,1.45,14.2-.08l1-.34c9.37-3.09,14.2-4.77,30.76-12.08a97.55,97.55,0,0,1,16.26-5.93c4-1,6.42-1.63,7.71-4.34a6.65,6.65,0,0,0-.5-7.13c-1.53-1.87-4.07-2.57-7-1.9-3.22.75-4.7,3-6.41,4.49-2.4,2.05-5,4.16-17.19,8.65-27,10-34.58,10.61-45.21,3.43-9.84-6.69-15.15-13.23-15.15-16,0-2.13,5.45-5.7,8.71-7.84,1.33-.87,2.59-1.69,3.62-2.46,4.34-3.22,13-11.39,13.38-11.73,5.4-5.41,17.91-2.18,25,2.58a2.23,2.23,0,0,0,1.72.41,2.14,2.14,0,0,0,1.68-2.58c-4.2-17.46-.13-27.34,4-32.55a22.58,22.58,0,0,1,17.48-8.48c12.81,0,21.76,10,21.76,24.42,0,11-2.82,16.79-5.48,20.3a1.73,1.73,0,0,1-2.58.18,1.78,1.78,0,0,1-.24-2.2A24.61,24.61,0,0,0,290,114a16.58,16.58,0,0,0-16.84-16.67c-3.94,0-13.48,1.5-16.77,15.44a29.81,29.81,0,0,0-.34,11.07l.08.71c.9,7.38,15.3,12.51,27.23,15.51,11.36,2.85,13,6.22,8.84,19.63s3.11,26.23,5.7,29.57a78.3,78.3,0,0,1,8.31,12.47,93.8,93.8,0,0,1,6.62,16.48c2.17,6.79,4.05,12.65,10.63,21.22,11.07,14.4,17.66,48.64,15,78-.21,2.41-.53,4.29-.77,5.67-.43,2.53-.72,4.2.66,5.38s3.16.7,7.26-.63l3.43-1.09a109.33,109.33,0,0,1,12.58-2.8,2.15,2.15,0,0,0,1.59-1.16c3.43-6.91,3.85-15.22,4-22.47q0-1.31.06-2.79c.19-7.77.45-18.93-2.95-32a1,1,0,0,1,1.93-.64,93,93,0,0,1,6.66,25.55c2.55,22.58-1.9,32.09-1.94,32.17a1.61,1.61,0,0,0,.95,2.25,17.12,17.12,0,0,1,6.95,4.67c1.46,1.66.93,2.4-1.14,1.62a36.26,36.26,0,0,0-12.77-2.29c-10.4,0-18.09,4.95-21.51,9.19-3.19,3.94-3.7,7.67-3.83,11.27l-.06.05c-7.48-.75-12.94,1.21-17.47,6.21l-.08.09c-6.26,7.75-4,24.63-1.29,38.48h0C322,400.61,326.31,419.68,322.45,431.84Zm96.1,10.07c-15.71,6.71-25.43,14.51-34,21.39-5.65,4.53-11,8.81-17.28,12.14-10.12,5.34-24.91,6.53-33.27-7.7-2.37-4-.71-9.86,1.58-17.95,3.05-10.75,7.23-25.46,3.71-44.65-.94-5.12-1.77-9.51-2.49-13.31C334,377,332.9,371.43,334,367c.63-2.45,3.43-3,5.87-3a20.83,20.83,0,0,1,2.63.19l0,0a29.51,29.51,0,0,0,7,12.1c5.7,5.86,13.63,8.83,23.56,8.85,2.1.17,25.94,1.55,36.54-22.4l0,0c1.46.18,3.65.7,4.3,2.3,1.28,3.19-.27,8.91-1.52,13.5-.9,3.31-1.68,6.16-1.63,8.37.31,16,11,22.78,25.83,32.16,1.79,1.13,3.66,2.31,5.55,3.54S445,425,445,426C444.48,430.79,425,439.16,418.55,441.91Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M80,32,48,112V416h96v64h64l64-64h80L464,304V32ZM416,288l-64,64H256l-64,64V352H112V80H416Z" />
      <rect x="320" y="143" width="48" height="129" />
      <rect x="208" y="143" width="48" height="129" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M240,480V443.58C160.53,439,112.25,398.06,112,336h72c1.77,26.34,23.86,46.45,56,50V288L213.23,281c-61-14.18-93.64-49.39-93.64-102.08C119.59,116.81,164.08,76.08,240,70V32h32V70c77.39,6.3,119,47.74,120,106H320c-.76-24.06-15.83-43.39-48-46v92l30.82,7.28C367.61,243.46,400,277,400,332c0,64.34-43.74,105.88-128,111.32V480Zm0-264V130c-27.59,1.52-47.27,18.47-47.27,42.53C192.73,194.83,209.12,209.41,240,216Zm32,78v92c38.15-1.54,56.38-18.92,56.38-45.77C328.38,315.65,310.15,299.1,272,294Z" />
    </svg>`,
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.6C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.8,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM278,387H174.32L132.75,138.44l90.75-8.62,22,176.87c20.53-33.45,45.88-86,45.88-121.87,0-19.62-3.36-33-8.61-44L365.4,124.1c9.56,15.78,13.86,32,13.86,52.57C379.25,242.17,323.34,327.26,278,387Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill-rule="evenodd" d="M256,48,496,464H16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M476.9,114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12,16.79c-26.79,19.51-46.26,54.42-54,78.28a4,4,0,0,0,5.13,5c10.77-3.8,21.72-7.1,34-6.45,15,.8,24.51,12,24.91,25.29.3,9.79-.2,18.69-3.6,27.68C337.87,243,321,270.78,301.06,295.07a72.49,72.49,0,0,1-10,9.89c-10.21,8.29-18.81,6.1-25.41-5.2-5.4-9.29-9-18.88-12.2-29.08-12.4-39.67-16.81-80.84-23.81-121.52-3.3-19.48-7-39.77-18-56.86-11.6-17.79-28.61-24.58-50-22-14.7,1.8-36.91,17.49-47.81,26.39,0,0-56,46.87-81.82,71.35l21.2,27s17.91-12.49,27.51-18.29c5.7-3.39,12.4-4.09,17.2.2,4.51,3.9,9.61,9,12.31,14.1,5.7,10.69,11.2,21.88,14.7,33.37,13.2,44.27,25.51,88.64,37.81,133.22,6.3,22.78,13.9,44.17,28,63.55,19.31,26.59,39.61,32.68,70.92,21.49,25.41-9.09,46.61-26.18,66-43.87,33.11-30.18,59.12-65.36,85.52-101.14C433.59,270,450.49,242,464.59,210.72,478.5,179.74,484,147.26,476.9,114Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M484.7,132c3.56-11.28,0-19.48-15.75-19.48H416.58c-13.21,0-19.31,7.18-22.87,14.86,0,0-26.94,65.6-64.56,108.13-12.2,12.3-17.79,16.4-24.4,16.4-3.56,0-8.14-4.1-8.14-15.37V131.47c0-13.32-4.06-19.47-15.25-19.47H199c-8.14,0-13.22,6.15-13.22,12.3,0,12.81,18.81,15.89,20.84,51.76V254c0,16.91-3,20-9.66,20-17.79,0-61-66.11-86.92-141.44C105,117.64,99.88,112,86.66,112H33.79C18.54,112,16,119.17,16,126.86c0,13.84,17.79,83.53,82.86,175.77,43.21,63,104.72,96.86,160.13,96.86,33.56,0,37.62-7.69,37.62-20.5V331.33c0-15.37,3.05-17.93,13.73-17.93,7.62,0,21.35,4.09,52.36,34.33C398.28,383.6,404.38,400,424.21,400h52.36c15.25,0,22.37-7.69,18.3-22.55-4.57-14.86-21.86-36.38-44.23-62-12.2-14.34-30.5-30.23-36.09-37.92-7.62-10.25-5.59-14.35,0-23.57-.51,0,63.55-91.22,70.15-122" style="fill-rule:evenodd" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <polygon points="256 144.03 200.51 47.92 121.08 47.92 256 281.61 390.92 47.92 311.49 47.92 256 144.03" />
      <polygon points="409.4 47.92 256 313.61 102.6 47.92 15.74 47.92 256 464.08 496.26 47.92 409.4 47.92" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <polygon points="179.9 388 179.9 388 103.74 256 179.9 388" style="fill:none" />
      <polygon points="179.9 388 332.11 388 408.26 256 332.11 124 179.9 124 103.74 256 179.9 388" style="fill:none" />
      <polygon points="103.74 256 179.9 124 179.9 124 103.74 256" style="fill:none" />
      <polygon points="496 256 376 48 239.74 48 195.9 124 332.11 124 408.26 256 332.11 388 195.9 388 239.74 464 376 464 496 256" />
      <polygon points="179.9 388 103.74 256 179.9 124 179.9 124 223.74 48 136 48 16 256 136 464 223.74 464 179.9 388 179.9 388" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path id="XMLID_501_-1" data-name="XMLID 501 -1" d="M408.67,298.53a21,21,0,1,1,20.9-21,20.85,20.85,0,0,1-20.9,21m-102.17,0a21,21,0,1,1,20.9-21,20.84,20.84,0,0,1-20.9,21M458.59,417.39C491.1,394.08,512,359.13,512,319.51c0-71.08-68.5-129.35-154.41-129.35S203.17,248.43,203.17,319.51s68.5,129.34,154.42,129.34c17.41,0,34.83-2.33,49.92-7,2.49-.86,3.48-1.17,4.64-1.17a16.67,16.67,0,0,1,8.13,2.34L454,462.83a11.62,11.62,0,0,0,3.48,1.17,5,5,0,0,0,4.65-4.66,14.27,14.27,0,0,0-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94,18.94,0,0,1-.33-3.47,11.4,11.4,0,0,1,5-9.35" />
      <path id="XMLID_505_-7" data-name="XMLID 505 -7" d="M246.13,178.51a24.47,24.47,0,0,1,0-48.94c12.77,0,24.38,11.65,24.38,24.47,1.16,12.82-10.45,24.47-24.38,24.47m-123.06,0A24.47,24.47,0,1,1,147.45,154a24.57,24.57,0,0,1-24.38,24.47M184.6,48C82.43,48,0,116.75,0,203c0,46.61,24.38,88.56,63.85,116.53C67.34,321.84,68,327,68,329a11.38,11.38,0,0,1-.66,4.49C63.85,345.14,59.4,364,59.21,365s-1.16,3.5-1.16,4.66a5.49,5.49,0,0,0,5.8,5.83,7.15,7.15,0,0,0,3.49-1.17L108,351c3.49-2.33,5.81-2.33,9.29-2.33a16.33,16.33,0,0,1,5.81,1.16c18.57,5.83,39.47,8.16,60.37,8.16h10.45a133.24,133.24,0,0,1-5.81-38.45c0-78.08,75.47-141,168.35-141h10.45C354.1,105.1,277.48,48,184.6,48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M414.73,97.1A222.14,222.14,0,0,0,256.94,32C134,32,33.92,131.58,33.87,254A220.61,220.61,0,0,0,63.65,365L32,480l118.25-30.87a223.63,223.63,0,0,0,106.6,27h.09c122.93,0,223-99.59,223.06-222A220.18,220.18,0,0,0,414.73,97.1ZM256.94,438.66h-.08a185.75,185.75,0,0,1-94.36-25.72l-6.77-4L85.56,427.26l18.73-68.09-4.41-7A183.46,183.46,0,0,1,71.53,254c0-101.73,83.21-184.5,185.48-184.5A185,185,0,0,1,442.34,254.14C442.3,355.88,359.13,438.66,256.94,438.66ZM358.63,300.47c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54,2.78-14.4,18-17.65,21.75-6.5,4.16-12.07,1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56,2.44-11.32c2.51-2.49,5.57-6.48,8.36-9.72s3.72-5.56,5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53,20.53,0,0,0-14.86,6.94c-5.11,5.56-19.51,19-19.51,46.28s20,53.68,22.76,57.38,39.3,59.73,95.21,83.76a323.11,323.11,0,0,0,31.78,11.68c13.35,4.22,25.5,3.63,35.1,2.2,10.71-1.59,33-13.42,37.63-26.38s4.64-24.06,3.25-26.37S364.21,303.24,358.63,300.47Z" style="fill-rule:evenodd" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M480,265H232V444l248,36V265Z" />
      <path d="M216,265H32V415l184,26.7V265Z" />
      <path d="M480,32,232,67.4V249H480V32Z" />
      <path d="M216,69.7,32,96V249H216V69.7Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M259,271.3,226.2,367h-.1l-25.4,73.1c1.8.5,3.5.9,5.3,1.4h.3a192.51,192.51,0,0,0,49.5,6.5,157,157,0,0,0,24.9-1.8,184.3,184.3,0,0,0,32.5-7.1h0c2.6-.8,5.2-1.7,7.8-2.6-2.8-6-8.8-19.3-9.1-19.9Z" />
      <path d="M80.8,180.5C70.8,203.1,64,230.9,64,256c0,6.3.3,12.6.9,18.8,6.9,71.2,52.9,131,116.1,157.9,2.6,1.1,5.3,2.2,8,3.2L96,180.6C88,180.3,86.5,180.8,80.8,180.5Z" />
      <path d="M430.2,175.4a188,188,0,0,0-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193,193,0,0,0,325.1,77a189.2,189.2,0,0,0-69.2-13,191.51,191.51,0,0,0-149.4,71.7A196,196,0,0,0,89,161.3c14.2.1,31.8.1,33.8.1,18.1,0,46-2.2,46-2.2,9.4-.6,10.4,13.1,1.1,14.2,0,0-9.4,1.1-19.8,1.6L213,362l37.8-113.3L224,175.1c-9.4-.5-18.1-1.6-18.1-1.6-9.4-.5-8.2-14.8,1-14.2,0,0,28.5,2.2,45.5,2.2,18.1,0,46-2.2,46-2.2,9.3-.6,10.5,13.1,1.1,14.2,0,0-9.3,1.1-19.7,1.6l62.3,185.6,17.3-57.6c8.7-22.4,13.1-40.9,13.1-55.7,0-21.3-7.7-36.1-14.3-47.6-8.7-14.3-16.9-26.3-16.9-40.4,0-15.9,12-30.7,29-30.7h2.2c26.2-.7,34.8,25.3,35.9,43v.6c.4,7.2.1,12.5.1,18.8,0,17.4-3.3,37.1-13.1,61.8l-39,112.8-22.3,65.7c1.8-.8,3.5-1.6,5.3-2.5,56.7-27.4,98-82,106.7-146.7a172.07,172.07,0,0,0,1.9-26A191.11,191.11,0,0,0,430.2,175.4Z" />
      <path d="M256,48a208.06,208.06,0,0,1,81,399.66A208.06,208.06,0,0,1,175,64.34,206.7,206.7,0,0,1,256,48m0-16C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M126.8,248.3c39.7-58.6,77.9-92.8,77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8A224.13,224.13,0,0,0,77.2,391C77.2,386.6,77.8,320.7,126.8,248.3Z" />
      <path d="M480,256A223.71,223.71,0,0,0,403.4,87.3l-3.2.9c-50.7,18.5-92.9,67.4-92.9,67.4s38.2,34.2,77.9,92.8c49,72.4,49.6,138.3,49.5,142.7A222.8,222.8,0,0,0,480,256Z" />
      <path d="M201.2,80.9c29.3,13.1,54.6,34.6,54.6,34.6s25.5-21.4,54.8-34.6c36.8-16.5,64.9-11.3,72.3-9.5a224.06,224.06,0,0,0-253.8,0C136.3,69.6,164.3,64.3,201.2,80.9Z" />
      <path d="M358.7,292.9C312.4,236,255.8,199,255.8,199s-56.3,37-102.7,93.9c-39.8,48.9-54.6,84.8-62.6,107.8l-1.3,4.8a224,224,0,0,0,333.6,0l-1.4-4.8C413.4,377.7,398.5,341.8,358.7,292.9Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M313.8,303.9,469,32H365L209.4,303.8a1.35,1.35,0,0,0,0,1.7l98.9,173.8c.4.7.8.7,1.6.7H413L313.7,305.3A1.74,1.74,0,0,1,313.8,303.9Z" />
      <path d="M221.9,216.2,163,113a2,2,0,0,0-2-1H65l58.9,104.4a1.13,1.13,0,0,1,.1.8L43,352h96.8a1.54,1.54,0,0,0,1.6-.9l80.5-133.7A2.44,2.44,0,0,0,221.9,216.2Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M410.32,37.13c-13.56,0-27-.93-39.12-5.13L256,218.67,140.8,32c-12.12,4.2-24.84,5.13-38.4,5.13C89.08,37.13,75.88,36.08,64,32L217.6,280.15V480c12-4.08,25-5.13,38.4-5.13s26.4,1.05,38.4,5.13V280.5L448,32C436.12,36,423.64,37.13,410.32,37.13Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M448,32H368L256,253.13,144,32H64L176.37,240H128v48h73.56L216,319v17H128v48h88v96h80V384h88V336H296V319l14.89-31H384V240H335.71Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5_logos</title>
      <path d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M421.83,293.82A144,144,0,0,0,218.18,90.17" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M353.94,225.94a48,48,0,0,0-67.88-67.88" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="192" y1="464" x2="192" y2="416" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="90.18" y1="421.82" x2="124.12" y2="387.88" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="48" y1="320" x2="96" y2="320" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M286.06,158.06,172.92,271.19a32,32,0,0,1-45.25,0L105,248.57a32,32,0,0,1,0-45.26L218.18,90.17" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M421.83,293.82,308.69,407a32,32,0,0,1-45.26,0l-22.62-22.63a32,32,0,0,1,0-45.26L353.94,225.94" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="139.6" y1="169.98" x2="207.48" y2="237.87" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="275.36" y1="305.75" x2="343.25" y2="373.63" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <line x1="191.98" y1="463.58" x2="191.98" y2="415.58" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="90.16" y1="421.4" x2="124.1" y2="387.46" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="47.98" y1="319.58" x2="95.98" y2="319.58" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M422.2,89.82a144,144,0,0,0-203.71-.07l-67.88,67.88,67.88,67.89,67.88-67.89a48,48,0,0,1,68.46.59c18.3,18.92,17.48,49.24-1.14,67.86L286.37,293.4l67.88,67.88,66.91-66.91C477.53,238,478.53,146.22,422.2,89.82Z" />
      <rect x="107.29" y="188.83" width="64" height="96" transform="translate(-126.67 167.86) rotate(-45)" />
      <rect x="243.06" y="324.59" width="64" height="96" transform="translate(-182.9 303.62) rotate(-45)" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <line x1="191.98" y1="463.79" x2="191.98" y2="415.79" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="90.16" y1="421.61" x2="124.1" y2="387.67" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="47.98" y1="319.79" x2="95.98" y2="319.79" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M267.56,312.32l-31.11,31.11a16,16,0,0,0,0,22.63l45.26,45.25a16,16,0,0,0,22.62,0l31.12-31.11a4,4,0,0,0,0-5.66l-62.23-62.22A4,4,0,0,0,267.56,312.32Z" />
      <path d="M131.8,176.55l-31.11,31.12a16,16,0,0,0,0,22.62l45.25,45.26a16,16,0,0,0,22.63,0l31.11-31.11a4,4,0,0,0,0-5.66l-62.22-62.23A4,4,0,0,0,131.8,176.55Z" />
      <path d="M428.85,83.28a144,144,0,0,0-203.71-.06l-65.06,65.05a4,4,0,0,0,0,5.66l62.23,62.22a4,4,0,0,0,5.66,0l65-65.05a48,48,0,0,1,68.46.59c18.3,18.92,17.47,49.24-1.14,67.85L295.85,284a4,4,0,0,0,0,5.66l62.22,62.23a4,4,0,0,0,5.66,0l64.08-64.08C484.18,231.47,485.18,139.68,428.85,83.28Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M441.6,171.61,266.87,85.37a24.57,24.57,0,0,0-21.74,0L70.4,171.61A40,40,0,0,0,48,207.39V392c0,22.09,18.14,40,40.52,40h335c22.38,0,40.52-17.91,40.52-40V207.39A40,40,0,0,0,441.6,171.61Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M397.33,368,268.07,267.46a24,24,0,0,0-29.47,0L109.33,368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="309.33" y1="295" x2="445.33" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="61.33" y1="192" x2="200.33" y2="297" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M471.05,168.36,263.24,65.69a16.37,16.37,0,0,0-14.48,0L41,168.36a16,16,0,0,0-9,14.31V432a16.09,16.09,0,0,0,16.19,16H463.81A16.09,16.09,0,0,0,480,432V182.67A16,16,0,0,0,471.05,168.36ZM256,97.89l173,85.44L253.3,270.11l-173-85.44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M448.67,154.45,274.1,68.2a41.1,41.1,0,0,0-36.2,0L63.33,154.45A55.6,55.6,0,0,0,32,204.53V389.14c0,30.88,25.42,56,56.67,56H423.33c31.25,0,56.67-25.12,56.67-56V204.53A55.6,55.6,0,0,0,448.67,154.45ZM252.38,96.82a8.22,8.22,0,0,1,7.24,0L429,180.48l-172,85a8.22,8.22,0,0,1-7.24,0L80.35,181.81Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <rect x="48" y="96" width="416" height="320" rx="40" ry="40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="112 160 256 272 400 160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M464,80H48A16,16,0,0,0,32,96V416a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V96A16,16,0,0,0,464,80ZM265.82,284.63a16,16,0,0,1-19.64,0L89.55,162.81l19.64-25.26L256,251.73,402.81,137.55l19.64,25.26Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M320,96H88a40,40,0,0,0-40,40V376a40,40,0,0,0,40,40H422.73a40,40,0,0,0,40-40V239" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="112 160 256 272 343 206.33" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="431.95" cy="128.05" r="47.95" />
      <path d="M432,192a63.95,63.95,0,1,1,63.95-63.95A64,64,0,0,1,432,192Zm0-95.9a32,32,0,1,0,31.95,32A32,32,0,0,0,432,96.1Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M374.09,101c-.11.23-.21.46-.31.7-.34.75-.67,1.5-1,2.26l-.36.9c-.27.71-.54,1.42-.79,2.14-.12.35-.24.7-.35,1-.23.68-.44,1.37-.64,2.07l-.33,1.15q-.27,1-.51,2c-.1.41-.2.82-.28,1.23-.15.67-.28,1.36-.4,2-.08.42-.16.84-.23,1.27-.11.69-.2,1.4-.29,2.1-.05.42-.11.83-.16,1.25-.08.77-.13,1.54-.19,2.31,0,.36-.06.72-.08,1.09-.06,1.13-.09,2.27-.09,3.41v0c0,1,0,2,.07,2.94l0,.62c.05.95.12,1.89.21,2.83l.06.46c.09.87.2,1.72.32,2.57,0,.15,0,.31.07.46.14.92.31,1.84.49,2.75l.12.59c.2.92.4,1.84.64,2.75h0c.23.92.5,1.82.77,2.71.06.19.12.38.17.57.28.88.57,1.74.88,2.59.05.15.11.29.16.43.29.78.6,1.55.92,2.32.05.14.11.28.17.42.35.83.73,1.65,1.11,2.47l.27.53c.4.82.81,1.64,1.24,2.44l0,0h0a64.21,64.21,0,0,0,29.56,27.63l.37.17c1.78.8,3.59,1.53,5.45,2.17l.95.32,1.5.47c.45.14.9.26,1.36.39l1.92.5c.57.14,1.14.27,1.72.39l1.15.24,1.83.32.93.16c.9.13,1.81.24,2.72.34l.77.07c.73.07,1.47.13,2.22.17l.85.05c1,0,1.94.07,2.93.07h0c1.15,0,2.29,0,3.43-.09l1.09-.09c.77,0,1.54-.11,2.3-.19.42,0,.83-.1,1.25-.16.7-.08,1.41-.17,2.1-.28l1.27-.23c.68-.12,1.36-.25,2-.39l1.24-.29c.67-.16,1.35-.32,2-.51.39-.1.78-.21,1.16-.33.69-.2,1.37-.41,2.05-.63l1.07-.36c.7-.24,1.4-.5,2.1-.77l.94-.37c.74-.3,1.47-.62,2.19-.95l.77-.34c.8-.37,1.58-.77,2.36-1.17.17-.09.35-.17.52-.27.91-.48,1.8-1,2.68-1.5l.12-.07a63.95,63.95,0,1,0-89.21-84.88l-.21.39C374.9,99.34,374.48,100.17,374.09,101Z" />
      <path d="M371.51,202.43l-105.69,82.2a16,16,0,0,1-19.64,0L89.55,162.81l19.64-25.26L256,251.73l94.36-73.39A95.81,95.81,0,0,1,349,80H48A16,16,0,0,0,32,96V416a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V211.13a95.75,95.75,0,0,1-108.49-8.7Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M496,128.05A64,64,0,0,0,389.62,80h0a64.52,64.52,0,0,0-12.71,15.3l0,.06c-.54.9-1.05,1.82-1.55,2.74l-.24.49c-.42.79-.81,1.59-1.19,2.4-.12.25-.23.5-.34.75-.33.73-.65,1.47-.95,2.22-.13.31-.25.62-.37.93-.27.7-.53,1.4-.78,2.11l-.36,1.06c-.22.68-.43,1.37-.63,2.06-.12.39-.23.77-.33,1.16-.19.67-.35,1.35-.51,2-.1.41-.2.82-.29,1.23-.14.68-.27,1.37-.39,2-.08.42-.16.84-.23,1.26-.11.7-.2,1.41-.29,2.12-.05.41-.11.82-.16,1.24-.08.77-.13,1.54-.19,2.32,0,.36-.06.72-.08,1.08-.06,1.14-.1,2.28-.1,3.44h0c0,1,0,2,.08,2.94l0,.64q.08,1.41.21,2.82l.06.48c.09.85.19,1.69.32,2.52,0,.17,0,.35.07.52.14.91.31,1.81.49,2.71,0,.22.09.43.13.65.18.86.38,1.72.6,2.57,0,.07,0,.13,0,.19.23.89.48,1.76.75,2.63l.21.68c.27.85.55,1.68.85,2.51.06.18.13.36.2.54.27.71.55,1.42.84,2.12.08.21.16.41.25.61.34.79.69,1.58,1.06,2.36l.33.67c.35.7.7,1.4,1.07,2.09a64.34,64.34,0,0,0,22.14,23.81h0a62.22,62.22,0,0,0,7.62,4.15l.39.18q2.66,1.2,5.43,2.16l.95.32,1.5.47c.45.14.9.26,1.36.39l1.92.5,1.73.4,1.15.23,1.83.33.94.15c.9.13,1.81.25,2.72.35l.77.07c.73.06,1.47.12,2.21.16l.86.05c1,0,1.94.08,2.92.08h0c1.16,0,2.3,0,3.44-.1l1.08-.08c.78-.06,1.55-.11,2.32-.19l1.25-.16c.7-.09,1.41-.18,2.11-.29l1.26-.23c.68-.12,1.37-.25,2-.39l1.23-.29c.68-.16,1.36-.32,2-.51.39-.1.77-.21,1.16-.33.69-.2,1.38-.41,2.06-.63l1.06-.36c.71-.25,1.41-.51,2.11-.78l.93-.37c.75-.3,1.49-.62,2.22-.95l.75-.34c.81-.38,1.61-.77,2.4-1.19l.49-.24c.92-.5,1.84-1,2.74-1.55l.06,0A64.52,64.52,0,0,0,480,170.38h0A63.81,63.81,0,0,0,496,128.05Z" />
      <path d="M371.38,202.53l-105.56,82.1a16,16,0,0,1-19.64,0l-144-112a16,16,0,1,1,19.64-25.26L256,251.73l94.22-73.28A95.86,95.86,0,0,1,348.81,80H88a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H424a56.06,56.06,0,0,0,56-56V211.19a95.85,95.85,0,0,1-108.62-8.66Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-o</title>
      <path d="M424,80H88a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H424a56.06,56.06,0,0,0,56-56V136A56.06,56.06,0,0,0,424,80Zm-14.18,92.63-144,112a16,16,0,0,1-19.64,0l-144-112a16,16,0,1,1,19.64-25.26L256,251.73,390.18,147.37a16,16,0,0,1,19.64,25.26Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <circle cx="216" cy="200" r="136" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="216" y1="352" x2="216" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="272" y1="416" x2="160" y2="416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="432 112 432 32 352 32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="335.28" y1="128.72" x2="432" y2="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M330,16V60h42.89l-37.1,37.09A157.67,157.67,0,0,0,216,42C128.88,42,58,112.88,58,200c0,79.66,59.26,145.72,136,156.46V394H144v44h50v58h44V438h50V394H238V356.46c76.74-10.74,136-76.8,136-156.46a157.23,157.23,0,0,0-14-64.93l44-44V134h44V16ZM216,314A114,114,0,1,1,330,200,114.13,114.13,0,0,1,216,314Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M426,16H352a22,22,0,0,0,0,44h20.89l-37.1,37.09A157.68,157.68,0,0,0,216,42C128.88,42,58,112.88,58,200c0,79.66,59.26,145.72,136,156.46V394H166a22,22,0,0,0,0,44h28v36a22,22,0,0,0,44,0V438h28a22,22,0,0,0,0-44H238V356.46c76.74-10.74,136-76.8,136-156.46a157.15,157.15,0,0,0-14-64.92l44-44V112a22,22,0,0,0,44,0V38A22,22,0,0,0,426,16ZM216,314A114,114,0,1,1,330,200,114.13,114.13,0,0,1,216,314Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>male-outline</title>
      <circle cx="216" cy="296" r="152" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <polyline points="448 160 448 64 352 64" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="324" y1="188" x2="448" y2="64" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M330,48V92h58.89L328.5,152.39c-68.2-52.86-167-48-229.54,14.57h0C31.12,234.81,31.12,345.19,99,413A174.21,174.21,0,0,0,345,413c62.57-62.58,67.43-161.34,14.57-229.54L420,123.11V182h44V48ZM313.92,381.92a130.13,130.13,0,0,1-183.84,0c-50.69-50.68-50.69-133.16,0-183.84s133.16-50.69,183.84,0S364.61,331.24,313.92,381.92Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M442,48H352a22,22,0,0,0,0,44h36.89L328.5,152.39c-68.19-52.86-167-48-229.54,14.57h0C31.12,234.81,31.12,345.19,99,413A174.21,174.21,0,0,0,345,413c62.57-62.58,67.43-161.35,14.57-229.54L420,123.11V160a22,22,0,0,0,44,0V70A22,22,0,0,0,442,48ZM313.92,381.92a130.13,130.13,0,0,1-183.84,0c-50.69-50.68-50.69-133.16,0-183.84s133.16-50.69,183.84,0S364.61,331.24,313.92,381.92Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M208,208V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M256,336V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24V208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M208,192v88a23.72,23.72,0,0,1-24,24h0a23.72,23.72,0,0,1-24-24V192a48,48,0,0,1,48-48h96a48,48,0,0,1,48,48v88a23.72,23.72,0,0,1-24,24h0a23.72,23.72,0,0,1-24-24V192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="56" r="40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <circle cx="256" cy="56" r="56" />
      <path d="M336,128H176a32,32,0,0,0-32,32V320h48V192h8V512h52V328h8V512h52V192h8V320h48V160A32,32,0,0,0,336,128Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <circle cx="256" cy="56" r="56" />
      <path d="M304,128H208a64.19,64.19,0,0,0-64,64V299.52c0,10.85,8.43,20.08,19.27,20.47A20,20,0,0,0,184,300V200.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8V489a23,23,0,0,0,23,23h0a23,23,0,0,0,23-23V346.34A10.24,10.24,0,0,1,255.33,336,10,10,0,0,1,266,346V489a23,23,0,0,0,23,23h0a23,23,0,0,0,23-23V200.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v99.52c0,10.85,8.43,20.08,19.27,20.47A20,20,0,0,0,368,300V192A64.19,64.19,0,0,0,304,128Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M313.27,124.64,198.73,51.36a32,32,0,0,0-29.28.35L56.51,127.49A16,16,0,0,0,48,141.63v295.8a16,16,0,0,0,23.49,14.14l97.82-63.79a32,32,0,0,1,29.5-.24l111.86,73a32,32,0,0,0,29.27-.11l115.43-75.94a16,16,0,0,0,8.63-14.2V74.57a16,16,0,0,0-23.49-14.14l-98,63.86A32,32,0,0,1,313.27,124.64Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="328" y1="128" x2="328" y2="464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="184" y1="48" x2="184" y2="384" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M327.71,130.93,184,39,32,144V480l152.29-98.93L328,473,480,368V32ZM312,421,200,349V91l112,72Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M48.17,113.34A32,32,0,0,0,32,141.24V438a32,32,0,0,0,47,28.37c.43-.23.85-.47,1.26-.74l84.14-55.05a8,8,0,0,0,3.63-6.72V46.45a8,8,0,0,0-12.51-6.63Z" />
      <path d="M212.36,39.31A8,8,0,0,0,200,46V403.56a8,8,0,0,0,3.63,6.72l96,62.42A8,8,0,0,0,312,466V108.67a8,8,0,0,0-3.64-6.73Z" />
      <path d="M464.53,46.47a31.64,31.64,0,0,0-31.5-.88,12.07,12.07,0,0,0-1.25.74l-84.15,55a8,8,0,0,0-3.63,6.72V465.51a8,8,0,0,0,12.52,6.63l107.07-73.46a32,32,0,0,0,16.41-28v-296A32.76,32.76,0,0,0,464.53,46.47Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <circle cx="256" cy="352" r="112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="352" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M147,323,41.84,159.32a32,32,0,0,1-1.7-31.61l31-62A32,32,0,0,1,99.78,48H412.22a32,32,0,0,1,28.62,17.69l31,62a32,32,0,0,1-1.7,31.61L365,323" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="371" y1="144" x2="37" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="428.74" y1="52.6" x2="305" y2="250" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="140.55" y1="144" x2="207" y2="250" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <polygon points="80 32 16 160 305.11 160 385.33 32 80 32" />
      <path d="M496,144,424,32,298,231.08a128,128,0,0,0-84,0L189.53,192H43.82l86.66,134.89a128,128,0,1,0,251,0ZM256,422a70,70,0,1,1,70-70A70.08,70.08,0,0,1,256,422Z" />
      <circle cx="256" cy="352" r="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <circle cx="256" cy="352" r="32" />
      <path d="M99.78,32A48,48,0,0,0,56.84,58.53l-31,62A48.26,48.26,0,0,0,24.28,160h278.2a4,4,0,0,0,3.39-1.87l75.5-120A4,4,0,0,0,378,32Z" />
      <path d="M486.17,120.56l-31-62a47.7,47.7,0,0,0-32.79-25.46L342.5,160h0L298,231.08a128,128,0,0,0-84,0l-23.32-37.2a4,4,0,0,0-3.39-1.88H51.14a4,4,0,0,0-3.36,6.16l82.7,128.73a128,128,0,1,0,251,0L483.62,168A48.22,48.22,0,0,0,486.17,120.56Zm-226,295.31a64,64,0,1,1,59.69-59.69A64.08,64.08,0,0,1,260.18,415.87Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M429.93,174.27l-16.47-28.59a15.49,15.49,0,0,0-21.15-5.7l-98.39,57a4,4,0,0,1-6-3.5L288,80a16,16,0,0,0-16-16H240a16,16,0,0,0-16,16l.07,113.57a4,4,0,0,1-6,3.5l-98.39-57a15.49,15.49,0,0,0-21.15,5.7L82.07,174.37a15.42,15.42,0,0,0,5.69,21.1l98.49,57.08a4,4,0,0,1,0,6.9L87.76,316.53a15.54,15.54,0,0,0-5.69,21.1l16.47,28.59a15.49,15.49,0,0,0,21.15,5.7l98.39-57a4,4,0,0,1,6,3.5L224,432a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16l-.07-113.67a4,4,0,0,1,6-3.5l98.39,57a15.49,15.49,0,0,0,21.15-5.7l16.47-28.59a15.42,15.42,0,0,0-5.69-21.1l-98.49-57.08a4,4,0,0,1,0-6.9l98.49-57.08A15.51,15.51,0,0,0,429.93,174.27Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <polygon points="351.9 256 460 193.6 412 110.4 304 172.8 304 48 208 48 208 172.8 100 110.4 52 193.6 160.1 256 52 318.4 100 401.6 208 339.2 208 464 304 464 304 339.2 412 401.6 460 318.4 351.9 256" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M272,464H240a32,32,0,0,1-32-32l.05-85.82a4,4,0,0,0-6-3.47l-74.34,43.06a31.48,31.48,0,0,1-43-11.52L68.21,345.61l-.06-.1a31.65,31.65,0,0,1,11.56-42.8l74.61-43.25a4,4,0,0,0,0-6.92L79.78,209.33a31.41,31.41,0,0,1-11.55-43l16.44-28.55a31.48,31.48,0,0,1,19.27-14.74,31.14,31.14,0,0,1,23.8,3.2l74.31,43a4,4,0,0,0,6-3.47L208,80a32,32,0,0,1,32-32h32a32,32,0,0,1,32,32L304,165.72a4,4,0,0,0,6,3.47l74.34-43.06a31.51,31.51,0,0,1,43,11.52l16.49,28.64.06.09a31.52,31.52,0,0,1-11.64,42.86l-74.53,43.2a4,4,0,0,0,0,6.92l74.53,43.2a31.42,31.42,0,0,1,11.56,43l-16.44,28.55a31.48,31.48,0,0,1-19.27,14.74,31.14,31.14,0,0,1-23.8-3.2l-74.31-43a4,4,0,0,0-6,3.46L304,432A32,32,0,0,1,272,464ZM178.44,266.52h0Zm0-21h0Zm155.1-.08Zm0,0h0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <rect x="32" y="112" width="448" height="352" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M144,112V80a32,32,0,0,1,32-32H336a32,32,0,0,1,32,32v32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="208" x2="256" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336" y1="288" x2="176" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <rect x="168" y="72" width="176" height="24" style="fill:none" />
      <path d="M484,96H384V40a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V96H28a12,12,0,0,0-12,12V468a12,12,0,0,0,12,12H484a12,12,0,0,0,12-12V108A12,12,0,0,0,484,96ZM168,72H344V96H168ZM352,310H278v74H234V310H160V266h74V192h44v74h74Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M336,64H176a16,16,0,0,0-16,16V96H352V80A16,16,0,0,0,336,64Z" style="fill:none" />
      <path d="M432,96H384V80a48.05,48.05,0,0,0-48-48H176a48.05,48.05,0,0,0-48,48V96H80a64.07,64.07,0,0,0-64,64V416a64,64,0,0,0,64,64H432a64,64,0,0,0,64-64V160A64.07,64.07,0,0,0,432,96ZM336,304H272v64a16,16,0,0,1-32,0V304H176a16,16,0,0,1,0-32h64V208a16,16,0,0,1,32,0v64h64a16,16,0,0,1,0,32ZM352,96H160V80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M407.94,52.22S321.3,160,240,160H80a16,16,0,0,0-16,16v96a16,16,0,0,0,16,16H240c81.3,0,167.94,108.23,167.94,108.23,6.06,8,24.06,2.52,24.06-9.83V62C432,49.69,415,43.18,407.94,52.22Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,256s-16-6-16-32,16-32,16-32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M448,246s16-4.33,16-22-16-22-16-22" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="160" x2="256" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="160" x2="112" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M144,288V456a8,8,0,0,0,8,8h53a16,16,0,0,0,15.29-20.73C211.91,416.39,192,386.08,192,336h16a16,16,0,0,0,16-16V304a16,16,0,0,0-16-16H192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M128,144V476a4,4,0,0,0,4,4H232.07a8,8,0,0,0,7.82-9.7L208.71,352H232a8,8,0,0,0,8-8V144Z" />
      <path d="M452.18,186.55,448,185.5V36a4,4,0,0,0-4-4H401.5a4,4,0,0,0-2.63,1L272,144V304L398.87,415a4,4,0,0,0,2.63,1H444a4,4,0,0,0,4-4V262.5l4.18-1.05C461.8,258.84,480,247.67,480,224S461.8,189.16,452.18,186.55Z" />
      <path d="M96,144H52a4,4,0,0,0-4,4v35.59a43,43,0,0,0-4.24,4.35C38.4,194.32,32,205.74,32,224c0,20.19,7.89,33.13,16,40.42V300a4,4,0,0,0,4,4H96Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M48,176v.66a17.38,17.38,0,0,1-4.2,11.23l0,.05C38.4,194.32,32,205.74,32,224c0,16.55,5.3,28.23,11.68,35.91A19,19,0,0,1,48,272h0a32,32,0,0,0,32,32h8a8,8,0,0,0,8-8V152a8,8,0,0,0-8-8H80A32,32,0,0,0,48,176Z" />
      <path d="M452.18,186.55l-.93-.17a4,4,0,0,1-3.25-3.93V62c0-12.64-8.39-24-20.89-28.32-11.92-4.11-24.34-.76-31.68,8.53A431.18,431.18,0,0,1,344.12,93.9c-23.63,20-46.24,34.25-67,42.31a8,8,0,0,0-5.15,7.47V299a16,16,0,0,0,9.69,14.69c19.34,8.29,40.24,21.83,62,40.28a433.74,433.74,0,0,1,51.68,52.16A26.22,26.22,0,0,0,416.44,416a33.07,33.07,0,0,0,10.44-1.74C439.71,410,448,399.05,448,386.4V265.53a4,4,0,0,1,3.33-3.94l.85-.14C461.8,258.84,480,247.67,480,224S461.8,189.16,452.18,186.55Z" />
      <path d="M240,320V152a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V456a24,24,0,0,0,24,24h52.45a32.66,32.66,0,0,0,25.93-12.45,31.65,31.65,0,0,0,5.21-29.05c-1.62-5.18-3.63-11-5.77-17.19-7.91-22.9-18.34-37.07-21.12-69.32A32,32,0,0,0,240,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <line x1="80" y1="160" x2="432" y2="160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="80" y1="256" x2="432" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="80" y1="352" x2="432" y2="352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <line x1="88" y1="152" x2="424" y2="152" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px" />
      <line x1="88" y1="256" x2="424" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px" />
      <line x1="88" y1="360" x2="424" y2="360" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="224" y1="368" x2="288" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M336,224.3v23.92c0,39.42-40.58,71.48-80,71.48h0c-39.42,0-80-32.06-80-71.48V224.3" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="320" x2="256" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="208" y="128" width="96" height="160" rx="48" ry="48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM208,176a48.14,48.14,0,0,1,48-48h0a48.14,48.14,0,0,1,48,48v64a48.14,48.14,0,0,1-48,48h0a48.14,48.14,0,0,1-48-48Zm144,72.22c0,23.36-10.94,45.61-30.79,62.66A103.71,103.71,0,0,1,272,334.26V352h32v32H208V352h32V334.26a103.71,103.71,0,0,1-49.21-23.38C170.94,293.83,160,271.58,160,248.22V208.3h32v39.92c0,25.66,28,55.48,64,55.48,29.6,0,64-24.23,64-55.48V208.3h32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM208,176a48.14,48.14,0,0,1,48-48h0a48.14,48.14,0,0,1,48,48v64a48.14,48.14,0,0,1-48,48h0a48.14,48.14,0,0,1-48-48Zm144,72.22c0,23.36-10.94,45.61-30.79,62.66A103.71,103.71,0,0,1,272,334.26V352h16a16,16,0,0,1,0,32H224a16,16,0,0,1,0-32h16V334.26a103.71,103.71,0,0,1-49.21-23.38C170.94,293.83,160,271.58,160,248.22V224.3a16,16,0,0,1,32,0v23.92c0,25.66,28,55.48,64,55.48,29.6,0,64-24.23,64-55.48V224.3a16,16,0,1,1,32,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M256,464C141.31,464,48,370.69,48,256S141.31,48,256,48s208,93.31,208,208S370.69,464,256,464Zm0-384C159,80,80,159,80,256S159,432,256,432s176-78.95,176-176S353.05,80,256,80Z" />
      <path d="M352,369a15.93,15.93,0,0,1-11.84-5.24l-192-210a16,16,0,0,1,23.68-21.52l192,210A16,16,0,0,1,352,369Z" />
      <path d="M352,248.22v-23.8a16.3,16.3,0,0,0-13.64-16.24C328.48,206.7,320,214.69,320,224.3v23.92a43.35,43.35,0,0,1-3.07,15.91,4,4,0,0,0,.76,4.16l19.19,21.1a2,2,0,0,0,3.19-.3A77.12,77.12,0,0,0,352,248.22Z" />
      <path d="M304,240V176a48.14,48.14,0,0,0-48-48h0a48.08,48.08,0,0,0-41,23.1,4,4,0,0,0,.47,4.77l84.42,92.86a2,2,0,0,0,3.46-1A47.84,47.84,0,0,0,304,240Z" />
      <path d="M246.57,285.2l-36.46-40.11a1,1,0,0,0-1.74.8,48.26,48.26,0,0,0,37.25,41A1,1,0,0,0,246.57,285.2Z" />
      <path d="M287.55,352H272V334.26a100.33,100.33,0,0,0,12.53-3.06,2,2,0,0,0,.89-3.26l-21.07-23.19a3.94,3.94,0,0,0-3.29-1.29c-1.69.15-3.39.24-5.06.24-36,0-64-29.82-64-55.48V224.4A16.26,16.26,0,0,0,176.39,208,15.91,15.91,0,0,0,160,224v24.22c0,23.36,10.94,45.61,30.79,62.66A103.71,103.71,0,0,0,240,334.26V352H224.45c-8.61,0-16,6.62-16.43,15.23A16,16,0,0,0,224,384h64a16,16,0,0,0,16-16.77C303.58,358.62,296.16,352,287.55,352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm64,200.22V208h32v40.22a77.53,77.53,0,0,1-13.37,43.11L316,266.4A44.11,44.11,0,0,0,320,248.22ZM256,128h0a48.14,48.14,0,0,1,48,48v64a48.07,48.07,0,0,1-1.44,11.64l-89-97.92A48.13,48.13,0,0,1,256,128Zm48,256H208V352h32V334.26a103.71,103.71,0,0,1-49.21-23.38C170.94,293.83,160,271.58,160,248.22V208h32v40.22c0,25.66,28,55.48,64,55.48a56.91,56.91,0,0,0,7-.45l24.52,27a99.57,99.57,0,0,1-15.5,4V352h32ZM208.09,242.87l40.5,44.55A48.2,48.2,0,0,1,208.09,242.87ZM344.16,367.76l-200.5-218.5,23.68-21.52,200.5,218.5Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm0,80h0a48.14,48.14,0,0,1,48,48v64a47.84,47.84,0,0,1-.63,7.71,2,2,0,0,1-3.46,1l-84.42-92.86a4,4,0,0,1-.47-4.77A48.08,48.08,0,0,1,256,128Zm32,256H224.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,224,352h16V334.26a103.71,103.71,0,0,1-49.21-23.38C170.94,293.83,160,271.58,160,248.22V224a15.91,15.91,0,0,1,16.39-16A16.26,16.26,0,0,1,192,224.4v23.82c0,25.66,28,55.48,64,55.48,1.67,0,3.37-.09,5.06-.24a3.94,3.94,0,0,1,3.29,1.29l21.07,23.19a2,2,0,0,1-.89,3.26A100.33,100.33,0,0,1,272,334.26V352h15.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,288,384ZM210.11,245.09l36.46,40.11a1,1,0,0,1-.95,1.66,48.26,48.26,0,0,1-37.25-41A1,1,0,0,1,210.11,245.09ZM362.76,364.84a16,16,0,0,1-22.6-1.08l-192-210a16,16,0,0,1,23.68-21.52l192,210A16,16,0,0,1,362.76,364.84ZM352,248.22a77.12,77.12,0,0,1-11.93,40.87,2,2,0,0,1-3.19.3l-19.19-21.1a4,4,0,0,1-.76-4.16A43.35,43.35,0,0,0,320,248.22v-23.8a16.3,16.3,0,0,1,13.64-16.24c9.88-1.48,18.36,6.51,18.36,16.12Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <line x1="432" y1="400" x2="96" y2="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M400,240V208.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,208v32a111.58,111.58,0,0,1-2.45,23.31,4.05,4.05,0,0,0,1.07,3.69l21.82,21.81a2,2,0,0,0,3.29-.72A143.27,143.27,0,0,0,400,240Z" />
      <path d="M256,352A112.36,112.36,0,0,1,144,240V208.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,208v32c0,74,56.1,135.12,128,143.11V432H192.45c-8.61,0-16,6.62-16.43,15.23A16,16,0,0,0,192,464H319.55c8.61,0,16-6.62,16.43-15.23A16,16,0,0,0,320,432H272V383.11a143.08,143.08,0,0,0,52-16.22,4,4,0,0,0,.91-6.35L307,342.63a4,4,0,0,0-4.51-.78A110.78,110.78,0,0,1,256,352Z" />
      <path d="M256,80a47.18,47.18,0,0,1,48,48v74.72a4,4,0,0,0,1.17,2.82L332.59,233a2,2,0,0,0,3.41-1.42V128.91C336,85,301,48.6,257.14,48a79.66,79.66,0,0,0-68.47,36.57,4,4,0,0,0,.54,5l19.54,19.54a2,2,0,0,0,3.25-.63A47.44,47.44,0,0,1,256,80Z" />
      <path d="M207.27,242.9,179.41,215a2,2,0,0,0-3.41,1.42V239a80.89,80.89,0,0,0,23.45,56.9,78.55,78.55,0,0,0,77.8,21.19,2,2,0,0,0,.86-3.35L253.2,288.83a4.08,4.08,0,0,0-2.42-1.15c-21.65-2.52-39.48-20.44-42.37-42.43A4,4,0,0,0,207.27,242.9Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <line x1="432" y1="400" x2="96" y2="64" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M368,192v48a111.74,111.74,0,0,1-2.93,25.45L390.65,291A143.07,143.07,0,0,0,400,240V192Z" />
      <path d="M272,432V383.11a143.11,143.11,0,0,0,56.65-18.83L305,340.65A112.13,112.13,0,0,1,144,240V192H112v48c0,74,56.1,135.12,128,143.11V432H176v32H336V432Z" />
      <path d="M336,236.37V128c0-44.86-35.14-80-80-80a79.68,79.68,0,0,0-69,39.34" />
      <path d="M176,211.63V239a80.89,80.89,0,0,0,23.45,56.9,78.55,78.55,0,0,0,81,20.21Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <line x1="432" y1="400" x2="96" y2="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M400,240V208.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,208v32a111.68,111.68,0,0,1-2.68,24.38,2,2,0,0,0,.53,1.84l22.59,22.59a2,2,0,0,0,3.29-.72A143.27,143.27,0,0,0,400,240Z" />
      <path d="M256,352A112.36,112.36,0,0,1,144,240V208.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,208v32c0,74,56.1,135.12,128,143.11V432H192.45c-8.61,0-16,6.62-16.43,15.23A16,16,0,0,0,192,464H319.55c8.61,0,16-6.62,16.43-15.23A16,16,0,0,0,320,432H272V383.11a143.08,143.08,0,0,0,52-16.22,4,4,0,0,0,.91-6.35l-18.4-18.39a3,3,0,0,0-3.41-.58A111,111,0,0,1,256,352Z" />
      <path d="M257.14,48a79.66,79.66,0,0,0-68.47,36.57,4,4,0,0,0,.54,5L332.59,233a2,2,0,0,0,3.41-1.42V128.91C336,85,301,48.6,257.14,48Z" />
      <path d="M179.41,215a2,2,0,0,0-3.41,1.42V239a80.89,80.89,0,0,0,23.45,56.9,78.55,78.55,0,0,0,77.8,21.19,2,2,0,0,0,.86-3.35Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <line x1="192" y1="448" x2="320" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384,208v32c0,70.4-57.6,128-128,128h0c-70.4,0-128-57.6-128-128V208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="368" x2="256" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,64a63.68,63.68,0,0,0-64,64V239c0,35.2,29,65,64,65s64-29,64-65V128C320,92,292,64,256,64Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <line x1="192" y1="448" x2="320" y2="448" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M384,208v32c0,70.4-57.6,128-128,128h0c-70.4,0-128-57.6-128-128V208" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="256" y1="368" x2="256" y2="448" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M256,320a78.83,78.83,0,0,1-56.55-24.1A80.89,80.89,0,0,1,176,239V128a79.69,79.69,0,0,1,80-80c44.86,0,80,35.14,80,80V239C336,283.66,300.11,320,256,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <line x1="192" y1="448" x2="320" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384,208v32c0,70.4-57.6,128-128,128h0c-70.4,0-128-57.6-128-128V208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="368" x2="256" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,320a78.83,78.83,0,0,1-56.55-24.1A80.89,80.89,0,0,1,176,239V128a79.69,79.69,0,0,1,80-80c44.86,0,80,35.14,80,80V239C336,283.66,300.11,320,256,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M152.62,126.77c0-33,4.85-66.35,17.23-94.77C87.54,67.83,32,151.89,32,247.38,32,375.85,136.15,480,264.62,480c95.49,0,179.55-55.54,215.38-137.85-28.42,12.38-61.8,17.23-94.77,17.23C256.76,359.38,152.62,255.24,152.62,126.77Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M264,480A232,232,0,0,1,32,248C32,154,86,69.72,169.61,33.33a16,16,0,0,1,21.06,21.06C181.07,76.43,176,104.66,176,136c0,110.28,89.72,200,200,200,31.34,0,59.57-5.07,81.61-14.67a16,16,0,0,1,21.06,21.06C442.28,426,358,480,264,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <polyline points="176 112 256 32 336 112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="255.98" y1="32" x2="256" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="176 400 256 480 336 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="400 176 480 256 400 336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="112 176 32 256 112 336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="32" y1="256" x2="480" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <polyline points="176 112 256 32 336 112" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="255.98" y1="32" x2="256" y2="480" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="176 400 256 480 336 400" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="400 176 480 256 400 336" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="112 176 32 256 112 336" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="32" y1="256" x2="480" y2="256" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <polyline points="176 112 256 32 336 112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="255.98" y1="32" x2="256" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="176 400 256 480 336 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="400 176 480 256 400 336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="112 176 32 256 112 336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="32" y1="256" x2="480" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M240,343.31V424a32.28,32.28,0,0,1-21.88,30.65l-21.47,7.23c-25.9,8.71-52.65-10.75-52.65-38.32h0A34.29,34.29,0,0,1,167.25,391l50.87-17.12A32.29,32.29,0,0,0,240,343.24V92a16.13,16.13,0,0,1,12.06-15.66L360.49,48.2A6,6,0,0,1,368,54v57.76a16.13,16.13,0,0,1-12.12,15.67l-91.64,23.13A32.25,32.25,0,0,0,240,181.91V221.3" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M381.55,32.05c-18.13,4.28-126.57,31.07-156,38.19A2,2,0,0,0,224,72.18V353.3a2,2,0,0,1-1.32,1.88L182,369.88c-29.82,10.66-54,18.94-54,59.06,0,32.47,23.53,47.18,37.95,50a81.77,81.77,0,0,0,15,1.08c8.89,0,31-3.59,47.52-14.24C256,448,256,448,256,415.93V169.16a2,2,0,0,1,1.49-1.94l125-33a2,2,0,0,0,1.49-1.94V34A2,2,0,0,0,381.55,32.05Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M183.83,480a55.2,55.2,0,0,1-32.36-10.55A56.64,56.64,0,0,1,128,423.58a50.26,50.26,0,0,1,34.14-47.73L213,358.73a16.25,16.25,0,0,0,11-15.49V92a32.1,32.1,0,0,1,24.09-31.15L356.48,32.71A22,22,0,0,1,384,54v57.75a32.09,32.09,0,0,1-24.2,31.19l-91.65,23.13A16.24,16.24,0,0,0,256,181.91V424a48.22,48.22,0,0,1-32.78,45.81l-21.47,7.23A56,56,0,0,1,183.83,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M192,218v-6c0-14.84,10-27,24.24-30.59l174.59-46.68A20,20,0,0,1,416,154V176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M416,295.94v80c0,13.91-8.93,25.59-22,30l-22,8c-25.9,8.72-52-10.42-52-38h0a33.37,33.37,0,0,1,23-32l51-18.15c13.07-4.4,22-15.94,22-29.85V58a10,10,0,0,0-12.6-9.61L204,102a16.48,16.48,0,0,0-12,16v226c0,13.91-8.93,25.6-22,30l-52,18c-13.88,4.68-22,17.22-22,32h0c0,27.58,26.52,46.55,52,38l22-8c13.07-4.4,22-16.08,22-30v-80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M429.46,32.07c-23.6,6.53-205.55,58.81-250.54,71.43a4,4,0,0,0-2.92,3.83v247a2,2,0,0,1-1.33,1.89l-27.85,9.55c-19,7.44-66.82,16.68-66.82,59.19,0,35.54,24.63,51.54,45.86,54.28a52.06,52.06,0,0,0,7.81.8c7.37,0,36.38-7.08,53.3-18.08C208,448.25,208,448,208,412V202c0-.9.62-.84,1.48-1.07l188-51.92a2,2,0,0,1,2.53,2V306.55a2,2,0,0,1-1.36,1.89c-8.9,3-19.23,6.5-26.48,9.12C341.39,328.68,304,335.65,304,376c0,38.51,28.26,54.58,46.3,55.83a87.37,87.37,0,0,0,21.33-1c9-1.38,24.09-5.9,38.14-14.86C432,401.79,432,401.51,432,360V34A2,2,0,0,0,429.46,32.07Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M421.84,37.37a25.86,25.86,0,0,0-22.6-4.46L199.92,86.49A32.3,32.3,0,0,0,176,118v226c0,6.74-4.36,12.56-11.11,14.83l-.12.05-52,18C92.88,383.53,80,402,80,423.91a55.54,55.54,0,0,0,23.23,45.63A54.78,54.78,0,0,0,135.34,480a55.82,55.82,0,0,0,17.75-2.93l.38-.13L175.31,469A47.84,47.84,0,0,0,208,423.91v-212c0-7.29,4.77-13.21,12.16-15.07l.21-.06L395,150.14a4,4,0,0,1,5,3.86V295.93c0,6.75-4.25,12.38-11.11,14.68l-.25.09-50.89,18.11A49.09,49.09,0,0,0,304,375.92a55.67,55.67,0,0,0,23.23,45.8,54.63,54.63,0,0,0,49.88,7.35l.36-.12L399.31,421A47.83,47.83,0,0,0,432,375.92V58A25.74,25.74,0,0,0,421.84,37.37Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M336.76,161,150.23,243.35c-10.47,4.8-6.95,20.67,4.57,20.67H244a4,4,0,0,1,4,4V357.2c0,11.52,16,15,20.78,4.56L351,175.24A10.73,10.73,0,0,0,336.76,161Z" />
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,48h0A208.23,208.23,0,0,0,48,256c0,114.68,93.31,208,208,208h0A208.23,208.23,0,0,0,464,256C464,141.31,370.69,48,256,48Zm-8,361V264H104l-1,0,259-114.11Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM351,175.24,268.76,361.76c-4.79,10.47-20.78,7-20.78-4.56V268a4,4,0,0,0-4-4H154.8c-11.52,0-15-15.87-4.57-20.67L336.76,161A10.73,10.73,0,0,1,351,175.24Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M448,64,64,240.14H264a8,8,0,0,1,8,8V448Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <polygon points="480 32 32 240 272 240 272 480 480 32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M272,464a16,16,0,0,1-16-16.42V264.13a8,8,0,0,0-8-8H64.41a16.31,16.31,0,0,1-15.49-10.65,16,16,0,0,1,8.41-19.87l384-176.15a16,16,0,0,1,21.22,21.19l-176,384A16,16,0,0,1,272,464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M368,415.86V72a24.07,24.07,0,0,0-24-24H72A24.07,24.07,0,0,0,48,72V424a40.12,40.12,0,0,0,40,40H416" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M416,464h0a48,48,0,0,1-48-48V128h72a24,24,0,0,1,24,24V416A48,48,0,0,1,416,464Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="240" y1="128" x2="304" y2="128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="240" y1="192" x2="304" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="256" x2="304" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="320" x2="304" y2="320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="384" x2="304" y2="384" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M176,208H112a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v64A16,16,0,0,1,176,208Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <rect x="96" y="112" width="96" height="96" rx="16" ry="16" style="fill:none" />
      <path d="M468,112H416V416a32,32,0,0,0,32,32h0a32,32,0,0,0,32-32V124A12,12,0,0,0,468,112Z" />
      <path d="M431.15,477.75A64.11,64.11,0,0,1,384,416V44a12,12,0,0,0-12-12H44A12,12,0,0,0,32,44V424a56,56,0,0,0,56,56H430.85a1.14,1.14,0,0,0,.3-2.25ZM96,208V112h96v96ZM320,400H96V368H320Zm0-64H96V304H320Zm0-64H96V240H320Zm0-64H224V176h96Zm0-64H224V112h96Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M439.91,112H416.09a.09.09,0,0,0-.09.09V416a32,32,0,0,0,32,32h0a32,32,0,0,0,32-32V152.09A40.09,40.09,0,0,0,439.91,112Z" />
      <path d="M384,416V72a40,40,0,0,0-40-40H72A40,40,0,0,0,32,72V424a56,56,0,0,0,56,56H430.85a1.14,1.14,0,0,0,1.15-1.15h0a1.14,1.14,0,0,0-.85-1.1A64.11,64.11,0,0,1,384,416ZM96,128a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v64a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16ZM304,400H112.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,112,368H303.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,400Zm0-64H112.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,112,304H303.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,336Zm0-64H112.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,112,240H303.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,272Zm0-64H240.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,240,176h63.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,208Zm0-64H240.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,240,112h63.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,144Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M365.2,313c-16.33-19.34-27.86-27.47-27.86-80.8,0-48.86-25.78-66.23-47-74.67a11.39,11.39,0,0,1-6.34-6.68C280.29,138.6,269.88,128,256,128s-24.31,10.6-28,22.86a11.35,11.35,0,0,1-6.33,6.68c-21.24,8.46-47,25.8-47,74.67,0,53.33-11.54,61.46-27.87,80.8-6.77,8-.65,23,11.19,23H354C365.77,336,371.94,321,365.2,313Z" />
      <path d="M220.24,352a4,4,0,0,0-4,4.42C218.49,375.14,235.11,384,256,384c20.67,0,37.14-9.15,39.66-27.52a4,4,0,0,0-4-4.48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M295.68,351.43c0,.19,0,.38,0,.57H296Z" />
      <path d="M256,384c22.28,0,39.36-10.63,39.66-32H216C216,373.75,233.53,384,256,384Z" style="fill:none" />
      <path d="M295.67,352H296l-.32-.57C295.68,351.62,295.67,351.81,295.67,352Z" style="fill:none" />
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm0,336c-22.48,0-40-10.25-40-32h80C295.7,373.37,278.29,384,256,384Zm112-48H144V308l28-36V239.7c0-40.41,15.82-75.35,56-84.27L232,128h48l4,27.43c40,8.92,56,44,56,84.27V272l28,36Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm0,336c-20.9,0-37.52-8.86-39.75-27.58a4,4,0,0,1,4-4.42h71.45a4,4,0,0,1,4,4.48C293.15,374.85,276.68,384,256,384Zm98-48H158c-11.84,0-18-15-11.19-23,16.33-19.34,27.87-27.47,27.87-80.8,0-48.87,25.74-66.21,47-74.67a11.35,11.35,0,0,0,6.33-6.68C231.7,138.6,242.14,128,256,128s24.28,10.6,28,22.86a11.39,11.39,0,0,0,6.34,6.68c21.21,8.44,47,25.81,47,74.67,0,53.33,11.53,61.46,27.86,80.8C371.94,321,365.77,336,354,336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M220.24,352a4,4,0,0,0-4,4.42C218.49,375.14,235.11,384,256,384s37.5-8.86,39.73-27.58a4,4,0,0,0-4-4.42Z" />
      <path d="M352,378a15.93,15.93,0,0,1-11.84-5.24l-192-212a16,16,0,0,1,23.68-21.52l192,212A16,16,0,0,1,352,378Z" />
      <path d="M174.68,232.21c0,53.33-11.54,61.46-27.87,80.8-6.77,8-.65,23,11.19,23H276.83a4,4,0,0,0,2.95-6.7l-98-106.87a4,4,0,0,0-6.94,2.52C174.74,227.29,174.68,229.71,174.68,232.21Z" />
      <path d="M365.2,313c-16.33-19.34-27.86-27.47-27.86-80.8,0-48.86-25.78-66.23-47-74.67a11.39,11.39,0,0,1-6.34-6.68C280.29,138.6,269.88,128,256,128s-24.31,10.6-28,22.86a11.35,11.35,0,0,1-6.33,6.68c-1.28.51-2.57,1.05-3.88,1.63a4,4,0,0,0-1.3,6.36L361,323.21a4,4,0,0,0,6.94-2.95A12,12,0,0,0,365.2,313Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM144,308l28-36V239.7a131.83,131.83,0,0,1,2.34-25.42L285.92,336H144Zm112.18,76C233.6,384,216,373.75,216,352h80C295.7,373.37,278.55,384,256.18,384Zm93.48-3.74-211-227,23.68-21.52,211,227ZM368,330.85l-.32-.38,0,0,0,0L212.18,160.84A73.4,73.4,0,0,1,228,155.43L232,128h48l4,27.43c40,8.92,56,44,56,84.27V272l28,36Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM146.83,313c16.33-19.34,27.86-27.47,27.86-80.8q0-3.75.2-7.26a4,4,0,0,1,7-2.52l98,106.87a4,4,0,0,1-2.94,6.7H158C146.18,336,140.06,321,146.83,313Zm148.93,43.41C293.53,375.14,276.92,384,256,384s-37.51-8.86-39.75-27.58a4,4,0,0,1,4-4.42h71.53A4,4,0,0,1,295.76,356.42Zm67,17.42a16,16,0,0,1-22.6-1.08l-192-212a16,16,0,0,1,23.68-21.52l192,212A16,16,0,0,1,362.76,373.84ZM361,323.21,216.49,165.53a4,4,0,0,1,1.3-6.36c1.31-.58,2.61-1.12,3.89-1.63a11.33,11.33,0,0,0,6.32-6.68C231.72,138.6,242.15,128,256,128s24.29,10.6,28,22.86a11.34,11.34,0,0,0,6.34,6.68c21.21,8.44,47,25.81,47,74.67,0,53.33,11.54,61.46,27.87,80.8a12.09,12.09,0,0,1,2.76,7.25A4,4,0,0,1,361,323.21Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M128.51,204.59q-.37,6.15-.37,12.76C128.14,304,110,320,84.33,351.43,73.69,364.45,83,384,101.62,384H320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M414.5,335.3c-18.48-23.45-30.62-47.05-30.62-118C383.88,138,343.36,109.73,310,96c-4.43-1.82-8.6-6-9.95-10.55C294.21,65.54,277.82,48,256,48S217.8,65.55,212,85.47c-1.35,4.6-5.52,8.71-10,10.53a149.57,149.57,0,0,0-18,8.79" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,384v16a64,64,0,0,1-128,0V384" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="448" y1="448" x2="64" y2="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <rect x="240" y="-31.53" width="32" height="575.06" transform="translate(-106.04 256) rotate(-45)" />
      <path d="M256,480a80.09,80.09,0,0,0,73.3-48H182.7A80.09,80.09,0,0,0,256,480Z" />
      <path d="M112,227.47V288L64,352v48H332.12L115.87,183.75A236.75,236.75,0,0,0,112,227.47Z" />
      <path d="M448,352l-48-64V227.47C400,157,372.64,95.61,304,80l-8-48H216l-8,48a117.45,117.45,0,0,0-41.95,18.17l282,282Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M448,464a15.92,15.92,0,0,1-11.31-4.69l-384-384A16,16,0,0,1,75.31,52.69l384,384A16,16,0,0,1,448,464Z" />
      <path d="M440.08,341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118,0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3,3,0,0,1-.82-.67C306.6,51.49,282.82,32,256,32s-50.59,19.49-59.28,48.56a3.13,3.13,0,0,1-.81.65,157.88,157.88,0,0,0-21.88,11,8,8,0,0,0-1.49,12.49L434.32,366.44a8,8,0,0,0,13.6-6.63A35.39,35.39,0,0,0,440.08,341.31Z" />
      <path d="M112.14,217.35c0,75.36-13.29,91.42-35.31,118-1.6,1.93-3.23,3.89-4.89,5.93a35.16,35.16,0,0,0-4.65,37.62c6.17,13,19.32,21.07,34.33,21.07H312.8a8,8,0,0,0,5.66-13.66l-192-192a8,8,0,0,0-13.62,5Q112.14,208,112.14,217.35Z" />
      <path d="M256,480a80.06,80.06,0,0,0,70.44-42.13A4,4,0,0,0,322.9,432H189.12a4,4,0,0,0-3.55,5.87A80.06,80.06,0,0,0,256,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M427.68,351.43C402,320,383.87,304,383.87,217.35,383.87,138,343.35,109.73,310,96c-4.43-1.82-8.6-6-9.95-10.55C294.2,65.54,277.8,48,256,48S217.79,65.55,212,85.47c-1.35,4.6-5.52,8.71-9.95,10.53-33.39,13.75-73.87,41.92-73.87,121.35C128.13,304,110,320,84.32,351.43,73.68,364.45,83,384,101.61,384H410.49C429,384,438.26,364.39,427.68,351.43Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,384v16a64,64,0,0,1-128,0V384" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,480a80.09,80.09,0,0,0,73.3-48H182.7A80.09,80.09,0,0,0,256,480Z" />
      <path d="M400,288V227.47C400,157,372.64,95.61,304,80l-8-48H216l-8,48c-68.88,15.61-96,76.76-96,147.47V288L64,352v48H448V352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M440.08,341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118,0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3,3,0,0,1-.82-.67C306.6,51.49,282.82,32,256,32s-50.59,19.49-59.28,48.56a3.13,3.13,0,0,1-.81.65c-56.38,23.21-83.78,67.74-83.78,136.14,0,75.36-13.29,91.42-35.31,118-1.6,1.93-3.23,3.89-4.89,5.93a35.16,35.16,0,0,0-4.65,37.62c6.17,13,19.32,21.07,34.33,21.07H410.5c14.94,0,28-8.06,34.19-21A35.17,35.17,0,0,0,440.08,341.31Z" />
      <path d="M256,480a80.06,80.06,0,0,0,70.44-42.13,4,4,0,0,0-3.54-5.87H189.12a4,4,0,0,0-3.55,5.87A80.06,80.06,0,0,0,256,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="256" r="64" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="224" y1="192" x2="171" y2="85" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="288" y1="192" x2="341" y2="85" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="327.55" y1="255.81" x2="446.96" y2="255.94" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="299.09" y1="313.13" x2="371.34" y2="408.19" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="184.45" y1="255.81" x2="65.04" y2="255.94" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="212.91" y1="313.13" x2="140.66" y2="408.19" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <circle cx="256" cy="256" r="48" />
      <path d="M223.47,335.59l-51.71,68a169.73,169.73,0,0,0,168.48,0l-51.71-68" style="fill:none" />
      <path d="M403.08,108.92A208,208,0,0,0,108.92,403.08,208,208,0,0,0,403.08,108.92ZM342,256a86.13,86.13,0,0,1-53.47,79.59l51.71,68a169.73,169.73,0,0,1-168.48,0l51.71-68a86,86,0,0,1-50.56-101.77l-85.48.09a170.21,170.21,0,0,1,73.83-119L199.2,191.5a85.78,85.78,0,0,1,113.6,0l37.94-76.59a170.21,170.21,0,0,1,73.83,119l-85.48-.09A85.87,85.87,0,0,1,342,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM429,239.92l-93.08-.1a2,2,0,0,1-1.95-1.57,80.08,80.08,0,0,0-27.44-44.17,2,2,0,0,1-.54-2.43l41.32-83.43a2,2,0,0,1,2.87-.81A176.2,176.2,0,0,1,431,237.71,2,2,0,0,1,429,239.92ZM208.2,260.38a48,48,0,1,1,43.42,43.42A48,48,0,0,1,208.2,260.38ZM164.65,108.22,206,191.65a2,2,0,0,1-.54,2.43A80.08,80.08,0,0,0,178,238.25a2,2,0,0,1-2,1.57l-93.08.1a2,2,0,0,1-2-2.21,176.2,176.2,0,0,1,80.82-130.3A2,2,0,0,1,164.65,108.22Zm-.37,295.34,56.31-74.09a2,2,0,0,1,2.43-.6,79.84,79.84,0,0,0,66,0,2,2,0,0,1,2.43.6l56.31,74.09a2,2,0,0,1-.54,2.92,175.65,175.65,0,0,1-182.36,0A2,2,0,0,1,164.28,403.56Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M352,128c-32.26-2.89-64,16-96,16s-63.75-19-96-16c-64,6-96,64-96,160,0,80,64,192,111.2,192s51.94-24,80.8-24,33.59,24,80.8,24S448,368,448,288C448,192,419,134,352,128Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M323.92,83.14c-21,21-45.66,27-58.82,28.79A8,8,0,0,1,256,103.2a97.6,97.6,0,0,1,28.61-59.33c22-22,46-26.9,58.72-27.85A8,8,0,0,1,352,24.94,98,98,0,0,1,323.92,83.14Z" />
      <ellipse cx="216" cy="304" rx="24" ry="48" />
      <ellipse cx="296" cy="304" rx="24" ry="48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M438.71,159.43c-17.6-28.31-45.5-43.8-85.28-47.37-22.82-2-50.23,4.94-72.25,10.55C271.26,125.14,260,128,256,128s-15.18-2.86-25-5.39c-22.08-5.65-49.56-12.69-72.45-10.54-38.53,3.61-66,19.19-84,47.62S48,229,48,288c0,61.28,29.53,114.58,47.13,140.89C116.82,461.34,149.25,496,175.2,496c18.57,0,34.12-7.23,47.82-13.64C243,473,256,472,256,472s11,0,31.94,10.11C301.65,488.73,317.3,496,336.8,496c26.58,0,59.08-34.69,80.63-67.15C434.82,402.65,464,349.52,464,288,464,228,456,187.17,438.71,159.43ZM216,352c-13.25,0-24-21.49-24-48s10.75-48,24-48,24,21.49,24,48S229.25,352,216,352Zm80,0c-13.25,0-24-21.49-24-48s10.75-48,24-48,24,21.49,24,48S309.25,352,296,352Z" />
      <path d="M323.72,82.76C353.68,52.82,352,16.18,352,16.14h0s-35.77-3.76-67.23,27.67S256.06,112,256.06,112,293.74,112.71,323.72,82.76Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-m</title>
      <path d="M439,166.29c-18.67-32.57-47.46-50.81-85.57-54.23-20.18-1.8-39,3.37-57.23,8.38C282.05,124.33,268.68,128,256,128s-26-3.68-40.06-7.57c-18.28-5-37.18-10.26-57.43-8.36C122.12,115.48,93,134.18,74.2,166.15,56.82,195.76,48,236.76,48,288c0,40.4,15,90.49,40,134,12.82,22.25,47,74,87.16,74,30.77,0,47.15-9.44,59.11-16.33,8.3-4.78,13.31-7.67,21.69-7.67s13.39,2.89,21.69,7.67C289.65,486.56,306,496,336.8,496c40.17,0,74.34-51.76,87.16-74,25.07-43.5,40-93.59,40-134C464,235.43,455.82,195.62,439,166.29ZM216,352c-13.25,0-24-21.49-24-48s10.75-48,24-48,24,21.49,24,48S229.25,352,216,352Zm80,0c-13.25,0-24-21.49-24-48s10.75-48,24-48,24,21.49,24,48S309.25,352,296,352Z" />
      <path d="M265.1,111.93c13.16-1.75,37.86-7.83,58.83-28.79a98,98,0,0,0,28-58.2A8,8,0,0,0,343.38,16c-12.71.95-36.76,5.87-58.73,27.85A97.6,97.6,0,0,0,256,103.2,8,8,0,0,0,265.1,111.93Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M384,224V408a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V168a40,40,0,0,1,40-40H271.48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="336 64 448 64 448 176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="224" y1="288" x2="440" y2="72" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <polygon points="201.37 288 377.37 112 48 112 48 464 400 464 400 134.63 224 310.63 201.37 288" />
      <polygon points="320 48 320 80 409.37 80 377.37 112 400 134.63 432 102.63 432 192 464 192 464 48 320 48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M224,304a16,16,0,0,1-11.31-27.31L370.63,118.75A55.7,55.7,0,0,0,344,112H104a56.06,56.06,0,0,0-56,56V408a56.06,56.06,0,0,0,56,56H344a56.06,56.06,0,0,0,56-56V168a55.7,55.7,0,0,0-6.75-26.63L235.31,299.31A15.92,15.92,0,0,1,224,304Z" />
      <path d="M448,48H336a16,16,0,0,0,0,32h73.37l-38.74,38.75a56.35,56.35,0,0,1,22.62,22.62L432,102.63V176a16,16,0,0,0,32,0V64A16,16,0,0,0,448,48Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <line x1="368" y1="128" x2="448" y2="128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="64" y1="128" x2="304" y2="128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="368" y1="384" x2="448" y2="384" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="64" y1="384" x2="304" y2="384" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="208" y1="256" x2="448" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="64" y1="256" x2="144" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="336" cy="128" r="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="176" cy="256" r="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="336" cy="384" r="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M381.25,112a48,48,0,0,0-90.5,0H48v32H290.75a48,48,0,0,0,90.5,0H464V112Z" />
      <path d="M176,208a48.09,48.09,0,0,0-45.25,32H48v32h82.75a48,48,0,0,0,90.5,0H464V240H221.25A48.09,48.09,0,0,0,176,208Z" />
      <path d="M336,336a48.09,48.09,0,0,0-45.25,32H48v32H290.75a48,48,0,0,0,90.5,0H464V368H381.25A48.09,48.09,0,0,0,336,336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-i</title>
      <path d="M64,144H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32Z" />
      <path d="M448,368H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z" />
      <path d="M448,240H221.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32h66.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M53.12,199.94l400-151.39a8,8,0,0,1,10.33,10.33l-151.39,400a8,8,0,0,1-15-.34L229.66,292.45a16,16,0,0,0-10.11-10.11L53.46,215A8,8,0,0,1,53.12,199.94Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="460" y1="52" x2="227" y2="285" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <polygon points="496 16 15.88 208 195 289 448 64 223 317 304 496 496 16" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M473,39.05a24,24,0,0,0-25.5-5.46L47.47,185l-.08,0a24,24,0,0,0,1,45.16l.41.13,137.3,58.63a16,16,0,0,0,15.54-3.59L422,80a7.07,7.07,0,0,1,10,10L226.66,310.26a16,16,0,0,0-3.59,15.54l58.65,137.38c.06.2.12.38.19.57,3.2,9.27,11.3,15.81,21.09,16.25.43,0,.58,0,1,0a24.63,24.63,0,0,0,23-15.46L478.39,64.62A24,24,0,0,0,473,39.05Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M90.61,306.85A16.07,16.07,0,0,0,104,293.6C116.09,220.17,169.63,176,232,176c57.93,0,96.62,37.75,112.2,77.74a15.84,15.84,0,0,0,12.2,9.87c50,8.15,91.6,41.54,91.6,99.59C448,422.6,399.4,464,340,464H106c-49.5,0-90-24.7-90-79.2C16,336.33,54.67,312.58,90.61,306.85Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384.8,271.4a80,80,0,1,0-123.55-92" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="464" y1="208" x2="496" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336" y1="48" x2="336" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="222.86" y1="94.86" x2="245.49" y2="117.49" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="449.14" y1="94.86" x2="426.51" y2="117.49" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M340,480H106c-29.5,0-54.92-7.83-73.53-22.64C11.23,440.44,0,415.35,0,384.8c0-26.66,10.08-49.8,29.14-66.91,15.24-13.68,36.17-23.21,59-26.84h0c.06,0,.08,0,.09-.05,6.44-39,23.83-72.09,50.31-95.68A140.24,140.24,0,0,1,232,160c30.23,0,58.48,9.39,81.71,27.17a142.69,142.69,0,0,1,45.36,60.66c29.41,4.82,54.72,17.11,73.19,35.54C453,304.11,464,331.71,464,363.2c0,32.85-13.13,62.87-37,84.52C404.11,468.54,373.2,480,340,480Zm19-232.18Z" />
      <path d="M381.5,219.89a169.23,169.23,0,0,1,45.44,19A96,96,0,0,0,281,129.33q-2.85,2-5.54,4.2a162.47,162.47,0,0,1,57.73,28.23A174.53,174.53,0,0,1,381.5,219.89Z" />
      <rect x="448" y="192" width="64" height="32" />
      <rect x="320" y="32" width="32" height="64" />
      <path d="M255.35,129.63l12.45-12.45L223.18,72.55,200.55,95.18l33.17,33.17h.6A172,172,0,0,1,255.35,129.63Z" />
      <rect x="406.27" y="90.18" width="63.11" height="32" transform="translate(53.16 340.68) rotate(-45)" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M340,480H106c-29.5,0-54.92-7.83-73.53-22.64C11.23,440.44,0,415.35,0,384.8c0-26.66,10.08-49.8,29.14-66.91,15.24-13.68,36.17-23.21,59-26.84h0c.06,0,.08,0,.09-.05,6.44-39,23.83-72.09,50.31-95.68A140.24,140.24,0,0,1,232,160c30.23,0,58.48,9.39,81.71,27.17a142.24,142.24,0,0,1,42.19,53.21,16,16,0,0,0,11.19,9c26,5.61,48.4,17.29,65.17,34C453,304.11,464,331.71,464,363.2c0,32.85-13.13,62.87-37,84.52C404.11,468.54,373.2,480,340,480Zm19-232.18Z" />
      <path d="M387.89,221.68a168.8,168.8,0,0,1,34.76,14.71,4,4,0,0,0,5.82-2.44A97,97,0,0,0,432,207.27c-.39-52.43-43.48-95.22-95.91-95.27A95.46,95.46,0,0,0,281,129.33l-.06,0a3.38,3.38,0,0,0,1,6,162.45,162.45,0,0,1,51.28,26.4,173.92,173.92,0,0,1,45.32,52.51A16,16,0,0,0,387.89,221.68Z" />
      <path d="M496,224H464a16,16,0,0,1,0-32h32a16,16,0,0,1,0,32Z" />
      <path d="M336,96a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V80A16,16,0,0,1,336,96Z" />
      <path d="M245.49,133.49a15.92,15.92,0,0,1-11.31-4.69l-22.63-22.62a16,16,0,0,1,22.63-22.63l22.62,22.63a16,16,0,0,1-11.31,27.31Z" />
      <path d="M426.51,133.49a16,16,0,0,1-11.31-27.31l22.62-22.63a16,16,0,0,1,22.63,22.63L437.82,128.8A15.92,15.92,0,0,1,426.51,133.49Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="208" y1="192" x2="208" y2="320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="304" y1="192" x2="304" y2="320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM224,336H192V176h32Zm96,0H288V176h32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM224,320a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Zm96,0a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <rect x="176" y="96" width="16" height="320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="320" y="96" width="16" height="320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M224,432H144V80h80Z" />
      <path d="M368,432H288V80h80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M208,432H160a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V416A16,16,0,0,1,208,432Z" />
      <path d="M352,432H304a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V416A16,16,0,0,1,352,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M457.74,170.1a30.26,30.26,0,0,0-11.16-2.1h-.4c-20.17.3-42.79,19.19-54.66,47.76-14.23,34.18-7.68,69.15,14.74,78.14a30.21,30.21,0,0,0,11.15,2.1c20.27,0,43.2-19,55.17-47.76C486.71,214.06,480.06,179.09,457.74,170.1Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M327.6,303.48C299.8,257.35,287.8,240,256,240s-43.9,17.46-71.7,63.48c-23.8,39.36-71.9,42.64-83.9,76.07a50.91,50.91,0,0,0-3.6,19.25c0,27.19,20.8,49.2,46.4,49.2,31.8,0,75.1-25.39,112.9-25.39S337,448,368.8,448c25.6,0,46.3-22,46.3-49.2a51,51,0,0,0-3.7-19.25C399.4,346,351.4,342.84,327.6,303.48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M192.51,196a26.53,26.53,0,0,0,4-.3c23.21-3.37,37.7-35.53,32.44-71.85C224,89.61,203.22,64,181.49,64a26.53,26.53,0,0,0-4,.3c-23.21,3.37-37.7,35.53-32.44,71.85C150,170.29,170.78,196,192.51,196Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M366.92,136.15c5.26-36.32-9.23-68.48-32.44-71.85a26.53,26.53,0,0,0-4-.3c-21.73,0-42.47,25.61-47.43,59.85-5.26,36.32,9.23,68.48,32.44,71.85a26.53,26.53,0,0,0,4,.3C341.22,196,362,170.29,366.92,136.15Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M105.77,293.9c22.39-9,28.93-44,14.72-78.14C108.53,187,85.62,168,65.38,168a30.21,30.21,0,0,0-11.15,2.1c-22.39,9-28.93,44-14.72,78.14C51.47,277,74.38,296,94.62,296A30.21,30.21,0,0,0,105.77,293.9Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M442.8,361.82C434,336.72,413.49,324,393.69,311.7c-17.23-10.71-33.5-20.83-44.14-39C320.22,222.37,304.11,192,256.06,192s-64.21,30.38-93.61,80.69c-10.65,18.21-27,28.35-44.25,39.08-19.8,12.31-40.27,25-49.1,50.05A78.06,78.06,0,0,0,64,390.11C64,430.85,96.45,464,132.4,464s83.31-18.13,123.76-18.13S343.31,464,379.71,464,448,430.85,448,390.11A78.3,78.3,0,0,0,442.8,361.82Z" />
      <ellipse cx="72" cy="216" rx="56" ry="72" />
      <ellipse cx="184" cy="120" rx="56" ry="72" />
      <ellipse cx="328" cy="120" rx="56" ry="72" />
      <ellipse cx="440" cy="216" rx="56" ry="72" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M490.39,182.75c-5.55-13.19-14.77-22.7-26.67-27.49l-.16-.06a46.46,46.46,0,0,0-17-3.2h-.64c-27.24.41-55.05,23.56-69.19,57.61-10.37,24.9-11.56,51.68-3.18,71.64,5.54,13.2,14.78,22.71,26.73,27.5l.13.05a46.53,46.53,0,0,0,17,3.2c27.5,0,55.6-23.15,70-57.65C497.65,229.48,498.78,202.72,490.39,182.75Z" />
      <path d="M381.55,329.61c-15.71-9.44-30.56-18.37-40.26-34.41C314.53,250.8,298.37,224,256,224s-58.57,26.8-85.39,71.2c-9.72,16.06-24.6,25-40.36,34.48-18.07,10.86-36.74,22.08-44.8,44.16a66.93,66.93,0,0,0-4.65,25c0,35.95,28,65.2,62.4,65.2,17.75,0,36.64-6.15,56.63-12.66,19.22-6.26,39.09-12.73,56.27-12.73s37,6.47,56.15,12.73C332.2,457.85,351,464,368.8,464c34.35,0,62.3-29.25,62.3-65.2a67,67,0,0,0-4.75-25C418.29,351.7,399.61,340.47,381.55,329.61Z" />
      <path d="M150,188.85c11.9,14.93,27,23.15,42.52,23.15a42.88,42.88,0,0,0,6.33-.47c32.37-4.76,52.54-44.26,45.92-90C242,102.3,234.6,84.39,224,71.11,212.12,56.21,197,48,181.49,48a42.88,42.88,0,0,0-6.33.47c-32.37,4.76-52.54,44.26-45.92,90C132,157.67,139.4,175.56,150,188.85Z" />
      <path d="M313.16,211.53a42.88,42.88,0,0,0,6.33.47c15.53,0,30.62-8.22,42.52-23.15,10.59-13.29,17.95-31.18,20.75-50.4h0c6.62-45.72-13.55-85.22-45.92-90a42.88,42.88,0,0,0-6.33-.47C315,48,299.88,56.21,288,71.11c-10.6,13.28-18,31.19-20.76,50.44C260.62,167.27,280.79,206.77,313.16,211.53Z" />
      <path d="M111.59,308.8l.14-.05c11.93-4.79,21.16-14.29,26.69-27.48,8.38-20,7.2-46.75-3.15-71.65C120.94,175.16,92.85,152,65.38,152a46.4,46.4,0,0,0-17,3.2l-.14.05C36.34,160,27.11,169.54,21.58,182.73c-8.38,20-7.2,46.75,3.15,71.65C39.06,288.84,67.15,312,94.62,312A46.4,46.4,0,0,0,111.59,308.8Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <polygon points="364.13 125.25 87 403 64 448 108.99 425 386.75 147.87 364.13 125.25" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M420.69,68.69,398.07,91.31l22.62,22.63,22.62-22.63a16,16,0,0,0,0-22.62h0A16,16,0,0,0,420.69,68.69Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <polygon points="103 464 48 464 48 409 358.14 98.09 413.91 153.87 103 464" />
      <path d="M425.72,142,370,86.28l31.66-30.66C406.55,50.7,414.05,48,421,48a25.91,25.91,0,0,1,18.42,7.62l17,17A25.87,25.87,0,0,1,464,91c0,7-2.71,14.45-7.62,19.36ZM418.2,71.17h0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <polygon points="358.62 129.28 86.49 402.08 70 442 109.92 425.51 382.72 153.38 358.62 129.28" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <path d="M413.07,74.84,401.28,86.62l24.1,24.1,11.79-11.79a16.51,16.51,0,0,0,0-23.34l-.75-.75A16.51,16.51,0,0,0,413.07,74.84Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,464C141.31,464,48,370.69,48,256S141.31,48,256,48s208,93.31,208,208S370.69,464,256,464Zm0-384C159,80,80,159,80,256S159,432,256,432s176-78.95,176-176S353.05,80,256,80Z" />
      <path d="M323.67,292c-17.4,0-34.21-7.72-47.34-21.73a83.76,83.76,0,0,1-22-51.32c-1.47-20.7,4.88-39.75,17.88-53.62S303.38,144,323.67,144c20.14,0,38.37,7.62,51.33,21.46s19.47,33,18,53.51h0a84,84,0,0,1-22,51.3C357.86,284.28,341.06,292,323.67,292Zm55.81-74h0Z" />
      <path d="M163.82,295.36c-29.76,0-55.93-27.51-58.33-61.33-1.23-17.32,4.15-33.33,15.17-45.08s26.22-18,43.15-18,32.12,6.44,43.07,18.14,16.5,27.82,15.25,45C219.69,267.86,193.53,295.36,163.82,295.36Z" />
      <path d="M420.37,355.28c-1.59-4.7-5.46-9.71-13.22-14.46-23.46-14.33-52.32-21.91-83.48-21.91-30.57,0-60.23,7.9-83.53,22.25-26.25,16.17-43.89,39.75-51,68.18-1.68,6.69-4.13,19.14-1.51,26.11a192.18,192.18,0,0,0,232.75-80.17Z" />
      <path d="M163.63,401.37c7.07-28.21,22.12-51.73,45.47-70.75a8,8,0,0,0-2.59-13.77c-12-3.83-25.7-5.88-42.69-5.88-23.82,0-49.11,6.45-68.14,18.17-5.4,3.33-10.7,4.61-14.78,5.75a192.84,192.84,0,0,0,77.78,86.64l1.79-.14A102.82,102.82,0,0,1,163.63,401.37Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm69.3,96.17a72.5,72.5,0,1,1-72.6,72.5A72.55,72.55,0,0,1,325.3,144.17ZM170.2,170.53a59.32,59.32,0,1,1-59.4,59.32A59.35,59.35,0,0,1,170.2,170.53Zm-75.85,155c24.5-13.29,55.87-19.94,75.85-19.94,15,0,34.32,3,53.33,10.2a133.05,133.05,0,0,0-34,27.11c-13.19,15-20.76,32.92-20.76,50.83v15A177.06,177.06,0,0,1,94.35,325.58ZM256,432a175.12,175.12,0,0,1-59.4-10.33V394.62c0-52.59,85.75-79.09,128.7-79.09,23,0,58.38,7.63,86.21,22.81A176.14,176.14,0,0,1,256,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48Zm-3.68,152.11c.21-1.2.44-2.4.71-3.59a66.46,66.46,0,0,1,16.29-31.21C285.11,151.58,303.38,144,323.67,144a74.05,74.05,0,0,1,25.06,4.26A66.69,66.69,0,0,1,375,165.46a68.15,68.15,0,0,1,18,42.14A78.46,78.46,0,0,1,393,219h0a86.19,86.19,0,0,1-8.2,31q-.76,1.59-1.59,3.15c-1.11,2.07-2.3,4.1-3.58,6.06a79.47,79.47,0,0,1-8.63,11c-13.12,14-29.92,21.73-47.31,21.73a59.61,59.61,0,0,1-19.17-3.18,63.47,63.47,0,0,1-6.1-2.43,70.76,70.76,0,0,1-22.07-16.12,83.76,83.76,0,0,1-22-51.32q-.27-3.88-.18-7.68A75.62,75.62,0,0,1,255.22,200.13ZM105.49,224.45a59.87,59.87,0,0,1,5.2-20.64,56.76,56.76,0,0,1,2.78-5.3,54.49,54.49,0,0,1,7.19-9.56,55.62,55.62,0,0,1,14-10.82,56.84,56.84,0,0,1,8.11-3.64,63.85,63.85,0,0,1,33.35-2.39,57,57,0,0,1,30.78,17,57.86,57.86,0,0,1,15.41,38.62c.05,2.11,0,4.23-.15,6.38a71.58,71.58,0,0,1-6,23.84,69.49,69.49,0,0,1-5.73,10.42,65.39,65.39,0,0,1-15.76,16.57C193.17,286,191.61,287,190,288a54.21,54.21,0,0,1-10,4.65,49.31,49.31,0,0,1-16.2,2.76c-.93,0-1.86,0-2.78-.08a47.6,47.6,0,0,1-5.48-.62,51.19,51.19,0,0,1-5.35-1.23,53.54,53.54,0,0,1-7.72-2.89c-.84-.39-1.66-.8-2.48-1.23-18-9.49-31.57-29.16-34.23-52.12-.12-1.05-.22-2.1-.29-3.16A66.59,66.59,0,0,1,105.49,224.45Zm53.92,178.6A177.27,177.27,0,0,1,97.47,332.4a4,4,0,0,1,1.62-5.26C117.67,316.69,141.4,311,163.82,311c17,0,30.7,2,42.69,5.88a8,8,0,0,1,2.59,13.77c-23.35,19-38.4,42.54-45.47,70.75v0A2.77,2.77,0,0,1,159.41,403.05ZM256,432a175.12,175.12,0,0,1-65.7-12.72,4,4,0,0,1-2.4-4.46c.4-2.05.84-3.92,1.23-5.48,7.12-28.43,24.76-52,51-68.18,23.29-14.35,53-22.25,83.52-22.25,31.16,0,60,7.58,83.48,21.91h0a2.72,2.72,0,0,1,.91,3.67A176.1,176.1,0,0,1,256,432Z" />
      <path d="M161,295.28a47.6,47.6,0,0,1-5.48-.62A47.6,47.6,0,0,0,161,295.28Z" />
      <path d="M134.64,178.13a55.62,55.62,0,0,0-14,10.82,54.49,54.49,0,0,0-7.19,9.56,54.49,54.49,0,0,1,7.19-9.56A55.62,55.62,0,0,1,134.64,178.13Z" />
      <path d="M216.17,257.89a71.58,71.58,0,0,0,6-23.84c.15-2.15.2-4.27.15-6.38q.08,3.15-.15,6.38A71.58,71.58,0,0,1,216.17,257.89Z" />
      <path d="M134.64,178.13a56.84,56.84,0,0,1,8.11-3.64A56.84,56.84,0,0,0,134.64,178.13Z" />
      <path d="M150.21,293.43a53.54,53.54,0,0,1-7.72-2.89A53.54,53.54,0,0,0,150.21,293.43Z" />
      <path d="M105.78,237.19c2.66,23,16.26,42.63,34.23,52.12C122,279.82,108.44,260.15,105.78,237.19Z" />
      <path d="M254.34,219a83.76,83.76,0,0,0,22,51.32,70.76,70.76,0,0,0,22.07,16.12,70.76,70.76,0,0,1-22.07-16.12,83.76,83.76,0,0,1-22-51.32q-.27-3.88-.18-7.68Q254.07,215.07,254.34,219Z" />
      <path d="M304.5,288.82a63.47,63.47,0,0,1-6.1-2.43A63.47,63.47,0,0,0,304.5,288.82Z" />
      <path d="M255.93,196.54a66.46,66.46,0,0,1,16.29-31.21A66.46,66.46,0,0,0,255.93,196.54Z" />
      <path d="M375,165.46a68.15,68.15,0,0,1,18,42.14,68.15,68.15,0,0,0-18-42.14,66.69,66.69,0,0,0-26.27-17.2A66.69,66.69,0,0,1,375,165.46Z" />
      <path d="M393,219h0a86.19,86.19,0,0,1-8.2,31A86.19,86.19,0,0,0,393,219Z" />
      <path d="M254.16,211.27a75.62,75.62,0,0,1,1.06-11.14A75.62,75.62,0,0,0,254.16,211.27Z" />
      <path d="M383.19,253.16c-1.11,2.07-2.3,4.1-3.58,6.06C380.89,257.26,382.08,255.23,383.19,253.16Z" />
      <path d="M206.88,189.05a57.86,57.86,0,0,1,15.41,38.62,57.86,57.86,0,0,0-15.41-38.62,57,57,0,0,0-30.78-17A57,57,0,0,1,206.88,189.05Z" />
      <path d="M190,288a54.21,54.21,0,0,1-10,4.65A54.21,54.21,0,0,0,190,288Z" />
      <path d="M105.49,224.45a59.87,59.87,0,0,1,5.2-20.64A59.87,59.87,0,0,0,105.49,224.45Z" />
      <path d="M194.68,284.88C193.17,286,191.61,287,190,288,191.61,287,193.17,286,194.68,284.88Z" />
      <path d="M216.17,257.89a69.49,69.49,0,0,1-5.73,10.42A69.49,69.49,0,0,0,216.17,257.89Z" />
      <path d="M110.69,203.81a56.76,56.76,0,0,1,2.78-5.3A56.76,56.76,0,0,0,110.69,203.81Z" />
      <path d="M194.68,284.88a65.39,65.39,0,0,0,15.76-16.57A65.39,65.39,0,0,1,194.68,284.88Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M402,168c-2.93,40.67-33.1,72-66,72s-63.12-31.32-66-72c-3-42.31,26.37-72,66-72S405,126.46,402,168Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M336,304c-65.17,0-127.84,32.37-143.54,95.41-2.08,8.34,3.15,16.59,11.72,16.59H467.83c8.57,0,13.77-8.25,11.72-16.59C463.85,335.36,401.18,304,336,304Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M200,185.94C197.66,218.42,173.28,244,147,244S96.3,218.43,94,185.94C91.61,152.15,115.34,128,147,128S202.39,152.77,200,185.94Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M206,306c-18.05-8.27-37.93-11.45-59-11.45-52,0-102.1,25.85-114.65,76.2C30.7,377.41,34.88,384,41.72,384H154" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <circle cx="152" cy="184" r="72" />
      <path d="M234,296c-28.16-14.3-59.24-20-82-20-44.58,0-136,27.34-136,82v42H166V383.93c0-19,8-38.05,22-53.93C199.17,317.32,214.81,305.55,234,296Z" />
      <path d="M340,288c-52.07,0-156,32.16-156,96v48H496V384C496,320.16,392.07,288,340,288Z" />
      <circle cx="340" cy="168" r="88" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z" />
      <path d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z" />
      <path d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z" />
      <path d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M376,144c-3.92,52.87-44,96-88,96s-84.15-43.12-88-96c-4-55,35-96,88-96S380,90,376,144Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M288,304c-87,0-175.3,48-191.64,138.6-2,10.92,4.21,21.4,15.65,21.4H464c11.44,0,17.62-10.48,15.65-21.4C463.3,352,375,304,288,304Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="88" y1="176" x2="88" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="144" y1="232" x2="32" y2="232" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <polygon points="106 304 106 250 160 250 160 214 106 214 106 160 70 160 70 214 16 214 16 250 70 250 70 304 106 304" />
      <circle cx="288" cy="144" r="112" />
      <path d="M288,288c-69.42,0-208,42.88-208,128v64H496V416C496,330.88,357.42,288,288,288Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M288,256c52.79,0,99.43-49.71,104-110.82,2.27-30.7-7.36-59.33-27.12-80.6C345.33,43.57,318,32,288,32c-30.24,0-57.59,11.5-77,32.38-19.63,21.11-29.2,49.8-27,80.78C188.49,206.28,235.12,256,288,256Z" />
      <path d="M495.38,439.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42,301.5,335.83,288,288,288s-94.42,13.5-131.19,38c-41.4,27.6-67.75,66.93-76.19,113.75-1.93,10.73.69,21.34,7.19,29.11A30.94,30.94,0,0,0,112,480H464a30.94,30.94,0,0,0,24.21-11.13C494.69,461.1,497.31,450.49,495.38,439.76Z" />
      <path d="M104,288V248h40a16,16,0,0,0,0-32H104V176a16,16,0,0,0-32,0v40H32a16,16,0,0,0,0,32H72v40a16,16,0,0,0,32,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM385.32,375.25a4,4,0,0,1-6.14-.32,124.27,124.27,0,0,0-32.35-29.59C321.37,329,289.11,320,256,320s-65.37,9-90.83,25.34a124.24,124.24,0,0,0-32.35,29.58,4,4,0,0,1-6.14.32A175.32,175.32,0,0,1,80,259C78.37,161.69,158.22,80.24,255.57,80S432,158.81,432,256A175.32,175.32,0,0,1,385.32,375.25Z" />
      <path d="M256,144c-19.72,0-37.55,7.39-50.22,20.82s-19,32-17.57,51.93C191.11,256,221.52,288,256,288s64.83-32,67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39,151.44,275.59,144,256,144Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm2,96a72,72,0,1,1-72,72A72,72,0,0,1,258,144Zm-2,288a175.55,175.55,0,0,1-129.18-56.6C135.66,329.62,215.06,320,256,320s120.34,9.62,129.18,55.39A175.52,175.52,0,0,1,256,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM205.78,164.82C218.45,151.39,236.28,144,256,144s37.39,7.44,50.11,20.94C319,178.62,325.27,197,323.79,216.76,320.83,256,290.43,288,256,288s-64.89-32-67.79-71.25C186.74,196.83,193,178.39,205.78,164.82ZM256,432a175.49,175.49,0,0,1-126-53.22,122.91,122.91,0,0,1,35.14-33.44C190.63,329,222.89,320,256,320s65.37,9,90.83,25.34A122.87,122.87,0,0,1,382,378.78,175.45,175.45,0,0,1,256,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M344,144c-3.92,52.87-44,96-88,96s-84.15-43.12-88-96c-4-55,35-96,88-96S348,90,344,144Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,304c-87,0-175.3,48-191.64,138.6C62.39,453.52,68.57,464,80,464H432c11.44,0,17.62-10.48,15.65-21.4C431.3,352,343,304,256,304Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M376,144c-3.92,52.87-44,96-88,96s-84.15-43.12-88-96c-4-55,35-96,88-96S380,90,376,144Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M288,304c-87,0-175.3,48-191.64,138.6-2,10.92,4.21,21.4,15.65,21.4H464c11.44,0,17.62-10.48,15.65-21.4C463.3,352,375,304,288,304Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="144" y1="232" x2="32" y2="232" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <rect x="16" y="214" width="144" height="36" />
      <circle cx="288" cy="144" r="112" />
      <path d="M288,288c-69.42,0-208,42.88-208,128v64H496V416C496,330.88,357.42,288,288,288Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M288,256c52.79,0,99.43-49.71,104-110.82,2.27-30.7-7.36-59.33-27.12-80.6C345.33,43.57,318,32,288,32c-30.24,0-57.59,11.5-77,32.38-19.63,21.11-29.2,49.8-27,80.78C188.49,206.28,235.12,256,288,256Z" />
      <path d="M495.38,439.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42,301.5,335.83,288,288,288s-94.42,13.5-131.19,38c-41.4,27.6-67.75,66.93-76.19,113.75-1.93,10.73.69,21.34,7.19,29.11A30.94,30.94,0,0,0,112,480H464a30.94,30.94,0,0,0,24.21-11.13C494.69,461.1,497.31,450.49,495.38,439.76Z" />
      <path d="M144,216H32a16,16,0,0,0,0,32H144a16,16,0,0,0,0-32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M256,256A112,112,0,1,0,144,144,112,112,0,0,0,256,256Zm0,32c-69.42,0-208,42.88-208,128v64H464V416C464,330.88,325.42,288,256,288Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-j</title>
      <path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z" />
      <path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <rect x="128" y="16" width="256" height="480" rx="48" ry="48" transform="translate(0 512) rotate(-90)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M16,336V312a8,8,0,0,1,8-8h0a16,16,0,0,0,16-16V224a16,16,0,0,0-16-16h0a8,8,0,0,1-8-8V176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M0,130V382a18,18,0,0,0,18,18H494a18,18,0,0,0,18-18V130a18,18,0,0,0-18-18H18A18,18,0,0,0,0,130ZM448,364H64V148H448Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M0,176V336a64,64,0,0,0,64,64H448a64,64,0,0,0,64-64V176a64,64,0,0,0-64-64H64A64,64,0,0,0,0,176Zm448-32a32,32,0,0,1,32,32V336a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V324.65a7.94,7.94,0,0,1,4.75-7.3A32,32,0,0,0,56,288V224a32,32,0,0,0-19.25-29.35,7.94,7.94,0,0,1-4.75-7.3V176a32,32,0,0,1,32-32Z" />
      <path d="M48,176h0a11.88,11.88,0,0,0,4.69,9.53A48,48,0,0,1,72,224v64a48,48,0,0,1-19.31,38.47A11.88,11.88,0,0,0,48,336h0a16,16,0,0,0,16,16H448a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H64A16,16,0,0,0,48,176Z" />
      <path d="M0,176V336a64,64,0,0,0,64,64H448a64,64,0,0,0,64-64V176a64,64,0,0,0-64-64H64A64,64,0,0,0,0,176Zm448-32a32,32,0,0,1,32,32V336a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V324.65a7.94,7.94,0,0,1,4.75-7.3A32,32,0,0,0,56,288V224a32,32,0,0,0-19.25-29.35,7.94,7.94,0,0,1-4.75-7.3V176a32,32,0,0,1,32-32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <rect x="128" y="16" width="256" height="480" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M176,16h24a8,8,0,0,1,8,8h0a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16h0a8,8,0,0,1,8-8h24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M382,0H130a18,18,0,0,0-18,18V494a18,18,0,0,0,18,18H382a18,18,0,0,0,18-18V18A18,18,0,0,0,382,0ZM148,448V64H364V448Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M336,0H176a64,64,0,0,0-64,64V448a64,64,0,0,0,64,64H336a64,64,0,0,0,64-64V64A64,64,0,0,0,336,0Zm32,448a32,32,0,0,1-32,32H176a32,32,0,0,1-32-32V64a32,32,0,0,1,32-32h11.35a7.94,7.94,0,0,1,7.3,4.75A32,32,0,0,0,224,56h64a32,32,0,0,0,29.35-19.25,7.94,7.94,0,0,1,7.3-4.75H336a32,32,0,0,1,32,32Z" />
      <path d="M336,48h0a11.88,11.88,0,0,0-9.53,4.69A48,48,0,0,1,288,72H224a48,48,0,0,1-38.47-19.31A11.88,11.88,0,0,0,176,48h0a16,16,0,0,0-16,16V448a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V64A16,16,0,0,0,336,48Z" />
      <path d="M336,0H176a64,64,0,0,0-64,64V448a64,64,0,0,0,64,64H336a64,64,0,0,0,64-64V64A64,64,0,0,0,336,0Zm32,448a32,32,0,0,1-32,32H176a32,32,0,0,1-32-32V64a32,32,0,0,1,32-32h11.35a7.94,7.94,0,0,1,7.3,4.75A32,32,0,0,0,224,56h64a32,32,0,0,0,29.35-19.25,7.94,7.94,0,0,1,7.3-4.75H336a32,32,0,0,1,32,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M256.05,80.65Q263.94,80,272,80c106,0,192,86,192,192S378,464,272,464A192.09,192.09,0,0,1,89.12,330.65" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M256,48C141.12,48,48,141.12,48,256a207.29,207.29,0,0,0,18.09,85L256,256Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M58,362.09,51.49,347.5A224,224,0,0,1,256,32h16V266.37Z" />
      <path d="M304,66.46V287.11L94.62,380.78A208.31,208.31,0,0,0,272,480c114.69,0,208-93.31,208-208C480,168.19,403.55,81.9,304,66.46Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M66.1,357a16,16,0,0,1-14.61-9.46A224,224,0,0,1,256,32a16,16,0,0,1,16,16V256a16,16,0,0,1-9.47,14.61L72.63,355.56A15.93,15.93,0,0,1,66.1,357Z" />
      <path d="M313.59,68.18A8,8,0,0,0,304,76V256a48.07,48.07,0,0,1-28.4,43.82L103.13,377a8,8,0,0,0-3.35,11.81,208.42,208.42,0,0,0,48.46,50.41A206.32,206.32,0,0,0,272,480c114.69,0,208-93.31,208-208C480,171.55,408.42,87.5,313.59,68.18Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <circle cx="256" cy="96" r="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M272,164a9,9,0,0,0-9-9H249a9,9,0,0,0-9,9V457.56a32.09,32.09,0,0,0,2.49,12.38l10.07,24a3.92,3.92,0,0,0,6.88,0l10.07-24A32.09,32.09,0,0,0,272,457.56Z" />
      <circle cx="280" cy="72" r="24" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M339,99a83,83,0,1,0-102,80.8V464l19,32,19-32V179.8A83.28,83.28,0,0,0,339,99Zm-59-6a21,21,0,1,1,21-21A21,21,0,0,1,280,93Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-n</title>
      <path d="M336,96a80,80,0,1,0-96,78.39V457.56a32.09,32.09,0,0,0,2.49,12.38l10.07,24a3.92,3.92,0,0,0,6.88,0l10.07-24A32.09,32.09,0,0,0,272,457.56V174.39A80.13,80.13,0,0,0,336,96Zm-56,0a24,24,0,1,1,24-24A24,24,0,0,1,280,96Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M132.43,162c-6.24-34-4.49-45.55-3.07-68.39L132.27,47a16,16,0,0,1,15.94-15H363.78a16,16,0,0,1,15.94,15l2.91,46.61c1.43,22.86,3.19,34.39-3.06,68.45-5.93,32.29-43.71,133.27-43.71,238.32V472a8,8,0,0,1-8,8H184.12a8,8,0,0,1-8-8V400.37C176.13,307.9,138.66,196.07,132.43,162Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="135.21" y1="96" x2="376.79" y2="96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M399,99.29,394,16H118.45L113,99.26c-1.29,19.24-2.23,33.14,3.73,65.66,1.67,9.11,5.22,22.66,9.73,39.82,12.61,48,33.71,128.36,33.71,195.63V496H351.85V400.38c0-77.09,21.31-153.29,34-198.81,4.38-15.63,7.83-28,9.41-36.62C401.27,132.44,400.33,118.53,399,99.29ZM146.23,80l2-32H363.75l2,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M399,99.29c-.15-2.13-.3-4.35-.44-6.68L395.69,46a32,32,0,0,0-31.91-30H148.21A32,32,0,0,0,116.3,46l-2.91,46.63c-.14,2.31-.29,4.51-.43,6.62-1.29,19.24-2.23,33.14,3.73,65.66,1.67,9.11,5.22,22.66,9.73,39.82,12.61,48,33.71,128.36,33.71,195.63V472a24,24,0,0,0,24,24H327.87a24,24,0,0,0,24-24V400.38c0-77.09,21.31-153.29,34-198.81,4.38-15.63,7.83-28,9.41-36.62C401.27,132.44,400.33,118.53,399,99.29ZM364,51.75l1.5,24a4,4,0,0,1-4,4.25h-211a4,4,0,0,1-4-4.25l1.48-24A4,4,0,0,1,152,48H360A4,4,0,0,1,364,51.75Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M404.76,123.08C358.37,104.18,309.69,96,256,96S149.9,105,107.1,122.68c-8.08,3.3-15.26,9-10.07,19.5C101.24,150.71,203,375,241.66,455a15.94,15.94,0,0,0,28.72,0L414.43,142.78C417.62,135.88,415.33,127.38,404.76,123.08Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M436.38,82.68C384.31,62.08,320.17,48,256,48S128.65,60.78,75.48,82.08C70.79,84,62,88.43,64.41,95.88L74.09,120c4,8.2,8.67,8.2,15.06,8.2,1.79,0,4.29-1,7.28-2.18A442.46,442.46,0,0,1,256,96c56.76,0,114.91,12,159.6,30,3.59,1.4,5.59,2.18,7.28,2.18,6.58,0,10.38,2.19,15-8.1L447.65,96C449.66,90,442.66,85.18,436.38,82.68Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="192" cy="192" r="32" />
      <circle cx="320" cy="208" r="32" />
      <circle cx="256" cy="320" r="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M442.3,67.82h0C383.92,44.72,317.78,32,256,32c-63.57,0-129.8,12.51-186.56,35.25C49.18,75.48,42,80,42,80l22,44,37.53-16.14C147.58,89.53,199.19,80,256.51,80,314,80,364.6,89.23,411.26,108.25h0L448,124l22-44S463,76,442.3,67.82Z" />
      <ellipse cx="320.48" cy="207.99" rx="31.97" ry="32.03" transform="translate(-53.23 287.42) rotate(-44.98)" style="fill:none" />
      <ellipse cx="192.48" cy="191.99" rx="31.97" ry="32.03" transform="translate(-79.38 192.25) rotate(-44.98)" style="fill:none" />
      <ellipse cx="256.48" cy="319.99" rx="31.97" ry="32.03" transform="translate(-151.13 274.96) rotate(-44.98)" style="fill:none" />
      <path d="M409.66,140.85C364.15,122.52,308.16,112,256,112A425,425,0,0,0,102.3,140.9c-.25.1-9.24,4.23-19,8.71,7.46,16.22,18,39.16,22.2,48.33L256,480,429.74,149.16l-19.92-8.24ZM224.41,194.07a32,32,0,1,1-34-34A32.12,32.12,0,0,1,224.41,194.07Zm64,128a32,32,0,1,1-34-34A32.12,32.12,0,0,1,288.41,322.07Zm64-112a32,32,0,1,1-34-34A32.12,32.12,0,0,1,352.41,210.07Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M441.82,67.83l0,0C383.44,44.73,317.3,32,255.56,32,192,32,125.76,44.53,69,67.26,48.7,75.49,45.21,90,48.71,100.82L52.78,111a16,16,0,0,0,21.31,8.69c10.8-4.76,23.93-10.54,27-11.78C145.1,89.64,198.71,80,256,80c57.47,0,108.09,9.24,154.76,28.25h0c4.42,1.8,14.88,6.42,26.17,11.46a16,16,0,0,0,21.35-8.59L462,102l.34-.9C465.79,90.89,462.48,76.05,441.82,67.83Z" />
      <path d="M409.18,140.86C363.67,122.53,307.68,112,255.56,112a425,425,0,0,0-153.74,28.89c-.53.21-2.06.88-4.29,1.88a16,16,0,0,0-8,21.27c4,8.71,9.42,20.58,15.5,33.89C137.94,270,199.21,404,227.26,462A31.74,31.74,0,0,0,256,480h0a31.73,31.73,0,0,0,28.76-18.06l.06-.13,137.3-297.57a15.94,15.94,0,0,0-8.31-21.45c-2.26-.95-3.85-1.61-4.5-1.87Zm-215.1,83.07a32,32,0,1,1,29.85-29.85A32,32,0,0,1,194.08,223.93Zm64,128a32,32,0,1,1,29.85-29.85A32,32,0,0,1,258.08,351.93Zm64-112a32,32,0,1,1,29.85-29.85A32,32,0,0,1,322.08,239.93Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M413.48,284.46c58.87,47.24,91.61,89,80.31,108.55-17.85,30.85-138.78-5.48-270.1-81.15S.37,149.84,18.21,119c11.16-19.28,62.58-12.32,131.64,14.09" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="256" r="160" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M81,274.71C90.36,363,165.26,432,256,432a174.91,174.91,0,0,0,71.49-15.19c-40.3-16.53-84.05-38.17-127.77-63.36C157,328.86,115.84,301.5,81,274.71Z" />
      <path d="M492.72,339.51c-8.5-11.31-20-23.8-34-37a205.25,205.25,0,0,1-11,34c28.72,29.5,33.2,45.34,32.17,48.45-2,2.23-17.05,6.89-58.15-3.53q-8.83-2.24-19.32-5.46-6.76-2.08-13.79-4.49h0a176.76,176.76,0,0,0,19.54-27.25c.17-.29.35-.58.52-.88A175.39,175.39,0,0,0,432,256,178.87,178.87,0,0,0,431,237C421.43,148.83,346.6,80,256,80A175.37,175.37,0,0,0,149.6,115.89a177.4,177.4,0,0,0-45.83,51.84c-.16.29-.34.58-.51.87a175.48,175.48,0,0,0-13.83,30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14C34.65,145.19,31.13,129.84,32.06,127c2.16-2.43,18.1-6.54,58.13,3.55a209.88,209.88,0,0,1,24-26.56c-18.86-5.61-35.79-9.35-50.05-11C33.41,89.47,13.3,95.52,4.35,111,1.11,116.58-2,126.09,1.63,139.6,7,159.66,26.14,184,53.23,209.5c8.63,8.13,18.06,16.37,28.12,24.64,7.32,6,15,12.06,22.9,18.08q7.91,6,16.15,12T137.1,276c25.41,17.61,52.26,34.52,78.59,49.69q14.34,8.26,28.64,16t28.37,14.81c21.9,11,43.35,20.92,63.86,29.43q13.19,5.48,25.81,10.16c11.89,4.42,23.37,8.31,34.31,11.59l1.1.33c25.73,7.66,47.42,11.69,64.48,12H464c21.64,0,36.3-6.38,43.58-19C516.67,385.39,511.66,364.69,492.72,339.51Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M96.85,286.62a8,8,0,0,0-12.53,8.25C102.07,373.28,172.3,432,256,432a175.31,175.31,0,0,0,52.41-8,8,8,0,0,0,.79-15,1120,1120,0,0,1-109.48-55.61A1126.24,1126.24,0,0,1,96.85,286.62Z" />
      <path d="M492.72,339.51c-4.19-5.58-9.11-11.44-14.7-17.53a15.83,15.83,0,0,0-26.56,5.13c0,.16-.11.31-.17.47a15.75,15.75,0,0,0,3.15,16.06c22.74,25,26.42,38.51,25.48,41.36-2,2.23-17.05,6.89-58.15-3.53q-8.83-2.24-19.32-5.46-6.76-2.08-13.79-4.49h0a176.76,176.76,0,0,0,19.54-27.25c.17-.29.35-.58.52-.88A175.39,175.39,0,0,0,432,256,178.87,178.87,0,0,0,431,237C421.43,148.83,346.6,80,256,80A175.37,175.37,0,0,0,149.6,115.89a177.4,177.4,0,0,0-45.83,51.84c-.16.29-.34.58-.51.87a175.48,175.48,0,0,0-13.83,30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14C34.65,145.19,31.13,129.84,32.06,127c2-2.23,15.54-5.87,48.62,1.31A15.82,15.82,0,0,0,96.22,123l.36-.44a15.74,15.74,0,0,0-8.67-25.43A237.38,237.38,0,0,0,64.13,93C33.41,89.47,13.3,95.52,4.35,111,1.11,116.58-2,126.09,1.63,139.6,7,159.66,26.14,184,53.23,209.5c8.63,8.13,18.06,16.37,28.12,24.64,7.32,6,15,12.06,22.9,18.08q7.91,6,16.15,12T137.1,276c25.41,17.61,52.26,34.52,78.59,49.69q14.34,8.26,28.64,16t28.37,14.81c21.9,11,43.35,20.92,63.86,29.43q13.19,5.48,25.81,10.16c11.89,4.42,23.37,8.31,34.31,11.59l1.1.33c25.73,7.66,47.42,11.69,64.48,12H464c21.64,0,36.3-6.38,43.58-19C516.67,385.39,511.66,364.69,492.72,339.51Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M117.23,246.7l114.45-69.14A10.78,10.78,0,0,1,248,186.87v53.32l103.68-62.63A10.78,10.78,0,0,1,368,186.87V325.13a10.78,10.78,0,0,1-16.32,9.31L248,271.81v53.32a10.78,10.78,0,0,1-16.32,9.31L117.23,265.3A10.89,10.89,0,0,1,117.23,246.7Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M48,256c0,114.69,93.31,208,208,208s208-93.31,208-208S370.69,48,256,48,48,141.31,48,256Zm63.47,0L248,168v72.16l120-72.48V344.13L248,271.81v71.44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M48,256c0,114.69,93.31,208,208,208s208-93.31,208-208S370.69,48,256,48,48,141.31,48,256Zm69.23-9.3,114.45-69.14A10.78,10.78,0,0,1,248,186.87v53.32l103.68-62.63A10.78,10.78,0,0,1,368,186.87V325.13a10.78,10.78,0,0,1-16.32,9.31L248,271.81v53.32a10.78,10.78,0,0,1-16.32,9.31L117.23,265.3A10.89,10.89,0,0,1,117.23,246.7Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M480,145.52v221c0,13.28-13,21.72-23.63,15.35L267.5,268.8c-9.24-5.53-9.24-20.07,0-25.6l188.87-113C467,123.8,480,132.24,480,145.52Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M251.43,145.52v221c0,13.28-13,21.72-23.63,15.35L38.93,268.8c-9.24-5.53-9.24-20.07,0-25.6l188.87-113C238.44,123.8,251.43,132.24,251.43,145.52Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polygon points="496 400 256 256 496 112 496 400" />
      <polygon points="256 400 16 256 256 112 256 400" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M30.71,229.47l188.87-113a30.54,30.54,0,0,1,31.09-.39,33.74,33.74,0,0,1,16.76,29.47V224.6L448.15,116.44a30.54,30.54,0,0,1,31.09-.39A33.74,33.74,0,0,1,496,145.52v221A33.73,33.73,0,0,1,479.24,396a30.54,30.54,0,0,1-31.09-.39L267.43,287.4v79.08A33.73,33.73,0,0,1,250.67,396a30.54,30.54,0,0,1-31.09-.39l-188.87-113a31.27,31.27,0,0,1,0-53Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M216.32,334.44,330.77,265.3a10.89,10.89,0,0,0,0-18.6L216.32,177.56A10.78,10.78,0,0,0,200,186.87V325.13A10.78,10.78,0,0,0,216.32,334.44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM200,344V168l144,88Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm74.77,217.3L216.32,334.44A10.78,10.78,0,0,1,200,325.13V186.87a10.78,10.78,0,0,1,16.32-9.31L330.77,246.7A10.89,10.89,0,0,1,330.77,265.3Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M394.77,246.7,280.32,177.56A10.78,10.78,0,0,0,264,186.87v53.32L160.32,177.56A10.78,10.78,0,0,0,144,186.87V325.13a10.78,10.78,0,0,0,16.32,9.31L264,271.81v53.32a10.78,10.78,0,0,0,16.32,9.31L394.77,265.3A10.89,10.89,0,0,0,394.77,246.7Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm8,295.25V271.81L144,344.13V167.71l120,72.48V168l136.53,88Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM394.77,265.3,280.32,334.44A10.78,10.78,0,0,1,264,325.13V271.81L160.32,334.44A10.78,10.78,0,0,1,144,325.13V186.87a10.78,10.78,0,0,1,16.32-9.31L264,240.19V186.87a10.78,10.78,0,0,1,16.32-9.31L394.77,246.7A10.89,10.89,0,0,1,394.77,265.3Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M32,145.52v221c0,13.28,13,21.72,23.63,15.35l188.87-113c9.24-5.53,9.24-20.07,0-25.6l-188.87-113C45,123.8,32,132.24,32,145.52Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M260.57,145.52v221c0,13.28,13,21.72,23.63,15.35l188.87-113c9.24-5.53,9.24-20.07,0-25.6l-188.87-113C273.56,123.8,260.57,132.24,260.57,145.52Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polygon points="16 400 256 256 16 112 16 400" />
      <polygon points="256 400 496 256 256 112 256 400" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M481.29,229.47l-188.87-113a30.54,30.54,0,0,0-31.09-.39,33.74,33.74,0,0,0-16.76,29.47V224.6L63.85,116.44a30.54,30.54,0,0,0-31.09-.39A33.74,33.74,0,0,0,16,145.52v221A33.74,33.74,0,0,0,32.76,396a30.54,30.54,0,0,0,31.09-.39L244.57,287.4v79.08A33.74,33.74,0,0,0,261.33,396a30.54,30.54,0,0,0,31.09-.39l188.87-113a31.27,31.27,0,0,0,0-53Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polygon points="96 448 416 256 96 64 96 448" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M192,176a16,16,0,0,1,16,16v53l111.68-67.46A10.78,10.78,0,0,1,336,186.87V325.13a10.78,10.78,0,0,1-16.32,9.31L208,267v53a16,16,0,0,1-32,0V192A16,16,0,0,1,192,176Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M48,256c0,114.69,93.31,208,208,208s208-93.31,208-208S370.69,48,256,48,48,141.31,48,256Zm128-80h32v69l128-77.53V344.37L208,267v69H176Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M48,256c0,114.69,93.31,208,208,208s208-93.31,208-208S370.69,48,256,48,48,141.31,48,256Zm128-64a16,16,0,0,1,32,0v53l111.68-67.46A10.78,10.78,0,0,1,336,186.87V325.13a10.78,10.78,0,0,1-16.32,9.31L208,267v53a16,16,0,0,1-32,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M400,111V401c0,17.44-17,28.52-31,20.16L121.09,272.79c-12.12-7.25-12.12-26.33,0-33.58L369,90.84C383,82.48,400,93.56,400,111Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="112" y1="80" x2="112" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polygon points="143.47 64 143.47 227.52 416 64 416 448 143.47 284.48 143.47 448 96 448 96 64 143.47 64" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M112,64a16,16,0,0,1,16,16V216.43L360.77,77.11a35.13,35.13,0,0,1,35.77-.44c12,6.8,19.46,20,19.46,34.33V401c0,14.37-7.46,27.53-19.46,34.33a35.14,35.14,0,0,1-35.77-.45L128,295.57V432a16,16,0,0,1-32,0V80A16,16,0,0,1,112,64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M320,176a16,16,0,0,0-16,16v53L192.32,177.56A10.78,10.78,0,0,0,176,186.87V325.13a10.78,10.78,0,0,0,16.32,9.31L304,267v53a16,16,0,0,0,32,0V192A16,16,0,0,0,320,176Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,288H304V267L176,344.37V167.49L304,245V176h32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,272a16,16,0,0,1-32,0V267L192.32,334.44A10.78,10.78,0,0,1,176,325.13V186.87a10.78,10.78,0,0,1,16.32-9.31L304,245V192a16,16,0,0,1,32,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="400" y1="80" x2="400" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polygon points="368.53 64 368.53 227.52 96 64 96 448 368.53 284.48 368.53 448 416 448 416 64 368.53 64" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M400,64a16,16,0,0,0-16,16V216.43L151.23,77.11a35.13,35.13,0,0,0-35.77-.44C103.46,83.47,96,96.63,96,111V401c0,14.37,7.46,27.53,19.46,34.33a35.14,35.14,0,0,0,35.77-.45L384,295.57V432a16,16,0,0,0,32,0V80A16,16,0,0,0,400,64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M32,160V456a8,8,0,0,0,8,8H176V160a16,16,0,0,0-16-16H48A16,16,0,0,0,32,160Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,48H192a16,16,0,0,0-16,16V464H336V64A16,16,0,0,0,320,48Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M464,208H352a16,16,0,0,0-16,16V464H472a8,8,0,0,0,8-8V224A16,16,0,0,0,464,208Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <rect x="160" y="32" width="192" height="448" />
      <rect x="384" y="192" width="112" height="288" />
      <rect x="16" y="128" width="112" height="352" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M320,32H192a32,32,0,0,0-32,32V476a4,4,0,0,0,4,4H348a4,4,0,0,0,4-4V64A32,32,0,0,0,320,32Z" />
      <path d="M464,192H392a8,8,0,0,0-8,8V472a8,8,0,0,0,8,8h80a24,24,0,0,0,24-24V224A32,32,0,0,0,464,192Z" />
      <path d="M48,128a32,32,0,0,0-32,32V456a24,24,0,0,0,24,24h80a8,8,0,0,0,8-8V136a8,8,0,0,0-8-8Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M378,108a191.41,191.41,0,0,1,70,148c0,106-86,192-192,192S64,362,64,256a192,192,0,0,1,69-148" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="64" x2="256" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M256,464C141.31,464,48,370.77,48,256.18A207.44,207.44,0,0,1,122.76,96.05l16.9-14,28.17,33.72-16.9,14A163.72,163.72,0,0,0,92,256.18c0,90.39,73.57,163.93,164,163.93s164-73.54,164-163.93a163.38,163.38,0,0,0-59.83-126.36l-17-14,28-33.82,17,14A207.13,207.13,0,0,1,464,256.18C464,370.77,370.69,464,256,464Z" />
      <rect x="234" y="48" width="44" height="224" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M256,464C141.31,464,48,370.53,48,255.65c0-62.45,27.25-121,74.76-160.55a22,22,0,1,1,28.17,33.8C113.48,160.1,92,206.3,92,255.65,92,346.27,165.57,420,256,420s164-73.73,164-164.35A164,164,0,0,0,360.17,129a22,22,0,1,1,28-33.92A207.88,207.88,0,0,1,464,255.65C464,370.53,370.69,464,256,464Z" />
      <path d="M256,272a22,22,0,0,1-22-22V70a22,22,0,0,1,44,0V250A22,22,0,0,1,256,272Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M435.25,48H312.35a14.46,14.46,0,0,0-10.2,4.2L56.45,297.9a28.85,28.85,0,0,0,0,40.7l117,117a28.85,28.85,0,0,0,40.7,0L459.75,210a14.46,14.46,0,0,0,4.2-10.2V76.8A28.66,28.66,0,0,0,435.25,48Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384,160a32,32,0,1,1,32-32A32,32,0,0,1,384,160Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M304,32,16,320,192,496,480,208V32Zm80,128a32,32,0,1,1,32-32A32,32,0,0,1,384,160Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M467,45.2A44.45,44.45,0,0,0,435.29,32H312.36a30.63,30.63,0,0,0-21.52,8.89L45.09,286.59a44.82,44.82,0,0,0,0,63.32l117,117a44.83,44.83,0,0,0,63.34,0l245.65-245.6A30.6,30.6,0,0,0,480,199.8v-123A44.24,44.24,0,0,0,467,45.2ZM384,160a32,32,0,1,1,32-32A32,32,0,0,1,384,160Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M403.29,32H280.36a14.46,14.46,0,0,0-10.2,4.2L24.4,281.9a28.85,28.85,0,0,0,0,40.7l117,117a28.86,28.86,0,0,0,40.71,0L427.8,194a14.46,14.46,0,0,0,4.2-10.2V60.8A28.66,28.66,0,0,0,403.29,32Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M352,144a32,32,0,1,1,32-32A32,32,0,0,1,352,144Z" />
      <path d="M230,480,492,218a13.81,13.81,0,0,0,4-10V80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M288,16,0,304,176,480,464,192V16Zm80,128a32,32,0,1,1,32-32A32,32,0,0,1,368,144Z" />
      <polygon points="480 64 480 208 216.9 471.1 242 496 512 224 512 64 480 64" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M448,183.8v-123A44.66,44.66,0,0,0,403.29,16H280.36a30.62,30.62,0,0,0-21.51,8.89L13.09,270.58a44.86,44.86,0,0,0,0,63.34l117,117a44.84,44.84,0,0,0,63.33,0L439.11,205.31A30.6,30.6,0,0,0,448,183.8ZM352,144a32,32,0,1,1,32-32A32,32,0,0,1,352,144Z" />
      <path d="M496,64a16,16,0,0,0-16,16V207.37L218.69,468.69a16,16,0,1,0,22.62,22.62l262-262A29.84,29.84,0,0,0,512,208V80A16,16,0,0,0,496,64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M384,368h24a40.12,40.12,0,0,0,40-40V168a40.12,40.12,0,0,0-40-40H104a40.12,40.12,0,0,0-40,40V328a40.12,40.12,0,0,0,40,40h24" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="128" y="240" width="256" height="208" rx="24.32" ry="24.32" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384,128V104a40.12,40.12,0,0,0-40-40H168a40.12,40.12,0,0,0-40,40v24" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="392" cy="184" r="24" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M400,96V56a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8V96" />
      <rect x="152" y="264" width="208" height="160" rx="4" ry="4" style="fill:none" />
      <rect x="152" y="264" width="208" height="160" rx="4" ry="4" style="fill:none" />
      <path d="M408,112H104a56,56,0,0,0-56,56V376a8,8,0,0,0,8,8h56v72a8,8,0,0,0,8,8H392a8,8,0,0,0,8-8V384h56a8,8,0,0,0,8-8V168A56,56,0,0,0,408,112ZM360,420a4,4,0,0,1-4,4H156a4,4,0,0,1-4-4V268a4,4,0,0,1,4-4H356a4,4,0,0,1,4,4ZM394,207.92a24,24,0,1,1,22-22A24,24,0,0,1,394,207.92Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M408,112H106a58,58,0,0,0-58,58V328a56,56,0,0,0,56,56h8v39.68A40.32,40.32,0,0,0,152.32,464H359.68A40.32,40.32,0,0,0,400,423.68V384h8a56,56,0,0,0,56-56V168A56,56,0,0,0,408,112ZM368,423.68a8.35,8.35,0,0,1-8.32,8.32H152.32a8.35,8.35,0,0,1-8.32-8.32V264.32a8.35,8.35,0,0,1,8.32-8.32H359.68a8.35,8.35,0,0,1,8.32,8.32ZM394,207.92a24,24,0,1,1,22-22A24,24,0,0,1,394,207.92Z" />
      <path d="M344,48H168a56.09,56.09,0,0,0-55.42,48H399.42A56.09,56.09,0,0,0,344,48Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M229.73,45.88,37.53,327.79a31.79,31.79,0,0,0,11.31,46L241,476.26a31.77,31.77,0,0,0,29.92,0l192.2-102.51a31.79,31.79,0,0,0,11.31-46L282.27,45.88A31.8,31.8,0,0,0,229.73,45.88Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <line x1="256" y1="32" x2="256" y2="480" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256,16,16,352,256,496,496,352Zm-20,96.82V437.35L73.73,340Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M487.83,319.44,295.63,36.88a48,48,0,0,0-79.26,0L24.17,319.44A47.1,47.1,0,0,0,41.1,387.57L233.3,490.32a48.05,48.05,0,0,0,45.4,0L470.9,387.57a47.1,47.1,0,0,0,16.93-68.13Zm-431.26,41a16.12,16.12,0,0,1-8-10.38,16.8,16.8,0,0,1,2.37-13.62L232.66,69.26c2.18-3.21,7.34-1.72,7.34,2.13v374c0,5.9-6.54,9.63-11.87,6.78Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <polyline points="48 320 112 320 176 64 240 448 304 224 336 320 400 320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="432" cy="320" r="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M426,266a54.07,54.07,0,0,0-49.3,32H351.86l-27-81a22,22,0,0,0-42,.92L245.66,348.12l-48-281.74a22,22,0,0,0-43-1.72L94.82,298H32v44h80a22,22,0,0,0,21.34-16.66L171.69,172,218.3,445.62A22,22,0,0,0,238.76,464c.42,0,.82,0,1.24,0a22,22,0,0,0,21.15-16l44.47-149.62L315.13,327A22,22,0,0,0,336,342h40.7A54,54,0,1,0,426,266Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M432,272a48.09,48.09,0,0,0-45.25,32H347.53l-28.35-85.06a16,16,0,0,0-30.56.66L244.11,375.36l-52.33-314a16,16,0,0,0-31.3-1.25L99.51,304H48a16,16,0,0,0,0,32h64a16,16,0,0,0,15.52-12.12l45.34-181.37,51.36,308.12A16,16,0,0,0,239.1,464c.3,0,.6,0,.91,0a16,16,0,0,0,15.37-11.6l49.8-174.28,15.64,46.94A16,16,0,0,0,336,336h50.75A48,48,0,1,0,432,272Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M336,336h40a40,40,0,0,0,40-40V88a40,40,0,0,0-40-40H136A40,40,0,0,0,96,88V296a40,40,0,0,0,40,40h40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="176 240 256 160 336 240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="464" x2="256" y2="176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M272,352V204.63l64,64L358.63,246,256,143.37,153.37,246,176,268.63l64-64V352H92a12,12,0,0,1-12-12V44A12,12,0,0,1,92,32H420a12,12,0,0,1,12,12V340a12,12,0,0,1-12,12Z" />
      <rect x="240" y="352" width="32" height="128" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M376,352H272V198.63l52.69,52.68a16,16,0,0,0,22.62-22.62l-80-80a16,16,0,0,0-22.62,0l-80,80a16,16,0,0,0,22.62,22.62L240,198.63V352H136a56.06,56.06,0,0,1-56-56V88a56.06,56.06,0,0,1,56-56H376a56.06,56.06,0,0,1,56,56V296A56.06,56.06,0,0,1,376,352Z" />
      <path d="M272,464a16,16,0,0,1-32,0V352h32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <rect x="336" y="336" width="80" height="80" rx="8" ry="8" />
      <rect x="272" y="272" width="64" height="64" rx="8" ry="8" />
      <rect x="416" y="416" width="64" height="64" rx="8" ry="8" />
      <rect x="432" y="272" width="48" height="48" rx="8" ry="8" />
      <rect x="272" y="432" width="48" height="48" rx="8" ry="8" />
      <rect x="336" y="96" width="80" height="80" rx="8" ry="8" />
      <rect x="288" y="48" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="96" y="96" width="80" height="80" rx="8" ry="8" />
      <rect x="48" y="48" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="96" y="336" width="80" height="80" rx="8" ry="8" />
      <rect x="48" y="288" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <rect x="336" y="336" width="80" height="80" />
      <rect x="272" y="272" width="64" height="64" />
      <rect x="416" y="416" width="64" height="64" />
      <rect x="432" y="272" width="48" height="48" />
      <rect x="272" y="432" width="48" height="48" />
      <rect x="336" y="96" width="80" height="80" />
      <path d="M480,240H272V32H480ZM316,196H436V76H316Z" />
      <rect x="96" y="96" width="80" height="80" />
      <path d="M240,240H32V32H240ZM76,196H196V76H76Z" />
      <rect x="96" y="336" width="80" height="80" />
      <path d="M240,480H32V272H240ZM76,436H196V316H76Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <rect x="336" y="336" width="80" height="80" rx="8" ry="8" />
      <rect x="272" y="272" width="64" height="64" rx="8" ry="8" />
      <rect x="416" y="416" width="64" height="64" rx="8" ry="8" />
      <rect x="432" y="272" width="48" height="48" rx="8" ry="8" />
      <rect x="272" y="432" width="48" height="48" rx="8" ry="8" />
      <path d="M448,32H304a32,32,0,0,0-32,32V208a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32V64A32,32,0,0,0,448,32ZM416,168a8,8,0,0,1-8,8H344a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8Z" />
      <path d="M208,32H64A32,32,0,0,0,32,64V208a32,32,0,0,0,32,32H208a32,32,0,0,0,32-32V64A32,32,0,0,0,208,32ZM176,168a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8Z" />
      <path d="M208,272H64a32,32,0,0,0-32,32V448a32,32,0,0,0,32,32H208a32,32,0,0,0,32-32V304A32,32,0,0,0,208,272ZM176,408a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V344a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="256" r="144" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="256" r="144" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="256" r="144" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <circle cx="256" cy="256.02" r="32" />
      <path d="M184.25,192.25a96,96,0,0,0,0,127.52" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M327.77,319.77a96,96,0,0,0,0-127.52" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M133.28,141.28a168,168,0,0,0,0,229.44" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M378.72,370.72a168,168,0,0,0,0-229.44" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M435,416a240.34,240.34,0,0,0,0-320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M77,96a240.34,240.34,0,0,0,0,320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <ellipse cx="256" cy="256" rx="36" ry="35.99" />
      <path d="M188.4,350.8l-14.62-16.44a117.91,117.91,0,0,1,0-156.71l14.62-16.43,32.87,29.24-14.62,16.43a73.93,73.93,0,0,0,0,98.25l14.62,16.44Z" />
      <path d="M323.6,350.8l-32.89-29.22,14.62-16.44a73.93,73.93,0,0,0,0-98.25l-14.62-16.43,32.87-29.24,14.62,16.43a117.91,117.91,0,0,1,0,156.71Z" />
      <path d="M138.24,401.76l-15-16.06a189.85,189.85,0,0,1,0-259.4l15-16.07,32.14,30.05-15,16.06a145.88,145.88,0,0,0,0,199.32l15,16.06Z" />
      <path d="M373.76,401.76l-32.14-30,15-16.06a145.88,145.88,0,0,0,0-199.32l-15-16.06,32.14-30,15,16.07a189.85,189.85,0,0,1,0,259.4Z" />
      <path d="M430.73,447l-32.79-29.33,14.66-16.39a218.2,218.2,0,0,0,0-290.56L397.93,94.34,430.72,65l14.67,16.39a262.18,262.18,0,0,1,0,349.22Z" />
      <path d="M81.27,447,66.6,430.61a262.18,262.18,0,0,1,0-349.22L81.28,65l32.79,29.34L99.39,110.72a218.2,218.2,0,0,0,0,290.56l14.66,16.39Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <circle cx="256" cy="256" r="36" />
      <path d="M190.24,341.77a22,22,0,0,1-16.46-7.38,118,118,0,0,1,0-156.76,22,22,0,1,1,32.87,29.24,74,74,0,0,0,0,98.29,22,22,0,0,1-16.43,36.61Z" />
      <path d="M321.76,341.77a22,22,0,0,1-16.43-36.61,74,74,0,0,0,0-98.29,22,22,0,1,1,32.87-29.24,118,118,0,0,1,0,156.76A22,22,0,0,1,321.76,341.77Z" />
      <path d="M139.29,392.72a21.92,21.92,0,0,1-16.08-7,190,190,0,0,1,0-259.49,22,22,0,1,1,32.13,30.06,146,146,0,0,0,0,199.38,22,22,0,0,1-16.06,37Z" />
      <path d="M372.71,392.72a22,22,0,0,1-16.06-37,146,146,0,0,0,0-199.38,22,22,0,1,1,32.13-30.06,190,190,0,0,1,0,259.49A21.92,21.92,0,0,1,372.71,392.72Z" />
      <path d="M429,438a22,22,0,0,1-16.39-36.67,218.34,218.34,0,0,0,0-290.66,22,22,0,0,1,32.78-29.34,262.34,262.34,0,0,1,0,349.34A22,22,0,0,1,429,438Z" />
      <path d="M83,438a21.94,21.94,0,0,1-16.41-7.33,262.34,262.34,0,0,1,0-349.34,22,22,0,0,1,32.78,29.34,218.34,218.34,0,0,0,0,290.66A22,22,0,0,1,83,438Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M114.61,162.85A16.07,16.07,0,0,0,128,149.6C140.09,76.17,193.63,32,256,32c57.93,0,96.62,37.75,112.2,77.74a15.84,15.84,0,0,0,12.2,9.87c50,8.15,91.6,41.54,91.6,99.59C472,278.6,423.4,320,364,320H130c-49.5,0-90-24.7-90-79.2C40,192.33,78.67,168.58,114.61,162.85Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="144" y1="384" x2="112" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="224" y1="384" x2="160" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="304" y1="384" x2="272" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="384" y1="384" x2="320" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M364,336H130c-29.5,0-54.92-7.83-73.53-22.64C35.23,296.44,24,271.35,24,240.8c0-26.66,10.08-49.8,29.14-66.91,15.24-13.68,36.17-23.21,59-26.84h0c.06,0,.08,0,.09-.05,6.44-39,23.83-72.09,50.31-95.68A140.24,140.24,0,0,1,256,16c30.23,0,58.48,9.39,81.71,27.17a142.69,142.69,0,0,1,45.36,60.66c29.41,4.82,54.72,17.11,73.19,35.54C477,160.11,488,187.71,488,219.2c0,32.85-13.13,62.87-37,84.52C428.11,324.54,397.2,336,364,336Zm19-232.18Z" />
      <rect x="87.16" y="386" width="89.69" height="32" transform="translate(-275.7 288.83) rotate(-56.31)" />
      <rect x="122.31" y="410" width="147.38" height="32" transform="translate(-267.17 352.77) rotate(-56.31)" />
      <rect x="247.16" y="386" width="89.69" height="32" transform="translate(-204.46 421.96) rotate(-56.31)" />
      <rect x="282.31" y="410" width="147.38" height="32" transform="translate(-195.93 485.9) rotate(-56.31)" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M456.26,139.37c-16.77-16.73-39.17-28.41-65.17-34a16,16,0,0,1-11.19-9,142.24,142.24,0,0,0-42.19-53.21C314.48,25.39,286.23,16,256,16a140.24,140.24,0,0,0-93.5,35.32c-24.2,21.56-40.91,51.34-48.43,85.83a16.05,16.05,0,0,1-11.72,12.18c-25,6.3-35.71,12.54-49.21,24.56C34,190.93,24,214.14,24,240.8c0,30.55,11.23,55.64,32.47,72.56C75.08,328.17,100.5,336,130,336H364c33.2,0,64.11-11.46,87-32.28,23.84-21.65,37-51.67,37-84.52C488,187.71,477,160.11,456.26,139.37Z" />
      <path d="M112,448a16,16,0,0,1-13.3-24.88l32-48a16,16,0,0,1,26.62,17.76l-32,48A16,16,0,0,1,112,448Z" />
      <path d="M160,496a16,16,0,0,1-13.29-24.88l64-96a16,16,0,0,1,26.62,17.76l-64,96A16,16,0,0,1,160,496Z" />
      <path d="M272,448a16,16,0,0,1-13.3-24.88l32-48a16,16,0,0,1,26.62,17.76l-32,48A16,16,0,0,1,272,448Z" />
      <path d="M320,496a16,16,0,0,1-13.3-24.88l64-96a16,16,0,0,1,26.62,17.76l-64,96A16,16,0,0,1,320,496Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="96" y="48" width="320" height="416" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="128" x2="336" y2="128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="208" x2="336" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="288" x2="256" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M80,44V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V44a12,12,0,0,0-12-12H92A12,12,0,0,0,80,44ZM272,304H160V272H272Zm80-80H160V192H352Zm0-80H160V112H352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M368,32H144A64.07,64.07,0,0,0,80,96V416a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V96A64.07,64.07,0,0,0,368,32ZM256,304H176a16,16,0,0,1,0-32h80a16,16,0,0,1,0,32Zm80-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Zm0-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="160 336 160 48 192 64 224 48 255.94 64 288.31 48 320 64 351.79 48 383.72 64 416 48 448.01 64 480 48 480 272" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M480,272V384a80,80,0,0,1-80,80h0a80,80,0,0,1-80-80V336H48a15.86,15.86,0,0,0-16,16c0,64,6.74,112,80,112H400" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="224" y1="144" x2="416" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="288" y1="224" x2="416" y2="224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M448,48,416,32,384,48,352,32,320,48,288,32,256,48,224,32,192,48,144,32V288s0,.05,0,.05H368V424c0,30.93,33.07,56,64,56h12c30.93,0,52-25.07,52-56V32ZM272.5,240l-.5-32H431.5l.5,32Zm-64-80-.5-32H431.5l.5,32Z" />
      <path d="M336,424V320H16v32c0,50.55,5.78,71.62,14.46,87.63C45.19,466.8,71.86,480,112,480H368S336,460,336,424Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M483.82,32.45a16.28,16.28,0,0,0-11.23,1.37L448,46.1h0l-24.8-12.4a16,16,0,0,0-14.31,0L383.78,46.11h0L359,33.7a16,16,0,0,0-14.36,0L320,46.07H320L295.55,33.73a16,16,0,0,0-14.35-.06L256,46.12h0l-24.8-12.43a16.05,16.05,0,0,0-14.33,0L192,46.1h0L167.16,33.69a16,16,0,0,0-19.36,3.94A16.25,16.25,0,0,0,144,48.28V288a0,0,0,0,0,.05.05H336a32,32,0,0,1,32,32V424c0,30.93,33.07,56,64,56h12a52,52,0,0,0,52-52V48A16,16,0,0,0,483.82,32.45ZM416,240H288.5c-8.64,0-16.1-6.64-16.48-15.28A16,16,0,0,1,288,208H415.5c8.64,0,16.1,6.64,16.48,15.28A16,16,0,0,1,416,240Zm0-80H224.5c-8.64,0-16.1-6.64-16.48-15.28A16,16,0,0,1,224,128H415.5c8.64,0,16.1,6.64,16.48,15.28A16,16,0,0,1,416,160Z" />
      <path d="M336,424V336a16,16,0,0,0-16-16H48a32.1,32.1,0,0,0-32,32.05c0,50.55,5.78,71.57,14.46,87.57C45.19,466.79,71.86,480,112,480H357.68a4,4,0,0,0,2.85-6.81C351.07,463.7,336,451,336,424Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <circle cx="128" cy="256" r="96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="384" cy="256" r="96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="128" y1="352" x2="384" y2="352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M384,138a117.93,117.93,0,0,0-91.84,192H219.84A118,118,0,1,0,128,374H384a118,118,0,0,0,0-236ZM54,256a74,74,0,1,1,74,74A74.09,74.09,0,0,1,54,256Zm330,74a74,74,0,1,1,74-74A74.09,74.09,0,0,1,384,330Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M380.79,144.05C321.69,145.7,273.67,193.76,272,252.86a111.64,111.64,0,0,0,30.36,79.77A2,2,0,0,1,301,336H211a2,2,0,0,1-1.44-3.37A111.64,111.64,0,0,0,240,252.86c-1.63-59.1-49.65-107.16-108.75-108.81A112.12,112.12,0,0,0,16,255.53C15.75,317.77,67,368,129.24,368H382.76C445,368,496.25,317.77,496,255.53A112.12,112.12,0,0,0,380.79,144.05Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M288,193s12.18-6-32-6a80,80,0,1,0,80,80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:28px" />
      <polyline points="256 149 296 189 256 229" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:28px" />
      <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.31,48,48,141.32,48,256c0,114.86,93.14,208,208,208,114.69,0,208-93.31,208-208C464,141.13,370.87,48,256,48Zm94,219a94,94,0,1,1-94-94h4.21l-24-24L256,129.2,315.8,189,256,248.8,236.2,229l27.92-27.92C261.72,201,259,201,256,201a66,66,0,1,0,66,66V253h28Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.31,48,48,141.32,48,256c0,114.86,93.14,208,208,208,114.69,0,208-93.31,208-208C464,141.13,370.87,48,256,48Zm0,313a94,94,0,0,1,0-188h4.21L246.1,158.9a14,14,0,0,1,19.8-19.8l40,40a14,14,0,0,1,0,19.8l-40,40a14,14,0,0,1-19.8-19.8l18-18C261.72,201,259,201,256,201a66,66,0,1,0,66,66,14,14,0,0,1,28,0A94.11,94.11,0,0,1,256,361Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M320,146s24.36-12-64-12A160,160,0,1,0,416,294" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="256 58 336 138 256 218" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M320,146s24.36-12-64-12A160,160,0,1,0,416,294" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="256 58 336 138 256 218" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M320,146s24.36-12-64-12A160,160,0,1,0,416,294" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="256 58 336 138 256 218" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M341.54,197.85l-11.37-13.23a103.37,103.37,0,1,0,22.71,105.84" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M367.32,162a8.44,8.44,0,0,0-6,2.54l-59.54,59.54a8.61,8.61,0,0,0,6.09,14.71h59.54a8.62,8.62,0,0,0,8.62-8.62V170.61a8.61,8.61,0,0,0-8.68-8.63Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM376,238.77H287l36.88-36.88-5.6-6.51a87.38,87.38,0,1,0-62.94,148,87.55,87.55,0,0,0,82.42-58.25L343.13,270l30.17,10.67L368,295.8A119.4,119.4,0,1,1,255.38,136.62a118.34,118.34,0,0,1,86.36,36.95l.56.62,4.31,5L376,149.81Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM376,230.15a8.62,8.62,0,0,1-8.62,8.62H307.84a8.61,8.61,0,0,1-6.09-14.71l22.17-22.17-5.6-6.51a87.38,87.38,0,1,0-62.94,148,87.55,87.55,0,0,0,82.42-58.25A16,16,0,1,1,368,295.8,119.4,119.4,0,1,1,255.38,136.62a118.34,118.34,0,0,1,86.36,36.95l.56.62,4.31,5,14.68-14.68a8.44,8.44,0,0,1,6-2.54,8.61,8.61,0,0,1,8.68,8.63Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M400,148l-21.12-24.57A191.43,191.43,0,0,0,240,64C134,64,48,150,48,256s86,192,192,192A192.09,192.09,0,0,0,421.07,320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M464,97.42V208a16,16,0,0,1-16,16H337.42c-14.26,0-21.4-17.23-11.32-27.31L436.69,86.1C446.77,76,464,83.16,464,97.42Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M400,148l-21.12-24.57A191.43,191.43,0,0,0,240,64C134,64,48,150,48,256s86,192,192,192A192.09,192.09,0,0,0,421.07,320" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M464,68.45V220a4,4,0,0,1-4,4H308.45a4,4,0,0,1-2.83-6.83L457.17,65.62A4,4,0,0,1,464,68.45Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M400,148l-21.12-24.57A191.43,191.43,0,0,0,240,64C134,64,48,150,48,256s86,192,192,192A192.09,192.09,0,0,0,421.07,320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M464,97.42V208a16,16,0,0,1-16,16H337.42c-14.26,0-21.4-17.23-11.32-27.31L436.69,86.1C446.77,76,464,83.16,464,97.42Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="336" y1="256" x2="176" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm96,224H160V240H352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,224H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <line x1="400" y1="256" x2="112" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <line x1="400" y1="256" x2="112" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <line x1="400" y1="256" x2="112" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <line x1="96" y1="304" x2="416" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="96" y1="208" x2="416" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="96" y1="112" x2="416" y2="112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="96" y1="400" x2="416" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <line x1="102" y1="304" x2="410" y2="304" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" />
      <line x1="102" y1="208" x2="410" y2="208" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" />
      <line x1="102" y1="112" x2="410" y2="112" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" />
      <line x1="102" y1="400" x2="410" y2="400" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <line x1="102" y1="304" x2="410" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <line x1="102" y1="208" x2="410" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <line x1="102" y1="112" x2="410" y2="112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <line x1="102" y1="400" x2="410" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <line x1="96" y1="256" x2="416" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="96" y1="176" x2="416" y2="176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="96" y1="336" x2="416" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <line x1="102" y1="256" x2="410" y2="256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" />
      <line x1="102" y1="176" x2="410" y2="176" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" />
      <line x1="102" y1="336" x2="410" y2="336" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <line x1="102" y1="256" x2="410" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <line x1="102" y1="176" x2="410" y2="176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <line x1="102" y1="336" x2="410" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <line x1="112" y1="304" x2="400" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="208" x2="400" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <line x1="118" y1="304" x2="394" y2="304" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" />
      <line x1="118" y1="208" x2="394" y2="208" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <line x1="118" y1="304" x2="394" y2="304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <line x1="118" y1="208" x2="394" y2="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="320 120 368 168 320 216" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M352,168H144a80.24,80.24,0,0,0-80,80v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="192 392 144 344 192 296" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M160,344H368a80.24,80.24,0,0,0,80-80V248" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="320 120 368 168 320 216" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="352 168 64 168 64 264" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="192 392 144 344 192 296" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="160 344 448 344 448 248" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="320 120 368 168 320 216" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M352,168H144a80.24,80.24,0,0,0-80,80v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="192 392 144 344 192 296" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M160,344H368a80.24,80.24,0,0,0,80-80V248" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="304 96 416 96 416 208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="405.77" y1="106.2" x2="111.98" y2="400.02" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="208 416 96 416 96 304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="304 96 416 96 416 208" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="405.77" y1="106.2" x2="111.98" y2="400.02" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="208 416 96 416 96 304" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="304 96 416 96 416 208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="405.77" y1="106.2" x2="111.98" y2="400.02" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="208 416 96 416 96 304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M57.49,47.74,425.92,416.17a37.28,37.28,0,0,1,0,52.72h0a37.29,37.29,0,0,1-52.72,0l-90-91.55A32,32,0,0,1,274,354.91v-5.53a32,32,0,0,0-9.52-22.78l-11.62-10.73a32,32,0,0,0-29.8-7.44h0A48.53,48.53,0,0,1,176.5,295.8L91.07,210.36C40.39,159.68,21.74,83.15,57.49,47.74Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M400,32l-77.25,77.25A64,64,0,0,0,304,154.51v14.86a16,16,0,0,1-4.69,11.32L288,192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,224l11.31-11.31A16,16,0,0,1,342.63,208h14.86a64,64,0,0,0,45.26-18.75L480,112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="440" y1="72" x2="360" y2="152" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M200,368,100.28,468.28a40,40,0,0,1-56.56,0h0a40,40,0,0,1,0-56.56L128,328" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M342.7,223.94h14.87a79.48,79.48,0,0,0,56.58-23.44L496,118,473.78,95.6,390.2,179.18l-17.37-17.37,83.58-83.59-23-22.31-83.27,83.26L332.82,121.8,416.4,38.21,394,16,311.5,97.85a79.49,79.49,0,0,0-23.44,56.59V169.3l-43.13,43.13L48,16C3.72,70.87,29.87,171.71,79.72,221.57l85.5,85.5c26.55,26.55,31.82,28.92,61.94,16.8,6.49-2.61,8.85-2.32,14.9,3.72l13,12.13c2.93,3,3,3.88,3,9.62v5.54c0,21.08,13.48,33.2,22.36,42.24L384,496l72-72L299.57,267.07Z" />
      <path d="M227.37,354.59c-29.82,6.11-48.11,11.74-83.08-23.23-.56-.56-1.14-1.1-1.7-1.66l-19.5-19.5L16,416l80,80L240,352Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M357.57,223.94a79.48,79.48,0,0,0,56.58-23.44l77-76.95c6.09-6.09,6.65-16,.85-22.39a16,16,0,0,0-23.17-.56L400.2,169.18a12.29,12.29,0,0,1-17.37,0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16,16,0,0,0-.56-23.16A15.62,15.62,0,0,0,440.27,56a16.71,16.71,0,0,0-11.81,4.9l-68.27,68.26a12.29,12.29,0,0,1-17.37,0c-4.78-4.78-4.53-12.86.25-17.64L411.4,43.21a16,16,0,0,0-.56-23.16A15.62,15.62,0,0,0,400.26,16a16.73,16.73,0,0,0-11.81,4.9L311.5,97.85a79.49,79.49,0,0,0-23.44,56.59v8.23A16,16,0,0,1,283.37,174l-35.61,35.62a4,4,0,0,1-5.66,0L68.82,36.33a16,16,0,0,0-22.58-.06C31.09,51.28,23,72.47,23,97.54c-.1,41.4,21.66,89,56.79,124.08l85.45,85.45A64.79,64.79,0,0,0,211,326a64,64,0,0,0,16.21-2.08,16.24,16.24,0,0,1,4.07-.53,15.93,15.93,0,0,1,10.83,4.25l11.39,10.52a16.12,16.12,0,0,1,4.6,11.23v5.54a47.73,47.73,0,0,0,13.77,33.65l90.05,91.57.09.1a53.29,53.29,0,0,0,75.36-75.37L302.39,269.9a4,4,0,0,1,0-5.66L338,228.63a16,16,0,0,1,11.32-4.69Z" />
      <path d="M211,358a97.32,97.32,0,0,1-68.36-28.25l-13.86-13.86a8,8,0,0,0-11.3,0l-85,84.56c-15.15,15.15-20.56,37.45-13.06,59.29a30.63,30.63,0,0,0,1.49,3.6C31,484,50.58,496,72,496a55.68,55.68,0,0,0,39.64-16.44L225,365.66a4.69,4.69,0,0,0,1.32-3.72l0-.26a4.63,4.63,0,0,0-5.15-4.27A97.09,97.09,0,0,1,211,358Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="112 352 48 288 112 224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,288H358c58.76,0,106-49.33,106-108V160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="112 352 48 288 112 224" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="64 288 464 288 464 160" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="112 352 48 288 112 224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,288H358c58.76,0,106-49.33,106-108V160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="400 352 464 288 400 224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M448,288H154C95.24,288,48,238.67,48,180V160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="400 352 464 288 400 224" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="448 288 48 288 48 160" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="400 352 464 288 400 224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M448,288H154C95.24,288,48,238.67,48,180V160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="112 160 48 224 112 288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,224H358c58.76,0,106,49.33,106,108v20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="112 160 48 224 112 288" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="64 224 464 224 464 352" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="112 160 48 224 112 288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,224H358c58.76,0,106,49.33,106,108v20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="400 160 464 224 400 288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M448,224H154C95.24,224,48,273.33,48,332v20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="400 160 464 224 400 288" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="448 224 48 224 48 352" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="400 160 464 224 400 288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M448,224H154C95.24,224,48,273.33,48,332v20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <circle cx="256" cy="160" r="128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M143.65,227.82,48,400l86.86-.42a16,16,0,0,1,13.82,7.8L192,480l88.33-194.32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M366.54,224,464,400l-86.86-.42a16,16,0,0,0-13.82,7.8L320,480,256,339.2" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="256" cy="160" r="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M256,336c-5.22,0-10.4-.24-15.51-.69A176.12,176.12,0,0,1,109.2,256.94L20,416H135l58,96,82.53-177.09A177.53,177.53,0,0,1,256,336Z" />
      <path d="M403,256.74a176.9,176.9,0,0,1-88.18,69.14L273.7,415.5,319,512l58-96H492Z" />
      <circle cx="256.02" cy="160" r="48" />
      <path d="M256,16c-79.4,0-144,64.6-144,144s64.6,144,144,144,144-64.6,144-144S335.4,16,256,16Zm0,224a80,80,0,1,1,80-80A80.09,80.09,0,0,1,256,240Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M269,335.61q-6.33.47-12.78.47c-5.23,0-10.4-.24-15.51-.69a176.11,176.11,0,0,1-127.67-72.94,4,4,0,0,0-6.77.35l-72,129.4c-2.74,5-3.17,11-.28,15.88A16.78,16.78,0,0,0,48.22,416h78a15.28,15.28,0,0,1,13.62,7.33L178.5,488a16.26,16.26,0,0,0,13.75,8h0c5.94-.33,12.09-4.19,14.56-9.6l66.11-145.15A4,4,0,0,0,269,335.61Z" />
      <path d="M477.64,391.88,406.11,262.71a4,4,0,0,0-6.74-.36,176.5,176.5,0,0,1-78.31,61.42,16.09,16.09,0,0,0-8.72,8.25l-36.86,81.1a7.92,7.92,0,0,0,0,6.6l30.27,66.59c2.45,5.41,8.59,9.36,14.52,9.69h0a16.3,16.3,0,0,0,13.7-8.12L372.5,423.3c2.89-4.85,8.13-7.33,13.78-7.3h78.77c6.67,0,11.72-3.48,14-10A16.92,16.92,0,0,0,477.64,391.88Z" />
      <ellipse cx="256.26" cy="160" rx="48.01" ry="48" />
      <path d="M256.26,16c-79.42,0-144,64.59-144,144s64.61,144,144,144,144-64.6,144-144S335.67,16,256.26,16Zm0,224a80,80,0,1,1,80-80A80.1,80.1,0,0,1,256.26,240Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M477.64,38.26a4.75,4.75,0,0,0-3.55-3.66c-58.57-14.32-193.9,36.71-267.22,110a317,317,0,0,0-35.63,42.1c-22.61-2-45.22-.33-64.49,8.07C52.38,218.7,36.55,281.14,32.14,308a9.64,9.64,0,0,0,10.55,11.2L130,309.57a194.1,194.1,0,0,0,1.19,19.7,19.53,19.53,0,0,0,5.7,12L170.7,375a19.59,19.59,0,0,0,12,5.7,193.53,193.53,0,0,0,19.59,1.19l-9.58,87.2a9.65,9.65,0,0,0,11.2,10.55c26.81-4.3,89.36-20.13,113.15-74.5,8.4-19.27,10.12-41.77,8.18-64.27a317.66,317.66,0,0,0,42.21-35.64C441,232.05,491.74,99.74,477.64,38.26ZM294.07,217.93a48,48,0,1,1,67.86,0A47.95,47.95,0,0,1,294.07,217.93Z" />
      <path d="M168.4,399.43c-5.48,5.49-14.27,7.63-24.85,9.46-23.77,4.05-44.76-16.49-40.49-40.52,1.63-9.11,6.45-21.88,9.45-24.88a4.37,4.37,0,0,0-3.65-7.45,60,60,0,0,0-35.13,17.12C50.22,376.69,48,464,48,464s87.36-2.22,110.87-25.75A59.69,59.69,0,0,0,176,403.09C176.37,398.91,171.28,396.42,168.4,399.43Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M328.85,156.79a26.69,26.69,0,1,0,18.88,7.81A26.6,26.6,0,0,0,328.85,156.79Z" />
      <path d="M477.44,50.06a.29.29,0,0,1,0-.09,20.4,20.4,0,0,0-15.13-15.3c-29.8-7.27-76.68.48-128.63,21.28-52.36,21-101.42,52-134.58,85.22A320.7,320.7,0,0,0,169.55,175c-22.33-1-42,2.18-58.57,9.41-57.74,25.41-74.23,90.44-78.62,117.14a25,25,0,0,0,27.19,29h.13L124,323.53c.08.82.17,1.57.24,2.26a34.36,34.36,0,0,0,9.9,20.72l31.39,31.41a34.27,34.27,0,0,0,20.71,9.91l2.15.23-7,64.24s0,.08,0,.13A25,25,0,0,0,206,480a25.25,25.25,0,0,0,4.15-.34C237,475.34,302,459.05,327.34,401c7.17-16.46,10.34-36.05,9.45-58.34a314.78,314.78,0,0,0,33.95-29.55c33.43-33.26,64.53-81.92,85.31-133.52C476.74,128.23,484.53,81,477.44,50.06ZM370.38,224.94a58.77,58.77,0,1,1,0-83.07A58.3,58.3,0,0,1,370.38,224.94Z" />
      <path d="M161.93,386.44a16,16,0,0,0-11,2.67c-6.39,4.37-12.81,8.69-19.29,12.9-13.11,8.52-28.79-6.44-21-20l12.15-21a16,16,0,0,0-15.16-24.91A61.25,61.25,0,0,0,72,353.56c-3.66,3.67-14.79,14.81-20.78,57.26A357.94,357.94,0,0,0,48,447.59,16,16,0,0,0,64,464h.4a359.87,359.87,0,0,0,36.8-3.2c42.47-6,53.61-17.14,57.27-20.8a60.49,60.49,0,0,0,17.39-35.74A16,16,0,0,0,161.93,386.44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M416,128c-18.9,4.25-36.8,8.94-53.7,13.95-40.5,12-75.5,27.15-105.4,41.65-19.3,9.37-26.2,13.51-51.5,28.23C147,245.52,112,289.23,112,354.64,112,428.55,167.6,480,256,480s144-55.81,144-129.72S339,225.24,416,128Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M264,180.19c-19.69-27-38.2-38.69-52.7-46.59C162.6,107.1,96,96,96,96c41.5,43.7,37.2,90.1,32,128,0,0-3.87,32.88,1.91,58.41" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M372,139.15C356.55,102.6,336,64,336,64s-63.32,0-135.69,64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M253.48,87.57C221.25,45.81,176,32,176,32c-15.3,20.8-28.79,51.58-34.87,74.17" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M448,112s-17.62,0-30.51,1.39c-19,2-42.06,8-59.73,13.22C322.7,137,288.43,150.53,249.91,169.2c-18.62,9.05-26,13.35-48,26.13L197.41,198c-32.95,19-57.09,40-73.79,64.3C105.29,288.89,96,320,96,354.64c0,40.74,15.71,77.1,44.24,102.37C169,482.52,209.06,496,256,496c46.76,0,86.89-14.32,116-41.43,28.35-26.35,44-63.39,44-104.29,0-25-6.19-47-12.17-68.22-12.59-44.69-23.46-83.29,24.71-144.13C432.75,132.62,448,112,448,112Z" />
      <path d="M219,119.55C168.47,92.08,104.72,80,80,80c0,0,23.23,28.19,29.15,55.4s6.54,48.61,2.91,88.6c17.94-20.48,40.59-37.15,69.32-53.73l4.48-2.6C208,154.8,216.23,150,236,140.41c2.88-1.4,5.74-2.76,8.58-4.11A170.77,170.77,0,0,0,219,119.55Z" />
      <path d="M345.25,48s-42.53.36-86.12,21.3a280.36,280.36,0,0,0-32.27,18.27q3.73,1.89,7.4,3.88c3.44,1.87,7.09,4,10.9,6.29a189.7,189.7,0,0,1,31.46,24.16c24.57-10.41,73-26.1,90.77-31.28C359.39,71.47,345.25,48,345.25,48Z" />
      <path d="M176,16c-16,10.83-33.24,41.1-33.24,41.1a494.22,494.22,0,0,1,48.92,15.25l17.65-11.56c8.18-5.35,16.55-10.29,25-14.77C234.31,46,202.59,24.17,176,16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M429.55,119.49a16,16,0,0,0-17.06-7.1c-18.64,4.19-37.06,9-54.73,14.22C322.7,137,288.43,150.53,249.91,169.2c-18.62,9.05-26,13.35-48,26.13L197.41,198c-32.95,19-57.09,40-73.79,64.29C105.29,288.89,96,320,96,354.64c0,40.74,15.71,77.1,44.24,102.37C169,482.52,209.06,496,256,496c46.76,0,86.89-14.33,116-41.43,28.35-26.35,44-63.39,44-104.29,0-25-6.19-47-12.17-68.22-12.59-44.69-23.46-83.29,24.71-144.13A16,16,0,0,0,429.55,119.49Z" />
      <path d="M219,119.55C168.46,92.08,101.46,80.69,98.63,80.22A16,16,0,0,0,81,90.55a16.47,16.47,0,0,0,3.79,16.84c31.84,33.78,32.86,68.79,28.65,104.63a4.45,4.45,0,0,0,2.5,4.54h0a4.44,4.44,0,0,0,5.08-.9c16.39-16.51,36.37-31.52,60.4-45.39l4.48-2.6C208,154.8,216.23,150,236,140.41l2.69-1.3a4,4,0,0,0,.64-6.83A178.59,178.59,0,0,0,219,119.55Z" />
      <path d="M234.26,91.45c3.44,1.87,7.09,4,10.9,6.29a189.31,189.31,0,0,1,29.57,22.39,4,4,0,0,0,4.28.76,672,672,0,0,1,69.65-25q7-2.07,14.08-4a4,4,0,0,0,2.53-5.62C357,69.44,350.6,57.37,350.12,56.48A16,16,0,0,0,336,48c-1.91,0-33.28.36-76.87,21.3a279,279,0,0,0-26.39,14.51,4,4,0,0,0,.22,6.94Z" />
      <path d="M209.33,60.79c7.3-4.77,14.74-9.22,22.25-13.31a2,2,0,0,0,.24-3.36c-26-19.57-49.73-27-51.15-27.42a16,16,0,0,0-17.56,5.82A217.63,217.63,0,0,0,143.83,54.9a2,2,0,0,0,1.29,2.81C158.73,61.28,174.52,66,190.73,72a2,2,0,0,0,1.79-.2Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <circle cx="184" cy="232" r="24" />
      <path d="M256,288c45.42,0,83.62,29.53,95.71,69.83A8,8,0,0,1,343.84,368H168.15a8,8,0,0,1-7.82-10.17C172.32,317.53,210.53,288,256,288Z" />
      <circle cx="328" cy="232" r="24" />
      <circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM328,208a24,24,0,1,1-24,24A23.94,23.94,0,0,1,328,208Zm-144,0a24,24,0,1,1-24,24A23.94,23.94,0,0,1,184,208ZM256,288c45.42,0,83.75,29.49,95.72,69.83,1,3.52,2.33,10.17,2.33,10.17H158s1.31-6.69,2.33-10.17C172.11,317.47,210.53,288,256,288Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM184,208a24,24,0,1,1-24,24A23.94,23.94,0,0,1,184,208ZM160.33,357.83c12-40.3,50.2-69.83,95.62-69.83s83.62,29.53,95.71,69.83A8,8,0,0,1,343.84,368H168.15A8,8,0,0,1,160.33,357.83ZM328,256a24,24,0,1,1,24-24A23.94,23.94,0,0,1,328,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-p</title>
      <path d="M380.93,57.37A32,32,0,0,0,358.3,48H94.22A46.21,46.21,0,0,0,48,94.22V417.78A46.21,46.21,0,0,0,94.22,464H417.78A46.36,46.36,0,0,0,464,417.78V153.7a32,32,0,0,0-9.37-22.63ZM256,416a64,64,0,1,1,64-64A63.92,63.92,0,0,1,256,416Zm48-224H112a16,16,0,0,1-16-16V112a16,16,0,0,1,16-16H304a16,16,0,0,1,16,16v64A16,16,0,0,1,304,192Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M380.44,32H64A32,32,0,0,0,32,64V448a32,32,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V131.56ZM112,176V112H304v64ZM335.91,355.76a80,80,0,1,1-83.66-83.67A80.21,80.21,0,0,1,335.91,355.76Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M465.94,119.76l-73.7-73.7h0A47.68,47.68,0,0,0,358.3,32H96A64,64,0,0,0,32,96V416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V153.7A47.68,47.68,0,0,0,465.94,119.76ZM120,112H296a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V120A8,8,0,0,1,120,112ZM259.75,431.91a80,80,0,1,1,76.16-76.16A80.06,80.06,0,0,1,259.75,431.91Z" />
      <circle cx="256" cy="352" r="48" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="48" y="48" width="416" height="416" rx="96" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" />
      <path d="M388.94,151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48,29.12-132.94,51.4A34.66,34.66,0,0,0,120,199.64l33.32,39.21a26.07,26.07,0,0,0,33.6,5.21c15.92-9.83,40.91-21.64,69.1-21.64s53.18,11.81,69.1,21.64a26.07,26.07,0,0,0,33.6-5.21L392,199.64A34.66,34.66,0,0,0,388.94,151.56Z" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M432,32H80A48.05,48.05,0,0,0,32,80V432a48.05,48.05,0,0,0,48,48H432a48.05,48.05,0,0,0,48-48V80A48.05,48.05,0,0,0,432,32ZM415.29,197l-52.46,61.73a27.83,27.83,0,0,1-37.65,4.62c-13-9.29-39.27-24.89-69.18-24.89s-56.18,15.6-69.18,24.89a27.84,27.84,0,0,1-37.65-4.62L96.71,197A32.12,32.12,0,0,1,97.13,155c18.93-21.31,72.3-70.87,158.87-70.87S395.94,133.72,414.87,155h0A32.12,32.12,0,0,1,415.29,197Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M368,32H144A112.12,112.12,0,0,0,32,144V368A112.12,112.12,0,0,0,144,480H368A112.12,112.12,0,0,0,480,368V144A112.12,112.12,0,0,0,368,32Zm36.21,178-33.32,39.21A41.76,41.76,0,0,1,339,264.05a42.32,42.32,0,0,1-22.29-6.38c-14.22-8.78-36.3-19.25-60.69-19.25s-46.47,10.47-60.69,19.25a41.86,41.86,0,0,1-54.2-8.46L107.79,210a50.48,50.48,0,0,1,4.49-70.27C140.12,114.38,187.65,84.16,256,84.16s115.88,30.22,143.72,55.57A50.48,50.48,0,0,1,404.21,210Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M296,352h28a28,28,0,0,0,28-28V296" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M352,216V188a28,28,0,0,0-28-28H296" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M216,352H188a28,28,0,0,1-28-28V296" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M160,216V188a28,28,0,0,1,28-28h28" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM232,368H188a44.05,44.05,0,0,1-44-44V280h32v44a12,12,0,0,0,12,12h44Zm0-192H188a12,12,0,0,0-12,12v44H144V188a44.05,44.05,0,0,1,44-44h44ZM368,324a44.05,44.05,0,0,1-44,44H280V336h44a12,12,0,0,0,12-12V280h32Zm0-92H336V188a12,12,0,0,0-12-12H280V144h44a44.05,44.05,0,0,1,44,44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM216,368H188a44.05,44.05,0,0,1-44-44V296a16,16,0,0,1,32,0v28a12,12,0,0,0,12,12h28a16,16,0,0,1,0,32Zm0-192H188a12,12,0,0,0-12,12v28a16,16,0,0,1-32,0V188a44.05,44.05,0,0,1,44-44h28a16,16,0,0,1,0,32ZM368,324a44.05,44.05,0,0,1-44,44H296a16,16,0,0,1,0-32h28a12,12,0,0,0,12-12V296a16,16,0,0,1,32,0Zm0-108a16,16,0,0,1-32,0V188a12,12,0,0,0-12-12H296a16,16,0,0,1,0-32h28a44.05,44.05,0,0,1,44,44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M336,448h56a56,56,0,0,0,56-56V336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M448,176V120a56,56,0,0,0-56-56H336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M176,448H120a56,56,0,0,1-56-56V336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,176V120a56,56,0,0,1,56-56h56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M388,466H320V422h68a34,34,0,0,0,34-34V320h44v68A78.09,78.09,0,0,1,388,466Z" />
      <path d="M466,192H422V124a34,34,0,0,0-34-34H320V46h68a78.09,78.09,0,0,1,78,78Z" />
      <path d="M192,466H124a78.09,78.09,0,0,1-78-78V320H90v68a34,34,0,0,0,34,34h68Z" />
      <path d="M90,192H46V124a78.09,78.09,0,0,1,78-78h68V90H124a34,34,0,0,0-34,34Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M342,444h46a56,56,0,0,0,56-56V342" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <path d="M444,170V124a56,56,0,0,0-56-56H342" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <path d="M170,444H124a56,56,0,0,1-56-56V342" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
      <path d="M68,170V124a56,56,0,0,1,56-56h46" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <polygon points="32 192 256 64 480 192 256 320 32 192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="112 240 112 368 256 448 400 368 400 240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="480" y1="368" x2="480" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="320" x2="256" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <polygon points="256 370.43 96 279 96 377.42 256 466.3 416 377.42 416 279 256 370.43" />
      <polygon points="512.25 192 256 45.57 -0.25 192 256 338.43 464 219.57 464 384 512 384 512 192.14 512.25 192" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M256,368a16,16,0,0,1-7.94-2.11L108,285.84a8,8,0,0,0-12,6.94V368a16,16,0,0,0,8.23,14l144,80a16,16,0,0,0,15.54,0l144-80A16,16,0,0,0,416,368V292.78a8,8,0,0,0-12-6.94L263.94,365.89A16,16,0,0,1,256,368Z" />
      <path d="M495.92,190.5s0-.08,0-.11a16,16,0,0,0-8-12.28l-224-128a16,16,0,0,0-15.88,0l-224,128a16,16,0,0,0,0,27.78l224,128a16,16,0,0,0,15.88,0L461,221.28a2,2,0,0,1,3,1.74V367.55c0,8.61,6.62,16,15.23,16.43A16,16,0,0,0,496,368V192A14.76,14.76,0,0,0,495.92,190.5Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M232,160a72,72,0,1,0,72,72A72,72,0,0,0,232,160Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="283.64" y1="283.64" x2="336" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,64C150.13,64,64,150.13,64,256s86.13,192,192,192,192-86.13,192-192S361.87,64,256,64Zm80,294.63-54.15-54.15a88.08,88.08,0,1,1,22.63-22.63L358.63,336Z" />
      <circle cx="232" cy="232" r="56" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M256,64C150.13,64,64,150.13,64,256s86.13,192,192,192,192-86.13,192-192S361.87,64,256,64Zm91.31,283.31a16,16,0,0,1-22.62,0l-42.84-42.83a88.08,88.08,0,1,1,22.63-22.63l42.83,42.84A16,16,0,0,1,347.31,347.31Z" />
      <circle cx="232" cy="232" r="56" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="338.29" y1="338.29" x2="448" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M464,428,339.92,303.9a160.48,160.48,0,0,0,30.72-94.58C370.64,120.37,298.27,48,209.32,48S48,120.37,48,209.32s72.37,161.32,161.32,161.32a160.48,160.48,0,0,0,94.58-30.72L428,464ZM209.32,319.69A110.38,110.38,0,1,1,319.69,209.32,110.5,110.5,0,0,1,209.32,319.69Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M470.3,271.15,43.16,447.31a7.83,7.83,0,0,1-11.16-7V327a8,8,0,0,1,6.51-7.86l247.62-47c17.36-3.29,17.36-28.15,0-31.44l-247.63-47a8,8,0,0,1-6.5-7.85V72.59c0-5.74,5.88-10.26,11.16-8L470.3,241.76A16,16,0,0,1,470.3,271.15Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <ellipse cx="256" cy="128" rx="192" ry="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M448,214c0,44.18-86,80-192,80S64,258.18,64,214" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M448,300c0,44.18-86,80-192,80S64,344.18,64,300" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M64,127.24V384.76C64,428.52,150,464,256,464s192-35.48,192-79.24V127.24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M409.43,389.87C362,410,305.4,421.05,256,421.05s-105.87-11.3-153.44-31.18S48,353.16,48,353.16v38.2c0,31.15,18,43.64,67.32,64.35C153.13,471.59,203.18,480,256,480s102.87-8.41,140.68-24.29C446,435,464,422.51,464,391.36v-38.2S456.86,369.75,409.43,389.87Z" />
      <path d="M63.69,173.22c11.23,9.84,27.82,19.49,48,27.92,42.48,17.76,96.45,28.37,144.36,28.37s101.88-10.61,144.36-28.37c20.13-8.43,36.72-18.08,47.95-27.92,6.06-5.31,10.85-10.12,13.47-12.85a8,8,0,0,0,2.22-5.54l0-26.06v-.1c-.84-28.79-24.71-54.41-67.21-72.14C358.83,40.71,308.84,32,256,32S153.17,40.71,115.26,56.53C72.85,74.22,49,99.78,48.05,128.5l0,26.33a8,8,0,0,0,2.21,5.54C52.84,163.1,57.62,167.91,63.69,173.22Z" />
      <path d="M409.43,221.91C365,241,305.4,253.09,256,253.09s-108.87-12.27-153.43-31.18S48,185.2,48,185.2v47.36c.08,7.52,5.5,16.2,15.69,25.13,11.24,9.84,27.82,19.5,48,27.92C154.12,303.38,208.09,314,256,314s101.88-10.6,144.36-28.37c20.13-8.42,36.72-18.08,47.95-27.92,10.25-9,15.68-17.71,15.69-25.27V185.2S453.87,202.82,409.43,221.91Z" />
      <path d="M409.43,306.38C362,326,305.4,337.56,256,337.56s-109.87-12.8-153.43-31.18S48,269.67,48,269.67v46.25c0,7.55,5.44,16.28,15.69,25.26,11.23,9.84,27.81,19.5,48,27.92,42.48,17.77,96.44,28.37,144.36,28.37s101.88-10.6,144.36-28.37c20.13-8.43,36.72-18.08,47.95-27.92,10.19-8.93,15.61-17.61,15.69-25.13V269.67S456.87,286.76,409.43,306.38Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,428C203.65,428,144.61,416.39,98.07,397,81,389.81,66.38,378.18,54.43,369A4,4,0,0,0,48,372.18v12.58c0,28.07,23.49,53.22,66.14,70.82C152.29,471.33,202.67,480,256,480s103.7-8.67,141.86-24.42C440.51,438,464,412.83,464,384.76V372.18a4,4,0,0,0-6.43-3.18C445.62,378.17,431,389.81,413.92,397,367.38,416.39,308.35,428,256,428Z" />
      <path d="M464,126.51c-.81-27.65-24.18-52.4-66-69.85C359.74,40.76,309.34,32,256,32S152.26,40.76,114.09,56.66c-41.78,17.41-65.15,42.11-66,69.69L48,144c0,6.41,5.2,16.48,14.63,24.73,11.13,9.73,27.65,19.33,47.78,27.73C153.24,214.36,207.67,225,256,225s102.76-10.68,145.59-28.58c20.13-8.4,36.65-18,47.78-27.73C458.8,160.49,464,150.42,464,144Z" />
      <path d="M413.92,226C367.39,245.43,308.35,257,256,257S144.61,245.43,98.07,226C81,218.85,66.38,207.21,54.43,198A4,4,0,0,0,48,201.22V232c0,6.41,5.2,14.48,14.63,22.73,11.13,9.74,27.65,19.33,47.78,27.74C153.24,300.34,207.67,311,256,311s102.76-10.68,145.59-28.57c20.13-8.41,36.65-18,47.78-27.74C458.8,246.47,464,238.41,464,232V201.22a4,4,0,0,0-6.43-3.18C445.62,207.21,431,218.85,413.92,226Z" />
      <path d="M413.92,312C367.38,331.41,308.35,343,256,343S144.61,331.41,98.07,312C81,304.83,66.38,293.19,54.43,284A4,4,0,0,0,48,287.2V317c0,6.41,5.2,14.47,14.62,22.71,11.13,9.74,27.66,19.33,47.79,27.74C153.24,385.32,207.66,396,256,396s102.76-10.68,145.59-28.57c20.13-8.41,36.65-18,47.78-27.74C458.8,331.44,464,323.37,464,317V287.2a4,4,0,0,0-6.43-3.18C445.62,293.19,431,304.83,413.92,312Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,14.08C416.17,247.67,416.39,251.83,416.39,256Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M256,176a80,80,0,1,0,80,80A80.24,80.24,0,0,0,256,176Zm172.72,80a165.53,165.53,0,0,1-1.64,22.34l48.69,38.12a11.59,11.59,0,0,1,2.63,14.78l-46.06,79.52a11.64,11.64,0,0,1-14.14,4.93l-57.25-23a176.56,176.56,0,0,1-38.82,22.67l-8.56,60.78A11.93,11.93,0,0,1,302.06,486H209.94a12,12,0,0,1-11.51-9.53l-8.56-60.78A169.3,169.3,0,0,1,151.05,393L93.8,416a11.64,11.64,0,0,1-14.14-4.92L33.6,331.57a11.59,11.59,0,0,1,2.63-14.78l48.69-38.12A174.58,174.58,0,0,1,83.28,256a165.53,165.53,0,0,1,1.64-22.34L36.23,195.54a11.59,11.59,0,0,1-2.63-14.78l46.06-79.52A11.64,11.64,0,0,1,93.8,96.31l57.25,23a176.56,176.56,0,0,1,38.82-22.67l8.56-60.78A11.93,11.93,0,0,1,209.94,26h92.12a12,12,0,0,1,11.51,9.53l8.56,60.78A169.3,169.3,0,0,1,361,119L418.2,96a11.64,11.64,0,0,1,14.14,4.92l46.06,79.52a11.59,11.59,0,0,1-2.63,14.78l-48.69,38.12A174.58,174.58,0,0,1,428.72,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <circle cx="256" cy="256" r="48" />
      <path d="M470.39,300l-.47-.38-31.56-24.75a16.11,16.11,0,0,1-6.1-13.33l0-11.56a16,16,0,0,1,6.11-13.22L469.92,212l.47-.38a26.68,26.68,0,0,0,5.9-34.06l-42.71-73.9a1.59,1.59,0,0,1-.13-.22A26.86,26.86,0,0,0,401,92.14l-.35.13L363.55,107.2a15.94,15.94,0,0,1-14.47-1.29q-4.92-3.1-10-5.86a15.94,15.94,0,0,1-8.19-11.82L325.3,48.64l-.12-.72A27.22,27.22,0,0,0,298.76,26H213.24a26.92,26.92,0,0,0-26.45,22.39l-.09.56-5.57,39.67A16,16,0,0,1,173,100.44c-3.42,1.84-6.76,3.79-10,5.82a15.92,15.92,0,0,1-14.43,1.27l-37.13-15-.35-.14a26.87,26.87,0,0,0-32.48,11.34l-.13.22L35.71,177.9A26.71,26.71,0,0,0,41.61,212l.47.38,31.56,24.75a16.11,16.11,0,0,1,6.1,13.33l0,11.56a16,16,0,0,1-6.11,13.22L42.08,300l-.47.38a26.68,26.68,0,0,0-5.9,34.06l42.71,73.9a1.59,1.59,0,0,1,.13.22A26.86,26.86,0,0,0,111,419.86l.35-.13,37.07-14.93a15.94,15.94,0,0,1,14.47,1.29q4.92,3.11,10,5.86a15.94,15.94,0,0,1,8.19,11.82l5.56,39.59.12.72A27.22,27.22,0,0,0,213.24,486h85.52a26.92,26.92,0,0,0,26.45-22.39l.09-.56,5.57-39.67a16,16,0,0,1,8.18-11.82c3.42-1.84,6.76-3.79,10-5.82a15.92,15.92,0,0,1,14.43-1.27l37.13,14.95.35.14a26.85,26.85,0,0,0,32.48-11.34,2.53,2.53,0,0,1,.13-.22l42.71-73.89A26.7,26.7,0,0,0,470.39,300ZM335.91,259.76a80,80,0,1,1-83.66-83.67A80.21,80.21,0,0,1,335.91,259.76Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polygon points="336 320 32 320 184 48 336 320" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M265.32,194.51A144,144,0,1,1,192,320" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M363.27,336H4.73L184,16Z" />
      <path d="M336,160a160.54,160.54,0,0,0-32.55,3.36l87.75,157L417.81,368H183.36C203.8,432.85,264.49,480,336,480c88.22,0,160-71.78,160-160S424.22,160,336,160Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M336,336H32a16,16,0,0,1-14-23.81l152-272a16,16,0,0,1,27.94,0l152,272A16,16,0,0,1,336,336Z" />
      <path d="M336,160a161.07,161.07,0,0,0-32.57,3.32L377.9,296.59A48,48,0,0,1,336,368H183.33A160,160,0,1,0,336,160Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M336,192h40a40,40,0,0,1,40,40V424a40,40,0,0,1-40,40H136a40,40,0,0,1-40-40V232a40,40,0,0,1,40-40h40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="336 128 256 48 176 128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="321" x2="256" y2="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M272,176V337H240V176H92a12,12,0,0,0-12,12V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V188a12,12,0,0,0-12-12Z" />
      <polygon points="272 92.63 336 156.63 358.63 134 256 31.37 153.37 134 176 156.63 240 92.63 240 176 272 176 272 92.63" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <circle cx="128" cy="256" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="384" cy="112" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="384" cy="400" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="169.83" y1="279.53" x2="342.17" y2="376.47" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="342.17" y1="135.53" x2="169.83" y2="232.47" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M378,324a69.78,69.78,0,0,0-48.83,19.91L202,272.41a69.68,69.68,0,0,0,0-32.82l127.13-71.5A69.76,69.76,0,1,0,308.87,129l-130.13,73.2a70,70,0,1,0,0,107.56L308.87,383A70,70,0,1,0,378,324Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M384,336a63.78,63.78,0,0,0-46.12,19.7l-148-83.27a63.85,63.85,0,0,0,0-32.86l148-83.27a63.8,63.8,0,1,0-15.73-27.87l-148,83.27a64,64,0,1,0,0,88.6l148,83.27A64,64,0,1,0,384,336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M376,176H272V321a16,16,0,0,1-32,0V176H136a56.06,56.06,0,0,0-56,56V424a56.06,56.06,0,0,0,56,56H376a56.06,56.06,0,0,0,56-56V232A56.06,56.06,0,0,0,376,176Z" />
      <path d="M272,86.63l52.69,52.68a16,16,0,0,0,22.62-22.62l-80-80a16,16,0,0,0-22.62,0l-80,80a16,16,0,0,0,22.62,22.62L240,86.63V176h32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <polyline points="336 176 225.2 304 176 255.8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M463.1,112.37C373.68,96.33,336.71,84.45,256,48,175.29,84.45,138.32,96.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464,271.42,457.79,479.3,369.13,463.1,112.37Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M479.07,111.36l-.79-12.53-12.36-2.21c-86.5-15.52-122.61-26.74-203.33-63.2l-6.59-3-6.59,3C168.69,69.88,132.58,81.1,46.08,96.62L33.72,98.83l-.79,12.53c-3.85,61.11,4.36,118.05,24.43,169.24A349.47,349.47,0,0,0,129,393.11c53.47,56.73,110.24,81.37,121.07,85.73l6,2.41,6-2.41c10.83-4.36,67.6-29,121.07-85.73A349.47,349.47,0,0,0,454.64,280.6C474.71,229.41,482.92,172.47,479.07,111.36Zm-252.91,216L153.37,256l22.4-22.86,48.47,47.49L334.37,153.43l24.2,20.94Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M479.07,111.36a16,16,0,0,0-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16,16,0,0,0-13.18,0C168.69,69.88,132.58,81.1,46.08,96.62a16,16,0,0,0-13.15,14.74c-3.85,61.11,4.36,118.05,24.43,169.24A349.47,349.47,0,0,0,129,393.11c53.47,56.73,110.24,81.37,121.07,85.73a16,16,0,0,0,12,0c10.83-4.36,67.6-29,121.07-85.73A349.47,349.47,0,0,0,454.64,280.6C474.71,229.41,482.92,172.47,479.07,111.36Zm-131,75.11-110.8,128A16,16,0,0,1,225.86,320h-.66a16,16,0,0,1-11.2-4.57l-49.2-48.2a16,16,0,1,1,22.4-22.86l37,36.29L323.9,165.53a16,16,0,0,1,24.2,20.94Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M463.1,112.37C373.68,96.33,336.71,84.45,256,48,175.29,84.45,138.32,96.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464,271.42,457.79,479.3,369.13,463.1,112.37Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <path d="M256,48C175.29,84.45,138.32,96.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256,32C174,69.06,121.38,86.46,32,96c0,77.59,5.27,133.36,25.29,184.51a348.86,348.86,0,0,0,71.43,112.41C178.32,445.58,232.89,473.32,256,480c23.11-6.68,77.68-34.42,127.28-87.08a348.86,348.86,0,0,0,71.43-112.41C474.73,229.36,480,173.59,480,96,390.62,86.46,338,69.06,256,32ZM417.47,265.93a309.18,309.18,0,0,1-63.31,99.56C316,406,276.65,428.31,256,437.36V75.8c38.75,17,68.73,28.3,97.93,36.89a613.12,613.12,0,0,0,85.6,18.52C437.81,191.43,431.17,230.9,417.47,265.93Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M48.9,112.37C138.32,96.33,175.29,84.45,256,48c80.71,36.45,117.68,48.33,207.1,64.37C479.3,369.13,271.42,457.79,256,464,240.58,457.79,32.7,369.13,48.9,112.37Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <path d="M256,48c80.71,36.45,117.68,48.33,207.1,64.37C479.3,369.13,271.42,457.79,256,464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M463.1,112.37C373.68,96.33,336.71,84.45,256,48,175.29,84.45,138.32,96.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464,271.42,457.79,479.3,369.13,463.1,112.37Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M256,32C174,69.06,121.38,86.46,32,96c0,77.59,5.27,133.36,25.29,184.51a348.86,348.86,0,0,0,71.43,112.41C178.32,445.58,232.89,473.32,256,480c23.11-6.68,77.68-34.42,127.28-87.08a348.86,348.86,0,0,0,71.43-112.41C474.73,229.36,480,173.59,480,96,390.62,86.46,338,69.06,256,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <path d="M479.07,111.35A16,16,0,0,0,465.92,96.6C379.89,81.18,343.69,69.12,266,34.16c-7.76-2.89-12.57-2.84-20,0-77.69,35-113.89,47-199.92,62.44a16,16,0,0,0-13.15,14.75c-3.85,61.1,4.34,118,24.36,169.15a348.86,348.86,0,0,0,71.43,112.41c44.67,47.43,94.2,75.12,119.74,85.6a20,20,0,0,0,15.11,0c27-10.92,74.69-37.82,119.71-85.62A348.86,348.86,0,0,0,454.71,280.5C474.73,229.36,482.92,172.45,479.07,111.35Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M314.56,48S291.78,56,256,56s-58.56-8-58.56-8a31.94,31.94,0,0,0-10.57,1.8L32,104l16.63,88,48.88,5.52A24,24,0,0,1,118.8,222.1L112,464H400l-6.8-241.9a24,24,0,0,1,21.29-24.58L463.37,192,480,104,325.13,49.8A31.94,31.94,0,0,0,314.56,48Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M333.31,52.66a80,80,0,0,1-154.62,0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M256,42c-33.88,0-64-10-64-10l0,2A64,64,0,0,0,320,34l0-2S289.88,42,256,42Z" />
      <path d="M352,44c-5.49,47.76-46.79,85-96,85s-90.51-37.24-96-85L16,94,34,208l61.71,7.42c7.08.9,7.1.9,7.1,8.19L96,480H416l-6.81-256.39c-.21-7-.21-7,7.1-8.19L478,208,496,94Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M256,96c33.08,0,60.71-25.78,64-58,.3-3-3-6-6-6h0a13,13,0,0,0-4.74.9c-.2.08-21.1,8.1-53.26,8.1s-53.1-8-53.26-8.1a16.21,16.21,0,0,0-5.3-.9h-.06A5.69,5.69,0,0,0,192,38C195.35,70.16,223,96,256,96Z" />
      <path d="M485.29,89.9,356,44.64a4,4,0,0,0-5.27,3.16,96,96,0,0,1-189.38,0A4,4,0,0,0,156,44.64L26.71,89.9A16,16,0,0,0,16.28,108l16.63,88A16,16,0,0,0,46.83,208.9l48.88,5.52a8,8,0,0,1,7.1,8.19l-7.33,240.9a16,16,0,0,0,9.1,14.94A17.49,17.49,0,0,0,112,480H400a17.49,17.49,0,0,0,7.42-1.55,16,16,0,0,0,9.1-14.94l-7.33-240.9a8,8,0,0,1,7.1-8.19l48.88-5.52A16,16,0,0,0,479.09,196l16.63-88A16,16,0,0,0,485.29,89.9Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="400 304 448 352 400 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="400 112 448 160 400 208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,352h85.19a80,80,0,0,0,66.56-35.62L256,256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,160h85.19a80,80,0,0,1,66.56,35.62l80.5,120.76A80,80,0,0,0,362.81,352H416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M416,160H362.81a80,80,0,0,0-66.56,35.62L288,208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="400 304 448 352 400 400" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="400 112 448 160 400 208" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="64 352 192 352 252 260" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="64 160 192 160 320 352 416 352" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="416 160 320 160 288 208" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="400 304 448 352 400 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="400 112 448 160 400 208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,352h85.19a80,80,0,0,0,66.56-35.62L256,256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M64,160h85.19a80,80,0,0,1,66.56,35.62l80.5,120.76A80,80,0,0,0,362.81,352H416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M416,160H362.81a80,80,0,0,0-66.56,35.62L288,208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M448,225.64v99a64,64,0,0,1-40.23,59.42l-23.68,9.47A32,32,0,0,0,364.6,417l-10,50.14A16,16,0,0,1,338.88,480H173.12a16,16,0,0,1-15.69-12.86L147.4,417a32,32,0,0,0-19.49-23.44l-23.68-9.47A64,64,0,0,1,64,324.67V224C64,118.08,149.77,32.19,255.65,32S448,119.85,448,225.64Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="168" cy="280" r="40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="344" cy="280" r="40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <polygon points="256 336 240 384 272 384 256 336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="448" x2="256" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="208" y1="448" x2="208" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="304" y1="448" x2="304" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,16C141.31,16,48,109.31,48,224V378.83l82,32.81L146.88,496H192V432h32v64h16V432h32v64h16V432h32v64h45.12L382,411.64l82-32.81V224C464,109.31,370.69,16,256,16ZM168,336a56,56,0,1,1,56-56A56.06,56.06,0,0,1,168,336Zm51.51,64L244,320h24l24.49,80ZM344,336a56,56,0,1,1,56-56A56.06,56.06,0,0,1,344,336Zm104,32h0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M402,76.94C362.61,37.63,310.78,16,256,16h-.37A208,208,0,0,0,48,224V324.67A79.62,79.62,0,0,0,98.29,399L122,408.42a15.92,15.92,0,0,1,9.75,11.72l10,50.13A32.09,32.09,0,0,0,173.12,496H184a8,8,0,0,0,8-8V448.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,224,448v40a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8V448.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,448v40a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8V448.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,320,448v40a8,8,0,0,0,8,8h10.88a32.09,32.09,0,0,0,31.38-25.72l10-50.14A16,16,0,0,1,390,408.42L413.71,399A79.62,79.62,0,0,0,464,324.67v-99C464,169.67,442,116.86,402,76.94ZM171.66,335.88a56,56,0,1,1,52.22-52.22A56,56,0,0,1,171.66,335.88ZM281,397.25A16.37,16.37,0,0,1,271.7,400H240.3a16.37,16.37,0,0,1-9.28-2.75,16,16,0,0,1-6.6-16.9l15.91-47.6C243,326,247.25,321,254,320.13c8.26-1,14,2.87,17.61,12.22l16,48A16,16,0,0,1,281,397.25Zm66.68-61.37a56,56,0,1,1,52.22-52.22A56,56,0,0,1,347.66,335.88Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <line x1="256" y1="32" x2="256" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M313.72,80A111.47,111.47,0,0,1,256,96a111.47,111.47,0,0,1-57.72-16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M198.28,432a112.11,112.11,0,0,1,115.44,0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="449.99" y1="144" x2="62.01" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M437.27,218a112.09,112.09,0,0,1-57.71-100" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M74.73,294a112.09,112.09,0,0,1,57.71,100" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="62.01" y1="144" x2="449.99" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M74.73,218a112.09,112.09,0,0,0,57.71-100" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M437.27,294a112.09,112.09,0,0,0-57.71,100" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M447.88,313.27l19.25-10.64-21.28-38.51L426.6,274.76a133.42,133.42,0,0,0-38.54,32.1L300,256l88.07-50.86a133.42,133.42,0,0,0,38.54,32.1l19.25,10.64,21.28-38.51-19.25-10.64a89.27,89.27,0,0,1-20.93-16L480,152.05,458,114,405,144.58a89.07,89.07,0,0,1-3.42-26.15l.41-22-44-.82-.41,22A133.62,133.62,0,0,0,366.07,167L278,217.89V116.18a133.52,133.52,0,0,0,47.06-17.33L343.9,87.5,321.19,49.81,302.35,61.16A89.5,89.5,0,0,1,278,71.27V16H234V71.27a89.5,89.5,0,0,1-24.35-10.11L190.81,49.81,168.1,87.5l18.84,11.35A133.52,133.52,0,0,0,234,116.18V217.89L145.93,167a133.62,133.62,0,0,0,8.53-49.43l-.41-22-44,.82.41,22a89.07,89.07,0,0,1-3.42,26.15L54,114l-22,38.1,53.05,30.64a89.27,89.27,0,0,1-20.93,16L44.87,209.37l21.28,38.51L85.4,237.24a133.42,133.42,0,0,0,38.54-32.1L212,256l-88.07,50.86a133.42,133.42,0,0,0-38.54-32.1L66.15,264.12,44.87,302.63l19.25,10.64a89.27,89.27,0,0,1,20.93,16L32,360l22,38.1,53.05-30.63a89.07,89.07,0,0,1,3.42,26.15l-.41,22,44,.82.41-22A133.62,133.62,0,0,0,145.93,345L234,294.11V395.82a133.52,133.52,0,0,0-47.06,17.33L168.1,424.5l22.71,37.69,18.84-11.35A89.5,89.5,0,0,1,234,440.73V496h44V440.73a89.5,89.5,0,0,1,24.35,10.11l18.84,11.35L343.9,424.5l-18.84-11.35A133.52,133.52,0,0,0,278,395.82V294.11L366.07,345a133.62,133.62,0,0,0-8.53,49.43l.41,22,44-.82-.41-22A89.07,89.07,0,0,1,405,367.42L458,398.05,480,360,427,329.31A89.27,89.27,0,0,1,447.88,313.27Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M461,349l-34-19.64a89.53,89.53,0,0,1,20.94-16,22,22,0,0,0-21.28-38.51,133.62,133.62,0,0,0-38.55,32.1L300,256l88.09-50.86a133.46,133.46,0,0,0,38.55,32.1,22,22,0,1,0,21.28-38.51,89.74,89.74,0,0,1-20.94-16l34-19.64A22,22,0,1,0,439,125l-34,19.63a89.74,89.74,0,0,1-3.42-26.15A22,22,0,0,0,380,96h-.41a22,22,0,0,0-22,21.59A133.61,133.61,0,0,0,366.09,167L278,217.89V116.18a133.5,133.5,0,0,0,47.07-17.33,22,22,0,0,0-22.71-37.69A89.56,89.56,0,0,1,278,71.27V38a22,22,0,0,0-44,0V71.27a89.56,89.56,0,0,1-24.36-10.11,22,22,0,1,0-22.71,37.69A133.5,133.5,0,0,0,234,116.18V217.89L145.91,167a133.61,133.61,0,0,0,8.52-49.43,22,22,0,0,0-22-21.59H132a22,22,0,0,0-21.59,22.41A89.74,89.74,0,0,1,107,144.58L73,125a22,22,0,1,0-22,38.1l34,19.64a89.74,89.74,0,0,1-20.94,16,22,22,0,1,0,21.28,38.51,133.62,133.62,0,0,0,38.55-32.1L212,256l-88.09,50.86a133.62,133.62,0,0,0-38.55-32.1,22,22,0,1,0-21.28,38.51,89.74,89.74,0,0,1,20.94,16L51,349a22,22,0,1,0,22,38.1l34-19.63a89.74,89.74,0,0,1,3.42,26.15A22,22,0,0,0,132,416h.41a22,22,0,0,0,22-21.59A133.61,133.61,0,0,0,145.91,345L234,294.11V395.82a133.5,133.5,0,0,0-47.07,17.33,22,22,0,1,0,22.71,37.69A89.56,89.56,0,0,1,234,440.73V474a22,22,0,0,0,44,0V440.73a89.56,89.56,0,0,1,24.36,10.11,22,22,0,0,0,22.71-37.69A133.5,133.5,0,0,0,278,395.82V294.11L366.09,345a133.61,133.61,0,0,0-8.52,49.43,22,22,0,0,0,22,21.59H380a22,22,0,0,0,21.59-22.41A89.74,89.74,0,0,1,405,367.42l34,19.63A22,22,0,1,0,461,349Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M259.92,262.91,216.4,149.77a9,9,0,0,0-16.8,0L156.08,262.91a9,9,0,0,1-5.17,5.17L37.77,311.6a9,9,0,0,0,0,16.8l113.14,43.52a9,9,0,0,1,5.17,5.17L199.6,490.23a9,9,0,0,0,16.8,0l43.52-113.14a9,9,0,0,1,5.17-5.17L378.23,328.4a9,9,0,0,0,0-16.8L265.09,268.08A9,9,0,0,1,259.92,262.91Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <polygon points="108 68 88 16 68 68 16 88 68 108 88 160 108 108 160 88 108 68" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
      <polygon points="426.67 117.33 400 48 373.33 117.33 304 144 373.33 170.67 400 240 426.67 170.67 496 144 426.67 117.33" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M208,512,155.62,372.38,16,320l139.62-52.38L208,128l52.38,139.62L400,320,260.38,372.38Z" />
      <path d="M88,176,64.43,111.57,0,88,64.43,64.43,88,0l23.57,64.43L176,88l-64.43,23.57Z" />
      <path d="M400,256l-31.11-80.89L288,144l80.89-31.11L400,32l31.11,80.89L512,144l-80.89,31.11Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z" />
      <path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z" />
      <path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M326.1,231.9l-47.5,75.5a31,31,0,0,1-7,7,30.11,30.11,0,0,1-35-49l75.5-47.5a10.23,10.23,0,0,1,11.7,0A10.06,10.06,0,0,1,326.1,231.9Z" />
      <path d="M256,64C132.3,64,32,164.2,32,287.9A223.18,223.18,0,0,0,88.3,436.4c1.1,1.2,2.1,2.4,3.2,3.5a25.19,25.19,0,0,0,37.1-.1,173.13,173.13,0,0,1,254.8,0,25.19,25.19,0,0,0,37.1.1l3.2-3.5A223.18,223.18,0,0,0,480,287.9C480,164.2,379.7,64,256,64Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="128" x2="256" y2="160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="416" y1="288" x2="384" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="128" y1="288" x2="96" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="165.49" y1="197.49" x2="142.86" y2="174.86" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="346.51" y1="197.49" x2="369.14" y2="174.86" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M256,48C123.46,48,16,156.55,16,290.56A243.3,243.3,0,0,0,76.32,451.43c1.18,1.3,2.25,2.6,3.43,3.79C89.2,464,92.07,464,99.57,464s12.43,0,19.93-8.88C152,416.64,202,400,256,400s104.07,16.71,136.5,55.12C400,464,404.82,464,412.43,464s11.3,0,19.82-8.78c1.22-1.25,2.25-2.49,3.43-3.79A243.3,243.3,0,0,0,496,290.56C496,156.55,388.54,48,256,48Zm-16,64h32v64H240ZM144,304H80V272h64Zm21.49-83.88-45.25-45.26,22.62-22.62,45.26,45.25ZM278.6,307.4a31,31,0,0,1-7,7,30.11,30.11,0,0,1-35-49L320,224Zm45.28-109.91,45.26-45.25,22.62,22.62-45.25,45.26ZM432,304H368V272h64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M425.7,118.25A240,240,0,0,0,76.32,447l.18.2c.33.35.64.71,1,1.05.74.84,1.58,1.79,2.57,2.78a41.17,41.17,0,0,0,60.36-.42,157.13,157.13,0,0,1,231.26,0,41.18,41.18,0,0,0,60.65.06l3.21-3.5.18-.2a239.93,239.93,0,0,0-10-328.76ZM240,128a16,16,0,0,1,32,0v32a16,16,0,0,1-32,0ZM128,304H96a16,16,0,0,1,0-32h32a16,16,0,0,1,0,32Zm48.8-95.2a16,16,0,0,1-22.62,0l-22.63-22.62a16,16,0,0,1,22.63-22.63l22.62,22.63A16,16,0,0,1,176.8,208.8Zm149.3,23.1-47.5,75.5a31,31,0,0,1-7,7,30.11,30.11,0,0,1-35-49l75.5-47.5a10.23,10.23,0,0,1,11.7,0A10.06,10.06,0,0,1,326.1,231.9Zm31.72-23.1a16,16,0,0,1-22.62-22.62l22.62-22.63a16,16,0,0,1,22.63,22.63ZM423.7,436.4h0ZM416,304H384a16,16,0,0,1,0-32h32a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M416,448H96a32.09,32.09,0,0,1-32-32V96A32.09,32.09,0,0,1,96,64H416a32.09,32.09,0,0,1,32,32V416A32.09,32.09,0,0,1,416,448Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <rect x="48" y="48" width="416" height="416" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M416,464H96a48.05,48.05,0,0,1-48-48V96A48.05,48.05,0,0,1,96,48H416a48.05,48.05,0,0,1,48,48V416A48.05,48.05,0,0,1,416,464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <polygon points="256 48 256 364 118 464 172 304 32 208 204 208 256 48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M496,203.3H312.36L256,32,199.64,203.3H16L166.21,308.7,107.71,480,256,373.84,404.29,480,345.68,308.7ZM274.63,347.82,256,334.49V134.39l26,78.91,7.24,22H394.63l-67.32,47.2-19.69,13.81,7.78,22.75,26.26,76.75Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <polygon points="256 48 256 364 118 464 172 304 32 208 204 208 256 48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M496,203.3H312.36L256,32,199.64,203.3H16L166.21,308.7,107.71,480,256,373.84,404.29,480,345.68,308.7Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M394,480a16,16,0,0,1-9.39-3L256,383.76,127.39,477a16,16,0,0,1-24.55-18.08L153,310.35,23,221.2A16,16,0,0,1,32,192H192.38l48.4-148.95a16,16,0,0,1,30.44,0l48.4,149H480a16,16,0,0,1,9.05,29.2L359,310.35l50.13,148.53A16,16,0,0,1,394,480Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <rect x="64" y="320" width="48" height="160" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="288" y="224" width="48" height="256" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="400" y="112" width="48" height="368" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="176" y="32" width="48" height="448" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M128,496H48V304h80Z" />
      <path d="M352,496H272V208h80Z" />
      <path d="M464,496H384V96h80Z" />
      <path d="M240,496H160V16h80Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M104,496H72a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,104,496Z" />
      <path d="M328,496H296a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,328,496Z" />
      <path d="M440,496H408a24,24,0,0,1-24-24V120a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,440,496Z" />
      <path d="M216,496H184a24,24,0,0,1-24-24V40a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,216,496Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M310.4,336H201.6A25.62,25.62,0,0,1,176,310.4V201.6A25.62,25.62,0,0,1,201.6,176H310.4A25.62,25.62,0,0,1,336,201.6V310.4A25.62,25.62,0,0,1,310.4,336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,288H176V176H336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm80,262.4A25.62,25.62,0,0,1,310.4,336H201.6A25.62,25.62,0,0,1,176,310.4V201.6A25.62,25.62,0,0,1,201.6,176H310.4A25.62,25.62,0,0,1,336,201.6Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <rect x="96" y="96" width="320" height="320" rx="24" ry="24" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <rect x="80" y="80" width="352" height="352" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M392,432H120a40,40,0,0,1-40-40V120a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V392A40,40,0,0,1,392,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <line x1="256" y1="232" x2="256" y2="152" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="88" x2="256" y2="72" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <line x1="132" y1="132" x2="120" y2="120" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
      <circle cx="256" cy="272" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M256,96A176,176,0,1,0,432,272,176,176,0,0,0,256,96Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M280,81.5V48H232V81.5a191,191,0,0,0-84.43,32.13L120,86,86,120l25.59,25.59A191.17,191.17,0,0,0,64,272c0,105.87,86.13,192,192,192s192-86.13,192-192C448,174.26,374.58,93.34,280,81.5ZM256,320a48,48,0,0,1-16-93.25V136h32v90.75A48,48,0,0,1,256,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <circle cx="256" cy="272" r="16" />
      <path d="M280,81.5V72a24,24,0,0,0-48,0v9.5a191,191,0,0,0-84.43,32.13L137,103A24,24,0,0,0,103,137l8.6,8.6A191.17,191.17,0,0,0,64,272c0,105.87,86.13,192,192,192s192-86.13,192-192C448,174.26,374.58,93.34,280,81.5ZM256,320a48,48,0,0,1-16-93.25V152a16,16,0,0,1,32,0v74.75A48,48,0,0,1,256,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" x1="448" y1="448" x2="448" y2="240" />
      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" x1="64" y1="240" x2="64" y2="448" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M382.47,48H129.53C107.74,48,88.06,60,79.6,78.46L36.3,173c-14.58,31.81,9.63,67.85,47.19,69q1,0,2,0c31.4,0,56.85-25.18,56.85-52.23,0,27,25.46,52.23,56.86,52.23S256,218.62,256,189.77c0,27,25.45,52.23,56.85,52.23s56.86-23.38,56.86-52.23c0,28.85,25.45,52.23,56.85,52.23q1,0,1.95,0c37.56-1.17,61.77-37.21,47.19-69L432.4,78.46C423.94,60,404.26,48,382.47,48Z" />
      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" x1="32" y1="464" x2="480" y2="464" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M136,288h80a24,24,0,0,1,24,24v88a0,0,0,0,1,0,0H112a0,0,0,0,1,0,0V312A24,24,0,0,1,136,288Z" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M288,464V312a24,24,0,0,1,24-24h64a24,24,0,0,1,24,24V464" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M464,448V267.85a104.76,104.76,0,0,1-33.56,6.58c-1.18,0-2.3.05-3.4.05a108,108,0,0,1-56.86-16,108,108,0,0,1-56.85,16,106.16,106.16,0,0,1-56.51-16.2,107.84,107.84,0,0,1-57.2,16.2,106.14,106.14,0,0,1-56.85-16.42,106.14,106.14,0,0,1-56.85,16.42c-1.09,0-2.19,0-3.37-.05h-.06A104.66,104.66,0,0,1,48,267.49V448H16v32H496V448ZM224,384H128V308a4,4,0,0,1,4-4h88a4,4,0,0,1,4,4Zm160,64H304V308a4,4,0,0,1,4-4h72a4,4,0,0,1,4,4Z" />
      <path d="M492.57,170.28,445.89,64C432,32,432,32,400,32H112c-32,0-32,0-45.94,32L19.38,170.28c-9,19.41,2.89,39.34,2.9,39.35l.41.66c.42.66,1.13,1.75,1.62,2.37.1.13.19.27.28.4l5.24,6.39,5.31,5.14.42.36A69.65,69.65,0,0,0,45,231.73v.05a74,74,0,0,0,36,10.67c.82,0,1.64,0,2.47,0a76.08,76.08,0,0,0,51.89-20.31,72.38,72.38,0,0,0,5.77-6,74.18,74.18,0,0,0,5.78,6,76.08,76.08,0,0,0,51.89,20.31c23.28,0,44.07-10,57.63-25.56a.11.11,0,0,1,.15,0l5.66,5.26a76.09,76.09,0,0,0,51.9,20.31c23.29,0,44.11-10,57.66-25.61,13.56,15.61,34.37,25.61,57.67,25.61l2.49,0a71.35,71.35,0,0,0,35-10.7v0c.95-.57,1.86-1.17,2.78-1.77A71.33,71.33,0,0,0,488,212.17l2-3C490.9,207.13,501.21,188.87,492.57,170.28Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M480,448H468a4,4,0,0,1-4-4V273.51a4,4,0,0,0-5.24-3.86,104.92,104.92,0,0,1-28.32,4.78c-1.18,0-2.3.05-3.4.05a108.22,108.22,0,0,1-52.85-13.64,8.23,8.23,0,0,0-8,0,108.18,108.18,0,0,1-52.84,13.64,106.11,106.11,0,0,1-52.46-13.79,8.21,8.21,0,0,0-8.09,0,108.14,108.14,0,0,1-53.16,13.8,106.19,106.19,0,0,1-52.77-14,8.25,8.25,0,0,0-8.16,0,106.19,106.19,0,0,1-52.77,14c-1.09,0-2.19,0-3.37-.05h-.06a104.91,104.91,0,0,1-29.28-5.09A4,4,0,0,0,48,273.15V444a4,4,0,0,1-4,4H32.5c-8.64,0-16.1,6.64-16.48,15.28A16,16,0,0,0,32,480H479.5c8.64,0,16.1-6.64,16.48-15.28A16,16,0,0,0,480,448ZM224,380a4,4,0,0,1-4,4H132a4,4,0,0,1-4-4V316a12,12,0,0,1,12-12h72a12,12,0,0,1,12,12ZM380,448H308a4,4,0,0,1-4-4V316a12,12,0,0,1,12-12h56a12,12,0,0,1,12,12V444A4,4,0,0,1,380,448Z" />
      <path d="M492.57,170.28,449.65,71.79C438.41,47.62,412.74,32,384.25,32H127.7C99.21,32,73.54,47.62,62.3,71.79L19.38,170.28c-9,19.41,2.89,39.34,2.9,39.35l.28.45c.49.78,1.36,2,1.89,2.78.05.06.09.13.14.2l5,6.05a7.45,7.45,0,0,0,.6.65l5,4.83.42.36A69.65,69.65,0,0,0,45,231.73v.05a74,74,0,0,0,36,10.67c.82,0,1.64,0,2.47,0a76.08,76.08,0,0,0,51.89-20.31l.33-.31a7.94,7.94,0,0,1,10.89,0l.33.31a77.3,77.3,0,0,0,104.46,0,8,8,0,0,1,10.87,0h0a77.31,77.31,0,0,0,104.21.23,7.88,7.88,0,0,1,10.71,0,76.81,76.81,0,0,0,52.31,20.08l2.49,0a71.35,71.35,0,0,0,35-10.7v0c.95-.57,1.86-1.17,2.78-1.77A71.33,71.33,0,0,0,488,212.17l1.74-2.63q.26-.4.48-.84C491.88,205.32,500.78,187.94,492.57,170.28Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <rect x="112" y="32" width="288" height="352" rx="48" ry="48" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="208" y1="80" x2="304" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="112" y="128" width="288" height="96" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="176" cy="320" r="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="336" cy="320" r="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="144" y1="464" x2="368" y2="464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336" y1="432" x2="384" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="432" x2="128" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M392,16H120A24,24,0,0,0,96,40V376a24,24,0,0,0,24,24H392a24,24,0,0,0,24-24V40A24,24,0,0,0,392,16ZM208,64h95.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,96H208.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,208,64ZM179.47,351.82a32,32,0,1,1,28.35-28.35A32,32,0,0,1,179.47,351.82Zm160,0a32,32,0,1,1,28.35-28.35A32,32,0,0,1,339.47,351.82ZM384,144v64H128V144Z" />
      <polygon points="298 416 329.37 448 182.63 448 214 416 170 416 89.43 496 134.63 496 150.63 480 361.37 480 377.37 496 422.67 496 343 416 298 416" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M352,16H160A64.07,64.07,0,0,0,96,80V336a64.07,64.07,0,0,0,64,64H352a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,352,16ZM208,64h96a16,16,0,0,1,0,32H208a16,16,0,0,1,0-32ZM176,352a32,32,0,1,1,32-32A32,32,0,0,1,176,352Zm160,0a32,32,0,1,1,32-32A32,32,0,0,1,336,352Zm48-160a16,16,0,0,1-16,16H144a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16H368a16,16,0,0,1,16,16Z" />
      <path d="M347.31,420.69a16,16,0,0,0-22.62,22.62l4.68,4.69H182.63l4.68-4.69a16,16,0,0,0-22.62-22.62l-48,48a16,16,0,1,0,22.62,22.62L150.63,480H361.37l11.32,11.31a16,16,0,0,0,22.62-22.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <line x1="256" y1="48" x2="256" y2="96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="256" y1="416" x2="256" y2="464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="403.08" y1="108.92" x2="369.14" y2="142.86" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="142.86" y1="369.14" x2="108.92" y2="403.08" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="464" y1="256" x2="416" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="96" y1="256" x2="48" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="403.08" y1="403.08" x2="369.14" y2="369.14" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="142.86" y1="142.86" x2="108.92" y2="108.92" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="256" r="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <rect x="234" y="26" width="44" height="92" />
      <rect x="234" y="394" width="44" height="92" />
      <rect x="340.11" y="103.89" width="92" height="44" transform="translate(24.07 309.89) rotate(-45)" />
      <rect x="79.89" y="364.11" width="92" height="44" transform="translate(-236.14 202.1) rotate(-45)" />
      <rect x="394" y="234" width="92" height="44" />
      <rect x="26" y="234" width="92" height="44" />
      <rect x="364.11" y="340.11" width="44" height="92" transform="translate(-159.93 386.11) rotate(-45)" />
      <rect x="103.89" y="79.89" width="44" height="92" transform="translate(-52.15 125.89) rotate(-45)" />
      <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M256,118a22,22,0,0,1-22-22V48a22,22,0,0,1,44,0V96A22,22,0,0,1,256,118Z" />
      <path d="M256,486a22,22,0,0,1-22-22V416a22,22,0,0,1,44,0v48A22,22,0,0,1,256,486Z" />
      <path d="M369.14,164.86a22,22,0,0,1-15.56-37.55l33.94-33.94a22,22,0,0,1,31.11,31.11l-33.94,33.94A21.93,21.93,0,0,1,369.14,164.86Z" />
      <path d="M108.92,425.08a22,22,0,0,1-15.55-37.56l33.94-33.94a22,22,0,1,1,31.11,31.11l-33.94,33.94A21.94,21.94,0,0,1,108.92,425.08Z" />
      <path d="M464,278H416a22,22,0,0,1,0-44h48a22,22,0,0,1,0,44Z" />
      <path d="M96,278H48a22,22,0,0,1,0-44H96a22,22,0,0,1,0,44Z" />
      <path d="M403.08,425.08a21.94,21.94,0,0,1-15.56-6.45l-33.94-33.94a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.55,37.56Z" />
      <path d="M142.86,164.86a21.89,21.89,0,0,1-15.55-6.44L93.37,124.48a22,22,0,0,1,31.11-31.11l33.94,33.94a22,22,0,0,1-15.56,37.55Z" />
      <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="304 48 416 160 304 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="398.87" y1="160" x2="96" y2="160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="208 464 96 352 208 240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="114" y1="352" x2="416" y2="352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="304 48 416 160 304 272" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="398.87" y1="160" x2="96" y2="160" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="208 464 96 352 208 240" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="114" y1="352" x2="416" y2="352" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="304 48 416 160 304 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="398.87" y1="160" x2="96" y2="160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="208 464 96 352 208 240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="114" y1="352" x2="416" y2="352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="464 208 352 96 240 208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="352" y1="113.13" x2="352" y2="416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="48 304 160 416 272 304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="160" y1="398" x2="160" y2="96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="464 208 352 96 240 208" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="352" y1="113.13" x2="352" y2="416" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="48 304 160 416 272 304" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="160" y1="398" x2="160" y2="96" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <polyline points="464 208 352 96 240 208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="352" y1="113.13" x2="352" y2="416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="48 304 160 416 272 304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="160" y1="398" x2="160" y2="96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M351.82,271.87v-16A96.15,96.15,0,0,0,184.09,192m-24.2,48.17v16A96.22,96.22,0,0,0,327.81,320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="135.87 256 159.46 232.4 184.13 256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="376.13 256 352.54 279.6 327.87 256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm0,320a112.19,112.19,0,0,1-111.27-98.23l-8.86,8.86L113.24,256l46-46,47.55,45.48-22.12,23.12-7.2-6.88a80.26,80.26,0,0,0,138.48,37.5l23.77,21.41A112.82,112.82,0,0,1,256,368Zm96.79-66L305.24,256.5l22.12-23.12,6.86,6.55A80.2,80.2,0,0,0,196,202.64l-23.82-21.37A112.18,112.18,0,0,1,367,242.49l9.11-9.12L398.76,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm83.69,282.65a112.24,112.24,0,0,1-195-61.29,16,16,0,0,1-20.13-24.67l23.6-23.6a16,16,0,0,1,22.37-.25l24.67,23.6a16,16,0,0,1-18,26,80.25,80.25,0,0,0,138.72,38.83,16,16,0,0,1,23.77,21.41Zm47.76-63.34-23.6,23.6a16,16,0,0,1-22.37.25l-24.67-23.6a16,16,0,0,1,17.68-26.11A80.17,80.17,0,0,0,196,202.64a16,16,0,1,1-23.82-21.37,112.17,112.17,0,0,1,194.88,61.57,16,16,0,0,1,20.39,24.47Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M434.67,285.59v-29.8C434.67,157.06,354.43,77,255.47,77a179,179,0,0,0-140.14,67.36m-38.53,82v29.8C76.8,355,157,435,256,435a180.45,180.45,0,0,0,140-66.92" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="32 256 76 212 122 256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="480 256 436 300 390 256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M434.67,285.59v-29.8C434.67,157.06,354.43,77,255.47,77a179,179,0,0,0-140.14,67.36m-38.53,82v29.8C76.8,355,157,435,256,435a180.45,180.45,0,0,0,140-66.92" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="32 256 76 212 122 256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="480 256 436 300 390 256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-b</title>
      <path d="M434.67,285.59v-29.8C434.67,157.06,354.43,77,255.47,77a179,179,0,0,0-140.14,67.36m-38.53,82v29.8C76.8,355,157,435,256,435a180.45,180.45,0,0,0,140-66.92" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="32 256 76 212 122 256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="480 256 436 300 390 256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <rect x="80" y="16" width="352" height="480" rx="48" ry="48" transform="translate(0 512) rotate(-90)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M0,82V430a18,18,0,0,0,18,18H494a18,18,0,0,0,18-18V82a18,18,0,0,0-18-18H18A18,18,0,0,0,0,82ZM448,412H64V100H448Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M512,128V384a64.07,64.07,0,0,1-64,64H64A64.07,64.07,0,0,1,0,384V128A64.07,64.07,0,0,1,64,64H448A64.07,64.07,0,0,1,512,128ZM32,384a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32V128a32,32,0,0,0-32-32H64a32,32,0,0,0-32,32Z" />
      <path d="M0,128A64.07,64.07,0,0,1,64,64H448a64.07,64.07,0,0,1,64,64V384a64.07,64.07,0,0,1-64,64H64A64.07,64.07,0,0,1,0,384V128M480,384V128a32,32,0,0,0-32-32H64a32,32,0,0,0-32,32V384a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32m-16,0a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16H448a16,16,0,0,1,16,16V384Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <rect x="80" y="16" width="352" height="480" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M430,0H82A18,18,0,0,0,64,18V494a18,18,0,0,0,18,18H430a18,18,0,0,0,18-18V18A18,18,0,0,0,430,0ZM100,448V64H412V448Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M384,512H128a64.07,64.07,0,0,1-64-64V64A64.07,64.07,0,0,1,128,0H384a64.07,64.07,0,0,1,64,64V448A64.07,64.07,0,0,1,384,512ZM128,32A32,32,0,0,0,96,64V448a32,32,0,0,0,32,32H384a32,32,0,0,0,32-32V64a32,32,0,0,0-32-32Z" />
      <path d="M384,0a64.07,64.07,0,0,1,64,64V448a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V64A64.07,64.07,0,0,1,128,0H384M128,480H384a32,32,0,0,0,32-32V64a32,32,0,0,0-32-32H128A32,32,0,0,0,96,64V448a32,32,0,0,0,32,32m0-16a16,16,0,0,1-16-16V64a16,16,0,0,1,16-16H384a16,16,0,0,1,16,16V448a16,16,0,0,1-16,16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M39.93,327.56l-4.71-8.13A24,24,0,0,1,44,286.64l86.87-50.07a16,16,0,0,1,21.89,5.86l12.71,22a16,16,0,0,1-5.86,21.85L72.76,336.35A24.06,24.06,0,0,1,39.93,327.56Z" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M170.68,273.72,147.12,233a24,24,0,0,1,8.8-32.78l124.46-71.75a16,16,0,0,1,21.89,5.86l31.57,54.59A16,16,0,0,1,328,210.76L203.51,282.5A24,24,0,0,1,170.68,273.72Z" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M341.85,202.21l-46.51-80.43A24,24,0,0,1,304.14,89l93.29-53.78A24.07,24.07,0,0,1,430.27,44l46.51,80.43a24,24,0,0,1-8.8,32.79L374.69,211A24.06,24.06,0,0,1,341.85,202.21Z" />
      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" x1="127.59" y1="480" x2="223.73" y2="272.01" />
      <line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" x1="271.8" y1="256.02" x2="368.55" y2="448" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="1.41 292.9 46.23 369.87 144.37 313.49 99.64 236.12 1.41 292.9" />
      <path d="M287.87,252.34l23.67-13.81-63.42-110-132.92,77C133.75,237.51,176,310,176,310l15.53-8.32c.24-.13.55,0,.83,0L102.65,496h35.16l99.05-214.25,23.24-13.4L358,464h36Z" />
      <path d="M262.08,96c24.81,42.23,60.25,104.25,86.4,148.76L510.79,151,424.07,1.41Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M107.56,250a16,16,0,0,0-21.85-5.86L36,272.81A39.71,39.71,0,0,0,17.2,297.72a40.9,40.9,0,0,0,4.55,30.35l4.36,7.54a40,40,0,0,0,54.62,14.62L130.4,321.6a16,16,0,0,0,5.87-21.86Z" />
      <path d="M382.84,440.8,288.72,254a2,2,0,0,1,.79-2.63l8.3-4.79a16,16,0,0,0,5.86-21.86l-47.53-82.33a16,16,0,0,0-21.86-5.87l-86.38,49.8a39.73,39.73,0,0,0-18.65,24.28,34.82,34.82,0,0,0-1.37,9.76c.06,7.6,9.2,22.7,18.12,38.28,9.59,16.75,19.24,33.88,26.34,38.15,4.52,2.72,12.5,4.9,19.21,4.9l.84,0L113.07,473.29a16,16,0,1,0,29.05,13.42L235.8,284.06a7.94,7.94,0,0,1,3.26-3.57l19.21-11.08a2,2,0,0,1,2.78.84l93.21,185a16,16,0,0,0,28.58-14.4Z" />
      <path d="M490.21,115.74,444.09,36a40.08,40.08,0,0,0-54.63-14.62L296.12,75.16a39.69,39.69,0,0,0-18.65,24.28,32.76,32.76,0,0,0-1.27,13.25c1.74,12.62,13,30.4,26.41,53.89,13.58,23.73,28.91,50.48,36.93,56.27a40.18,40.18,0,0,0,23.18,7.37,39.77,39.77,0,0,0,19.92-5.34L476,171.07a39.72,39.72,0,0,0,18.79-24.84A41,41,0,0,0,490.21,115.74Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M461.43,271.44c-5.09.37-8.24.56-13.43.56-114.88,0-208-93.12-208-208,0-5.37.2-8.69.6-14" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M49.65,240.56S58.84,240,64,240c114.88,0,208,93.12,208,208,0,5.38-.61,14-.61,14" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M246.4,480a181,181,0,0,0,3.22-22.86c.35-4.61.53-9.31.53-14,0-100-81.34-181.32-181.32-181.32A181.72,181.72,0,0,0,32,265.61,224.2,224.2,0,0,0,246.4,480Z" />
      <path d="M284.63,227.37A222.73,222.73,0,0,1,219,68.83a227.09,227.09,0,0,1,2.62-34.42A224.41,224.41,0,0,0,34.41,221.58,227.09,227.09,0,0,1,68.83,219a222.73,222.73,0,0,1,158.54,65.67A222.73,222.73,0,0,1,293,443.17c0,5.74-.22,11.54-.65,17.23s-1.11,11.51-2,17.2A224.42,224.42,0,0,0,477.59,290.42,227.09,227.09,0,0,1,443.17,293,222.73,222.73,0,0,1,284.63,227.37Z" />
      <path d="M443.17,250.15A181.72,181.72,0,0,0,480,246.39,224.2,224.2,0,0,0,265.61,32a181.72,181.72,0,0,0-3.76,36.83C261.85,168.81,343.19,250.15,443.17,250.15Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M448,256a192.55,192.55,0,0,0,32-2.68A224,224,0,0,0,258.68,32,192.55,192.55,0,0,0,256,64C256,169.87,342.13,256,448,256Z" />
      <path d="M253.35,480c.94-5.67,1.65-11.4,2.09-17.18.37-4.88.56-9.86.56-14.79,0-105.87-86.13-192-192-192a192.55,192.55,0,0,0-32,2.68A224,224,0,0,0,253.35,480Z" />
      <path d="M289.61,222.39A222.53,222.53,0,0,1,224,64a226.07,226.07,0,0,1,2-30A224.1,224.1,0,0,0,34,226a226.07,226.07,0,0,1,30-2,222.53,222.53,0,0,1,158.39,65.61A222.53,222.53,0,0,1,288,448c0,5.74-.22,11.53-.65,17.22q-.5,6.42-1.36,12.79A224.12,224.12,0,0,0,478,286a226.07,226.07,0,0,1-30,2A222.53,222.53,0,0,1,289.61,222.39Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="32" y="48" width="448" height="416" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="96 112 176 176 96 240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="192" y1="240" x2="256" y2="240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M16,44V468a12,12,0,0,0,12,12H484a12,12,0,0,0,12-12V44a12,12,0,0,0-12-12H28A12,12,0,0,0,16,44ZM73.51,237.5,150.39,176,73.51,114.5l20-25L201.61,176,93.5,262.49ZM272,256H176V224h96Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M432,32H80A64.07,64.07,0,0,0,16,96V416a64.07,64.07,0,0,0,64,64H432a64.07,64.07,0,0,0,64-64V96A64.07,64.07,0,0,0,432,32ZM96,256a16,16,0,0,1-10-28.49L150.39,176,86,124.49a16,16,0,1,1,20-25l80,64a16,16,0,0,1,0,25l-80,64A16,16,0,0,1,96,256Zm160,0H192a16,16,0,0,1,0-32h64a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <polyline points="32 415.5 152 95.5 272 415.5" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="230" y1="303.5" x2="74" y2="303.5" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M326,239.5c12.19-28.69,41-48,74-48h0c46,0,80,32,80,80v144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,358.5c0,36,26.86,58,60,58,54,0,100-27,100-106v-15c-20,0-58,1-92,5C355.23,304.36,320,319.5,320,358.5Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M404.42,170c-41.23,0-78.07,24.06-93.85,61.3L304,246.52l40.33,17.18,6.56-15.22c8.9-21,29.91-34.55,53.53-34.55,34.55,0,57.76,23.27,57.76,57.91v2.3c-22.12.59-48.65,2.05-72.27,4.84-54.52,6.43-87.06,36.23-87.06,79.72,0,23.16,8.72,44,24.56,58.59C342.28,431,362.55,438,384.51,438c30.86,0,57.5-7.33,77.67-22.64V438H506V271.84C506,212.83,463.28,170,404.42,170ZM384.51,395.07c-17.46,0-37.85-9.84-37.85-36.37,0-10.65,3.82-18.11,12.38-24.19,8.34-5.92,21.12-10.15,36-11.9,21.78-2.57,46.31-3.95,67-4.52C459.88,369.58,434.47,395.07,384.51,395.07Z" />
      <path d="M93.25,325.87h125.5L260.94,438H308L155,48,4,438H51.06ZM156,160.71,202.25,282h-92.5Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M292.6,407.78l-120-320a22,22,0,0,0-41.2,0l-120,320a22,22,0,0,0,41.2,15.44L88.76,326.8a2,2,0,0,1,1.87-1.3H213.37a2,2,0,0,1,1.87,1.3l36.16,96.42a22,22,0,0,0,41.2-15.44Zm-185.84-129,43.37-115.65a2,2,0,0,1,3.74,0L197.24,278.8a2,2,0,0,1-1.87,2.7H108.63A2,2,0,0,1,106.76,278.8Z" />
      <path d="M400.77,169.5c-41.72-.3-79.08,23.87-95,61.4a22,22,0,0,0,40.5,17.2c8.88-20.89,29.77-34.44,53.32-34.6C431.91,213.28,458,240,458,272.35h0a1.5,1.5,0,0,1-1.45,1.5c-21.92.61-47.92,2.07-71.12,4.8C330.68,285.09,298,314.94,298,358.5c0,23.19,8.76,44,24.67,58.68C337.6,430.93,358,438.5,380,438.5c31,0,57.69-8,77.94-23.22,0,0,.06,0,.06,0h0a22,22,0,1,0,44,.19v-143C502,216.29,457,169.91,400.77,169.5ZM380,394.5c-17.53,0-38-9.43-38-36,0-10.67,3.83-18.14,12.43-24.23,8.37-5.93,21.2-10.16,36.14-11.92,21.12-2.49,44.82-3.86,65.14-4.47a2,2,0,0,1,2,2.1C455,370.1,429.46,394.5,380,394.5Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M307.72,302.27a8,8,0,0,1-3.72-6.75V80a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48V295.52a8,8,0,0,1-3.71,6.74,97.51,97.51,0,0,0-44.19,86.07A96,96,0,0,0,352,384,97.49,97.49,0,0,0,307.72,302.27Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <line x1="256" y1="112" x2="256" y2="384" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="384" r="48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M320,291.24V80a64,64,0,1,0-128,0V291.24A113.39,113.39,0,0,0,144,384a112,112,0,0,0,224,0A113.39,113.39,0,0,0,320,291.24ZM256,432a48,48,0,0,1-16-93.26V96h32V338.74A48,48,0,0,1,256,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M320,287.18V81c0-35.12-27.89-64.42-63-64.95a64.08,64.08,0,0,0-65,64V287.18a8,8,0,0,1-3.18,6.37A113.48,113.48,0,0,0,144,384a112,112,0,0,0,224,0,113.48,113.48,0,0,0-44.82-90.45A8,8,0,0,1,320,287.18ZM254.07,432a48,48,0,0,1-22-89.54,16,16,0,0,0,8-13.84V112.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,112V328.58a16.18,16.18,0,0,0,8.15,13.94A48,48,0,0,1,254.07,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M192,53.84S208,48,256,48s74,16,96,32h64a64,64,0,0,1,64,64v48a64,64,0,0,1-64,64H386a32.34,32.34,0,0,0-27.37,15.4S350,290.19,324,335.22,248,448,240,464c-29,0-43-22-34-47.71,10.28-29.39,23.71-54.38,27.46-87.09.54-4.78-3.14-12-8-12L96,307" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M96,241l80,2c20,1.84,32,12.4,32,30h0c0,17.6-14,28.84-32,30l-80,4c-17.6,0-32-16.4-32-34v-.17A32,32,0,0,1,96,241Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M64,176l112,2c18,.84,32,12.41,32,30h0c0,17.61-14,28.86-32,30L64,240a32.1,32.1,0,0,1-32-32h0A32.1,32.1,0,0,1,64,176Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M112,48l64,3c21,1.84,32,11.4,32,29h0c0,17.6-14.4,30-32,30l-64,2A32.09,32.09,0,0,1,80,80h0A32.09,32.09,0,0,1,112,48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M80,112l96,2c19,.84,32,12.4,32,30h0c0,17.6-13,28.84-32,30l-96,2a32.09,32.09,0,0,1-32-32h0A32.09,32.09,0,0,1,80,112Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M56,320l156.05,12-23,89.4c-6.08,26.6.7,41.87,22.39,48.62l34.69,9.85a4,4,0,0,0,4.4-1.72l129-202.34a8,8,0,0,1,6.81-3.81H496V64H378.39a48,48,0,0,1-15.18-2.46l-76.3-25.43A80,80,0,0,0,261.61,32H83.68c-19,0-31.5,13.52-35.23,32.16L16,206.42V280C16,302.06,34,318,56,320Z" />
      <path d="M378.45,273.93A15.84,15.84,0,0,1,386,272h0a15.93,15.93,0,0,0-7.51,1.91Z" style="fill:none" />
      <path d="M337.86,343.22l-.13.22a2.53,2.53,0,0,1,.13-.22c20.5-35.51,30.36-55,33.82-62h0C368.21,288.28,358.34,307.73,337.86,343.22Z" style="fill:none" />
      <path d="M372.66,279.16l-1,2a16.29,16.29,0,0,1,6.77-7.26A16.48,16.48,0,0,0,372.66,279.16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M39.94,178l144.16,6.12c4.61.36,23.9,1.22,23.9,25.88,0,23.8-19.16,25.33-24.14,25.88L39.94,242C27.27,241.87,16,227.56,16,210S27.27,178.13,39.94,178ZM181.39,309.66,74.65,318C62,318,48,301.31,48,284.12v-.33c0-16.33,11.14-29.63,24.88-29.79l108.45,1.72C208,259,208,275.16,208,282.12,208,305,186.2,309.26,181.39,309.66ZM90.15,32l89.37,8.93C204,41.86,208,58.18,208,68.4,208,86.79,194.59,93,181.33,93l-91,3C75.78,95.78,64,81.51,64,64S75.68,32.34,90.15,32ZM55.79,103.5l126.4,6.22c9.39.63,25.81,3,25.81,26.36,0,12-4.35,25.62-25,27.53L55.79,167.5C42.65,167.35,32,154,32,136.08S42.65,103.65,55.79,103.5Z" />
      <path d="M378.45,273.93A15.84,15.84,0,0,1,386,272h0a15.93,15.93,0,0,0-7.51,1.91Z" style="fill:none" />
      <path d="M337.86,343.22l-.13.22a2.53,2.53,0,0,1,.13-.22c20.5-35.51,30.36-55,33.82-62h0C368.21,288.28,358.34,307.73,337.86,343.22Z" style="fill:none" />
      <path d="M372.66,279.16l-1,2a16.29,16.29,0,0,1,6.77-7.26A16.48,16.48,0,0,0,372.66,279.16Z" />
      <path d="M195.94,459.38C205.37,472.67,221,480,240,480a16,16,0,0,0,14.31-8.85c3-6.06,15.25-24,28.19-42.9,18-26.33,40.35-59.08,55.23-84.81l.13-.22c20.48-35.49,30.35-54.94,33.82-62h0l1-2a16.48,16.48,0,0,1,5.79-5.23l0,0A15.93,15.93,0,0,1,386,272h25.32A84.7,84.7,0,0,0,496,187.3V148.7A84.7,84.7,0,0,0,411.31,64H362.52a17.46,17.46,0,0,1-9.58-2.89C330,46.13,286.66,32,240,32c-7.45,0-14.19.14-20.27.38a8,8,0,0,0-6.2,12.68l.1.14C222.2,57.59,224,71,224,80a61.16,61.16,0,0,1-5.19,24.77,17.38,17.38,0,0,0,0,14.06,63.81,63.81,0,0,1,0,50.39,17.32,17.32,0,0,0,0,14,62.13,62.13,0,0,1,0,49.58,18.13,18.13,0,0,0,0,14.68A60.41,60.41,0,0,1,224,273c0,8.2-2,21.3-8,31.18a15.66,15.66,0,0,0-1.14,13.65c.38,1,.76,2.06,1.13,3.17a24.8,24.8,0,0,1,.86,11.57c-3,19.35-9.67,36.3-16.74,54.16-3.08,7.78-6.27,15.82-9.22,24.27C184.75,428.56,186.59,446.2,195.94,459.38Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M320,458.16S304,464,256,464s-74-16-96-32H96a64,64,0,0,1-64-64V320a64,64,0,0,1,64-64h30a32.34,32.34,0,0,0,27.37-15.4S162,221.81,188,176.78,264,64,272,48c29,0,43,22,34,47.71-10.28,29.39-23.71,54.38-27.46,87.09-.54,4.78,3.14,12,7.95,12L416,205" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M416,271l-80-2c-20-1.84-32-12.4-32-30h0c0-17.6,14-28.84,32-30l80-4c17.6,0,32,16.4,32,34v.17A32,32,0,0,1,416,271Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M448,336l-112-2c-18-.84-32-12.41-32-30h0c0-17.61,14-28.86,32-30l112-2a32.1,32.1,0,0,1,32,32h0A32.1,32.1,0,0,1,448,336Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M400,464l-64-3c-21-1.84-32-11.4-32-29h0c0-17.6,14.4-30,32-30l64-2a32.09,32.09,0,0,1,32,32h0A32.09,32.09,0,0,1,400,464Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M432,400l-96-2c-19-.84-32-12.4-32-30h0c0-17.6,13-28.84,32-30l96-2a32.09,32.09,0,0,1,32,32h0A32.09,32.09,0,0,1,432,400Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M456,192,300,180l23-89.4C329,64,322.22,48.73,300.53,42l-34.69-9.85a4,4,0,0,0-4.4,1.72l-129,202.34a8,8,0,0,1-6.81,3.81H16V448H133.61a48,48,0,0,1,15.18,2.46l76.3,25.43a80,80,0,0,0,25.3,4.11H428.32c19,0,31.5-13.52,35.23-32.16L496,305.58V232C496,209.94,478,194,456,192Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M472.06,334,327.9,327.87c-4.61-.36-23.9-1.21-23.9-25.87,0-23.81,19.16-25.33,24.14-25.88L472.06,270c12.67.13,23.94,14.43,23.94,32S484.73,333.87,472.06,334ZM330.61,202.33,437.35,194C450,194,464,210.68,464,227.88v.33c0,16.32-11.14,29.62-24.88,29.79l-108.45-1.73C304,253,304,236.83,304,229.88,304,207,325.8,202.73,330.61,202.33ZM421.85,480l-89.37-8.93C308,470.14,304,453.82,304,443.59c0-18.38,13.41-24.6,26.67-24.6l91-3c14.54.23,26.32,14.5,26.32,32S436.32,479.66,421.85,480Zm34.36-71.5-126.4-6.21c-9.39-.63-25.81-3-25.81-26.37,0-12,4.35-25.61,25-27.53l127.19-3.88C469.35,344.65,480,358,480,375.91S469.35,408.34,456.21,408.49Z" />
      <path d="M133.55,238.06A15.85,15.85,0,0,1,126,240h0a15.82,15.82,0,0,0,7.51-1.92Z" style="fill:none" />
      <path d="M174.14,168.78l.13-.23-.13.23c-20.5,35.51-30.36,54.95-33.82,62h0C143.79,223.71,153.66,204.27,174.14,168.78Z" style="fill:none" />
      <path d="M139.34,232.84l1-2a16.27,16.27,0,0,1-6.77,7.25A16.35,16.35,0,0,0,139.34,232.84Z" />
      <path d="M316.06,52.62C306.63,39.32,291,32,272,32a16,16,0,0,0-14.31,8.84c-3,6.07-15.25,24-28.19,42.91-18,26.33-40.35,59.07-55.23,84.8l-.13.23c-20.48,35.49-30.35,54.93-33.82,62h0l-1,2a16.35,16.35,0,0,1-5.79,5.22l0,0A15.82,15.82,0,0,1,126,240H100.69A84.69,84.69,0,0,0,16,324.69V363.3A84.69,84.69,0,0,0,100.69,448h48.79a17.55,17.55,0,0,1,9.58,2.89C182,465.87,225.34,480,272,480c7.45,0,14.19-.14,20.27-.38a8,8,0,0,0,6.2-12.68l-.1-.14C289.8,454.41,288,441,288,432a61.2,61.2,0,0,1,5.19-24.77,17.36,17.36,0,0,0,0-14.05,63.81,63.81,0,0,1,0-50.39,17.32,17.32,0,0,0,0-14,62.15,62.15,0,0,1,0-49.59,18.13,18.13,0,0,0,0-14.68A60.33,60.33,0,0,1,288,239c0-8.2,2-21.3,8-31.19a15.63,15.63,0,0,0,1.14-13.64c-.38-1-.76-2.07-1.13-3.17a24.84,24.84,0,0,1-.86-11.58c3-19.34,9.67-36.29,16.74-54.16,3.08-7.78,6.27-15.82,9.22-24.26C327.25,83.43,325.41,65.8,316.06,52.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <line x1="120" y1="352" x2="96" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="136" y1="432" x2="120" y2="464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="400" y1="352" x2="376" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="416" y1="432" x2="400" y2="464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="208 304 192 400 240 400 240 480 320 368 272 368 288 304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M404.33,152.89H392.2C384.71,84.85,326.14,32,256,32a136.39,136.39,0,0,0-128.63,90.67H122.8c-49.94,0-90.8,40.8-90.8,90.66h0C32,263.2,72.86,304,122.8,304H404.33C446,304,480,270,480,228.44h0C480,186.89,446,152.89,404.33,152.89Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M405.84,136.9A151.25,151.25,0,0,0,358.24,55a153,153,0,0,0-241.81,51.86C60.5,110.16,16,156.65,16,213.33,16,272.15,63.91,320,122.8,320h72.31L176,416h48v80L336,352H292.49l8-32H404.33a91.56,91.56,0,0,0,1.51-183.1Z" />
      <rect x="65.17" y="360" width="85.67" height="32" transform="translate(-276.6 304.44) rotate(-63.43)" />
      <rect x="94.11" y="432" width="67.78" height="32" transform="translate(-329.95 362.13) rotate(-63.43)" />
      <rect x="345.17" y="360" width="85.67" height="32" transform="translate(-121.83 554.88) rotate(-63.43)" />
      <rect x="374.11" y="432" width="67.78" height="32" transform="translate(-175.17 612.57) rotate(-63.43)" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M96,416a16,16,0,0,1-14.3-23.16l24-48a16,16,0,0,1,28.62,14.32l-24,48A16,16,0,0,1,96,416Z" />
      <path d="M120,480a16,16,0,0,1-14.3-23.16l16-32a16,16,0,0,1,28.62,14.32l-16,32A16,16,0,0,1,120,480Z" />
      <path d="M376,416a16,16,0,0,1-14.3-23.16l24-48a16,16,0,0,1,28.62,14.32l-24,48A16,16,0,0,1,376,416Z" />
      <path d="M400,480a16,16,0,0,1-14.3-23.16l16-32a16,16,0,0,1,28.62,14.32l-16,32A16,16,0,0,1,400,480Z" />
      <path d="M405.84,136.9A151.25,151.25,0,0,0,358.24,55a153,153,0,0,0-241.81,51.86C60.5,110.16,16,156.65,16,213.33,16,272.15,63.91,320,122.8,320h66.31l-12.89,77.37A16,16,0,0,0,192,416h32v64a16,16,0,0,0,29,9.3l80-112A16,16,0,0,0,320,352H292.49l8-32H404.33a91.56,91.56,0,0,0,1.51-183.1Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" d="M366.05,146a46.7,46.7,0,0,1-2.42-63.42,3.87,3.87,0,0,0-.22-5.26L319.28,33.14a3.89,3.89,0,0,0-5.5,0l-70.34,70.34a23.62,23.62,0,0,0-5.71,9.24h0a23.66,23.66,0,0,1-14.95,15h0a23.7,23.7,0,0,0-9.25,5.71L33.14,313.78a3.89,3.89,0,0,0,0,5.5l44.13,44.13a3.87,3.87,0,0,0,5.26.22,46.69,46.69,0,0,1,65.84,65.84,3.87,3.87,0,0,0,.22,5.26l44.13,44.13a3.89,3.89,0,0,0,5.5,0l180.4-180.39a23.7,23.7,0,0,0,5.71-9.25h0a23.66,23.66,0,0,1,14.95-15h0a23.62,23.62,0,0,0,9.24-5.71l70.34-70.34a3.89,3.89,0,0,0,0-5.5l-44.13-44.13a3.87,3.87,0,0,0-5.26-.22A46.7,46.7,0,0,1,366.05,146Z" />
      <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="250.5" y1="140.44" x2="233.99" y2="123.93" />
      <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="294.52" y1="184.46" x2="283.51" y2="173.46" />
      <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="338.54" y1="228.49" x2="327.54" y2="217.48" />
      <line fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" x1="388.07" y1="278.01" x2="371.56" y2="261.5" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M426.24,127.72,415.3,138.66a29.67,29.67,0,0,1-42-42l10.94-10.94L314.52,16l-88,88-4,12.09-12.09,4L16,314.52l69.76,69.76L96.7,373.34a29.67,29.67,0,0,1,42,42l-10.94,10.94L197.48,496l194.4-194.4,4-12.09,12.09-4,88-88Zm-208.56,5.43,21.87-21.87,33,33-21.88,21.87Zm43,43,21.88-21.88,32.52,32.52-21.88,21.88Zm42.56,42.56,21.88-21.88,32.52,32.52L335.8,251.28Zm75.57,75.56-33-33,21.87-21.88,33,33Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M490.18,181.4l-44.13-44.13a20,20,0,0,0-27-1,30.81,30.81,0,0,1-41.68-1.6h0A30.81,30.81,0,0,1,375.77,93a20,20,0,0,0-1-27L330.6,21.82a19.91,19.91,0,0,0-28.13,0L232.12,92.16a39.87,39.87,0,0,0-9.57,15.5,7.71,7.71,0,0,1-4.83,4.83,39.78,39.78,0,0,0-15.5,9.58L21.82,302.47a19.91,19.91,0,0,0,0,28.13L66,374.73a20,20,0,0,0,27,1,30.69,30.69,0,0,1,43.28,43.28,20,20,0,0,0,1,27l44.13,44.13a19.91,19.91,0,0,0,28.13,0l180.4-180.4a39.82,39.82,0,0,0,9.58-15.49,7.69,7.69,0,0,1,4.84-4.84,39.84,39.84,0,0,0,15.49-9.57l70.34-70.35A19.91,19.91,0,0,0,490.18,181.4ZM261.81,151.75a16,16,0,0,1-22.63,0l-11.51-11.51a16,16,0,0,1,22.63-22.62l11.51,11.5A16,16,0,0,1,261.81,151.75Zm44,44a16,16,0,0,1-22.62,0l-11-11a16,16,0,1,1,22.63-22.63l11,11A16,16,0,0,1,305.83,195.78Zm44,44a16,16,0,0,1-22.63,0l-11-11a16,16,0,0,1,22.63-22.62l11,11A16,16,0,0,1,349.86,239.8Zm44.43,44.54a16,16,0,0,1-22.63,0l-11.44-11.5a16,16,0,1,1,22.68-22.57l11.45,11.49A16,16,0,0,1,394.29,284.34Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="256 128 256 272 352 272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.13,48,48,141.13,48,256c0,114.69,93.32,208,208,208,114.86,0,208-93.14,208-208C464,141.31,370.69,48,256,48ZM364,288H244a4,4,0,0,1-4-4V116a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4V256h92a4,4,0,0,1,4,4v24A4,4,0,0,1,364,288Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm96,240H256a16,16,0,0,1-16-16V128a16,16,0,0,1,32,0V256h80a16,16,0,0,1,0,32Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M112.91,128A191.85,191.85,0,0,0,64,254c-1.18,106.35,85.65,193.8,192,194,106.2.2,192-85.83,192-192,0-104.54-83.55-189.61-187.5-192A4.36,4.36,0,0,0,256,68.37V152" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M233.38,278.63l-79-113a8.13,8.13,0,0,1,11.32-11.32l113,79a32.5,32.5,0,0,1-37.25,53.26A33.21,33.21,0,0,1,233.38,278.63Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M256,48C141.12,48,48,141.12,48,256s93.12,208,208,208,208-93.12,208-208S370.88,48,256,48Zm0,384C159,432,80,353.05,80,256a174.55,174.55,0,0,1,53.87-126.72L279,233l-19,30L135,172c-13,23-26.7,46-26.7,84,0,81.44,66.26,147.7,147.7,147.7S403.7,337.44,403.7,256c0-76.67-58.72-139.88-133.55-147V164h-28.3V79.89c4.24.07,8.94.11,14.15.11C353.05,80,432,159,432,256S353.05,432,256,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M256,48C141.12,48,48,141.12,48,256s93.12,208,208,208,208-93.12,208-208S370.88,48,256,48ZM173.67,162.34l105,71a32.5,32.5,0,0,1-37.25,53.26,33.21,33.21,0,0,1-8-8l-71-105a8.13,8.13,0,0,1,11.32-11.32ZM256,432C159,432,80,353.05,80,256a174.55,174.55,0,0,1,53.87-126.72,14.15,14.15,0,1,1,19.64,20.37A146.53,146.53,0,0,0,108.3,256c0,81.44,66.26,147.7,147.7,147.7S403.7,337.44,403.7,256c0-76.67-58.72-139.88-133.55-147V164a14.15,14.15,0,1,1-28.3,0V94.15A14.15,14.15,0,0,1,256,80C353.05,80,432,159,432,256S353.05,432,256,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48" />
      <line fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="128" y1="48" x2="128" y2="80" />
      <line fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="384" y1="48" x2="384" y2="80" />
      <rect fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x="112" y="224" width="96" height="96" rx="13" />
      <line fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x1="464" y1="160" x2="48" y2="160" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V176H32Zm80-238.86a9.14,9.14,0,0,1,9.14-9.14H230.86a9.14,9.14,0,0,1,9.14,9.14V326.86a9.14,9.14,0,0,1-9.14,9.14H121.14a9.14,9.14,0,0,1-9.14-9.14Z" />
      <path d="M456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480V87.77A23.8,23.8,0,0,0,456,64Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M416,64H400V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,48V64H144V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,48V64H96a64,64,0,0,0-64,64v12a4,4,0,0,0,4,4H476a4,4,0,0,0,4-4V128A64,64,0,0,0,416,64Z" />
      <path d="M477,176H35a3,3,0,0,0-3,3V416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V179A3,3,0,0,0,477,176ZM224,307.43A28.57,28.57,0,0,1,195.43,336H124.57A28.57,28.57,0,0,1,96,307.43V236.57A28.57,28.57,0,0,1,124.57,208h70.86A28.57,28.57,0,0,1,224,236.57Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <circle cx="368" cy="256" r="128" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <rect x="16" y="128" width="480" height="256" rx="128" ry="128" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M368,112H144a144,144,0,0,0,0,288H368a144,144,0,0,0,0-288Zm0,230a86,86,0,1,1,86-86A85.88,85.88,0,0,1,368,342Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M368,112H144C64.6,112,0,176.6,0,256S64.6,400,144,400H368c79.4,0,144-64.6,144-144S447.4,112,368,112Zm0,256A112,112,0,1,1,480,256,112.12,112.12,0,0,1,368,368Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <line x1="256" y1="400" x2="256" y2="464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="208" x2="256" y2="272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="48" x2="256" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M416,208H102.63a16,16,0,0,1-11.32-4.69L32,144,91.31,84.69A16,16,0,0,1,102.63,80H416a16,16,0,0,1,16,16v96A16,16,0,0,1,416,208Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M96,400H409.37a16,16,0,0,0,11.32-4.69L480,336l-59.31-59.31A16,16,0,0,0,409.37,272H96a16,16,0,0,0-16,16v96A16,16,0,0,0,96,400Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M502.63,336l-80-80H278V224H448V64H278V32H234V64H89.37l-80,80,80,80H234v32H64V416H234v64h44V416H422.63Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M491.31,324.69,432,265.37A31.8,31.8,0,0,0,409.37,256H272V224H416a32,32,0,0,0,32-32V96a32,32,0,0,0-32-32H272V48a16,16,0,0,0-32,0V64H102.63A31.8,31.8,0,0,0,80,73.37L20.69,132.69a16,16,0,0,0,0,22.62L80,214.63A31.8,31.8,0,0,0,102.63,224H240v32H96a32,32,0,0,0-32,32v96a32,32,0,0,0,32,32H240v48a16,16,0,0,0,32,0V416H409.37A31.8,31.8,0,0,0,432,406.63l59.31-59.32A16,16,0,0,0,491.31,324.69Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M344,48H320a16,16,0,0,0-16-16H208a16,16,0,0,0-16,16H168a56.16,56.16,0,0,0-56,56V351c0,35.3,144,65,144,65s144-29.7,144-65V104A56,56,0,0,0,344,48ZM256,352a48,48,0,1,1,48-48A48,48,0,0,1,256,352Zm96-160a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="144" y1="464" x2="368" y2="464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="336" y1="432" x2="384" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="432" x2="128" y2="480" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M384,32H320a16,16,0,0,0-16-16H208a16,16,0,0,0-16,16H128c-16,0-32,16-32,32V352c0,23.92,160,80,160,80s160-56.74,160-80V64C416,48,400,32,384,32ZM256,352a48,48,0,1,1,48-48A48,48,0,0,1,256,352ZM368,200a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H360a8,8,0,0,1,8,8Z" />
      <polygon points="314 432 329.32 448 182.58 448 198 432 166 419 89.38 496 134.58 496 150.58 480 361.32 480 377.32 496 422.62 496 346.26 418.25 314 432" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <ellipse cx="256" cy="304" rx="32.05" ry="31.94" transform="translate(-139.98 270.06) rotate(-45)" />
      <path d="M352,32H337a10,10,0,0,1-7.87-3.78A31.94,31.94,0,0,0,304,16H208a32,32,0,0,0-26.11,13.52A6,6,0,0,1,177,32H160c-36.81,0-64,28.84-64,64V351c0,23.27,25.6,42.06,83,60.94a753,753,0,0,0,73.77,19.73,16,16,0,0,0,6.46,0A753,753,0,0,0,333,411.94c57.4-18.88,83-37.67,83-60.94V96A64,64,0,0,0,352,32ZM184,128H328a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H184a8,8,0,0,1-8-8V136A8,8,0,0,1,184,128Zm76.18,239.87a64,64,0,1,1,59.69-59.69A64.07,64.07,0,0,1,260.18,367.87Z" />
      <path d="M395.31,468.69,347.63,421c-6.09-6.1-16-6.66-22.38-.86a16,16,0,0,0-.56,23.16l4.68,4.69H182.63l4.36-4.37c6.1-6.09,6.66-16,.86-22.38a16,16,0,0,0-23.16-.56l-48,48a16,16,0,1,0,22.62,22.62L150.63,480H361.37l11.32,11.31a16,16,0,0,0,22.62-22.62Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <circle cx="256" cy="256" r="128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="448" y1="352" x2="352" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="176" y1="80" x2="80.02" y2="175.98" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="464 128 464 48 384 48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="48 128 48 48 128 48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="464" y1="48" x2="346.5" y2="165.5" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="48" y1="48" x2="165.49" y2="165.49" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="464" y1="464" x2="346.65" y2="346.37" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M480,448.94l-48.94-49.08L464,366.92l-31.1-31.11L400,368.71,376.45,345.1a149.64,149.64,0,0,0-.1-178.45l59.55-59.56V144h44V32h-112V76h36.87l-59.55,59.55a149.65,149.65,0,0,0-178.59,0L159.08,128l33-33L161,63.88l-33,33L107.09,76H144V32H32V144H76V107.09L96.87,128l-33,33L95,192.05l33-33,7.56,7.57A149.18,149.18,0,0,0,106,255.94c0,82.69,67.27,150,150,150a149.12,149.12,0,0,0,89.44-29.67l23.51,23.58L335.81,432.9,366.92,464l33-33,48.9,49Zm-330-193a106,106,0,1,1,106,106A106.09,106.09,0,0,1,150,255.94Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M458,32H390a22,22,0,0,0,0,44h14.89l-59.57,59.57a149.69,149.69,0,0,0-178.64,0L159.11,128l26.45-26.44a22,22,0,0,0-31.12-31.12L128,96.89,107.11,76H122a22,22,0,0,0,0-44H54A22,22,0,0,0,32,54v68a22,22,0,0,0,44,0V107.11L96.89,128,70.47,154.42a22,22,0,1,0,31.11,31.11L128,159.11l7.57,7.57A149.19,149.19,0,0,0,106,256c0,82.71,67.29,150,150,150a149.2,149.2,0,0,0,89.46-29.67L369,399.9l-26.54,26.54a22,22,0,0,0,31.12,31.12l26.49-26.5,42.37,42.48a22,22,0,0,0,31.16-31.08L431.17,400l26.39-26.39a22,22,0,0,0-31.12-31.12l-26.35,26.35-23.55-23.62a149.68,149.68,0,0,0-.11-178.49L436,107.11V122a22,22,0,0,0,44,0V54A22,22,0,0,0,458,32ZM150,256A106,106,0,1,1,256,362,106.12,106.12,0,0,1,150,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <path d="M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <rect x="32" y="64" width="448" height="80" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="312" y1="240" x2="200" y2="352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="312" y1="352" x2="200" y2="240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <polygon points="337.46 240 312 214.54 256 270.54 200 214.54 174.54 240 230.54 296 174.54 352 200 377.46 256 321.46 312 377.46 337.46 352 281.46 296 337.46 240" style="fill:none" />
      <polygon points="337.46 240 312 214.54 256 270.54 200 214.54 174.54 240 230.54 296 174.54 352 200 377.46 256 321.46 312 377.46 337.46 352 281.46 296 337.46 240" style="fill:none" />
      <path d="M64,160,93.74,442.51A24,24,0,0,0,117.61,464H394.39a24,24,0,0,0,23.87-21.49L448,160ZM312,377.46l-56-56-56,56L174.54,352l56-56-56-56L200,214.54l56,56,56-56L337.46,240l-56,56,56,56Z" />
      <rect x="32" y="48" width="448" height="80" rx="12" ry="12" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-k</title>
      <rect x="32" y="48" width="448" height="80" rx="32" ry="32" />
      <path d="M74.45,160a8,8,0,0,0-8,8.83L92.76,421.39a1.5,1.5,0,0,0,0,.22A48,48,0,0,0,140.45,464H371.54a48,48,0,0,0,47.67-42.39l0-.21,26.27-252.57a8,8,0,0,0-8-8.83ZM323.31,340.69a16,16,0,1,1-22.63,22.62L256,318.63l-44.69,44.68a16,16,0,0,1-22.63-22.62L233.37,296l-44.69-44.69a16,16,0,0,1,22.63-22.62L256,273.37l44.68-44.68a16,16,0,0,1,22.63,22.62L278.62,296Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="80" y1="112" x2="432" y2="112" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="176" x2="256" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="184" y1="176" x2="192" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="328" y1="176" x2="320" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M296,64H216a7.91,7.91,0,0,0-8,8V96h96V72A7.91,7.91,0,0,0,296,64Z" style="fill:none" />
      <path d="M292,64H220a4,4,0,0,0-4,4V96h80V68A4,4,0,0,0,292,64Z" style="fill:none" />
      <path d="M447.55,96H336V48a16,16,0,0,0-16-16H192a16,16,0,0,0-16,16V96H64.45L64,136H97l20.09,314A32,32,0,0,0,149,480H363a32,32,0,0,0,31.93-29.95L415,136h33ZM176,416l-9-256h33l9,256Zm96,0H240V160h32ZM296,96H216V68a4,4,0,0,1,4-4h72a4,4,0,0,1,4,4Zm40,320H303l9-256h33Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-e</title>
      <path d="M296,64H216a7.91,7.91,0,0,0-8,8V96h96V72A7.91,7.91,0,0,0,296,64Z" style="fill:none" />
      <path d="M432,96H336V72a40,40,0,0,0-40-40H216a40,40,0,0,0-40,40V96H80a16,16,0,0,0,0,32H97L116,432.92c1.42,26.85,22,47.08,48,47.08H348c26.13,0,46.3-19.78,48-47L415,128h17a16,16,0,0,0,0-32ZM192.57,416H192a16,16,0,0,1-16-15.43l-8-224a16,16,0,1,1,32-1.14l8,224A16,16,0,0,1,192.57,416ZM272,400a16,16,0,0,1-32,0V176a16,16,0,0,1,32,0ZM304,96H208V72a7.91,7.91,0,0,1,8-8h80a7.91,7.91,0,0,1,8,8Zm32,304.57A16,16,0,0,1,320,416h-.58A16,16,0,0,1,304,399.43l8-224a16,16,0,1,1,32,1.14Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="352 368 464 368 464 256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M48,144,169.37,265.37a32,32,0,0,0,45.26,0l50.74-50.74a32,32,0,0,1,45.26,0L448,352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="352 368 464 368 464 256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="48 144 192 288 288 192 448 352" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="352 368 464 368 464 256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M48,144,169.37,265.37a32,32,0,0,0,45.26,0l50.74-50.74a32,32,0,0,1,45.26,0L448,352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="352 144 464 144 464 256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M48,368,169.37,246.63a32,32,0,0,1,45.26,0l50.74,50.74a32,32,0,0,0,45.26,0L448,160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="352 144 464 144 464 256" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="48 368 192 224 288 320 448 160" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-c</title>
      <polyline points="352 144 464 144 464 256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M48,368,169.37,246.63a32,32,0,0,1,45.26,0l50.74,50.74a32,32,0,0,0,45.26,0L448,160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <polygon points="48 448 256 64 464 448 48 448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-s</title>
      <polygon points="256 32 20 464 492 464 256 32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M464,464H48a16,16,0,0,1-14.07-23.62l208-384a16,16,0,0,1,28.14,0l208,384A16,16,0,0,1,464,464Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <line x1="176" y1="464" x2="336" y2="464" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="464" x2="256" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384,224c0-50.64-.08-134.63-.12-160a16,16,0,0,0-16-16l-223.79.26a16,16,0,0,0-16,15.95c0,30.58-.13,129.17-.13,159.79,0,64.28,83,112,128,112S384,288.28,384,224Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M128,96H48v16c0,55.22,33.55,112,80,112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384,96h80v16c0,55.22-33.55,112-80,112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M399.9,80s0-27.88,0-48H112V80H32v38c0,32,9.5,62.79,26.76,86.61,13.33,18.4,34.17,31.1,52.91,37.21,5.44,29.29,20.2,57.13,50.19,79.83,22,16.66,48.45,28.87,72.14,33.86V436H160v44H352V436H278V355.51c23.69-5,50.13-17.2,72.14-33.86,30-22.7,44.75-50.54,50.19-79.83,18.74-6.11,39.58-18.81,52.91-37.21C470.5,180.79,480,150,480,118V80ZM94.4,178.8C83.72,164.12,77.23,144.4,76.16,124H112v67.37C108.06,190.23,99.08,185.25,94.4,178.8Zm323.2,0C413,185.41,406,191.38,400,191.38c0-22.4,0-46.29-.05-67.38h35.9C434.77,144.4,428,163.9,417.6,178.8Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M464,80H403.9a4,4,0,0,1-4-4c0-4.89,0-9,0-12.08A32,32,0,0,0,367.9,32h0l-223.79.26a32,32,0,0,0-31.94,31.93c0,3.23,0,7.22,0,11.81a4,4,0,0,1-4,4H48A16,16,0,0,0,32,96v16c0,54.53,30,112.45,76.52,125.35a7.82,7.82,0,0,1,5.55,5.9c5.77,26.89,23.52,52.5,51.41,73.61,20.91,15.83,45.85,27.5,68.27,32.48a8,8,0,0,1,6.25,7.8V444a4,4,0,0,1-4,4H176.45c-8.61,0-16,6.62-16.43,15.23A16,16,0,0,0,176,480H335.55c8.61,0,16-6.62,16.43-15.23A16,16,0,0,0,336,448H276a4,4,0,0,1-4-4V357.14a8,8,0,0,1,6.25-7.8c22.42-5,47.36-16.65,68.27-32.48,27.89-21.11,45.64-46.72,51.41-73.61a7.82,7.82,0,0,1,5.55-5.9C450,224.45,480,166.53,480,112V96A16,16,0,0,0,464,80ZM112,198.22a4,4,0,0,1-6,3.45c-10.26-6.11-17.75-15.37-22.14-21.89-11.91-17.69-19-40.67-19.79-63.63a4,4,0,0,1,4-4.15h40a4,4,0,0,1,4,4C112.05,143.45,112,174.87,112,198.22Zm316.13-18.44c-4.39,6.52-11.87,15.78-22.13,21.89a4,4,0,0,1-6-3.46c0-26.51,0-56.63-.05-82.21a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4.15C447.16,139.11,440.05,162.09,428.14,179.78Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <rect x="32" y="96" width="448" height="272" rx="32.14" ry="32.14" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="128" y1="416" x2="384" y2="416" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M488,384H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H488a8,8,0,0,1,8,8V376A8,8,0,0,1,488,384Z" />
      <rect x="112" y="400" width="288" height="32" rx="4" ry="4" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-f</title>
      <path d="M447.86,384H64.14A48.2,48.2,0,0,1,16,335.86V128.14A48.2,48.2,0,0,1,64.14,80H447.86A48.2,48.2,0,0,1,496,128.14V335.86A48.2,48.2,0,0,1,447.86,384Z" />
      <line x1="128" y1="416" x2="384" y2="416" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M256,272V432a32,32,0,0,1-32,32h0a32,32,0,0,1-32-32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M464,272c0-114.88-93.12-208-208-208S48,157.12,48,272h0a67.88,67.88,0,0,1,96,0h0a78.28,78.28,0,0,1,102.31-7.27L256,272l9.69-7.27A78.28,78.28,0,0,1,368,272h0a67.88,67.88,0,0,1,96,0Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="64" x2="256" y2="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M128.93,280l-.26-.3c-.9-.74-1.83-1.43-2.77-2.1Z" />
      <path d="M383.08,280l2.62-2.12c-.79.58-1.57,1.17-2.34,1.79Z" />
      <path d="M463.14,186.44A224.55,224.55,0,0,0,272,48.57V32H240V48.57A223.58,223.58,0,0,0,32,272v22.52l12.25-11.21a62.63,62.63,0,0,1,81.43-5.88l.22.17c.94.67,1.87,1.36,2.77,2.1q2.09,1.69,4,3.61L144,294.63l11.31-11.32a62.59,62.59,0,0,1,81.4-5.78L240,280V432a16,16,0,0,1-32,0V416H176v16a48,48,0,0,0,96,0V280l3.29-2.47a62.59,62.59,0,0,1,81.4,5.78L368,294.63l11.31-11.32q1.95-1.94,4.05-3.64c.77-.62,1.55-1.21,2.34-1.79l.26-.21c24.63-18.47,60-16.13,81.81,5.64L480,294.51V272A223.62,223.62,0,0,0,463.14,186.44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-q</title>
      <path d="M414.39,113.61A222.26,222.26,0,0,0,278.06,49.07a8.09,8.09,0,0,1-6.88-5.62,15.79,15.79,0,0,0-30.36,0,8.09,8.09,0,0,1-6.88,5.62A224,224,0,0,0,32,271.52a16.41,16.41,0,0,0,7.24,13.87,16,16,0,0,0,20.07-2.08,51.89,51.89,0,0,1,73.31-.06,15.94,15.94,0,0,0,22.6.15,62.59,62.59,0,0,1,81.49-5.87h0a8.24,8.24,0,0,1,3.29,6.59V431.54c0,8.6-6.6,16-15.19,16.44A16,16,0,0,1,208,432a16,16,0,0,0-16.29-16c-9,.16-15.9,8.11-15.7,17.1A48.06,48.06,0,0,0,223.38,480c26.88.34,48.62-21.93,48.62-48.81V284.12a8.24,8.24,0,0,1,3.29-6.59h0a62.59,62.59,0,0,1,81.4,5.78,16,16,0,0,0,22.62,0,51.91,51.91,0,0,1,73.38,0,16,16,0,0,0,19.54,2.41A16.4,16.4,0,0,0,480,271.51,222.54,222.54,0,0,0,414.39,113.61Z" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M208,352H144a96,96,0,0,1,0-192h64" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" />
      <path d="M304,160h64a96,96,0,0,1,0,192H304" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M200.66,352H144a96,96,0,0,1,0-192h55.41" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-width="48" />
      <path d="M312.59,160H368a96,96,0,0,1,0,192H311.34" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-width="48" />
    </svg>`,
    `<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M200.66,352H144a96,96,0,0,1,0-192h55.41" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" />
      <path d="M312.59,160H368a96,96,0,0,1,0,192H311.34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-width="32" stroke-linejoin="round" d="M374.79,308.78,457.5,367A16,16,0,0,0,480,352.38V159.62A16,16,0,0,0,457.5,145l-82.71,58.22A16,16,0,0,0,368,216.3v79.4A16,16,0,0,0,374.79,308.78Z" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-width="32" stroke-miterlimit="10" d="M50.19,140.57A51.94,51.94,0,0,0,32,180V332a52.15,52.15,0,0,0,52,52H268a51.6,51.6,0,0,0,22-4.9" />
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-width="32" stroke-miterlimit="10" d="M208,128h60.48A51.68,51.68,0,0,1,320,179.52V248" />
      <line fill="none" stroke="#000" stroke-linecap="round" stroke-width="32" stroke-miterlimit="10" x1="416" y1="416" x2="80" y2="80" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="232" y="-5.59" width="32" height="507.18" transform="translate(-102.72 248) rotate(-45)" />
      <path d="M32,112a16,16,0,0,0-16,16V384a16,16,0,0,0,16,16H320a15.89,15.89,0,0,0,9.34-3l-285-285Z" />
      <path d="M336,208V128a16,16,0,0,0-16-16H179.63L425.07,357.44,496,400V112Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M336,179.52A67.52,67.52,0,0,0,268.48,112h-79.2a4,4,0,0,0-2.82,6.83L329.17,261.54a4,4,0,0,0,6.83-2.82Z" />
      <path d="M16,180V332a68,68,0,0,0,68,68H268a67.66,67.66,0,0,0,42.84-15.24,4,4,0,0,0,.33-6L54.41,122a4,4,0,0,0-4.87-.62A68,68,0,0,0,16,180Z" />
      <path d="M464,384.39a32,32,0,0,1-13-2.77,15.77,15.77,0,0,1-2.71-1.54l-82.71-58.22h0A32,32,0,0,1,352,295.7V216.3a32,32,0,0,1,13.58-26.16l82.71-58.22a15.77,15.77,0,0,1,2.71-1.54,32,32,0,0,1,45,29.24V352.38a32,32,0,0,1-32,32Z" />
      <line fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" x1="416" y1="416" x2="80" y2="80" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M374.79,308.78,457.5,367A16,16,0,0,0,480,352.38V159.62A16,16,0,0,0,457.5,145l-82.71,58.22A16,16,0,0,0,368,216.3v79.4A16,16,0,0,0,374.79,308.78Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M268,384H84a52.15,52.15,0,0,1-52-52V180a52.15,52.15,0,0,1,52-52H268.48A51.68,51.68,0,0,1,320,179.52V332A52.15,52.15,0,0,1,268,384Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M336,208V128a16,16,0,0,0-16-16H32a16,16,0,0,0-16,16V384a16,16,0,0,0,16,16H320a16,16,0,0,0,16-16V304l160,96V112Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M464,384.39a32,32,0,0,1-13-2.77,15.77,15.77,0,0,1-2.71-1.54l-82.71-58.22h0A32,32,0,0,1,352,295.7V216.3a32,32,0,0,1,13.58-26.16l82.71-58.22a15.77,15.77,0,0,1,2.71-1.54,32,32,0,0,1,45,29.24V352.38a32,32,0,0,1-32,32Z" />
      <path d="M268,400H84a68.07,68.07,0,0,1-68-68V180a68.07,68.07,0,0,1,68-68H268.48A67.6,67.6,0,0,1,336,179.52V332A68.07,68.07,0,0,1,268,400Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M126,192H56a8,8,0,0,0-8,8V312a8,8,0,0,0,8,8h69.65a15.93,15.93,0,0,1,10.14,3.54l91.47,74.89A8,8,0,0,0,240,392V120a8,8,0,0,0-12.74-6.43l-91.47,74.89A15,15,0,0,1,126,192Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M320,320c9.74-19.38,16-40.84,16-64,0-23.48-6-44.42-16-64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M368,368c19.48-33.92,32-64.06,32-112s-12-77.74-32-112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M416,416c30-46,48-91.43,48-160S446,143,416,96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M320,320c9.74-19.38,16-40.84,16-64,0-23.48-6-44.42-16-64" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M368,368c19.48-33.92,32-64.06,32-112s-12-77.74-32-112" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M416,416c30-46,48-91.43,48-160S446,143,416,96" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <polygon points="125.65 176.1 32 176.1 32 335.9 125.65 335.9 256 440 256 72 125.65 176.1" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M232,416a23.88,23.88,0,0,1-14.2-4.68,8.27,8.27,0,0,1-.66-.51L125.76,336H56a24,24,0,0,1-24-24V200a24,24,0,0,1,24-24h69.75l91.37-74.81a8.27,8.27,0,0,1,.66-.51A24,24,0,0,1,256,120V392a24,24,0,0,1-24,24ZM125.82,336Zm-.27-159.86Z" />
      <path d="M320,336a16,16,0,0,1-14.29-23.19c9.49-18.87,14.3-38,14.3-56.81,0-19.38-4.66-37.94-14.25-56.73a16,16,0,0,1,28.5-14.54C346.19,208.12,352,231.44,352,256c0,23.86-6,47.81-17.7,71.19A16,16,0,0,1,320,336Z" />
      <path d="M368,384a16,16,0,0,1-13.86-24C373.05,327.09,384,299.51,384,256c0-44.17-10.93-71.56-29.82-103.94a16,16,0,0,1,27.64-16.12C402.92,172.11,416,204.81,416,256c0,50.43-13.06,83.29-34.13,120A16,16,0,0,1,368,384Z" />
      <path d="M416,432a16,16,0,0,1-13.39-24.74C429.85,365.47,448,323.76,448,256c0-66.5-18.18-108.62-45.49-151.39a16,16,0,1,1,27-17.22C459.81,134.89,480,181.74,480,256c0,64.75-14.66,113.63-50.6,168.74A16,16,0,0,1,416,432Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M189.65,192H120a8,8,0,0,0-8,8V312a8,8,0,0,0,8,8h69.65a16,16,0,0,1,10.14,3.63l91.47,75A8,8,0,0,0,304,392.17V119.83a8,8,0,0,0-12.74-6.44l-91.47,75A16,16,0,0,1,189.65,192Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M384,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M391.12,341.48l-28.6-14.36,7.18-14.3c9.49-18.9,14.3-38,14.3-56.82,0-19.36-4.66-37.92-14.25-56.73L362.48,185,391,170.48l7.26,14.25C410.2,208.16,416,231.47,416,256c0,23.83-6,47.78-17.7,71.18Z" />
      <polygon points="189.65 176.1 96 176.1 96 335.9 189.65 335.9 320 440 320 72 189.65 176.1" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M296,416.19a23.92,23.92,0,0,1-14.21-4.69l-.66-.51-91.46-75H120a24,24,0,0,1-24-24V200a24,24,0,0,1,24-24h69.65l91.46-75,.66-.51A24,24,0,0,1,320,119.83V392.17a24,24,0,0,1-24,24Z" />
      <path d="M384,336a16,16,0,0,1-14.29-23.18c9.49-18.9,14.3-38,14.3-56.82,0-19.36-4.66-37.92-14.25-56.73a16,16,0,0,1,28.5-14.54C410.2,208.16,416,231.47,416,256c0,23.83-6,47.78-17.7,71.18A16,16,0,0,1,384,336Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M157.65,192H88a8,8,0,0,0-8,8V312a8,8,0,0,0,8,8h69.65a16,16,0,0,1,10.14,3.63l91.47,75A8,8,0,0,0,272,392.17V119.83a8,8,0,0,0-12.74-6.44l-91.47,75A16,16,0,0,1,157.65,192Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M352,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M400,368c19.48-34,32-64,32-112s-12-77.7-32-112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <polygon points="157.65 176.1 64 176.1 64 335.9 157.65 335.9 288 440 288 72 157.65 176.1" />
      <path d="M352,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <path d="M400,368c19.48-34,32-64,32-112s-12-77.7-32-112" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M264,416.19a23.92,23.92,0,0,1-14.21-4.69l-.66-.51-91.46-75H88a24,24,0,0,1-24-24V200a24,24,0,0,1,24-24h69.65l91.46-75,.66-.51A24,24,0,0,1,288,119.83V392.17a24,24,0,0,1-24,24Z" />
      <path d="M352,336a16,16,0,0,1-14.29-23.18c9.49-18.9,14.3-38,14.3-56.82,0-19.36-4.66-37.92-14.25-56.73a16,16,0,0,1,28.5-14.54C378.2,208.16,384,231.47,384,256c0,23.83-6,47.78-17.7,71.18A16,16,0,0,1,352,336Z" />
      <path d="M400,384a16,16,0,0,1-13.87-24C405,327.05,416,299.45,416,256c0-44.12-10.94-71.52-29.83-103.95A16,16,0,0,1,413.83,136C434.92,172.16,448,204.88,448,256c0,50.36-13.06,83.24-34.12,120A16,16,0,0,1,400,384Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <line x1="416" y1="432" x2="64" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M224,136.92v33.8a4,4,0,0,0,1.17,2.82l24,24a4,4,0,0,0,6.83-2.82V120.57a24.53,24.53,0,0,0-12.67-21.72,23.91,23.91,0,0,0-25.55,1.83,8.27,8.27,0,0,0-.66.51l-31.94,26.15a4,4,0,0,0-.29,5.92l17.05,17.06a4,4,0,0,0,5.37.26Z" />
      <path d="M224,375.08l-78.07-63.92A32,32,0,0,0,125.65,304H64V208h50.72a4,4,0,0,0,2.82-6.83l-24-24A4,4,0,0,0,90.72,176H56a24,24,0,0,0-24,24V312a24,24,0,0,0,24,24h69.76l91.36,74.8a8.27,8.27,0,0,0,.66.51A23.93,23.93,0,0,0,243.63,413,24.49,24.49,0,0,0,256,391.45V341.28a4,4,0,0,0-1.17-2.82l-24-24a4,4,0,0,0-6.83,2.82ZM125.82,336Z" />
      <path d="M352,256c0-24.56-5.81-47.88-17.75-71.27a16,16,0,0,0-28.5,14.54C315.34,218.06,320,236.62,320,256q0,4-.31,8.13a8,8,0,0,0,2.32,6.25l19.66,19.67a4,4,0,0,0,6.75-2A146.89,146.89,0,0,0,352,256Z" />
      <path d="M416,256c0-51.19-13.08-83.89-34.18-120.06a16,16,0,0,0-27.64,16.12C373.07,184.44,384,211.83,384,256c0,23.83-3.29,42.88-9.37,60.65a8,8,0,0,0,1.9,8.26l16.77,16.76a4,4,0,0,0,6.52-1.27C410.09,315.88,416,289.91,416,256Z" />
      <path d="M480,256c0-74.26-20.19-121.11-50.51-168.61a16,16,0,1,0-27,17.22C429.82,147.38,448,189.5,448,256c0,47.45-8.9,82.12-23.59,113a4,4,0,0,0,.77,4.55L443,391.39a4,4,0,0,0,6.4-1C470.88,348.22,480,307,480,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <line x1="416" y1="432" x2="64" y2="80" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M352,256c0-24.56-5.81-47.88-17.75-71.27L327,170.47,298.48,185l7.27,14.25C315.34,218.06,320,236.62,320,256a112.91,112.91,0,0,1-.63,11.74l27.32,27.32A148.8,148.8,0,0,0,352,256Z" />
      <path d="M416,256c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82-27.64,16.12,8.06,13.82C373.07,184.44,384,211.83,384,256c0,25.93-3.89,46.21-11,65.33l24.5,24.51C409.19,319.68,416,292.42,416,256Z" />
      <path d="M480,256c0-74.26-20.19-121.11-50.51-168.61L420.88,73.9l-27,17.22,8.61,13.49C429.82,147.38,448,189.5,448,256c0,48.76-9.4,84-24.82,115.55l23.7,23.7C470.16,351.39,480,309,480,256Z" />
      <polygon points="256 72 182.4 130.78 256 204.37 256 72" />
      <polygon points="32 176.1 32 335.9 125.65 335.9 256 440 256 339.63 92.47 176.1 32 176.1" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <line x1="416" y1="432" x2="64" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M243.33,98.86a23.89,23.89,0,0,0-25.55,1.82l-.66.51L188.6,124.54a8,8,0,0,0-.59,11.85l54.33,54.33A8,8,0,0,0,256,185.06V120.57A24.51,24.51,0,0,0,243.33,98.86Z" />
      <path d="M251.33,335.29,96.69,180.69A16,16,0,0,0,85.38,176H56a24,24,0,0,0-24,24V312a24,24,0,0,0,24,24h69.76l92,75.31A23.9,23.9,0,0,0,243.63,413,24.51,24.51,0,0,0,256,391.45V346.59A16,16,0,0,0,251.33,335.29Z" />
      <path d="M352,256c0-24.56-5.81-47.87-17.75-71.27a16,16,0,1,0-28.5,14.55C315.34,218.06,320,236.62,320,256q0,4-.31,8.13a8,8,0,0,0,2.32,6.25l14.36,14.36a8,8,0,0,0,13.55-4.31A146,146,0,0,0,352,256Z" />
      <path d="M416,256c0-51.18-13.08-83.89-34.18-120.06a16,16,0,0,0-27.64,16.12C373.07,184.44,384,211.83,384,256c0,23.83-3.29,42.88-9.37,60.65a8,8,0,0,0,1.9,8.26L389,337.4a8,8,0,0,0,13.13-2.79C411,311.76,416,287.26,416,256Z" />
      <path d="M480,256c0-74.25-20.19-121.11-50.51-168.61a16,16,0,1,0-27,17.22C429.82,147.38,448,189.5,448,256c0,46.19-8.43,80.27-22.43,110.53a8,8,0,0,0,1.59,9l11.92,11.92A8,8,0,0,0,452,385.29C471.6,344.9,480,305,480,256Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M237.65,192H168a8,8,0,0,0-8,8V312a8,8,0,0,0,8,8h69.65a16,16,0,0,1,10.14,3.63l91.47,75A8,8,0,0,0,352,392.17V119.83a8,8,0,0,0-12.74-6.44l-91.47,75A16,16,0,0,1,237.65,192Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <polygon points="237.65 176.1 144 176.1 144 335.9 237.65 335.9 368 440 368 72 237.65 176.1" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <title>ionicons-v5-g</title>
      <path d="M344,416a23.92,23.92,0,0,1-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24,24,0,0,1-24-24V200.07a24,24,0,0,1,24-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24,24,0,0,1,368,120V392a24,24,0,0,1-24,24Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M314.21,482.32,257.44,367.58l-44.89-57.39a72.82,72.82,0,0,1-10.13-37.05V144h15.67a40.22,40.22,0,0,1,40.23,40.22V367.58" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M127.9,293.05V218.53S165.16,144,202.42,144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="370.1" y1="274.42" x2="304" y2="231" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="170.53" y1="478.36" x2="224" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <circle cx="258.32" cy="69.48" r="37.26" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M315.09,481.38,258.14,366.26l-45-57.56a73.11,73.11,0,0,1-10.16-37.17V142h15.73A40.36,40.36,0,0,1,259,182.32V344.84" style="stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <polyline points="128.18 291.5 128.18 216.73 193.13 151.63" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" />
      <polygon points="376.35 295.73 292.4 239.35 292.4 194.67 397.08 267.62 376.35 295.73" />
      <polygon points="175.13 498.58 153.7 471.67 234.03 390.13 249.56 422.2 175.13 498.58" />
      <circle cx="259.02" cy="67.21" r="37.38" style="stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:16px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M312.55,479.9l-56.42-114-44.62-57A72.37,72.37,0,0,1,201.45,272V143.64H217a40,40,0,0,1,40,40V365.85" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M127.38,291.78V217.71s37-74.07,74.07-74.07" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M368.09,291.78a18.49,18.49,0,0,1-10.26-3.11L297.7,250A21.18,21.18,0,0,1,288,232.21v-23.7a5.65,5.65,0,0,1,8.69-4.77l81.65,54.11a18.52,18.52,0,0,1-10.29,33.93Z" />
      <path d="M171.91,493.47a18.5,18.5,0,0,1-14.83-7.41c-6.14-8.18-4-17.18,3.7-25.92l59.95-74.66a7.41,7.41,0,0,1,10.76,2.06c1.56,2.54,3.38,5.65,5.19,9.09,5.24,9.95,6,16.11-1.68,25.7-8,10-52,67.44-52,67.44C180.38,492.75,175.77,493.47,171.91,493.47Z" />
      <circle cx="257" cy="69.56" r="37.04" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:16px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="48" y="144" width="416" height="288" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M411.36,144V114A50,50,0,0,0,352,64.9L88.64,109.85A50,50,0,0,0,48,159v49" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M47.5,104H432V51.52a16,16,0,0,0-19.14-15.69l-368,60.48a16,16,0,0,0-12,10.47A39.69,39.69,0,0,1,47.5,104Z" />
      <path d="M463.5,128H47.5a16,16,0,0,0-16,16V432a16,16,0,0,0,16,16h416a16,16,0,0,0,16-16V144A16,16,0,0,0,463.5,128ZM368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z" />
      <path d="M31.33,259.5V116c0-12.33,5.72-18.48,15.42-20,35.2-5.53,108.58-8.5,108.58-8.5s-8.33,16-27.33,16V128c18.5,0,31.33,23.5,31.33,23.5L84.83,236Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M95.5,104h320a87.73,87.73,0,0,1,11.18.71,66,66,0,0,0-77.51-55.56L86,94.08l-.3,0a66,66,0,0,0-41.07,26.13A87.57,87.57,0,0,1,95.5,104Z" />
      <path d="M415.5,128H95.5a64.07,64.07,0,0,0-64,64V384a64.07,64.07,0,0,0,64,64h320a64.07,64.07,0,0,0,64-64V192A64.07,64.07,0,0,0,415.5,128ZM368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z" />
      <path d="M32,259.5V160c0-21.67,12-58,53.65-65.87C121,87.5,156,87.5,156,87.5s23,16,4,16S141.5,128,160,128s0,23.5,0,23.5L85.5,236Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M85.57,446.25H426.43a32,32,0,0,0,28.17-47.17L284.18,82.58c-12.09-22.44-44.27-22.44-56.36,0L57.4,399.08A32,32,0,0,0,85.57,446.25Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M250.26,195.39l5.74,122,5.73-121.95a5.74,5.74,0,0,0-5.79-6h0A5.74,5.74,0,0,0,250.26,195.39Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,397.25a20,20,0,1,1,20-20A20,20,0,0,1,256,397.25Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M479,447.77,268.43,56.64a8,8,0,0,0-14.09,0L43.73,447.77a8,8,0,0,0,7.05,11.79H472A8,8,0,0,0,479,447.77ZM281.38,411.48h-40v-40h40Zm-4-63.92h-32l-6-160h44Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M449.07,399.08,278.64,82.58c-12.08-22.44-44.26-22.44-56.35,0L51.87,399.08A32,32,0,0,0,80,446.25H420.89A32,32,0,0,0,449.07,399.08Zm-198.6-1.83a20,20,0,1,1,20-20A20,20,0,0,1,250.47,397.25ZM272.19,196.1l-5.74,122a16,16,0,0,1-32,0l-5.74-121.95v0a21.73,21.73,0,0,1,21.5-22.69h.21a21.74,21.74,0,0,1,21.73,22.7Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="112" y="112" width="288" height="288" rx="64" ry="64" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M176,112V40a8,8,0,0,1,8-8H328a8,8,0,0,1,8,8v72" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <path d="M336,400v72a8,8,0,0,1-8,8H184a8,8,0,0,1-8-8V400" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="136" y="136" width="240" height="240" rx="8" ry="8" />
      <path d="M384,96H336V16H176V96H128a32,32,0,0,0-32,32V384a32,32,0,0,0,32,32h48v80H336V416h48a32,32,0,0,0,32-32V128A32,32,0,0,0,384,96Zm8,272a24,24,0,0,1-24,24H144a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24H368a24,24,0,0,1,24,24Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect x="136" y="136" width="240" height="240" rx="56" ry="56" />
      <path d="M336,96V32a16,16,0,0,0-16-16H192a16,16,0,0,0-16,16V96a80.09,80.09,0,0,0-80,80V336a80.09,80.09,0,0,0,80,80v64a16,16,0,0,0,16,16H320a16,16,0,0,0,16-16V416a80.09,80.09,0,0,0,80-80V176A80.09,80.09,0,0,0,336,96Zm56,224a72.08,72.08,0,0,1-72,72H192a72.08,72.08,0,0,1-72-72V192a72.08,72.08,0,0,1,72-72H320a72.08,72.08,0,0,1,72,72Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M400,320c0,88.37-55.63,144-144,144S112,408.37,112,320c0-94.83,103.23-222.85,134.89-259.88a12,12,0,0,1,18.23,0C296.77,97.15,400,225.17,400,320Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M344,328a72,72,0,0,1-72,72" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M256,43.91s-144,158.3-144,270.3c0,88.36,55.64,144,144,144s144-55.64,144-144C400,202.21,256,43.91,256,43.91Zm16,362.3v-24a60.07,60.07,0,0,0,60-60h24A84.09,84.09,0,0,1,272,406.21Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M265.12,60.12a12,12,0,0,0-18.23,0C215.23,97.15,112,225.17,112,320c0,88.37,55.64,144,144,144s144-55.63,144-144C400,225.17,296.77,97.15,265.12,60.12ZM272,412a12,12,0,0,1-11.34-16,11.89,11.89,0,0,1,11.41-8A60.06,60.06,0,0,0,332,328.07a11.89,11.89,0,0,1,8-11.41A12,12,0,0,1,356,328,84.09,84.09,0,0,1,272,412Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M332.41,310.59a115,115,0,0,0-152.8,0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M393.46,249.54a201.26,201.26,0,0,0-274.92,0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M447.72,182.11a288,288,0,0,0-383.44,0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <path d="M256,416a32,32,0,1,1,32-32A32,32,0,0,1,256,416Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M332.69,320a115,115,0,0,0-152.8,0" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:42px" />
      <path d="M393.74,259a201.26,201.26,0,0,0-274.92,0" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:42px" />
      <path d="M448,191.52a288,288,0,0,0-383.44,0" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:42px" />
      <path d="M300.67,384,256,433l-44.34-49a56.73,56.73,0,0,1,88.92,0Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M346.65,304.3a136,136,0,0,0-180.71,0,21,21,0,1,0,27.91,31.38,94,94,0,0,1,124.89,0,21,21,0,0,0,27.91-31.4Z" />
      <path d="M256.28,183.7a221.47,221.47,0,0,0-151.8,59.92,21,21,0,1,0,28.68,30.67,180.28,180.28,0,0,1,246.24,0,21,21,0,1,0,28.68-30.67A221.47,221.47,0,0,0,256.28,183.7Z" />
      <path d="M462,175.86a309,309,0,0,0-411.44,0,21,21,0,1,0,28,31.29,267,267,0,0,1,355.43,0,21,21,0,0,0,28-31.31Z" />
      <circle cx="256.28" cy="393.41" r="32" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M398.57,80H113.43V96S87.51,272,256,272,398.57,96,398.57,96Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="256" y1="272" x2="256" y2="432" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
      <line x1="352" y1="432" x2="160" y2="432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      <line x1="112" y1="160" x2="400" y2="160" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M453,112V66.33H60.75V112L235.88,288V406H124.75v42H389V406H277.88V288Zm-336.65-3.67h281l-37.81,38H154.16Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M414.56,94.92V80a16,16,0,0,0-16-16H113.44a16,16,0,0,0-16,16V94.92c-1.46,11.37-9.65,90.74,36.93,144.69,24.87,28.8,60.36,44.85,105.63,47.86V416H160a16,16,0,0,0,0,32H352a16,16,0,0,0,0-32H272V287.47c45.27-3,80.76-19.06,105.63-47.86C424.21,185.66,416,106.29,414.56,94.92Zm-285.3,3.41a15.14,15.14,0,0,0,.18-2.33H382.56a15.14,15.14,0,0,0,.18,2.33,201.91,201.91,0,0,1,0,45.67H129.32A204.29,204.29,0,0,1,129.26,98.33Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path d="M208,368V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M256,368V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24V368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <path d="M183,274a23.73,23.73,0,0,1-29.84,16.18h0a23.72,23.72,0,0,1-16.17-29.84l25-84.28A44.85,44.85,0,0,1,205,144H307a44.85,44.85,0,0,1,43,32.08l25,84.28a23.72,23.72,0,0,1-16.17,29.84h0A23.73,23.73,0,0,1,329.05,274" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <circle cx="256" cy="56" r="40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
      <polyline points="208 192 160 352 352 352 304 192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <circle cx="255.75" cy="56" r="56" />
      <path d="M310.28,191.4h.05l7.66-2.3,36.79,122.6,46-13.8-16.21-54.16c0-.12,0-.24-.07-.36l-16.84-56.12-4.71-15.74h0l-.9-3H362l-2.51-8.45a44.84,44.84,0,0,0-43-32.08H195.24a44.84,44.84,0,0,0-43,32.08l-2.51,8.45h-.06l-.9,3h0l-4.71,15.74-16.84,56.12c0,.12,0,.24-.07.36L110.94,297.9l46,13.8L193.7,189.1l7.54,2.26L148.25,368h51.5V512h52V368h8V512h52V368h51.51Z" />
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <circle cx="255.75" cy="56" r="56" />
      <path d="M394.63,277.9,384.3,243.49s0-.07,0-.11l-22.46-74.86h-.05l-2.51-8.45a44.87,44.87,0,0,0-43-32.08h-120a44.84,44.84,0,0,0-43,32.08l-2.51,8.45h-.06l-22.46,74.86s0,.07,0,.11L117.88,277.9c-3.12,10.39,2.3,21.66,12.57,25.14a20,20,0,0,0,25.6-13.18l25.58-85.25h0l2.17-7.23A8,8,0,0,1,199.33,200a7.78,7.78,0,0,1-.17,1.61v0L155.43,347.4A16,16,0,0,0,170.75,368h29V482.69c0,16.46,10.53,29.31,24,29.31s24-12.85,24-29.31V368h16V482.69c0,16.46,10.53,29.31,24,29.31s24-12.85,24-29.31V368h30a16,16,0,0,0,15.33-20.6L313.34,201.59a7.52,7.52,0,0,1-.16-1.59,8,8,0,0,1,15.54-2.63l2.17,7.23h0l25.57,85.25A20,20,0,0,0,382.05,303C392.32,299.56,397.74,288.29,394.63,277.9Z" />
    </svg>`
    ];







// vars
let icon_container = qa('span');
let icon_name;
react_native_icons.forEach((icons)=>{
    
    let react_icon_name = icons.getAttribute('name');
    
})
icon_container.forEach((icons)=>{
    
    icon_name = icons.getAttribute('name');
    
    let filterArrayIndex = filterArray.indexOf(icon_name);
    let icon = svg[filterArrayIndex];
    // console.log(svg[filterArrayIndex]);
    
    
    icons.innerHTML = `${icon}`;    
    
})




