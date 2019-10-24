/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/italic
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { createDropdown, addToolbarToDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import basicStylesIcon from '../theme/icons/basic-styles.svg';

/**
 * TODO
 *
 * @extends module:core/plugin~Plugin
 */
export default class BasicStylesUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'BasicStylesUI';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const componentFactory = editor.ui.componentFactory;

		componentFactory.add( 'basicStyles', locale => {
			const dropdownView = createDropdown( locale );

			addToolbarToDropdown( dropdownView, [
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'superscript',
				'subscript'
			].filter( name => {
				return componentFactory.has( name );
			} ).map( name => {
				return componentFactory.create( name );
			} ) );

			dropdownView.buttonView.set( {
				label: 'Basic styles',
				tooltip: true,
				icon: basicStylesIcon
			} );

			return dropdownView;
		} );
	}
}
