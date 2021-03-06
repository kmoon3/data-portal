/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal metadata row component.
 */

// Core dependencies
import React from 'react';

// App dependencies
import MetadataDetail from './metadataDetail';

// Styles
import compStyles from './metadataRow.module.css';

const classNames = require('classnames');

class MetadataInternalRow extends React.Component {

	render() {
		const {element, isFirst, isLast, required, unFriendly} = this.props,
			{name, description, type} = element,
			isRequired = required && required.includes(name),
			regex = /_/g,
			whiteSpace = /\s/g,
			anchor = unFriendly.replace(whiteSpace, '').replace(/\./g, '-');
		return (
			<div id={anchor}
				 className={classNames(compStyles.metadataRow, {[compStyles.groupEnd]: isLast}, {[compStyles.groupBegin]: isFirst})}>
				<MetadataDetail anchor={anchor}
								description={description}
								isRequired={isRequired}
								label={name.replace(regex, ' ')}
								type={type}
								unFriendly={unFriendly}/>
			</div>
		);
	}
}

export default MetadataInternalRow;
