import React from 'react';
import { PropTypes } from 'prop-types';

import RepositoryStyle from './Repository.style';

const RepositoryBranch = ({
	name,
	state,
	finishTime,
}) => (
	<RepositoryStyle.Build state={state}>
		<RepositoryStyle.BuildBranch>
			{name}
		</RepositoryStyle.BuildBranch>
		<div>
			{finishTime}
		</div>
	</RepositoryStyle.Build>
);

RepositoryBranch.propTypes = {
	name: PropTypes.string,
	state: PropTypes.string,
	finishTime: PropTypes.date,
};

export default RepositoryBranch;
