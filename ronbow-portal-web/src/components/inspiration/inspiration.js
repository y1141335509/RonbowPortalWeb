import './inspiration.css';
import React from 'react';
import { Card, Tag, Button } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';

const { Meta } = Card;

const cardData = [
  { title: "Kevin's Kitchen", description: "Description 1", imgSrc: "https://cdn.ronbow.com/images/IMG_0835.jpg", tags: ['L-shape', 'Modern'] },
  { title: "Card 2", description: "Description 2", imgSrc: "https://cdn.ronbow.com/images/IMG_0835.jpg", tags: ['Tag 1', 'Tag 2'] },
  { title: "Card 3", description: "Description 3", imgSrc: "https://cdn.ronbow.com/images/IMG_0835.jpg", tags: ['Tag 1'] },
  { title: "Card 4", description: "Description 4", imgSrc: "https://cdn.ronbow.com/images/IMG_0835.jpg", tags: ['Tag 1', 'Tag 2', 'Tag 3'] },
  { title: "Card 5", description: "Description 4", imgSrc: "https://cdn.ronbow.com/images/IMG_0835.jpg", tags: ['Tag 1', 'Tag 2', 'Tag 3'] },
  // { title: "Card 6", description: "Description 4", imgSrc: "https://cdn.ronbow.com/images/IMG_0835.jpg", tags: ['Tag 1', 'Tag 2', 'Tag 3'] },
];

const Inspiration = () => (
  <>
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240, margin: '0 10px 20px 0' }}
          cover={<img alt={card.title} src={card.imgSrc} />}
        >
          <Meta title={card.title} description={card.description} /><br />
          {card.tags.map((tag, tagIndex) => (
            <Tag key={tagIndex}>{tag}</Tag>
          ))}
          <br /><br />
          <Button>View Design</Button>
        </Card>
      ))}
    </div>
  </>
);

export default Inspiration;
