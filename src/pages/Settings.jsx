import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
	return (
		<Row>
			<UpdateSettingsForm />
			<Heading as="h1">Update hotel settings</Heading>;
		</Row>
	);
}

export default Settings;
