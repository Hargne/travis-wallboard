import React from 'react';
import { inject, observer } from 'mobx-react';
import {
	Formik,
	Field,
	Form,
	ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import {
	InputField,
	Button,
	Grid,
	FieldMessage,
} from 'components';

const Auth = inject((store) => ({
	authStore: store.rootStore.auth,
}))(observer(({ authStore }) => {
	const validation = Yup.object().shape({
		token: Yup.string()
			.required('Required'),
	});

	const authorize = (formValues) => {
		const { run: setAccessToken } = authStore.methods.setAccessToken;
		const { token } = formValues;
		setAccessToken(token)
			.catch(() => {});
	};

	return (
		<Formik
			onSubmit={authorize}
			validationSchema={validation}
			initialValues={{ token: '' }}
			render={({ isValid }) => (
				<Form>
					<Grid.Row>
						<Grid.Column>
							<Field
								name="token"
								type="text"
								placeholder="Travis CI token..."
								component={InputField}
							/>
							<ErrorMessage
								name="token"
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
						Authorize
					</Button>
				</Form>
			)}
		/>
	);
}));

export default Auth;
