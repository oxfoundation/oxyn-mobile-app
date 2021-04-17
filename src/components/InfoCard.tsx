import React from 'react';
import {StyleSheet} from 'react-native';

import {Card, Button} from '@components';

interface Props {
  children: React.ReactNode;
  title: string;
  // titleIcon: string,
  actionTitle: string;
  action?: () => void;
}

const InfoCard = ({children, title, actionTitle, action}: Props) => {
  return (
    <Card>
      {!!title && <Card.Title title={title} />}
      <Card.Content>{children}</Card.Content>
      {!!actionTitle && (
        <Card.Actions>
          <Button
            title={actionTitle}
            onPress={action}
            mode="text"
            labelStyle={styles.actionLabel}
          />
        </Card.Actions>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  actionLabel: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

export default InfoCard;
