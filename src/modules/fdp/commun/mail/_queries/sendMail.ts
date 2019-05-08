import gql from 'graphql-tag';

export const sendMailQuery = gql`
  query sendMail($mail: String!, $name: String!, $message: String!) {
    portfolioSendMail(
      mailerInfo: { mail: $mail, name: $name, message: $message }
    )
  }
`;
