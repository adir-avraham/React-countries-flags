

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ImageIcon from '@material-ui/icons/Image';
import PublicIcon from '@material-ui/icons/Public';

import { Link } from "react-router-dom";


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <Link to="add-image">
      <BottomNavigationAction label="Add" icon={<AddAPhotoIcon />} />
       </Link>
      
      <BottomNavigationAction label="Images" icon={<ImageIcon />} />
      <BottomNavigationAction label="Countries" icon={<PublicIcon />} />
    </BottomNavigation>
  );
}





// import React from 'react';
// import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
// import ImageIcon from '@material-ui/icons/Image';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import TypoGraphy from '@material-ui/core/Typography'


// function NavBar(props: any) {

//     return (
//         <List component="nav">
//             <ListItem component="div">
//                 <ListItemText inset>
//                     <TypoGraphy color="inherit" variant="h6">
//                         Add <AddAPhotoIcon/>
//                </TypoGraphy>
//                 </ListItemText>


//                 <ListItemText inset>
//                     <TypoGraphy color="inherit" variant="h6">
//                         Images <ImageIcon/>
//                </TypoGraphy>
//                 </ListItemText>


//                 <ListItemText inset>
//                     <TypoGraphy color="inherit" variant="h6">
//                         Contact
//                </TypoGraphy>
//                 </ListItemText>
//             </ListItem >

//         </List>
//     )
// }


// export default NavBar;