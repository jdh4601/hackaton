import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import itemData from './ItemData';
import ImageListItem from '@mui/material/ImageListItem';
import './ImageList.scss';

export default function StandardImageList() {
  return (
    <div>
      <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={250}>
        {itemData.map(item => (
          <ImageListItem key={item.img} className="clickItem">
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={onImageDetail()}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

let onImageDetail = () => {
  document.location.href = '/page';
};
