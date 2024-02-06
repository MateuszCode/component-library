import React from "react"
import Badge from "../Badge/Badge"
import Banner from "../Banner/Banner"
import Card from "../Card/Card"
import Testimonial from "../Testimonial/Testimonial"
import Popup from "../Popup/Popup"
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { LuPartyPopper } from "react-icons/lu";
import Confetti from 'react-confetti'

export default function App() {
    const [confettiOn, setConfettiOn] = React.useState(false)

    function handleOnClick() {
        setConfettiOn(oldState => !oldState)
    }

    return (
    <>

    <h1 className="title">Component Library</h1>

{confettiOn ? 
        <Confetti
        width={1500}
        height={2000} /> :
        null}

    <div className="badges">
    <Badge 
    color="indigo"
    shape="pill" >
        This badge
    </Badge>

    <Badge 
    shape="square" >
       uses a shape value
    </Badge>

    <Badge 
    color="pink"
    shape="pill" >
        choose: pill
    </Badge>

    <Badge 
    color="green"
    shape="square" >
        or square
    </Badge>
    
    <Badge 
    color="yellow"
    shape="pill" >
        and a color value
    </Badge>

    <Badge 
    color="purple"
    shape="square" >
        like blue or red.
    </Badge>

    </div>
    <br></br>
    <Banner state="success"
    title="Success"
    >
        This is a success... and this is a pretty simple banner. 
    </Banner>
    
    <Banner state="warning"
    title="Warning - the user doesn't have to pass the text, the banner will also work with just the title.">
    </Banner>

    <Banner state="neutral"
    title="Neutral">
        By setting the state value the user can choose between 4 different states: success, warning, neutral and danger.
    </Banner>


    <Banner state="danger"
    title="Danger - when the user clicks on this banner, it will be expanded to show the text."
    expandable="true">
        The user can use this kind of banner by setting the expandable value to true. 

    </Banner>

    <br></br>

    <Card 
    title="This is the default card">
        This is a pretty simple card.
    </Card>

    <Card 
    iconColor="red"
    title="This is a red card">
        The card comes with an iconColor value with 4 possible colors for the icon: blue, red, yellow and green.   
    </Card>

    <Card 
    iconClass="card-purple-icon"
    title="But there are more possibilites...">
        The user can use an iconClass value to pass a class to the icon and apply their own styling.
    </Card>

    <Card 
    icon={<IoArrowUpCircleOutline />}
    title="...and even more possibilites...">
        The user can use the icon value to use any icon that they chose.
    </Card>
    
    <Card 
    icon={<LuPartyPopper />}
    title="...and there's one more possibility"
    onIconClick={handleOnClick}>
        

        The user can add an onClick function to the icon by using an iconOnClick value. This will also activate the hover class of 
        the icon which changes the cursor to pointer and scales the icon up on hover and focus. Just click and wait for it :)
    </Card>

    <br></br>

    <Testimonial
    fullName="Alex Smith"
    company="Aeroworks, CEO">
        This is a testimonial that you can use to talk about your experience. And now this is some filler text - lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </Testimonial>


    <Popup
        title="This is a pop-up"
        state="neutral"
        position="bottom-left"
        >
            The user can use the same states as for the banners.
    </Popup>

    <Popup
        title="The user can change the position"
        state="warning"
        position="bottom-right"
        >
            By setting the position value to bottom/top-right/left.
    </Popup>
   
    </>

    
    );
    }