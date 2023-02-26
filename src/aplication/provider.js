import { createContext, useState } from 'react';

const Provider = ({ children }) => {
    const [state, setState] = useState(false); // modificy the initial state to false boolean 
    return (                                //true: total acces  false: need log in always
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;
export const AppContext = createContext();