import { PopupButton } from "react-calendly";

export function ScheduleCall(){
    return(
        <div>{typeof window !== 'undefined'?
        <PopupButton
          url="https://calendly.com/muscled/"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("__next")!}
          text="schedule a call"
        />:""}</div>
    )
}