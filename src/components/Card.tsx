import React, {ComponentProps} from 'react';
import {Card as PaperCard} from 'react-native-paper';

type PaperCardType = ComponentProps<typeof PaperCard>;
type Props = PaperCardType & {
  children: React.ReactNode;
};

const Card = ({children}: Props) => {
  return <PaperCard>{children}</PaperCard>;
};

Card.Content = PaperCard.Content;
Card.Actions = PaperCard.Actions;
Card.Cover = PaperCard.Cover;
Card.Title = PaperCard.Title;

export default Card;
