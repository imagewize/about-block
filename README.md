# About Block

A WordPress block plugin that provides a professional about section with image and text layout. Perfect for introducing yourself or your business on any WordPress page.

## Features

- Clean, modern layout with image and text columns
- Responsive design with mobile-friendly padding
- Customizable background colors
- Support for rounded profile images
- Typography with Open Sans font (with system font fallbacks)
- Two-paragraph layout with different font sizes for visual hierarchy
- Full support for WordPress block alignment (wide/full)

## Installation

### Via Composer

Install the package using Composer:
```sh
composer require imagewize/about-block
```

### Via WordPress Admin

1. Upload the plugin files to the `/wp-content/plugins/about-block` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.

## Development

### Local Development

1. Clone the repository
2. Run `npm install`
3. Start development server: `npm run start`
4. Build production version: `npm run build`

The development server will watch for changes and automatically rebuild the block.

## Frequently Asked Questions

### How do I customize the block content?

Once added to your page, click on any text to edit it directly. You can also upload your own profile image by clicking the image placeholder.

### How do I change the background color?

Select the block and use the color settings in the right sidebar to modify the background color.

### How do I make the block full width?

Select the block and use the alignment options in the toolbar to choose between default, wide, or full width.

### Can I modify the block structure?

Yes, the block template is now unlocked allowing you to add, remove, or rearrange blocks within it. However, we recommend maintaining the basic column structure for optimal appearance.

### What image size should I use?

We recommend using a square image of at least 300x300 pixels for the profile picture. The image will automatically be cropped to a circle shape.


## Changelog

### 3.0.0-beta
* Release and publication at Packagist
