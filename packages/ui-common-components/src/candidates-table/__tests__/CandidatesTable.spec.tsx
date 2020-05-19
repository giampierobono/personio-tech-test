import * as React from 'react';
import { Candidate } from '@personio/api-sdk';
import CandidatesTable from '../CandidatesTable';
import renderer from 'react-test-renderer';

const mockCandidates = [
  {
    id: 1,
    name: 'Alvin Satterfield',
    email: 'cornellbartell@connellyleannon.biz',
    birthDate: '1997-09-07',
    yearOfExperience: 5,
    positionApplied: 'Technician',
    applicationDate: '2018-07-02',
    status: 'rejected',
  },
  {
    id: 2,
    name: 'Colette Morar',
    email: 'corinnestark@pacocha.co',
    birthDate: '1998-08-03',
    yearOfExperience: 3,
    positionApplied: 'Designer',
    applicationDate: '2017-11-18',
    status: 'waiting',
  },
  {
    id: 3,
    name: 'Rosalind Rath DDS',
    email: 'sandyankunding@marks.io',
    birthDate: '1980-03-28',
    yearOfExperience: 15,
    positionApplied: 'Orchestrator',
    applicationDate: '2018-01-31',
    status: 'approved',
  },
];

describe('CandidatesTable', () => {
  it('should render candidates table', () => {
    const component = renderer.create(
      <CandidatesTable
        candidates={mockCandidates as Array<Candidate>}
        hasError={false}
        retryCallback={() => true}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render error message', () => {
    const component = renderer.create(
      <CandidatesTable candidates={[]} hasError={true} retryCallback={() => true} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
