import React, { useState } from "react";
import DefaultText from "../defaltText";
import { Container, FixRow } from "./styled";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../../theme";
import { useNavigation } from "@react-navigation/native";
import { formatedText } from "../../../utils";
const HeaderHome = ({ data }) => {
  console.log(data);
  const { navigate } = useNavigation();
  return (
    <Container>
      <FixRow>
        <DefaultText
          align="center"
          mBottom={5}
          text="My"
          themeColor="primary"
          type="title1"
        />
        <DefaultText
          align="center"
          mBottom={5}
          mLeft={10}
          text={formatedText(data.name || "Bank", 12)}
          themeColor="whitePure"
          type="title2"
        />
        <AntDesign
          name="down"
          style={{ marginLeft: 10 }}
          onPress={() => navigate("Menu")}
          size={18}
          color={theme.color.general.greyLighter}
        />
      </FixRow>
    </Container>
  );
};

export default HeaderHome;
