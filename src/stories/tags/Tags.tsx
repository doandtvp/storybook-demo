import React from "react";
import "./tags.scss";

interface TagsProps {
  backgroundColor?: string;
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Tags = ({ backgroundColor, label }: TagsProps) => {
  return (
    <button className="tags" style={{ backgroundColor }}>
      {label}
    </button>
  );
};
