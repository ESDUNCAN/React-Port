import styled from "styled-components";
import { blue } from "@carbon/colors";

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${blue[20]};
  color: ${blue[70]};
  border-radius: 2px;
  font-weight: bold;
`;
