import React from 'react';
import { Container, Tag } from './styles';

interface IHistoryCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryCard: React.FC<IHistoryCardProps> = ({tagColor, title, subtitle, amount}) => {
    return (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );
}

export default HistoryCard;