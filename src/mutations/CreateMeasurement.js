import gql from 'graphql-tag';

export default gql`
mutation {
    createMeasurement($email: Number, $sensorHash: String) {
        sensor {
            id
            sensorHash
            createdOnServer
        }
    }
}
`;
