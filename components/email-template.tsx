// import * as React from "react";

// interface EmailTemplateProps {
//   firstName: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   firstName,
// }) => (
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//   </div>
// );

// export default EmailTemplate;




import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName }) => {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>Thank you for joining us.</p>
    </div>
  );
};

// Export as plain object for server components
export default EmailTemplate;