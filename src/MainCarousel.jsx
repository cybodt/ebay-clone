import React, { useState } from 'react';
import './MainCarousel.css';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Paper, Button } from '@mui/material';

function Item(props) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Paper className='paper-main' style={{ backgroundColor: props.item.bgColor }}>
      <div className='paper-main__left'>
        <div className='paper-main__heading'>
          <h2 style={{ color: props.item.nameColor }}>
            {props.item.name}
          </h2>
        </div>
        <div className='paper-main__paragraph'>
          <p style={{ color: props.item.descriptionColor }}>
            {props.item.description}
          </p>
        </div>
        <Button className="paper-main__check-button" style={{
          color: isHovering ? props.item.buttonHoverColor : props.item.buttonColor,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: props.item.borderColor,
          backgroundColor: isHovering ? props.item.bgHoverColor : ''
        }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.item.buttonName}
          <ArrowForwardIcon fontSize='large' />
        </Button>
      </div>
      <div className='paper-main__right'>
        <img 
        className='paper-main__img-carousel' 
        src={props.item.srcImg} 
        alt={props.item.altImg} 
        />
      </div>
    </Paper>
  )
}

function MainCarousel() {
  const items = [
    {
      name: 'Everyone says these sellers are the best!',
      description: 'These items come with outstanding service from Top Rated Sellers.',
      buttonName: 'Shop the best',
      nameColor: '#5c1b05',
      descriptionColor: '#5c1b05',
      buttonColor: '#5c1b05',
      buttonHoverColor: '#f7e376',
      borderColor: '#5c1b05',
      bgColor: '#f7e376',
      bgHoverColor: '#5c1b05',
      srcImg: '/images/banner-one.jpg',
      altImg: 'banner one'
    },
    {
      name: 'You may have a special offer',
      description: 'Sign in to your account to find out.',
      buttonName: 'Go to My eBay',
      nameColor: '#ffdec7',
      descriptionColor: '#ffdec7',
      buttonColor: '#ffdec7',
      buttonHoverColor: '#b03005',
      borderColor: '#ffdec7',
      bgColor: '#b03005',
      bgHoverColor: '#ffdec7',
      srcImg: '/images/banner-two.jpg',
      altImg: 'banner two'
    }
  ]
  return (
    <Carousel
      navButtonsAlwaysVisible={true}
      interval={10000}
      animation={'slide'}
      duration={1000}
      indicators={false}
      navButtonsProps={{
        style: {
          margin: 0,
          width: 25,
          height: 25,
          opacity: 1,
          backgroundColor: '#f2f2f2',
          color: 'black'
        }
      }}
    >
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  );
};

export default MainCarousel;