import type { $ } from "@ctxlyr/react-state"

export type $Model = $.Model<$Store, "Compose">

type $Store = $.Store<{
	Compose: $.Slice<
		[
			$.Context<{ chatMessages: Array<Message> }>,
			$.Action<{ sendMessage: string }>,
		]
	>
	Generate: $.Slice<
		[
			$.Context<{
				chatMessages: Array<Message>
				newMessage: Message
				responseBuffer: string
			}>,
			$.SubSlice<{
				Stream: $.Slice<[$.OnEntry]>

				Error: $.Slice<
					[
						$.Context<{ errorMsg: string }>,
						$.Action<{ reset: void; retry: void }>,
					]
				>
			}>,
		]
	>
}>

export type Message = string
export type ResponseBuffer = string
