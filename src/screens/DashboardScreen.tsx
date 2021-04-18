import React, {memo} from 'react';
import {Text, StyleSheet} from 'react-native';
import {ScrollableHeader, Card, Section, InfoCard, Screen} from '@components';
import {Title, Paragraph, List, Avatar} from 'react-native-paper';
import {theme} from '@styles';

const Dashboard = () => {
  const {size} = theme;

  const payload = [
    {
      title: 'Coca-Cola bottle',
      status: 'delivered',
      amount: 2.22,
      thumbnail: 'https://picsum.photos/200',
    },
    {
      title: 'Family milk',
      status: 'ready to send',
      amount: 9.22,
      thumbnail: 'https://picsum.photos/200',
    },
    {
      title: 'My cool product',
      status: 'ready to send',
      amount: 4.28,
      thumbnail: 'https://picsum.photos/200',
    },
    // {
    //   title: 'Coca cola',
    //   status: 'sent',
    //   amount: 4.28,
    //   thumbnail: 'https://picsum.photos/200',
    // },
    // {
    //   title: 'Budweiser',
    //   status: 'sent',
    //   amount: 4.28,
    //   thumbnail: 'https://picsum.photos/200',
    // },
  ];

  return (
    <Screen>
      <ScrollableHeader
        headerContent={<Text style={styles.headerContainer}>$9.99</Text>}>
        <Section resetTop style={{marginTop: -size.md}}>
          <InfoCard
            title="Latest transactions"
            actionTitle="view all"
            action={() => console.log('some')}>
            {payload.map((item, index) => (
              <List.Item
                key={`last-transactions-${index}`}
                title={item.title}
                description={item.status}
                left={() => (
                  <Avatar.Image
                    size={50}
                    source={{
                      uri: item.thumbnail,
                    }}
                  />
                )}
                right={() => <Text>${item.amount}</Text>}
              />
            ))}
          </InfoCard>
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
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    fontSize: 30,
  },
});

export default memo(Dashboard);
