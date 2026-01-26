import { useState } from "react";

export const useExpandableCard = () => {
  const [expandedId, setExpandedId] = useState(false);

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };
  const isExpanded = (id) => expandedId === id;

  return { expandedId, toggle, isExpanded };
};
