import "../style.css"
import { Context, select$, useWatch } from "@ctxlyr/react-state/use"

export const StoreLayer = () => {
	return (
		<Context.Chat.Layer context={{ chatMessages: [] }}>
			<ExampleApp />
		</Context.Chat.Layer>
	)
}

const ExampleApp: React.FC = () => {
	const { context } = Context.Chat.useStore()
	const chatMessages = useWatch(context.chatMessages$)

	return (
		<div className="example-app">
			<ul>
				{chatMessages.map((msg) => (
					<li key={msg}>{msg}</li>
				))}
			</ul>
			<MessageInput />
		</div>
	)
}

const MessageInput: React.FC = () => {
	const { slice$ } = Context.Chat.useStore()
	const currentSlice = useWatch(slice$)

	switch (currentSlice) {
		case "Compose":
			return <ComposeView />
		case "Generate.Stream":
			return <StreamingView />
		case "Generate.Error":
			return <ErrorView />
	}
}

const ComposeView: React.FC = () => {
	const { action } = Context.Chat.useStore("Compose")

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				const formData = new FormData(e.currentTarget)
				const message = formData.get("new-message") as string
				action.sendMessage(message)
			}}
		>
			<textarea name="new-message" />
			<button type="submit">Send</button>
		</form>
	)
}

const StreamingView: React.FC = () => {
	const { selected: ctx } = Context.Chat.useStore(
		"Generate.Stream",
		select$("responseBuffer"),
	)

	return <output>{ctx.responseBuffer}</output>
}

const ErrorView: React.FC = () => {
	const { selected: ctx, action } = Context.Chat.useStore(
		"Generate.Error",
		select$("errorMsg", "responseBuffer"),
	)

	return (
		<section>
			<header>
				<p>Mock Error: {ctx.errorMsg}</p>
				<nav>
					<button onClick={action.retry}>Retry</button>
					<button onClick={action.reset}>Reset</button>
				</nav>
			</header>
			<output>{ctx.responseBuffer}</output>
		</section>
	)
}
