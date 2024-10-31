import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle-new";
import { Button } from "@/components/ui/button";
import AuthenticationPage from "./examples/authentication/page";
import CardsPage from "./examples/cards/page";
import DashboardPage from "./examples/dashboard/page";
import SettingsProfilePage from "./examples/forms/page";
import { ProfileForm } from "./examples/forms/profile-form";
import SettingsLayout from "./examples/forms/layout";
import SettingsNotificationsPage from "./examples/forms/notifications/page";
import SettingsDisplayPage from "./examples/forms/display/page";
import SettingsAppearancePage from "./examples/forms/appearance/page";
import SettingsAccountPage from "./examples/forms/account/page";
import MailPage from "./examples/mail/page";
import MusicPage from "./examples/music/page";
import PlaygroundPage from "./examples/playground/page";
import TaskPage from "./examples/tasks/page";

function App() {
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<div>
				<ModeToggle />
				<Button>Click me</Button>
			</div>
			{/* <SettingsLayout> */}
				{/* <SettingsProfilePage /> */}
				{/* <SettingsAccountPage /> */}
				{/* <SettingsAppearancePage /> */}
				{/* <SettingsNotificationsPage /> */}
				{/* <SettingsDisplayPage /> */}
			{/* </SettingsLayout> */}
			{/* <AuthenticationPage /> */}
			{/* <CardsPage /> */}
			{/* <DashboardPage /> */}
			{/* <MailPage /> */}
			{/* <MusicPage /> */}
			{/* <PlaygroundPage /> */}
			{/* <TaskPage /> */}
		</ThemeProvider>
	);
}

export default App;
