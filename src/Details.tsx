import { memo } from 'react';
import { IDetails } from './types';

interface Props {
  details: IDetails;
  handleLoading: () => void;
}

function InitialDetails({ details, handleLoading }: Props) {
  return (
    <div>
      <h1>{details.title}</h1>
      <div>{details.description}</div>
      <button onClick={handleLoading}>{details.buttonText}</button>
    </div>
  );
}

export const Details = memo(InitialDetails);
