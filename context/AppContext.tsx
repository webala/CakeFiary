import {createContext, useContext, useMemo, useState} from 'react'

const AppContext = createContext()

export function AppWrapper({childred}) {
    const [appState, setAppState] = useState({})

    const contextValue = useMemo(() => {
        return [appState, setAppState]
    }, [appState, setAppState])

    return (
        <AppContext.Provider value={contextValue}>
            {childred}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}