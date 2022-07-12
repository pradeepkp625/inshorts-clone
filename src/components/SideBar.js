import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import Article from './Article';
import axios from 'axios';
import categories from '../data/category';
import Loading from './Loading';
export default function SwipeableTemporaryDrawer() {
  const [userData, setUserdata] = React.useState([])
  const [Category, setCategory] = React.useState('technology')
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const getUserData=async()=>{
      // setIsLoading(true)
      let apiKey='0fe92a7831aa41c68302297e91dce89b'
      try {
        let fetchData = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${Category}&apiKey=${apiKey}`);
        setUserdata(fetchData.data.articles)
        // setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    getUserData()
  }, [userData,isLoading,Category])

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <div
     style={{textAlign:'center',paddingTop:10,paddingBottom:10}}
     >Categories</div> 
      <Divider />

      <List>
        {categories.map((text, index) => (
          <ListItem key={text} disablePadding onClick={()=>{
            setIsLoading(true)
            setCategory(text)
            }}>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    isLoading ?
    <Loading/>
    :
    <div className="header">
    <div className='top__section'>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      <div className="img__container">
          <img src={'https://assets.inshorts.com/website_assets/images/logo_inshorts.png'} alt={'icon'}/>
      </div>
    </div>
    <Container maxWidth="md">
    <div className="download__from">
      <div className="text">For the best experience use inshorts app on your smartphone</div>
      <img src='https://assets.inshorts.com/website_assets/images/appstore.png' alt=''/>
      <img src='https://assets.inshorts.com/website_assets/images/playstore.png' alt=''/>
    </div>
    </Container>
    <Container maxWidth="md">
        <Article
          data={userData?userData:[]}
        />
    </Container>
    </div>
  );
}
