import React from "react";
import ContentHeader from "../../Components/Content/Header";
import HistoryCard from "../../Components/HistoryCard";
import SelectInput from "../../Components/SelectInput";
import { Container, Content, Filters } from "./styles";

const List: React.FC = () => {
  const months = [
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
  ];

  const years = [
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter recurrent">
          Recorrentes{" "}
        </button>
        <button type="button" className="tag-filter eventual">
          Eventuais{" "}
        </button>
      </Filters>

      <Content>
        <HistoryCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="23/09/2020"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
};

export default List;
