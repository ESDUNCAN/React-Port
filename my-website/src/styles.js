import styled from "styled-components";
import { blue, white } from "@carbon/colors";

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

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`;

export const ProjectTitle = styled.h4`
  font-weight: bold;
`;
