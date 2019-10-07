import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DashboardStyle from './Dashboard.style';

const token = 'YOUR-TOKEN';
const config = {
    headers: {
		'Travis-API-Version': 3,
		'Authorization': `token ${token}`
	}
};

const Dashboard = () => {
	const [builds, setBuilds] = useState(0);

	const fetchBuilds = ({ repoId, branches }) => {
		axios.get(`https://api.travis-ci.com/repo/${repoId}/branches`, config)
			.then(response => {
				const data = response.data.branches.filter(branch => branches.includes(branch.name));
				setBuilds(data)
			});
	}

	useEffect(() => {
		fetchBuilds({ repoId: '2228645', branches: ['dev', 'qa', 'master'] });
	}, []);

	return (
		<div>
			Dashboard
			<DashboardStyle.BuildContainer>
			{builds && builds.map((build, i) => (
				<DashboardStyle.Build state={build.last_build.state} key={i}>
					<DashboardStyle.BuildBranch>
						{build.name}
					</DashboardStyle.BuildBranch>
					<div>
						{build.last_build.finished_at}
					</div>
				</DashboardStyle.Build>
			))}
			</DashboardStyle.BuildContainer>
		</div>
	)
};

export default Dashboard;
