import 'styled-components'
import { borderRaduis, fontSize, colours } from './Theme'

declare module 'styled-components' {
	export interface DefaultTheme {
		fontSize: { [key in fontSize]: string }
		borderRadius: { [key in borderRaduis]: string }
		colours: { [key in colours]: string }
	}
}
