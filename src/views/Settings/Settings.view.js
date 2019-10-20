import React from 'react';
import { inject, observer } from 'mobx-react';
import {
	ViewWrapper,
	Heading,
	Grid,
	InputField,
	Button,
	FieldMessage,
	FieldLabel,
	Jumbotron,
} from 'components';

import {
	Formik,
	Field,
	Form,
	ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

const Settings = inject((store) => ({
	authStore: store.rootStore.auth,
	userStore: store.rootStore.user,
}))(observer(({ authStore, userStore }) => {
	const validation = Yup.object().shape({
		token: Yup.string()
			.required('Required'),
		refreshInterval: Yup.number()
			.required('Required'),
	});

	const saveSettings = (formValues) => {
		const { run: saveUserSettings } = userStore.methods.saveSettings;
		const { refreshInterval } = formValues;
		saveUserSettings({ refreshInterval })
			.catch(() => {});
	};

	return (
		<ViewWrapper>
			<>
				<Heading size="h1">
					Settings
				</Heading>
				<Grid.Row>
					<Grid.Column>
						{userStore.methods.loadSettings.isComplete && (
							<Formik
								onSubmit={saveSettings}
								validationSchema={validation}
								initialValues={{
									token: authStore.accessToken,
									refreshInterval: userStore.getRefreshInterval,
								}}
								render={({ isValid }) => (
									<Form>
										<Heading size="h6" noMargin>
											Display Settings
										</Heading>
										<Grid.Row>
											<Grid.Column>
												<FieldLabel>Refresh Interval</FieldLabel>
												<Field
													name="refreshInterval"
													type="number"
													placeholder="Refresh Interval"
													component={InputField}
												/>
												<ErrorMessage
													name="refreshInterval"
													component={FieldMessage}
												/>
											</Grid.Column>
										</Grid.Row>
										<Button
											type="submit"
											color="success"
											disabled={!isValid}
											block
											marginTop
											marginBottom
										>
											Save
										</Button>
									</Form>
								)}
							/>
						)}
						<Jumbotron color="secondary">
							<Heading size="h6" noMargin>
								Travis CI Token
							</Heading>
							<Grid.Row>
								<Grid.Column>
									<InputField
										name="token"
										type="text"
										placeholder="Travis CI token..."
										value={authStore.accessToken}
										disabled
									/>
									<ErrorMessage
										name="token"
										component={FieldMessage}
									/>
								</Grid.Column>
								<Grid.Column>
									<Button
										type="button"
										color="danger"
										hollow
										block
									>
										Sign out
									</Button>
								</Grid.Column>
							</Grid.Row>
						</Jumbotron>
					</Grid.Column>
					<Grid.Column>
					</Grid.Column>
				</Grid.Row>
			</>
		</ViewWrapper>
	);
}));

export default Settings;
