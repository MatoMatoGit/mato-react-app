import gql from 'graphql-tag';

export default gql`
{
  allMeasurements(last: 16){
    edges {
      node {
        id
        data
        uuid
        createdOnServer
        sensorHash
      }
    }
  }
}
`;
