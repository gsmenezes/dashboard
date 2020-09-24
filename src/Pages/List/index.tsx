import React, { useMemo, useState, useEffect } from "react";
import ContentHeader from "../../Components/Content/Header";
import HistoryCard from "../../Components/HistoryCard";
import SelectInput from "../../Components/SelectInput";
import expenses from "../../Repositories/expenses";
import gains from "../../Repositories/gains";
import formatCurrency from "../../Utils/formatCurrency";
import formatDate from "../../Utils/formatDate";
import { Container, Content, Filters } from "./styles";

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);

  const { type } = match.params;
  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas";
  }, [type]);

  const lineColor = useMemo(() => {
    return type === "entry-balance" ? "#F7931B" : "#E44C4E";
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

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

  useEffect(() => {
    const response = listData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0',
      };
    });
    setData(response);
  }, []);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
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
        {data.map((item) => (
          <HistoryCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dataFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
