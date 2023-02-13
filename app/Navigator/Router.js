// import Main from "../Screen/Main";
import Match from "../Screen/Match";
import AllMatch from "../Screen/AllMatch";
// import Message from "../Screen/Message";
import PersonalChat from "../Screen/PersonalChat";
// import Profile from "../Screen/Profile";
import Stories from "../Screen/Stories";
import Reels from "../Screen/Reels";

     /********* New React Native *****************/

import Home from "../../containers/Home";
import City from '../../components/City';
import Filters from "../../components/Filters";
import CardItem from "../../components/CardItem";
import Matches from "../../containers/Matches";
import Messages from "../../containers/Messages";
import Message from "../../components/Message";
import Profile from "../../containers/Profile";
import ProfileItem from "../../components/ProfileItem";

const Routes = {
    // Splash: {
    //     name: 'Splash',
    //     Screen: Splash,
    //     title: 'Splash',
    // },
    // SignUp: {
    //     name: 'SignUp',
    //     Screen: SignUp,
    //     title: 'SignUp',
    // },
    // Otp: {
    //     name: 'Otp',
    //     Screen: Otp,
    //     title: 'Otp',
    // },
    
    // SignUpDetails: {
    //     name: 'SignUpDetails',
    //     Screen: SignUpDetails,
    //     title: 'SignUpDetails'
    // },
    // Dashboard: {
    //     name: 'Dashboard',
    //     Screen: Dashboard,
    //     title: 'Dashboard',
    //   },
    Home: {
        name: 'Home',
        Screen: Home,
        title: 'Home',
      },
      City: {
        name: 'City',
        Screen: City,
        title: 'City',
      },
      Filters: {
        name: 'Filters',
        Screen: Filters,
        title: 'Filters',
      },
      CardItem: {
        name: 'CardItem',
        Screen: CardItem,
        title: 'CardItem',
      },
      Matches: {
        name: 'Matches',
        Screen: Matches,
        title: 'Matches',
      },
      Messages: {
        name: 'Messages',
        Screen: Messages,
        title: 'Messages',
      },
      Match: {
        name: 'Match',
        Screen: Match,
        title: 'Match',
      },
      Reels: {
        name: 'Reels',
        Screen: Reels,
        title: 'Reels',
      },
      Message: {
        name: 'Message',
        Screen: Message,
        title: 'Message',
      },
      PersonalChat: {
        name: 'PersonalChat',
        Screen: PersonalChat,
        title: 'PersonalChat',
      },
      Stories: {
        name: 'Stories',
        Screen: Stories,
        title: 'Stories',
      },
     
      Profile: {
        name: 'Profile',
        Screen: Profile,
        title: 'Profile',
      },
      ProfileItem: {
        name: 'ProfileItem',
        Screen: ProfileItem,
        title: 'ProfileItem',
      },
      BottomTabs: {
        name: 'BottomTabs'
      },
      Home: {
        name: 'Home'
      },
}

export default Routes;