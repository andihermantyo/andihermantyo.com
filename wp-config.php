<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'anda5877_wp4');

/** MySQL database username */
define('DB_USER', 'anda5877_wp4');

/** MySQL database password */
define('DB_PASSWORD', '@S1Tcp5[7Q');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'eo1fxfocuovdrxe3l025kfgegzegg6vmtmo524vlkuszong9svquotu32whi1789');
define('SECURE_AUTH_KEY',  'fddi2pty5jc6vxjxrbqeu84iw0naqot4rluqbwpapa2b7oveo7bocxq0xcx05hcz');
define('LOGGED_IN_KEY',    'wcmviyicrapnw4goy2njhru5zclapyihfksilietsr3w9mrlekprt3pyvhycxxqy');
define('NONCE_KEY',        'nuunc8p1mpt4hv6zpqdpzsldh74rinnbqyhbny96b0ktzzi3bjk32hhcepgwtu1n');
define('AUTH_SALT',        'pq1cqpupnyunnypokp0eq02evvuc3caxxlc88ni6bfoaos0oyjf5t1sjkxzft8mz');
define('SECURE_AUTH_SALT', 'hptp90cuoikuut2xayehkod9kbyqvrwpliaykggjkhlq2gng9yr5wrnyxaeqsady');
define('LOGGED_IN_SALT',   'fkqdedjvixgtr66zoj6nzifkvbvakkcfmalzg20tmruiklb4eabgpp0kszobr0d7');
define('NONCE_SALT',       'dbp0sznyhjmebzcuwryehd1g4rwuexjd1u5v16hpculmiqdpgqasujnuaeqw595k');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Multisite */
define( 'WP_ALLOW_MULTISITE', true );
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
define('DOMAIN_CURRENT_SITE', 'andihermantyo.com');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
