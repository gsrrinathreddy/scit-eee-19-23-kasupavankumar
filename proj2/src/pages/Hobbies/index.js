import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320056/man-gobbling-down-pasta.jpg',
    title: 'Eating',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.siasat.com/wp-content/uploads/2023/01/Cricket.jpg',
    title: 'Playing Cricket',
    
  },
  {
    img: 'https://www.how2become.com/wp-content/uploads/2018/06/Benefits-of-Puzzle-Solving-for-Adults-Benefit-1-600x400.jpeg',
    title: 'Solving Puzzles',
    
  },
  {
    img: 'https://static.freemake.com/blog/wp-content/uploads/2013/10/rent-movies-online.jpg',
    title: 'Watching Movies',
    
    cols: 2,
  },

  {
    img: 'https://images.indianexpress.com/2022/07/book.jpg',
    title: 'Reading Books',
    
  },
  
 
  {
    img: 'https://thumbs.dreamstime.com/z/surfing-internet-blog-chat-communication-concept-76827175.jpg',
    title: 'Surfing Internet',
    
  },
 
];
