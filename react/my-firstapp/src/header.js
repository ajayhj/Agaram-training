import SubHeader from "./subheader"
import App from "./App"
function   Header(props){
    return(
        <>
     {props.name}
     <SubHeader place="Kanyakumari"/>
     </>
    )
}

export default Header