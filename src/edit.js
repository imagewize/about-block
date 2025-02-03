/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { registerBlockType } from '@wordpress/blocks';

// Register dependent blocks
import '@wordpress/block-library';

// Import profile image
import profileImage from './assets/profile.jpg';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
    const TEMPLATE = [
        ['core/group', { 
            backgroundColor: 'bggray',
            style: {
                color: {
                    background: 'var(--wp--preset--color--bggray, #f5f5f5)'
                }
            },
            layout: { type: 'constrained' }
        }, [
            ['core/spacer', { height: '40px' }],
            ['core/columns', { 
                backgroundColor: 'bggray',
                style: {
                    color: {
                        background: 'var(--wp--preset--color--bggray, #f5f5f5)'
                    }
                }
            }, [
                ['core/column', { width: '20%' }, [
                    ['core/image', { 
                        className: 'is-style-rounded',
                        url: profileImage,
                        alt: 'Profile Image'
                    }]
                ]],
                ['core/column', { width: '80%' }, [
                    ['core/heading', { 
                        fontSize: '3xl',
                        fontFamily: 'open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                        style: {
                            typography: { fontStyle: 'normal', fontWeight: '400' }
                        },
                        content: 'Custom Crafted Websites & E-Commerce.'
                    }],
                    ['core/paragraph', { 
                        fontSize: 'lg',
                        fontFamily: 'open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                        textColor: 'textbodygray',
                        style: {
                            typography: { lineHeight: 1.6 },
                            color: {
                                text: 'var(--wp--preset--color--textbodygray, #4a5568)'
                            }
                        },
                        content: 'At Imagewize, we empower SMEs and startups by delivering custom web and e-commerce solutions. With expertise in web design, development, and SEO, every project is tailored to meet your unique needs and drive success. This site is dedicated to helping businesses grow online with customized, high-performance solutions.'
                    }]
                ]]
            ]]
        ]]
    ];

    return (
        <div {...useBlockProps()}>
            <InnerBlocks template={TEMPLATE} templateLock="all" />
        </div>
    );
}
