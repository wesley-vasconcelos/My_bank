import styled, { css } from "styled-components";
import { getPercentageSizeWidth, getRelativeSize } from "../../../utils";

export const Container = styled.View`
  flex: 0.3;
  background-color: ${(g) => g.theme.color.button.primaryDark};
  align-items: center;
  justify-content: space-around;
  width: ${getPercentageSizeWidth(60)};
  padding-top: ${getRelativeSize(10)}
  flex-direction: row;
`;
export const FixRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
