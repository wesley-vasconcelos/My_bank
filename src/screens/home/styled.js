import styled, { css } from "styled-components";
import {
  getPercentageSizeHeight,
  getPercentageSizeWidth,
  getRelativeSize,
} from "../../../utils";

export const Container = styled.View`
  flex: 1;
  background-color: ${(g) => g.theme.color.button.primaryDark};
  align-items: center;
  justify-content: center;
  padding-top: ${getPercentageSizeWidth(20)};
`;
