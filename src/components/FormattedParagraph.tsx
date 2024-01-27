import React from 'react';
import { fonts } from '../constants/styles';

interface FormattedParagraphProps {
  text: string;
}
const FormattedParagraph: React.FC<FormattedParagraphProps> = ({
  text,
}: FormattedParagraphProps) => {
  const inputString = text;
  const formatString = (input: string) => {
    const parts = input.split('**');

    return parts.map((part, index) => {
      if (index % 2 === 0) {
        return <>{part}</>;
      } else {
        return <strong key={index}>{part}</strong>;
      }
    });
  };

  return (
    <span
      className={`${fonts['text-normal']} text-justify py-4 px-2 leading-6`}>
      {formatString(inputString)}
    </span>
  );
};
export default FormattedParagraph;
