import NavBar from "./navbar";
import Footer from "./footer";
import Container from "./container";

function Layout({children}) {
    return ( 
        <>
        <NavBar/>
        <Container>{children}</Container>
        <Footer/>
        </>
     );
}

export default Layout;