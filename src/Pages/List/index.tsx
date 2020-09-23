import React from 'react';
import ContentHeader from '../../Components/Content/Header';
import SelectInput from '../../Components/SelectInput';
import { Container } from './styles';

const List: React.FC = () => {
    const options = [{
        value:'' , label: ''
      }]
    
      return (
        <Container>
          <ContentHeader title="Saídas" lineColor="#E44C4E">
            <SelectInput options={options} />
            </ContentHeader>
        </Container>
      );
    };

export default List;