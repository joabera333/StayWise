// import styled from "styled-components";

// const StyledFormRowVertical = styled.div`
// 	display: grid;
// 	align-items: center;
// 	grid-template-columns: 24rem 1fr 1.2fr;
// 	gap: 2.4rem;

// 	padding: 1.2rem 0;

// 	&:first-child {
// 		padding-top: 0;
// 	}

// 	&:last-child {
// 		padding-bottom: 0;
// 	}

// 	&:not(:last-child) {
// 		border-bottom: 1px solid var(--color-grey-100);
// 	}

// 	&:has(button) {
// 		display: flex;
// 		justify-content: flex-end;
// 		gap: 1.2rem;
// 	}
// `;

// const Label = styled.label`
// 	font-weight: 500;
// `;

// const Error = styled.span`
// 	font-size: 1.4rem;
// 	color: var(--color-red-700);
// `;

// function FormRowVertical({ label, error, children }) {
// 	return (
// 		<StyledFormRowVertical>
// 			{label && <label htmlFor={children.props.id}>{label}</label>}
// 			{children}
// 			{error && <Error>{error}</Error>}
// 		</StyledFormRowVertical>
// 	);
// }

// export default FormRowVertical;

// //import styled from "styled-components";

// // function FormRow({ label, error, children }) {
// // 	return (
// // 		<div className="form-row">
// // 			{label && <label htmlFor={children.props.id}>{label}</label>}
// // 			{children}
// // 			{error && <span className="error">{error}</span>}
// // 		</div>
// // 	);
// // }

// // export default FormRow;
import styled from "styled-components";

const StyledFormRowVertical = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	padding: 1.2rem 0;

	&:first-child {
		padding-top: 0;
	}

	&:last-child {
		padding-bottom: 0;
	}

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}
`;

const Label = styled.label`
	font-weight: 500;
	font-size: 1.4rem;
`;

const Error = styled.span`
	font-size: 1.2rem;
	color: var(--color-red-700);
`;

function FormRowVertical({ label, error, children }) {
	return (
		<StyledFormRowVertical>
			{label && <Label htmlFor={children.props.id}>{label}</Label>}
			{children}
			{error && <Error>{error}</Error>}
		</StyledFormRowVertical>
	);
}

export default FormRowVertical;
