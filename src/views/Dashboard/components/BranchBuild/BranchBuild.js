import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import TimeAgo from 'react-timeago';
import HumanizeDuration from 'humanize-duration';

import { Loader } from 'components';
import Style from './BranchBuild.style';

const BranchBuild = ({
	id,
	refreshInterval,
	fetchLatestBuild,
}) => {
	const [buildInfo, setBuildInfo] = useState(0);

	const fetchBuildInfo = () => {
		if (fetchLatestBuild) {
			fetchLatestBuild(id)
				.then((build) => {
					setBuildInfo(build);
				});
		}
	};

	useEffect(() => {
		fetchBuildInfo();
		setInterval(() => fetchBuildInfo(), refreshInterval);
	}, []);

	return (
		<>
			{!buildInfo && (
				<Loader />
			)}
			{buildInfo && (
				<Style.Container state={buildInfo.state}>
					<Style.BranchName>
						{buildInfo.branch.name}
					</Style.BranchName>
					<Style.AuthorAndTime>
						<TimeAgo date={buildInfo.finished_at} />
						{buildInfo.created_by && (
							<> by <b>{buildInfo.created_by.login}</b></>
						)}
					</Style.AuthorAndTime>
					{buildInfo.commit && (
						<Style.CommitMsg>
							&quot;{buildInfo.commit.message}&quot;
						</Style.CommitMsg>
					)}
					<Style.Duration>
						<i className="fas fa-stopwatch" /> {HumanizeDuration(buildInfo.duration * 1000)}
					</Style.Duration>
				</Style.Container>
			)}
		</>
	);
};

BranchBuild.propTypes = {
	id: PropTypes.number,
	refreshInterval: PropTypes.number,
	fetchLatestBuild: PropTypes.func,
};

export default BranchBuild;
