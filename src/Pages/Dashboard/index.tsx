import React from "react";
import ContentHeader from "../../Components/Content/Header";
import SelectInput from "../../Components/SelectInput";
import { Container } from "./styles";

const Dashboard: React.FC = () => {

  const options = [{
    value:'' , label: ''
  }]

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <SelectInput options={options} />
        </ContentHeader>
    </Container>
  );
};

export default Dashboard;
