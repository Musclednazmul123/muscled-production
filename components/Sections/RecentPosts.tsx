import { recentPost } from 'Data/recentPost';
import React from 'react';
import { Title, Card, Info, Container } from 'Styles/recentPost.style';

export default function RecentPosts() {
  return (
    <Container>
      <Title className="title">
        <hr />
        <h2> Recent posts</h2>
      </Title>
      {recentPost.map((Data, index) => (
        <Card className="recent-post" key={'recent-post-' + index}>
          <img src={Data.thumbnail} />
          <Info className="recent-post-info">
            <h3>{Data.title}</h3>
            <p>{Data.description}</p>
          </Info>
        </Card>
      ))}
    </Container>
  );
}
