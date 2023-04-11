import HomePage from "./pages/HomePage.js";

import { SocketProvider } from "./context/SocketContext.js";


const BandNames = () => {
    return (
        <SocketProvider>
            <HomePage/>
        </SocketProvider>
    );
}
 
export default BandNames;