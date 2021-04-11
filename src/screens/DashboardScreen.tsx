import React, {memo} from 'react';
import {Text} from 'react-native';
import {ScrollableHeader, Card, Section} from '@components';
import {Title, Paragraph} from 'react-native-paper';
import {theme} from '@styles';

const Dashboard = () => {
  const {size} = theme;
  return (
    <ScrollableHeader headerContent={<Text style={{fontSize: 30}}>$9.99</Text>}>
      <Section resetTop style={{marginTop: -size.md}}>
        <Card>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </Section>
      <Section>
        <Card>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </Section>
      <Section>
        <Card>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </Section>
      <Section>
        <Card>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </Section>
      <Section>
        <Card>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </Section>
      <Section>
        <Card>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </Section>
      <Section>
        <Card>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </Section>
    </ScrollableHeader>
  );
};

export default memo(Dashboard);
