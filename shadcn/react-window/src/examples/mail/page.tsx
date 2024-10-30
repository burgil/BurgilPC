import { MailComponent } from "./components/mail";
import { accounts, mails } from "./data";

export default function MailPage() {
	// const layout = false; //cookies().get("react-resizable-panels:layout:mail")
	// const collapsed = false; //cookies().get("react-resizable-panels:collapsed")
	const defaultLayout = undefined; //layout ? JSON.parse(layout.value) : undefined
	const defaultCollapsed = undefined; //collapsed ? JSON.parse(collapsed.value) : undefined
	return (
		<div className="flex-col flex">
			<MailComponent
				accounts={accounts}
				mails={mails}
				defaultLayout={defaultLayout}
				defaultCollapsed={defaultCollapsed}
				navCollapsedSize={4}
			/>
		</div>
	);
}
