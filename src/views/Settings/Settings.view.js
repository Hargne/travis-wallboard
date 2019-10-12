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
		console.log(formValues);
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
										<Grid.Row>
											<Grid.Column>
												<FieldLabel>Travis CI Token</FieldLabel>
												<Field
													name="token"
													type="text"
													placeholder="Travis CI token..."
													component={InputField}
													disabled
												/>
												<ErrorMessage
													name="token"
													component={FieldMessage}
												/>
											</Grid.Column>
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
										>
											Save
										</Button>
									</Form>
								)}
							/>
						)}
					</Grid.Column>
					<Grid.Column />
				</Grid.Row>
			</>
		</ViewWrapper>
	);
}));

export default Settings;
