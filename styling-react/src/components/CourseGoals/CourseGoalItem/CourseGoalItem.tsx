import React from 'react';

import './CourseGoalItem.css';

interface Props {
  id: string;
  children?: React.ReactNode;
  onDelete: (id: string) => void;
}

const CourseGoalItem: React.FC<Props> = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
