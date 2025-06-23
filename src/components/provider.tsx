import { ThemeProvider } from "./theme-provider.tsx"

type FC = React.FC<{ children: React.ReactNode }>

export const Provider: FC = ({ children }) => {
	return <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
}
